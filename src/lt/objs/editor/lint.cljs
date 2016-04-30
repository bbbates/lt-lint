(ns lt.objs.editor.lint
  (:require [lt.object :as object]
            [lt.objs.thread :as thread]
            [lt.objs.console :as console]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [cljs.core.async :as async])
  (:require-macros [lt.macros :refer [behavior background]]
                   [cljs.core.async.macros :refer [go]]))

(object/object* ::linters
                :tags [:linters]
                :by-tag {})

(def ^:private linters (object/create ::linters))
(def ^:private default-timeout 5000)

;; Linter plugin authors: your linter should provide a ::linter object that defines a behavior
;; that reacts to the ::validate event
;; e.g.
;; (object/create :lt.objs.editor.lint/linter
;;                :behaviours [:lt.plugins.some-linter/validate]
;;                :linter-name "Optional linter name")
;; ...
;; (behavior :lt.plugins.some-linter/validate
;;            :triggers #{:lt.objs.editor.lint/validate}
;;            :reaction (fn [this editor-text results-callback] (results-callback (eval-source-text editor-text))))
;; The linters should return a seq of maps that match:
;;
(object/object* ::linter
                :tags [:linter]
                :triggers [::validate]
                :validation-fn (constantly nil))

(defn- validate-with-all-linters
  "Raise ::validate trigger on all given linter objects asynchronously, then pass all the results
  at once to the codemirror linter callback function"
  [& linter-objs]
  (let [validate-chans (map (fn [obj]
                              (let [ch (async/timeout (or (:timeout obj) default-timeout))
                                    callback-fn (fn [results] (async/put! ch results))]
                                [ch callback-fn obj])) linter-objs)]
    (fn [editor-text callback options]
      (doseq [[_ f] validate-chans] (object/raise obj ::validate editor-text f))
      (go
        (let [all-results (mapcat (fn [[ch _ obj]]
                                    (let [res (<! ch)]
                                      (cond (vector? res) res
                                            (nil? res) (console/error (str "No response received from linter " (:linter-name obj)))
                                            (:error res) (console/error (str "Error received from linter " (:linter-name obj)) res)))) validate-chans
                                  validate-chans)]
          (callback all-results))))))

;; Linter plugin authors: register your linter using this behavior
;; Example:
;; [:editor.clojure :lt.objs.editor.lint/register-linter [:lt.plugins.some-linter/linter-object :arg1 val1 :arg2 val2]]

(behavior ::register-linter
          :triggers #{}
          :type :user
          :desc "Editor: Register linter"
          :params [{:label "linter" :example "[:lt.plugins.some-linter/linter-object :arg1 val1 :arg2 val2]"}]
          :reaction (fn [this [linter-obj & args]]
                      (editor/add-gutter this "CodeMirror-lint-markers" 10)
                      (let [ed-tag (first (get-in @this [:info :tags]))
                            obj (apply object/create linter-obj args)
                            new-linters (object/merge! linters (update-in @linters [:by-tag ed-tag] conj obj))
                            validator-fn (apply validate-with-all-linters (:by-tag new-linters))]
                        (editor/set-options this
                                            {:lint {:async true :getAnnotations validator-fn}
                                             :fixedGutter false}))))

;; Notes ---------
(comment
  (:ed @(pool/last-active))
  (editor/set-options (pool/last-active)
                      {:lint {:something :a} :fixedGutter false})
  (editor/add-gutter (pool/last-active) "CodeMirror-lint-markers" 10)

  (register-linter "clojure" (fn [text options]
                               (println "LINT!" text options)
                               #js [ #js {:message "Test error"
                                          :severity "Warning"
                                          :from (js/CodeMirror.Pos 3 0)
                                          :to (js/CodeMirror.Pos 6 20)}]))

  (register-linter "clojure" (fn [text options]
                               (println "OTHER LINT!" text options)
                               #js []))

  (behavior ::linters
            :triggers #{:object.instant}
            :desc "Editor: Linters for editor"
            :exclusive true
            :params [{:label "linters" :example "#{:linter/linter-1 :linter/linter-2}"}]
            :type :user
            :reaction (fn [obj]
                        (set-options obj {:lint {}}))))
