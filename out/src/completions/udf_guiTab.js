'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlTab_ActivateTab',
        documentation: 'Activates a tab by its index',
        insertText: '_GUICtrlTab_ActivateTab(${})'
    },
    {
        label: '_GUICtrlTab_ClickTab',
        documentation: 'Clicks a tab',
        insertText: '_GUICtrlTab_ClickTab(${})'
    },
    {
        label: '_GUICtrlTab_Create',
        documentation: 'Create a TabControl control',
        insertText: '_GUICtrlTab_Create(${})'
    },
    {
        label: '_GUICtrlTab_DeleteAllItems',
        documentation: 'Deletes all tabs',
        insertText: '_GUICtrlTab_DeleteAllItems(${})'
    },
    {
        label: '_GUICtrlTab_DeleteItem',
        documentation: 'Deletes a tab',
        insertText: '_GUICtrlTab_DeleteItem(${})'
    },
    {
        label: '_GUICtrlTab_DeselectAll',
        documentation: 'Resets tabs, clearing any that were set to the pressed state',
        insertText: '_GUICtrlTab_DeselectAll(${})'
    },
    {
        label: '_GUICtrlTab_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlTab_Destroy(${})'
    },
    {
        label: '_GUICtrlTab_FindTab',
        documentation: 'Searches for a tab with the specific text',
        insertText: '_GUICtrlTab_FindTab(${})'
    },
    {
        label: '_GUICtrlTab_GetCurFocus',
        documentation: 'Returns the index of the item that has the focus in a tab control',
        insertText: '_GUICtrlTab_GetCurFocus(${})'
    },
    {
        label: '_GUICtrlTab_GetCurSel',
        documentation: 'Determines the currently selected tab',
        insertText: '_GUICtrlTab_GetCurSel(${})'
    },
    {
        label: '_GUICtrlTab_GetDisplayRect',
        documentation: 'Retrieves the display rectangle of the client area',
        insertText: '_GUICtrlTab_GetDisplayRect(${})'
    },
    {
        label: '_GUICtrlTab_GetDisplayRectEx',
        documentation: 'Retrieves the display rectangle of the client area',
        insertText: '_GUICtrlTab_GetDisplayRectEx(${})'
    },
    {
        label: '_GUICtrlTab_GetExtendedStyle',
        documentation: 'Retrieves the extended styles that are currently in use',
        insertText: '_GUICtrlTab_GetExtendedStyle(${})'
    },
    {
        label: '_GUICtrlTab_GetImageList',
        documentation: 'Retrieves the tab control image list',
        insertText: '_GUICtrlTab_GetImageList(${})'
    },
    {
        label: '_GUICtrlTab_GetItem',
        documentation: 'Retrieves information about a tab',
        insertText: '_GUICtrlTab_GetItem(${})'
    },
    {
        label: '_GUICtrlTab_GetItemCount',
        documentation: 'Retrieves the number of tabs',
        insertText: '_GUICtrlTab_GetItemCount(${})'
    },
    {
        label: '_GUICtrlTab_GetItemImage',
        documentation: 'Retrieves the image index for a tab',
        insertText: '_GUICtrlTab_GetItemImage(${})'
    },
    {
        label: '_GUICtrlTab_GetItemParam',
        documentation: 'Retrieves the param data for a tab',
        insertText: '_GUICtrlTab_GetItemParam(${})'
    },
    {
        label: '_GUICtrlTab_GetItemRect',
        documentation: 'Retrieves the bounding rectangle for a tab',
        insertText: '_GUICtrlTab_GetItemRect(${})'
    },
    {
        label: '_GUICtrlTab_GetItemRectEx',
        documentation: 'Retrieves the bounding rectangle for a tab',
        insertText: '_GUICtrlTab_GetItemRectEx(${})'
    },
    {
        label: '_GUICtrlTab_GetItemState',
        documentation: 'Retrieves the state of a tab',
        insertText: '_GUICtrlTab_GetItemState(${})'
    },
    {
        label: '_GUICtrlTab_GetItemText',
        documentation: 'Retrieves the text of a tab',
        insertText: '_GUICtrlTab_GetItemText(${})'
    },
    {
        label: '_GUICtrlTab_GetRowCount',
        documentation: 'Retrieves the current number of rows of tabs',
        insertText: '_GUICtrlTab_GetRowCount(${})'
    },
    {
        label: '_GUICtrlTab_GetToolTips',
        documentation: 'Retrieves the handle to the ToolTip control associated with the control',
        insertText: '_GUICtrlTab_GetToolTips(${})'
    },
    {
        label: '_GUICtrlTab_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control',
        insertText: '_GUICtrlTab_GetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlTab_HighlightItem',
        documentation: 'Sets the highlight state of a tab item',
        insertText: '_GUICtrlTab_HighlightItem(${})'
    },
    {
        label: '_GUICtrlTab_HitTest',
        documentation: 'Determines where a point lies control',
        insertText: '_GUICtrlTab_HitTest(${})'
    },
    {
        label: '_GUICtrlTab_InsertItem',
        documentation: 'Inserts a new tab',
        insertText: '_GUICtrlTab_InsertItem(${})'
    },
    {
        label: '_GUICtrlTab_RemoveImage',
        documentation: 'Removes an image from the control\'s image list',
        insertText: '_GUICtrlTab_RemoveImage(${})'
    },
    {
        label: '_GUICtrlTab_SetCurFocus',
        documentation: 'Sets the focus to a specified tab',
        insertText: '_GUICtrlTab_SetCurFocus(${})'
    },
    {
        label: '_GUICtrlTab_SetCurSel',
        documentation: 'Selects a tab',
        insertText: '_GUICtrlTab_SetCurSel(${})'
    },
    {
        label: '_GUICtrlTab_SetExtendedStyle',
        documentation: 'Sets the extended styles that are currently in use',
        insertText: '_GUICtrlTab_SetExtendedStyle(${})'
    },
    {
        label: '_GUICtrlTab_SetImageList',
        documentation: 'Sets the image list associated with a tab control',
        insertText: '_GUICtrlTab_SetImageList(${})'
    },
    {
        label: '_GUICtrlTab_SetItem',
        documentation: 'Sets information about a tab',
        insertText: '_GUICtrlTab_SetItem(${})'
    },
    {
        label: '_GUICtrlTab_SetItemImage',
        documentation: 'Sets the image of a tab',
        insertText: '_GUICtrlTab_SetItemImage(${})'
    },
    {
        label: '_GUICtrlTab_SetItemParam',
        documentation: 'Sets the param data of a tab',
        insertText: '_GUICtrlTab_SetItemParam(${})'
    },
    {
        label: '_GUICtrlTab_SetItemSize',
        documentation: 'Sets the width and height of tabs in a fixed width or owner drawn control',
        insertText: '_GUICtrlTab_SetItemSize(${})'
    },
    {
        label: '_GUICtrlTab_SetItemState',
        documentation: 'Sets the state of a tab',
        insertText: '_GUICtrlTab_SetItemState(${})'
    },
    {
        label: '_GUICtrlTab_SetItemText',
        documentation: 'Sets the text of a tab',
        insertText: '_GUICtrlTab_SetItemText(${})'
    },
    {
        label: '_GUICtrlTab_SetMinTabWidth',
        documentation: 'Sets the minimum width of items in a tab control',
        insertText: '_GUICtrlTab_SetMinTabWidth(${})'
    },
    {
        label: '_GUICtrlTab_SetPadding',
        documentation: 'Sets the amount of space around each tab\'s icon and label',
        insertText: '_GUICtrlTab_SetPadding(${})'
    },
    {
        label: '_GUICtrlTab_SetToolTips',
        documentation: 'Sets the handle to the ToolTip control associated with the control',
        insertText: '_GUICtrlTab_SetToolTips(${})'
    },
    {
        label: '_GUICtrlTab_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag for the control ',
        insertText: '_GUICtrlTab_SetUnicodeFormat(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiTab UDF - #include <GuiTab.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items