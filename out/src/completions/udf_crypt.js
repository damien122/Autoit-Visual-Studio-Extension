'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [
    {
        label: '_Crypt_DecryptData',
        documentation: 'Decrypts data using the supplied key',
        insertText: '_Crypt_DecryptData(${})'
    },
    {
        label: '_Crypt_DecryptFile',
        documentation: 'Decrypts a file with specified key and algorithm',
        insertText: '_Crypt_DecryptFile(${})'
    },
    {
        label: '_Crypt_DeriveKey',
        documentation: 'Creates a key from algorithm and password',
        insertText: '_Crypt_DeriveKey(${})'
    },
    {
        label: '_Crypt_DestroyKey',
        documentation: 'Frees the resources used by a key',
        insertText: '_Crypt_DestroyKey(${})'
    },
    {
        label: '_Crypt_EncryptData',
        documentation: 'Encrypts data using the supplied key',
        insertText: '_Crypt_EncryptData(${})'
    },
    {
        label: '_Crypt_EncryptFile',
        documentation: 'Encrypts a file with specified key and algorithm',
        insertText: '_Crypt_EncryptFile(${})'
    },
    {
        label: '_Crypt_GenRandom',
        documentation: 'Fill a buffer with cryptographically random data',
        insertText: '_Crypt_GenRandom(${})'
    },
    {
        label: '_Crypt_HashData',
        documentation: 'Hash data with specified algorithm',
        insertText: '_Crypt_HashData(${})'
    },
    {
        label: '_Crypt_HashFile',
        documentation: 'Hash a string with specified algorithm',
        insertText: '_Crypt_HashFile(${})'
    },
    {
        label: '_Crypt_Shutdown',
        documentation: 'Uninitialize the Crypt library',
        insertText: '_Crypt_Shutdown(${})'
    },
    {
        label: '_Crypt_Startup',
        documentation: 'Initialize the Crypt library',
        insertText: '_Crypt_Startup(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Crypt UDF - #include <Crypt.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items