'use strict'

var {
    CompletionItemKind,
    // SnippetString
} = require('vscode')

var items = [{
    label: 'ALT',
    insertText: '{ALT}'
}]

// Add the variable icon and Macro detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Enum
    i.detail = 'Send Command'
}

module.exports = items