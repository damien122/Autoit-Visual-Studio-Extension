'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_ClipBoard_ChangeChain',
        documentation: 'Removes a specified window from the chain of clipboard viewers'
    },

    {
        label: '_ClipBoard_Close',
        documentation: 'Closes the clipboard'
    },

    {
        label: '_ClipBoard_CountFormats',
        documentation: 'Retrieves the number of different data formats currently on the clipboard'
    },

    {
        label: '_ClipBoard_Empty',
        documentation: 'Empties the clipboard and frees handles to data in the clipboard'
    },

    {
        label: '_ClipBoard_EnumFormats',
        documentation: 'Enumerates the data formats currently available on the clipboard'
    },

    {
        label: '_ClipBoard_FormatStr',
        documentation: 'Returns a string representation of a standard clipboard format'
    },

    {
        label: '_ClipBoard_GetData',
        documentation: 'Retrieves data from the clipboard in a specified format'
    },

    {
        label: '_ClipBoard_GetDataEx',
        documentation: 'Retrieves data from the clipboard in a specified format'
    },

    {
        label: '_ClipBoard_GetFormatName',
        documentation: 'Retrieves the name of the specified registered format'
    },

    {
        label: '_ClipBoard_GetOpenWindow',
        documentation: 'Retrieves the handle to the window that currently has the clipboard open'
    },

    {
        label: '_ClipBoard_GetOwner',
        documentation: 'Retrieves the window handle of the current owner of the clipboard'
    },

    {
        label: '_ClipBoard_GetPriorityFormat',
        documentation: 'Retrieves the first available clipboard format in the specified list'
    },

    {
        label: '_ClipBoard_GetSequenceNumber',
        documentation: 'Retrieves the clipboard sequence number for the current window station'
    },

    {
        label: '_ClipBoard_GetViewer',
        documentation: 'Retrieves the handle to the first window in the clipboard viewer chain'
    },

    {
        label: '_ClipBoard_IsFormatAvailable',
        documentation: 'Determines whether the clipboard contains data in the specified format'
    },

    {
        label: '_ClipBoard_Open',
        documentation: 'Opens the clipboard and prevents other applications from modifying the clipboard'
    },

    {
        label: '_ClipBoard_RegisterFormat',
        documentation: 'Registers a new clipboard format'
    },

    {
        label: '_ClipBoard_SetData',
        documentation: 'Places data on the clipboard in a specified clipboard format'
    },

    {
        label: '_ClipBoard_SetDataEx',
        documentation: 'Places data on the clipboard in a specified clipboard format'
    },

    {
        label: '_ClipBoard_SetViewer',
        documentation: 'Adds the specified window to the chain of clipboard viewers'
    },

]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Clipboard UDF - #include <WinAPISys.au3>'
}

module.exports = items