'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_WinAPI_BrowseForFolderDlg',
        documentation: 'Displays a dialog box that enables the user to select a Shell folder'
    },
    {
        label: '_WinAPI_CommDlgExtendedErrorEx',
        documentation: 'Returns a common dialog box error code'
    },
    {
        label: '_WinAPI_ConfirmCredentials',
        documentation: 'Confirms the validity of the credential harvested'
    },
    {
        label: '_WinAPI_FindTextDlg',
        documentation: 'Creates a system-defined modeless Find dialog box to search for text in a document'
    },
    {
        label: '_WinAPI_FlushFRBuffer',
        documentation: 'Destroys the internal buffer that used the _WinAPI_FindTextDlg() and _WinAPI_ReplaceTextDlg() functions'
    },
    {
        label: '_WinAPI_FormatDriveDlg',
        documentation: 'Opens the Shell\'s Format dialog'
    },
    {
        label: '_WinAPI_GetConnectedDlg',
        documentation: 'Launches the Get Connected wizard within the calling application to enable network connectivity'
    },
    {
        label: '_WinAPI_GetFRBuffer',
        documentation: 'Retrieves the current size of the internal buffer that used the _WinAPI_FindTextDlg() and _WinAPI_ReplaceTextDlg() functions'
    },
    {
        label: '_WinAPI_MessageBoxCheck',
        documentation: 'Displays a message box that gives the user the option of suppressing further occurrences'
    },
    {
        label: '_WinAPI_MessageBoxIndirect',
        documentation: 'Creates, displays, and operates a message box'
    },
    {
        label: '_WinAPI_OpenFileDlg',
        documentation: 'Creates a dialog box that lets the user specify the drive, directory, and the name of a file or set of files to be opened'
    },
    {
        label: '_WinAPI_PageSetupDlg',
        documentation: 'Creates a Page Setup dialog box that enables the user to specify the attributes of a printed page'
    },
    {
        label: '_WinAPI_PickIconDlg',
        documentation: 'Displays a dialog box that allows the user to choose an icon'
    },
    {
        label: '_WinAPI_PrintDlg',
        documentation: 'Displays a Print dialog box'
    },
    {
        label: '_WinAPI_PrintDlgEx',
        documentation: 'Displays a Print property sheet that enables the user to specify the properties of a particular print job'
    },
    {
        label: '_WinAPI_ReplaceTextDlg',
        documentation: 'Creates a system-defined modeless dialog box that lets the user specify a string to search for and a replacement string'
    },
    {
        label: '_WinAPI_RestartDlg',
        documentation: 'Displays a dialog box that prompts the user to restart Microsoft Windows'
    },
    {
        label: '_WinAPI_SaveFileDlg',
        documentation: 'Creates a dialog box that lets the user specify the drive, directory, and name of a file to save'
    },
    {
        label: '_WinAPI_SetFRBuffer',
        documentation: 'Sets the size of the internal buffer that used the _WinAPI_FindTextDlg() and _WinAPI_ReplaceTextDlg() functions'
    },
    {
        label: '_WinAPI_ShellAboutDlg',
        documentation: 'Displays a Windows About dialog box'
    },
    {
        label: '_WinAPI_ShellOpenWithDlg',
        documentation: 'Displays the Open With dialog box'
    },
    {
        label: '_WinAPI_ShellStartNetConnectionDlg',
        documentation: 'Displays a general browsing dialog box for a network resource connection'
    },
    {
        label: '_WinAPI_ShellUserAuthenticationDlg',
        documentation: 'Creates and displays a configurable dialog box that accepts credentials information from a user'
    },
    {
        label: '_WinAPI_ShellUserAuthenticationDlgEx',
        documentation: 'Creates and displays a configurable dialog box that accepts credentials information from a user '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIDlg.au3>'
}

module.exports = items