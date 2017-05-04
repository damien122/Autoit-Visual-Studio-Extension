'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_Degree',
        documentation: 'Converts radians to degrees',
        insertText: '_Degree(${})'
    },
    {
        label: '_MathCheckDiv',
        documentation: 'Checks if first number is divisible by the second number',
        insertText: '_MathCheckDiv(${})'
    },
    {
        label: '_Max',
        documentation: 'Evaluates which of the two numbers is higher',
        insertText: '_Max(${})'
    },
    {
        label: '_Min',
        documentation: 'Evaluates which of the two numbers is lower',
        insertText: '_Min(${})'
    },
    {
        label: '_Radian',
        documentation: 'Converts degrees to radians ',
        insertText: '_Radian(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Math.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items