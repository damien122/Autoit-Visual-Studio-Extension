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
        var variables  = []
        let results

        // Get list of AutoIt files in workspace
        return results = workspace.findFiles("**/*.{au3,a3x}").then((data) => {
            
            for (var file in data) {
                // Go through each file and grab functions and variables (if active)
                scriptText = fs.readFileSync(data[file].fsPath).toString().split("\n")
                
                var scriptVariables = scriptText.filter((line, index) => {
                    variableFound = _varPattern.exec(line)
                    // Filter based on search (if it's not empty)
                    if (variableFound) {
                        variables.push(makeSymbol(variableFound[1], SymbolKind.Variable,
                            data[file], index))
                    }
                })
            }

            console.log(variables)
            return variables
        })
    }
})


function makeSymbol(name, type, filePath, docLine) {
    return new SymbolInformation(name, type, '', new Location(filePath, new Position(docLine, 0)))
}
