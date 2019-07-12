'use strict'

const { DefinitionProvider, languages, Location, workspace } = require('vscode')
const { AUTOIT_MODE, isSkippableLine } = require('./util')
const fs = require('fs')


const AutoItDefinitionProvider = {

    provideDefinition(document, position, token) {

        const lookupRange = document.getWordRangeAtPosition(position)
        const lookup = document.getText(lookupRange)
        let defRegex = new RegExp(`Func\\s${lookup}\\(`)
        let scriptText

        if (lookup.charAt(0) == '$') {
            defRegex = new RegExp(`(?:(?:Local|Global|Const)\s)?\\${lookup}\\s?=?`, 'i')
            console.log((`Looking up definition for ${lookup}!`))
        } else {
            console.log(`Looking up definition for ${lookup}()!`)
        }
        
        let found = document.getText().match(defRegex)

        if (found) {
            return new Location(document.uri, document.positionAt(found.index))
        }



        // If nothing was found, search workspace
        // Get workspace files
        
        const workspaceSearch = searchWorkspaceScripts(defRegex, document)

        return workspaceSearch
    }
}

const defProvider = languages.registerDefinitionProvider(AUTOIT_MODE, AutoItDefinitionProvider)

module.exports = defProvider

const searchWorkspaceScripts = (lookup, currentDoc) => {
    let scriptText
    let scriptLine

    let locations = []

    return workspace.findFiles("**/*.{au3,a3x}").then((allFiles) => {
        
        // Loop through each, running regex    
        for (let fileIndex = 0; fileIndex < allFiles.length; fileIndex++) {
            let found
            // Skip originating document
            if (allFiles[fileIndex] == currentDoc.uri) {
                continue
            }

            workspace.openTextDocument(allFiles[fileIndex]).then((script) => {
                const scriptContent = script.getText()
                // skip if the lookup can't be found
                if (lookup.test(scriptContent) == false) {
                    return
                }

                found = scriptContent.match(lookup)

                if (found) {
                    locations.push(new Location(script.uri, script.positionAt(found.index)))
                }
            })
        }
        
        return locations
    })
}