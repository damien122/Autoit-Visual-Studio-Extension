'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_CommandLineToArgv',
        documentation: 'Parses a command-line string and returns an array of the command-line arguments',
        insertText: '_WinAPI_CommandLineToArgv(${})'
    },
    {
        label: '_WinAPI_IsNameInExpression',
        documentation: 'Determines whether a string matches the specified pattern',
        insertText: '_WinAPI_IsNameInExpression(${})'
    },
    {
        label: '_WinAPI_ParseURL',
        documentation: 'Performs rudimentary parsing of a URL',
        insertText: '_WinAPI_ParseURL(${})'
    },
    {
        label: '_WinAPI_ParseUserName',
        documentation: 'Extracts the domain and user account name from a fully qualified user name',
        insertText: '_WinAPI_ParseUserName(${})'
    },
    {
        label: '_WinAPI_PathAddBackslash',
        documentation: 'Adds a backslash to the end of a string to create the correct syntax for a path',
        insertText: '_WinAPI_PathAddBackslash(${})'
    },
    {
        label: '_WinAPI_PathAddExtension',
        documentation: 'Adds a file name extension to a path string',
        insertText: '_WinAPI_PathAddExtension(${})'
    },
    {
        label: '_WinAPI_PathAppend',
        documentation: 'Appends one path to the end of another',
        insertText: '_WinAPI_PathAppend(${})'
    },
    {
        label: '_WinAPI_PathBuildRoot',
        documentation: 'Creates a root path from a given drive number',
        insertText: '_WinAPI_PathBuildRoot(${})'
    },
    {
        label: '_WinAPI_PathCanonicalize',
        documentation: 'Removes elements of a file path according to special strings inserted into that path',
        insertText: '_WinAPI_PathCanonicalize(${})'
    },
    {
        label: '_WinAPI_PathCommonPrefix',
        documentation: 'Compares two paths to determine if they share a common prefix',
        insertText: '_WinAPI_PathCommonPrefix(${})'
    },
    {
        label: '_WinAPI_PathCompactPath',
        documentation: 'Truncates a file path to fit within a given pixel width by replacing path components with ellipses',
        insertText: '_WinAPI_PathCompactPath(${})'
    },
    {
        label: '_WinAPI_PathCompactPathEx',
        documentation: 'Truncates a path to fit within a certain number of characters by replacing path components with ellipses',
        insertText: '_WinAPI_PathCompactPathEx(${})'
    },
    {
        label: '_WinAPI_PathCreateFromUrl',
        documentation: 'Converts a file URL to a Microsoft MS-DOS path',
        insertText: '_WinAPI_PathCreateFromUrl(${})'
    },
    {
        label: '_WinAPI_PathFindExtension',
        documentation: 'Searches a path for an extension',
        insertText: '_WinAPI_PathFindExtension(${})'
    },
    {
        label: '_WinAPI_PathFindFileName',
        documentation: 'Searches a path for a file name',
        insertText: '_WinAPI_PathFindFileName(${})'
    },
    {
        label: '_WinAPI_PathFindNextComponent',
        documentation: 'Parses a path and returns the portion of that path that follows the first backslash',
        insertText: '_WinAPI_PathFindNextComponent(${})'
    },
    {
        label: '_WinAPI_PathGetArgs',
        documentation: 'Finds the command-line arguments within a given path',
        insertText: '_WinAPI_PathGetArgs(${})'
    },
    {
        label: '_WinAPI_PathGetCharType',
        documentation: 'Determines the type of character in relation to a path',
        insertText: '_WinAPI_PathGetCharType(${})'
    },
    {
        label: '_WinAPI_PathGetDriveNumber',
        documentation: 'Searches a path for a drive letter within the range of \'A\' to \'Z\' and returns the corresponding drive number',
        insertText: '_WinAPI_PathGetDriveNumber(${})'
    },
    {
        label: '_WinAPI_PathIsContentType',
        documentation: 'Determines if a file\'s registered content type matches the specified content type',
        insertText: '_WinAPI_PathIsContentType(${})'
    },
    {
        label: '_WinAPI_PathIsExe',
        documentation: 'Determines whether a file is an executable by examining the file extension',
        insertText: '_WinAPI_PathIsExe(${})'
    },
    {
        label: '_WinAPI_PathIsFileSpec',
        documentation: 'Searches a path for any path-delimiting characters',
        insertText: '_WinAPI_PathIsFileSpec(${})'
    },
    {
        label: '_WinAPI_PathIsLFNFileSpec',
        documentation: 'Determines whether a file name is in long format',
        insertText: '_WinAPI_PathIsLFNFileSpec(${})'
    },
    {
        label: '_WinAPI_PathIsRelative',
        documentation: 'Searches a path and determines if it is relative',
        insertText: '_WinAPI_PathIsRelative(${})'
    },
    {
        label: '_WinAPI_PathIsRoot',
        documentation: 'Parses a path to determine if it is a directory root',
        insertText: '_WinAPI_PathIsRoot(${})'
    },
    {
        label: '_WinAPI_PathIsSameRoot',
        documentation: 'Compares two paths to determine if they have a common root component',
        insertText: '_WinAPI_PathIsSameRoot(${})'
    },
    {
        label: '_WinAPI_PathIsSystemFolder',
        documentation: 'Determines if an existing folder contains the attributes that make it a system folder',
        insertText: '_WinAPI_PathIsSystemFolder(${})'
    },
    {
        label: '_WinAPI_PathIsUNC',
        documentation: 'Determines if the string is a valid Universal Naming Convention (UNC) for a server and share path',
        insertText: '_WinAPI_PathIsUNC(${})'
    },
    {
        label: '_WinAPI_PathIsUNCServer',
        documentation: 'Determines if a string is a valid Universal Naming Convention (UNC) for a server path only',
        insertText: '_WinAPI_PathIsUNCServer(${})'
    },
    {
        label: '_WinAPI_PathIsUNCServerShare',
        documentation: 'Determines if a string is a valid Universal Naming Convention (UNC) share path',
        insertText: '_WinAPI_PathIsUNCServerShare(${})'
    },
    {
        label: '_WinAPI_PathMakeSystemFolder',
        documentation: 'Gives an existing folder the proper attributes to become a system folder',
        insertText: '_WinAPI_PathMakeSystemFolder(${})'
    },
    {
        label: '_WinAPI_PathMatchSpec',
        documentation: 'Searches a string using a Microsoft MS-DOS wild card match type',
        insertText: '_WinAPI_PathMatchSpec(${})'
    },
    {
        label: '_WinAPI_PathParseIconLocation',
        documentation: 'Parses a file location string that contains a file location and icon index',
        insertText: '_WinAPI_PathParseIconLocation(${})'
    },
    {
        label: '_WinAPI_PathRelativePathTo',
        documentation: 'Creates a relative path from one file or folder to another',
        insertText: '_WinAPI_PathRelativePathTo(${})'
    },
    {
        label: '_WinAPI_PathRemoveArgs',
        documentation: 'Removes any arguments from a given path',
        insertText: '_WinAPI_PathRemoveArgs(${})'
    },
    {
        label: '_WinAPI_PathRemoveBackslash',
        documentation: 'Removes the trailing backslash from a given path',
        insertText: '_WinAPI_PathRemoveBackslash(${})'
    },
    {
        label: '_WinAPI_PathRemoveExtension',
        documentation: 'Removes the file name extension from a path, if one is present',
        insertText: '_WinAPI_PathRemoveExtension(${})'
    },
    {
        label: '_WinAPI_PathRemoveFileSpec',
        documentation: 'Removes the trailing file name and backslash from a path, if they are present',
        insertText: '_WinAPI_PathRemoveFileSpec(${})'
    },
    {
        label: '_WinAPI_PathRenameExtension',
        documentation: 'Replaces the extension of a file name with a new extension',
        insertText: '_WinAPI_PathRenameExtension(${})'
    },
    {
        label: '_WinAPI_PathSearchAndQualify',
        documentation: 'Formats a path to the fully qualified path',
        insertText: '_WinAPI_PathSearchAndQualify(${})'
    },
    {
        label: '_WinAPI_PathSkipRoot',
        documentation: 'Parses a path, ignoring the drive letter or Universal Naming Convention (UNC) server/share path elements',
        insertText: '_WinAPI_PathSkipRoot(${})'
    },
    {
        label: '_WinAPI_PathStripPath',
        documentation: 'Removes the path portion of a fully qualified path and file',
        insertText: '_WinAPI_PathStripPath(${})'
    },
    {
        label: '_WinAPI_PathStripToRoot',
        documentation: 'Removes all parts of the path except for the root information',
        insertText: '_WinAPI_PathStripToRoot(${})'
    },
    {
        label: '_WinAPI_PathUndecorate',
        documentation: 'Removes the decoration from a path string',
        insertText: '_WinAPI_PathUndecorate(${})'
    },
    {
        label: '_WinAPI_PathUnExpandEnvStrings',
        documentation: 'Replaces folder names in a fully-qualified path with their associated environment string',
        insertText: '_WinAPI_PathUnExpandEnvStrings(${})'
    },
    {
        label: '_WinAPI_PathUnmakeSystemFolder',
        documentation: 'Removes the attributes from a folder that make it a system folder',
        insertText: '_WinAPI_PathUnmakeSystemFolder(${})'
    },
    {
        label: '_WinAPI_PathUnquoteSpaces',
        documentation: 'Removes quotes from the beginning and end of a path',
        insertText: '_WinAPI_PathUnquoteSpaces(${})'
    },
    {
        label: '_WinAPI_PathYetAnotherMakeUniqueName',
        documentation: 'Creates a unique filename based on an existing filename',
        insertText: '_WinAPI_PathYetAnotherMakeUniqueName(${})'
    },
    {
        label: '_WinAPI_ShellGetImageList',
        documentation: 'Retrieves the system image list for small or large icons',
        insertText: '_WinAPI_ShellGetImageList(${})'
    },
    {
        label: '_WinAPI_UrlApplyScheme',
        documentation: 'Determines a scheme for a specified URL string, and returns a string with an appropriate prefix',
        insertText: '_WinAPI_UrlApplyScheme(${})'
    },
    {
        label: '_WinAPI_UrlCanonicalize',
        documentation: 'Converts a URL string into canonical form',
        insertText: '_WinAPI_UrlCanonicalize(${})'
    },
    {
        label: '_WinAPI_UrlCombine',
        documentation: 'Combines the base an relative URLs in canonical form',
        insertText: '_WinAPI_UrlCombine(${})'
    },
    {
        label: '_WinAPI_UrlCompare',
        documentation: 'Makes a case-sensitive comparison of two URL strings',
        insertText: '_WinAPI_UrlCompare(${})'
    },
    {
        label: '_WinAPI_UrlCreateFromPath',
        documentation: 'Converts a Microsoft MS-DOS path to a canonicalized URL',
        insertText: '_WinAPI_UrlCreateFromPath(${})'
    },
    {
        label: '_WinAPI_UrlFixup',
        documentation: 'Attempts to correct a URL whose protocol identifier is incorrect',
        insertText: '_WinAPI_UrlFixup(${})'
    },
    {
        label: '_WinAPI_UrlGetPart',
        documentation: 'Retrieves a specified part from the URL',
        insertText: '_WinAPI_UrlGetPart(${})'
    },
    {
        label: '_WinAPI_UrlHash',
        documentation: 'Hashes a URL string',
        insertText: '_WinAPI_UrlHash(${})'
    },
    {
        label: '_WinAPI_UrlIs',
        documentation: 'Tests whether or not a URL is a specified type ',
        insertText: '_WinAPI_UrlIs(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIShPath.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items