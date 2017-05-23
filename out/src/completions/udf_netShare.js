'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_Net_Share_ConnectionEnum',
        documentation: 'Lists all connections made to a shared resource'
    },

    {
        label: '_Net_Share_FileClose',
        documentation: 'Forces a resource to close'
    },

    {
        label: '_Net_Share_FileEnum',
        documentation: 'Returns information about open files on a server'
    },

    {
        label: '_Net_Share_FileGetInfo',
        documentation: 'Retrieves information about a particular opening of a server resource'
    },

    {
        label: '_Net_Share_PermStr',
        documentation: 'Returns the string representation of a resource\'s permissions'
    },

    {
        label: '_Net_Share_ResourceStr',
        documentation: 'Returns the string representation of a resource'
    },

    {
        label: '_Net_Share_SessionDel',
        documentation: 'Ends a network session between a server and a workstation'
    },

    {
        label: '_Net_Share_SessionEnum',
        documentation: 'Provides information about sessions established on a server'
    },

    {
        label: '_Net_Share_SessionGetInfo',
        documentation: 'Retrieves information about a session established between a server and workstation'
    },

    {
        label: '_Net_Share_ShareAdd',
        documentation: 'Shares a server resource'
    },

    {
        label: '_Net_Share_ShareCheck',
        documentation: 'Checks whether or not a server is sharing a device'
    },

    {
        label: '_Net_Share_ShareDel',
        documentation: 'Deletes a share name from a server\'s list of shared resources'
    },

    {
        label: '_Net_Share_ShareEnum',
        documentation: 'Retrieves information about each shared resource on a server'
    },

    {
        label: '_Net_Share_ShareGetInfo',
        documentation: 'Retrieves information about a particular shared resource on a server'
    },

    {
        label: '_Net_Share_ShareSetInfo',
        documentation: 'Shares a server resource'
    },

    {
        label: '_Net_Share_StatisticsGetSvr',
        documentation: 'Retrieves operating statistics for a server'
    },

    {
        label: '_Net_Share_StatisticsGetWrk',
        documentation: 'Retrieves operating statistics for a workstation'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <NetShare.au3>'
}

module.exports = items