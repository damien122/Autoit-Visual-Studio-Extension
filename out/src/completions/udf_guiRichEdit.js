'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlRichEdit_AppendText',
        documentation: 'Appends text at the end of the client area'
    },
    {
        label: '_GUICtrlRichEdit_AutoDetectURL',
        documentation: 'Enables or disables automatic detection of URLS'
    },
    {
        label: '_GUICtrlRichEdit_CanPaste',
        documentation: 'Can the contents of the clipboard be pasted into the control?'
    },
    {
        label: '_GUICtrlRichEdit_CanPasteSpecial',
        documentation: 'Can the contents of the clipboard be pasted into the control in both formats?'
    },
    {
        label: '_GUICtrlRichEdit_CanRedo',
        documentation: 'Can an undone action be redone?'
    },
    {
        label: '_GUICtrlRichEdit_CanUndo',
        documentation: 'Can an action be undone?'
    },
    {
        label: '_GUICtrlRichEdit_ChangeFontSize',
        documentation: 'Increment or decrement font size(s) of selected text'
    },
    {
        label: '_GUICtrlRichEdit_Copy',
        documentation: 'Copy text to clipboard'
    },
    {
        label: '_GUICtrlRichEdit_Create',
        documentation: 'Create an Edit control'
    },
    {
        label: '_GUICtrlRichEdit_Cut',
        documentation: 'Cut text to clipboard'
    },
    {
        label: '_GUICtrlRichEdit_Deselect',
        documentation: 'Deselects text, leaving none selected'
    },
    {
        label: '_GUICtrlRichEdit_Destroy',
        documentation: 'Delete the Rich Edit control'
    },
    {
        label: '_GUICtrlRichEdit_EmptyUndoBuffer',
        documentation: 'Resets the undo flag of the control'
    },
    {
        label: '_GUICtrlRichEdit_FindText',
        documentation: 'Search for a text starting at insertion point or at anchor point of selection'
    },
    {
        label: '_GUICtrlRichEdit_FindTextInRange',
        documentation: 'Search for a text in a range of inter-character positions'
    },
    {
        label: '_GUICtrlRichEdit_GetBkColor',
        documentation: 'Gets the background color of the control'
    },
    {
        label: '_GUICtrlRichEdit_GetCharAttributes',
        documentation: 'Returns attributes of selected text'
    },
    {
        label: '_GUICtrlRichEdit_GetCharBkColor',
        documentation: 'Retrieves the background color of the selected text or, if none selected, of the character to the right of the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_GetCharColor',
        documentation: 'Retrieves the color of the selected text or, if none selected, of the character to the right of the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_GetCharPosFromXY',
        documentation: 'Gets inter-character position closest to a specified point in the client area'
    },
    {
        label: '_GUICtrlRichEdit_GetCharPosOfNextWord',
        documentation: 'Gets inter-character position before the next word'
    },
    {
        label: '_GUICtrlRichEdit_GetCharPosOfPreviousWord',
        documentation: 'Gets inter-character position before the Previous word'
    },
    {
        label: '_GUICtrlRichEdit_GetCharWordBreakInfo',
        documentation: 'Gets inter-character position before the Previous word/'
    },
    {
        label: '_GUICtrlRichEdit_GetFirstCharPosOnLine',
        documentation: 'Retrieves the inter-character position preceding the first character of a line'
    },
    {
        label: '_GUICtrlRichEdit_GetFont',
        documentation: 'Gets the font attributes of a selection or, if no selection, at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_GetLineCount',
        documentation: 'Retrieves the number of lines in a multi-line edit control'
    },
    {
        label: '_GUICtrlRichEdit_GetLineLength',
        documentation: 'Retrieves the length of a line'
    },
    {
        label: '_GUICtrlRichEdit_GetLineNumberFromCharPos',
        documentation: 'Retrieves the line number on which an inter-character position is found'
    },
    {
        label: '_GUICtrlRichEdit_GetNextRedo',
        documentation: 'Retrieves the name or type ID of the next possible redo action'
    },
    {
        label: '_GUICtrlRichEdit_GetNextUndo',
        documentation: 'Retrieves the name or type ID of the next possible Undo action'
    },
    {
        label: '_GUICtrlRichEdit_GetNumberOfFirstVisibleLine',
        documentation: 'Gets number of the first line which is visible in the control'
    },
    {
        label: '_GUICtrlRichEdit_GetParaAlignment',
        documentation: 'Gets the alignment of selected paragraph(s), or (if no selection) of the current paragraph'
    },
    {
        label: '_GUICtrlRichEdit_GetParaAttributes',
        documentation: 'Gets the attributes of (first) selected paragraph or (if no selection) of the current paragraph'
    },
    {
        label: '_GUICtrlRichEdit_GetParaBorder',
        documentation: 'Gets the border settings of (first) selected paragraph or (if no selection) of the current paragraph'
    },
    {
        label: '_GUICtrlRichEdit_GetParaIndents',
        documentation: 'Gets the border indent settings of (first) selected paragraph or (if no selection) of the current paragraph'
    },
    {
        label: '_GUICtrlRichEdit_GetParaNumbering',
        documentation: 'Gets the numbering style of (first) selected paragraph or (if no selection) of the current paragraph'
    },
    {
        label: '_GUICtrlRichEdit_GetParaShading',
        documentation: 'Gets the shading settings of (first) selected paragraph or (if no selection) of the current paragraph'
    },
    {
        label: '_GUICtrlRichEdit_GetParaSpacing',
        documentation: 'Gets the spacing settings of (first) selected paragraph or (if no selection) of the current paragraph'
    },
    {
        label: '_GUICtrlRichEdit_GetParaTabStops',
        documentation: 'Gets the tabstops of (first) selected paragraph or (if no selection) of the current paragraph'
    },
    {
        label: '_GUICtrlRichEdit_GetPasswordChar',
        documentation: 'Gets the password character that a rich edit control displays when the user enters text'
    },
    {
        label: '_GUICtrlRichEdit_GetRECT',
        documentation: 'Retrieves the formatting rectangle of a control'
    },
    {
        label: '_GUICtrlRichEdit_GetScrollPos',
        documentation: 'Gets the Scrolling position of the control'
    },
    {
        label: '_GUICtrlRichEdit_GetSel',
        documentation: 'Gets the low and high inter-character positions of a selection'
    },
    {
        label: '_GUICtrlRichEdit_GetSelAA',
        documentation: 'Gets the anchor and active inter-character positions of a selection, in that order'
    },
    {
        label: '_GUICtrlRichEdit_GetSelText',
        documentation: 'Retrieves the currently selected text'
    },
    {
        label: '_GUICtrlRichEdit_GetSpaceUnit',
        documentation: 'Gets the unit of measure of horizontal and vertical space used in parameters of various _GUICtrlRichEdit functions'
    },
    {
        label: '_GUICtrlRichEdit_GetText',
        documentation: 'Get all of the text in the control'
    },
    {
        label: '_GUICtrlRichEdit_GetTextInLine',
        documentation: 'Gets a line of text'
    },
    {
        label: '_GUICtrlRichEdit_GetTextInRange',
        documentation: 'Gets the text from from one inter-character position to another'
    },
    {
        label: '_GUICtrlRichEdit_GetTextLength',
        documentation: 'Get the length of the whole text in the control'
    },
    {
        label: '_GUICtrlRichEdit_GetVersion',
        documentation: 'Retrieves the version of Rich Edit'
    },
    {
        label: '_GUICtrlRichEdit_GetXYFromCharPos',
        documentation: 'Retrieves the XY coordinates of an inter-character position'
    },
    {
        label: '_GUICtrlRichEdit_GetZoom',
        documentation: 'Gets the zoom level of the control'
    },
    {
        label: '_GUICtrlRichEdit_GotoCharPos',
        documentation: 'Moves the insertion point to an inter-character position'
    },
    {
        label: '_GUICtrlRichEdit_HideSelection',
        documentation: 'Hides (or shows) a selection'
    },
    {
        label: '_GUICtrlRichEdit_InsertText',
        documentation: 'Inserts text at insertion point or anchor point of selection'
    },
    {
        label: '_GUICtrlRichEdit_IsModified',
        documentation: 'Retrieves the state of a rich edit control\'s modification flag'
    },
    {
        label: '_GUICtrlRichEdit_IsTextSelected',
        documentation: 'Is text selected?'
    },
    {
        label: '_GUICtrlRichEdit_Paste',
        documentation: 'Paste RTF or RTF with Objects from clipboard'
    },
    {
        label: '_GUICtrlRichEdit_PasteSpecial',
        documentation: 'Paste RTF or RTF and Objects from clipboard'
    },
    {
        label: '_GUICtrlRichEdit_PauseRedraw',
        documentation: 'Pauses redrawing of the control'
    },
    {
        label: '_GUICtrlRichEdit_Redo',
        documentation: 'Redoes last undone action'
    },
    {
        label: '_GUICtrlRichEdit_ReplaceText',
        documentation: 'Replaces selected text'
    },
    {
        label: '_GUICtrlRichEdit_ResumeRedraw',
        documentation: 'Resumes redrawing of the control'
    },
    {
        label: '_GUICtrlRichEdit_ScrollLineOrPage',
        documentation: 'Scrolls the text down or up a line or a page'
    },
    {
        label: '_GUICtrlRichEdit_ScrollLines',
        documentation: 'Scrolls the text down or up a number of lines'
    },
    {
        label: '_GUICtrlRichEdit_ScrollToCaret',
        documentation: 'Scrolls to show line on which caret (insertion point) is'
    },
    {
        label: '_GUICtrlRichEdit_SetBkColor',
        documentation: 'Sets the background color of the control'
    },
    {
        label: '_GUICtrlRichEdit_SetCharAttributes',
        documentation: 'Turns an attribute on or off for selected text or, if none selected, for text inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetCharBkColor',
        documentation: 'Sets the background color of selected text or, if none selected, sets the background color of text inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetCharColor',
        documentation: 'Sets the color of selected text or, if none selected, sets the background color of text inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetEventMask',
        documentation: 'Specifies which notification messages are sent to the parent window'
    },
    {
        label: '_GUICtrlRichEdit_SetFont',
        documentation: 'Sets the font attributes of selected text or, if none selected, sets those of text inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetLimitOnText',
        documentation: 'Change number of characters that can be typed, pasted or streamed in as Rich Text Format'
    },
    {
        label: '_GUICtrlRichEdit_SetModified',
        documentation: 'Sets or clears the modification flag'
    },
    {
        label: '_GUICtrlRichEdit_SetParaAlignment',
        documentation: 'Sets alignment of paragraph(s) in the current selection or, if no selection, of paragraphs inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetParaAttributes',
        documentation: 'Sets attributes of paragraph(s) in the current selection or, if no selection, of paragraphs inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetParaBorder',
        documentation: 'Sets the border of paragraph(s) in the current selection or, if no selection, of paragraphs inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetParaIndents',
        documentation: 'Sets indents of paragraph(s) in the current selection or, if no selection, of paragraphs inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetParaNumbering',
        documentation: 'Sets numbering of paragraph(s) in the current selection or, if no selection, of paragraph(s) inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetParaShading',
        documentation: 'Sets the shading of paragraph(s) in the current selection or, if no selection, of paragraphs inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetParaSpacing',
        documentation: 'Sets paragraph spacing of paragraphs having selected text or, if none selected, sets it for text inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetParaTabStops',
        documentation: 'Sets tab stops of paragraphs having selected text or, if none selected, sets it for text inserted at the insertion point'
    },
    {
        label: '_GUICtrlRichEdit_SetPasswordChar',
        documentation: 'Sets the characters to be displayed instead of those typed, or causes typed characters to show'
    },
    {
        label: '_GUICtrlRichEdit_SetReadOnly',
        documentation: 'Sets or removes the read-only state'
    },
    {
        label: '_GUICtrlRichEdit_SetRECT',
        documentation: 'Sets the formatting rectangle of a Rich Edit control'
    },
    {
        label: '_GUICtrlRichEdit_SetScrollPos',
        documentation: 'Scrolls the display such that ($ix,$iY) is in the upper left corner of the control'
    },
    {
        label: '_GUICtrlRichEdit_SetSel',
        documentation: 'Sets the low and high character position of a selection'
    },
    {
        label: '_GUICtrlRichEdit_SetSpaceUnit',
        documentation: 'Sets the unit of measure of horizontal and vertical space used in parameters of various _GUICtrlRichEdit functions'
    },
    {
        label: '_GUICtrlRichEdit_SetTabStops',
        documentation: 'Sets tab stops for the control'
    },
    {
        label: '_GUICtrlRichEdit_SetText',
        documentation: 'Sets the text of a control'
    },
    {
        label: '_GUICtrlRichEdit_SetUndoLimit',
        documentation: 'Sets the maximum number of actions that can stored in the undo queue'
    },
    {
        label: '_GUICtrlRichEdit_SetZoom',
        documentation: 'Sets zoom level of the control'
    },
    {
        label: '_GUICtrlRichEdit_StreamFromFile',
        documentation: 'Sets text in a control from a file'
    },
    {
        label: '_GUICtrlRichEdit_StreamFromVar',
        documentation: 'Sets text in a control from a variable'
    },
    {
        label: '_GUICtrlRichEdit_StreamToFile',
        documentation: 'Writes contents of a control to a file'
    },
    {
        label: '_GUICtrlRichEdit_StreamToVar',
        documentation: 'Writes contents of a control to a variable'
    },
    {
        label: '_GUICtrlRichEdit_Undo',
        documentation: 'Undoes the last edit control operation in the control\'s undo queue '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiRichEdit UDF - #include <GuiRichEdit.au3>'
}

module.exports = items