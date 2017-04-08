'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GetIP',
        documentation: 'Get public IP address of a network/computer',
        insertText: '_GetIP(${})'
    },
    {
        label: '_INetExplorerCapable',
        documentation: 'Converts a string to IE(Internet Explorer) capable line',
        insertText: '_INetExplorerCapable(${})'
    },
    {
        label: '_INetGetSource',
        documentation: 'Gets the source from an URL without writing a temp file',
        insertText: '_INetGetSource(${})'
    },
    {
        label: '_INetMail',
        documentation: 'Opens default user\'s mail client with given address, subject, and body',
        insertText: '_INetMail(${})'
    },
    {
        label: '_INetSmtpMail',
        documentation: 'Sends an email without using an external email program',
        insertText: '_INetSmtpMail(${})'
    },
    {
        label: '_TCPIpToName',
        documentation: 'Resolves IP address to Hostname(s) ',
        insertText: '_TCPIpToName(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Inet.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items