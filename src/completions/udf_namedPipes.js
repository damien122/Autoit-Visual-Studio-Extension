'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_NamedPipes_CallNamedPipe',
        documentation: 'Performs a read/write operation on a named pipe'
    },

    {
        label: '_NamedPipes_ConnectNamedPipe',
        documentation: 'Enables a named pipe server process to wait for a client process to connect'
    },

    {
        label: '_NamedPipes_CreateNamedPipe',
        documentation: 'Creates an instance of a named pipe'
    },

    {
        label: '_NamedPipes_CreatePipe',
        documentation: 'Creates an anonymous pipe'
    },

    {
        label: '_NamedPipes_DisconnectNamedPipe',
        documentation: 'Disconnects the server end of a named pipe instance from a client process'
    },

    {
        label: '_NamedPipes_GetNamedPipeHandleState',
        documentation: 'Retrieves information about a specified named pipe'
    },

    {
        label: '_NamedPipes_GetNamedPipeInfo',
        documentation: 'Retrieves information about the specified named pipe'
    },

    {
        label: '_NamedPipes_PeekNamedPipe',
        documentation: 'Copies data from a pipe into a buffer without removing it from the pipe'
    },

    {
        label: '_NamedPipes_SetNamedPipeHandleState',
        documentation: 'Sets the read mode and the blocking mode of the specified named pipe'
    },

    {
        label: '_NamedPipes_TransactNamedPipe',
        documentation: 'Reads and writes to a named pipe in one network operation'
    },

    {
        label: '_NamedPipes_WaitNamedPipe',
        documentation: 'Waits for an instance of a named pipe to become available '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <NamedPipes.au3>'
}

module.exports = items