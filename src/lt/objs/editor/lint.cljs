(ns lt.objs.editor.lint
  (:require [lt.object :as object]
            [lt.objs.thread :as thread]
            [lt.objs.console :as console]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [cljs.core.async :as async])
  (:require-macros [lt.macros :refer [behavior background]]
                   [cljs.core.async.macros :refer [go go-loop]]))

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
;; TODO: do we need this?
;; (object/object* ::linter
;;                 :tags [:linter]
;;                 :triggers [::validate])

(defn- verify-linter-result
  [obj res]
  (cond (vector? res) res
        (nil? res) (console/error (str "No response received from linter " (:linter-name @obj)))
        (:error res) (console/error (str "Error received from linter " (:linter-name @obj)) res)))

(defn- validate-with-all-linters
  "Raise ::validate trigger on all given linter objects asynchronously, then pass all the results
  at once to the codemirror linter callback function"
  [& linter-objs]
  (fn [editor-text callback options]
    (let [validate-chans (map (fn [obj]
                                (let [ch (async/timeout (or (:timeout @obj) default-timeout))
                                      callback-fn (fn [results] (go (async/>! ch results)))]
                                  [ch callback-fn obj])) linter-objs)]
      (doseq [[_ f obj] validate-chans] (object/raise obj ::validate editor-text f))
      (go-loop [[[ch _ obj] & r] validate-chans results []]
               (let [res (verify-linter-result obj (async/<! ch))
                     results+res (if res (conj results res) results)]
                 (if (seq r)
                   (recur r results+res)
                   (callback (clj->js (apply concat results+res)))))))))

(defn- add-linter
  [linters linter-obj args]
  (if-not (seq (filter #(= (:lt.object/type (deref %)) linter-obj) linters))
    (let [obj (apply object/create linter-obj args)]
      (conj linters obj))
    linters))

(defn- prepare-editor-for-linter
  [ed [linter-obj & args]]
  (editor/add-gutter ed "CodeMirror-lint-markers" 10)
  (let [ed-tag (first (get-in @ed [:info :tags]))
        new-linters (object/merge! linters (update-in @linters [:by-tag ed-tag] add-linter linter-obj args))
        validator-fn (apply validate-with-all-linters (get-in new-linters [:by-tag ed-tag]))]
    (editor/set-options ed
                        {:lint #js {:async true :getAnnotations validator-fn}
                         :fixedGutter false})))

;; Linter plugin authors: register your linter using this behavior
;; Example:
;; [:editor.clojure :lt.objs.editor.lint/register-linter [:lt.plugins.some-linter/linter-object :arg1 val1 :arg2 val2]]
(behavior ::register-linter
          :triggers #{}
          :type :user
          :desc "Editor: Register linter"
          :params [{:label "linter" :example "[:lt.plugins.some-linter/linter-object :opt-arg1 val1 :opt-arg2 val2 ...]"}]
          :reaction (fn [this linter] (prepare-editor-for-linter this linter)))

;; Notes ---------
(comment
  (:ed @(pool/last-active))
(object/merge! linters {:by-tag {}})
  (prepare-editor-for-linter (pool/last-active) [::dummy-linter])

  (object/object* ::dummy-linter
                  :triggers [::validate]
                  :behaviors [::dummy-validate]
                  :linter-name "Dummy linter")

  (behavior ::dummy-validate
            :triggers #{::validate}
            :reaction (fn [_ editor-text callback]
                        (println "LINTING!" editor-text)
                        (callback [{:message "Test error"
                                    :severity "Warning"
                                    :from (js/CodeMirror.Pos 1 0)
                                    :to (js/CodeMirror.Pos 6 20)}])))
)
