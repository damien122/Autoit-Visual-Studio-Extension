'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlComboBox_AddDir',
        documentation: 'Adds the names of directories and files'
    },
    {
        label: '_GUICtrlComboBox_AddString',
        documentation: 'Add a string'
    },
    {
        label: '_GUICtrlComboBox_AutoComplete',
        documentation: 'AutoComplete a ComboBox edit control'
    },
    {
        label: '_GUICtrlComboBox_BeginUpdate',
        documentation: 'Prevents updating of the control until the EndUpdate function is called'
    },
    {
        label: '_GUICtrlComboBox_Create',
        documentation: 'Create a ComboBox control'
    },
    {
        label: '_GUICtrlComboBox_DeleteString',
        documentation: 'Delete a string'
    },
    {
        label: '_GUICtrlComboBox_Destroy',
        documentation: 'Delete the control'
    },
    {
        label: '_GUICtrlComboBox_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the BeginUpdate function'
    },
    {
        label: '_GUICtrlComboBox_FindString',
        documentation: 'Search for a string'
    },
    {
        label: '_GUICtrlComboBox_FindStringExact',
        documentation: 'Search for a string'
    },
    {
        label: '_GUICtrlComboBox_GetComboBoxInfo',
        documentation: 'Gets information about the specified ComboBox'
    },
    {
        label: '_GUICtrlComboBox_GetCount',
        documentation: 'Retrieve the number of items'
    },
    {
        label: '_GUICtrlComboBox_GetCueBanner',
        documentation: 'Gets the cue banner text displayed in the edit control of a combo box'
    },
    {
        label: '_GUICtrlComboBox_GetCurSel',
        documentation: 'Retrieve the index of the currently selected item'
    },
    {
        label: '_GUICtrlComboBox_GetDroppedControlRect',
        documentation: 'Retrieve the screen coordinates of a combo box in its dropped-down state'
    },
    {
        label: '_GUICtrlComboBox_GetDroppedControlRectEx',
        documentation: 'Retrieve the screen coordinates of a combo box in its dropped-down state'
    },
    {
        label: '_GUICtrlComboBox_GetDroppedState',
        documentation: 'Determines whether the ListBox of a ComboBox is dropped down'
    },
    {
        label: '_GUICtrlComboBox_GetDroppedWidth',
        documentation: 'Retrieve the minimum allowable width, of the ListBox of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_GetEditSel',
        documentation: 'Gets the starting and ending character positions of the current selection in the edit control of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_GetEditText',
        documentation: 'Get the text from the edit control of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_GetExtendedUI',
        documentation: 'Determines whether a ComboBox has the default user interface or the extended user interface'
    },
    {
        label: '_GUICtrlComboBox_GetHorizontalExtent',
        documentation: 'Gets the width, in pixels, that the ListBox of a ComboBox control can be scrolled horizontally'
    },
    {
        label: '_GUICtrlComboBox_GetItemHeight',
        documentation: 'Determines the height of list items or the selection field in a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_GetLBText',
        documentation: 'Retrieve a string from the list of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_GetLBTextLen',
        documentation: 'Gets the length, in characters, of a string in the list of a combo box'
    },
    {
        label: '_GUICtrlComboBox_GetList',
        documentation: 'Retrieves all items from the list portion of a ComboBox control'
    },
    {
        label: '_GUICtrlComboBox_GetListArray',
        documentation: 'Retrieves all items from the list portion of a ComboBox control'
    },
    {
        label: '_GUICtrlComboBox_GetLocale',
        documentation: 'Retrieves the current locale'
    },
    {
        label: '_GUICtrlComboBox_GetLocaleCountry',
        documentation: 'Retrieves the current country code'
    },
    {
        label: '_GUICtrlComboBox_GetLocaleLang',
        documentation: 'Retrieves the current language identifier'
    },
    {
        label: '_GUICtrlComboBox_GetLocalePrimLang',
        documentation: 'Extract primary language id from a language id'
    },
    {
        label: '_GUICtrlComboBox_GetLocaleSubLang',
        documentation: 'Extract sublanguage id from a language id'
    },
    {
        label: '_GUICtrlComboBox_GetMinVisible',
        documentation: 'Retrieve the minimum number of visible items in the drop-down list of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_GetTopIndex',
        documentation: 'Retrieve the 0-based index of the first visible item in the ListBox portion of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_InitStorage',
        documentation: 'Allocates memory for storing ListBox items'
    },
    {
        label: '_GUICtrlComboBox_InsertString',
        documentation: 'Insert a string'
    },
    {
        label: '_GUICtrlComboBox_LimitText',
        documentation: 'Limits the length of the text the user may type into the edit control of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_ReplaceEditSel',
        documentation: 'Replace text selected in edit box'
    },
    {
        label: '_GUICtrlComboBox_ResetContent',
        documentation: 'Remove all items from the ListBox and edit control of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_SelectString',
        documentation: 'Searches the ListBox of a ComboBox for an item that begins with the characters in a specified string'
    },
    {
        label: '_GUICtrlComboBox_SetCueBanner',
        documentation: 'Sets the cue banner text that is displayed for the edit control of a combo box'
    },
    {
        label: '_GUICtrlComboBox_SetCurSel',
        documentation: 'Select a string in the list of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_SetDroppedWidth',
        documentation: 'Set the maximum allowable width, in pixels, of the ListBox of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_SetEditSel',
        documentation: 'Select characters in the edit control of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_SetEditText',
        documentation: 'Set the text of the edit control of the ComboBox'
    },
    {
        label: '_GUICtrlComboBox_SetExtendedUI',
        documentation: 'Select either the default user interface or the extended user interface'
    },
    {
        label: '_GUICtrlComboBox_SetHorizontalExtent',
        documentation: 'Set the width, in pixels, by which a list box can be scrolled horizontally'
    },
    {
        label: '_GUICtrlComboBox_SetItemHeight',
        documentation: 'Set the height of list items or the selection field in a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_SetMinVisible',
        documentation: 'Set the minimum number of visible items in the drop-down list of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_SetTopIndex',
        documentation: 'Ensure that a particular item is visible in the ListBox of a ComboBox'
    },
    {
        label: '_GUICtrlComboBox_ShowDropDown',
        documentation: 'Show or hide the ListBox of a ComboBox'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiComboBox UDF - #include <GuiComboBox.au3>'
}

module.exports = items