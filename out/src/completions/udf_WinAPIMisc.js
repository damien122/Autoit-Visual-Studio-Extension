'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_GetExtended',
        documentation: 'Returns the last extended value.',
        insertText: '_WinAPI_GetExtended(${})'
    },
    {
        label: '_WinAPI_PlaySound',
        documentation: 'Plays a sound specified by the given file name, resource, or system event ',
        insertText: '_WinAPI_PlaySound(${})'
    },
    {
        label: '_WinAPI_CharToOem',
        documentation: 'Converts a string into the OEM-defined character set',
        insertText: '_WinAPI_CharToOem(${})'
    },
    {
        label: '_WinAPI_DWordToFloat',
        documentation: 'Converts a value of type DWORD to a value of type FLOAT',
        insertText: '_WinAPI_DWordToFloat(${})'
    },
    {
        label: '_WinAPI_DWordToInt',
        documentation: 'Converts a value of type DWORD to a value of type INT',
        insertText: '_WinAPI_DWordToInt(${})'
    },
    {
        label: '_WinAPI_FloatToDWord',
        documentation: 'Converts a value of type FLOAT to a value of type DWORD',
        insertText: '_WinAPI_FloatToDWord(${})'
    },
    {
        label: '_WinAPI_GetString',
        documentation: 'Returns a string located at the specified memory address',
        insertText: '_WinAPI_GetString(${})'
    },
    {
        label: '_WinAPI_HashData',
        documentation: 'Hashes a memory block',
        insertText: '_WinAPI_HashData(${})'
    },
    {
        label: '_WinAPI_HashString',
        documentation: 'Hashes a string',
        insertText: '_WinAPI_HashString(${})'
    },
    {
        label: '_WinAPI_HiByte',
        documentation: 'Returns the high BYTE of a 16-bit (2 bytes) value',
        insertText: '_WinAPI_HiByte(${})'
    },
    {
        label: '_WinAPI_HiDWord',
        documentation: 'Returns the high DWORD of a 64-bit (8 bytes) value',
        insertText: '_WinAPI_HiDWord(${})'
    },
    {
        label: '_WinAPI_IntToDWord',
        documentation: 'Converts a value of type INT to a value of type DWORD',
        insertText: '_WinAPI_IntToDWord(${})'
    },
    {
        label: '_WinAPI_LoByte',
        documentation: 'Returns the low BYTE of a 16-bit (2 bytes) value',
        insertText: '_WinAPI_LoByte(${})'
    },
    {
        label: '_WinAPI_LoDWord',
        documentation: 'Returns the low DWORD of a 64-bit (8 bytes) value',
        insertText: '_WinAPI_LoDWord(${})'
    },
    {
        label: '_WinAPI_LongMid',
        documentation: 'Extracts a number of bits from a DWORD (32-bit) value',
        insertText: '_WinAPI_LongMid(${})'
    },
    {
        label: '_WinAPI_MakeWord',
        documentation: 'Returns a WORD (16-bit) value from two BYTE (8-bit) values',
        insertText: '_WinAPI_MakeWord(${})'
    },
    {
        label: '_WinAPI_OemToChar',
        documentation: 'Converts a string from the OEM-defined character set into either an ANSI string',
        insertText: '_WinAPI_OemToChar(${})'
    },
    {
        label: '_WinAPI_ShortToWord',
        documentation: 'Converts a value of type SHORT to a value of type WORD',
        insertText: '_WinAPI_ShortToWord(${})'
    },
    {
        label: '_WinAPI_StrFormatByteSize',
        documentation: 'Converts a numeric value into a string that represents the number expressed as a size value in bytes, kilobytes, megabytes, or gigabytes',
        insertText: '_WinAPI_StrFormatByteSize(${})'
    },
    {
        label: '_WinAPI_StrFormatByteSizeEx',
        documentation: 'Converts a numeric value into a string that represents the number expressed as separated groups of digits to the left of the decimal',
        insertText: '_WinAPI_StrFormatByteSizeEx(${})'
    },
    {
        label: '_WinAPI_StrFormatKBSize',
        documentation: 'Converts a numeric value into a string that represents the number expressed as a size value in kilobytes',
        insertText: '_WinAPI_StrFormatKBSize(${})'
    },
    {
        label: '_WinAPI_StrFromTimeInterval',
        documentation: 'Converts a time interval to a string',
        insertText: '_WinAPI_StrFromTimeInterval(${})'
    },
    {
        label: '_WinAPI_StrLen',
        documentation: 'Returns the length of the specified string',
        insertText: '_WinAPI_StrLen(${})'
    },
    {
        label: '_WinAPI_SwapDWord',
        documentation: 'Converts a ULONG from little-endian to big-endian, and vice versa',
        insertText: '_WinAPI_SwapDWord(${})'
    },
    {
        label: '_WinAPI_SwapQWord',
        documentation: 'Converts a ULONGLONG from little-endian to big-endian, and vice versa',
        insertText: '_WinAPI_SwapQWord(${})'
    },
    {
        label: '_WinAPI_SwapWord',
        documentation: 'Converts a USHORT from little-endian to big-endian, and vice versa',
        insertText: '_WinAPI_SwapWord(${})'
    },
    {
        label: '_WinAPI_WordToShort',
        documentation: 'Converts a value of type WORD to a value of type SHORT ',
        insertText: '_WinAPI_WordToShort(${})'
    },
    {
        label: '_WinAPI_ArrayToStruct',
        documentation: 'Converts an array of strings to the structure',
        insertText: '_WinAPI_ArrayToStruct(${})'
    },
    {
        label: '_WinAPI_CopyStruct',
        documentation: 'Creates a duplicate of a specified structure',
        insertText: '_WinAPI_CopyStruct(${})'
    },
    {
        label: '_WinAPI_CreateMargins',
        documentation: 'Creates $tagMARGINS structure with specified left, right, top, and bottom retaining borders',
        insertText: '_WinAPI_CreateMargins(${})'
    },
    {
        label: '_WinAPI_CreatePoint',
        documentation: 'Creates $tagPOINT structure with the x- and y-coordinates of the specified point',
        insertText: '_WinAPI_CreatePoint(${})'
    },
    {
        label: '_WinAPI_CreateRect',
        documentation: 'Creates $tagRECT structure with the coordinates of the specified rectangle',
        insertText: '_WinAPI_CreateRect(${})'
    },
    {
        label: '_WinAPI_CreateRectEx',
        documentation: 'Creates $tagRECT structure with the coordinates of the specified rectangle',
        insertText: '_WinAPI_CreateRectEx(${})'
    },
    {
        label: '_WinAPI_CreateSize',
        documentation: 'Creates $tagSIZE structure with the width and height of the specified rectangle',
        insertText: '_WinAPI_CreateSize(${})'
    },
    {
        label: '_WinAPI_StructToArray',
        documentation: 'Converts the structure to the array of strings',
        insertText: '_WinAPI_StructToArray(${})'
    },
    {
        label: '_WinAPI_UnionStruct',
        documentation: 'Creates the structure of two structures',
        insertText: '_WinAPI_UnionStruct(${})'
    }

]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIMisc.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items