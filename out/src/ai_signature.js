'use strict'

var { languages, Position, SignatureHelp, SignatureInformation, ParameterInformation } = require('vscode')
var mergeJSON = require('merge-json')

var mainFunctions = require('./signatures/functions.json')
var udfs = require('./signatures/udfs.json')

var signatures = mergeJSON.merge(mainFunctions, udfs)

module.exports = languages.registerSignatureHelpProvider({ language: 'autoit', scheme: 'file' }, {
    provideSignatureHelp(document, position, token) {
        // console.log("Actually getting into signature code")
        // Find out what called for sig
        let caller = startOfCall(document, position)
        if (caller == null) {
            return null
        }
        let callPos = previousPosition(document, caller.openParen)
        let callWord = document.getText(document.getWordRangeAtPosition(callPos))

        //Get the called word from the json files
        let foundSig = signatures[callWord]
        if (foundSig == null) {
            return null
        }


        // let declarationText, sig
        let result = new SignatureHelp()
        let si = new SignatureInformation(foundSig.label, foundSig.documentation)
            //Enter parameter information into signature information
        si.parameters = foundSig.params

        //Place signature information into results
        result.signatures = [si]
        result.activeSignature = 0
        result.activeParameter = Math.min(caller.commas.length, si.parameters.length - 1)

        return result
    }
}, '(', ',')


function startOfCall(doc, pos) {
    let currentLine = doc.lineAt(pos.line).text.substring(0, pos.character)
    let parenBalance = 0
    let commas = []

    for (let char = pos.character; char >= 0; char--) {
        switch (currentLine[char]) {
            case '(':
                parenBalance--
                if (parenBalance < 0) {
                    return {
                        openParen: new Position(pos.line, char),
                        commas: commas
                    }
                }
                break
            case ')':
                parenBalance++
                break
            case ',':
                if (parenBalance === 0) {
                    commas.push(new Position(pos.line, char))
                }
        }
    }
    return null
}

function previousPosition(doc, pos) {
    while (pos.character > 0) {
        let word = doc.getWordRangeAtPosition(pos)
        if (word) {
            return word.start
        }
        pos = pos.translate(0, -1)
    }
    return null
}