'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlTreeView_Add',
        documentation: 'Adds a new item'
    },
    {
        label: '_GUICtrlTreeView_AddChild',
        documentation: 'Adds a new item'
    },
    {
        label: '_GUICtrlTreeView_AddChildFirst',
        documentation: 'Adds a new item'
    },
    {
        label: '_GUICtrlTreeView_AddFirst',
        documentation: 'Adds a new item'
    },
    {
        label: '_GUICtrlTreeView_BeginUpdate',
        documentation: 'Prevents updating of the control until the EndUpdate function is called'
    },
    {
        label: '_GUICtrlTreeView_ClickItem',
        documentation: 'Click on a item'
    },
    {
        label: '_GUICtrlTreeView_Create',
        documentation: 'Create a TreeView control'
    },
    {
        label: '_GUICtrlTreeView_CreateDragImage',
        documentation: 'Creates a dragging bitmap for the specified item'
    },
    {
        label: '_GUICtrlTreeView_CreateSolidBitMap',
        documentation: 'Creates a solid color bitmap'
    },
    {
        label: '_GUICtrlTreeView_Delete',
        documentation: 'Removes an item and all its children'
    },
    {
        label: '_GUICtrlTreeView_DeleteAll',
        documentation: 'Removes all items from a tree-view control'
    },
    {
        label: '_GUICtrlTreeView_DeleteChildren',
        documentation: 'Deletes all children of a item'
    },
    {
        label: '_GUICtrlTreeView_Destroy',
        documentation: 'Delete the control'
    },
    {
        label: '_GUICtrlTreeView_DisplayRect',
        documentation: 'Returns the bounding rectangle for a tree item'
    },
    {
        label: '_GUICtrlTreeView_DisplayRectEx',
        documentation: 'Returns the bounding rectangle for a tree item'
    },
    {
        label: '_GUICtrlTreeView_EditText',
        documentation: 'Begins in-place editing of the specified item\'s text'
    },
    {
        label: '_GUICtrlTreeView_EndEdit',
        documentation: 'Ends the editing of the item\'s text'
    },
    {
        label: '_GUICtrlTreeView_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the BeginUpdate function'
    },
    {
        label: '_GUICtrlTreeView_EnsureVisible',
        documentation: 'Ensures that a item is visible, expanding the parent item or scrolling the control if necessary'
    },
    {
        label: '_GUICtrlTreeView_Expand',
        documentation: 'Expands or collapses the list of child items associated with the specified parent item, if any'
    },
    {
        label: '_GUICtrlTreeView_ExpandedOnce',
        documentation: 'Indicates if the item\'s list of child items has been expanded at least once'
    },
    {
        label: '_GUICtrlTreeView_FindItem',
        documentation: 'Retrieves a item based on it\'s text'
    },
    {
        label: '_GUICtrlTreeView_FindItemEx',
        documentation: 'Retrieves a item based on a tree path'
    },
    {
        label: '_GUICtrlTreeView_GetBkColor',
        documentation: 'Retrieve the text back color'
    },
    {
        label: '_GUICtrlTreeView_GetBold',
        documentation: 'Indicates if the item is drawn in a bold style'
    },
    {
        label: '_GUICtrlTreeView_GetChecked',
        documentation: 'Indicates if a item has its checkbox checked'
    },
    {
        label: '_GUICtrlTreeView_GetChildCount',
        documentation: 'Retrieves the number of children of an parent item'
    },
    {
        label: '_GUICtrlTreeView_GetChildren',
        documentation: 'Indicates whether the item children flag is set'
    },
    {
        label: '_GUICtrlTreeView_GetCount',
        documentation: 'Retrieves a count of the items'
    },
    {
        label: '_GUICtrlTreeView_GetCut',
        documentation: 'Indicates if the item is drawn as if selected as part of a cut and paste operation'
    },
    {
        label: '_GUICtrlTreeView_GetDropTarget',
        documentation: 'Indicates whether the item is drawn as a drag and drop target'
    },
    {
        label: '_GUICtrlTreeView_GetEditControl',
        documentation: 'Retrieves the handle to the edit control being used to edit a item\'s text'
    },
    {
        label: '_GUICtrlTreeView_GetExpanded',
        documentation: 'Indicates whether the item is expanded'
    },
    {
        label: '_GUICtrlTreeView_GetFirstChild',
        documentation: 'Retrieves the first child item of the specified item'
    },
    {
        label: '_GUICtrlTreeView_GetFirstItem',
        documentation: 'Retrieves the topmost or very first item'
    },
    {
        label: '_GUICtrlTreeView_GetFirstVisible',
        documentation: 'Retrieves the first visible item in the control'
    },
    {
        label: '_GUICtrlTreeView_GetFocused',
        documentation: 'Indicates whether the item has focus'
    },
    {
        label: '_GUICtrlTreeView_GetHeight',
        documentation: 'Retrieves the current height of the each item'
    },
    {
        label: '_GUICtrlTreeView_GetImageIndex',
        documentation: 'Retrieves the normal state image index'
    },
    {
        label: '_GUICtrlTreeView_GetImageListIconHandle',
        documentation: 'Retrieve ImageList handle'
    },
    {
        label: '_GUICtrlTreeView_GetIndent',
        documentation: 'Retrieves the amount, in pixels, that child items are indented relative to their parent items'
    },
    {
        label: '_GUICtrlTreeView_GetInsertMarkColor',
        documentation: 'Retrieves the color used to draw the insertion mark'
    },
    {
        label: '_GUICtrlTreeView_GetISearchString',
        documentation: 'Retrieves the incremental search string'
    },
    {
        label: '_GUICtrlTreeView_GetItemByIndex',
        documentation: 'Retrieve a item by its position in the list of child items'
    },
    {
        label: '_GUICtrlTreeView_GetItemHandle',
        documentation: 'Retrieve the item handle'
    },
    {
        label: '_GUICtrlTreeView_GetItemParam',
        documentation: 'Retrieves the application specific value of the item'
    },
    {
        label: '_GUICtrlTreeView_GetLastChild',
        documentation: 'Retrieves the last child item of the specified item'
    },
    {
        label: '_GUICtrlTreeView_GetLineColor',
        documentation: 'Retrieve the line color'
    },
    {
        label: '_GUICtrlTreeView_GetNext',
        documentation: 'Retrieves the next item after the calling item'
    },
    {
        label: '_GUICtrlTreeView_GetNextChild',
        documentation: 'Returns the next item at the same level as the specified item'
    },
    {
        label: '_GUICtrlTreeView_GetNextSibling',
        documentation: 'Returns the next item at the same level as the specified item'
    },
    {
        label: '_GUICtrlTreeView_GetNextVisible',
        documentation: 'Retrieves the next visible item that follows the specified item'
    },
    {
        label: '_GUICtrlTreeView_GetNormalImageList',
        documentation: 'Retrieves the normal image list'
    },
    {
        label: '_GUICtrlTreeView_GetParentHandle',
        documentation: 'Retrieve the parent handle of item'
    },
    {
        label: '_GUICtrlTreeView_GetParentParam',
        documentation: 'Retrieve the parent control ID/Param of item'
    },
    {
        label: '_GUICtrlTreeView_GetPrev',
        documentation: 'Retrieves the previous item before the calling item'
    },
    {
        label: '_GUICtrlTreeView_GetPrevChild',
        documentation: 'Retrieves the previous child item of a specified item'
    },
    {
        label: '_GUICtrlTreeView_GetPrevSibling',
        documentation: 'Returns the previous item before the calling item at the same level'
    },
    {
        label: '_GUICtrlTreeView_GetPrevVisible',
        documentation: 'Retrieves the first visible item that precedes the specified item'
    },
    {
        label: '_GUICtrlTreeView_GetScrollTime',
        documentation: 'Retrieves the maximum scroll time'
    },
    {
        label: '_GUICtrlTreeView_GetSelected',
        documentation: 'Indicates whether the item appears in the selected state'
    },
    {
        label: '_GUICtrlTreeView_GetSelectedImageIndex',
        documentation: 'Retrieves the index in the image list of the image displayed for the item when it is selected'
    },
    {
        label: '_GUICtrlTreeView_GetSelection',
        documentation: 'Retrieves the currently selected item'
    },
    {
        label: '_GUICtrlTreeView_GetSiblingCount',
        documentation: 'Retrieves the number of siblings at the level of an item'
    },
    {
        label: '_GUICtrlTreeView_GetState',
        documentation: 'Retrieve the state of the item'
    },
    {
        label: '_GUICtrlTreeView_GetStateImageIndex',
        documentation: 'Retrieves the index of the state image to display for the item'
    },
    {
        label: '_GUICtrlTreeView_GetStateImageList',
        documentation: 'Retrieves the handle to the state image list'
    },
    {
        label: '_GUICtrlTreeView_GetText',
        documentation: 'Retrieve the item text'
    },
    {
        label: '_GUICtrlTreeView_GetTextColor',
        documentation: 'Retrieve the text color'
    },
    {
        label: '_GUICtrlTreeView_GetToolTips',
        documentation: 'Retrieves the handle to the child ToolTip control'
    },
    {
        label: '_GUICtrlTreeView_GetTree',
        documentation: 'Retrieve all items text'
    },
    {
        label: '_GUICtrlTreeView_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag'
    },
    {
        label: '_GUICtrlTreeView_GetVisible',
        documentation: 'Indicates whether the item is currently visible in the control image'
    },
    {
        label: '_GUICtrlTreeView_GetVisibleCount',
        documentation: 'Returns the number of items that can be fully visible in the control'
    },
    {
        label: '_GUICtrlTreeView_HitTest',
        documentation: 'Returns information about the location of a point relative to the control'
    },
    {
        label: '_GUICtrlTreeView_HitTestEx',
        documentation: 'Returns information about the location of a point relative to the control'
    },
    {
        label: '_GUICtrlTreeView_HitTestItem',
        documentation: 'Returns the item at the specified coordinates'
    },
    {
        label: '_GUICtrlTreeView_Index',
        documentation: 'Retrieves the position of the item in the list'
    },
    {
        label: '_GUICtrlTreeView_InsertItem',
        documentation: 'Insert an item'
    },
    {
        label: '_GUICtrlTreeView_IsFirstItem',
        documentation: 'Indicates whether the tree item is very first'
    },
    {
        label: '_GUICtrlTreeView_IsParent',
        documentation: 'Indicates whether one item is the parent of another item'
    },
    {
        label: '_GUICtrlTreeView_Level',
        documentation: 'Indicates the level of indentation of a item'
    },
    {
        label: '_GUICtrlTreeView_SelectItem',
        documentation: 'Selects the specified item, scrolls the item into view, or redraws the item'
    },
    {
        label: '_GUICtrlTreeView_SelectItemByIndex',
        documentation: 'Selects the item based on it\'s index in the parent list'
    },
    {
        label: '_GUICtrlTreeView_SetBkColor',
        documentation: 'Sets the back color'
    },
    {
        label: '_GUICtrlTreeView_SetBold',
        documentation: 'Sets whether the item is drawn using a bold sytle'
    },
    {
        label: '_GUICtrlTreeView_SetChecked',
        documentation: 'Sets whether a item has it\'s checkbox checked or not'
    },
    {
        label: '_GUICtrlTreeView_SetCheckedByIndex',
        documentation: 'Sets whether an item has it\'s checkbox checked or not by it\'s index'
    },
    {
        label: '_GUICtrlTreeView_SetChildren',
        documentation: 'Sets whether the item children flag'
    },
    {
        label: '_GUICtrlTreeView_SetCut',
        documentation: 'Sets whether the item is drawn as if selected as part of a cut and paste operation'
    },
    {
        label: '_GUICtrlTreeView_SetDropTarget',
        documentation: 'Sets whether the item is drawn as a drag and drop target'
    },
    {
        label: '_GUICtrlTreeView_SetFocused',
        documentation: 'Sets whether the item appears to have focus'
    },
    {
        label: '_GUICtrlTreeView_SetHeight',
        documentation: 'Sets the height of the each item'
    },
    {
        label: '_GUICtrlTreeView_SetIcon',
        documentation: 'Set an item icon'
    },
    {
        label: '_GUICtrlTreeView_SetImageIndex',
        documentation: 'Sets the index into image list for which image is displayed when a item is in its normal state'
    },
    {
        label: '_GUICtrlTreeView_SetIndent',
        documentation: 'Sets the width of indentation for a tree-view control and redraws the control to reflect the new width'
    },
    {
        label: '_GUICtrlTreeView_SetInsertMark',
        documentation: 'Sets the insertion mark'
    },
    {
        label: '_GUICtrlTreeView_SetInsertMarkColor',
        documentation: 'Sets the color used to draw the insertion mark'
    },
    {
        label: '_GUICtrlTreeView_SetItemHeight',
        documentation: 'Sets the height of an individual item'
    },
    {
        label: '_GUICtrlTreeView_SetItemParam',
        documentation: 'Sets the value specific to the item'
    },
    {
        label: '_GUICtrlTreeView_SetLineColor',
        documentation: 'Sets the line color'
    },
    {
        label: '_GUICtrlTreeView_SetNormalImageList',
        documentation: 'Sets the normal image list for the control'
    },
    {
        label: '_GUICtrlTreeView_SetScrollTime',
        documentation: 'Sets the maximum scroll time'
    },
    {
        label: '_GUICtrlTreeView_SetSelected',
        documentation: 'Sets whether the item appears in the selected state'
    },
    {
        label: '_GUICtrlTreeView_SetSelectedImageIndex',
        documentation: 'Sets the selected image index'
    },
    {
        label: '_GUICtrlTreeView_SetState',
        documentation: 'Set the state of the specified item'
    },
    {
        label: '_GUICtrlTreeView_SetStateImageIndex',
        documentation: 'Sets the index into image list for the state image'
    },
    {
        label: '_GUICtrlTreeView_SetStateImageList',
        documentation: 'Sets the state image list for the control'
    },
    {
        label: '_GUICtrlTreeView_SetText',
        documentation: 'Set the text of an item'
    },
    {
        label: '_GUICtrlTreeView_SetTextColor',
        documentation: 'Sets the text color'
    },
    {
        label: '_GUICtrlTreeView_SetToolTips',
        documentation: 'Sets the handle to the child ToolTip control'
    },
    {
        label: '_GUICtrlTreeView_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag'
    },
    {
        label: '_GUICtrlTreeView_Sort',
        documentation: 'Sorts the items '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <GuiTreeView.au3>'
}

module.exports = items