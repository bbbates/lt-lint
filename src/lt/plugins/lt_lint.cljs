(ns lt.plugins.lt-lint
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.console :as console]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos]
            [lt.plugins.doc :as doc]
            [lt.plugins.example-linter]
            [cljs.core.async :as async])
  (:require-macros [lt.macros :refer [behavior background]]
                   [cljs.core.async.macros :refer [go go-loop]]))

(object/object* ::linters
                :tags [:linters]
                :by-tag {}
                :behaviors [::lint-handler])

(def ^:private linters (object/create ::linters))
(def ^:private default-timeout 5000)

;; Linter plugin authors: your linter should provide a ::linter object that defines a behavior
;; that reacts to the ::validate event
;; e.g.
;; (object/create :lt.plugins.lt-lint/linter
;;                :behaviours [:lt.plugins.some-linter/validate]
;;                :linter-name "Optional linter name")
;; ...
;; (behavior :lt.plugins.some-linter/validate
;;            :triggers #{:lt.plugins.lt-lint/validate}
;;            :reaction (fn [this editor-text results-callback] (results-callback (eval-source-text editor-text))))

(defn- verify-linter-result
  [obj res]
  (cond (nil? res) (console/error (str "No response received from linter " (:linter-name @obj)))
        (and (map? res) (:error res)) (console/error (str "Error received from linter " (:linter-name @obj)) res)
        (and (coll? res) (not (map? res))) res))

(defn- ->cm-lint-msg
  [{:keys [from to] :as msg}]
  (assoc msg
    :range [from to]
    :from (js/CodeMirror.Pos (first from) (last from))
    :to (js/CodeMirror.Pos (first to) (last to))))

(defn- is-lint-mark?
  [tm]
  (re-find #"^CodeMirror-lint-mark-" (.-className tm)))

(defn lint-messages-for-cursor
  [ed]
  (let [text-marks (editor/find-marks ed (editor/->cursor ed))]
    (seq (filter is-lint-mark? text-marks))))

(defn lint-messages-for-ed
  [ed]
  (let [text-marks (.getAllMarks (editor/->cm-ed ed))]
    (seq (filter is-lint-mark? text-marks))))

(defn lint-messages-for-cursor
  [ed]
  (let [text-marks (editor/find-marks ed (editor/->cursor ed))]
    (seq (filter is-lint-mark? text-marks))))

(defn text-mark->lint-result
  [text-mark]
  (js->clj (.-__annotation text-mark) :keywordize-keys true))

(defn- on-cursor-activity
  [ed]
  (if-let [lint-marks (lint-messages-for-cursor ed)]
    (if (< 1 (count lint-marks))
      (notifos/set-msg! "Multiple lint messages found.")
      (let [annotation (-> lint-marks first text-mark->lint-result)]
        (notifos/set-msg! (:message annotation) {:class (:severity annotation)})))
    (notifos/set-msg! "")))

(defn- validate-with-all-linters
  "Raise ::validate trigger on all given linter objects asynchronously, then pass all the results
  at once to the codemirror linter callback function"
  [ed & linter-objs]
  (fn [editor-text callback options]
    (editor/off ed :cursorActivity (partial on-cursor-activity ed))
    (editor/on ed :cursorActivity (partial on-cursor-activity ed))
    (let [validate-chans (map (fn [obj]
                                (let [ch (async/timeout (or (:timeout @obj) default-timeout))
                                      callback-fn (fn [results]
                                                    (go
                                                      (async/>! ch (map #(assoc % :from-linter obj) results))))]
                                  [ch callback-fn obj]))
                              linter-objs)]
      (doseq [[_ f obj] validate-chans] (object/raise obj ::validate editor-text f ed))
      (go-loop [[[ch _ obj] & r :as c] validate-chans results []]
               (let [res (verify-linter-result obj (async/<! ch))
                     results+res (if res (conj results res) results)]
                 (if (seq r)
                   (recur r results+res)
                   (callback (clj->js (map ->cm-lint-msg (apply concat results+res))))))))))

(defn- add-linter
  [linters linter-obj ed args]
  (let [obj (apply object/create linter-obj ed args)]
    (->
      (remove #(= (:lt.object/type (deref %)) linter-obj) linters)
      (conj obj))))

(defn- start-lint!
  [linters ed editor-text callback options]
  (let [ed-tag (first (get-in @ed [:info :tags]))]
    ((apply validate-with-all-linters ed (get-in @linters [:by-tag ed-tag])) editor-text callback options)))

(behavior ::lint-handler
          :triggers #{::start-lint!}
          :reaction start-lint!)

(defn- editor-linting
  [ed editor-text callback options]
  (object/raise linters ::start-lint! ed editor-text callback options))

(defn- set-cm-lint-settings!
  [ed]
  (let [{:keys [lint? auto? change-timeout] :or {auto? true change-timeout 500}} (-> @ed :info ::settings)]
    (editor/set-options ed
                        {:lint (when lint? #js {:async true
                                                :getAnnotations (partial editor-linting ed)
                                                :lintOnChange auto?
                                                :delay change-timeout})
                         :fixedGutter false})))

(defn- prepare-editor-for-linter
  [ed [linter-obj & args]]
  (editor/add-gutter ed "CodeMirror-lint-markers" 10)
  (let [ed-tag (first (get-in @ed [:info :tags]))
        new-linters (object/merge! linters (update-in @linters [:by-tag ed-tag] add-linter linter-obj ed args))]
    (object/merge! ed (update-in @ed [:info ::settings] merge {:lint? true}))
    (set-cm-lint-settings! ed)
    (:ed @ed)))

;; Linter plugin authors: register your linter using this behavior
;; Example:
;; [:editor.clojure :lt.plugins.lt-lint/register-linter [:lt.plugins.some-linter/linter-object :arg1 val1 :arg2 val2]]
(behavior ::register-linter
          :triggers #{:object.instant}
          :type :user
          :desc "Linting: Register linter"
          :params [{:label "linter" :example "[:lt.plugins.some-linter/linter-object :opt-arg1 val1 :opt-arg2 val2 ...]"}]
          :reaction prepare-editor-for-linter)

;; Linters can be set to be run manually only using this behavior
(behavior ::auto-linting-properties
          :triggers #{:object.instant}
          :type :user
          :desc "Linting: Auto linting settings"
          :params [{:label "enabled?" :type :boolean} {:label "change timeout" :type :number}]
          :reaction (fn [ed enabled? change-timeout]
                      (object/merge! ed (update-in @ed [:info ::settings] merge {:auto? enabled? :change-timeout change-timeout}))
                      (set-cm-lint-settings! ed)))

(cmd/command {:command ::run-linters!
              :desc "Linting: run linters for current editor"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (.performLint (editor/->cm-ed ed))))})

(defn- doc-message-text
  [{:keys [message from-linter]}]
  (str (:linter-name @from-linter) ":\n\n" message))

(defn- inline-doc-for-lint-messages
  [msgs]
  {:loc {:line (.-line (:to (first msgs)))}
   :name "Lint results"
   :doc (clojure.string/join "\n\n" (map doc-message-text msgs))})

(defn show-lint-message
  [ed lint-messages]
  (object/raise ed :editor.doc.show! (inline-doc-for-lint-messages lint-messages)))

(defn doc-shown-for-lint-message?
  [ed lint-messages]
  (let [lines-in-lint-messages (set (mapcat (juxt (comp ffirst :range) (comp first last :range)) lint-messages))]
    (some (partial doc/doc-on-line? ed)
          (range (apply min lines-in-lint-messages) (inc (apply max lines-in-lint-messages))))))

(defn toggle-lint-message
  [ed]
  (if-let [lint-messages (map text-mark->lint-result (lint-messages-for-cursor ed))]
    (let [loc (editor/->cursor ed)]
      (if-let [cur (doc-shown-for-lint-message? ed lint-messages)]
        (doc/remove! ed cur)
        (show-lint-message ed lint-messages)))
    (notifos/set-msg! "No lint message found at cursor..." {:class "error"})))

(defn toggle-all-lint-messages
  [ed]
  (when-let [lint-messages (map text-mark->lint-result (lint-messages-for-ed ed))]
    (let [all-shown? (or (get-in @ed [:info ::settings :all-shown?]) false)]
      (doseq [msg lint-messages]
        (dissoc msg :from-linter)
        (if all-shown?
          (when-let [cur (doc-shown-for-lint-message? ed [msg])]
            (doc/remove! ed cur))
          (when-not (doc-shown-for-lint-message? ed [msg])
            (show-lint-message ed [msg]))))
      (object/merge! ed (update-in @ed [:info ::settings] merge {:all-shown? (not all-shown?)})))))

(cmd/command {:command ::toggle-lint-message
              :desc "Linting: toggle lint message"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (toggle-lint-message ed)))})

(cmd/command {:command ::toggle-all-lint-messages
              :desc "Linting: toggle all lint messages in editor"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (toggle-all-lint-messages ed)))})


;; Notes ---------
(comment
  ;; current editor
  (:ed @(pool/last-active))

  ;; remove all linters
(object/merge! linters {:by-tag {}})

  ;; add linter to this editor
  (prepare-editor-for-linter (pool/last-active) [::dummy-linter])

  ;; dummy linter
  (object/object* ::dummy-linter
                  :triggers [::validate]
                  :behaviors [::dummy-validate]
                  :linter-name "Dummy linter")

  ;; dummy linter
  (behavior ::dummy-validate
            :triggers #{::validate}
            :reaction (fn [_ editor-text callback]
                        (callback [{:message "Test error"
                                    :severity "Warning"
                                    :from [1 0]
                                    :to [2 20]}]))))
