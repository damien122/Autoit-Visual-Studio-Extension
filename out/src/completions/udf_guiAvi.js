'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlAVI_Close',
        documentation: 'Closes an AVI clip',
        insertText: '_GUICtrlAVI_Close(${})'
    },
    {
        label: '_GUICtrlAVI_Create',
        documentation: 'Creates an AVI control',
        insertText: '_GUICtrlAVI_Create(${})'
    },
    {
        label: '_GUICtrlAVI_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlAVI_Destroy(${})'
    },
    {
        label: '_GUICtrlAVI_IsPlaying',
        documentation: 'Checks whether an Audio-Video Interleaved (AVI) clip is playing',
        insertText: '_GUICtrlAVI_IsPlaying(${})'
    },
    {
        label: '_GUICtrlAVI_Open',
        documentation: 'Opens an AVI clip and displays its first frame in an animation control',
        insertText: '_GUICtrlAVI_Open(${})'
    },
    {
        label: '_GUICtrlAVI_OpenEx',
        documentation: 'Opens an AVI clip and displays its first frame in an animation control',
        insertText: '_GUICtrlAVI_OpenEx(${})'
    },
    {
        label: '_GUICtrlAVI_Play',
        documentation: 'Plays an AVI clip in an animation control',
        insertText: '_GUICtrlAVI_Play(${})'
    },
    {
        label: '_GUICtrlAVI_Seek',
        documentation: 'Directs an AVI control to display a particular frame of an AVI clip',
        insertText: '_GUICtrlAVI_Seek(${})'
    },
    {
        label: '_GUICtrlAVI_Show',
        documentation: 'Show/Hide the AVI control',
        insertText: '_GUICtrlAVI_Show(${})'
    },
    {
        label: '_GUICtrlAVI_Stop',
        documentation: 'Stops playing an AVI clip',
        insertText: '_GUICtrlAVI_Stop(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiAVI UDF - #include <GuiAVI.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items