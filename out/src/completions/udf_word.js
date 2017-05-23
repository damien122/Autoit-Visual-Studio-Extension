'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_Word_Create',
        documentation: 'Connects to an existing Word instance or creates a new Word application object'
    },
    {
        label: '_Word_DocAdd',
        documentation: 'Adds a new or empty document to the specified Word application'
    },
    {
        label: '_Word_DocAttach',
        documentation: 'Attaches to the first instance of a Word document where the search string matches based on the selected mode'
    },
    {
        label: '_Word_DocClose',
        documentation: 'Closes the specified Word document'
    },
    {
        label: '_Word_DocExport',
        documentation: 'Exports the document or a range as PDF or XPS'
    },
    {
        label: '_Word_DocFind',
        documentation: 'Runs or repeats the specified find operation'
    },
    {
        label: '_Word_DocFindReplace',
        documentation: 'Runs the specified find and replace operation'
    },
    {
        label: '_Word_DocGet',
        documentation: 'Returns a collection object containing all documents or an object for a single document'
    },
    {
        label: '_Word_DocLinkAdd',
        documentation: 'Adds a hyperlink to the document'
    },
    {
        label: '_Word_DocLinkGet',
        documentation: 'Returns a collection object containing all links in the document or a single link object'
    },
    {
        label: '_Word_DocOpen',
        documentation: 'Opens a Word document'
    },
    {
        label: '_Word_DocPictureAdd',
        documentation: 'Adds a picture to the document'
    },
    {
        label: '_Word_DocPrint',
        documentation: 'Prints all or parts of the specified document'
    },
    {
        label: '_Word_DocRangeSet',
        documentation: 'Sets or modifies a range in a document'
    },
    {
        label: '_Word_DocSave',
        documentation: 'Saves the specified Word document'
    },
    {
        label: '_Word_DocSaveAs',
        documentation: 'Saves the specified Word document with a new name or format'
    },
    {
        label: '_Word_DocTableRead',
        documentation: 'Reads a Word table and returns the content as a two-dimensional array'
    },
    {
        label: '_Word_DocTableWrite',
        documentation: 'Writes a one or two dimensional array to a Word table'
    },
    {
        label: '_Word_Quit',
        documentation: 'Closes all documents, the Word application and removes the object reference to it'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Word.au3>'
}

module.exports = items