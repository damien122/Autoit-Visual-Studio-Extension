'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinNet_AddConnection',
        documentation: 'Connects a local device to a network resource',
        insertText: '_WinNet_AddConnection(${})'
    },
    {
        label: '_WinNet_AddConnection2',
        documentation: 'Connects a local device to a network resource',
        insertText: '_WinNet_AddConnection2(${})'
    },
    {
        label: '_WinNet_AddConnection3',
        documentation: 'Connects a local device to a network resource',
        insertText: '_WinNet_AddConnection3(${})'
    },
    {
        label: '_WinNet_CancelConnection',
        documentation: 'Cancels an existing network connection',
        insertText: '_WinNet_CancelConnection(${})'
    },
    {
        label: '_WinNet_CancelConnection2',
        documentation: 'Cancels an existing network connection',
        insertText: '_WinNet_CancelConnection2(${})'
    },
    {
        label: '_WinNet_CloseEnum',
        documentation: 'Ends a network resource enumeration started by a call to _WinNet_OpenEnum()',
        insertText: '_WinNet_CloseEnum(${})'
    },
    {
        label: '_WinNet_ConnectionDialog',
        documentation: 'Starts a general browsing dialog box for connecting to network resources',
        insertText: '_WinNet_ConnectionDialog(${})'
    },
    {
        label: '_WinNet_ConnectionDialog1',
        documentation: 'Starts a general browsing dialog box for connecting to network resources',
        insertText: '_WinNet_ConnectionDialog1(${})'
    },
    {
        label: '_WinNet_DisconnectDialog',
        documentation: 'Starts a general browsing dialog box for disconnecting from network resources',
        insertText: '_WinNet_DisconnectDialog(${})'
    },
    {
        label: '_WinNet_DisconnectDialog1',
        documentation: 'Starts a general browsing dialog box for disconnecting from network resources',
        insertText: '_WinNet_DisconnectDialog1(${})'
    },
    {
        label: '_WinNet_EnumResource',
        documentation: 'Continues an enumeration of network resources',
        insertText: '_WinNet_EnumResource(${})'
    },
    {
        label: '_WinNet_GetConnection',
        documentation: 'Retrieves the name of the network resource associated with a local device',
        insertText: '_WinNet_GetConnection(${})'
    },
    {
        label: '_WinNet_GetConnectionPerformance',
        documentation: 'Returns information about the performance of a network connection resource',
        insertText: '_WinNet_GetConnectionPerformance(${})'
    },
    {
        label: '_WinNet_GetLastError',
        documentation: 'Retrieves the most recent extended error',
        insertText: '_WinNet_GetLastError(${})'
    },
    {
        label: '_WinNet_GetNetworkInformation',
        documentation: 'Returns extended information about a specific network provider',
        insertText: '_WinNet_GetNetworkInformation(${})'
    },
    {
        label: '_WinNet_GetProviderName',
        documentation: 'Obtains the provider name for a specific type of network',
        insertText: '_WinNet_GetProviderName(${})'
    },
    {
        label: '_WinNet_GetResourceInformation',
        documentation: 'Identifies the network provider that owns the resource',
        insertText: '_WinNet_GetResourceInformation(${})'
    },
    {
        label: '_WinNet_GetResourceParent',
        documentation: 'Returns the parent of a network resource in the network browse hierarchy',
        insertText: '_WinNet_GetResourceParent(${})'
    },
    {
        label: '_WinNet_GetUniversalName',
        documentation: 'Converts drived based path to universal form',
        insertText: '_WinNet_GetUniversalName(${})'
    },
    {
        label: '_WinNet_GetUser',
        documentation: 'Retrieves the default user name, or the user name used to establish a connection',
        insertText: '_WinNet_GetUser(${})'
    },
    {
        label: '_WinNet_OpenEnum',
        documentation: 'Starts an enumeration of network resources or existing connections',
        insertText: '_WinNet_OpenEnum(${})'
    },
    {
        label: '_WinNet_RestoreConnection',
        documentation: 'Restores the connection to a network resource',
        insertText: '_WinNet_RestoreConnection(${})'
    },
    {
        label: '_WinNet_UseConnection',
        documentation: 'Connects a local device to a network resource',
        insertText: '_WinNet_UseConnection(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinNet.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items