'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_Timer_Diff',
        documentation: 'Returns the difference in time from a previous call to _Timer_Init'
    },

    {
        label: '_Timer_GetIdleTime',
        documentation: 'Returns the number of ticks since last user activity (i.e. KYBD/Mouse)'
    },

    {
        label: '_Timer_GetTimerID',
        documentation: 'Returns the Timer ID from $wParam'
    },

    {
        label: '_Timer_Init',
        documentation: 'Returns a timestamp (in milliseconds)'
    },

    {
        label: '_Timer_KillAllTimers',
        documentation: 'Destroys all the timers'
    },

    {
        label: '_Timer_KillTimer',
        documentation: 'Destroys the specified timer'
    },

    {
        label: '_Timer_SetTimer',
        documentation: 'Creates a timer with the specified time-out value '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Timers.au3>'
}

module.exports = items