'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GetIP',
        documentation: 'Get public IP address of a network/computer'
    },
    {
        label: '_INetExplorerCapable',
        documentation: 'Converts a string to IE(Internet Explorer) capable line'
    },
    {
        label: '_INetGetSource',
        documentation: 'Gets the source from an URL without writing a temp file'
    },
    {
        label: '_INetMail',
        documentation: 'Opens default user\'s mail client with given address, subject, and body'
    },
    {
        label: '_INetSmtpMail',
        documentation: 'Sends an email without using an external email program'
    },
    {
        label: '_TCPIpToName',
        documentation: 'Resolves IP address to Hostname(s) '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Inet.au3>'
}

module.exports = items