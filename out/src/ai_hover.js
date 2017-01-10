'use strict'

var { languages, document, Hover } = require('vscode')
var hovers = require('./hovers.json')

module.exports = languages.registerHoverProvider(
    { language: 'autoit', scheme: 'file' },
    { 
        provideHover(document, position, token) {
            let wordRange = document.getWordRangeAtPosition(position)
            // let lineText = document.lineAt(position.line).text
            let word = wordRange ? document.getText(wordRange) : ''
            let hover

            hover = hovers[word]

            return new Hover(hover)
        }
    }
)
