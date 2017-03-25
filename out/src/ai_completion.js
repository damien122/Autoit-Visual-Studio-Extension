'use strict'

var { languages, Completion, CompletionList, CompletionItemKind, editor, document } = require('vscode')
var fs = require('fs')
var completions = []
var newComp

var files = fs.readdirSync(__dirname + '/completions')
for (var i in files) {
    newComp = require('./completions/' + files[i])
    completions = completions.concat(newComp)
}

const _funcPattern = /Func\s(.+)\(/


// var macros = require('./completions/macros')
// var mainFunctions = require('./completions/mainFunctions')

module.exports = languages.registerCompletionItemProvider(
    { language: 'autoit', scheme: 'file' },
    {
        provideCompletionItems(document, position, token) {
            // Gather the functions created by the user
            var userFunctions = []
            var funcName = ''
            const lineCount = Math.min(document.lineCount, 10000)
            for (let line = 0; line < lineCount; line++) {
                const {text}  = document.lineAt(line)

                funcName = _funcPattern.exec(text)
                if(funcName) {
                    userFunctions.push({ label: funcName[1], kind: CompletionItemKind.Function})
                }

                if(userFunctions) {
                    completions = completions.concat(userFunctions)
                }
            }

            // Get the current word to not look for completions 
            // when the current word starts with a '$', since
            // that blocks Intellisense for variables
            var wordRange = document.getWordRangeAtPosition(position)
            var word = wordRange ? document.getText(wordRange) : ''

            if (word.charAt(0) === '$') {
                return []
            }

            return completions
            
        }
    }
)