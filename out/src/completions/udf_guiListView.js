'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlListView_AddArray',
        documentation: 'Adds items from an array to the control'
    },
    {
        label: '_GUICtrlListView_AddColumn',
        documentation: 'Adds a new column in the control'
    },
    {
        label: '_GUICtrlListView_AddItem',
        documentation: 'Adds a new item to the end of the list'
    },
    {
        label: '_GUICtrlListView_AddSubItem',
        documentation: 'Adds a new subitem to the control'
    },
    {
        label: '_GUICtrlListView_ApproximateViewHeight',
        documentation: 'Calculates the approximate height required to display a given number of items'
    },
    {
        label: '_GUICtrlListView_ApproximateViewRect',
        documentation: 'Calculates the approximate size required to display a given number of items'
    },
    {
        label: '_GUICtrlListView_ApproximateViewWidth',
        documentation: 'Calculates the approximate width required to display a given number of items'
    },
    {
        label: '_GUICtrlListView_Arrange',
        documentation: 'Arranges items in icon view'
    },
    {
        label: '_GUICtrlListView_BeginUpdate',
        documentation: 'Prevents updating of the control until the _GUICtrlListView_EndUpdate() function is called'
    },
    {
        label: '_GUICtrlListView_CancelEditLabel',
        documentation: 'Cancels an item text editing operation'
    },
    {
        label: '_GUICtrlListView_ClickItem',
        documentation: 'Clicks an item'
    },
    {
        label: '_GUICtrlListView_CopyItems',
        documentation: 'Copy Items between 2 list-view controls'
    },
    {
        label: '_GUICtrlListView_Create',
        documentation: 'Create a ListView control'
    },
    {
        label: '_GUICtrlListView_CreateDragImage',
        documentation: 'Creates a drag image list for the specified item'
    },
    {
        label: '_GUICtrlListView_CreateSolidBitMap',
        documentation: 'Creates a solid color bitmap'
    },
    {
        label: '_GUICtrlListView_DeleteAllItems',
        documentation: 'Removes all items from a list-view control'
    },
    {
        label: '_GUICtrlListView_DeleteColumn',
        documentation: 'Removes a column from a list-view control'
    },
    {
        label: '_GUICtrlListView_DeleteItem',
        documentation: 'Removes an item from a list-view control'
    },
    {
        label: '_GUICtrlListView_DeleteItemsSelected',
        documentation: 'Deletes item(s) selected'
    },
    {
        label: '_GUICtrlListView_Destroy',
        documentation: 'Delete the listview control'
    },
    {
        label: '_GUICtrlListView_DrawDragImage',
        documentation: 'Draw the Drag Image'
    },
    {
        label: '_GUICtrlListView_EditLabel',
        documentation: 'Begins in place editing of the specified item text'
    },
    {
        label: '_GUICtrlListView_EnableGroupView',
        documentation: 'Enables or disables whether the items in the control display as a group'
    },
    {
        label: '_GUICtrlListView_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the _GUICtrlListView_BeginUpdate() function'
    },
    {
        label: '_GUICtrlListView_EnsureVisible',
        documentation: 'Ensures that a list-view item is either entirely or partially visible'
    },
    {
        label: '_GUICtrlListView_FindInText',
        documentation: 'Searches for an item that contains the specified text anywhere in its text'
    },
    {
        label: '_GUICtrlListView_FindItem',
        documentation: 'Searches for an item with the specified characteristics'
    },
    {
        label: '_GUICtrlListView_FindNearest',
        documentation: 'Finds the item nearest to the position specified'
    },
    {
        label: '_GUICtrlListView_FindParam',
        documentation: 'Searches for an item with the specified lParam'
    },
    {
        label: '_GUICtrlListView_FindText',
        documentation: 'Searches for an item with the specified text'
    },
    {
        label: '_GUICtrlListView_GetBkColor',
        documentation: 'Retrieves the background color of a list-view control'
    },
    {
        label: '_GUICtrlListView_GetBkImage',
        documentation: 'Retrieves the background image in the control'
    },
    {
        label: '_GUICtrlListView_GetCallbackMask',
        documentation: 'Retrieves the callback mask for the control'
    },
    {
        label: '_GUICtrlListView_GetColumn',
        documentation: 'Retrieves the attributes of a column'
    },
    {
        label: '_GUICtrlListView_GetColumnCount',
        documentation: 'Retrieve the number of columns'
    },
    {
        label: '_GUICtrlListView_GetColumnOrder',
        documentation: 'Retrieves the current left-to-right order of columns'
    },
    {
        label: '_GUICtrlListView_GetColumnOrderArray',
        documentation: 'Retrieves the current left-to-right order of columns in the control'
    },
    {
        label: '_GUICtrlListView_GetColumnWidth',
        documentation: 'Retrieves the width of a column in report or list view'
    },
    {
        label: '_GUICtrlListView_GetCounterPage',
        documentation: 'Calculates the number of items that can fit vertically in the visible area'
    },
    {
        label: '_GUICtrlListView_GetEditControl',
        documentation: 'Retrieves the handle to the edit control being used to edit an item\'s text'
    },
    {
        label: '_GUICtrlListView_GetExtendedListViewStyle',
        documentation: 'Retrieves the extended styles that are currently in use'
    },
    {
        label: '_GUICtrlListView_GetFocusedGroup',
        documentation: 'Gets the group that has the focus'
    },
    {
        label: '_GUICtrlListView_GetGroupCount',
        documentation: 'Gets the number of groups'
    },
    {
        label: '_GUICtrlListView_GetGroupInfo',
        documentation: 'Retrieves group information'
    },
    {
        label: '_GUICtrlListView_GetGroupInfoByIndex',
        documentation: 'Retrieves group information'
    },
    {
        label: '_GUICtrlListView_GetGroupRect',
        documentation: 'Gets the rectangle for a specified group'
    },
    {
        label: '_GUICtrlListView_GetGroupViewEnabled',
        documentation: 'Checks whether the control has group view enabled'
    },
    {
        label: '_GUICtrlListView_GetHeader',
        documentation: 'Retrieves the handle to the header control'
    },
    {
        label: '_GUICtrlListView_GetHotCursor',
        documentation: 'Retrieves the HCURSOR value used when the pointer is over an item while hot tracking is enabled'
    },
    {
        label: '_GUICtrlListView_GetHotItem',
        documentation: 'Retrieves the index of the hot item'
    },
    {
        label: '_GUICtrlListView_GetHoverTime',
        documentation: 'Retrieves the amount of time that the mouse cursor must hover over an item before it is selected'
    },
    {
        label: '_GUICtrlListView_GetImageList',
        documentation: 'Retrieves the handle to an image list used for drawing listview items'
    },
    {
        label: '_GUICtrlListView_GetISearchString',
        documentation: 'Retrieves the incremental search string of the control'
    },
    {
        label: '_GUICtrlListView_GetItem',
        documentation: 'Retrieves an item\'s attributes'
    },
    {
        label: '_GUICtrlListView_GetItemChecked',
        documentation: 'Returns the check state for a list-view control item'
    },
    {
        label: '_GUICtrlListView_GetItemCount',
        documentation: 'Retrieves the number of items in a list-view control'
    },
    {
        label: '_GUICtrlListView_GetItemCut',
        documentation: 'Determines whether the item is marked for a cut and paste operation'
    },
    {
        label: '_GUICtrlListView_GetItemDropHilited',
        documentation: 'Determines whether the item is highlighted as a drag-and-drop target'
    },
    {
        label: '_GUICtrlListView_GetItemEx',
        documentation: 'Retrieves some or all of an item\'s attributes'
    },
    {
        label: '_GUICtrlListView_GetItemFocused',
        documentation: 'Determines whether the item is highlighted as a drag-and-drop target'
    },
    {
        label: '_GUICtrlListView_GetItemGroupID',
        documentation: 'Gets the item group ID'
    },
    {
        label: '_GUICtrlListView_GetItemImage',
        documentation: 'Retrieves the index of the item\'s icon'
    },
    {
        label: '_GUICtrlListView_GetItemIndent',
        documentation: 'Retrieves the number of image widths the item is indented'
    },
    {
        label: '_GUICtrlListView_GetItemParam',
        documentation: 'Retrieves the application specific value of the item'
    },
    {
        label: '_GUICtrlListView_GetItemPosition',
        documentation: 'Retrieves the position of an item'
    },
    {
        label: '_GUICtrlListView_GetItemPositionX',
        documentation: 'Retrieves the X position of an item'
    },
    {
        label: '_GUICtrlListView_GetItemPositionY',
        documentation: 'Retrieves the Y position of an item'
    },
    {
        label: '_GUICtrlListView_GetItemRect',
        documentation: 'Retrieves the bounding rectangle for all or part of an item'
    },
    {
        label: '_GUICtrlListView_GetItemRectEx',
        documentation: 'Retrieves the bounding rectangle for all or part of an item'
    },
    {
        label: '_GUICtrlListView_GetItemSelected',
        documentation: 'Determines whether the item is selected'
    },
    {
        label: '_GUICtrlListView_GetItemSpacing',
        documentation: 'Determines the spacing between items in the control'
    },
    {
        label: '_GUICtrlListView_GetItemSpacingX',
        documentation: 'Determines the horizontal spacing between items in the control'
    },
    {
        label: '_GUICtrlListView_GetItemSpacingY',
        documentation: 'Determines the vertical spacing between items in the control'
    },
    {
        label: '_GUICtrlListView_GetItemState',
        documentation: 'Retrieves the state of a listview item'
    },
    {
        label: '_GUICtrlListView_GetItemStateImage',
        documentation: 'Gets the state image that is displayed'
    },
    {
        label: '_GUICtrlListView_GetItemText',
        documentation: 'Retrieves the text of an item or subitem'
    },
    {
        label: '_GUICtrlListView_GetItemTextArray',
        documentation: 'Retrieves all of a list-view item'
    },
    {
        label: '_GUICtrlListView_GetItemTextString',
        documentation: 'Retrieves all of a list-view item'
    },
    {
        label: '_GUICtrlListView_GetNextItem',
        documentation: 'Searches for an item that has the specified properties'
    },
    {
        label: '_GUICtrlListView_GetNumberOfWorkAreas',
        documentation: 'Retrieves the number of working areas in the control'
    },
    {
        label: '_GUICtrlListView_GetOrigin',
        documentation: 'Retrieves the current view origin for the control'
    },
    {
        label: '_GUICtrlListView_GetOriginX',
        documentation: 'Retrieves the current horizontal view origin for the control'
    },
    {
        label: '_GUICtrlListView_GetOriginY',
        documentation: 'Retrieves the current vertical view origin for the control'
    },
    {
        label: '_GUICtrlListView_GetOutlineColor',
        documentation: 'Retrieves the color of the border of the control'
    },
    {
        label: '_GUICtrlListView_GetSelectedColumn',
        documentation: 'Retrieves the index of the selected column'
    },
    {
        label: '_GUICtrlListView_GetSelectedCount',
        documentation: 'Determines the number of selected items'
    },
    {
        label: '_GUICtrlListView_GetSelectedIndices',
        documentation: 'Retrieve indices of selected item(s)'
    },
    {
        label: '_GUICtrlListView_GetSelectionMark',
        documentation: 'Retrieves the selection mark from the control'
    },
    {
        label: '_GUICtrlListView_GetStringWidth',
        documentation: 'Determines the width of a specified string'
    },
    {
        label: '_GUICtrlListView_GetSubItemRect',
        documentation: 'Retrieves information about an item bounding rectangle'
    },
    {
        label: '_GUICtrlListView_GetTextBkColor',
        documentation: 'Retrieves the text background color of the control'
    },
    {
        label: '_GUICtrlListView_GetTextColor',
        documentation: 'Retrieves the text color of the control'
    },
    {
        label: '_GUICtrlListView_GetToolTips',
        documentation: 'Retrieves the ToolTip control handle'
    },
    {
        label: '_GUICtrlListView_GetTopIndex',
        documentation: 'Retrieves the index of the topmost visible item when in list or report view'
    },
    {
        label: '_GUICtrlListView_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control'
    },
    {
        label: '_GUICtrlListView_GetView',
        documentation: 'Retrieves the current view of the control'
    },
    {
        label: '_GUICtrlListView_GetViewDetails',
        documentation: 'Determines whether the view mode is in detail mode'
    },
    {
        label: '_GUICtrlListView_GetViewLarge',
        documentation: 'Determines whether the view mode is in large icon mode'
    },
    {
        label: '_GUICtrlListView_GetViewList',
        documentation: 'Determines whether the view mode is in list mode'
    },
    {
        label: '_GUICtrlListView_GetViewRect',
        documentation: 'Retrieves the bounding rectangle of all items in the control'
    },
    {
        label: '_GUICtrlListView_GetViewSmall',
        documentation: 'Determines whether the view mode is in small icon mode'
    },
    {
        label: '_GUICtrlListView_GetViewTile',
        documentation: 'Determines whether the view mode is in tile mode'
    },
    {
        label: '_GUICtrlListView_HideColumn',
        documentation: 'Hides the column "sets column width to zero"'
    },
    {
        label: '_GUICtrlListView_HitTest',
        documentation: 'Determines which item is at a specified position'
    },
    {
        label: '_GUICtrlListView_InsertColumn',
        documentation: 'Inserts a new column in the control'
    },
    {
        label: '_GUICtrlListView_InsertGroup',
        documentation: 'Inserts a group'
    },
    {
        label: '_GUICtrlListView_InsertItem',
        documentation: 'Inserts a new item in the control'
    },
    {
        label: '_GUICtrlListView_JustifyColumn',
        documentation: 'Set Justification of a column for a list-view control'
    },
    {
        label: '_GUICtrlListView_MapIDToIndex',
        documentation: 'Maps the ID of an item to an index'
    },
    {
        label: '_GUICtrlListView_MapIndexToID',
        documentation: 'Maps an index to an item ID'
    },
    {
        label: '_GUICtrlListView_RedrawItems',
        documentation: 'Forces the control to redraw a range of items'
    },
    {
        label: '_GUICtrlListView_RegisterSortCallBack',
        documentation: 'Register the Simple Sort callback function'
    },
    {
        label: '_GUICtrlListView_RemoveAllGroups',
        documentation: 'Removes all groups from the control'
    },
    {
        label: '_GUICtrlListView_RemoveGroup',
        documentation: 'Removes a group from the control'
    },
    {
        label: '_GUICtrlListView_Scroll',
        documentation: 'Scrolls the content of a list-view'
    },
    {
        label: '_GUICtrlListView_SetBkColor',
        documentation: 'Sets the background color of the control'
    },
    {
        label: '_GUICtrlListView_SetBkImage',
        documentation: 'Sets the background image in the control'
    },
    {
        label: '_GUICtrlListView_SetCallBackMask',
        documentation: 'Changes the callback mask for the control'
    },
    {
        label: '_GUICtrlListView_SetColumn',
        documentation: 'Sets the attributes of a column'
    },
    {
        label: '_GUICtrlListView_SetColumnOrder',
        documentation: 'Sets the left-to-right order of columns'
    },
    {
        label: '_GUICtrlListView_SetColumnOrderArray',
        documentation: 'Sets the left-to-right order of columns in the control'
    },
    {
        label: '_GUICtrlListView_SetColumnWidth',
        documentation: 'Changes the width of a column'
    },
    {
        label: '_GUICtrlListView_SetExtendedListViewStyle',
        documentation: 'Sets extended styles'
    },
    {
        label: '_GUICtrlListView_SetGroupInfo',
        documentation: 'Sets group information'
    },
    {
        label: '_GUICtrlListView_SetHotItem',
        documentation: 'Sets the hot item'
    },
    {
        label: '_GUICtrlListView_SetHoverTime',
        documentation: 'Sets the amount of time which the mouse cursor must hover over an item before it is selected'
    },
    {
        label: '_GUICtrlListView_SetIconSpacing',
        documentation: 'Sets the spacing between icons where the style is large icon'
    },
    {
        label: '_GUICtrlListView_SetImageList',
        documentation: 'Assigns an image list to the control'
    },
    {
        label: '_GUICtrlListView_SetItem',
        documentation: 'Sets some or all of a item\'s attributes'
    },
    {
        label: '_GUICtrlListView_SetItemChecked',
        documentation: 'Sets the checked state'
    },
    {
        label: '_GUICtrlListView_SetItemCount',
        documentation: 'Causes the list-view control to allocate memory for the specified number of items'
    },
    {
        label: '_GUICtrlListView_SetItemCut',
        documentation: 'Sets whether the item is marked for a cut-and-paste operation'
    },
    {
        label: '_GUICtrlListView_SetItemDropHilited',
        documentation: 'Sets whether the item is highlighted as a drag-and-drop target'
    },
    {
        label: '_GUICtrlListView_SetItemEx',
        documentation: 'Sets some or all of a item\'s attributes'
    },
    {
        label: '_GUICtrlListView_SetItemFocused',
        documentation: 'Sets whether the item has the focus'
    },
    {
        label: '_GUICtrlListView_SetItemGroupID',
        documentation: 'Sets the item group ID'
    },
    {
        label: '_GUICtrlListView_SetItemImage',
        documentation: 'Sets the index of the item\'s icon in the control\'s image list'
    },
    {
        label: '_GUICtrlListView_SetItemIndent',
        documentation: 'Sets the number of image widths to indent the item'
    },
    {
        label: '_GUICtrlListView_SetItemParam',
        documentation: 'Sets the value specific to the item'
    },
    {
        label: '_GUICtrlListView_SetItemPosition',
        documentation: 'Moves an item to a specified position in the control'
    },
    {
        label: '_GUICtrlListView_SetItemPosition32',
        documentation: 'Moves an item to a specified position in the control'
    },
    {
        label: '_GUICtrlListView_SetItemSelected',
        documentation: 'Sets whether the item is selected'
    },
    {
        label: '_GUICtrlListView_SetItemState',
        documentation: 'Changes the state of an item in the control'
    },
    {
        label: '_GUICtrlListView_SetItemStateImage',
        documentation: 'Sets the state image that is displayed'
    },
    {
        label: '_GUICtrlListView_SetItemText',
        documentation: 'Changes the text of an item or subitem'
    },
    {
        label: '_GUICtrlListView_SetOutlineColor',
        documentation: 'Sets the color of the border'
    },
    {
        label: '_GUICtrlListView_SetSelectedColumn',
        documentation: 'Sets the index of the selected column'
    },
    {
        label: '_GUICtrlListView_SetSelectionMark',
        documentation: 'Sets the selection mark in the control'
    },
    {
        label: '_GUICtrlListView_SetTextBkColor',
        documentation: 'Sets the background color of text in the control'
    },
    {
        label: '_GUICtrlListView_SetTextColor',
        documentation: 'Sets the color of text in the control'
    },
    {
        label: '_GUICtrlListView_SetToolTips',
        documentation: 'Sets the ToolTip control that the control will use to display ToolTips'
    },
    {
        label: '_GUICtrlListView_SetUnicodeFormat',
        documentation: 'Sets the UNICODE character format flag for the control'
    },
    {
        label: '_GUICtrlListView_SetView',
        documentation: 'Sets the view of the control'
    },
    {
        label: '_GUICtrlListView_SetWorkAreas',
        documentation: 'Creates a work area within the control'
    },
    {
        label: '_GUICtrlListView_SimpleSort',
        documentation: 'Sorts a list-view control (limited)'
    },
    {
        label: '_GUICtrlListView_SortItems',
        documentation: 'Starts the sort call back, also sets the Arrow in the Header'
    },
    {
        label: '_GUICtrlListView_SubItemHitTest',
        documentation: 'Determines which listview item or subitem is at a given position'
    },
    {
        label: '_GUICtrlListView_UnRegisterSortCallBack',
        documentation: 'UnRegister the Sort callback function'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiListView UDF - #include <GuiListView.au3>'
}

module.exports = items