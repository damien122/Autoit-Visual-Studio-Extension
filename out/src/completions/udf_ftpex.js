'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_FTP_Close',
        documentation: 'Closes the _FTP_Open or _FTP_Connect session',
        insertText: '_FTP_Close(${})'
    },
    {
        label: '_FTP_Command',
        documentation: 'Sends a command to an FTP server',
        insertText: '_FTP_Command(${})'
    },
    {
        label: '_FTP_Connect',
        documentation: 'Connects to an FTP server',
        insertText: '_FTP_Connect(${})'
    },
    {
        label: '_FTP_DecodeInternetStatus',
        documentation: 'Decode a received Internet Status',
        insertText: '_FTP_DecodeInternetStatus(${})'
    },
    {
        label: '_FTP_DirCreate',
        documentation: 'Makes an Directory on an FTP server',
        insertText: '_FTP_DirCreate(${})'
    },
    {
        label: '_FTP_DirDelete',
        documentation: 'Delete\'s an Directory on an FTP server',
        insertText: '_FTP_DirDelete(${})'
    },
    {
        label: '_FTP_DirGetCurrent',
        documentation: 'Get Current Directory on an FTP server',
        insertText: '_FTP_DirGetCurrent(${})'
    },
    {
        label: '_FTP_DirPutContents',
        documentation: 'Puts an folder on an FTP server. Recursivley if selected',
        insertText: '_FTP_DirPutContents(${})'
    },
    {
        label: '_FTP_DirSetCurrent',
        documentation: 'Set Current Directory on an FTP server',
        insertText: '_FTP_DirSetCurrent(${})'
    },
    {
        label: '_FTP_FileClose',
        documentation: 'Closes the Handle returned by _FTP_FileOpen',
        insertText: '_FTP_FileClose(${})'
    },
    {
        label: '_FTP_FileDelete',
        documentation: 'Delete an file from an FTP server',
        insertText: '_FTP_FileDelete(${})'
    },
    {
        label: '_FTP_FileGet',
        documentation: 'Get file from a FTP server',
        insertText: '_FTP_FileGet(${})'
    },
    {
        label: '_FTP_FileGetSize',
        documentation: 'Gets filesize of a file on the FTP server',
        insertText: '_FTP_FileGetSize(${})'
    },
    {
        label: '_FTP_FileOpen',
        documentation: 'Initiates access to a remote file on an FTP server for reading or writing',
        insertText: '_FTP_FileOpen(${})'
    },
    {
        label: '_FTP_FilePut',
        documentation: 'Puts an file on an FTP server',
        insertText: '_FTP_FilePut(${})'
    },
    {
        label: '_FTP_FileRead',
        documentation: 'Reads data from a handle opened by _FTP_FileOpen()',
        insertText: '_FTP_FileRead(${})'
    },
    {
        label: '_FTP_FileRename',
        documentation: 'Renames an file on an FTP server',
        insertText: '_FTP_FileRename(${})'
    },
    {
        label: '_FTP_FileTimeLoHiToStr',
        documentation: 'Converts filetime Loword and Hiword to a string',
        insertText: '_FTP_FileTimeLoHiToStr(${})'
    },
    {
        label: '_FTP_FindFileClose',
        documentation: 'Delete FindFile Handle',
        insertText: '_FTP_FindFileClose(${})'
    },
    {
        label: '_FTP_FindFileFirst',
        documentation: 'Find First File on an FTP server',
        insertText: '_FTP_FindFileFirst(${})'
    },
    {
        label: '_FTP_FindFileNext',
        documentation: 'Find Next File on an FTP server',
        insertText: '_FTP_FindFileNext(${})'
    },
    {
        label: '_FTP_GetLastResponseInfo',
        documentation: 'Retrieves the last error description or server response on the thread calling this function',
        insertText: '_FTP_GetLastResponseInfo(${})'
    },
    {
        label: '_FTP_ListToArray',
        documentation: 'Get Filenames, Directories or Both of current remote directory',
        insertText: '_FTP_ListToArray(${})'
    },
    {
        label: '_FTP_ListToArray2D',
        documentation: 'Get Filenames and filesizes of current remote directory',
        insertText: '_FTP_ListToArray2D(${})'
    },
    {
        label: '_FTP_ListToArrayEx',
        documentation: 'Get names, sizes, attributes and times of files/dir of current remote directory',
        insertText: '_FTP_ListToArrayEx(${})'
    },
    {
        label: '_FTP_Open',
        documentation: 'Opens an FTP session',
        insertText: '_FTP_Open(${})'
    },
    {
        label: '_FTP_ProgressDownload',
        documentation: 'Downloads a file in Binary Mode and shows a Progress window or by Calling a User defined Function',
        insertText: '_FTP_ProgressDownload(${})'
    },
    {
        label: '_FTP_ProgressUpload',
        documentation: 'Uploads a file in Binary Mode and shows a Progress window or by Calling a User defined Function',
        insertText: '_FTP_ProgressUpload(${})'
    },
    {
        label: '_FTP_SetStatusCallback',
        documentation: 'Registers callback function that WinINet functions can call as progress is made during an operation',
        insertText: '_FTP_SetStatusCallback(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'FTPEx UDF - #include <FTPEx.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items