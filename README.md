# Linters for LightTable: ```Linting```

Base plugin for enabling editor linter addons for LightTable.

Does not actually provide any (useful) linters; it is a base dependency for linter plugins, and provides a consistent
set of UI behaviours and commands for other linter plugins to make use of.

![Example Image](https://raw.githubusercontent.com/bbbates/lt-lint/master/doc/example.gif)

The lt-lint plugin uses the codemirror lint.js addon, but adds a couple of extra "improvements":

- The ability to have multiple linters for a single buffer
- Linter messages are displayed via keyboard/commands rather than by mouse interactions (phooey).

## For users

Linter plugins that use lt-lint should generally be bound and run automatically in your favourite language's editor.
Linters are automatically run 500ms after a change, which may be a bit much, especially for slower linters. You can change the delay in running the linters for an editor or turn off automatic linting for the editor altogether; you can set these both with the following behaviour:

```
[:editor.lang :lt.plugins.lt-lint/auto-linting-properties false 1000] ;; set the first arg to turn off automatic linting for the given editor
[:editor.lang :lt.plugins.lt-lint/auto-linting-properties true 3000] ;; automatically lint, but wait for 3s first
```

If you turn automatic linting off, you can run all linters for the current editor with the ```Linting: run linters for current editor``` command.

### Lint messages

![Lint mark](https://raw.githubusercontent.com/bbbates/lt-lint/master/doc/lint-mark.png)

Messages from the linter can be shown by placing the cursor on the underlined text, and using the ```Linting: toggle lint message``` command.

![Lint message](https://raw.githubusercontent.com/bbbates/lt-lint/master/doc/lint-message.png)

## For plugin authors

Writing linter plugins was designed to be fairly easy.

To contribute a linter for an editor, you need 3 things:

1) A linter object that has contains the following keys:

```:linter-name``` -> a name of the linter to be run
```:timeout``` -> (optional) how long the linter plugin should wait for a response from your linter

For example:

```
(require '[lt.object :as object])

(object/object* :example-word-linter
                :behaviors [::lint-words-in-editor]
                :linter-name "Example word linter"
                :init (fn [this ed words] (object/merge! this {:words words})))
```

2) A behaviour to handle the ```:lt.plugins.lt-lint/validate``` event.
The :reaction function must be a function with the following signature:

``` [this editor-text f ed] ```
where:
- editor-text -> the complete text of the editor/buffer
- f -> callback function applied with the results of the linting
- ed -> a reference to the editor object being linted

Results of the linter are a seq of linter messages - maps that should match the following:
```
{:message "Message shown under the line/tokens"
 :severity :error  ;; or :warning - this will display the underline and lint marker in yellow
 :from [line column] ;; both line and column are 0 based
 :to [line column]
 }
```

For example:
```
(behavior ::lint-words-in-editor
          :triggers #{:lt.plugins.lt-lint/validate}
          :reaction (fn [obj editor-text callback _]
                      (callback (lint-words editor-text (:words @obj)))))
```

The example\_linter.cljs file in this project contains a simple little example of a linter.

3) The linter needs to be registered via the ```:lt.plugins.lt-lint/register-linter``` behaviour

```
  [:editor.lang :lt.plugins.lt-lint/register-linter [:example-word-linter #{"foo" "bar" "text"}]] ;; register the linter using the object defined in 1. Args after the object keyword are passed to the init fn of the object.
  [:editor.lang :lt.object/add-tag :docable] ;; you may need to ensure the editor lang your linting can display underline docs - this behaviour will ensure that
```


## Linters using this plugin

- [lt-clojure-linter](https://github.com/bbbates/lt-clojure-linter)
- [lt-jshint](https://github.com/bbbates/lt-jshint)
- [lt-css-lint](https://github.com/bbbates/lt-css-lint)
- [lt-eslint](https://github.com/bbbates/lt-eslint)

## License

Copyright © 2016 Brendan Bates

Distributed under the Eclipse Public License, the same as Clojure.
