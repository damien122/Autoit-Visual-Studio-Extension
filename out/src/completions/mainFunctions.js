'use strict'

var { CompletionItemKind, SnippetString } = require('vscode')

var items = [
    {
        label: 'Abs',
        documentation: 'Calculates the absolute value of a number.',
        insertText: new SnippetString('Abs(${expression})')
    },
    {
        label: 'ACos',
        documentation: 'Calculates the arcCosine of a number.',
        insertText: new SnippetString('ACos(${expression})')
    },
    {
        label: 'AdlibRegister',
        documentation: 'Registers an Adlib function.',
        insertText: new SnippetString('AdlibRegister(${"function"}, ${time})')
    },
    {
        label: 'ASin',
        documentation: 'Calculates the arcsine of a number.',
        insertText: new SnippetString('ASin(${expression})')
    },
    {
        label: 'ClipGet',
        documentation: 'Path to current user\'s Roaming Application Data',
        insertText: 'ClipGet()'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Function'
}

module.exports = items
