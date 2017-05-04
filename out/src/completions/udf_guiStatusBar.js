'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlStatusBar_Create',
        documentation: 'Create a statusbar',
        insertText: '_GUICtrlStatusBar_Create(${})'
    },
    {
        label: '_GUICtrlStatusBar_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlStatusBar_Destroy(${})'
    },
    {
        label: '_GUICtrlStatusBar_EmbedControl',
        documentation: 'Embeds a child control in the control',
        insertText: '_GUICtrlStatusBar_EmbedControl(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetBorders',
        documentation: 'Retrieves the current widths of the horizontal and vertical borders',
        insertText: '_GUICtrlStatusBar_GetBorders(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetBordersHorz',
        documentation: 'Retrieves the current width of the horizontal border',
        insertText: '_GUICtrlStatusBar_GetBordersHorz(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetBordersRect',
        documentation: 'Retrieves the current width of the rectangle border',
        insertText: '_GUICtrlStatusBar_GetBordersRect(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetBordersVert',
        documentation: 'Retrieves the current width of the vertical border',
        insertText: '_GUICtrlStatusBar_GetBordersVert(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetCount',
        documentation: 'Retrieves the number of parts',
        insertText: '_GUICtrlStatusBar_GetCount(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetHeight',
        documentation: 'Retrieves the height of the statusbar',
        insertText: '_GUICtrlStatusBar_GetHeight(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetIcon',
        documentation: 'Retrieves the icon for a part',
        insertText: '_GUICtrlStatusBar_GetIcon(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetParts',
        documentation: 'Retrieves the number of parts and the part edges',
        insertText: '_GUICtrlStatusBar_GetParts(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetRect',
        documentation: 'Retrieves the bounding rectangle of a part',
        insertText: '_GUICtrlStatusBar_GetRect(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetRectEx',
        documentation: 'Retrieves the bounding rectangle of a part',
        insertText: '_GUICtrlStatusBar_GetRectEx(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetText',
        documentation: 'Retrieves the text from the specified part',
        insertText: '_GUICtrlStatusBar_GetText(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetTextFlags',
        documentation: 'Retrieves the text length flags for a part',
        insertText: '_GUICtrlStatusBar_GetTextFlags(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetTextLength',
        documentation: 'Retrieves the length of a part text',
        insertText: '_GUICtrlStatusBar_GetTextLength(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetTextLengthEx',
        documentation: 'Retrieves the uFlag of a part',
        insertText: '_GUICtrlStatusBar_GetTextLengthEx(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetTipText',
        documentation: 'Retrieves the ToolTip text for a part',
        insertText: '_GUICtrlStatusBar_GetTipText(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag',
        insertText: '_GUICtrlStatusBar_GetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlStatusBar_GetWidth',
        documentation: 'Retrieves the width of a part',
        insertText: '_GUICtrlStatusBar_GetWidth(${})'
    },
    {
        label: '_GUICtrlStatusBar_IsSimple',
        documentation: 'Checks a status bar control to determine if it is in simple mode',
        insertText: '_GUICtrlStatusBar_IsSimple(${})'
    },
    {
        label: '_GUICtrlStatusBar_Resize',
        documentation: 'Causes the status bar to resize itself',
        insertText: '_GUICtrlStatusBar_Resize(${})'
    },
    {
        label: '_GUICtrlStatusBar_SetBkColor',
        documentation: 'Sets the background color',
        insertText: '_GUICtrlStatusBar_SetBkColor(${})'
    },
    {
        label: '_GUICtrlStatusBar_SetIcon',
        documentation: 'Sets the icon for a part',
        insertText: '_GUICtrlStatusBar_SetIcon(${})'
    },
    {
        label: '_GUICtrlStatusBar_SetMinHeight',
        documentation: 'Sets the minimum height of a status window\'s drawing area',
        insertText: '_GUICtrlStatusBar_SetMinHeight(${})'
    },
    {
        label: '_GUICtrlStatusBar_SetParts',
        documentation: 'Sets the number of parts and the part edges',
        insertText: '_GUICtrlStatusBar_SetParts(${})'
    },
    {
        label: '_GUICtrlStatusBar_SetSimple',
        documentation: 'Specifies whether a status window displays simple text or displays all window parts',
        insertText: '_GUICtrlStatusBar_SetSimple(${})'
    },
    {
        label: '_GUICtrlStatusBar_SetText',
        documentation: 'Sets the text in the specified part of a status window',
        insertText: '_GUICtrlStatusBar_SetText(${})'
    },
    {
        label: '_GUICtrlStatusBar_SetTipText',
        documentation: 'Sets the ToolTip text for a part',
        insertText: '_GUICtrlStatusBar_SetTipText(${})'
    },
    {
        label: '_GUICtrlStatusBar_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag',
        insertText: '_GUICtrlStatusBar_SetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlStatusBar_ShowHide',
        documentation: 'Show/Hide the StatusBar control ',
        insertText: '_GUICtrlStatusBar_ShowHide(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiStatusBar UDF - #include <GuiStatusBar.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items