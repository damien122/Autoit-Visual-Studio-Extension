'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_AddMRUString',
        documentation: 'Adds a string to the top of the most recently used (MRU) list',
        insertText: '_WinAPI_AddMRUString(${})'
    },
    {
        label: '_WinAPI_AssocGetPerceivedType',
        documentation: 'Retrieves a file\'s perceived type based on its extension',
        insertText: '_WinAPI_AssocGetPerceivedType(${})'
    },
    {
        label: '_WinAPI_AssocQueryString',
        documentation: 'Searches for and retrieves a file or protocol association-related string from the registry',
        insertText: '_WinAPI_AssocQueryString(${})'
    },
    {
        label: '_WinAPI_CreateMRUList',
        documentation: 'Creates a new most recently used (MRU) list',
        insertText: '_WinAPI_CreateMRUList(${})'
    },
    {
        label: '_WinAPI_DllInstall',
        documentation: 'Registers OLE controls such as DLL or ActiveX Controls (OCX) files',
        insertText: '_WinAPI_DllInstall(${})'
    },
    {
        label: '_WinAPI_DllUninstall',
        documentation: 'Unregisters OLE controls such as DLL or ActiveX Controls (OCX) files',
        insertText: '_WinAPI_DllUninstall(${})'
    },
    {
        label: '_WinAPI_EnumMRUList',
        documentation: 'Enumerates the contents of the most recently used (MRU) list',
        insertText: '_WinAPI_EnumMRUList(${})'
    },
    {
        label: '_WinAPI_FreeMRUList',
        documentation: 'Frees the handle associated with the most recently used (MRU) list and writes cached data to the registry',
        insertText: '_WinAPI_FreeMRUList(${})'
    },
    {
        label: '_WinAPI_GetRegKeyNameByHandle',
        documentation: 'Retrieves a name of the specified registry key',
        insertText: '_WinAPI_GetRegKeyNameByHandle(${})'
    },
    {
        label: '_WinAPI_RegCloseKey',
        documentation: 'Closes a handle to the specified registry key',
        insertText: '_WinAPI_RegCloseKey(${})'
    },
    {
        label: '_WinAPI_RegConnectRegistry',
        documentation: 'Establishes a connection to a predefined registry key on another computer',
        insertText: '_WinAPI_RegConnectRegistry(${})'
    },
    {
        label: '_WinAPI_RegCopyTree',
        documentation: 'Recursively copies the subkeys and values of the source subkey to the destination key',
        insertText: '_WinAPI_RegCopyTree(${})'
    },
    {
        label: '_WinAPI_RegCopyTreeEx',
        documentation: 'Copies the specified registry key, along with its values and subkeys, to the specified destination key',
        insertText: '_WinAPI_RegCopyTreeEx(${})'
    },
    {
        label: '_WinAPI_RegCreateKey',
        documentation: 'Creates the specified registry key',
        insertText: '_WinAPI_RegCreateKey(${})'
    },
    {
        label: '_WinAPI_RegDeleteEmptyKey',
        documentation: 'Deletes an empty key',
        insertText: '_WinAPI_RegDeleteEmptyKey(${})'
    },
    {
        label: '_WinAPI_RegDeleteKey',
        documentation: 'Deletes a subkey and its values',
        insertText: '_WinAPI_RegDeleteKey(${})'
    },
    {
        label: '_WinAPI_RegDeleteKeyValue',
        documentation: 'Removes the specified value from the specified registry key and subkey',
        insertText: '_WinAPI_RegDeleteKeyValue(${})'
    },
    {
        label: '_WinAPI_RegDeleteTree',
        documentation: 'Deletes a subkey and all its descendants',
        insertText: '_WinAPI_RegDeleteTree(${})'
    },
    {
        label: '_WinAPI_RegDeleteTreeEx',
        documentation: 'Deletes the subkeys and values of the specified key recursively',
        insertText: '_WinAPI_RegDeleteTreeEx(${})'
    },
    {
        label: '_WinAPI_RegDeleteValue',
        documentation: 'Removes a named value from the specified registry key',
        insertText: '_WinAPI_RegDeleteValue(${})'
    },
    {
        label: '_WinAPI_RegDisableReflectionKey',
        documentation: 'Disables registry reflection for the specified key',
        insertText: '_WinAPI_RegDisableReflectionKey(${})'
    },
    {
        label: '_WinAPI_RegDuplicateHKey',
        documentation: 'Duplicates a registry key\'s handle',
        insertText: '_WinAPI_RegDuplicateHKey(${})'
    },
    {
        label: '_WinAPI_RegEnableReflectionKey',
        documentation: 'Restores registry reflection for the specified disabled key',
        insertText: '_WinAPI_RegEnableReflectionKey(${})'
    },
    {
        label: '_WinAPI_RegEnumKey',
        documentation: 'Enumerates the subkeys of the specified open registry key',
        insertText: '_WinAPI_RegEnumKey(${})'
    },
    {
        label: '_WinAPI_RegEnumValue',
        documentation: 'Enumerates the values for the specified open registry key',
        insertText: '_WinAPI_RegEnumValue(${})'
    },
    {
        label: '_WinAPI_RegFlushKey',
        documentation: 'Writes all the attributes of the specified open registry key into the registry',
        insertText: '_WinAPI_RegFlushKey(${})'
    },
    {
        label: '_WinAPI_RegLoadMUIString',
        documentation: 'Loads the specified string from the specified key and subkey',
        insertText: '_WinAPI_RegLoadMUIString(${})'
    },
    {
        label: '_WinAPI_RegNotifyChangeKeyValue',
        documentation: 'Notifies the caller about changes to the attributes or contents of a specified registry key',
        insertText: '_WinAPI_RegNotifyChangeKeyValue(${})'
    },
    {
        label: '_WinAPI_RegOpenKey',
        documentation: 'Opens the specified registry key',
        insertText: '_WinAPI_RegOpenKey(${})'
    },
    {
        label: '_WinAPI_RegQueryInfoKey',
        documentation: 'Retrieves information about the specified registry key',
        insertText: '_WinAPI_RegQueryInfoKey(${})'
    },
    {
        label: '_WinAPI_RegQueryLastWriteTime',
        documentation: 'Retrieves information about the last write time to the specified registry key',
        insertText: '_WinAPI_RegQueryLastWriteTime(${})'
    },
    {
        label: '_WinAPI_RegQueryMultipleValues',
        documentation: 'Retrieves the type and data for a list of value names associated with an open registry key',
        insertText: '_WinAPI_RegQueryMultipleValues(${})'
    },
    {
        label: '_WinAPI_RegQueryReflectionKey',
        documentation: 'Determines whether reflection has been disabled or enabled for the specified key',
        insertText: '_WinAPI_RegQueryReflectionKey(${})'
    },
    {
        label: '_WinAPI_RegQueryValue',
        documentation: 'Retrieves the type and data for the specified value name associated with an open registry key',
        insertText: '_WinAPI_RegQueryValue(${})'
    },
    {
        label: '_WinAPI_RegRestoreKey',
        documentation: 'Reads the registry information in a specified file and copies it over the specified key',
        insertText: '_WinAPI_RegRestoreKey(${})'
    },
    {
        label: '_WinAPI_RegSaveKey',
        documentation: 'Saves the specified key and all of its subkeys and values to a new file, in the standard format',
        insertText: '_WinAPI_RegSaveKey(${})'
    },
    {
        label: '_WinAPI_RegSetValue',
        documentation: 'Sets the data and type of a specified value under a registry key',
        insertText: '_WinAPI_RegSetValue(${})'
    },
    {
        label: '_WinAPI_SfcIsKeyProtected',
        documentation: 'Determines whether the specified registry key is protected ',
        insertText: '_WinAPI_SfcIsKeyProtected(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIReg.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items