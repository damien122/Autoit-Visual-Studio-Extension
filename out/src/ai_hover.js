'use strict'

var { languages, document, Hover } = require('vscode')
var hovers = require('./hovers/ai_functions.json')
var macros = require('./hovers/macros.json')
var udf_array = require('./hovers/udf_array.json')

hovers = Object.assign(hovers, macros, udf_array)

module.exports = languages.registerHoverProvider(
    { language: 'autoit', scheme: 'file' },
    { 
        provideHover(document, position, token) {
            let wordRange = document.getWordRangeAtPosition(position)
            let word = wordRange ? document.getText(wordRange) : ''
            let hover

            hover = hovers[word]

            return new Hover(hover)
        }
    }
)
