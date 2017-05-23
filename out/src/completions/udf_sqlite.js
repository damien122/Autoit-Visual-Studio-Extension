'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_SQLite_Changes',
        documentation: 'Returns the number of database rows that were changed by the most recently completed statement with this connection'
    },

    {
        label: '_SQLite_Close',
        documentation: 'Close an open database'
    },

    {
        label: '_SQLite_Display2DResult',
        documentation: 'Returns or prints to Console a formated display of a 2Dimensional array'
    },

    {
        label: '_SQLite_Encode',
        documentation: 'Binary encodes a string, number or binary data for use as BLOB in SQLite statements'
    },

    {
        label: '_SQLite_ErrCode',
        documentation: 'Returns last error code (numeric)'
    },

    {
        label: '_SQLite_ErrMsg',
        documentation: 'Returns a string describing in english the error condition for the most recent sqlite3_* API call'
    },

    {
        label: '_SQLite_Escape',
        documentation: 'Escapes a string or number for use as TEXT in SQLite statements'
    },

    {
        label: '_SQLite_Exec',
        documentation: 'Executes a SQLite query, does not handle results'
    },

    {
        label: '_SQLite_FastEncode',
        documentation: 'Fast encodes binary data (exclusively) for use in SQLite statements'
    },

    {
        label: '_SQLite_FastEscape',
        documentation: 'Fast escapes a string or number for use as TEXT in SQLite statements'
    },

    {
        label: '_SQLite_FetchData',
        documentation: 'Fetches 1 row of data from a _SQLite_Query() based query'
    },

    {
        label: '_SQLite_FetchNames',
        documentation: 'Read out the Column names of a _SQLite_Query() based query'
    },

    {
        label: '_SQLite_GetTable',
        documentation: 'Passes Out a 1Dimensional Array Containing Tablenames and Data of Executed Query'
    },

    {
        label: '_SQLite_GetTable2d',
        documentation: 'Passes out a 2Dimensional array containing column names and data of executed query'
    },

    {
        label: '_SQLite_LastInsertRowID',
        documentation: 'Returns the ROWID of the most recent insert in the database by this connection'
    },

    {
        label: '_SQLite_LibVersion',
        documentation: 'Returns the version number of the library'
    },

    {
        label: '_SQLite_Open',
        documentation: 'Opens/creates a SQLite database'
    },

    {
        label: '_SQLite_Query',
        documentation: 'Prepares a SQLite Query'
    },

    {
        label: '_SQLite_QueryFinalize',
        documentation: 'Finalizes an _SQLite_Query() based query. The query is interrupted'
    },

    {
        label: '_SQLite_QueryReset',
        documentation: 'Reset a _SQLite_Query() based query'
    },

    {
        label: '_SQLite_QuerySingleRow',
        documentation: 'Read out the first row of the result from the specified query'
    },

    {
        label: '_SQLite_SafeMode',
        documentation: 'Disable or Enable Safe mode'
    },

    {
        label: '_SQLite_SetTimeout',
        documentation: 'Sets timeout for busy handler'
    },

    {
        label: '_SQLite_Shutdown',
        documentation: 'Unloads SQLite.dll'
    },

    {
        label: '_SQLite_SQLiteExe',
        documentation: 'Executes commands in sqlite3.exe'
    },

    {
        label: '_SQLite_Startup',
        documentation: 'Loads SQLite3.dll'
    },

    {
        label: '_SQLite_TotalChanges',
        documentation: 'Returns number of all changes (including via triggers and foreign keys) from start of connection '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <SQLite.au3>'
}

module.exports = items