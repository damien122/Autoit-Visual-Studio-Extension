'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlListBox_AddFile',
        documentation: 'Adds the specified filename that contains a directory listing',
        insertText: '_GUICtrlListBox_AddFile(${})'
    },
    {
        label: '_GUICtrlListBox_AddString',
        documentation: 'Add a string',
        insertText: '_GUICtrlListBox_AddString(${})'
    },
    {
        label: '_GUICtrlListBox_BeginUpdate',
        documentation: 'Prevents updating of the control until the EndUpdate function is called',
        insertText: '_GUICtrlListBox_BeginUpdate(${})'
    },
    {
        label: '_GUICtrlListBox_ClickItem',
        documentation: 'Clicks an item',
        insertText: '_GUICtrlListBox_ClickItem(${})'
    },
    {
        label: '_GUICtrlListBox_Create',
        documentation: 'Create a Listbox control',
        insertText: '_GUICtrlListBox_Create(${})'
    },
    {
        label: '_GUICtrlListBox_DeleteString',
        documentation: 'Delete a string',
        insertText: '_GUICtrlListBox_DeleteString(${})'
    },
    {
        label: '_GUICtrlListBox_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlListBox_Destroy(${})'
    },
    {
        label: '_GUICtrlListBox_Dir',
        documentation: 'Adds the names of directories and files',
        insertText: '_GUICtrlListBox_Dir(${})'
    },
    {
        label: '_GUICtrlListBox_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the BeginUpdate function',
        insertText: '_GUICtrlListBox_EndUpdate(${})'
    },
    {
        label: '_GUICtrlListBox_FindInText',
        documentation: 'Searches for an item that contains the specified text anywhere in its text',
        insertText: '_GUICtrlListBox_FindInText(${})'
    },
    {
        label: '_GUICtrlListBox_FindString',
        documentation: 'Search for a string',
        insertText: '_GUICtrlListBox_FindString(${})'
    },
    {
        label: '_GUICtrlListBox_GetAnchorIndex',
        documentation: 'Retrieves the index of the anchor item',
        insertText: '_GUICtrlListBox_GetAnchorIndex(${})'
    },
    {
        label: '_GUICtrlListBox_GetCaretIndex',
        documentation: 'Return index of item that has the focus rectangle',
        insertText: '_GUICtrlListBox_GetCaretIndex(${})'
    },
    {
        label: '_GUICtrlListBox_GetCount',
        documentation: 'Retrieves the number of items',
        insertText: '_GUICtrlListBox_GetCount(${})'
    },
    {
        label: '_GUICtrlListBox_GetCurSel',
        documentation: 'Retrieve the index of the currently selected item',
        insertText: '_GUICtrlListBox_GetCurSel(${})'
    },
    {
        label: '_GUICtrlListBox_GetHorizontalExtent',
        documentation: 'Retrieve from a list box the the scrollable width',
        insertText: '_GUICtrlListBox_GetHorizontalExtent(${})'
    },
    {
        label: '_GUICtrlListBox_GetItemData',
        documentation: 'Retrieves the application defined value associated with an item',
        insertText: '_GUICtrlListBox_GetItemData(${})'
    },
    {
        label: '_GUICtrlListBox_GetItemHeight',
        documentation: 'Retrieves the height of items',
        insertText: '_GUICtrlListBox_GetItemHeight(${})'
    },
    {
        label: '_GUICtrlListBox_GetItemRect',
        documentation: 'Retrieves the rectangle that bounds an item',
        insertText: '_GUICtrlListBox_GetItemRect(${})'
    },
    {
        label: '_GUICtrlListBox_GetItemRectEx',
        documentation: 'Retrieves the rectangle that bounds an item',
        insertText: '_GUICtrlListBox_GetItemRectEx(${})'
    },
    {
        label: '_GUICtrlListBox_GetListBoxInfo',
        documentation: 'Retrieve the number of items per column in a specified list box',
        insertText: '_GUICtrlListBox_GetListBoxInfo(${})'
    },
    {
        label: '_GUICtrlListBox_GetLocale',
        documentation: 'Retrieves the current locale',
        insertText: '_GUICtrlListBox_GetLocale(${})'
    },
    {
        label: '_GUICtrlListBox_GetLocaleCountry',
        documentation: 'Retrieves the current country code',
        insertText: '_GUICtrlListBox_GetLocaleCountry(${})'
    },
    {
        label: '_GUICtrlListBox_GetLocaleLang',
        documentation: 'Retrieves the current language identifier',
        insertText: '_GUICtrlListBox_GetLocaleLang(${})'
    },
    {
        label: '_GUICtrlListBox_GetLocalePrimLang',
        documentation: 'Extract primary language id from a language id',
        insertText: '_GUICtrlListBox_GetLocalePrimLang(${})'
    },
    {
        label: '_GUICtrlListBox_GetLocaleSubLang',
        documentation: 'Extract sublanguage id from a language id',
        insertText: '_GUICtrlListBox_GetLocaleSubLang(${})'
    },
    {
        label: '_GUICtrlListBox_GetSel',
        documentation: 'Retrieves the selection state of an item',
        insertText: '_GUICtrlListBox_GetSel(${})'
    },
    {
        label: '_GUICtrlListBox_GetSelCount',
        documentation: 'Retrieves the total number of selected items',
        insertText: '_GUICtrlListBox_GetSelCount(${})'
    },
    {
        label: '_GUICtrlListBox_GetSelItems',
        documentation: 'Fills a buffer with an array of selected items',
        insertText: '_GUICtrlListBox_GetSelItems(${})'
    },
    {
        label: '_GUICtrlListBox_GetSelItemsText',
        documentation: 'Retrieves the text of selected items',
        insertText: '_GUICtrlListBox_GetSelItemsText(${})'
    },
    {
        label: '_GUICtrlListBox_GetText',
        documentation: 'Returns the item (string) at the specified index',
        insertText: '_GUICtrlListBox_GetText(${})'
    },
    {
        label: '_GUICtrlListBox_GetTextLen',
        documentation: 'Gets the length of a string in a list box',
        insertText: '_GUICtrlListBox_GetTextLen(${})'
    },
    {
        label: '_GUICtrlListBox_GetTopIndex',
        documentation: 'Retrieve the index of the first visible item in a list',
        insertText: '_GUICtrlListBox_GetTopIndex(${})'
    },
    {
        label: '_GUICtrlListBox_InitStorage',
        documentation: 'This message allocates memory for storing items',
        insertText: '_GUICtrlListBox_InitStorage(${})'
    },
    {
        label: '_GUICtrlListBox_InsertString',
        documentation: 'Insert a string into the list',
        insertText: '_GUICtrlListBox_InsertString(${})'
    },
    {
        label: '_GUICtrlListBox_ItemFromPoint',
        documentation: 'Retrieves the 0-based index of the item nearest the specified point',
        insertText: '_GUICtrlListBox_ItemFromPoint(${})'
    },
    {
        label: '_GUICtrlListBox_ReplaceString',
        documentation: 'Replaces the text of an item',
        insertText: '_GUICtrlListBox_ReplaceString(${})'
    },
    {
        label: '_GUICtrlListBox_ResetContent',
        documentation: 'Remove all items from the list box',
        insertText: '_GUICtrlListBox_ResetContent(${})'
    },
    {
        label: '_GUICtrlListBox_SelectString',
        documentation: 'Searchs for an item that begins with the specified string',
        insertText: '_GUICtrlListBox_SelectString(${})'
    },
    {
        label: '_GUICtrlListBox_SelItemRange',
        documentation: 'Select one or more consecutive items in a multiple-selection list box',
        insertText: '_GUICtrlListBox_SelItemRange(${})'
    },
    {
        label: '_GUICtrlListBox_SelItemRangeEx',
        documentation: 'Select one or more consecutive items in a multiple-selection list box',
        insertText: '_GUICtrlListBox_SelItemRangeEx(${})'
    },
    {
        label: '_GUICtrlListBox_SetAnchorIndex',
        documentation: 'Set the anchor item—that is, the item from which a multiple selection starts',
        insertText: '_GUICtrlListBox_SetAnchorIndex(${})'
    },
    {
        label: '_GUICtrlListBox_SetCaretIndex',
        documentation: 'Set the focus rectangle to the item at the specified index in a multiple-selection list box',
        insertText: '_GUICtrlListBox_SetCaretIndex(${})'
    },
    {
        label: '_GUICtrlListBox_SetColumnWidth',
        documentation: 'Set the width, in pixels, of all columns',
        insertText: '_GUICtrlListBox_SetColumnWidth(${})'
    },
    {
        label: '_GUICtrlListBox_SetCurSel',
        documentation: 'Select a string and scroll it into view, if necessary',
        insertText: '_GUICtrlListBox_SetCurSel(${})'
    },
    {
        label: '_GUICtrlListBox_SetHorizontalExtent',
        documentation: 'Set the width, in pixels, by which a list box can be scrolled horizontally',
        insertText: '_GUICtrlListBox_SetHorizontalExtent(${})'
    },
    {
        label: '_GUICtrlListBox_SetItemData',
        documentation: 'Sets the value associated with the specified item',
        insertText: '_GUICtrlListBox_SetItemData(${})'
    },
    {
        label: '_GUICtrlListBox_SetItemHeight',
        documentation: 'Sets the height, in pixels, of items',
        insertText: '_GUICtrlListBox_SetItemHeight(${})'
    },
    {
        label: '_GUICtrlListBox_SetLocale',
        documentation: 'Set the current locale',
        insertText: '_GUICtrlListBox_SetLocale(${})'
    },
    {
        label: '_GUICtrlListBox_SetSel',
        documentation: 'Select a string(s) in a multiple-selection list box',
        insertText: '_GUICtrlListBox_SetSel(${})'
    },
    {
        label: '_GUICtrlListBox_SetTabStops',
        documentation: 'Sets the tab-stop positions',
        insertText: '_GUICtrlListBox_SetTabStops(${})'
    },
    {
        label: '_GUICtrlListBox_SetTopIndex',
        documentation: 'Ensure that a particular item in a list box is visible',
        insertText: '_GUICtrlListBox_SetTopIndex(${})'
    },
    {
        label: '_GUICtrlListBox_Sort',
        documentation: 'Re-sorts list box if it has the $LBS_SORT style',
        insertText: '_GUICtrlListBox_Sort(${})'
    },
    {
        label: '_GUICtrlListBox_SwapString',
        documentation: 'Swaps the text of two items at the specified indices',
        insertText: '_GUICtrlListBox_SwapString(${})'
    },
    {
        label: '_GUICtrlListBox_UpdateHScroll',
        documentation: 'Update the horizontal scroll bar based on the longest string ',
        insertText: '_GUICtrlListBox_UpdateHScroll(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiListBox UDF - #include <GuiListBox.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items