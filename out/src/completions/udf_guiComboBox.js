'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlComboBox_AddDir',
        documentation: 'Adds the names of directories and files',
        insertText: '_GUICtrlComboBox_AddDir(${})'
    },
    {
        label: '_GUICtrlComboBox_AddString',
        documentation: 'Add a string',
        insertText: '_GUICtrlComboBox_AddString(${})'
    },
    {
        label: '_GUICtrlComboBox_AutoComplete',
        documentation: 'AutoComplete a ComboBox edit control',
        insertText: '_GUICtrlComboBox_AutoComplete(${})'
    },
    {
        label: '_GUICtrlComboBox_BeginUpdate',
        documentation: 'Prevents updating of the control until the EndUpdate function is called',
        insertText: '_GUICtrlComboBox_BeginUpdate(${})'
    },
    {
        label: '_GUICtrlComboBox_Create',
        documentation: 'Create a ComboBox control',
        insertText: '_GUICtrlComboBox_Create(${})'
    },
    {
        label: '_GUICtrlComboBox_DeleteString',
        documentation: 'Delete a string',
        insertText: '_GUICtrlComboBox_DeleteString(${})'
    },
    {
        label: '_GUICtrlComboBox_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlComboBox_Destroy(${})'
    },
    {
        label: '_GUICtrlComboBox_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the BeginUpdate function',
        insertText: '_GUICtrlComboBox_EndUpdate(${})'
    },
    {
        label: '_GUICtrlComboBox_FindString',
        documentation: 'Search for a string',
        insertText: '_GUICtrlComboBox_FindString(${})'
    },
    {
        label: '_GUICtrlComboBox_FindStringExact',
        documentation: 'Search for a string',
        insertText: '_GUICtrlComboBox_FindStringExact(${})'
    },
    {
        label: '_GUICtrlComboBox_GetComboBoxInfo',
        documentation: 'Gets information about the specified ComboBox',
        insertText: '_GUICtrlComboBox_GetComboBoxInfo(${})'
    },
    {
        label: '_GUICtrlComboBox_GetCount',
        documentation: 'Retrieve the number of items',
        insertText: '_GUICtrlComboBox_GetCount(${})'
    },
    {
        label: '_GUICtrlComboBox_GetCueBanner',
        documentation: 'Gets the cue banner text displayed in the edit control of a combo box',
        insertText: '_GUICtrlComboBox_GetCueBanner(${})'
    },
    {
        label: '_GUICtrlComboBox_GetCurSel',
        documentation: 'Retrieve the index of the currently selected item',
        insertText: '_GUICtrlComboBox_GetCurSel(${})'
    },
    {
        label: '_GUICtrlComboBox_GetDroppedControlRect',
        documentation: 'Retrieve the screen coordinates of a combo box in its dropped-down state',
        insertText: '_GUICtrlComboBox_GetDroppedControlRect(${})'
    },
    {
        label: '_GUICtrlComboBox_GetDroppedControlRectEx',
        documentation: 'Retrieve the screen coordinates of a combo box in its dropped-down state',
        insertText: '_GUICtrlComboBox_GetDroppedControlRectEx(${})'
    },
    {
        label: '_GUICtrlComboBox_GetDroppedState',
        documentation: 'Determines whether the ListBox of a ComboBox is dropped down',
        insertText: '_GUICtrlComboBox_GetDroppedState(${})'
    },
    {
        label: '_GUICtrlComboBox_GetDroppedWidth',
        documentation: 'Retrieve the minimum allowable width, of the ListBox of a ComboBox',
        insertText: '_GUICtrlComboBox_GetDroppedWidth(${})'
    },
    {
        label: '_GUICtrlComboBox_GetEditSel',
        documentation: 'Gets the starting and ending character positions of the current selection in the edit control of a ComboBox',
        insertText: '_GUICtrlComboBox_GetEditSel(${})'
    },
    {
        label: '_GUICtrlComboBox_GetEditText',
        documentation: 'Get the text from the edit control of a ComboBox',
        insertText: '_GUICtrlComboBox_GetEditText(${})'
    },
    {
        label: '_GUICtrlComboBox_GetExtendedUI',
        documentation: 'Determines whether a ComboBox has the default user interface or the extended user interface',
        insertText: '_GUICtrlComboBox_GetExtendedUI(${})'
    },
    {
        label: '_GUICtrlComboBox_GetHorizontalExtent',
        documentation: 'Gets the width, in pixels, that the ListBox of a ComboBox control can be scrolled horizontally',
        insertText: '_GUICtrlComboBox_GetHorizontalExtent(${})'
    },
    {
        label: '_GUICtrlComboBox_GetItemHeight',
        documentation: 'Determines the height of list items or the selection field in a ComboBox',
        insertText: '_GUICtrlComboBox_GetItemHeight(${})'
    },
    {
        label: '_GUICtrlComboBox_GetLBText',
        documentation: 'Retrieve a string from the list of a ComboBox',
        insertText: '_GUICtrlComboBox_GetLBText(${})'
    },
    {
        label: '_GUICtrlComboBox_GetLBTextLen',
        documentation: 'Gets the length, in characters, of a string in the list of a combo box',
        insertText: '_GUICtrlComboBox_GetLBTextLen(${})'
    },
    {
        label: '_GUICtrlComboBox_GetList',
        documentation: 'Retrieves all items from the list portion of a ComboBox control',
        insertText: '_GUICtrlComboBox_GetList(${})'
    },
    {
        label: '_GUICtrlComboBox_GetListArray',
        documentation: 'Retrieves all items from the list portion of a ComboBox control',
        insertText: '_GUICtrlComboBox_GetListArray(${})'
    },
    {
        label: '_GUICtrlComboBox_GetLocale',
        documentation: 'Retrieves the current locale',
        insertText: '_GUICtrlComboBox_GetLocale(${})'
    },
    {
        label: '_GUICtrlComboBox_GetLocaleCountry',
        documentation: 'Retrieves the current country code',
        insertText: '_GUICtrlComboBox_GetLocaleCountry(${})'
    },
    {
        label: '_GUICtrlComboBox_GetLocaleLang',
        documentation: 'Retrieves the current language identifier',
        insertText: '_GUICtrlComboBox_GetLocaleLang(${})'
    },
    {
        label: '_GUICtrlComboBox_GetLocalePrimLang',
        documentation: 'Extract primary language id from a language id',
        insertText: '_GUICtrlComboBox_GetLocalePrimLang(${})'
    },
    {
        label: '_GUICtrlComboBox_GetLocaleSubLang',
        documentation: 'Extract sublanguage id from a language id',
        insertText: '_GUICtrlComboBox_GetLocaleSubLang(${})'
    },
    {
        label: '_GUICtrlComboBox_GetMinVisible',
        documentation: 'Retrieve the minimum number of visible items in the drop-down list of a ComboBox',
        insertText: '_GUICtrlComboBox_GetMinVisible(${})'
    },
    {
        label: '_GUICtrlComboBox_GetTopIndex',
        documentation: 'Retrieve the 0-based index of the first visible item in the ListBox portion of a ComboBox',
        insertText: '_GUICtrlComboBox_GetTopIndex(${})'
    },
    {
        label: '_GUICtrlComboBox_InitStorage',
        documentation: 'Allocates memory for storing ListBox items',
        insertText: '_GUICtrlComboBox_InitStorage(${})'
    },
    {
        label: '_GUICtrlComboBox_InsertString',
        documentation: 'Insert a string',
        insertText: '_GUICtrlComboBox_InsertString(${})'
    },
    {
        label: '_GUICtrlComboBox_LimitText',
        documentation: 'Limits the length of the text the user may type into the edit control of a ComboBox',
        insertText: '_GUICtrlComboBox_LimitText(${})'
    },
    {
        label: '_GUICtrlComboBox_ReplaceEditSel',
        documentation: 'Replace text selected in edit box',
        insertText: '_GUICtrlComboBox_ReplaceEditSel(${})'
    },
    {
        label: '_GUICtrlComboBox_ResetContent',
        documentation: 'Remove all items from the ListBox and edit control of a ComboBox',
        insertText: '_GUICtrlComboBox_ResetContent(${})'
    },
    {
        label: '_GUICtrlComboBox_SelectString',
        documentation: 'Searches the ListBox of a ComboBox for an item that begins with the characters in a specified string',
        insertText: '_GUICtrlComboBox_SelectString(${})'
    },
    {
        label: '_GUICtrlComboBox_SetCueBanner',
        documentation: 'Sets the cue banner text that is displayed for the edit control of a combo box',
        insertText: '_GUICtrlComboBox_SetCueBanner(${})'
    },
    {
        label: '_GUICtrlComboBox_SetCurSel',
        documentation: 'Select a string in the list of a ComboBox',
        insertText: '_GUICtrlComboBox_SetCurSel(${})'
    },
    {
        label: '_GUICtrlComboBox_SetDroppedWidth',
        documentation: 'Set the maximum allowable width, in pixels, of the ListBox of a ComboBox',
        insertText: '_GUICtrlComboBox_SetDroppedWidth(${})'
    },
    {
        label: '_GUICtrlComboBox_SetEditSel',
        documentation: 'Select characters in the edit control of a ComboBox',
        insertText: '_GUICtrlComboBox_SetEditSel(${})'
    },
    {
        label: '_GUICtrlComboBox_SetEditText',
        documentation: 'Set the text of the edit control of the ComboBox',
        insertText: '_GUICtrlComboBox_SetEditText(${})'
    },
    {
        label: '_GUICtrlComboBox_SetExtendedUI',
        documentation: 'Select either the default user interface or the extended user interface',
        insertText: '_GUICtrlComboBox_SetExtendedUI(${})'
    },
    {
        label: '_GUICtrlComboBox_SetHorizontalExtent',
        documentation: 'Set the width, in pixels, by which a list box can be scrolled horizontally',
        insertText: '_GUICtrlComboBox_SetHorizontalExtent(${})'
    },
    {
        label: '_GUICtrlComboBox_SetItemHeight',
        documentation: 'Set the height of list items or the selection field in a ComboBox',
        insertText: '_GUICtrlComboBox_SetItemHeight(${})'
    },
    {
        label: '_GUICtrlComboBox_SetMinVisible',
        documentation: 'Set the minimum number of visible items in the drop-down list of a ComboBox',
        insertText: '_GUICtrlComboBox_SetMinVisible(${})'
    },
    {
        label: '_GUICtrlComboBox_SetTopIndex',
        documentation: 'Ensure that a particular item is visible in the ListBox of a ComboBox',
        insertText: '_GUICtrlComboBox_SetTopIndex(${})'
    },
    {
        label: '_GUICtrlComboBox_ShowDropDown',
        documentation: 'Show or hide the ListBox of a ComboBox',
        insertText: '_GUICtrlComboBox_ShowDropDown(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiComboBox UDF - #include <GuiComboBox.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items