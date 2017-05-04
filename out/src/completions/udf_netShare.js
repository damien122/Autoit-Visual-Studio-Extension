'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_Net_Share_ConnectionEnum',
        documentation: 'Lists all connections made to a shared resource',
        insertText: '_Net_Share_ConnectionEnum(${})'
    },

    {
        label: '_Net_Share_FileClose',
        documentation: 'Forces a resource to close',
        insertText: '_Net_Share_FileClose(${})'
    },

    {
        label: '_Net_Share_FileEnum',
        documentation: 'Returns information about open files on a server',
        insertText: '_Net_Share_FileEnum(${})'
    },

    {
        label: '_Net_Share_FileGetInfo',
        documentation: 'Retrieves information about a particular opening of a server resource',
        insertText: '_Net_Share_FileGetInfo(${})'
    },

    {
        label: '_Net_Share_PermStr',
        documentation: 'Returns the string representation of a resource\'s permissions',
        insertText: '_Net_Share_PermStr(${})'
    },

    {
        label: '_Net_Share_ResourceStr',
        documentation: 'Returns the string representation of a resource',
        insertText: '_Net_Share_ResourceStr(${})'
    },

    {
        label: '_Net_Share_SessionDel',
        documentation: 'Ends a network session between a server and a workstation',
        insertText: '_Net_Share_SessionDel(${})'
    },

    {
        label: '_Net_Share_SessionEnum',
        documentation: 'Provides information about sessions established on a server',
        insertText: '_Net_Share_SessionEnum(${})'
    },

    {
        label: '_Net_Share_SessionGetInfo',
        documentation: 'Retrieves information about a session established between a server and workstation',
        insertText: '_Net_Share_SessionGetInfo(${})'
    },

    {
        label: '_Net_Share_ShareAdd',
        documentation: 'Shares a server resource',
        insertText: '_Net_Share_ShareAdd(${})'
    },

    {
        label: '_Net_Share_ShareCheck',
        documentation: 'Checks whether or not a server is sharing a device',
        insertText: '_Net_Share_ShareCheck(${})'
    },

    {
        label: '_Net_Share_ShareDel',
        documentation: 'Deletes a share name from a server\'s list of shared resources',
        insertText: '_Net_Share_ShareDel(${})'
    },

    {
        label: '_Net_Share_ShareEnum',
        documentation: 'Retrieves information about each shared resource on a server',
        insertText: '_Net_Share_ShareEnum(${})'
    },

    {
        label: '_Net_Share_ShareGetInfo',
        documentation: 'Retrieves information about a particular shared resource on a server',
        insertText: '_Net_Share_ShareGetInfo(${})'
    },

    {
        label: '_Net_Share_ShareSetInfo',
        documentation: 'Shares a server resource',
        insertText: '_Net_Share_ShareSetInfo(${})'
    },

    {
        label: '_Net_Share_StatisticsGetSvr',
        documentation: 'Retrieves operating statistics for a server',
        insertText: '_Net_Share_StatisticsGetSvr(${})'
    },

    {
        label: '_Net_Share_StatisticsGetWrk',
        documentation: 'Retrieves operating statistics for a workstation',
        insertText: '_Net_Share_StatisticsGetWrk(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <NetShare.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items