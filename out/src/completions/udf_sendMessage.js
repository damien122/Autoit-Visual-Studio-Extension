'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_SendMessage',
        documentation: 'Wrapper for commonly used DLL Call',
        insertText: '_SendMessage(${})'
    },

    {
        label: '_SendMessageA',
        documentation: 'Send a Message to a Window/Control (Force Ansi Call)',
        insertText: '_SendMessageA(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <SendMessage.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items