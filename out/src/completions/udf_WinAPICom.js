'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_CLSIDFromProgID',
        documentation: 'Looks up a CLSID in the registry, given a ProgID',
        insertText: '_WinAPI_CLSIDFromProgID(${})'
    },
    {
        label: '_WinAPI_CoInitialize',
        documentation: 'Initializes the COM library for use by the calling process',
        insertText: '_WinAPI_CoInitialize(${})'
    },
    {
        label: '_WinAPI_CoTaskMemAlloc',
        documentation: 'Allocates a block of task memory',
        insertText: '_WinAPI_CoTaskMemAlloc(${})'
    },
    {
        label: '_WinAPI_CoTaskMemFree',
        documentation: 'Frees a block of task memory',
        insertText: '_WinAPI_CoTaskMemFree(${})'
    },
    {
        label: '_WinAPI_CoTaskMemRealloc',
        documentation: 'Changes the size of a previously allocated block of task memory',
        insertText: '_WinAPI_CoTaskMemRealloc(${})'
    },
    {
        label: '_WinAPI_CoUninitialize',
        documentation: 'Closes the COM library on the current process',
        insertText: '_WinAPI_CoUninitialize(${})'
    },
    {
        label: '_WinAPI_CreateGUID',
        documentation: 'Creates a globally unique identifier (GUID)',
        insertText: '_WinAPI_CreateGUID(${})'
    },
    {
        label: '_WinAPI_CreateStreamOnHGlobal',
        documentation: 'Creates a stream object that uses a memory handle to store the stream contents',
        insertText: '_WinAPI_CreateStreamOnHGlobal(${})'
    },
    {
        label: '_WinAPI_GetHGlobalFromStream',
        documentation: 'Retrieves the global memory handle to a stream',
        insertText: '_WinAPI_GetHGlobalFromStream(${})'
    },
    {
        label: '_WinAPI_ProgIDFromCLSID',
        documentation: 'Retrieves the ProgID for a given CLSID',
        insertText: '_WinAPI_ProgIDFromCLSID(${})'
    },
    {
        label: '_WinAPI_ReleaseStream',
        documentation: 'Releases a stream object ',
        insertText: '_WinAPI_ReleaseStream(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPICom.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items