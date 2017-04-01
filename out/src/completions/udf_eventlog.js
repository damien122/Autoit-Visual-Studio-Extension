'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_EventLog__Backup',
        documentation: 'Saves the event log to a backup file',
        insertText: '_EventLog__Backup(${})'
    },
    {
        label: '_EventLog__Clear',
        documentation: 'Clears the event log',
        insertText: '_EventLog__Clear(${})'
    },
    {
        label: '_EventLog__Close',
        documentation: 'Closes a read handle to the event log',
        insertText: '_EventLog__Close(${})'
    },
    {
        label: '_EventLog__Count',
        documentation: 'Retrieves the number of records in the event log',
        insertText: '_EventLog__Count(${})'
    },
    {
        label: '_EventLog__DeregisterSource',
        documentation: 'Closes a write handle to the event log',
        insertText: '_EventLog__DeregisterSource(${})'
    },
    {
        label: '_EventLog__Full',
        documentation: 'Retrieves whether the event log is full',
        insertText: '_EventLog__Full(${})'
    },
    {
        label: '_EventLog__Notify',
        documentation: 'Enables an application to receive event notifications',
        insertText: '_EventLog__Notify(${})'
    },
    {
        label: '_EventLog__Oldest',
        documentation: 'Retrieves the absolute record number of the oldest record in the event log',
        insertText: '_EventLog__Oldest(${})'
    },
    {
        label: '_EventLog__Open',
        documentation: 'Opens a handle to the event log',
        insertText: '_EventLog__Open(${})'
    },
    {
        label: '_EventLog__OpenBackup',
        documentation: 'Opens a handle to a backup event log',
        insertText: '_EventLog__OpenBackup(${})'
    },
    {
        label: '_EventLog__Read',
        documentation: 'Reads an entry from the event log',
        insertText: '_EventLog__Read(${})'
    },
    {
        label: '_EventLog__RegisterSource',
        documentation: 'Retrieves a registered handle to the specified event log',
        insertText: '_EventLog__RegisterSource(${})'
    },
    {
        label: '_EventLog__Report',
        documentation: 'Writes an entry at the end of the specified event log',
        insertText: '_EventLog__Report(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'EventLog UDF - #include <EventLog.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items