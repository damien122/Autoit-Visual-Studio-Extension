'use strict'

var { languages, Position, SignatureHelp, SignatureInformation, ParameterInformation } = require('vscode')


module.exports = languages.registerSignatureHelpProvider(
    { language: 'autoit', scheme: 'file' },
    {
        provideSignatureHelp(document, position, token) {
            let theCall = frontOfCall(document, position)
            if (theCall == null) {
                return null
            }
            let callerPos = this.prevTokenPos(document, theCall.openParen)
            return definitionLocation(document, callerPos, { language: 'autoit', scheme: 'file' }).then(res => {
                if (!res) {
                    // The definition was not found
                    return null
                }
                if (res.line === callerPos.line) {
                    // This must be a function definition
                    return null
                }
                let result = new SignatureHelp()
                let declarationText, sig
                let si
                declarationText = res.declarationlines[0]
                let funcNameStart = declarationText.indexOf(res.name + '('); // Find 'functionname(' to remove anything before it
                if (funcNameStart > 0) {
                    declarationText = declarationText.substring(funcNameStart)
                }
                si = new SignatureInformation(declarationText, res.doc)
                sig = declarationText.substring(res.name.length)

                si.parameters = parameters(sig).map(paramText =>
                    new ParameterInformation(paramText)
                )
                result.signatures = [si]
                result.activeSignature = 0;
                result.activeParameter = Math.min(theCall.commas.length, si.parameters.length - 1)
                return result
            })
        }
    },
    ',', '('
)

var prevTokenPos = function(doc, pos) {
    while (pos.character > 0) {
        let word = doc.getWordRangeAtPosition(pos)
        if (word) {
            return word.start
        }

        pos = pos.translate(0, -1)
    }
    return null
}

var frontOfCall = function(doc, pos) {
    let currentLine = doc.lineAt(pos.line).text.substring(0, pos.character)
    let parenBalance = 0
    let commas = []

    for (let char = pos.character; char >= 0; char--) {
        switch(currentLine[char]) {
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