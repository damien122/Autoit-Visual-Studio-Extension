'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_Assert',
        documentation: 'Display a message if assertion fails',
        insertText: '_Assert(${})'
    },
    {
        label: '_DebugBugReportEnv',
        documentation: 'Outputs a string containing information for Bug report submission',
        insertText: '_DebugBugReportEnv(${})'
    },
    {
        label: '_DebugCOMError',
        documentation: 'Sets, resets or queries the debug level for COM errors',
        insertText: '_DebugCOMError(${})'
    },
    {
        label: '_DebugOut',
        documentation: 'Displays output on a debugging session started by _DebugSetup()',
        insertText: '_DebugOut(${})'
    },
    {
        label: '_DebugReport',
        documentation: 'Writes to a debugging session',
        insertText: '_DebugReport(${})'
    },
    {
        label: '_DebugReportEx',
        documentation: 'Writes to a debugging session a formatted message',
        insertText: '_DebugReportEx(${})'
    },
    {
        label: '_DebugReportVar',
        documentation: 'Writes to debugging session the content of a variable',
        insertText: '_DebugReportVar(${})'
    },
    {
        label: '_DebugSetup',
        documentation: 'Setup up a debug session using a specific reporting type ',
        insertText: '_DebugSetup(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Debug UDF - #include <Debug.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items