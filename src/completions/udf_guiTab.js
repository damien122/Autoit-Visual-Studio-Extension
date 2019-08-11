'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlTab_ActivateTab',
        documentation: 'Activates a tab by its index'
    },
    {
        label: '_GUICtrlTab_ClickTab',
        documentation: 'Clicks a tab'
    },
    {
        label: '_GUICtrlTab_Create',
        documentation: 'Create a TabControl control'
    },
    {
        label: '_GUICtrlTab_DeleteAllItems',
        documentation: 'Deletes all tabs'
    },
    {
        label: '_GUICtrlTab_DeleteItem',
        documentation: 'Deletes a tab'
    },
    {
        label: '_GUICtrlTab_DeselectAll',
        documentation: 'Resets tabs, clearing any that were set to the pressed state'
    },
    {
        label: '_GUICtrlTab_Destroy',
        documentation: 'Delete the control'
    },
    {
        label: '_GUICtrlTab_FindTab',
        documentation: 'Searches for a tab with the specific text'
    },
    {
        label: '_GUICtrlTab_GetCurFocus',
        documentation: 'Returns the index of the item that has the focus in a tab control'
    },
    {
        label: '_GUICtrlTab_GetCurSel',
        documentation: 'Determines the currently selected tab'
    },
    {
        label: '_GUICtrlTab_GetDisplayRect',
        documentation: 'Retrieves the display rectangle of the client area'
    },
    {
        label: '_GUICtrlTab_GetDisplayRectEx',
        documentation: 'Retrieves the display rectangle of the client area'
    },
    {
        label: '_GUICtrlTab_GetExtendedStyle',
        documentation: 'Retrieves the extended styles that are currently in use'
    },
    {
        label: '_GUICtrlTab_GetImageList',
        documentation: 'Retrieves the tab control image list'
    },
    {
        label: '_GUICtrlTab_GetItem',
        documentation: 'Retrieves information about a tab'
    },
    {
        label: '_GUICtrlTab_GetItemCount',
        documentation: 'Retrieves the number of tabs'
    },
    {
        label: '_GUICtrlTab_GetItemImage',
        documentation: 'Retrieves the image index for a tab'
    },
    {
        label: '_GUICtrlTab_GetItemParam',
        documentation: 'Retrieves the param data for a tab'
    },
    {
        label: '_GUICtrlTab_GetItemRect',
        documentation: 'Retrieves the bounding rectangle for a tab'
    },
    {
        label: '_GUICtrlTab_GetItemRectEx',
        documentation: 'Retrieves the bounding rectangle for a tab'
    },
    {
        label: '_GUICtrlTab_GetItemState',
        documentation: 'Retrieves the state of a tab'
    },
    {
        label: '_GUICtrlTab_GetItemText',
        documentation: 'Retrieves the text of a tab'
    },
    {
        label: '_GUICtrlTab_GetRowCount',
        documentation: 'Retrieves the current number of rows of tabs'
    },
    {
        label: '_GUICtrlTab_GetToolTips',
        documentation: 'Retrieves the handle to the ToolTip control associated with the control'
    },
    {
        label: '_GUICtrlTab_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control'
    },
    {
        label: '_GUICtrlTab_HighlightItem',
        documentation: 'Sets the highlight state of a tab item'
    },
    {
        label: '_GUICtrlTab_HitTest',
        documentation: 'Determines where a point lies control'
    },
    {
        label: '_GUICtrlTab_InsertItem',
        documentation: 'Inserts a new tab'
    },
    {
        label: '_GUICtrlTab_RemoveImage',
        documentation: 'Removes an image from the control\'s image list'
    },
    {
        label: '_GUICtrlTab_SetCurFocus',
        documentation: 'Sets the focus to a specified tab'
    },
    {
        label: '_GUICtrlTab_SetCurSel',
        documentation: 'Selects a tab'
    },
    {
        label: '_GUICtrlTab_SetExtendedStyle',
        documentation: 'Sets the extended styles that are currently in use'
    },
    {
        label: '_GUICtrlTab_SetImageList',
        documentation: 'Sets the image list associated with a tab control'
    },
    {
        label: '_GUICtrlTab_SetItem',
        documentation: 'Sets information about a tab'
    },
    {
        label: '_GUICtrlTab_SetItemImage',
        documentation: 'Sets the image of a tab'
    },
    {
        label: '_GUICtrlTab_SetItemParam',
        documentation: 'Sets the param data of a tab'
    },
    {
        label: '_GUICtrlTab_SetItemSize',
        documentation: 'Sets the width and height of tabs in a fixed width or owner drawn control'
    },
    {
        label: '_GUICtrlTab_SetItemState',
        documentation: 'Sets the state of a tab'
    },
    {
        label: '_GUICtrlTab_SetItemText',
        documentation: 'Sets the text of a tab'
    },
    {
        label: '_GUICtrlTab_SetMinTabWidth',
        documentation: 'Sets the minimum width of items in a tab control'
    },
    {
        label: '_GUICtrlTab_SetPadding',
        documentation: 'Sets the amount of space around each tab\'s icon and label'
    },
    {
        label: '_GUICtrlTab_SetToolTips',
        documentation: 'Sets the handle to the ToolTip control associated with the control'
    },
    {
        label: '_GUICtrlTab_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag for the control '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiTab UDF - #include <GuiTab.au3>'
}

module.exports = items