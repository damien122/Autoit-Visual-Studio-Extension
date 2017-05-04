'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_Timer_Diff',
        documentation: 'Returns the difference in time from a previous call to _Timer_Init',
        insertText: '_Timer_Diff(${})'
    },

    {
        label: '_Timer_GetIdleTime',
        documentation: 'Returns the number of ticks since last user activity (i.e. KYBD/Mouse)',
        insertText: '_Timer_GetIdleTime(${})'
    },

    {
        label: '_Timer_GetTimerID',
        documentation: 'Returns the Timer ID from $wParam',
        insertText: '_Timer_GetTimerID(${})'
    },

    {
        label: '_Timer_Init',
        documentation: 'Returns a timestamp (in milliseconds)',
        insertText: '_Timer_Init(${})'
    },

    {
        label: '_Timer_KillAllTimers',
        documentation: 'Destroys all the timers',
        insertText: '_Timer_KillAllTimers(${})'
    },

    {
        label: '_Timer_KillTimer',
        documentation: 'Destroys the specified timer',
        insertText: '_Timer_KillTimer(${})'
    },

    {
        label: '_Timer_SetTimer',
        documentation: 'Creates a timer with the specified time-out value ',
        insertText: '_Timer_SetTimer(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Timers.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items