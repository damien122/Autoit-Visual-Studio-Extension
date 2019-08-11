'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [
    {
        label: '_Crypt_DecryptData',
        documentation: 'Decrypts data using the supplied key'
    },
    {
        label: '_Crypt_DecryptFile',
        documentation: 'Decrypts a file with specified key and algorithm'
    },
    {
        label: '_Crypt_DeriveKey',
        documentation: 'Creates a key from algorithm and password'
    },
    {
        label: '_Crypt_DestroyKey',
        documentation: 'Frees the resources used by a key'
    },
    {
        label: '_Crypt_EncryptData',
        documentation: 'Encrypts data using the supplied key'
    },
    {
        label: '_Crypt_EncryptFile',
        documentation: 'Encrypts a file with specified key and algorithm'
    },
    {
        label: '_Crypt_GenRandom',
        documentation: 'Fill a buffer with cryptographically random data'
    },
    {
        label: '_Crypt_HashData',
        documentation: 'Hash data with specified algorithm'
    },
    {
        label: '_Crypt_HashFile',
        documentation: 'Hash a string with specified algorithm'
    },
    {
        label: '_Crypt_Shutdown',
        documentation: 'Uninitialize the Crypt library'
    },
    {
        label: '_Crypt_Startup',
        documentation: 'Initialize the Crypt library'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Crypt UDF - #include <Crypt.au3>'
}

module.exports = items