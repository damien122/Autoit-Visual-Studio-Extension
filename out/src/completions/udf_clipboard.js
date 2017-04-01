'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_ClipBoard_ChangeChain',
        documentation: 'Removes a specified window from the chain of clipboard viewers',
        insertText: '_ClipBoard_ChangeChain(${})'
    },

    {
        label: '_ClipBoard_Close',
        documentation: 'Closes the clipboard',
        insertText: '_ClipBoard_Close(${})'
    },

    {
        label: '_ClipBoard_CountFormats',
        documentation: 'Retrieves the number of different data formats currently on the clipboard',
        insertText: '_ClipBoard_CountFormats(${})'
    },

    {
        label: '_ClipBoard_Empty',
        documentation: 'Empties the clipboard and frees handles to data in the clipboard',
        insertText: '_ClipBoard_Empty(${})'
    },

    {
        label: '_ClipBoard_EnumFormats',
        documentation: 'Enumerates the data formats currently available on the clipboard',
        insertText: '_ClipBoard_EnumFormats(${})'
    },

    {
        label: '_ClipBoard_FormatStr',
        documentation: 'Returns a string representation of a standard clipboard format',
        insertText: '_ClipBoard_FormatStr(${})'
    },

    {
        label: '_ClipBoard_GetData',
        documentation: 'Retrieves data from the clipboard in a specified format',
        insertText: '_ClipBoard_GetData(${})'
    },

    {
        label: '_ClipBoard_GetDataEx',
        documentation: 'Retrieves data from the clipboard in a specified format',
        insertText: '_ClipBoard_GetDataEx(${})'
    },

    {
        label: '_ClipBoard_GetFormatName',
        documentation: 'Retrieves the name of the specified registered format',
        insertText: '_ClipBoard_GetFormatName(${})'
    },

    {
        label: '_ClipBoard_GetOpenWindow',
        documentation: 'Retrieves the handle to the window that currently has the clipboard open',
        insertText: '_ClipBoard_GetOpenWindow(${})'
    },

    {
        label: '_ClipBoard_GetOwner',
        documentation: 'Retrieves the window handle of the current owner of the clipboard',
        insertText: '_ClipBoard_GetOwner(${})'
    },

    {
        label: '_ClipBoard_GetPriorityFormat',
        documentation: 'Retrieves the first available clipboard format in the specified list',
        insertText: '_ClipBoard_GetPriorityFormat(${})'
    },

    {
        label: '_ClipBoard_GetSequenceNumber',
        documentation: 'Retrieves the clipboard sequence number for the current window station',
        insertText: '_ClipBoard_GetSequenceNumber(${})'
    },

    {
        label: '_ClipBoard_GetViewer',
        documentation: 'Retrieves the handle to the first window in the clipboard viewer chain',
        insertText: '_ClipBoard_GetViewer(${})'
    },

    {
        label: '_ClipBoard_IsFormatAvailable',
        documentation: 'Determines whether the clipboard contains data in the specified format',
        insertText: '_ClipBoard_IsFormatAvailable(${})'
    },

    {
        label: '_ClipBoard_Open',
        documentation: 'Opens the clipboard and prevents other applications from modifying the clipboard',
        insertText: '_ClipBoard_Open(${})'
    },

    {
        label: '_ClipBoard_RegisterFormat',
        documentation: 'Registers a new clipboard format',
        insertText: '_ClipBoard_RegisterFormat(${})'
    },

    {
        label: '_ClipBoard_SetData',
        documentation: 'Places data on the clipboard in a specified clipboard format',
        insertText: '_ClipBoard_SetData(${})'
    },

    {
        label: '_ClipBoard_SetDataEx',
        documentation: 'Places data on the clipboard in a specified clipboard format',
        insertText: '_ClipBoard_SetDataEx(${})'
    },

    {
        label: '_ClipBoard_SetViewer',
        documentation: 'Adds the specified window to the chain of clipboard viewers',
        insertText: '_ClipBoard_SetViewer(${})'
    },

]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Clipboard UDF - #include <WinAPISys.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items