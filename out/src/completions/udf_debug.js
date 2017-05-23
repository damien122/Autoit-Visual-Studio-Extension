'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_Assert',
        documentation: 'Display a message if assertion fails'
    },
    {
        label: '_DebugBugReportEnv',
        documentation: 'Outputs a string containing information for Bug report submission'
    },
    {
        label: '_DebugCOMError',
        documentation: 'Sets, resets or queries the debug level for COM errors'
    },
    {
        label: '_DebugOut',
        documentation: 'Displays output on a debugging session started by _DebugSetup()'
    },
    {
        label: '_DebugReport',
        documentation: 'Writes to a debugging session'
    },
    {
        label: '_DebugReportEx',
        documentation: 'Writes to a debugging session a formatted message'
    },
    {
        label: '_DebugReportVar',
        documentation: 'Writes to debugging session the content of a variable'
    },
    {
        label: '_DebugSetup',
        documentation: 'Setup up a debug session using a specific reporting type '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Debug UDF - #include <Debug.au3>'
}

module.exports = items