(ns
  ^{:doc "Example Lighttable linter.
    The Linter in this namespace is not automatically added to LT; you will need to add it manually to your user behaviors
    file, using:
    TODO
    "}
  lt.plugins.example-linter
  (:require [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior]]))

(object/object* ::whom-linter
                :triggers [:lt.objs.editor.lint/validate]
                :behaviors [::mark-whoms]
                :linter-name "Whom text linter")



(behavior ::dummy-validate
          :triggers #{::validate}
          :reaction (fn [editor-text callback]

                      (callback [{:message "Test error"
                                  :severity "Warning"
                                  :from (js/CodeMirror.Pos 1 0)
                                  :to (js/CodeMirror.Pos 6 20)}])))
