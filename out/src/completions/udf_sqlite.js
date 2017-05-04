'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_SQLite_Changes',
        documentation: 'Returns the number of database rows that were changed by the most recently completed statement with this connection',
        insertText: '_SQLite_Changes(${})'
    },

    {
        label: '_SQLite_Close',
        documentation: 'Close an open database',
        insertText: '_SQLite_Close(${})'
    },

    {
        label: '_SQLite_Display2DResult',
        documentation: 'Returns or prints to Console a formated display of a 2Dimensional array',
        insertText: '_SQLite_Display2DResult(${})'
    },

    {
        label: '_SQLite_Encode',
        documentation: 'Binary encodes a string, number or binary data for use as BLOB in SQLite statements',
        insertText: '_SQLite_Encode(${})'
    },

    {
        label: '_SQLite_ErrCode',
        documentation: 'Returns last error code (numeric)',
        insertText: '_SQLite_ErrCode(${})'
    },

    {
        label: '_SQLite_ErrMsg',
        documentation: 'Returns a string describing in english the error condition for the most recent sqlite3_* API call',
        insertText: '_SQLite_ErrMsg(${})'
    },

    {
        label: '_SQLite_Escape',
        documentation: 'Escapes a string or number for use as TEXT in SQLite statements',
        insertText: '_SQLite_Escape(${})'
    },

    {
        label: '_SQLite_Exec',
        documentation: 'Executes a SQLite query, does not handle results',
        insertText: '_SQLite_Exec(${})'
    },

    {
        label: '_SQLite_FastEncode',
        documentation: 'Fast encodes binary data (exclusively) for use in SQLite statements',
        insertText: '_SQLite_FastEncode(${})'
    },

    {
        label: '_SQLite_FastEscape',
        documentation: 'Fast escapes a string or number for use as TEXT in SQLite statements',
        insertText: '_SQLite_FastEscape(${})'
    },

    {
        label: '_SQLite_FetchData',
        documentation: 'Fetches 1 row of data from a _SQLite_Query() based query',
        insertText: '_SQLite_FetchData(${})'
    },

    {
        label: '_SQLite_FetchNames',
        documentation: 'Read out the Column names of a _SQLite_Query() based query',
        insertText: '_SQLite_FetchNames(${})'
    },

    {
        label: '_SQLite_GetTable',
        documentation: 'Passes Out a 1Dimensional Array Containing Tablenames and Data of Executed Query',
        insertText: '_SQLite_GetTable(${})'
    },

    {
        label: '_SQLite_GetTable2d',
        documentation: 'Passes out a 2Dimensional array containing column names and data of executed query',
        insertText: '_SQLite_GetTable2d(${})'
    },

    {
        label: '_SQLite_LastInsertRowID',
        documentation: 'Returns the ROWID of the most recent insert in the database by this connection',
        insertText: '_SQLite_LastInsertRowID(${})'
    },

    {
        label: '_SQLite_LibVersion',
        documentation: 'Returns the version number of the library',
        insertText: '_SQLite_LibVersion(${})'
    },

    {
        label: '_SQLite_Open',
        documentation: 'Opens/creates a SQLite database',
        insertText: '_SQLite_Open(${})'
    },

    {
        label: '_SQLite_Query',
        documentation: 'Prepares a SQLite Query',
        insertText: '_SQLite_Query(${})'
    },

    {
        label: '_SQLite_QueryFinalize',
        documentation: 'Finalizes an _SQLite_Query() based query. The query is interrupted',
        insertText: '_SQLite_QueryFinalize(${})'
    },

    {
        label: '_SQLite_QueryReset',
        documentation: 'Reset a _SQLite_Query() based query',
        insertText: '_SQLite_QueryReset(${})'
    },

    {
        label: '_SQLite_QuerySingleRow',
        documentation: 'Read out the first row of the result from the specified query',
        insertText: '_SQLite_QuerySingleRow(${})'
    },

    {
        label: '_SQLite_SafeMode',
        documentation: 'Disable or Enable Safe mode',
        insertText: '_SQLite_SafeMode(${})'
    },

    {
        label: '_SQLite_SetTimeout',
        documentation: 'Sets timeout for busy handler',
        insertText: '_SQLite_SetTimeout(${})'
    },

    {
        label: '_SQLite_Shutdown',
        documentation: 'Unloads SQLite.dll',
        insertText: '_SQLite_Shutdown(${})'
    },

    {
        label: '_SQLite_SQLiteExe',
        documentation: 'Executes commands in sqlite3.exe',
        insertText: '_SQLite_SQLiteExe(${})'
    },

    {
        label: '_SQLite_Startup',
        documentation: 'Loads SQLite3.dll',
        insertText: '_SQLite_Startup(${})'
    },

    {
        label: '_SQLite_TotalChanges',
        documentation: 'Returns number of all changes (including via triggers and foreign keys) from start of connection ',
        insertText: '_SQLite_TotalChanges(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <SQLite.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items