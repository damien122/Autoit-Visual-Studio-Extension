'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlComboBoxEx_AddDir',
        documentation: 'Adds the names of directories and files'
    },
    {
        label: '_GUICtrlComboBoxEx_AddString',
        documentation: 'Add a string'
    },
    {
        label: '_GUICtrlComboBoxEx_BeginUpdate',
        documentation: 'Prevents updating of the control until the EndUpdate function is called'
    },
    {
        label: '_GUICtrlComboBoxEx_Create',
        documentation: 'Create a ComboBoxEx control'
    },
    {
        label: '_GUICtrlComboBoxEx_CreateSolidBitMap',
        documentation: 'Creates a solid color bitmap'
    },
    {
        label: '_GUICtrlComboBoxEx_DeleteString',
        documentation: 'Removes an item from a ComboBoxEx control'
    },
    {
        label: '_GUICtrlComboBoxEx_Destroy',
        documentation: 'Delete the control'
    },
    {
        label: '_GUICtrlComboBoxEx_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the BeginUpdate function'
    },
    {
        label: '_GUICtrlComboBoxEx_FindStringExact',
        documentation: 'Search for a string'
    },
    {
        label: '_GUICtrlComboBoxEx_GetComboBoxInfo',
        documentation: 'Gets information about the specified ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_GetComboControl',
        documentation: 'Gets the handle to the child combo box control'
    },
    {
        label: '_GUICtrlComboBoxEx_GetCount',
        documentation: 'Retrieve the number of items'
    },
    {
        label: '_GUICtrlComboBoxEx_GetCurSel',
        documentation: 'Retrieve the index of the currently selected item'
    },
    {
        label: '_GUICtrlComboBoxEx_GetDroppedControlRect',
        documentation: 'Retrieve the screen coordinates of a combo box in its dropped-down state'
    },
    {
        label: '_GUICtrlComboBoxEx_GetDroppedControlRectEx',
        documentation: 'Retrieve the screen coordinates of a combo box in its dropped-down state'
    },
    {
        label: '_GUICtrlComboBoxEx_GetDroppedState',
        documentation: 'Determines whether the ListBox of a ComboBox is dropped down'
    },
    {
        label: '_GUICtrlComboBoxEx_GetDroppedWidth',
        documentation: 'Retrieve the minimum allowable width, of the ListBox of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_GetEditControl',
        documentation: 'Gets the handle to the edit control portion of a ComboBoxEx control'
    },
    {
        label: '_GUICtrlComboBoxEx_GetEditSel',
        documentation: 'Gets the starting and ending character positions of the current selection in the edit control of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_GetEditText',
        documentation: 'Get the text from the edit control of a ComboBoxEx'
    },
    {
        label: '_GUICtrlComboBoxEx_GetExtendedStyle',
        documentation: 'Gets the extended styles that are in use for a ComboBoxEx control'
    },
    {
        label: '_GUICtrlComboBoxEx_GetExtendedUI',
        documentation: 'Determines whether a ComboBox has the default user interface or the extended user interface'
    },
    {
        label: '_GUICtrlComboBoxEx_GetImageList',
        documentation: 'Retrieves the handle to an image list assigned to a ComboBoxEx control'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItem',
        documentation: 'Retrieves an item\'s attributes'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemEx',
        documentation: 'Retrieves some or all of an item\'s attributes'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemHeight',
        documentation: 'Determines the height of list items or the selection field in a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemImage',
        documentation: 'Retrieves the index of the item\'s icon'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemIndent',
        documentation: 'Retrieves the number of image widths the item is indented'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemOverlayImage',
        documentation: 'Retrieves the index of the item\'s overlay image icon'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemParam',
        documentation: 'Retrieves the application specific value of the item'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemSelectedImage',
        documentation: 'Retrieves the index of the item\'s selected image icon'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemText',
        documentation: 'Retrieve a string from the list of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemTextLen',
        documentation: 'Gets the length, in characters, of a string in the list of a combo box'
    },
    {
        label: '_GUICtrlComboBoxEx_GetList',
        documentation: 'Retrieves all items from the list portion of a ComboBox control'
    },
    {
        label: '_GUICtrlComboBoxEx_GetListArray',
        documentation: 'Retrieves all items from the list portion of a ComboBox control'
    },
    {
        label: '_GUICtrlComboBoxEx_GetLocale',
        documentation: 'Retrieves the current locale'
    },
    {
        label: '_GUICtrlComboBoxEx_GetLocaleCountry',
        documentation: 'Retrieves the current country code'
    },
    {
        label: '_GUICtrlComboBoxEx_GetLocaleLang',
        documentation: 'Retrieves the current language identifier'
    },
    {
        label: '_GUICtrlComboBoxEx_GetLocalePrimLang',
        documentation: 'Extract primary language id from a language id'
    },
    {
        label: '_GUICtrlComboBoxEx_GetLocaleSubLang',
        documentation: 'Extract sublanguage id from a language id'
    },
    {
        label: '_GUICtrlComboBoxEx_GetMinVisible',
        documentation: 'Retrieve the minimum number of visible items in the drop-down list of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_GetTopIndex',
        documentation: 'Retrieve the 0-based index of the first visible item in the ListBox portion of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_GetUnicode',
        documentation: 'Retrieves if control is using Unicode'
    },
    {
        label: '_GUICtrlComboBoxEx_InitStorage',
        documentation: 'Allocates memory for storing ListBox items'
    },
    {
        label: '_GUICtrlComboBoxEx_InsertString',
        documentation: 'Inserts a new item in the control'
    },
    {
        label: '_GUICtrlComboBoxEx_LimitText',
        documentation: 'Limits the length of the text the user may type into the edit control of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_ReplaceEditSel',
        documentation: 'Replace text selected in edit box'
    },
    {
        label: '_GUICtrlComboBoxEx_ResetContent',
        documentation: 'Removes all items'
    },
    {
        label: '_GUICtrlComboBoxEx_SetCurSel',
        documentation: 'Select a string in the list of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_SetDroppedWidth',
        documentation: 'Set the maximum allowable width, in pixels, of the ListBox of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_SetEditSel',
        documentation: 'Select characters in the edit control of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_SetEditText',
        documentation: 'Set the text of the edit control of the ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_SetExtendedStyle',
        documentation: 'Sets extended styles within a ComboBoxEx control'
    },
    {
        label: '_GUICtrlComboBoxEx_SetExtendedUI',
        documentation: 'Select either the default user interface or the extended user interface'
    },
    {
        label: '_GUICtrlComboBoxEx_SetImageList',
        documentation: 'Sets an image list for a ComboBoxEx control'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItem',
        documentation: 'Sets some or all of a item\'s attributes'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemEx',
        documentation: 'Sets some or all of a item\'s attributes'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemHeight',
        documentation: 'Set the height of list items or the selection field in a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemImage',
        documentation: 'Sets the index of the item\'s icon in the control\'s image list'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemIndent',
        documentation: 'Sets the number of image widths to indent the item'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemOverlayImage',
        documentation: 'Sets the index of the item\'s overlay icon in the control\'s image list'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemParam',
        documentation: 'Sets the value specific to the item'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemSelectedImage',
        documentation: 'Sets the index of the item\'s overlay icon in the control\'s image list'
    },
    {
        label: '_GUICtrlComboBoxEx_SetMinVisible',
        documentation: 'Set the minimum number of visible items in the drop-down list of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_SetTopIndex',
        documentation: 'Ensure that a particular item is visible in the ListBox of a ComboBox'
    },
    {
        label: '_GUICtrlComboBoxEx_SetUnicode',
        documentation: 'Sets if control is using Unicode'
    },
    {
        label: '_GUICtrlComboBoxEx_ShowDropDown',
        documentation: 'Show or hide the ListBox of a ComboBox'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiComboBoxEx UDF - #include <GuiComboBoxEx.au3>'
}

module.exports = items