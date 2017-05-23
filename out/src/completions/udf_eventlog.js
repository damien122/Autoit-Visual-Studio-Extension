'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_EventLog__Backup',
        documentation: 'Saves the event log to a backup file'
    },
    {
        label: '_EventLog__Clear',
        documentation: 'Clears the event log'
    },
    {
        label: '_EventLog__Close',
        documentation: 'Closes a read handle to the event log'
    },
    {
        label: '_EventLog__Count',
        documentation: 'Retrieves the number of records in the event log'
    },
    {
        label: '_EventLog__DeregisterSource',
        documentation: 'Closes a write handle to the event log'
    },
    {
        label: '_EventLog__Full',
        documentation: 'Retrieves whether the event log is full'
    },
    {
        label: '_EventLog__Notify',
        documentation: 'Enables an application to receive event notifications'
    },
    {
        label: '_EventLog__Oldest',
        documentation: 'Retrieves the absolute record number of the oldest record in the event log'
    },
    {
        label: '_EventLog__Open',
        documentation: 'Opens a handle to the event log'
    },
    {
        label: '_EventLog__OpenBackup',
        documentation: 'Opens a handle to a backup event log'
    },
    {
        label: '_EventLog__Read',
        documentation: 'Reads an entry from the event log'
    },
    {
        label: '_EventLog__RegisterSource',
        documentation: 'Retrieves a registered handle to the specified event log'
    },
    {
        label: '_EventLog__Report',
        documentation: 'Writes an entry at the end of the specified event log'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'EventLog UDF - #include <EventLog.au3>'
}

module.exports = items