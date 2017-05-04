'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlHeader_AddItem',
        documentation: 'Adds a new header item',
        insertText: '_GUICtrlHeader_AddItem(${})'
    },
    {
        label: '_GUICtrlHeader_ClearFilter',
        documentation: 'Clears the filter',
        insertText: '_GUICtrlHeader_ClearFilter(${})'
    },
    {
        label: '_GUICtrlHeader_ClearFilterAll',
        documentation: 'Clears all of the filters',
        insertText: '_GUICtrlHeader_ClearFilterAll(${})'
    },
    {
        label: '_GUICtrlHeader_Create',
        documentation: 'Creates a Header control',
        insertText: '_GUICtrlHeader_Create(${})'
    },
    {
        label: '_GUICtrlHeader_CreateDragImage',
        documentation: 'Creates a semi-transparent version of an item\'s image for use as a dragging image',
        insertText: '_GUICtrlHeader_CreateDragImage(${})'
    },
    {
        label: '_GUICtrlHeader_DeleteItem',
        documentation: 'Deletes a header item',
        insertText: '_GUICtrlHeader_DeleteItem(${})'
    },
    {
        label: '_GUICtrlHeader_Destroy',
        documentation: 'Delete the Header control',
        insertText: '_GUICtrlHeader_Destroy(${})'
    },
    {
        label: '_GUICtrlHeader_EditFilter',
        documentation: 'Starts editing the specified filter',
        insertText: '_GUICtrlHeader_EditFilter(${})'
    },
    {
        label: '_GUICtrlHeader_GetBitmapMargin',
        documentation: 'Retrieves the width of the bitmap margin',
        insertText: '_GUICtrlHeader_GetBitmapMargin(${})'
    },
    {
        label: '_GUICtrlHeader_GetImageList',
        documentation: 'Retrieves the handle to the image list',
        insertText: '_GUICtrlHeader_GetImageList(${})'
    },
    {
        label: '_GUICtrlHeader_GetItem',
        documentation: 'Retrieves information about an item',
        insertText: '_GUICtrlHeader_GetItem(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemAlign',
        documentation: 'Retrieves the item text alignment',
        insertText: '_GUICtrlHeader_GetItemAlign(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemBitmap',
        documentation: 'Retrieves the item bitmap handle',
        insertText: '_GUICtrlHeader_GetItemBitmap(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemCount',
        documentation: 'Retrieves a count of the items',
        insertText: '_GUICtrlHeader_GetItemCount(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemDisplay',
        documentation: 'Returns the item display information',
        insertText: '_GUICtrlHeader_GetItemDisplay(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemFlags',
        documentation: 'Returns the item flag information',
        insertText: '_GUICtrlHeader_GetItemFlags(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemFormat',
        documentation: 'Returns the format of the item',
        insertText: '_GUICtrlHeader_GetItemFormat(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemImage',
        documentation: 'Retrieves the index of an image within the image list',
        insertText: '_GUICtrlHeader_GetItemImage(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemOrder',
        documentation: 'Retrieves the order in which the item appears',
        insertText: '_GUICtrlHeader_GetItemOrder(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemParam',
        documentation: 'Retrieves the param value of the item',
        insertText: '_GUICtrlHeader_GetItemParam(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemRect',
        documentation: 'Retrieves the bounding rectangle for a given item',
        insertText: '_GUICtrlHeader_GetItemRect(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemRectEx',
        documentation: 'Retrieves the bounding rectangle for a given item',
        insertText: '_GUICtrlHeader_GetItemRectEx(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemText',
        documentation: 'Retrieves the item text',
        insertText: '_GUICtrlHeader_GetItemText(${})'
    },
    {
        label: '_GUICtrlHeader_GetItemWidth',
        documentation: 'Retrieves the item\'s width',
        insertText: '_GUICtrlHeader_GetItemWidth(${})'
    },
    {
        label: '_GUICtrlHeader_GetOrderArray',
        documentation: 'Retrieves the current left-to-right order of items in a header control',
        insertText: '_GUICtrlHeader_GetOrderArray(${})'
    },
    {
        label: '_GUICtrlHeader_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control',
        insertText: '_GUICtrlHeader_GetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlHeader_HitTest',
        documentation: 'Tests a point to determine which item is at the specified point',
        insertText: '_GUICtrlHeader_HitTest(${})'
    },
    {
        label: '_GUICtrlHeader_InsertItem',
        documentation: 'Inserts a new header item',
        insertText: '_GUICtrlHeader_InsertItem(${})'
    },
    {
        label: '_GUICtrlHeader_Layout',
        documentation: 'Retrieves the correct size and position of the control',
        insertText: '_GUICtrlHeader_Layout(${})'
    },
    {
        label: '_GUICtrlHeader_OrderToIndex',
        documentation: 'Retrieves an index value for an item based on its order',
        insertText: '_GUICtrlHeader_OrderToIndex(${})'
    },
    {
        label: '_GUICtrlHeader_SetBitmapMargin',
        documentation: 'Sets the width of the margin, specified in pixels, of a bitmap',
        insertText: '_GUICtrlHeader_SetBitmapMargin(${})'
    },
    {
        label: '_GUICtrlHeader_SetFilterChangeTimeout',
        documentation: 'Sets the filter change timeout interval',
        insertText: '_GUICtrlHeader_SetFilterChangeTimeout(${})'
    },
    {
        label: '_GUICtrlHeader_SetHotDivider',
        documentation: 'Changes the hot divider color',
        insertText: '_GUICtrlHeader_SetHotDivider(${})'
    },
    {
        label: '_GUICtrlHeader_SetImageList',
        documentation: 'Assigns an image list',
        insertText: '_GUICtrlHeader_SetImageList(${})'
    },
    {
        label: '_GUICtrlHeader_SetItem',
        documentation: 'Sets information about an item',
        insertText: '_GUICtrlHeader_SetItem(${})'
    },
    {
        label: '_GUICtrlHeader_SetItemAlign',
        documentation: 'Sets the item text alignment',
        insertText: '_GUICtrlHeader_SetItemAlign(${})'
    },
    {
        label: '_GUICtrlHeader_SetItemBitmap',
        documentation: 'Sets the item bitmap handle',
        insertText: '_GUICtrlHeader_SetItemBitmap(${})'
    },
    {
        label: '_GUICtrlHeader_SetItemDisplay',
        documentation: 'Returns the item display information',
        insertText: '_GUICtrlHeader_SetItemDisplay(${})'
    },
    {
        label: '_GUICtrlHeader_SetItemFlags',
        documentation: 'Returns the item flag information',
        insertText: '_GUICtrlHeader_SetItemFlags(${})'
    },
    {
        label: '_GUICtrlHeader_SetItemFormat',
        documentation: 'Sets the format of the item',
        insertText: '_GUICtrlHeader_SetItemFormat(${})'
    },
    {
        label: '_GUICtrlHeader_SetItemImage',
        documentation: 'Sets the index of an image within the image list',
        insertText: '_GUICtrlHeader_SetItemImage(${})'
    },
    {
        label: '_GUICtrlHeader_SetItemOrder',
        documentation: 'Sets the order in which the item appears',
        insertText: '_GUICtrlHeader_SetItemOrder(${})'
    },
    {
        label: '_GUICtrlHeader_SetItemParam',
        documentation: 'Sets the param value of the item',
        insertText: '_GUICtrlHeader_SetItemParam(${})'
    },
    {
        label: '_GUICtrlHeader_SetItemText',
        documentation: 'Sets the item text',
        insertText: '_GUICtrlHeader_SetItemText(${})'
    },
    {
        label: '_GUICtrlHeader_SetItemWidth',
        documentation: 'Sets the item\'s width',
        insertText: '_GUICtrlHeader_SetItemWidth(${})'
    },
    {
        label: '_GUICtrlHeader_SetOrderArray',
        documentation: 'Sets the current left-to-right order of items',
        insertText: '_GUICtrlHeader_SetOrderArray(${})'
    },
    {
        label: '_GUICtrlHeader_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag for the control',
        insertText: '_GUICtrlHeader_SetUnicodeFormat(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiHeader UDF - #include <GuiHeader.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items