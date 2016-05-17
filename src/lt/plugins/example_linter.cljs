(ns
  ^{:doc "Example Lighttable linter.
    The Linter in this namespace is not automatically added to LT; you will need to add it manually to your user behaviors
    file, using:

    [:editor.markdown :lt.objs.editor.lint/register-linter [:lt.plugins.example-linter/example-word-linter #{\"maybe\" \"open\" \"text\"}]]"}
  lt.plugins.example-linter
  (:require [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior]]))

(object/object* ::example-word-linter
                :behaviors [::lint-words-in-editor]
                :linter-name "Example word linter"
                :init (fn [this ed words] (object/merge! this {:words words})))

(defn- lint-words
  [editor-text words]
  (let [words-to-find (set (map clojure.string/lower-case words))]
    (apply concat (map-indexed (fn [line-no line]
                                 (keep (fn [w]
                                         (let [found-at (.indexOf (clojure.string/lower-case line) w)]
                                           (when (<= 0 found-at)
                                             {:message (str "You can't say the word " w "!")
                                              :severity "error"
                                              :from [line-no found-at]
                                              :to [line-no (+ found-at (count w))]})))
                                       words-to-find))
                               (clojure.string/split editor-text #"\n")))))

(behavior ::lint-words-in-editor
          :triggers #{:lt.objs.editor.lint/validate}
          :reaction (fn [obj editor-text callback _]
                      (callback (lint-words editor-text (:words @obj)))))
