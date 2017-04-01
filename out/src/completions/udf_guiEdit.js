'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlEdit_AppendText',
        documentation: 'Append text',
        insertText: '_GUICtrlEdit_AppendText(${})'
    },
    {
        label: '_GUICtrlEdit_BeginUpdate',
        documentation: 'Prevents updating of the control until the _GUICtrlEdit_EndUpdate function is called',
        insertText: '_GUICtrlEdit_BeginUpdate(${})'
    },
    {
        label: '_GUICtrlEdit_CanUndo',
        documentation: 'Determines whether there are any actions in an edit control\'s undo queue',
        insertText: '_GUICtrlEdit_CanUndo(${})'
    },
    {
        label: '_GUICtrlEdit_CharFromPos',
        documentation: 'Retrieve information about the character closest to a specified point in the client area',
        insertText: '_GUICtrlEdit_CharFromPos(${})'
    },
    {
        label: '_GUICtrlEdit_Create',
        documentation: 'Create an Edit control',
        insertText: '_GUICtrlEdit_Create(${})'
    },
    {
        label: '_GUICtrlEdit_Destroy',
        documentation: 'Delete the Edit control',
        insertText: '_GUICtrlEdit_Destroy(${})'
    },
    {
        label: '_GUICtrlEdit_EmptyUndoBuffer',
        documentation: 'Resets the undo flag of an edit control',
        insertText: '_GUICtrlEdit_EmptyUndoBuffer(${})'
    },
    {
        label: '_GUICtrlEdit_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the _GUICtrlEdit_BeginUpdate function',
        insertText: '_GUICtrlEdit_EndUpdate(${})'
    },
    {
        label: '_GUICtrlEdit_Find',
        documentation: 'Initiates a find dialog',
        insertText: '_GUICtrlEdit_Find(${})'
    },
    {
        label: '_GUICtrlEdit_FmtLines',
        documentation: 'Determines whether an edit control includes soft line-break characters',
        insertText: '_GUICtrlEdit_FmtLines(${})'
    },
    {
        label: '_GUICtrlEdit_GetCueBanner',
        documentation: 'Gets the cue banner text displayed in the edit control',
        insertText: '_GUICtrlEdit_GetCueBanner(${})'
    },
    {
        label: '_GUICtrlEdit_GetFirstVisibleLine',
        documentation: 'Retrieves the 0-based index of the uppermost visible line in a multiline edit control',
        insertText: '_GUICtrlEdit_GetFirstVisibleLine(${})'
    },
    {
        label: '_GUICtrlEdit_GetLimitText',
        documentation: 'Gets the current text limit for an edit control',
        insertText: '_GUICtrlEdit_GetLimitText(${})'
    },
    {
        label: '_GUICtrlEdit_GetLine',
        documentation: 'Retrieves a line of text from an edit control',
        insertText: '_GUICtrlEdit_GetLine(${})'
    },
    {
        label: '_GUICtrlEdit_GetLineCount',
        documentation: 'Retrieves the number of lines',
        insertText: '_GUICtrlEdit_GetLineCount(${})'
    },
    {
        label: '_GUICtrlEdit_GetMargins',
        documentation: 'Retrieves the widths of the left and right margins',
        insertText: '_GUICtrlEdit_GetMargins(${})'
    },
    {
        label: '_GUICtrlEdit_GetModify',
        documentation: 'Retrieves the state of an edit control\'s modification flag',
        insertText: '_GUICtrlEdit_GetModify(${})'
    },
    {
        label: '_GUICtrlEdit_GetPasswordChar',
        documentation: 'Gets the password character that an edit control displays when the user enters text',
        insertText: '_GUICtrlEdit_GetPasswordChar(${})'
    },
    {
        label: '_GUICtrlEdit_GetRECT',
        documentation: 'Retrieves the formatting rectangle of an edit control',
        insertText: '_GUICtrlEdit_GetRECT(${})'
    },
    {
        label: '_GUICtrlEdit_GetRECTEx',
        documentation: 'Retrieves the formatting rectangle of an edit control',
        insertText: '_GUICtrlEdit_GetRECTEx(${})'
    },
    {
        label: '_GUICtrlEdit_GetSel',
        documentation: 'Retrieves the starting and ending character positions of the current selection',
        insertText: '_GUICtrlEdit_GetSel(${})'
    },
    {
        label: '_GUICtrlEdit_GetText',
        documentation: 'Get the text from the edit control',
        insertText: '_GUICtrlEdit_GetText(${})'
    },
    {
        label: '_GUICtrlEdit_GetTextLen',
        documentation: 'Get the length of all the text from the edit control',
        insertText: '_GUICtrlEdit_GetTextLen(${})'
    },
    {
        label: '_GUICtrlEdit_HideBalloonTip',
        documentation: 'Hides any balloon tip associated with an edit control',
        insertText: '_GUICtrlEdit_HideBalloonTip(${})'
    },
    {
        label: '_GUICtrlEdit_InsertText',
        documentation: 'Insert text',
        insertText: '_GUICtrlEdit_InsertText(${})'
    },
    {
        label: '_GUICtrlEdit_LineFromChar',
        documentation: 'Retrieves the index of the line that contains the specified character index',
        insertText: '_GUICtrlEdit_LineFromChar(${})'
    },
    {
        label: '_GUICtrlEdit_LineIndex',
        documentation: 'Retrieves the character index of the first character of a specified line',
        insertText: '_GUICtrlEdit_LineIndex(${})'
    },
    {
        label: '_GUICtrlEdit_LineLength',
        documentation: 'Retrieves the length, in characters, of a line',
        insertText: '_GUICtrlEdit_LineLength(${})'
    },
    {
        label: '_GUICtrlEdit_LineScroll',
        documentation: 'Scrolls the text',
        insertText: '_GUICtrlEdit_LineScroll(${})'
    },
    {
        label: '_GUICtrlEdit_PosFromChar',
        documentation: 'Retrieves the client area coordinates of a specified character in an edit control',
        insertText: '_GUICtrlEdit_PosFromChar(${})'
    },
    {
        label: '_GUICtrlEdit_ReplaceSel',
        documentation: 'Replaces the current selection',
        insertText: '_GUICtrlEdit_ReplaceSel(${})'
    },
    {
        label: '_GUICtrlEdit_Scroll',
        documentation: 'Scrolls the text vertically',
        insertText: '_GUICtrlEdit_Scroll(${})'
    },
    {
        label: '_GUICtrlEdit_SetCueBanner',
        documentation: 'Sets the cue banner text that is displayed for the edit control',
        insertText: '_GUICtrlEdit_SetCueBanner(${})'
    },
    {
        label: '_GUICtrlEdit_SetLimitText',
        documentation: 'Sets the text limit',
        insertText: '_GUICtrlEdit_SetLimitText(${})'
    },
    {
        label: '_GUICtrlEdit_SetMargins',
        documentation: 'Sets the widths of the left and right margins',
        insertText: '_GUICtrlEdit_SetMargins(${})'
    },
    {
        label: '_GUICtrlEdit_SetModify',
        documentation: 'Sets or clears the modification flag',
        insertText: '_GUICtrlEdit_SetModify(${})'
    },
    {
        label: '_GUICtrlEdit_SetPasswordChar',
        documentation: 'Sets or removes the password character for an edit control',
        insertText: '_GUICtrlEdit_SetPasswordChar(${})'
    },
    {
        label: '_GUICtrlEdit_SetReadOnly',
        documentation: 'Sets or removes the read-only style ($ES_READONLY)',
        insertText: '_GUICtrlEdit_SetReadOnly(${})'
    },
    {
        label: '_GUICtrlEdit_SetRECT',
        documentation: 'Sets the formatting rectangle of a multiline edit control',
        insertText: '_GUICtrlEdit_SetRECT(${})'
    },
    {
        label: '_GUICtrlEdit_SetRECTEx',
        documentation: 'Sets the formatting rectangle of a multiline edit control',
        insertText: '_GUICtrlEdit_SetRECTEx(${})'
    },
    {
        label: '_GUICtrlEdit_SetRECTNP',
        documentation: 'Sets the formatting rectangle of a multiline edit control',
        insertText: '_GUICtrlEdit_SetRECTNP(${})'
    },
    {
        label: '_GUICtrlEdit_SetRectNPEx',
        documentation: 'Sets the formatting rectangle of a multiline edit control',
        insertText: '_GUICtrlEdit_SetRectNPEx(${})'
    },
    {
        label: '_GUICtrlEdit_SetSel',
        documentation: 'Selects a range of characters',
        insertText: '_GUICtrlEdit_SetSel(${})'
    },
    {
        label: '_GUICtrlEdit_SetTabStops',
        documentation: 'Sets the tab stops',
        insertText: '_GUICtrlEdit_SetTabStops(${})'
    },
    {
        label: '_GUICtrlEdit_SetText',
        documentation: 'Set the text',
        insertText: '_GUICtrlEdit_SetText(${})'
    },
    {
        label: '_GUICtrlEdit_ShowBalloonTip',
        documentation: 'Displays a balloon tip associated with an edit control',
        insertText: '_GUICtrlEdit_ShowBalloonTip(${})'
    },
    {
        label: '_GUICtrlEdit_Undo',
        documentation: 'Undoes the last edit control operation in the control\'s undo queue',
        insertText: '_GUICtrlEdit_Undo(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiEdit UDF - #include <GuiEdit.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items