'use strict'

var { languages, document, Hover } = require('vscode')

module.exports = languages.registerHoverProvider(
    { language: 'autoit', scheme: 'file' },
    { 
        provideHover(document, position, token) {
            let wordRange = document.getWordRangeAtPosition(position)
            // let lineText = document.lineAt(position.line).text
            let word = wordRange ? document.getText(wordRange) : ''
            let hover

            switch(word) {
                case 'ClipGet':
                    hover = '(function) Retrieves text from the clipboard.'
                    break
                default:
                    break;
            }

            return new Hover(hover)
        }
    }
)
