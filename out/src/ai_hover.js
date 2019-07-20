'use strict'

var { languages, Hover } = require('vscode')
import hovers from './hovers'

module.exports = languages.registerHoverProvider(
    { language: 'autoit', scheme: 'file' },
    {
        provideHover(document, position, token) {
            let wordRange = document.getWordRangeAtPosition(position)

            let word = wordRange ? document.getText(wordRange) : ''

            let hover = hovers[Object.keys(hovers).find(
                key => key.toLowerCase() === word.toLowerCase()
            )]

            return new Hover(hover)
        }
    }
)
