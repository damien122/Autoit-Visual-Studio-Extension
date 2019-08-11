'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_Security__AdjustTokenPrivileges',
        documentation: 'Enables or disables privileges in the specified access token'
    },

    {
        label: '_Security__CreateProcessWithToken',
        documentation: 'Creates a new process and its primary thread running in the security context of the specified token'
    },

    {
        label: '_Security__DuplicateTokenEx',
        documentation: 'Creates a new access token that duplicates an existing token'
    },

    {
        label: '_Security__GetAccountSid',
        documentation: 'Retrieves the security identifier (SID) for an account'
    },

    {
        label: '_Security__GetLengthSid',
        documentation: 'Returns the length, in bytes, of a valid SID'
    },

    {
        label: '_Security__GetTokenInformation',
        documentation: 'Retrieves a specified type of information about an access token'
    },

    {
        label: '_Security__ImpersonateSelf',
        documentation: 'Obtains an access token that impersonates the calling process security context'
    },

    {
        label: '_Security__IsValidSid',
        documentation: 'Validates a SID'
    },

    {
        label: '_Security__LookupAccountName',
        documentation: 'Retrieves a security identifier (SID) for the account and the name of the domain'
    },

    {
        label: '_Security__LookupAccountSid',
        documentation: 'Retrieves the name of the account for a SID'
    },

    {
        label: '_Security__LookupPrivilegeValue',
        documentation: 'Retrieves the locally unique identifier (LUID) for a privilege value in form of 64bit integer'
    },

    {
        label: '_Security__OpenProcessToken',
        documentation: 'Returns the access token associated with a process'
    },

    {
        label: '_Security__OpenThreadToken',
        documentation: 'Opens the access token associated with a thread'
    },

    {
        label: '_Security__OpenThreadTokenEx',
        documentation: 'Opens the access token associated with a thread, impersonating the client\'s security context if required'
    },

    {
        label: '_Security__SetPrivilege',
        documentation: 'Enables or disables a local token privilege'
    },

    {
        label: '_Security__SetTokenInformation',
        documentation: 'Sets various types of information for a specified access token'
    },

    {
        label: '_Security__SidToStringSid',
        documentation: 'Converts a binary SID to a string'
    },

    {
        label: '_Security__SidTypeStr',
        documentation: 'Converts a SID type to string form'
    },

    {
        label: '_Security__StringSidToSid',
        documentation: 'Converts a String SID to a binary SID '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Security.au3>'
}

module.exports = items