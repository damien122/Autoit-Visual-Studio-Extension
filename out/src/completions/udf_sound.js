'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_SoundClose',
        documentation: 'Closes a sound previously opened with _SoundOpen'
    },

    {
        label: '_SoundLength',
        documentation: 'Returns the length of the soundfile'
    },

    {
        label: '_SoundOpen',
        documentation: 'Opens a sound file for use with other _Sound functions'
    },

    {
        label: '_SoundPause',
        documentation: 'Pause a playing sound'
    },

    {
        label: '_SoundPlay',
        documentation: 'Play a sound file'
    },

    {
        label: '_SoundPos',
        documentation: 'Returns the current position of the sound'
    },

    {
        label: '_SoundResume',
        documentation: 'Resume a paused sound'
    },

    {
        label: '_SoundSeek',
        documentation: 'Seeks the sound to the specified position'
    },

    {
        label: '_SoundStatus',
        documentation: 'Returns the status of the sound'
    },

    {
        label: '_SoundStop',
        documentation: 'Stop a playing sound '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Sound.au3>'
}

module.exports = items