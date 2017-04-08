'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_ChooseColor',
        documentation: 'Creates a Color dialog box that enables the user to select a color',
        insertText: '_ChooseColor(${})'
    },

    {
        label: '_ChooseFont',
        documentation: 'Creates a Font dialog box that enables the user to choose attributes for a logical font',
        insertText: '_ChooseFont(${})'
    },

    {
        label: '_ClipPutFile',
        documentation: 'Copy Files to Clipboard Like Explorer does',
        insertText: '_ClipPutFile(${})'
    },

    {
        label: '_IsPressed',
        documentation: 'Check if key has been pressed',
        insertText: '_IsPressed(${})'
    },

    {
        label: '_MouseTrap',
        documentation: 'Confine the Mouse Cursor to specified coords',
        insertText: '_MouseTrap(${})'
    },

    {
        label: '_Singleton',
        documentation: 'Enforce a design paradigm where only one instance of the script may be running',
        insertText: '_Singleton(${})'
    },

    {
        label: '_VersionCompare',
        documentation: 'Compares two file versions for equality ',
        insertText: '_VersionCompare(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Misc.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items