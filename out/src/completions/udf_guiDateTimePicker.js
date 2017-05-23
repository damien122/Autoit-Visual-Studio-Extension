'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlDTP_Create',
        documentation: 'Create a DTP control'
    },
    {
        label: '_GUICtrlDTP_Destroy',
        documentation: 'Delete the control'
    },
    {
        label: '_GUICtrlDTP_GetMCColor',
        documentation: 'Retrieves the specified color'
    },
    {
        label: '_GUICtrlDTP_GetMCFont',
        documentation: 'Retrieves the month calendar font handle'
    },
    {
        label: '_GUICtrlDTP_GetMonthCal',
        documentation: 'Retrieves the handle to child month calendar control'
    },
    {
        label: '_GUICtrlDTP_GetRange',
        documentation: 'Retrieves the current minimum and maximum allowable system times'
    },
    {
        label: '_GUICtrlDTP_GetRangeEx',
        documentation: 'Retrieves the current minimum and maximum allowable system times'
    },
    {
        label: '_GUICtrlDTP_GetSystemTime',
        documentation: 'Retrieves the currently selected date and time'
    },
    {
        label: '_GUICtrlDTP_GetSystemTimeEx',
        documentation: 'Retrieves the currently selected date and time'
    },
    {
        label: '_GUICtrlDTP_SetFormat',
        documentation: 'Sets the display based on a given format string'
    },
    {
        label: '_GUICtrlDTP_SetMCColor',
        documentation: 'Sets the color for a given portion of the month calendar'
    },
    {
        label: '_GUICtrlDTP_SetMCFont',
        documentation: 'Sets the month calendar font'
    },
    {
        label: '_GUICtrlDTP_SetRange',
        documentation: 'Sets the current minimum and maximum allowable system times'
    },
    {
        label: '_GUICtrlDTP_SetRangeEx',
        documentation: 'Sets the current minimum and maximum allowable system times'
    },
    {
        label: '_GUICtrlDTP_SetSystemTime',
        documentation: 'Sets the currently selected date and time'
    },
    {
        label: '_GUICtrlDTP_SetSystemTimeEx',
        documentation: 'Sets the currently selected date and time'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiDTP UDF - #include <GuiDTP.au3>'
}

module.exports = items