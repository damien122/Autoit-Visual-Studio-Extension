'use strict'

var { languages, Hover } = require('vscode')
var fs = require('fs')
var hovers = {}
var addJSON

var files = fs.readdirSync(__dirname + '/hovers')
for (var i in files)  {
    addJSON = require('./hovers/' + files[i])
    hovers = Object.assign(hovers, addJSON)
}

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
