'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_SoundClose',
        documentation: 'Closes a sound previously opened with _SoundOpen',
        insertText: '_SoundClose(${})'
    },

    {
        label: '_SoundLength',
        documentation: 'Returns the length of the soundfile',
        insertText: '_SoundLength(${})'
    },

    {
        label: '_SoundOpen',
        documentation: 'Opens a sound file for use with other _Sound functions',
        insertText: '_SoundOpen(${})'
    },

    {
        label: '_SoundPause',
        documentation: 'Pause a playing sound',
        insertText: '_SoundPause(${})'
    },

    {
        label: '_SoundPlay',
        documentation: 'Play a sound file',
        insertText: '_SoundPlay(${})'
    },

    {
        label: '_SoundPos',
        documentation: 'Returns the current position of the sound',
        insertText: '_SoundPos(${})'
    },

    {
        label: '_SoundResume',
        documentation: 'Resume a paused sound',
        insertText: '_SoundResume(${})'
    },

    {
        label: '_SoundSeek',
        documentation: 'Seeks the sound to the specified position',
        insertText: '_SoundSeek(${})'
    },

    {
        label: '_SoundStatus',
        documentation: 'Returns the status of the sound',
        insertText: '_SoundStatus(${})'
    },

    {
        label: '_SoundStop',
        documentation: 'Stop a playing sound ',
        insertText: '_SoundStop(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Sound.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items