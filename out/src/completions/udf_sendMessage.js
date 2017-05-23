'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_SendMessage',
        documentation: 'Wrapper for commonly used DLL Call'
    },

    {
        label: '_SendMessageA',
        documentation: 'Send a Message to a Window/Control (Force Ansi Call)'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <SendMessage.au3>'
}

module.exports = items