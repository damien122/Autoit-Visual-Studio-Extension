'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_HexToString',
        documentation: 'Convert a hex string to a string',
        insertText: '_HexToString(${})'
    },

    {
        label: '_StringBetween',
        documentation: 'Find strings between two string delimiters',
        insertText: '_StringBetween(${})'
    },

    {
        label: '_StringExplode',
        documentation: 'Splits up a string into substrings depending on the given delimiters as PHP Explode v5',
        insertText: '_StringExplode(${})'
    },

    {
        label: '_StringInsert',
        documentation: 'Inserts a string within another string',
        insertText: '_StringInsert(${})'
    },

    {
        label: '_StringProper',
        documentation: 'Changes a string to proper case, same as the =Proper function in Excel',
        insertText: '_StringProper(${})'
    },

    {
        label: '_StringRepeat',
        documentation: 'Repeats a string a specified number of times',
        insertText: '_StringRepeat(${})'
    },

    {
        label: '_StringTitleCase',
        documentation: 'Changes a string to a title case string',
        insertText: '_StringTitleCase(${})'
    },

    {
        label: '_StringToHex',
        documentation: 'Convert a string to a hex string ',
        insertText: '_StringToHex(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <String.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items