'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlComboBoxEx_AddDir',
        documentation: 'Adds the names of directories and files',
        insertText: '_GUICtrlComboBoxEx_AddDir(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_AddString',
        documentation: 'Add a string',
        insertText: '_GUICtrlComboBoxEx_AddString(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_BeginUpdate',
        documentation: 'Prevents updating of the control until the EndUpdate function is called',
        insertText: '_GUICtrlComboBoxEx_BeginUpdate(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_Create',
        documentation: 'Create a ComboBoxEx control',
        insertText: '_GUICtrlComboBoxEx_Create(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_CreateSolidBitMap',
        documentation: 'Creates a solid color bitmap',
        insertText: '_GUICtrlComboBoxEx_CreateSolidBitMap(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_DeleteString',
        documentation: 'Removes an item from a ComboBoxEx control',
        insertText: '_GUICtrlComboBoxEx_DeleteString(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlComboBoxEx_Destroy(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the BeginUpdate function',
        insertText: '_GUICtrlComboBoxEx_EndUpdate(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_FindStringExact',
        documentation: 'Search for a string',
        insertText: '_GUICtrlComboBoxEx_FindStringExact(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetComboBoxInfo',
        documentation: 'Gets information about the specified ComboBox',
        insertText: '_GUICtrlComboBoxEx_GetComboBoxInfo(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetComboControl',
        documentation: 'Gets the handle to the child combo box control',
        insertText: '_GUICtrlComboBoxEx_GetComboControl(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetCount',
        documentation: 'Retrieve the number of items',
        insertText: '_GUICtrlComboBoxEx_GetCount(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetCurSel',
        documentation: 'Retrieve the index of the currently selected item',
        insertText: '_GUICtrlComboBoxEx_GetCurSel(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetDroppedControlRect',
        documentation: 'Retrieve the screen coordinates of a combo box in its dropped-down state',
        insertText: '_GUICtrlComboBoxEx_GetDroppedControlRect(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetDroppedControlRectEx',
        documentation: 'Retrieve the screen coordinates of a combo box in its dropped-down state',
        insertText: '_GUICtrlComboBoxEx_GetDroppedControlRectEx(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetDroppedState',
        documentation: 'Determines whether the ListBox of a ComboBox is dropped down',
        insertText: '_GUICtrlComboBoxEx_GetDroppedState(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetDroppedWidth',
        documentation: 'Retrieve the minimum allowable width, of the ListBox of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_GetDroppedWidth(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetEditControl',
        documentation: 'Gets the handle to the edit control portion of a ComboBoxEx control',
        insertText: '_GUICtrlComboBoxEx_GetEditControl(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetEditSel',
        documentation: 'Gets the starting and ending character positions of the current selection in the edit control of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_GetEditSel(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetEditText',
        documentation: 'Get the text from the edit control of a ComboBoxEx',
        insertText: '_GUICtrlComboBoxEx_GetEditText(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetExtendedStyle',
        documentation: 'Gets the extended styles that are in use for a ComboBoxEx control',
        insertText: '_GUICtrlComboBoxEx_GetExtendedStyle(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetExtendedUI',
        documentation: 'Determines whether a ComboBox has the default user interface or the extended user interface',
        insertText: '_GUICtrlComboBoxEx_GetExtendedUI(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetImageList',
        documentation: 'Retrieves the handle to an image list assigned to a ComboBoxEx control',
        insertText: '_GUICtrlComboBoxEx_GetImageList(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItem',
        documentation: 'Retrieves an item\'s attributes',
        insertText: '_GUICtrlComboBoxEx_GetItem(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemEx',
        documentation: 'Retrieves some or all of an item\'s attributes',
        insertText: '_GUICtrlComboBoxEx_GetItemEx(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemHeight',
        documentation: 'Determines the height of list items or the selection field in a ComboBox',
        insertText: '_GUICtrlComboBoxEx_GetItemHeight(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemImage',
        documentation: 'Retrieves the index of the item\'s icon',
        insertText: '_GUICtrlComboBoxEx_GetItemImage(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemIndent',
        documentation: 'Retrieves the number of image widths the item is indented',
        insertText: '_GUICtrlComboBoxEx_GetItemIndent(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemOverlayImage',
        documentation: 'Retrieves the index of the item\'s overlay image icon',
        insertText: '_GUICtrlComboBoxEx_GetItemOverlayImage(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemParam',
        documentation: 'Retrieves the application specific value of the item',
        insertText: '_GUICtrlComboBoxEx_GetItemParam(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemSelectedImage',
        documentation: 'Retrieves the index of the item\'s selected image icon',
        insertText: '_GUICtrlComboBoxEx_GetItemSelectedImage(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemText',
        documentation: 'Retrieve a string from the list of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_GetItemText(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetItemTextLen',
        documentation: 'Gets the length, in characters, of a string in the list of a combo box',
        insertText: '_GUICtrlComboBoxEx_GetItemTextLen(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetList',
        documentation: 'Retrieves all items from the list portion of a ComboBox control',
        insertText: '_GUICtrlComboBoxEx_GetList(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetListArray',
        documentation: 'Retrieves all items from the list portion of a ComboBox control',
        insertText: '_GUICtrlComboBoxEx_GetListArray(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetLocale',
        documentation: 'Retrieves the current locale',
        insertText: '_GUICtrlComboBoxEx_GetLocale(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetLocaleCountry',
        documentation: 'Retrieves the current country code',
        insertText: '_GUICtrlComboBoxEx_GetLocaleCountry(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetLocaleLang',
        documentation: 'Retrieves the current language identifier',
        insertText: '_GUICtrlComboBoxEx_GetLocaleLang(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetLocalePrimLang',
        documentation: 'Extract primary language id from a language id',
        insertText: '_GUICtrlComboBoxEx_GetLocalePrimLang(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetLocaleSubLang',
        documentation: 'Extract sublanguage id from a language id',
        insertText: '_GUICtrlComboBoxEx_GetLocaleSubLang(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetMinVisible',
        documentation: 'Retrieve the minimum number of visible items in the drop-down list of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_GetMinVisible(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetTopIndex',
        documentation: 'Retrieve the 0-based index of the first visible item in the ListBox portion of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_GetTopIndex(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_GetUnicode',
        documentation: 'Retrieves if control is using Unicode',
        insertText: '_GUICtrlComboBoxEx_GetUnicode(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_InitStorage',
        documentation: 'Allocates memory for storing ListBox items',
        insertText: '_GUICtrlComboBoxEx_InitStorage(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_InsertString',
        documentation: 'Inserts a new item in the control',
        insertText: '_GUICtrlComboBoxEx_InsertString(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_LimitText',
        documentation: 'Limits the length of the text the user may type into the edit control of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_LimitText(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_ReplaceEditSel',
        documentation: 'Replace text selected in edit box',
        insertText: '_GUICtrlComboBoxEx_ReplaceEditSel(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_ResetContent',
        documentation: 'Removes all items',
        insertText: '_GUICtrlComboBoxEx_ResetContent(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetCurSel',
        documentation: 'Select a string in the list of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_SetCurSel(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetDroppedWidth',
        documentation: 'Set the maximum allowable width, in pixels, of the ListBox of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_SetDroppedWidth(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetEditSel',
        documentation: 'Select characters in the edit control of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_SetEditSel(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetEditText',
        documentation: 'Set the text of the edit control of the ComboBox',
        insertText: '_GUICtrlComboBoxEx_SetEditText(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetExtendedStyle',
        documentation: 'Sets extended styles within a ComboBoxEx control',
        insertText: '_GUICtrlComboBoxEx_SetExtendedStyle(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetExtendedUI',
        documentation: 'Select either the default user interface or the extended user interface',
        insertText: '_GUICtrlComboBoxEx_SetExtendedUI(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetImageList',
        documentation: 'Sets an image list for a ComboBoxEx control',
        insertText: '_GUICtrlComboBoxEx_SetImageList(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItem',
        documentation: 'Sets some or all of a item\'s attributes',
        insertText: '_GUICtrlComboBoxEx_SetItem(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemEx',
        documentation: 'Sets some or all of a item\'s attributes',
        insertText: '_GUICtrlComboBoxEx_SetItemEx(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemHeight',
        documentation: 'Set the height of list items or the selection field in a ComboBox',
        insertText: '_GUICtrlComboBoxEx_SetItemHeight(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemImage',
        documentation: 'Sets the index of the item\'s icon in the control\'s image list',
        insertText: '_GUICtrlComboBoxEx_SetItemImage(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemIndent',
        documentation: 'Sets the number of image widths to indent the item',
        insertText: '_GUICtrlComboBoxEx_SetItemIndent(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemOverlayImage',
        documentation: 'Sets the index of the item\'s overlay icon in the control\'s image list',
        insertText: '_GUICtrlComboBoxEx_SetItemOverlayImage(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemParam',
        documentation: 'Sets the value specific to the item',
        insertText: '_GUICtrlComboBoxEx_SetItemParam(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetItemSelectedImage',
        documentation: 'Sets the index of the item\'s overlay icon in the control\'s image list',
        insertText: '_GUICtrlComboBoxEx_SetItemSelectedImage(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetMinVisible',
        documentation: 'Set the minimum number of visible items in the drop-down list of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_SetMinVisible(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetTopIndex',
        documentation: 'Ensure that a particular item is visible in the ListBox of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_SetTopIndex(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_SetUnicode',
        documentation: 'Sets if control is using Unicode',
        insertText: '_GUICtrlComboBoxEx_SetUnicode(${})'
    },
    {
        label: '_GUICtrlComboBoxEx_ShowDropDown',
        documentation: 'Show or hide the ListBox of a ComboBox',
        insertText: '_GUICtrlComboBoxEx_ShowDropDown(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiComboBoxEx UDF - #include <GuiComboBoxEx.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items