'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_WinAPI_DefSubclassProc',
        documentation: 'Calls the next handler in a window\'s subclass chain'
    },
    {
        label: '_WinAPI_DllGetVersion',
        documentation: 'Retrieves a DLL-specific version information'
    },
    {
        label: '_WinAPI_GetAllUsersProfileDirectory',
        documentation: 'Retrieves the path to the root of the directory that contains program data shared by all users'
    },
    {
        label: '_WinAPI_GetDefaultUserProfileDirectory',
        documentation: 'Retrieves the path to the root of the default user\'s profile'
    },
    {
        label: '_WinAPI_GetWindowSubclass',
        documentation: 'Retrieves the reference data for the specified window subclass callback'
    },
    {
        label: '_WinAPI_RemoveWindowSubclass',
        documentation: 'Removes a subclass callback from a window'
    },
    {
        label: '_WinAPI_SetCurrentProcessExplicitAppUserModelID',
        documentation: 'Specifies a unique application-defined Application User Model ID that identifies the current process to the taskbar'
    },
    {
        label: '_WinAPI_SetWindowSubclass',
        documentation: 'Installs or updates a window subclass callback'
    },
    {
        label: '_WinAPI_ShellAddToRecentDocs',
        documentation: 'Adds a file to the most recently and frequently item list'
    },
    {
        label: '_WinAPI_ShellChangeNotify',
        documentation: 'Notifies the system of an event that an application has performed'
    },
    {
        label: '_WinAPI_ShellChangeNotifyDeregister',
        documentation: 'Unregisters the client\'s window'
    },
    {
        label: '_WinAPI_ShellChangeNotifyRegister',
        documentation: 'Registers a window to receive notifications from the file system or Shell'
    },
    {
        label: '_WinAPI_ShellCreateDirectory',
        documentation: 'Creates a new file system folder'
    },
    {
        label: '_WinAPI_ShellEmptyRecycleBin',
        documentation: 'Empties the Recycle Bin on the specified drive'
    },
    {
        label: '_WinAPI_ShellExecute',
        documentation: 'Performs an operation on a specified file'
    },
    {
        label: '_WinAPI_ShellExecuteEx',
        documentation: 'Performs an operation on a specified file'
    },
    {
        label: '_WinAPI_ShellExtractAssociatedIcon',
        documentation: 'Returns a handle to the icon that associated with the specified file\'s'
    },
    {
        label: '_WinAPI_ShellExtractIcon',
        documentation: 'Extracts the icon with the specified dimension from the specified file'
    },
    {
        label: '_WinAPI_ShellFileOperation',
        documentation: 'Copies, moves, renames, or deletes a file system object'
    },
    {
        label: '_WinAPI_ShellFlushSFCache',
        documentation: 'Flushes the special folder cache'
    },
    {
        label: '_WinAPI_ShellGetFileInfo',
        documentation: 'Retrieves information about an object in the file system'
    },
    {
        label: '_WinAPI_ShellGetIconOverlayIndex',
        documentation: 'Retrieves the index of the overlay icon in the system image list'
    },
    {
        label: '_WinAPI_ShellGetKnownFolderIDList',
        documentation: 'Retrieves the path of a known folder as an ITEMIDLIST structure'
    },
    {
        label: '_WinAPI_ShellGetKnownFolderPath',
        documentation: 'Retrieves the full path of a known folder identified'
    },
    {
        label: '_WinAPI_ShellGetLocalizedName',
        documentation: 'Retrieves the localized name of a file in a Shell folder'
    },
    {
        label: '_WinAPI_ShellGetPathFromIDList',
        documentation: 'Converts an item identifier list to a file system path'
    },
    {
        label: '_WinAPI_ShellGetSetFolderCustomSettings',
        documentation: 'Sets or retrieves custom folder settings'
    },
    {
        label: '_WinAPI_ShellGetSettings',
        documentation: 'Retrieves Shell state settings'
    },
    {
        label: '_WinAPI_ShellGetSpecialFolderLocation',
        documentation: 'Retrieves a pointer to the ITEMIDLIST structure (PIDL) of a special folder'
    },
    {
        label: '_WinAPI_ShellGetSpecialFolderPath',
        documentation: 'Retrieves the path of a special folder'
    },
    {
        label: '_WinAPI_ShellGetStockIconInfo',
        documentation: 'Retrieves information about system-defined Shell icons'
    },
    {
        label: '_WinAPI_ShellILCreateFromPath',
        documentation: 'Creates a pointer to an item identifier list (PIDL) from a path'
    },
    {
        label: '_WinAPI_ShellNotifyIcon',
        documentation: 'Sends a message to the taskbar\'s status area'
    },
    {
        label: '_WinAPI_ShellNotifyIconGetRect',
        documentation: 'Gets the screen coordinates of the bounding rectangle of a notification icon'
    },
    {
        label: '_WinAPI_ShellObjectProperties',
        documentation: 'Invokes the Properties context menu command on a Shell object'
    },
    {
        label: '_WinAPI_ShellOpenFolderAndSelectItems',
        documentation: 'Opens a Windows Explorer window with specified items in a particular folder selected'
    },
    {
        label: '_WinAPI_ShellQueryRecycleBin',
        documentation: 'Retrieves the size of the Recycle Bin and the number of items in it, for a specified drive'
    },
    {
        label: '_WinAPI_ShellQueryUserNotificationState',
        documentation: 'Checks the state of the computer for the current user'
    },
    {
        label: '_WinAPI_ShellRemoveLocalizedName',
        documentation: 'Removes the localized name of a file in a Shell folder'
    },
    {
        label: '_WinAPI_ShellRestricted',
        documentation: 'Determines whether a specified administrator policy is in effect'
    },
    {
        label: '_WinAPI_ShellSetKnownFolderPath',
        documentation: 'Redirects a known folder to a new location'
    },
    {
        label: '_WinAPI_ShellSetLocalizedName',
        documentation: 'Sets the localized name of a file in a Shell folder'
    },
    {
        label: '_WinAPI_ShellSetSettings',
        documentation: 'Sets Shell state settings'
    },
    {
        label: '_WinAPI_ShellUpdateImage',
        documentation: 'Notifies the Shell that an image in the system image list has changed '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIShellEx.au3>'
}

module.exports = items