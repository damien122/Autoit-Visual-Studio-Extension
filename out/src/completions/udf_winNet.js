'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_WinNet_AddConnection',
        documentation: 'Connects a local device to a network resource'
    },
    {
        label: '_WinNet_AddConnection2',
        documentation: 'Connects a local device to a network resource'
    },
    {
        label: '_WinNet_AddConnection3',
        documentation: 'Connects a local device to a network resource'
    },
    {
        label: '_WinNet_CancelConnection',
        documentation: 'Cancels an existing network connection'
    },
    {
        label: '_WinNet_CancelConnection2',
        documentation: 'Cancels an existing network connection'
    },
    {
        label: '_WinNet_CloseEnum',
        documentation: 'Ends a network resource enumeration started by a call to _WinNet_OpenEnum()'
    },
    {
        label: '_WinNet_ConnectionDialog',
        documentation: 'Starts a general browsing dialog box for connecting to network resources'
    },
    {
        label: '_WinNet_ConnectionDialog1',
        documentation: 'Starts a general browsing dialog box for connecting to network resources'
    },
    {
        label: '_WinNet_DisconnectDialog',
        documentation: 'Starts a general browsing dialog box for disconnecting from network resources'
    },
    {
        label: '_WinNet_DisconnectDialog1',
        documentation: 'Starts a general browsing dialog box for disconnecting from network resources'
    },
    {
        label: '_WinNet_EnumResource',
        documentation: 'Continues an enumeration of network resources'
    },
    {
        label: '_WinNet_GetConnection',
        documentation: 'Retrieves the name of the network resource associated with a local device'
    },
    {
        label: '_WinNet_GetConnectionPerformance',
        documentation: 'Returns information about the performance of a network connection resource'
    },
    {
        label: '_WinNet_GetLastError',
        documentation: 'Retrieves the most recent extended error'
    },
    {
        label: '_WinNet_GetNetworkInformation',
        documentation: 'Returns extended information about a specific network provider'
    },
    {
        label: '_WinNet_GetProviderName',
        documentation: 'Obtains the provider name for a specific type of network'
    },
    {
        label: '_WinNet_GetResourceInformation',
        documentation: 'Identifies the network provider that owns the resource'
    },
    {
        label: '_WinNet_GetResourceParent',
        documentation: 'Returns the parent of a network resource in the network browse hierarchy'
    },
    {
        label: '_WinNet_GetUniversalName',
        documentation: 'Converts drived based path to universal form'
    },
    {
        label: '_WinNet_GetUser',
        documentation: 'Retrieves the default user name, or the user name used to establish a connection'
    },
    {
        label: '_WinNet_OpenEnum',
        documentation: 'Starts an enumeration of network resources or existing connections'
    },
    {
        label: '_WinNet_RestoreConnection',
        documentation: 'Restores the connection to a network resource'
    },
    {
        label: '_WinNet_UseConnection',
        documentation: 'Connects a local device to a network resource'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinNet.au3>'
}

module.exports = items