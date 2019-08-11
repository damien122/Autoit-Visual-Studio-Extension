'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_WinAPI_DisplayStruct',
        documentation: 'Displays data from the specified structure or memory address as a list'
    },
    {
        label: '_WinAPI_EnumDllProc',
        documentation: 'Enumerates an exported functions of the specified dynamic-link library (DLL)'
    },
    {
        label: '_WinAPI_FatalExit',
        documentation: 'Transfers execution control to the debugger'
    },
    {
        label: '_WinAPI_GetApplicationRestartSettings',
        documentation: 'Retrieves the restart information registered for the specified process'
    },
    {
        label: '_WinAPI_GetErrorMessage',
        documentation: 'Retrieves a text error message for the specified system error code'
    },
    {
        label: '_WinAPI_GetErrorMode',
        documentation: 'Retrieves the error mode for the current process'
    },
    {
        label: '_WinAPI_IsInternetConnected',
        documentation: 'Determines whether the current user is connected to the Internet'
    },
    {
        label: '_WinAPI_IsNetworkAlive',
        documentation: 'Determines whether or not a local system is connected to a network, and identifies the type of network connection'
    },
    {
        label: '_WinAPI_NtStatusToDosError',
        documentation: 'Converts the specified NTSTATUS error code to its equivalent system error code'
    },
    {
        label: '_WinAPI_RegisterApplicationRestart',
        documentation: 'Registers the active instance of an application for restart'
    },
    {
        label: '_WinAPI_SetErrorMode',
        documentation: 'Controls whether the system will handle the specified types of serious errors or whether the process will handle them'
    },
    {
        label: '_WinAPI_ShowLastError',
        documentation: 'Shows the last error code and message'
    },
    {
        label: '_WinAPI_UniqueHardwareID',
        documentation: 'Generates a unique hardware identifier (ID) for local computer'
    },
    {
        label: '_WinAPI_UnregisterApplicationRestart',
        documentation: 'Removes the active instance of an application from the restart list '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIDiag.au3>'
}

module.exports = items