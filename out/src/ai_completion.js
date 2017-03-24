'use strict'

var { languages, Completion, CompletionList, CompletionItemKind, editor } = require('vscode')
var fs = require('fs')
var completions = []
var newComp

var files = fs.readdirSync(__dirname + '/completions')
for (var i in files) {
    newComp = require('./completions/' + files[i])
    completions = completions.concat(newComp)
}

// var macros = require('./completions/macros')
// var mainFunctions = require('./completions/mainFunctions')

module.exports = languages.registerCompletionItemProvider(
    { language: 'autoit', scheme: 'file' },
    {
        provideCompletionItems(document, position, token) {
            
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