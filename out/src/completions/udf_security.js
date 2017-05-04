'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_Security__AdjustTokenPrivileges',
        documentation: 'Enables or disables privileges in the specified access token',
        insertText: '_Security__AdjustTokenPrivileges(${})'
    },

    {
        label: '_Security__CreateProcessWithToken',
        documentation: 'Creates a new process and its primary thread running in the security context of the specified token',
        insertText: '_Security__CreateProcessWithToken(${})'
    },

    {
        label: '_Security__DuplicateTokenEx',
        documentation: 'Creates a new access token that duplicates an existing token',
        insertText: '_Security__DuplicateTokenEx(${})'
    },

    {
        label: '_Security__GetAccountSid',
        documentation: 'Retrieves the security identifier (SID) for an account',
        insertText: '_Security__GetAccountSid(${})'
    },

    {
        label: '_Security__GetLengthSid',
        documentation: 'Returns the length, in bytes, of a valid SID',
        insertText: '_Security__GetLengthSid(${})'
    },

    {
        label: '_Security__GetTokenInformation',
        documentation: 'Retrieves a specified type of information about an access token',
        insertText: '_Security__GetTokenInformation(${})'
    },

    {
        label: '_Security__ImpersonateSelf',
        documentation: 'Obtains an access token that impersonates the calling process security context',
        insertText: '_Security__ImpersonateSelf(${})'
    },

    {
        label: '_Security__IsValidSid',
        documentation: 'Validates a SID',
        insertText: '_Security__IsValidSid(${})'
    },

    {
        label: '_Security__LookupAccountName',
        documentation: 'Retrieves a security identifier (SID) for the account and the name of the domain',
        insertText: '_Security__LookupAccountName(${})'
    },

    {
        label: '_Security__LookupAccountSid',
        documentation: 'Retrieves the name of the account for a SID',
        insertText: '_Security__LookupAccountSid(${})'
    },

    {
        label: '_Security__LookupPrivilegeValue',
        documentation: 'Retrieves the locally unique identifier (LUID) for a privilege value in form of 64bit integer',
        insertText: '_Security__LookupPrivilegeValue(${})'
    },

    {
        label: '_Security__OpenProcessToken',
        documentation: 'Returns the access token associated with a process',
        insertText: '_Security__OpenProcessToken(${})'
    },

    {
        label: '_Security__OpenThreadToken',
        documentation: 'Opens the access token associated with a thread',
        insertText: '_Security__OpenThreadToken(${})'
    },

    {
        label: '_Security__OpenThreadTokenEx',
        documentation: 'Opens the access token associated with a thread, impersonating the client\'s security context if required',
        insertText: '_Security__OpenThreadTokenEx(${})'
    },

    {
        label: '_Security__SetPrivilege',
        documentation: 'Enables or disables a local token privilege',
        insertText: '_Security__SetPrivilege(${})'
    },

    {
        label: '_Security__SetTokenInformation',
        documentation: 'Sets various types of information for a specified access token',
        insertText: '_Security__SetTokenInformation(${})'
    },

    {
        label: '_Security__SidToStringSid',
        documentation: 'Converts a binary SID to a string',
        insertText: '_Security__SidToStringSid(${})'
    },

    {
        label: '_Security__SidTypeStr',
        documentation: 'Converts a SID type to string form',
        insertText: '_Security__SidTypeStr(${})'
    },

    {
        label: '_Security__StringSidToSid',
        documentation: 'Converts a String SID to a binary SID ',
        insertText: '_Security__StringSidToSid(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Security.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items