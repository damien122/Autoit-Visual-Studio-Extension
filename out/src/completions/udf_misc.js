'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_ChooseColor',
        documentation: 'Creates a Color dialog box that enables the user to select a color'
    },

    {
        label: '_ChooseFont',
        documentation: 'Creates a Font dialog box that enables the user to choose attributes for a logical font'
    },

    {
        label: '_ClipPutFile',
        documentation: 'Copy Files to Clipboard Like Explorer does'
    },

    {
        label: '_IsPressed',
        documentation: 'Check if key has been pressed'
    },

    {
        label: '_MouseTrap',
        documentation: 'Confine the Mouse Cursor to specified coords'
    },

    {
        label: '_Singleton',
        documentation: 'Enforce a design paradigm where only one instance of the script may be running'
    },

    {
        label: '_VersionCompare',
        documentation: 'Compares two file versions for equality '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Misc.au3>'
}

module.exports = items