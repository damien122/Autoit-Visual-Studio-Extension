'use strict'

var { languages, CompletionItem, CompletionItemKind, window } = require('vscode')
var fs = require('fs')
var path = require('path')
var completions = []
var newComp
var currentIncludeFiles = []
var includes = []

var files = fs.readdirSync(__dirname + '/completions')
for (var i in files) {
    newComp = require('./completions/' + files[i])
    completions = completions.concat(newComp)
}

const _funcPattern = /Func\s+(\w*)\s*\(/g;
const _varPattern = /\$(\w*)/g;
const _includePattern = /#include\s"(.+)"/g

module.exports = languages.registerCompletionItemProvider({ language: 'autoit', scheme: 'file' }, {
    provideCompletionItems(document, position, token) {
        // Gather the functions created by the user
        var added = {};
        var result = [];
        var text = document.getText();
        var range = document.getWordRangeAtPosition(position);
        var prefix = range ? document.getText(range) : '';
        var includesCheck = []

        if (!range) {
            range = new Range(position, position);
        }

        var createNewCompletionItem = function (kind, name, strDetail = 'Document Function') {
            var compItem = new CompletionItem(name, kind);
            if (kind == CompletionItemKind.Variable) {
                strDetail = 'Variable';
            }
            compItem.detail = strDetail;

            return compItem;
        };

        if (prefix[0] === '$') {
            var pattern = null;
            while (pattern = _varPattern.exec(text)) {
                var varName = pattern[0];
                if (!added[varName]) {
                    added[varName] = true;
                    result.push(createNewCompletionItem(CompletionItemKind.Variable, varName));
                }
            }
        }

        var pattern = null;
        while (pattern = _funcPattern.exec(text)) {
            var funcName = pattern[1];
            if (!added[funcName]) {
                added[funcName] = true;
                result.push(createNewCompletionItem(CompletionItemKind.Function, funcName));
            }
        }

        // collect the includes of the document
        var pattern = null
        while (pattern = _includePattern.exec(text)) {
            includesCheck.push(pattern[1])
        }

        // Redo the include collecting if the includes are different
        if (!arraysMatch(includesCheck, currentIncludeFiles)) {
            includes = []
            var includeFunctions = []
            for (var i in includesCheck) {
                includeFunctions = getIncludeData(includesCheck[i])
                if (includeFunctions) {
                    for (var newFunc in includeFunctions) {
                        includes.push(createNewCompletionItem(CompletionItemKind.Function, includeFunctions[newFunc], 'Function from ' + includesCheck[i]))
                    }
                }        
            }
            currentIncludeFiles = includesCheck
        }
        
        result = result.concat(includes) //Add either the existing include functions or the new ones to result

        return completions.concat(result);
    }
}, '.', '$')

function getIncludeData(fileName) {
    // console.log(fileName)
    const _includeFuncPattern = /^(?=\S)(?!;~\s)Func\s+(\w+)\s*\(/
    var functions = []
    var filePath = ""

    if (fileName.charAt(1) == ':') {
        filePath = fileName
    } else {
        console.log(path.dirname(window.activeTextEditor.document.fileName))
        filePath = path.normalize(path.dirname(window.activeTextEditor.document.fileName) + 
        (fileName.charAt(0) == '\\' || '\/' ? '' : '\\') +
        fileName)
    }
    filePath = filePath.charAt(0).toUpperCase() + filePath.slice(1)

    var pattern = null
    var fileData = fs.readFileSync(filePath)
    var fileArray = fileData.toString().split("\n")

    var funcLines = fileArray.filter((line) => {
        pattern = _includeFuncPattern.exec(line)
        if (pattern) {
            functions.push(pattern[1])
        }
        return pattern
    })

    //console.log(funcLines)
    return (functions)
}

function arraysMatch(arr1, arr2) {
    if (arr1.length == arr2.length &&
        arr1.some((v) => arr2.indexOf(v) <= 0)) {
        return true
    } else {
        return false
    }
}