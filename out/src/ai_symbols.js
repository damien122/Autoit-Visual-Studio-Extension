'use strict'

var { languages, SymbolInformation, SymbolKind, 
    Location, Position } = require('vscode')

const _funcPattern = /Func\s(.+)\(/

module.exports = languages.registerDocumentSymbolProvider(
    { language: 'autoit', scheme: 'file' },
    {
        provideDocumentSymbols(doc, token) {

            let result = []
            let funcName

            // Get the number of lines in the document to loop through
            const lineCount = Math.min(doc.lineCount, 10000)
            for (let line = 0; line < lineCount; line++) {
                const {text}  = doc.lineAt(line)

                funcName = _funcPattern.exec(text)
                if(funcName) {
                    result.push(new SymbolInformation(funcName[1], SymbolKind.Function, 
                    '', new Location(doc.uri, new Position(line, 0))))
                }
            }

            return result
        }
    }
)
