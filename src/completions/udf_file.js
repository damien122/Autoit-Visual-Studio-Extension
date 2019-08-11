'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_FileCountLines',
        documentation: 'Returns the number of lines in the specified file'
    },
    {
        label: '_FileCreate',
        documentation: 'Creates or zero\'s out the length of the file specified'
    },
    {
        label: '_FileListToArray',
        documentation: 'Lists files and\\or folders in a specified folder (Similar to using Dir with the /B Switch)'
    },
    {
        label: '_FileListToArrayRec',
        documentation: 'Lists files and\\or folders in specified path with optional recursion to defined level and result sorting'
    },
    {
        label: '_FilePrint',
        documentation: 'Prints a plain text file'
    },
    {
        label: '_FileReadToArray',
        documentation: 'Reads the specified file into a 1D or 2D array'
    },
    {
        label: '_FileWriteFromArray',
        documentation: 'Writes an array to a specified file'
    },
    {
        label: '_FileWriteLog',
        documentation: 'Writes current date, time and the specified text to a log file'
    },
    {
        label: '_FileWriteToLine',
        documentation: 'Writes text to a specific line in a file'
    },
    {
        label: '_PathFull',
        documentation: 'Creates a path based on the relative path you provide. The newly created absolute path is returned'
    },
    {
        label: '_PathGetRelative',
        documentation: 'Returns the relative path to a directory'
    },
    {
        label: '_PathMake',
        documentation: 'Creates a path from drive, directory, file name and file extension parts'
    },
    {
        label: '_PathSplit',
        documentation: 'Splits a path into the drive, directory, file name and file extension parts. An empty string is set if a part is missing'
    },
    {
        label: '_ReplaceStringInFile',
        documentation: 'Replaces substrings in a file'
    },
    {
        label: '_TempFile',
        documentation: 'Generate a name for a temporary file. The file is guaranteed not to exist yet'
    },
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'File UDF - #include <File.au3>'
}

module.exports = items