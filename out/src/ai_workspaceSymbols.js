'use strict'

var { languages, SymbolInformation, SymbolKind, Location, Position, 
    workspace, Uri } = require('vscode')
const fs = require('fs')

const _funcPattern = /Func\s(.+)\(/
const _varPattern = /(\$\w+)/g
var config = workspace.getConfiguration('autoit');

module.exports = languages.registerWorkspaceSymbolProvider({

    provideWorkspaceSymbols(search, token) {
        let symbols  = []
        
        
        // Don't start searching when it's empty
        if (!search) {
            return []
        }
        search = search.replace('$', '\\$') // Enable searching for leading $ oif 
        let searchFilter = new RegExp(search, 'i')
        
        // Get list of AutoIt files in workspace
        return workspace.findFiles("**/*.{au3,a3x}").then((data) => {
            
            for (var file in data) {
                let foundVars = []
                // Go through each file and grab functions and variables (if active)
                let scriptText = fs.readFileSync(data[file].fsPath).toString().split("\n").filter((line, index) => {

                    let newName = ""
                    let symbolKind
                    let variableFound = _varPattern.exec(line)
                    let functionFound = _funcPattern.exec(line)
                    
                    if (variableFound && config.showVariablesInGoToSymbol) {
                        newName = variableFound[1]
                        // Filter based on search (if it's not empty)
                        if (!searchFilter.exec(newName)) {
                            return false
                        }
                        symbolKind = SymbolKind.Variable
                        
                        if (foundVars.indexOf(newName) === -1) {
                            foundVars.push(newName)
                        } else {
                            return false
                        }

                    } else if (functionFound) {
                        newName = functionFound[1]
                        if (!searchFilter.exec(newName)) {
                            return false
                        }
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
