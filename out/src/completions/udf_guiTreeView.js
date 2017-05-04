'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlTreeView_Add',
        documentation: 'Adds a new item',
        insertText: '_GUICtrlTreeView_Add(${})'
    },
    {
        label: '_GUICtrlTreeView_AddChild',
        documentation: 'Adds a new item',
        insertText: '_GUICtrlTreeView_AddChild(${})'
    },
    {
        label: '_GUICtrlTreeView_AddChildFirst',
        documentation: 'Adds a new item',
        insertText: '_GUICtrlTreeView_AddChildFirst(${})'
    },
    {
        label: '_GUICtrlTreeView_AddFirst',
        documentation: 'Adds a new item',
        insertText: '_GUICtrlTreeView_AddFirst(${})'
    },
    {
        label: '_GUICtrlTreeView_BeginUpdate',
        documentation: 'Prevents updating of the control until the EndUpdate function is called',
        insertText: '_GUICtrlTreeView_BeginUpdate(${})'
    },
    {
        label: '_GUICtrlTreeView_ClickItem',
        documentation: 'Click on a item',
        insertText: '_GUICtrlTreeView_ClickItem(${})'
    },
    {
        label: '_GUICtrlTreeView_Create',
        documentation: 'Create a TreeView control',
        insertText: '_GUICtrlTreeView_Create(${})'
    },
    {
        label: '_GUICtrlTreeView_CreateDragImage',
        documentation: 'Creates a dragging bitmap for the specified item',
        insertText: '_GUICtrlTreeView_CreateDragImage(${})'
    },
    {
        label: '_GUICtrlTreeView_CreateSolidBitMap',
        documentation: 'Creates a solid color bitmap',
        insertText: '_GUICtrlTreeView_CreateSolidBitMap(${})'
    },
    {
        label: '_GUICtrlTreeView_Delete',
        documentation: 'Removes an item and all its children',
        insertText: '_GUICtrlTreeView_Delete(${})'
    },
    {
        label: '_GUICtrlTreeView_DeleteAll',
        documentation: 'Removes all items from a tree-view control',
        insertText: '_GUICtrlTreeView_DeleteAll(${})'
    },
    {
        label: '_GUICtrlTreeView_DeleteChildren',
        documentation: 'Deletes all children of a item',
        insertText: '_GUICtrlTreeView_DeleteChildren(${})'
    },
    {
        label: '_GUICtrlTreeView_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlTreeView_Destroy(${})'
    },
    {
        label: '_GUICtrlTreeView_DisplayRect',
        documentation: 'Returns the bounding rectangle for a tree item',
        insertText: '_GUICtrlTreeView_DisplayRect(${})'
    },
    {
        label: '_GUICtrlTreeView_DisplayRectEx',
        documentation: 'Returns the bounding rectangle for a tree item',
        insertText: '_GUICtrlTreeView_DisplayRectEx(${})'
    },
    {
        label: '_GUICtrlTreeView_EditText',
        documentation: 'Begins in-place editing of the specified item\'s text',
        insertText: '_GUICtrlTreeView_EditText(${})'
    },
    {
        label: '_GUICtrlTreeView_EndEdit',
        documentation: 'Ends the editing of the item\'s text',
        insertText: '_GUICtrlTreeView_EndEdit(${})'
    },
    {
        label: '_GUICtrlTreeView_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the BeginUpdate function',
        insertText: '_GUICtrlTreeView_EndUpdate(${})'
    },
    {
        label: '_GUICtrlTreeView_EnsureVisible',
        documentation: 'Ensures that a item is visible, expanding the parent item or scrolling the control if necessary',
        insertText: '_GUICtrlTreeView_EnsureVisible(${})'
    },
    {
        label: '_GUICtrlTreeView_Expand',
        documentation: 'Expands or collapses the list of child items associated with the specified parent item, if any',
        insertText: '_GUICtrlTreeView_Expand(${})'
    },
    {
        label: '_GUICtrlTreeView_ExpandedOnce',
        documentation: 'Indicates if the item\'s list of child items has been expanded at least once',
        insertText: '_GUICtrlTreeView_ExpandedOnce(${})'
    },
    {
        label: '_GUICtrlTreeView_FindItem',
        documentation: 'Retrieves a item based on it\'s text',
        insertText: '_GUICtrlTreeView_FindItem(${})'
    },
    {
        label: '_GUICtrlTreeView_FindItemEx',
        documentation: 'Retrieves a item based on a tree path',
        insertText: '_GUICtrlTreeView_FindItemEx(${})'
    },
    {
        label: '_GUICtrlTreeView_GetBkColor',
        documentation: 'Retrieve the text back color',
        insertText: '_GUICtrlTreeView_GetBkColor(${})'
    },
    {
        label: '_GUICtrlTreeView_GetBold',
        documentation: 'Indicates if the item is drawn in a bold style',
        insertText: '_GUICtrlTreeView_GetBold(${})'
    },
    {
        label: '_GUICtrlTreeView_GetChecked',
        documentation: 'Indicates if a item has its checkbox checked',
        insertText: '_GUICtrlTreeView_GetChecked(${})'
    },
    {
        label: '_GUICtrlTreeView_GetChildCount',
        documentation: 'Retrieves the number of children of an parent item',
        insertText: '_GUICtrlTreeView_GetChildCount(${})'
    },
    {
        label: '_GUICtrlTreeView_GetChildren',
        documentation: 'Indicates whether the item children flag is set',
        insertText: '_GUICtrlTreeView_GetChildren(${})'
    },
    {
        label: '_GUICtrlTreeView_GetCount',
        documentation: 'Retrieves a count of the items',
        insertText: '_GUICtrlTreeView_GetCount(${})'
    },
    {
        label: '_GUICtrlTreeView_GetCut',
        documentation: 'Indicates if the item is drawn as if selected as part of a cut and paste operation',
        insertText: '_GUICtrlTreeView_GetCut(${})'
    },
    {
        label: '_GUICtrlTreeView_GetDropTarget',
        documentation: 'Indicates whether the item is drawn as a drag and drop target',
        insertText: '_GUICtrlTreeView_GetDropTarget(${})'
    },
    {
        label: '_GUICtrlTreeView_GetEditControl',
        documentation: 'Retrieves the handle to the edit control being used to edit a item\'s text',
        insertText: '_GUICtrlTreeView_GetEditControl(${})'
    },
    {
        label: '_GUICtrlTreeView_GetExpanded',
        documentation: 'Indicates whether the item is expanded',
        insertText: '_GUICtrlTreeView_GetExpanded(${})'
    },
    {
        label: '_GUICtrlTreeView_GetFirstChild',
        documentation: 'Retrieves the first child item of the specified item',
        insertText: '_GUICtrlTreeView_GetFirstChild(${})'
    },
    {
        label: '_GUICtrlTreeView_GetFirstItem',
        documentation: 'Retrieves the topmost or very first item',
        insertText: '_GUICtrlTreeView_GetFirstItem(${})'
    },
    {
        label: '_GUICtrlTreeView_GetFirstVisible',
        documentation: 'Retrieves the first visible item in the control',
        insertText: '_GUICtrlTreeView_GetFirstVisible(${})'
    },
    {
        label: '_GUICtrlTreeView_GetFocused',
        documentation: 'Indicates whether the item has focus',
        insertText: '_GUICtrlTreeView_GetFocused(${})'
    },
    {
        label: '_GUICtrlTreeView_GetHeight',
        documentation: 'Retrieves the current height of the each item',
        insertText: '_GUICtrlTreeView_GetHeight(${})'
    },
    {
        label: '_GUICtrlTreeView_GetImageIndex',
        documentation: 'Retrieves the normal state image index',
        insertText: '_GUICtrlTreeView_GetImageIndex(${})'
    },
    {
        label: '_GUICtrlTreeView_GetImageListIconHandle',
        documentation: 'Retrieve ImageList handle',
        insertText: '_GUICtrlTreeView_GetImageListIconHandle(${})'
    },
    {
        label: '_GUICtrlTreeView_GetIndent',
        documentation: 'Retrieves the amount, in pixels, that child items are indented relative to their parent items',
        insertText: '_GUICtrlTreeView_GetIndent(${})'
    },
    {
        label: '_GUICtrlTreeView_GetInsertMarkColor',
        documentation: 'Retrieves the color used to draw the insertion mark',
        insertText: '_GUICtrlTreeView_GetInsertMarkColor(${})'
    },
    {
        label: '_GUICtrlTreeView_GetISearchString',
        documentation: 'Retrieves the incremental search string',
        insertText: '_GUICtrlTreeView_GetISearchString(${})'
    },
    {
        label: '_GUICtrlTreeView_GetItemByIndex',
        documentation: 'Retrieve a item by its position in the list of child items',
        insertText: '_GUICtrlTreeView_GetItemByIndex(${})'
    },
    {
        label: '_GUICtrlTreeView_GetItemHandle',
        documentation: 'Retrieve the item handle',
        insertText: '_GUICtrlTreeView_GetItemHandle(${})'
    },
    {
        label: '_GUICtrlTreeView_GetItemParam',
        documentation: 'Retrieves the application specific value of the item',
        insertText: '_GUICtrlTreeView_GetItemParam(${})'
    },
    {
        label: '_GUICtrlTreeView_GetLastChild',
        documentation: 'Retrieves the last child item of the specified item',
        insertText: '_GUICtrlTreeView_GetLastChild(${})'
    },
    {
        label: '_GUICtrlTreeView_GetLineColor',
        documentation: 'Retrieve the line color',
        insertText: '_GUICtrlTreeView_GetLineColor(${})'
    },
    {
        label: '_GUICtrlTreeView_GetNext',
        documentation: 'Retrieves the next item after the calling item',
        insertText: '_GUICtrlTreeView_GetNext(${})'
    },
    {
        label: '_GUICtrlTreeView_GetNextChild',
        documentation: 'Returns the next item at the same level as the specified item',
        insertText: '_GUICtrlTreeView_GetNextChild(${})'
    },
    {
        label: '_GUICtrlTreeView_GetNextSibling',
        documentation: 'Returns the next item at the same level as the specified item',
        insertText: '_GUICtrlTreeView_GetNextSibling(${})'
    },
    {
        label: '_GUICtrlTreeView_GetNextVisible',
        documentation: 'Retrieves the next visible item that follows the specified item',
        insertText: '_GUICtrlTreeView_GetNextVisible(${})'
    },
    {
        label: '_GUICtrlTreeView_GetNormalImageList',
        documentation: 'Retrieves the normal image list',
        insertText: '_GUICtrlTreeView_GetNormalImageList(${})'
    },
    {
        label: '_GUICtrlTreeView_GetParentHandle',
        documentation: 'Retrieve the parent handle of item',
        insertText: '_GUICtrlTreeView_GetParentHandle(${})'
    },
    {
        label: '_GUICtrlTreeView_GetParentParam',
        documentation: 'Retrieve the parent control ID/Param of item',
        insertText: '_GUICtrlTreeView_GetParentParam(${})'
    },
    {
        label: '_GUICtrlTreeView_GetPrev',
        documentation: 'Retrieves the previous item before the calling item',
        insertText: '_GUICtrlTreeView_GetPrev(${})'
    },
    {
        label: '_GUICtrlTreeView_GetPrevChild',
        documentation: 'Retrieves the previous child item of a specified item',
        insertText: '_GUICtrlTreeView_GetPrevChild(${})'
    },
    {
        label: '_GUICtrlTreeView_GetPrevSibling',
        documentation: 'Returns the previous item before the calling item at the same level',
        insertText: '_GUICtrlTreeView_GetPrevSibling(${})'
    },
    {
        label: '_GUICtrlTreeView_GetPrevVisible',
        documentation: 'Retrieves the first visible item that precedes the specified item',
        insertText: '_GUICtrlTreeView_GetPrevVisible(${})'
    },
    {
        label: '_GUICtrlTreeView_GetScrollTime',
        documentation: 'Retrieves the maximum scroll time',
        insertText: '_GUICtrlTreeView_GetScrollTime(${})'
    },
    {
        label: '_GUICtrlTreeView_GetSelected',
        documentation: 'Indicates whether the item appears in the selected state',
        insertText: '_GUICtrlTreeView_GetSelected(${})'
    },
    {
        label: '_GUICtrlTreeView_GetSelectedImageIndex',
        documentation: 'Retrieves the index in the image list of the image displayed for the item when it is selected',
        insertText: '_GUICtrlTreeView_GetSelectedImageIndex(${})'
    },
    {
        label: '_GUICtrlTreeView_GetSelection',
        documentation: 'Retrieves the currently selected item',
        insertText: '_GUICtrlTreeView_GetSelection(${})'
    },
    {
        label: '_GUICtrlTreeView_GetSiblingCount',
        documentation: 'Retrieves the number of siblings at the level of an item',
        insertText: '_GUICtrlTreeView_GetSiblingCount(${})'
    },
    {
        label: '_GUICtrlTreeView_GetState',
        documentation: 'Retrieve the state of the item',
        insertText: '_GUICtrlTreeView_GetState(${})'
    },
    {
        label: '_GUICtrlTreeView_GetStateImageIndex',
        documentation: 'Retrieves the index of the state image to display for the item',
        insertText: '_GUICtrlTreeView_GetStateImageIndex(${})'
    },
    {
        label: '_GUICtrlTreeView_GetStateImageList',
        documentation: 'Retrieves the handle to the state image list',
        insertText: '_GUICtrlTreeView_GetStateImageList(${})'
    },
    {
        label: '_GUICtrlTreeView_GetText',
        documentation: 'Retrieve the item text',
        insertText: '_GUICtrlTreeView_GetText(${})'
    },
    {
        label: '_GUICtrlTreeView_GetTextColor',
        documentation: 'Retrieve the text color',
        insertText: '_GUICtrlTreeView_GetTextColor(${})'
    },
    {
        label: '_GUICtrlTreeView_GetToolTips',
        documentation: 'Retrieves the handle to the child ToolTip control',
        insertText: '_GUICtrlTreeView_GetToolTips(${})'
    },
    {
        label: '_GUICtrlTreeView_GetTree',
        documentation: 'Retrieve all items text',
        insertText: '_GUICtrlTreeView_GetTree(${})'
    },
    {
        label: '_GUICtrlTreeView_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag',
        insertText: '_GUICtrlTreeView_GetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlTreeView_GetVisible',
        documentation: 'Indicates whether the item is currently visible in the control image',
        insertText: '_GUICtrlTreeView_GetVisible(${})'
    },
    {
        label: '_GUICtrlTreeView_GetVisibleCount',
        documentation: 'Returns the number of items that can be fully visible in the control',
        insertText: '_GUICtrlTreeView_GetVisibleCount(${})'
    },
    {
        label: '_GUICtrlTreeView_HitTest',
        documentation: 'Returns information about the location of a point relative to the control',
        insertText: '_GUICtrlTreeView_HitTest(${})'
    },
    {
        label: '_GUICtrlTreeView_HitTestEx',
        documentation: 'Returns information about the location of a point relative to the control',
        insertText: '_GUICtrlTreeView_HitTestEx(${})'
    },
    {
        label: '_GUICtrlTreeView_HitTestItem',
        documentation: 'Returns the item at the specified coordinates',
        insertText: '_GUICtrlTreeView_HitTestItem(${})'
    },
    {
        label: '_GUICtrlTreeView_Index',
        documentation: 'Retrieves the position of the item in the list',
        insertText: '_GUICtrlTreeView_Index(${})'
    },
    {
        label: '_GUICtrlTreeView_InsertItem',
        documentation: 'Insert an item',
        insertText: '_GUICtrlTreeView_InsertItem(${})'
    },
    {
        label: '_GUICtrlTreeView_IsFirstItem',
        documentation: 'Indicates whether the tree item is very first',
        insertText: '_GUICtrlTreeView_IsFirstItem(${})'
    },
    {
        label: '_GUICtrlTreeView_IsParent',
        documentation: 'Indicates whether one item is the parent of another item',
        insertText: '_GUICtrlTreeView_IsParent(${})'
    },
    {
        label: '_GUICtrlTreeView_Level',
        documentation: 'Indicates the level of indentation of a item',
        insertText: '_GUICtrlTreeView_Level(${})'
    },
    {
        label: '_GUICtrlTreeView_SelectItem',
        documentation: 'Selects the specified item, scrolls the item into view, or redraws the item',
        insertText: '_GUICtrlTreeView_SelectItem(${})'
    },
    {
        label: '_GUICtrlTreeView_SelectItemByIndex',
        documentation: 'Selects the item based on it\'s index in the parent list',
        insertText: '_GUICtrlTreeView_SelectItemByIndex(${})'
    },
    {
        label: '_GUICtrlTreeView_SetBkColor',
        documentation: 'Sets the back color',
        insertText: '_GUICtrlTreeView_SetBkColor(${})'
    },
    {
        label: '_GUICtrlTreeView_SetBold',
        documentation: 'Sets whether the item is drawn using a bold sytle',
        insertText: '_GUICtrlTreeView_SetBold(${})'
    },
    {
        label: '_GUICtrlTreeView_SetChecked',
        documentation: 'Sets whether a item has it\'s checkbox checked or not',
        insertText: '_GUICtrlTreeView_SetChecked(${})'
    },
    {
        label: '_GUICtrlTreeView_SetCheckedByIndex',
        documentation: 'Sets whether an item has it\'s checkbox checked or not by it\'s index',
        insertText: '_GUICtrlTreeView_SetCheckedByIndex(${})'
    },
    {
        label: '_GUICtrlTreeView_SetChildren',
        documentation: 'Sets whether the item children flag',
        insertText: '_GUICtrlTreeView_SetChildren(${})'
    },
    {
        label: '_GUICtrlTreeView_SetCut',
        documentation: 'Sets whether the item is drawn as if selected as part of a cut and paste operation',
        insertText: '_GUICtrlTreeView_SetCut(${})'
    },
    {
        label: '_GUICtrlTreeView_SetDropTarget',
        documentation: 'Sets whether the item is drawn as a drag and drop target',
        insertText: '_GUICtrlTreeView_SetDropTarget(${})'
    },
    {
        label: '_GUICtrlTreeView_SetFocused',
        documentation: 'Sets whether the item appears to have focus',
        insertText: '_GUICtrlTreeView_SetFocused(${})'
    },
    {
        label: '_GUICtrlTreeView_SetHeight',
        documentation: 'Sets the height of the each item',
        insertText: '_GUICtrlTreeView_SetHeight(${})'
    },
    {
        label: '_GUICtrlTreeView_SetIcon',
        documentation: 'Set an item icon',
        insertText: '_GUICtrlTreeView_SetIcon(${})'
    },
    {
        label: '_GUICtrlTreeView_SetImageIndex',
        documentation: 'Sets the index into image list for which image is displayed when a item is in its normal state',
        insertText: '_GUICtrlTreeView_SetImageIndex(${})'
    },
    {
        label: '_GUICtrlTreeView_SetIndent',
        documentation: 'Sets the width of indentation for a tree-view control and redraws the control to reflect the new width',
        insertText: '_GUICtrlTreeView_SetIndent(${})'
    },
    {
        label: '_GUICtrlTreeView_SetInsertMark',
        documentation: 'Sets the insertion mark',
        insertText: '_GUICtrlTreeView_SetInsertMark(${})'
    },
    {
        label: '_GUICtrlTreeView_SetInsertMarkColor',
        documentation: 'Sets the color used to draw the insertion mark',
        insertText: '_GUICtrlTreeView_SetInsertMarkColor(${})'
    },
    {
        label: '_GUICtrlTreeView_SetItemHeight',
        documentation: 'Sets the height of an individual item',
        insertText: '_GUICtrlTreeView_SetItemHeight(${})'
    },
    {
        label: '_GUICtrlTreeView_SetItemParam',
        documentation: 'Sets the value specific to the item',
        insertText: '_GUICtrlTreeView_SetItemParam(${})'
    },
    {
        label: '_GUICtrlTreeView_SetLineColor',
        documentation: 'Sets the line color',
        insertText: '_GUICtrlTreeView_SetLineColor(${})'
    },
    {
        label: '_GUICtrlTreeView_SetNormalImageList',
        documentation: 'Sets the normal image list for the control',
        insertText: '_GUICtrlTreeView_SetNormalImageList(${})'
    },
    {
        label: '_GUICtrlTreeView_SetScrollTime',
        documentation: 'Sets the maximum scroll time',
        insertText: '_GUICtrlTreeView_SetScrollTime(${})'
    },
    {
        label: '_GUICtrlTreeView_SetSelected',
        documentation: 'Sets whether the item appears in the selected state',
        insertText: '_GUICtrlTreeView_SetSelected(${})'
    },
    {
        label: '_GUICtrlTreeView_SetSelectedImageIndex',
        documentation: 'Sets the selected image index',
        insertText: '_GUICtrlTreeView_SetSelectedImageIndex(${})'
    },
    {
        label: '_GUICtrlTreeView_SetState',
        documentation: 'Set the state of the specified item',
        insertText: '_GUICtrlTreeView_SetState(${})'
    },
    {
        label: '_GUICtrlTreeView_SetStateImageIndex',
        documentation: 'Sets the index into image list for the state image',
        insertText: '_GUICtrlTreeView_SetStateImageIndex(${})'
    },
    {
        label: '_GUICtrlTreeView_SetStateImageList',
        documentation: 'Sets the state image list for the control',
        insertText: '_GUICtrlTreeView_SetStateImageList(${})'
    },
    {
        label: '_GUICtrlTreeView_SetText',
        documentation: 'Set the text of an item',
        insertText: '_GUICtrlTreeView_SetText(${})'
    },
    {
        label: '_GUICtrlTreeView_SetTextColor',
        documentation: 'Sets the text color',
        insertText: '_GUICtrlTreeView_SetTextColor(${})'
    },
    {
        label: '_GUICtrlTreeView_SetToolTips',
        documentation: 'Sets the handle to the child ToolTip control',
        insertText: '_GUICtrlTreeView_SetToolTips(${})'
    },
    {
        label: '_GUICtrlTreeView_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag',
        insertText: '_GUICtrlTreeView_SetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlTreeView_Sort',
        documentation: 'Sorts the items ',
        insertText: '_GUICtrlTreeView_Sort(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <GuiTreeView.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items