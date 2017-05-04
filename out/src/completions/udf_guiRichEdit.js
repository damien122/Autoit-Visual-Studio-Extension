'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlRichEdit_AppendText',
        documentation: 'Appends text at the end of the client area',
        insertText: '_GUICtrlRichEdit_AppendText(${})'
    },
    {
        label: '_GUICtrlRichEdit_AutoDetectURL',
        documentation: 'Enables or disables automatic detection of URLS',
        insertText: '_GUICtrlRichEdit_AutoDetectURL(${})'
    },
    {
        label: '_GUICtrlRichEdit_CanPaste',
        documentation: 'Can the contents of the clipboard be pasted into the control?',
        insertText: '_GUICtrlRichEdit_CanPaste(${})'
    },
    {
        label: '_GUICtrlRichEdit_CanPasteSpecial',
        documentation: 'Can the contents of the clipboard be pasted into the control in both formats?',
        insertText: '_GUICtrlRichEdit_CanPasteSpecial(${})'
    },
    {
        label: '_GUICtrlRichEdit_CanRedo',
        documentation: 'Can an undone action be redone?',
        insertText: '_GUICtrlRichEdit_CanRedo(${})'
    },
    {
        label: '_GUICtrlRichEdit_CanUndo',
        documentation: 'Can an action be undone?',
        insertText: '_GUICtrlRichEdit_CanUndo(${})'
    },
    {
        label: '_GUICtrlRichEdit_ChangeFontSize',
        documentation: 'Increment or decrement font size(s) of selected text',
        insertText: '_GUICtrlRichEdit_ChangeFontSize(${})'
    },
    {
        label: '_GUICtrlRichEdit_Copy',
        documentation: 'Copy text to clipboard',
        insertText: '_GUICtrlRichEdit_Copy(${})'
    },
    {
        label: '_GUICtrlRichEdit_Create',
        documentation: 'Create an Edit control',
        insertText: '_GUICtrlRichEdit_Create(${})'
    },
    {
        label: '_GUICtrlRichEdit_Cut',
        documentation: 'Cut text to clipboard',
        insertText: '_GUICtrlRichEdit_Cut(${})'
    },
    {
        label: '_GUICtrlRichEdit_Deselect',
        documentation: 'Deselects text, leaving none selected',
        insertText: '_GUICtrlRichEdit_Deselect(${})'
    },
    {
        label: '_GUICtrlRichEdit_Destroy',
        documentation: 'Delete the Rich Edit control',
        insertText: '_GUICtrlRichEdit_Destroy(${})'
    },
    {
        label: '_GUICtrlRichEdit_EmptyUndoBuffer',
        documentation: 'Resets the undo flag of the control',
        insertText: '_GUICtrlRichEdit_EmptyUndoBuffer(${})'
    },
    {
        label: '_GUICtrlRichEdit_FindText',
        documentation: 'Search for a text starting at insertion point or at anchor point of selection',
        insertText: '_GUICtrlRichEdit_FindText(${})'
    },
    {
        label: '_GUICtrlRichEdit_FindTextInRange',
        documentation: 'Search for a text in a range of inter-character positions',
        insertText: '_GUICtrlRichEdit_FindTextInRange(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetBkColor',
        documentation: 'Gets the background color of the control',
        insertText: '_GUICtrlRichEdit_GetBkColor(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetCharAttributes',
        documentation: 'Returns attributes of selected text',
        insertText: '_GUICtrlRichEdit_GetCharAttributes(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetCharBkColor',
        documentation: 'Retrieves the background color of the selected text or, if none selected, of the character to the right of the insertion point',
        insertText: '_GUICtrlRichEdit_GetCharBkColor(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetCharColor',
        documentation: 'Retrieves the color of the selected text or, if none selected, of the character to the right of the insertion point',
        insertText: '_GUICtrlRichEdit_GetCharColor(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetCharPosFromXY',
        documentation: 'Gets inter-character position closest to a specified point in the client area',
        insertText: '_GUICtrlRichEdit_GetCharPosFromXY(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetCharPosOfNextWord',
        documentation: 'Gets inter-character position before the next word',
        insertText: '_GUICtrlRichEdit_GetCharPosOfNextWord(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetCharPosOfPreviousWord',
        documentation: 'Gets inter-character position before the Previous word',
        insertText: '_GUICtrlRichEdit_GetCharPosOfPreviousWord(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetCharWordBreakInfo',
        documentation: 'Gets inter-character position before the Previous word/',
        insertText: '_GUICtrlRichEdit_GetCharWordBreakInfo(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetFirstCharPosOnLine',
        documentation: 'Retrieves the inter-character position preceding the first character of a line',
        insertText: '_GUICtrlRichEdit_GetFirstCharPosOnLine(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetFont',
        documentation: 'Gets the font attributes of a selection or, if no selection, at the insertion point',
        insertText: '_GUICtrlRichEdit_GetFont(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetLineCount',
        documentation: 'Retrieves the number of lines in a multi-line edit control',
        insertText: '_GUICtrlRichEdit_GetLineCount(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetLineLength',
        documentation: 'Retrieves the length of a line',
        insertText: '_GUICtrlRichEdit_GetLineLength(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetLineNumberFromCharPos',
        documentation: 'Retrieves the line number on which an inter-character position is found',
        insertText: '_GUICtrlRichEdit_GetLineNumberFromCharPos(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetNextRedo',
        documentation: 'Retrieves the name or type ID of the next possible redo action',
        insertText: '_GUICtrlRichEdit_GetNextRedo(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetNextUndo',
        documentation: 'Retrieves the name or type ID of the next possible Undo action',
        insertText: '_GUICtrlRichEdit_GetNextUndo(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetNumberOfFirstVisibleLine',
        documentation: 'Gets number of the first line which is visible in the control',
        insertText: '_GUICtrlRichEdit_GetNumberOfFirstVisibleLine(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetParaAlignment',
        documentation: 'Gets the alignment of selected paragraph(s), or (if no selection) of the current paragraph',
        insertText: '_GUICtrlRichEdit_GetParaAlignment(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetParaAttributes',
        documentation: 'Gets the attributes of (first) selected paragraph or (if no selection) of the current paragraph',
        insertText: '_GUICtrlRichEdit_GetParaAttributes(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetParaBorder',
        documentation: 'Gets the border settings of (first) selected paragraph or (if no selection) of the current paragraph',
        insertText: '_GUICtrlRichEdit_GetParaBorder(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetParaIndents',
        documentation: 'Gets the border indent settings of (first) selected paragraph or (if no selection) of the current paragraph',
        insertText: '_GUICtrlRichEdit_GetParaIndents(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetParaNumbering',
        documentation: 'Gets the numbering style of (first) selected paragraph or (if no selection) of the current paragraph',
        insertText: '_GUICtrlRichEdit_GetParaNumbering(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetParaShading',
        documentation: 'Gets the shading settings of (first) selected paragraph or (if no selection) of the current paragraph',
        insertText: '_GUICtrlRichEdit_GetParaShading(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetParaSpacing',
        documentation: 'Gets the spacing settings of (first) selected paragraph or (if no selection) of the current paragraph',
        insertText: '_GUICtrlRichEdit_GetParaSpacing(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetParaTabStops',
        documentation: 'Gets the tabstops of (first) selected paragraph or (if no selection) of the current paragraph',
        insertText: '_GUICtrlRichEdit_GetParaTabStops(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetPasswordChar',
        documentation: 'Gets the password character that a rich edit control displays when the user enters text',
        insertText: '_GUICtrlRichEdit_GetPasswordChar(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetRECT',
        documentation: 'Retrieves the formatting rectangle of a control',
        insertText: '_GUICtrlRichEdit_GetRECT(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetScrollPos',
        documentation: 'Gets the Scrolling position of the control',
        insertText: '_GUICtrlRichEdit_GetScrollPos(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetSel',
        documentation: 'Gets the low and high inter-character positions of a selection',
        insertText: '_GUICtrlRichEdit_GetSel(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetSelAA',
        documentation: 'Gets the anchor and active inter-character positions of a selection, in that order',
        insertText: '_GUICtrlRichEdit_GetSelAA(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetSelText',
        documentation: 'Retrieves the currently selected text',
        insertText: '_GUICtrlRichEdit_GetSelText(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetSpaceUnit',
        documentation: 'Gets the unit of measure of horizontal and vertical space used in parameters of various _GUICtrlRichEdit functions',
        insertText: '_GUICtrlRichEdit_GetSpaceUnit(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetText',
        documentation: 'Get all of the text in the control',
        insertText: '_GUICtrlRichEdit_GetText(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetTextInLine',
        documentation: 'Gets a line of text',
        insertText: '_GUICtrlRichEdit_GetTextInLine(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetTextInRange',
        documentation: 'Gets the text from from one inter-character position to another',
        insertText: '_GUICtrlRichEdit_GetTextInRange(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetTextLength',
        documentation: 'Get the length of the whole text in the control',
        insertText: '_GUICtrlRichEdit_GetTextLength(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetVersion',
        documentation: 'Retrieves the version of Rich Edit',
        insertText: '_GUICtrlRichEdit_GetVersion(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetXYFromCharPos',
        documentation: 'Retrieves the XY coordinates of an inter-character position',
        insertText: '_GUICtrlRichEdit_GetXYFromCharPos(${})'
    },
    {
        label: '_GUICtrlRichEdit_GetZoom',
        documentation: 'Gets the zoom level of the control',
        insertText: '_GUICtrlRichEdit_GetZoom(${})'
    },
    {
        label: '_GUICtrlRichEdit_GotoCharPos',
        documentation: 'Moves the insertion point to an inter-character position',
        insertText: '_GUICtrlRichEdit_GotoCharPos(${})'
    },
    {
        label: '_GUICtrlRichEdit_HideSelection',
        documentation: 'Hides (or shows) a selection',
        insertText: '_GUICtrlRichEdit_HideSelection(${})'
    },
    {
        label: '_GUICtrlRichEdit_InsertText',
        documentation: 'Inserts text at insertion point or anchor point of selection',
        insertText: '_GUICtrlRichEdit_InsertText(${})'
    },
    {
        label: '_GUICtrlRichEdit_IsModified',
        documentation: 'Retrieves the state of a rich edit control\'s modification flag',
        insertText: '_GUICtrlRichEdit_IsModified(${})'
    },
    {
        label: '_GUICtrlRichEdit_IsTextSelected',
        documentation: 'Is text selected?',
        insertText: '_GUICtrlRichEdit_IsTextSelected(${})'
    },
    {
        label: '_GUICtrlRichEdit_Paste',
        documentation: 'Paste RTF or RTF with Objects from clipboard',
        insertText: '_GUICtrlRichEdit_Paste(${})'
    },
    {
        label: '_GUICtrlRichEdit_PasteSpecial',
        documentation: 'Paste RTF or RTF and Objects from clipboard',
        insertText: '_GUICtrlRichEdit_PasteSpecial(${})'
    },
    {
        label: '_GUICtrlRichEdit_PauseRedraw',
        documentation: 'Pauses redrawing of the control',
        insertText: '_GUICtrlRichEdit_PauseRedraw(${})'
    },
    {
        label: '_GUICtrlRichEdit_Redo',
        documentation: 'Redoes last undone action',
        insertText: '_GUICtrlRichEdit_Redo(${})'
    },
    {
        label: '_GUICtrlRichEdit_ReplaceText',
        documentation: 'Replaces selected text',
        insertText: '_GUICtrlRichEdit_ReplaceText(${})'
    },
    {
        label: '_GUICtrlRichEdit_ResumeRedraw',
        documentation: 'Resumes redrawing of the control',
        insertText: '_GUICtrlRichEdit_ResumeRedraw(${})'
    },
    {
        label: '_GUICtrlRichEdit_ScrollLineOrPage',
        documentation: 'Scrolls the text down or up a line or a page',
        insertText: '_GUICtrlRichEdit_ScrollLineOrPage(${})'
    },
    {
        label: '_GUICtrlRichEdit_ScrollLines',
        documentation: 'Scrolls the text down or up a number of lines',
        insertText: '_GUICtrlRichEdit_ScrollLines(${})'
    },
    {
        label: '_GUICtrlRichEdit_ScrollToCaret',
        documentation: 'Scrolls to show line on which caret (insertion point) is',
        insertText: '_GUICtrlRichEdit_ScrollToCaret(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetBkColor',
        documentation: 'Sets the background color of the control',
        insertText: '_GUICtrlRichEdit_SetBkColor(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetCharAttributes',
        documentation: 'Turns an attribute on or off for selected text or, if none selected, for text inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetCharAttributes(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetCharBkColor',
        documentation: 'Sets the background color of selected text or, if none selected, sets the background color of text inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetCharBkColor(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetCharColor',
        documentation: 'Sets the color of selected text or, if none selected, sets the background color of text inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetCharColor(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetEventMask',
        documentation: 'Specifies which notification messages are sent to the parent window',
        insertText: '_GUICtrlRichEdit_SetEventMask(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetFont',
        documentation: 'Sets the font attributes of selected text or, if none selected, sets those of text inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetFont(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetLimitOnText',
        documentation: 'Change number of characters that can be typed, pasted or streamed in as Rich Text Format',
        insertText: '_GUICtrlRichEdit_SetLimitOnText(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetModified',
        documentation: 'Sets or clears the modification flag',
        insertText: '_GUICtrlRichEdit_SetModified(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetParaAlignment',
        documentation: 'Sets alignment of paragraph(s) in the current selection or, if no selection, of paragraphs inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetParaAlignment(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetParaAttributes',
        documentation: 'Sets attributes of paragraph(s) in the current selection or, if no selection, of paragraphs inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetParaAttributes(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetParaBorder',
        documentation: 'Sets the border of paragraph(s) in the current selection or, if no selection, of paragraphs inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetParaBorder(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetParaIndents',
        documentation: 'Sets indents of paragraph(s) in the current selection or, if no selection, of paragraphs inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetParaIndents(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetParaNumbering',
        documentation: 'Sets numbering of paragraph(s) in the current selection or, if no selection, of paragraph(s) inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetParaNumbering(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetParaShading',
        documentation: 'Sets the shading of paragraph(s) in the current selection or, if no selection, of paragraphs inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetParaShading(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetParaSpacing',
        documentation: 'Sets paragraph spacing of paragraphs having selected text or, if none selected, sets it for text inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetParaSpacing(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetParaTabStops',
        documentation: 'Sets tab stops of paragraphs having selected text or, if none selected, sets it for text inserted at the insertion point',
        insertText: '_GUICtrlRichEdit_SetParaTabStops(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetPasswordChar',
        documentation: 'Sets the characters to be displayed instead of those typed, or causes typed characters to show',
        insertText: '_GUICtrlRichEdit_SetPasswordChar(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetReadOnly',
        documentation: 'Sets or removes the read-only state',
        insertText: '_GUICtrlRichEdit_SetReadOnly(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetRECT',
        documentation: 'Sets the formatting rectangle of a Rich Edit control',
        insertText: '_GUICtrlRichEdit_SetRECT(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetScrollPos',
        documentation: 'Scrolls the display such that ($ix,$iY) is in the upper left corner of the control',
        insertText: '_GUICtrlRichEdit_SetScrollPos(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetSel',
        documentation: 'Sets the low and high character position of a selection',
        insertText: '_GUICtrlRichEdit_SetSel(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetSpaceUnit',
        documentation: 'Sets the unit of measure of horizontal and vertical space used in parameters of various _GUICtrlRichEdit functions',
        insertText: '_GUICtrlRichEdit_SetSpaceUnit(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetTabStops',
        documentation: 'Sets tab stops for the control',
        insertText: '_GUICtrlRichEdit_SetTabStops(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetText',
        documentation: 'Sets the text of a control',
        insertText: '_GUICtrlRichEdit_SetText(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetUndoLimit',
        documentation: 'Sets the maximum number of actions that can stored in the undo queue',
        insertText: '_GUICtrlRichEdit_SetUndoLimit(${})'
    },
    {
        label: '_GUICtrlRichEdit_SetZoom',
        documentation: 'Sets zoom level of the control',
        insertText: '_GUICtrlRichEdit_SetZoom(${})'
    },
    {
        label: '_GUICtrlRichEdit_StreamFromFile',
        documentation: 'Sets text in a control from a file',
        insertText: '_GUICtrlRichEdit_StreamFromFile(${})'
    },
    {
        label: '_GUICtrlRichEdit_StreamFromVar',
        documentation: 'Sets text in a control from a variable',
        insertText: '_GUICtrlRichEdit_StreamFromVar(${})'
    },
    {
        label: '_GUICtrlRichEdit_StreamToFile',
        documentation: 'Writes contents of a control to a file',
        insertText: '_GUICtrlRichEdit_StreamToFile(${})'
    },
    {
        label: '_GUICtrlRichEdit_StreamToVar',
        documentation: 'Writes contents of a control to a variable',
        insertText: '_GUICtrlRichEdit_StreamToVar(${})'
    },
    {
        label: '_GUICtrlRichEdit_Undo',
        documentation: 'Undoes the last edit control operation in the control\'s undo queue ',
        insertText: '_GUICtrlRichEdit_Undo(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiRichEdit UDF - #include <GuiRichEdit.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items