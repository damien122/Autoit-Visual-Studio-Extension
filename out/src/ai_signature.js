'use strict'

var { languages, Position, SignatureHelp, SignatureInformation, ParameterInformation, MarkdownString } = require('vscode')
var mergeJSON = require('merge-json')
var fs = require('fs')
var path = require('path')
var mainFunctions = require('./signatures/functions.json')
var udfs = require('./signatures/udfs.json')

var defaultSigs = mergeJSON.merge(mainFunctions, udfs)
var currentIncludeFiles = []
var includes = {}

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

        //Integrate user functions
        var signatures = mergeJSON.merge(defaultSigs, getIncludes(document))

        //Get the called word from the json files
        let foundSig = signatures[callWord]
        if (foundSig == null) {
            return null
        }


        // let declarationText, sig
        let result = new SignatureHelp()
        let si = new SignatureInformation(foundSig.label, 
            new MarkdownString("*" + foundSig.documentation + "*"))
            //Enter parameter information into signature information
        foundSig.params.forEach(element => {
            si.parameters.push(new ParameterInformation(element.label, 
                new MarkdownString(element.documentation)))
        })

        //Place signature information into results
        result.signatures = [si]
        result.activeSignature = 0
        result.activeParameter = caller.parameter

        return result
    }
}, '(', ',')


function startOfCall(doc, pos) {
    // let currentLine = doc.lineAt(pos.line).text.substring(0, pos.character)
    let currentLine = doc.lineAt(pos.line).text
    // let parenBalance = 0
    let commas = []
    const commaRegex = /(?!\B["'][^"']*),(?![^"']*['"]\B)/g
    let commaSearch

    var openParen = currentLine.search(/\(/) // Get the position of the opening paren
    if (openParen === -1) {
        return null
    }

    // Find all the commas not inside quotes
    while ((commaSearch = commaRegex.exec(currentLine)) !== null) {
        commas.push(new Position(pos.line, commaSearch.index))
    }

    // Determine which parameter the current position falls under
    var parameter = -1
    for (var p in commas) {
        if (pos.character <= commas[p].character) {
            parameter = parseInt(p)
            break
        }
    }
    if (parameter === -1) { //set outside if there are too many commas
        parameter = commas.length
    }

    return {
        openParen: new Position(pos.line, openParen),
        commas: commas,
        parameter: parameter
    }
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

function getIncludes(doc) { // determines whether includes should be re-parsed or not.
    var text = doc.getText()
    var pattern = null
    const includePattern = /^\s+#include\s"(.+)"/gm
    var includesCheck = []

    while (pattern = includePattern.exec(text)) {
        includesCheck.push(pattern[1])
    }

    if (!arraysMatch(includesCheck, currentIncludeFiles)) {
        includes = {}
        for (var i in includesCheck) {
            var newIncludes = getIncludeData(includesCheck[i], doc)
            Object.assign(includes, newIncludes)
        }
        currentIncludeFiles = includesCheck
    }

    return includes
}

function getIncludeData(fileName, doc) {
    // console.log(fileName)
    const _includeFuncPattern = /(?=\S)(?!;~\s)Func\s+((\w+)\((.+)\))/g
    var functions = {}
    var filePath = ""

    if (fileName.charAt(1) == ':') {
        filePath = fileName
    } else {
        filePath = path.normalize(path.dirname(doc.fileName) + 
        ((fileName.charAt(0) == '\\' || fileName.charAt(0) == '\/') ? '' : '\\') +
        fileName)
    }
    filePath = filePath.charAt(0).toUpperCase() + filePath.slice(1)
    
    var pattern = null
    var fileData = fs.readFileSync(filePath).toString()
    
    while ((pattern = _includeFuncPattern.exec(fileData)) !== null) {
        functions[pattern[2]] = { 
                label: pattern[1],
                params: getParams(pattern[3]) 
            }
    }

    return functions
}

function getParams(paramText) {
    var params = paramText.split(",")

    for (var p in params) {
        params[p] = { label: params[p].trim() }
    }
    
    return params
}


function arraysMatch(arr1, arr2) {
    if (arr1.length == arr2.length &&
        arr1.some((v) => arr2.indexOf(v) <= 0)) {
        return true
    } else {
        return false
    }
}