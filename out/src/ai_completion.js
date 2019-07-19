"use strict"

var {
    languages,
    CompletionItem,
    CompletionItemKind,
    window,
    workspace,
} = require("vscode")
var fs = require("fs")
var path = require("path")
var completions = []
var newComp
var currentIncludeFiles = []
var includes = []
const { getIncludeText, getIncludePath } = require("./util")

var files = fs.readdirSync(__dirname + "/completions")
for (var i in files) {
    newComp = require("./completions/" + files[i])
    completions = completions.concat(newComp)
}

const _funcPattern = /Func\s+(\w*)\s*\(/g
const _varPattern = /\$(\w*)/g
const _includePattern = /^\s+#include\s"(.+)"/gm
const LIBRARY_INCLUDE_PATTERN = /^#include\s+<([\w.]+\.au3)>/gm
const { DEFAULT_UDFS } = require("./constants")

module.exports = languages.registerCompletionItemProvider(
    { language: "autoit", scheme: "file" },
    {
        provideCompletionItems(document, position, token) {
            // Gather the functions created by the user
            var added = {}
            var result = []
            var text = document.getText()
            var range = document.getWordRangeAtPosition(position)
            var prefix = range ? document.getText(range) : ""
            var includesCheck = []
            var libraryIncludes = []

            if (!range) {
                range = new Range(position, position)
            }

            var createNewCompletionItem = function(
                kind,
                name,
                strDetail = "Document Function"
            ) {
                var compItem = new CompletionItem(name, kind)
                if (kind == CompletionItemKind.Variable) {
                    strDetail = "Variable"
                }
                compItem.detail = strDetail

                return compItem
            }

            if (prefix[0] === "$") {
                var pattern = null
                while ((pattern = _varPattern.exec(text))) {
                    var varName = pattern[0]
                    if (!added[varName]) {
                        added[varName] = true
                        result.push(
                            createNewCompletionItem(
                                CompletionItemKind.Variable,
                                varName
                            )
                        )
                    }
                }
            }

            var pattern = null
            while ((pattern = _funcPattern.exec(text))) {
                var funcName = pattern[1]
                if (!added[funcName]) {
                    added[funcName] = true
                    result.push(
                        createNewCompletionItem(
                            CompletionItemKind.Function,
                            funcName
                        )
                    )
                }
            }

            // collect the includes of the document
            var pattern = null
            while ((pattern = _includePattern.exec(text))) {
                includesCheck.push(pattern[1])
            }

            // Redo the include collecting if the includes are different
            if (!arraysMatch(includesCheck, currentIncludeFiles)) {
                includes = []
                var includeFunctions = []
                for (var i in includesCheck) {
                    includeFunctions = getIncludeData(includesCheck[i], document)
                    if (includeFunctions) {
                        for (var newFunc in includeFunctions) {
                            includes.push(
                                createNewCompletionItem(
                                    CompletionItemKind.Function,
                                    includeFunctions[newFunc],
                                    "Function from " + includesCheck[i]
                                )
                            )
                        }
                    }
                }
                currentIncludeFiles = includesCheck
            }

            // Collect the library includes
            while ((pattern = LIBRARY_INCLUDE_PATTERN.exec(text))) {
                // Filter out the default UDFs
                let filename = pattern[1].replace(".au3", "")
                if (DEFAULT_UDFS.indexOf(filename) == -1) {
                    libraryIncludes.push(pattern[1])
                }
            }

            let library = []
            for (let file of libraryIncludes) {
                let fullPath = findFilepath(file)
                if (fullPath) {
                    let libraryResults = getIncludeData(fullPath, document)
                    if (libraryResults) {
                        for (var newFunc in libraryResults) {
                            library.push(
                                createNewCompletionItem(
                                    CompletionItemKind.Function,
                                    libraryResults[newFunc],
                                    "Function from " + file
                                )
                            )
                        }
                    }
                }
            }

            result = result.concat(includes, library) //Add either the existing include functions or the new ones to result

            return completions.concat(result)
        },
    },
    ".",
    "$"
)

function getIncludeData(fileName, document) {
    const _includeFuncPattern = /^(?=\S)(?!;~\s)Func\s+(\w+)\s*\(/gm
    var functions = []
    var filePath = getIncludePath(fileName, document)

    var pattern = null
    var fileData = getIncludeText(filePath)

    while ((pattern = _includeFuncPattern.exec(fileData))) {
        functions.push(pattern[1])
    }

    return functions
}

function findFilepath(file) {
    let includePaths = workspace.getConfiguration("autoit").includePaths

    for (const iPath of includePaths) {
        let newPath = path.normalize(iPath + "\\") + file

        if (fs.existsSync(newPath)) {
            return newPath
        }
    }

    return 0
}

function arraysMatch(arr1, arr2) {
    if (arr1.length == arr2.length && arr1.some(v => arr2.indexOf(v) <= 0)) {
        return true
    } else {
        return false
    }
}
