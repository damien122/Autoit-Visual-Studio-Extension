'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlListBox_AddFile',
        documentation: 'Adds the specified filename that contains a directory listing'
    },
    {
        label: '_GUICtrlListBox_AddString',
        documentation: 'Add a string'
    },
    {
        label: '_GUICtrlListBox_BeginUpdate',
        documentation: 'Prevents updating of the control until the EndUpdate function is called'
    },
    {
        label: '_GUICtrlListBox_ClickItem',
        documentation: 'Clicks an item'
    },
    {
        label: '_GUICtrlListBox_Create',
        documentation: 'Create a Listbox control'
    },
    {
        label: '_GUICtrlListBox_DeleteString',
        documentation: 'Delete a string'
    },
    {
        label: '_GUICtrlListBox_Destroy',
        documentation: 'Delete the control'
    },
    {
        label: '_GUICtrlListBox_Dir',
        documentation: 'Adds the names of directories and files'
    },
    {
        label: '_GUICtrlListBox_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the BeginUpdate function'
    },
    {
        label: '_GUICtrlListBox_FindInText',
        documentation: 'Searches for an item that contains the specified text anywhere in its text'
    },
    {
        label: '_GUICtrlListBox_FindString',
        documentation: 'Search for a string'
    },
    {
        label: '_GUICtrlListBox_GetAnchorIndex',
        documentation: 'Retrieves the index of the anchor item'
    },
    {
        label: '_GUICtrlListBox_GetCaretIndex',
        documentation: 'Return index of item that has the focus rectangle'
    },
    {
        label: '_GUICtrlListBox_GetCount',
        documentation: 'Retrieves the number of items'
    },
    {
        label: '_GUICtrlListBox_GetCurSel',
        documentation: 'Retrieve the index of the currently selected item'
    },
    {
        label: '_GUICtrlListBox_GetHorizontalExtent',
        documentation: 'Retrieve from a list box the the scrollable width'
    },
    {
        label: '_GUICtrlListBox_GetItemData',
        documentation: 'Retrieves the application defined value associated with an item'
    },
    {
        label: '_GUICtrlListBox_GetItemHeight',
        documentation: 'Retrieves the height of items'
    },
    {
        label: '_GUICtrlListBox_GetItemRect',
        documentation: 'Retrieves the rectangle that bounds an item'
    },
    {
        label: '_GUICtrlListBox_GetItemRectEx',
        documentation: 'Retrieves the rectangle that bounds an item'
    },
    {
        label: '_GUICtrlListBox_GetListBoxInfo',
        documentation: 'Retrieve the number of items per column in a specified list box'
    },
    {
        label: '_GUICtrlListBox_GetLocale',
        documentation: 'Retrieves the current locale'
    },
    {
        label: '_GUICtrlListBox_GetLocaleCountry',
        documentation: 'Retrieves the current country code'
    },
    {
        label: '_GUICtrlListBox_GetLocaleLang',
        documentation: 'Retrieves the current language identifier'
    },
    {
        label: '_GUICtrlListBox_GetLocalePrimLang',
        documentation: 'Extract primary language id from a language id'
    },
    {
        label: '_GUICtrlListBox_GetLocaleSubLang',
        documentation: 'Extract sublanguage id from a language id'
    },
    {
        label: '_GUICtrlListBox_GetSel',
        documentation: 'Retrieves the selection state of an item'
    },
    {
        label: '_GUICtrlListBox_GetSelCount',
        documentation: 'Retrieves the total number of selected items'
    },
    {
        label: '_GUICtrlListBox_GetSelItems',
        documentation: 'Fills a buffer with an array of selected items'
    },
    {
        label: '_GUICtrlListBox_GetSelItemsText',
        documentation: 'Retrieves the text of selected items'
    },
    {
        label: '_GUICtrlListBox_GetText',
        documentation: 'Returns the item (string) at the specified index'
    },
    {
        label: '_GUICtrlListBox_GetTextLen',
        documentation: 'Gets the length of a string in a list box'
    },
    {
        label: '_GUICtrlListBox_GetTopIndex',
        documentation: 'Retrieve the index of the first visible item in a list'
    },
    {
        label: '_GUICtrlListBox_InitStorage',
        documentation: 'This message allocates memory for storing items'
    },
    {
        label: '_GUICtrlListBox_InsertString',
        documentation: 'Insert a string into the list'
    },
    {
        label: '_GUICtrlListBox_ItemFromPoint',
        documentation: 'Retrieves the 0-based index of the item nearest the specified point'
    },
    {
        label: '_GUICtrlListBox_ReplaceString',
        documentation: 'Replaces the text of an item'
    },
    {
        label: '_GUICtrlListBox_ResetContent',
        documentation: 'Remove all items from the list box'
    },
    {
        label: '_GUICtrlListBox_SelectString',
        documentation: 'Searchs for an item that begins with the specified string'
    },
    {
        label: '_GUICtrlListBox_SelItemRange',
        documentation: 'Select one or more consecutive items in a multiple-selection list box'
    },
    {
        label: '_GUICtrlListBox_SelItemRangeEx',
        documentation: 'Select one or more consecutive items in a multiple-selection list box'
    },
    {
        label: '_GUICtrlListBox_SetAnchorIndex',
        documentation: 'Set the anchor item—that is, the item from which a multiple selection starts'
    },
    {
        label: '_GUICtrlListBox_SetCaretIndex',
        documentation: 'Set the focus rectangle to the item at the specified index in a multiple-selection list box'
    },
    {
        label: '_GUICtrlListBox_SetColumnWidth',
        documentation: 'Set the width, in pixels, of all columns'
    },
    {
        label: '_GUICtrlListBox_SetCurSel',
        documentation: 'Select a string and scroll it into view, if necessary'
    },
    {
        label: '_GUICtrlListBox_SetHorizontalExtent',
        documentation: 'Set the width, in pixels, by which a list box can be scrolled horizontally'
    },
    {
        label: '_GUICtrlListBox_SetItemData',
        documentation: 'Sets the value associated with the specified item'
    },
    {
        label: '_GUICtrlListBox_SetItemHeight',
        documentation: 'Sets the height, in pixels, of items'
    },
    {
        label: '_GUICtrlListBox_SetLocale',
        documentation: 'Set the current locale'
    },
    {
        label: '_GUICtrlListBox_SetSel',
        documentation: 'Select a string(s) in a multiple-selection list box'
    },
    {
        label: '_GUICtrlListBox_SetTabStops',
        documentation: 'Sets the tab-stop positions'
    },
    {
        label: '_GUICtrlListBox_SetTopIndex',
        documentation: 'Ensure that a particular item in a list box is visible'
    },
    {
        label: '_GUICtrlListBox_Sort',
        documentation: 'Re-sorts list box if it has the $LBS_SORT style'
    },
    {
        label: '_GUICtrlListBox_SwapString',
        documentation: 'Swaps the text of two items at the specified indices'
    },
    {
        label: '_GUICtrlListBox_UpdateHScroll',
        documentation: 'Update the horizontal scroll bar based on the longest string '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiListBox UDF - #include <GuiListBox.au3>'
}

module.exports = items