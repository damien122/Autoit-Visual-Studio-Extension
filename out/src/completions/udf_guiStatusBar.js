'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlStatusBar_Create',
        documentation: 'Create a statusbar'
    },
    {
        label: '_GUICtrlStatusBar_Destroy',
        documentation: 'Delete the control'
    },
    {
        label: '_GUICtrlStatusBar_EmbedControl',
        documentation: 'Embeds a child control in the control'
    },
    {
        label: '_GUICtrlStatusBar_GetBorders',
        documentation: 'Retrieves the current widths of the horizontal and vertical borders'
    },
    {
        label: '_GUICtrlStatusBar_GetBordersHorz',
        documentation: 'Retrieves the current width of the horizontal border'
    },
    {
        label: '_GUICtrlStatusBar_GetBordersRect',
        documentation: 'Retrieves the current width of the rectangle border'
    },
    {
        label: '_GUICtrlStatusBar_GetBordersVert',
        documentation: 'Retrieves the current width of the vertical border'
    },
    {
        label: '_GUICtrlStatusBar_GetCount',
        documentation: 'Retrieves the number of parts'
    },
    {
        label: '_GUICtrlStatusBar_GetHeight',
        documentation: 'Retrieves the height of the statusbar'
    },
    {
        label: '_GUICtrlStatusBar_GetIcon',
        documentation: 'Retrieves the icon for a part'
    },
    {
        label: '_GUICtrlStatusBar_GetParts',
        documentation: 'Retrieves the number of parts and the part edges'
    },
    {
        label: '_GUICtrlStatusBar_GetRect',
        documentation: 'Retrieves the bounding rectangle of a part'
    },
    {
        label: '_GUICtrlStatusBar_GetRectEx',
        documentation: 'Retrieves the bounding rectangle of a part'
    },
    {
        label: '_GUICtrlStatusBar_GetText',
        documentation: 'Retrieves the text from the specified part'
    },
    {
        label: '_GUICtrlStatusBar_GetTextFlags',
        documentation: 'Retrieves the text length flags for a part'
    },
    {
        label: '_GUICtrlStatusBar_GetTextLength',
        documentation: 'Retrieves the length of a part text'
    },
    {
        label: '_GUICtrlStatusBar_GetTextLengthEx',
        documentation: 'Retrieves the uFlag of a part'
    },
    {
        label: '_GUICtrlStatusBar_GetTipText',
        documentation: 'Retrieves the ToolTip text for a part'
    },
    {
        label: '_GUICtrlStatusBar_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag'
    },
    {
        label: '_GUICtrlStatusBar_GetWidth',
        documentation: 'Retrieves the width of a part'
    },
    {
        label: '_GUICtrlStatusBar_IsSimple',
        documentation: 'Checks a status bar control to determine if it is in simple mode'
    },
    {
        label: '_GUICtrlStatusBar_Resize',
        documentation: 'Causes the status bar to resize itself'
    },
    {
        label: '_GUICtrlStatusBar_SetBkColor',
        documentation: 'Sets the background color'
    },
    {
        label: '_GUICtrlStatusBar_SetIcon',
        documentation: 'Sets the icon for a part'
    },
    {
        label: '_GUICtrlStatusBar_SetMinHeight',
        documentation: 'Sets the minimum height of a status window\'s drawing area'
    },
    {
        label: '_GUICtrlStatusBar_SetParts',
        documentation: 'Sets the number of parts and the part edges'
    },
    {
        label: '_GUICtrlStatusBar_SetSimple',
        documentation: 'Specifies whether a status window displays simple text or displays all window parts'
    },
    {
        label: '_GUICtrlStatusBar_SetText',
        documentation: 'Sets the text in the specified part of a status window'
    },
    {
        label: '_GUICtrlStatusBar_SetTipText',
        documentation: 'Sets the ToolTip text for a part'
    },
    {
        label: '_GUICtrlStatusBar_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag'
    },
    {
        label: '_GUICtrlStatusBar_ShowHide',
        documentation: 'Show/Hide the StatusBar control '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiStatusBar UDF - #include <GuiStatusBar.au3>'
}

module.exports = items