'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlHeader_AddItem',
        documentation: 'Adds a new header item'
    },
    {
        label: '_GUICtrlHeader_ClearFilter',
        documentation: 'Clears the filter'
    },
    {
        label: '_GUICtrlHeader_ClearFilterAll',
        documentation: 'Clears all of the filters'
    },
    {
        label: '_GUICtrlHeader_Create',
        documentation: 'Creates a Header control'
    },
    {
        label: '_GUICtrlHeader_CreateDragImage',
        documentation: 'Creates a semi-transparent version of an item\'s image for use as a dragging image'
    },
    {
        label: '_GUICtrlHeader_DeleteItem',
        documentation: 'Deletes a header item'
    },
    {
        label: '_GUICtrlHeader_Destroy',
        documentation: 'Delete the Header control'
    },
    {
        label: '_GUICtrlHeader_EditFilter',
        documentation: 'Starts editing the specified filter'
    },
    {
        label: '_GUICtrlHeader_GetBitmapMargin',
        documentation: 'Retrieves the width of the bitmap margin'
    },
    {
        label: '_GUICtrlHeader_GetImageList',
        documentation: 'Retrieves the handle to the image list'
    },
    {
        label: '_GUICtrlHeader_GetItem',
        documentation: 'Retrieves information about an item'
    },
    {
        label: '_GUICtrlHeader_GetItemAlign',
        documentation: 'Retrieves the item text alignment'
    },
    {
        label: '_GUICtrlHeader_GetItemBitmap',
        documentation: 'Retrieves the item bitmap handle'
    },
    {
        label: '_GUICtrlHeader_GetItemCount',
        documentation: 'Retrieves a count of the items'
    },
    {
        label: '_GUICtrlHeader_GetItemDisplay',
        documentation: 'Returns the item display information'
    },
    {
        label: '_GUICtrlHeader_GetItemFlags',
        documentation: 'Returns the item flag information'
    },
    {
        label: '_GUICtrlHeader_GetItemFormat',
        documentation: 'Returns the format of the item'
    },
    {
        label: '_GUICtrlHeader_GetItemImage',
        documentation: 'Retrieves the index of an image within the image list'
    },
    {
        label: '_GUICtrlHeader_GetItemOrder',
        documentation: 'Retrieves the order in which the item appears'
    },
    {
        label: '_GUICtrlHeader_GetItemParam',
        documentation: 'Retrieves the param value of the item'
    },
    {
        label: '_GUICtrlHeader_GetItemRect',
        documentation: 'Retrieves the bounding rectangle for a given item'
    },
    {
        label: '_GUICtrlHeader_GetItemRectEx',
        documentation: 'Retrieves the bounding rectangle for a given item'
    },
    {
        label: '_GUICtrlHeader_GetItemText',
        documentation: 'Retrieves the item text'
    },
    {
        label: '_GUICtrlHeader_GetItemWidth',
        documentation: 'Retrieves the item\'s width'
    },
    {
        label: '_GUICtrlHeader_GetOrderArray',
        documentation: 'Retrieves the current left-to-right order of items in a header control'
    },
    {
        label: '_GUICtrlHeader_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control'
    },
    {
        label: '_GUICtrlHeader_HitTest',
        documentation: 'Tests a point to determine which item is at the specified point'
    },
    {
        label: '_GUICtrlHeader_InsertItem',
        documentation: 'Inserts a new header item'
    },
    {
        label: '_GUICtrlHeader_Layout',
        documentation: 'Retrieves the correct size and position of the control'
    },
    {
        label: '_GUICtrlHeader_OrderToIndex',
        documentation: 'Retrieves an index value for an item based on its order'
    },
    {
        label: '_GUICtrlHeader_SetBitmapMargin',
        documentation: 'Sets the width of the margin, specified in pixels, of a bitmap'
    },
    {
        label: '_GUICtrlHeader_SetFilterChangeTimeout',
        documentation: 'Sets the filter change timeout interval'
    },
    {
        label: '_GUICtrlHeader_SetHotDivider',
        documentation: 'Changes the hot divider color'
    },
    {
        label: '_GUICtrlHeader_SetImageList',
        documentation: 'Assigns an image list'
    },
    {
        label: '_GUICtrlHeader_SetItem',
        documentation: 'Sets information about an item'
    },
    {
        label: '_GUICtrlHeader_SetItemAlign',
        documentation: 'Sets the item text alignment'
    },
    {
        label: '_GUICtrlHeader_SetItemBitmap',
        documentation: 'Sets the item bitmap handle'
    },
    {
        label: '_GUICtrlHeader_SetItemDisplay',
        documentation: 'Returns the item display information'
    },
    {
        label: '_GUICtrlHeader_SetItemFlags',
        documentation: 'Returns the item flag information'
    },
    {
        label: '_GUICtrlHeader_SetItemFormat',
        documentation: 'Sets the format of the item'
    },
    {
        label: '_GUICtrlHeader_SetItemImage',
        documentation: 'Sets the index of an image within the image list'
    },
    {
        label: '_GUICtrlHeader_SetItemOrder',
        documentation: 'Sets the order in which the item appears'
    },
    {
        label: '_GUICtrlHeader_SetItemParam',
        documentation: 'Sets the param value of the item'
    },
    {
        label: '_GUICtrlHeader_SetItemText',
        documentation: 'Sets the item text'
    },
    {
        label: '_GUICtrlHeader_SetItemWidth',
        documentation: 'Sets the item\'s width'
    },
    {
        label: '_GUICtrlHeader_SetOrderArray',
        documentation: 'Sets the current left-to-right order of items'
    },
    {
        label: '_GUICtrlHeader_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag for the control'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiHeader UDF - #include <GuiHeader.au3>'
}

module.exports = items