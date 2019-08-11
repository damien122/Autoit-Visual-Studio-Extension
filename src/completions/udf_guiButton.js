'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlButton_Click',
        documentation: 'Simulates the user clicking a button'
    },
    {
        label: '_GUICtrlButton_Create',
        documentation: 'Creates a Button control'
    },
    {
        label: '_GUICtrlButton_Destroy',
        documentation: 'Delete the Button control'
    },
    {
        label: '_GUICtrlButton_Enable',
        documentation: 'Enables or disables mouse and keyboard input to the specified button'
    },
    {
        label: '_GUICtrlButton_GetCheck',
        documentation: 'Gets the check state of a radio button or check box'
    },
    {
        label: '_GUICtrlButton_GetFocus',
        documentation: 'Retrieves if the button has keyboard focus'
    },
    {
        label: '_GUICtrlButton_GetIdealSize',
        documentation: 'Gets the size of the button that best fits its text and image, if an image list is present'
    },
    {
        label: '_GUICtrlButton_GetImage',
        documentation: 'Retrieves a handle to the image (icon or bitmap) associated with the button'
    },
    {
        label: '_GUICtrlButton_GetImageList',
        documentation: 'Retrieves an array that describes the image list assigned to a button control'
    },
    {
        label: '_GUICtrlButton_GetNote',
        documentation: 'Gets the text of the note associated with the Command Link button'
    },
    {
        label: '_GUICtrlButton_GetNoteLength',
        documentation: 'Gets the length of the note text that may be displayed in the description for a command link button'
    },
    {
        label: '_GUICtrlButton_GetSplitInfo',
        documentation: 'Gets information for a split button control'
    },
    {
        label: '_GUICtrlButton_GetState',
        documentation: 'Determines the state of a button or check box'
    },
    {
        label: '_GUICtrlButton_GetText',
        documentation: 'Retrieve the text of the button'
    },
    {
        label: '_GUICtrlButton_GetTextMargin',
        documentation: 'Gets the margins used to draw text in a button control'
    },
    {
        label: '_GUICtrlButton_SetCheck',
        documentation: 'Sets the check state of a radio button or check box'
    },
    {
        label: '_GUICtrlButton_SetDontClick',
        documentation: 'Sets the state of $BST_DONTCLICK flag on a button'
    },
    {
        label: '_GUICtrlButton_SetFocus',
        documentation: 'Sets the keyboard focus to the specified button'
    },
    {
        label: '_GUICtrlButton_SetImage',
        documentation: 'Sets the image of a button'
    },
    {
        label: '_GUICtrlButton_SetImageList',
        documentation: 'Assigns an image list to a button control'
    },
    {
        label: '_GUICtrlButton_SetNote',
        documentation: 'Sets the text of the note associated with a command link button'
    },
    {
        label: '_GUICtrlButton_SetShield',
        documentation: 'Sets the elevation required state for a specified button or command link to display an elevated icon'
    },
    {
        label: '_GUICtrlButton_SetSize',
        documentation: 'Sets the size of the button'
    },
    {
        label: '_GUICtrlButton_SetSplitInfo',
        documentation: 'Gets information for a split button control'
    },
    {
        label: '_GUICtrlButton_SetState',
        documentation: 'Sets the highlight state of a button. The highlight state indicates whether the button is highlighted as if the user had pushed it'
    },
    {
        label: '_GUICtrlButton_SetStyle',
        documentation: 'Sets the style of a button'
    },
    {
        label: '_GUICtrlButton_SetText',
        documentation: 'Sets the text of the button'
    },
    {
        label: '_GUICtrlButton_SetTextMargin',
        documentation: 'Sets the margins for drawing text in a button control'
    },
    {
        label: '_GUICtrlButton_Show',
        documentation: 'Show/Hide button'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiButton UDF - #include <GuiButton.au3>'
}

module.exports = items