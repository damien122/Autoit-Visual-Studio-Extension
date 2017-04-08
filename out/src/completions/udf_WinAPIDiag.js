'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_DisplayStruct',
        documentation: 'Displays data from the specified structure or memory address as a list',
        insertText: '_WinAPI_DisplayStruct(${})'
    },
    {
        label: '_WinAPI_EnumDllProc',
        documentation: 'Enumerates an exported functions of the specified dynamic-link library (DLL)',
        insertText: '_WinAPI_EnumDllProc(${})'
    },
    {
        label: '_WinAPI_FatalExit',
        documentation: 'Transfers execution control to the debugger',
        insertText: '_WinAPI_FatalExit(${})'
    },
    {
        label: '_WinAPI_GetApplicationRestartSettings',
        documentation: 'Retrieves the restart information registered for the specified process',
        insertText: '_WinAPI_GetApplicationRestartSettings(${})'
    },
    {
        label: '_WinAPI_GetErrorMessage',
        documentation: 'Retrieves a text error message for the specified system error code',
        insertText: '_WinAPI_GetErrorMessage(${})'
    },
    {
        label: '_WinAPI_GetErrorMode',
        documentation: 'Retrieves the error mode for the current process',
        insertText: '_WinAPI_GetErrorMode(${})'
    },
    {
        label: '_WinAPI_IsInternetConnected',
        documentation: 'Determines whether the current user is connected to the Internet',
        insertText: '_WinAPI_IsInternetConnected(${})'
    },
    {
        label: '_WinAPI_IsNetworkAlive',
        documentation: 'Determines whether or not a local system is connected to a network, and identifies the type of network connection',
        insertText: '_WinAPI_IsNetworkAlive(${})'
    },
    {
        label: '_WinAPI_NtStatusToDosError',
        documentation: 'Converts the specified NTSTATUS error code to its equivalent system error code',
        insertText: '_WinAPI_NtStatusToDosError(${})'
    },
    {
        label: '_WinAPI_RegisterApplicationRestart',
        documentation: 'Registers the active instance of an application for restart',
        insertText: '_WinAPI_RegisterApplicationRestart(${})'
    },
    {
        label: '_WinAPI_SetErrorMode',
        documentation: 'Controls whether the system will handle the specified types of serious errors or whether the process will handle them',
        insertText: '_WinAPI_SetErrorMode(${})'
    },
    {
        label: '_WinAPI_ShowLastError',
        documentation: 'Shows the last error code and message',
        insertText: '_WinAPI_ShowLastError(${})'
    },
    {
        label: '_WinAPI_UniqueHardwareID',
        documentation: 'Generates a unique hardware identifier (ID) for local computer',
        insertText: '_WinAPI_UniqueHardwareID(${})'
    },
    {
        label: '_WinAPI_UnregisterApplicationRestart',
        documentation: 'Removes the active instance of an application from the restart list ',
        insertText: '_WinAPI_UnregisterApplicationRestart(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIDiag.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items