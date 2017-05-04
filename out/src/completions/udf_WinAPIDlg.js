'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_BrowseForFolderDlg',
        documentation: 'Displays a dialog box that enables the user to select a Shell folder',
        insertText: '_WinAPI_BrowseForFolderDlg(${})'
    },
    {
        label: '_WinAPI_CommDlgExtendedErrorEx',
        documentation: 'Returns a common dialog box error code',
        insertText: '_WinAPI_CommDlgExtendedErrorEx(${})'
    },
    {
        label: '_WinAPI_ConfirmCredentials',
        documentation: 'Confirms the validity of the credential harvested',
        insertText: '_WinAPI_ConfirmCredentials(${})'
    },
    {
        label: '_WinAPI_FindTextDlg',
        documentation: 'Creates a system-defined modeless Find dialog box to search for text in a document',
        insertText: '_WinAPI_FindTextDlg(${})'
    },
    {
        label: '_WinAPI_FlushFRBuffer',
        documentation: 'Destroys the internal buffer that used the _WinAPI_FindTextDlg() and _WinAPI_ReplaceTextDlg() functions',
        insertText: '_WinAPI_FlushFRBuffer(${})'
    },
    {
        label: '_WinAPI_FormatDriveDlg',
        documentation: 'Opens the Shell\'s Format dialog',
        insertText: '_WinAPI_FormatDriveDlg(${})'
    },
    {
        label: '_WinAPI_GetConnectedDlg',
        documentation: 'Launches the Get Connected wizard within the calling application to enable network connectivity',
        insertText: '_WinAPI_GetConnectedDlg(${})'
    },
    {
        label: '_WinAPI_GetFRBuffer',
        documentation: 'Retrieves the current size of the internal buffer that used the _WinAPI_FindTextDlg() and _WinAPI_ReplaceTextDlg() functions',
        insertText: '_WinAPI_GetFRBuffer(${})'
    },
    {
        label: '_WinAPI_MessageBoxCheck',
        documentation: 'Displays a message box that gives the user the option of suppressing further occurrences',
        insertText: '_WinAPI_MessageBoxCheck(${})'
    },
    {
        label: '_WinAPI_MessageBoxIndirect',
        documentation: 'Creates, displays, and operates a message box',
        insertText: '_WinAPI_MessageBoxIndirect(${})'
    },
    {
        label: '_WinAPI_OpenFileDlg',
        documentation: 'Creates a dialog box that lets the user specify the drive, directory, and the name of a file or set of files to be opened',
        insertText: '_WinAPI_OpenFileDlg(${})'
    },
    {
        label: '_WinAPI_PageSetupDlg',
        documentation: 'Creates a Page Setup dialog box that enables the user to specify the attributes of a printed page',
        insertText: '_WinAPI_PageSetupDlg(${})'
    },
    {
        label: '_WinAPI_PickIconDlg',
        documentation: 'Displays a dialog box that allows the user to choose an icon',
        insertText: '_WinAPI_PickIconDlg(${})'
    },
    {
        label: '_WinAPI_PrintDlg',
        documentation: 'Displays a Print dialog box',
        insertText: '_WinAPI_PrintDlg(${})'
    },
    {
        label: '_WinAPI_PrintDlgEx',
        documentation: 'Displays a Print property sheet that enables the user to specify the properties of a particular print job',
        insertText: '_WinAPI_PrintDlgEx(${})'
    },
    {
        label: '_WinAPI_ReplaceTextDlg',
        documentation: 'Creates a system-defined modeless dialog box that lets the user specify a string to search for and a replacement string',
        insertText: '_WinAPI_ReplaceTextDlg(${})'
    },
    {
        label: '_WinAPI_RestartDlg',
        documentation: 'Displays a dialog box that prompts the user to restart Microsoft Windows',
        insertText: '_WinAPI_RestartDlg(${})'
    },
    {
        label: '_WinAPI_SaveFileDlg',
        documentation: 'Creates a dialog box that lets the user specify the drive, directory, and name of a file to save',
        insertText: '_WinAPI_SaveFileDlg(${})'
    },
    {
        label: '_WinAPI_SetFRBuffer',
        documentation: 'Sets the size of the internal buffer that used the _WinAPI_FindTextDlg() and _WinAPI_ReplaceTextDlg() functions',
        insertText: '_WinAPI_SetFRBuffer(${})'
    },
    {
        label: '_WinAPI_ShellAboutDlg',
        documentation: 'Displays a Windows About dialog box',
        insertText: '_WinAPI_ShellAboutDlg(${})'
    },
    {
        label: '_WinAPI_ShellOpenWithDlg',
        documentation: 'Displays the Open With dialog box',
        insertText: '_WinAPI_ShellOpenWithDlg(${})'
    },
    {
        label: '_WinAPI_ShellStartNetConnectionDlg',
        documentation: 'Displays a general browsing dialog box for a network resource connection',
        insertText: '_WinAPI_ShellStartNetConnectionDlg(${})'
    },
    {
        label: '_WinAPI_ShellUserAuthenticationDlg',
        documentation: 'Creates and displays a configurable dialog box that accepts credentials information from a user',
        insertText: '_WinAPI_ShellUserAuthenticationDlg(${})'
    },
    {
        label: '_WinAPI_ShellUserAuthenticationDlgEx',
        documentation: 'Creates and displays a configurable dialog box that accepts credentials information from a user ',
        insertText: '_WinAPI_ShellUserAuthenticationDlgEx(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIDlg.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items