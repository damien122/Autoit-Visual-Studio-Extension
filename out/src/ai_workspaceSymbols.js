'use strict'

var { languages, SymbolInformation, SymbolKind, Location, Position, 
    workspace, Uri } = require('vscode')
const fs = require('fs')

const _funcPattern = /Func\s(.+)\(/
const _varPattern = /(\$\w+)\s*=/g
var config = workspace.getConfiguration('autoit');

module.exports = languages.registerWorkspaceSymbolProvider({

    provideWorkspaceSymbols(search, token) {
        var scriptText
        var variableFound
        var functionFound
        var symbols  = []
        var searchFilter

        // Get list of AutoIt files in workspace
        return workspace.findFiles("**/*.{au3,a3x}").then((data) => {
            
            for (var file in data) {
                // Go through each file and grab functions and variables (if active)
                scriptText = fs.readFileSync(data[file].fsPath).toString().split("\n")
                
                var scriptVariables = scriptText.filter((line, index) => {
                    let newName = ""
                    let symbolKind
                    variableFound = _varPattern.exec(line)
                    functionFound = _funcPattern.exec(line)

                    searchFilter = new RegExp(search, 'i')
                    // Filter based on search (if it's not empty)
                    if (variableFound) {
                        newName = variableFound[1]
                        symbolKind = SymbolKind.Variable
                        
                    } else if (functionFound) {
                        newName = functionFound[1]
                        symbolKind = SymbolKind.Function
                        
                    } else {
                        return false
                    }

                    symbols.push(makeSymbol(newName, symbolKind, data[file], index))
                })
            }

            return symbols
        })
    }
})


function makeSymbol(name, type, filePath, docLine) {
    return new SymbolInformation(name, type, '', new Location(filePath, new Position(docLine, 0)))
}
