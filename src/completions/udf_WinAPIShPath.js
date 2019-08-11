'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_WinAPI_CommandLineToArgv',
        documentation: 'Parses a command-line string and returns an array of the command-line arguments'
    },
    {
        label: '_WinAPI_IsNameInExpression',
        documentation: 'Determines whether a string matches the specified pattern'
    },
    {
        label: '_WinAPI_ParseURL',
        documentation: 'Performs rudimentary parsing of a URL'
    },
    {
        label: '_WinAPI_ParseUserName',
        documentation: 'Extracts the domain and user account name from a fully qualified user name'
    },
    {
        label: '_WinAPI_PathAddBackslash',
        documentation: 'Adds a backslash to the end of a string to create the correct syntax for a path'
    },
    {
        label: '_WinAPI_PathAddExtension',
        documentation: 'Adds a file name extension to a path string'
    },
    {
        label: '_WinAPI_PathAppend',
        documentation: 'Appends one path to the end of another'
    },
    {
        label: '_WinAPI_PathBuildRoot',
        documentation: 'Creates a root path from a given drive number'
    },
    {
        label: '_WinAPI_PathCanonicalize',
        documentation: 'Removes elements of a file path according to special strings inserted into that path'
    },
    {
        label: '_WinAPI_PathCommonPrefix',
        documentation: 'Compares two paths to determine if they share a common prefix'
    },
    {
        label: '_WinAPI_PathCompactPath',
        documentation: 'Truncates a file path to fit within a given pixel width by replacing path components with ellipses'
    },
    {
        label: '_WinAPI_PathCompactPathEx',
        documentation: 'Truncates a path to fit within a certain number of characters by replacing path components with ellipses'
    },
    {
        label: '_WinAPI_PathCreateFromUrl',
        documentation: 'Converts a file URL to a Microsoft MS-DOS path'
    },
    {
        label: '_WinAPI_PathFindExtension',
        documentation: 'Searches a path for an extension'
    },
    {
        label: '_WinAPI_PathFindFileName',
        documentation: 'Searches a path for a file name'
    },
    {
        label: '_WinAPI_PathFindNextComponent',
        documentation: 'Parses a path and returns the portion of that path that follows the first backslash'
    },
    {
        label: '_WinAPI_PathGetArgs',
        documentation: 'Finds the command-line arguments within a given path'
    },
    {
        label: '_WinAPI_PathGetCharType',
        documentation: 'Determines the type of character in relation to a path'
    },
    {
        label: '_WinAPI_PathGetDriveNumber',
        documentation: 'Searches a path for a drive letter within the range of \'A\' to \'Z\' and returns the corresponding drive number'
    },
    {
        label: '_WinAPI_PathIsContentType',
        documentation: 'Determines if a file\'s registered content type matches the specified content type'
    },
    {
        label: '_WinAPI_PathIsExe',
        documentation: 'Determines whether a file is an executable by examining the file extension'
    },
    {
        label: '_WinAPI_PathIsFileSpec',
        documentation: 'Searches a path for any path-delimiting characters'
    },
    {
        label: '_WinAPI_PathIsLFNFileSpec',
        documentation: 'Determines whether a file name is in long format'
    },
    {
        label: '_WinAPI_PathIsRelative',
        documentation: 'Searches a path and determines if it is relative'
    },
    {
        label: '_WinAPI_PathIsRoot',
        documentation: 'Parses a path to determine if it is a directory root'
    },
    {
        label: '_WinAPI_PathIsSameRoot',
        documentation: 'Compares two paths to determine if they have a common root component'
    },
    {
        label: '_WinAPI_PathIsSystemFolder',
        documentation: 'Determines if an existing folder contains the attributes that make it a system folder'
    },
    {
        label: '_WinAPI_PathIsUNC',
        documentation: 'Determines if the string is a valid Universal Naming Convention (UNC) for a server and share path'
    },
    {
        label: '_WinAPI_PathIsUNCServer',
        documentation: 'Determines if a string is a valid Universal Naming Convention (UNC) for a server path only'
    },
    {
        label: '_WinAPI_PathIsUNCServerShare',
        documentation: 'Determines if a string is a valid Universal Naming Convention (UNC) share path'
    },
    {
        label: '_WinAPI_PathMakeSystemFolder',
        documentation: 'Gives an existing folder the proper attributes to become a system folder'
    },
    {
        label: '_WinAPI_PathMatchSpec',
        documentation: 'Searches a string using a Microsoft MS-DOS wild card match type'
    },
    {
        label: '_WinAPI_PathParseIconLocation',
        documentation: 'Parses a file location string that contains a file location and icon index'
    },
    {
        label: '_WinAPI_PathRelativePathTo',
        documentation: 'Creates a relative path from one file or folder to another'
    },
    {
        label: '_WinAPI_PathRemoveArgs',
        documentation: 'Removes any arguments from a given path'
    },
    {
        label: '_WinAPI_PathRemoveBackslash',
        documentation: 'Removes the trailing backslash from a given path'
    },
    {
        label: '_WinAPI_PathRemoveExtension',
        documentation: 'Removes the file name extension from a path, if one is present'
    },
    {
        label: '_WinAPI_PathRemoveFileSpec',
        documentation: 'Removes the trailing file name and backslash from a path, if they are present'
    },
    {
        label: '_WinAPI_PathRenameExtension',
        documentation: 'Replaces the extension of a file name with a new extension'
    },
    {
        label: '_WinAPI_PathSearchAndQualify',
        documentation: 'Formats a path to the fully qualified path'
    },
    {
        label: '_WinAPI_PathSkipRoot',
        documentation: 'Parses a path, ignoring the drive letter or Universal Naming Convention (UNC) server/share path elements'
    },
    {
        label: '_WinAPI_PathStripPath',
        documentation: 'Removes the path portion of a fully qualified path and file'
    },
    {
        label: '_WinAPI_PathStripToRoot',
        documentation: 'Removes all parts of the path except for the root information'
    },
    {
        label: '_WinAPI_PathUndecorate',
        documentation: 'Removes the decoration from a path string'
    },
    {
        label: '_WinAPI_PathUnExpandEnvStrings',
        documentation: 'Replaces folder names in a fully-qualified path with their associated environment string'
    },
    {
        label: '_WinAPI_PathUnmakeSystemFolder',
        documentation: 'Removes the attributes from a folder that make it a system folder'
    },
    {
        label: '_WinAPI_PathUnquoteSpaces',
        documentation: 'Removes quotes from the beginning and end of a path'
    },
    {
        label: '_WinAPI_PathYetAnotherMakeUniqueName',
        documentation: 'Creates a unique filename based on an existing filename'
    },
    {
        label: '_WinAPI_ShellGetImageList',
        documentation: 'Retrieves the system image list for small or large icons'
    },
    {
        label: '_WinAPI_UrlApplyScheme',
        documentation: 'Determines a scheme for a specified URL string, and returns a string with an appropriate prefix'
    },
    {
        label: '_WinAPI_UrlCanonicalize',
        documentation: 'Converts a URL string into canonical form'
    },
    {
        label: '_WinAPI_UrlCombine',
        documentation: 'Combines the base an relative URLs in canonical form'
    },
    {
        label: '_WinAPI_UrlCompare',
        documentation: 'Makes a case-sensitive comparison of two URL strings'
    },
    {
        label: '_WinAPI_UrlCreateFromPath',
        documentation: 'Converts a Microsoft MS-DOS path to a canonicalized URL'
    },
    {
        label: '_WinAPI_UrlFixup',
        documentation: 'Attempts to correct a URL whose protocol identifier is incorrect'
    },
    {
        label: '_WinAPI_UrlGetPart',
        documentation: 'Retrieves a specified part from the URL'
    },
    {
        label: '_WinAPI_UrlHash',
        documentation: 'Hashes a URL string'
    },
    {
        label: '_WinAPI_UrlIs',
        documentation: 'Tests whether or not a URL is a specified type '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIShPath.au3>'
}

module.exports = items