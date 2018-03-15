'use strict'

var { languages, SymbolInformation, SymbolKind, Location, Position, 
    workspace } = require('vscode')

const _funcPattern = /Func\s(.+)\(/
const _varPattern = /(\$\w+)/g
var config = workspace.getConfiguration('autoit');

module.exports = languages.registerWorkspaceSymbolProvider({

    provideWorkspaceSymbols(search, token) {
        var files

        // Get list of AutoIt files in workspace
        workspace.findFiles("**/*.{au3,a3x}").then((d)=> {
            files = d
            console.log('---')
            
            console.log(files.toString())
            console.log(files[0])
            console.log('----')

            // Go through each file and grab functions and variables (if active)
            // Filter based on search (if it's not empty)
            // Return the list in the right format
            
        })
        
    }
})
