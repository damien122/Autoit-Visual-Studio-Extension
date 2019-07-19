"use strict"

const {
    DefinitionProvider,
    languages,
    Location,
    Position,
    workspace,
    Uri,
} = require("vscode")
const {
    AUTOIT_MODE,
    isSkippableLine,
    getIncludePath,
    getIncludeText,
} = require("./util")
const fs = require("fs")
const path = require("path")

const AutoItDefinitionProvider = {
    provideDefinition(document, position, token) {
        const lookupRange = document.getWordRangeAtPosition(position)
        const lookup = document.getText(lookupRange)
        const docText = document.getText()
        let defRegex = new RegExp(`Func\\s${lookup}\\(`)
        const includePattern = /^\s*#include\s"(.+)"/gm

        if (lookup.charAt(0) == "$") {
            defRegex = new RegExp(
                `(?:(?:Local|Global|Const)\s)?\\${lookup}\\s?=?`,
                "i"
            )
            console.log(`Looking up definition for ${lookup}!`)
        } else {
            console.log(`Looking up definition for ${lookup}()!`)
        }

        let found = docText.match(defRegex)

        if (found) {
            return new Location(document.uri, document.positionAt(found.index))
        }

        // If nothing was found, search include files
        let scriptsToSearch = []
        while ((found = includePattern.exec(docText))) {
            scriptsToSearch.push(found[1])
        }

        if (Array.isArray(scriptsToSearch) && scriptsToSearch.length) {
            let scriptFind = null
            let found = null
            for (let i = 0; i < scriptsToSearch.length; i++) {
                let scriptPath = getIncludePath(scriptsToSearch[i], document)
                let scriptContent = getIncludeText(scriptPath)

                found = scriptContent.match(defRegex)

                if (found) {
                    let line = scriptContent.slice(0, found.index).match(/\n/g).length

                    return new Location(
                        Uri.file(scriptPath),
                        new Position(line, found.index)
                    )
                }
            }
        }
    },
}

const defProvider = languages.registerDefinitionProvider(
    AUTOIT_MODE,
    AutoItDefinitionProvider
)

module.exports = defProvider
