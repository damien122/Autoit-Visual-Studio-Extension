'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_Degree',
        documentation: 'Converts radians to degrees'
    },
    {
        label: '_MathCheckDiv',
        documentation: 'Checks if first number is divisible by the second number'
    },
    {
        label: '_Max',
        documentation: 'Evaluates which of the two numbers is higher'
    },
    {
        label: '_Min',
        documentation: 'Evaluates which of the two numbers is lower'
    },
    {
        label: '_Radian',
        documentation: 'Converts degrees to radians '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Math.au3>'
}

module.exports = items