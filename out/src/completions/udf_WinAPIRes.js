'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_WinAPI_CreateCaret',
        documentation: 'Creates a new shape for the system caret and assigns ownership of the caret to the specified window'
    },
    {
        label: '_WinAPI_DestroyCaret',
        documentation: 'Destroys the caret\'s current shape, frees the caret from the window, and removes the caret from the screen'
    },
    {
        label: '_WinAPI_GetCaretBlinkTime',
        documentation: 'Returns the time required to invert the caret\'s pixels'
    },
    {
        label: '_WinAPI_GetCaretPos',
        documentation: 'Retrieves the caret\'s position'
    },
    {
        label: '_WinAPI_HideCaret',
        documentation: 'Removes the caret from the screen'
    },
    {
        label: '_WinAPI_SetCaretBlinkTime',
        documentation: 'Sets the caret blink time'
    },
    {
        label: '_WinAPI_SetCaretPos',
        documentation: 'Moves the caret to the specified coordinates'
    },
    {
        label: '_WinAPI_ShowCaret',
        documentation: 'Makes the caret visible on the screen at the caret\'s current position '
    },
    {
        label: '_WinAPI_ClipCursor',
        documentation: 'Confines the cursor to a rectangular area on the screen'
    },
    {
        label: '_WinAPI_CopyCursor',
        documentation: 'Creates a duplicate of a specified cursor'
    },
    {
        label: '_WinAPI_DestroyCursor',
        documentation: 'Destroys a cursor and frees any memory the cursor occupied'
    },
    {
        label: '_WinAPI_GetClipCursor',
        documentation: 'Retrieves the screen coordinates of the rectangular area to which the cursor is confined'
    },
    {
        label: '_WinAPI_GetCursor',
        documentation: 'Retrieves a handle to the current cursor'
    },
    {
        label: '_WinAPI_LoadCursor',
        documentation: 'Loads the specified cursor resource from the executable (.exe) file'
    },
    {
        label: '_WinAPI_LoadCursorFromFile',
        documentation: 'Creates a cursor based on data contained in a file'
    },
    {
        label: '_WinAPI_SetSystemCursor',
        documentation: 'Enables an application to customize the system cursors '
    },
    {
        label: '_WinAPI_AddIconTransparency',
        documentation: 'Adds a transparency to the specified 32 bits-per-pixel icon'
    },
    {
        label: '_WinAPI_CreateIcon',
        documentation: 'Creates an icon that has the specified size, colors, and bit patterns'
    },
    {
        label: '_WinAPI_CreateIconFromResourceEx',
        documentation: 'Creates an icon or cursor from resource bits describing the icon'
    },
    {
        label: '_WinAPI_ExtractIcon',
        documentation: 'Extracts an icon from the specified executable file, DLL, or icon file'
    },
    {
        label: '_WinAPI_FileIconInit',
        documentation: 'Initializes or reinitializes the system image list'
    },
    {
        label: '_WinAPI_GetIconInfoEx',
        documentation: 'Retrieves information about the specified icon or cursor'
    },
    {
        label: '_WinAPI_LoadIcon',
        documentation: 'Loads the specified icon resource from the executable (.exe) file associated with an application instance'
    },
    {
        label: '_WinAPI_LookupIconIdFromDirectoryEx',
        documentation: 'Searches through icon or cursor data for the icon or cursor that best fits the current display device '
    },
    {
        label: '_WinAPI_BeginUpdateResource',
        documentation: 'Retrieves a handle that can be used to add, delete, or replace resources in a binary module'
    },
    {
        label: '_WinAPI_EndUpdateResource',
        documentation: 'Commits or discards a changes of the resources within module'
    },
    {
        label: '_WinAPI_EnumResourceLanguages',
        documentation: 'Enumerates a language-specific resources, of the specified type and name, associated with a binary module'
    },
    {
        label: '_WinAPI_EnumResourceNames',
        documentation: 'Enumerates the resources of a specified type within a binary module'
    },
    {
        label: '_WinAPI_EnumResourceTypes',
        documentation: 'Enumerates the resource types within a binary module'
    },
    {
        label: '_WinAPI_FindResource',
        documentation: 'Determines the location of a resource with the specified type and name in the specified module'
    },
    {
        label: '_WinAPI_FindResourceEx',
        documentation: 'Determines the location of the resource with the specified type, name, and language in the specified module'
    },
    {
        label: '_WinAPI_FreeResource',
        documentation: 'Decrements (decreases by one) the reference count of a loaded resource'
    },
    {
        label: '_WinAPI_GetFileVersionInfo',
        documentation: 'Retrieves version information for the specified file'
    },
    {
        label: '_WinAPI_LoadIndirectString',
        documentation: 'Extracts the string from the specified resource when given an indirect string'
    },
    {
        label: '_WinAPI_LoadResource',
        documentation: 'Loads the specified resource into global memory'
    },
    {
        label: '_WinAPI_LoadStringEx',
        documentation: 'Loads a string resource for the specified language from the specified module'
    },
    {
        label: '_WinAPI_LockResource',
        documentation: 'Locks the specified resource in memory'
    },
    {
        label: '_WinAPI_SizeOfResource',
        documentation: 'Returns the size, in bytes, of the specified resource'
    },
    {
        label: '_WinAPI_UpdateResource',
        documentation: 'Adds, deletes, or replaces a resource in a portable executable (PE) file'
    },
    {
        label: '_WinAPI_VerQueryRoot',
        documentation: 'Retrieves the fixed version information from the specified version-information resource'
    },
    {
        label: '_WinAPI_VerQueryValue',
        documentation: 'Retrieves the non-fixed (strings) version information from the specified version-information resource'
    },
    {
        label: '_WinAPI_VerQueryValueEx',
        documentation: 'Retrieves the text information from the version-information resource of the specified binary module '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIRes.au3>'
}

module.exports = items