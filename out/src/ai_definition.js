'use strict'

const { DefinitionProvider, languages, Location } = require('vscode')
const { AUTOIT_MODE, isSkippableLine } = require('./util')



const AutoItDefinitionProvider = {

    provideDefinition(document, position, token) {

        const lookupRange = document.getWordRangeAtPosition(position)
        const lookup = document.getText(lookupRange)
        let defRegex = new RegExp(`Func\\s${lookup}\\(`)

        console.log(`Looking up definition for ${lookup}!`)

        
        if (lookup.charAt(0) == '$') {
            defRegex = new RegExp(`(?:(?:Local|Global|Const)\s)?\\${lookup}\\s?=?`, 'i')
        }
        
        // Search current document for definition first
        for (let lineNum = 0; lineNum < document.lineCount; lineNum++) {
            const line = document.lineAt(lineNum)
            const lineText = line.text

            if (isSkippableLine(line)) {
                continue
            }

            if (lineText.match(defRegex)) {
                return new Location(document.uri, line.range)
            }
        }
    }
}

const defProvider = languages.registerDefinitionProvider(AUTOIT_MODE, AutoItDefinitionProvider)

module.exports = defProvider