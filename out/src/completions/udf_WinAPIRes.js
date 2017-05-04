'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_CreateCaret',
        documentation: 'Creates a new shape for the system caret and assigns ownership of the caret to the specified window',
        insertText: '_WinAPI_CreateCaret(${})'
    },
    {
        label: '_WinAPI_DestroyCaret',
        documentation: 'Destroys the caret\'s current shape, frees the caret from the window, and removes the caret from the screen',
        insertText: '_WinAPI_DestroyCaret(${})'
    },
    {
        label: '_WinAPI_GetCaretBlinkTime',
        documentation: 'Returns the time required to invert the caret\'s pixels',
        insertText: '_WinAPI_GetCaretBlinkTime(${})'
    },
    {
        label: '_WinAPI_GetCaretPos',
        documentation: 'Retrieves the caret\'s position',
        insertText: '_WinAPI_GetCaretPos(${})'
    },
    {
        label: '_WinAPI_HideCaret',
        documentation: 'Removes the caret from the screen',
        insertText: '_WinAPI_HideCaret(${})'
    },
    {
        label: '_WinAPI_SetCaretBlinkTime',
        documentation: 'Sets the caret blink time',
        insertText: '_WinAPI_SetCaretBlinkTime(${})'
    },
    {
        label: '_WinAPI_SetCaretPos',
        documentation: 'Moves the caret to the specified coordinates',
        insertText: '_WinAPI_SetCaretPos(${})'
    },
    {
        label: '_WinAPI_ShowCaret',
        documentation: 'Makes the caret visible on the screen at the caret\'s current position ',
        insertText: '_WinAPI_ShowCaret(${})'
    },
    {
        label: '_WinAPI_ClipCursor',
        documentation: 'Confines the cursor to a rectangular area on the screen',
        insertText: '_WinAPI_ClipCursor(${})'
    },
    {
        label: '_WinAPI_CopyCursor',
        documentation: 'Creates a duplicate of a specified cursor',
        insertText: '_WinAPI_CopyCursor(${})'
    },
    {
        label: '_WinAPI_DestroyCursor',
        documentation: 'Destroys a cursor and frees any memory the cursor occupied',
        insertText: '_WinAPI_DestroyCursor(${})'
    },
    {
        label: '_WinAPI_GetClipCursor',
        documentation: 'Retrieves the screen coordinates of the rectangular area to which the cursor is confined',
        insertText: '_WinAPI_GetClipCursor(${})'
    },
    {
        label: '_WinAPI_GetCursor',
        documentation: 'Retrieves a handle to the current cursor',
        insertText: '_WinAPI_GetCursor(${})'
    },
    {
        label: '_WinAPI_LoadCursor',
        documentation: 'Loads the specified cursor resource from the executable (.exe) file',
        insertText: '_WinAPI_LoadCursor(${})'
    },
    {
        label: '_WinAPI_LoadCursorFromFile',
        documentation: 'Creates a cursor based on data contained in a file',
        insertText: '_WinAPI_LoadCursorFromFile(${})'
    },
    {
        label: '_WinAPI_SetSystemCursor',
        documentation: 'Enables an application to customize the system cursors ',
        insertText: '_WinAPI_SetSystemCursor(${})'
    },
    {
        label: '_WinAPI_AddIconTransparency',
        documentation: 'Adds a transparency to the specified 32 bits-per-pixel icon',
        insertText: '_WinAPI_AddIconTransparency(${})'
    },
    {
        label: '_WinAPI_CreateIcon',
        documentation: 'Creates an icon that has the specified size, colors, and bit patterns',
        insertText: '_WinAPI_CreateIcon(${})'
    },
    {
        label: '_WinAPI_CreateIconFromResourceEx',
        documentation: 'Creates an icon or cursor from resource bits describing the icon',
        insertText: '_WinAPI_CreateIconFromResourceEx(${})'
    },
    {
        label: '_WinAPI_ExtractIcon',
        documentation: 'Extracts an icon from the specified executable file, DLL, or icon file',
        insertText: '_WinAPI_ExtractIcon(${})'
    },
    {
        label: '_WinAPI_FileIconInit',
        documentation: 'Initializes or reinitializes the system image list',
        insertText: '_WinAPI_FileIconInit(${})'
    },
    {
        label: '_WinAPI_GetIconInfoEx',
        documentation: 'Retrieves information about the specified icon or cursor',
        insertText: '_WinAPI_GetIconInfoEx(${})'
    },
    {
        label: '_WinAPI_LoadIcon',
        documentation: 'Loads the specified icon resource from the executable (.exe) file associated with an application instance',
        insertText: '_WinAPI_LoadIcon(${})'
    },
    {
        label: '_WinAPI_LookupIconIdFromDirectoryEx',
        documentation: 'Searches through icon or cursor data for the icon or cursor that best fits the current display device ',
        insertText: '_WinAPI_LookupIconIdFromDirectoryEx(${})'
    },
    {
        label: '_WinAPI_BeginUpdateResource',
        documentation: 'Retrieves a handle that can be used to add, delete, or replace resources in a binary module',
        insertText: '_WinAPI_BeginUpdateResource(${})'
    },
    {
        label: '_WinAPI_EndUpdateResource',
        documentation: 'Commits or discards a changes of the resources within module',
        insertText: '_WinAPI_EndUpdateResource(${})'
    },
    {
        label: '_WinAPI_EnumResourceLanguages',
        documentation: 'Enumerates a language-specific resources, of the specified type and name, associated with a binary module',
        insertText: '_WinAPI_EnumResourceLanguages(${})'
    },
    {
        label: '_WinAPI_EnumResourceNames',
        documentation: 'Enumerates the resources of a specified type within a binary module',
        insertText: '_WinAPI_EnumResourceNames(${})'
    },
    {
        label: '_WinAPI_EnumResourceTypes',
        documentation: 'Enumerates the resource types within a binary module',
        insertText: '_WinAPI_EnumResourceTypes(${})'
    },
    {
        label: '_WinAPI_FindResource',
        documentation: 'Determines the location of a resource with the specified type and name in the specified module',
        insertText: '_WinAPI_FindResource(${})'
    },
    {
        label: '_WinAPI_FindResourceEx',
        documentation: 'Determines the location of the resource with the specified type, name, and language in the specified module',
        insertText: '_WinAPI_FindResourceEx(${})'
    },
    {
        label: '_WinAPI_FreeResource',
        documentation: 'Decrements (decreases by one) the reference count of a loaded resource',
        insertText: '_WinAPI_FreeResource(${})'
    },
    {
        label: '_WinAPI_GetFileVersionInfo',
        documentation: 'Retrieves version information for the specified file',
        insertText: '_WinAPI_GetFileVersionInfo(${})'
    },
    {
        label: '_WinAPI_LoadIndirectString',
        documentation: 'Extracts the string from the specified resource when given an indirect string',
        insertText: '_WinAPI_LoadIndirectString(${})'
    },
    {
        label: '_WinAPI_LoadResource',
        documentation: 'Loads the specified resource into global memory',
        insertText: '_WinAPI_LoadResource(${})'
    },
    {
        label: '_WinAPI_LoadStringEx',
        documentation: 'Loads a string resource for the specified language from the specified module',
        insertText: '_WinAPI_LoadStringEx(${})'
    },
    {
        label: '_WinAPI_LockResource',
        documentation: 'Locks the specified resource in memory',
        insertText: '_WinAPI_LockResource(${})'
    },
    {
        label: '_WinAPI_SizeOfResource',
        documentation: 'Returns the size, in bytes, of the specified resource',
        insertText: '_WinAPI_SizeOfResource(${})'
    },
    {
        label: '_WinAPI_UpdateResource',
        documentation: 'Adds, deletes, or replaces a resource in a portable executable (PE) file',
        insertText: '_WinAPI_UpdateResource(${})'
    },
    {
        label: '_WinAPI_VerQueryRoot',
        documentation: 'Retrieves the fixed version information from the specified version-information resource',
        insertText: '_WinAPI_VerQueryRoot(${})'
    },
    {
        label: '_WinAPI_VerQueryValue',
        documentation: 'Retrieves the non-fixed (strings) version information from the specified version-information resource',
        insertText: '_WinAPI_VerQueryValue(${})'
    },
    {
        label: '_WinAPI_VerQueryValueEx',
        documentation: 'Retrieves the text information from the version-information resource of the specified binary module ',
        insertText: '_WinAPI_VerQueryValueEx(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIRes.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items