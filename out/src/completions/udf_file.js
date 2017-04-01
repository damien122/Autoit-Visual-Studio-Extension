'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_FileCountLines',
        documentation: 'Returns the number of lines in the specified file',
        insertText: '_FileCountLines(${})'
    },
    {
        label: '_FileCreate',
        documentation: 'Creates or zero\'s out the length of the file specified',
        insertText: '_FileCreate(${})'
    },
    {
        label: '_FileListToArray',
        documentation: 'Lists files and\\or folders in a specified folder (Similar to using Dir with the /B Switch)',
        insertText: '_FileListToArray(${})'
    },
    {
        label: '_FileListToArrayRec',
        documentation: 'Lists files and\\or folders in specified path with optional recursion to defined level and result sorting',
        insertText: '_FileListToArrayRec(${})'
    },
    {
        label: '_FilePrint',
        documentation: 'Prints a plain text file',
        insertText: '_FilePrint(${})'
    },
    {
        label: '_FileReadToArray',
        documentation: 'Reads the specified file into a 1D or 2D array',
        insertText: '_FileReadToArray(${})'
    },
    {
        label: '_FileWriteFromArray',
        documentation: 'Writes an array to a specified file',
        insertText: '_FileWriteFromArray(${})'
    },
    {
        label: '_FileWriteLog',
        documentation: 'Writes current date, time and the specified text to a log file',
        insertText: '_FileWriteLog(${})'
    },
    {
        label: '_FileWriteToLine',
        documentation: 'Writes text to a specific line in a file',
        insertText: '_FileWriteToLine(${})'
    },
    {
        label: '_PathFull',
        documentation: 'Creates a path based on the relative path you provide. The newly created absolute path is returned',
        insertText: '_PathFull(${})'
    },
    {
        label: '_PathGetRelative',
        documentation: 'Returns the relative path to a directory',
        insertText: '_PathGetRelative(${})'
    },
    {
        label: '_PathMake',
        documentation: 'Creates a path from drive, directory, file name and file extension parts',
        insertText: '_PathMake(${})'
    },
    {
        label: '_PathSplit',
        documentation: 'Splits a path into the drive, directory, file name and file extension parts. An empty string is set if a part is missing',
        insertText: '_PathSplit(${})'
    },
    {
        label: '_ReplaceStringInFile',
        documentation: 'Replaces substrings in a file',
        insertText: '_ReplaceStringInFile(${})'
    },
    {
        label: '_TempFile',
        documentation: 'Generate a name for a temporary file. The file is guaranteed not to exist yet',
        insertText: '_TempFile(${})'
    },
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'File UDF - #include <File.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items