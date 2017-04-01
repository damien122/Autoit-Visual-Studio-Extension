'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlDTP_Create',
        documentation: 'Create a DTP control',
        insertText: '_GUICtrlDTP_Create(${})'
    },
    {
        label: '_GUICtrlDTP_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlDTP_Destroy(${})'
    },
    {
        label: '_GUICtrlDTP_GetMCColor',
        documentation: 'Retrieves the specified color',
        insertText: '_GUICtrlDTP_GetMCColor(${})'
    },
    {
        label: '_GUICtrlDTP_GetMCFont',
        documentation: 'Retrieves the month calendar font handle',
        insertText: '_GUICtrlDTP_GetMCFont(${})'
    },
    {
        label: '_GUICtrlDTP_GetMonthCal',
        documentation: 'Retrieves the handle to child month calendar control',
        insertText: '_GUICtrlDTP_GetMonthCal(${})'
    },
    {
        label: '_GUICtrlDTP_GetRange',
        documentation: 'Retrieves the current minimum and maximum allowable system times',
        insertText: '_GUICtrlDTP_GetRange(${})'
    },
    {
        label: '_GUICtrlDTP_GetRangeEx',
        documentation: 'Retrieves the current minimum and maximum allowable system times',
        insertText: '_GUICtrlDTP_GetRangeEx(${})'
    },
    {
        label: '_GUICtrlDTP_GetSystemTime',
        documentation: 'Retrieves the currently selected date and time',
        insertText: '_GUICtrlDTP_GetSystemTime(${})'
    },
    {
        label: '_GUICtrlDTP_GetSystemTimeEx',
        documentation: 'Retrieves the currently selected date and time',
        insertText: '_GUICtrlDTP_GetSystemTimeEx(${})'
    },
    {
        label: '_GUICtrlDTP_SetFormat',
        documentation: 'Sets the display based on a given format string',
        insertText: '_GUICtrlDTP_SetFormat(${})'
    },
    {
        label: '_GUICtrlDTP_SetMCColor',
        documentation: 'Sets the color for a given portion of the month calendar',
        insertText: '_GUICtrlDTP_SetMCColor(${})'
    },
    {
        label: '_GUICtrlDTP_SetMCFont',
        documentation: 'Sets the month calendar font',
        insertText: '_GUICtrlDTP_SetMCFont(${})'
    },
    {
        label: '_GUICtrlDTP_SetRange',
        documentation: 'Sets the current minimum and maximum allowable system times',
        insertText: '_GUICtrlDTP_SetRange(${})'
    },
    {
        label: '_GUICtrlDTP_SetRangeEx',
        documentation: 'Sets the current minimum and maximum allowable system times',
        insertText: '_GUICtrlDTP_SetRangeEx(${})'
    },
    {
        label: '_GUICtrlDTP_SetSystemTime',
        documentation: 'Sets the currently selected date and time',
        insertText: '_GUICtrlDTP_SetSystemTime(${})'
    },
    {
        label: '_GUICtrlDTP_SetSystemTimeEx',
        documentation: 'Sets the currently selected date and time',
        insertText: '_GUICtrlDTP_SetSystemTimeEx(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiDTP UDF - #include <GuiDTP.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items