'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_Word_Create',
        documentation: 'Connects to an existing Word instance or creates a new Word application object',
        insertText: '_Word_Create(${})'
    },
    {
        label: '_Word_DocAdd',
        documentation: 'Adds a new or empty document to the specified Word application',
        insertText: '_Word_DocAdd(${})'
    },
    {
        label: '_Word_DocAttach',
        documentation: 'Attaches to the first instance of a Word document where the search string matches based on the selected mode',
        insertText: '_Word_DocAttach(${})'
    },
    {
        label: '_Word_DocClose',
        documentation: 'Closes the specified Word document',
        insertText: '_Word_DocClose(${})'
    },
    {
        label: '_Word_DocExport',
        documentation: 'Exports the document or a range as PDF or XPS',
        insertText: '_Word_DocExport(${})'
    },
    {
        label: '_Word_DocFind',
        documentation: 'Runs or repeats the specified find operation',
        insertText: '_Word_DocFind(${})'
    },
    {
        label: '_Word_DocFindReplace',
        documentation: 'Runs the specified find and replace operation',
        insertText: '_Word_DocFindReplace(${})'
    },
    {
        label: '_Word_DocGet',
        documentation: 'Returns a collection object containing all documents or an object for a single document',
        insertText: '_Word_DocGet(${})'
    },
    {
        label: '_Word_DocLinkAdd',
        documentation: 'Adds a hyperlink to the document',
        insertText: '_Word_DocLinkAdd(${})'
    },
    {
        label: '_Word_DocLinkGet',
        documentation: 'Returns a collection object containing all links in the document or a single link object',
        insertText: '_Word_DocLinkGet(${})'
    },
    {
        label: '_Word_DocOpen',
        documentation: 'Opens a Word document',
        insertText: '_Word_DocOpen(${})'
    },
    {
        label: '_Word_DocPictureAdd',
        documentation: 'Adds a picture to the document',
        insertText: '_Word_DocPictureAdd(${})'
    },
    {
        label: '_Word_DocPrint',
        documentation: 'Prints all or parts of the specified document',
        insertText: '_Word_DocPrint(${})'
    },
    {
        label: '_Word_DocRangeSet',
        documentation: 'Sets or modifies a range in a document',
        insertText: '_Word_DocRangeSet(${})'
    },
    {
        label: '_Word_DocSave',
        documentation: 'Saves the specified Word document',
        insertText: '_Word_DocSave(${})'
    },
    {
        label: '_Word_DocSaveAs',
        documentation: 'Saves the specified Word document with a new name or format',
        insertText: '_Word_DocSaveAs(${})'
    },
    {
        label: '_Word_DocTableRead',
        documentation: 'Reads a Word table and returns the content as a two-dimensional array',
        insertText: '_Word_DocTableRead(${})'
    },
    {
        label: '_Word_DocTableWrite',
        documentation: 'Writes a one or two dimensional array to a Word table',
        insertText: '_Word_DocTableWrite(${})'
    },
    {
        label: '_Word_Quit',
        documentation: 'Closes all documents, the Word application and removes the object reference to it',
        insertText: '_Word_Quit(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Word.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items