'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlListView_AddArray',
        documentation: 'Adds items from an array to the control',
        insertText: '_GUICtrlListView_AddArray(${})'
    },
    {
        label: '_GUICtrlListView_AddColumn',
        documentation: 'Adds a new column in the control',
        insertText: '_GUICtrlListView_AddColumn(${})'
    },
    {
        label: '_GUICtrlListView_AddItem',
        documentation: 'Adds a new item to the end of the list',
        insertText: '_GUICtrlListView_AddItem(${})'
    },
    {
        label: '_GUICtrlListView_AddSubItem',
        documentation: 'Adds a new subitem to the control',
        insertText: '_GUICtrlListView_AddSubItem(${})'
    },
    {
        label: '_GUICtrlListView_ApproximateViewHeight',
        documentation: 'Calculates the approximate height required to display a given number of items',
        insertText: '_GUICtrlListView_ApproximateViewHeight(${})'
    },
    {
        label: '_GUICtrlListView_ApproximateViewRect',
        documentation: 'Calculates the approximate size required to display a given number of items',
        insertText: '_GUICtrlListView_ApproximateViewRect(${})'
    },
    {
        label: '_GUICtrlListView_ApproximateViewWidth',
        documentation: 'Calculates the approximate width required to display a given number of items',
        insertText: '_GUICtrlListView_ApproximateViewWidth(${})'
    },
    {
        label: '_GUICtrlListView_Arrange',
        documentation: 'Arranges items in icon view',
        insertText: '_GUICtrlListView_Arrange(${})'
    },
    {
        label: '_GUICtrlListView_BeginUpdate',
        documentation: 'Prevents updating of the control until the _GUICtrlListView_EndUpdate() function is called',
        insertText: '_GUICtrlListView_BeginUpdate(${})'
    },
    {
        label: '_GUICtrlListView_CancelEditLabel',
        documentation: 'Cancels an item text editing operation',
        insertText: '_GUICtrlListView_CancelEditLabel(${})'
    },
    {
        label: '_GUICtrlListView_ClickItem',
        documentation: 'Clicks an item',
        insertText: '_GUICtrlListView_ClickItem(${})'
    },
    {
        label: '_GUICtrlListView_CopyItems',
        documentation: 'Copy Items between 2 list-view controls',
        insertText: '_GUICtrlListView_CopyItems(${})'
    },
    {
        label: '_GUICtrlListView_Create',
        documentation: 'Create a ListView control',
        insertText: '_GUICtrlListView_Create(${})'
    },
    {
        label: '_GUICtrlListView_CreateDragImage',
        documentation: 'Creates a drag image list for the specified item',
        insertText: '_GUICtrlListView_CreateDragImage(${})'
    },
    {
        label: '_GUICtrlListView_CreateSolidBitMap',
        documentation: 'Creates a solid color bitmap',
        insertText: '_GUICtrlListView_CreateSolidBitMap(${})'
    },
    {
        label: '_GUICtrlListView_DeleteAllItems',
        documentation: 'Removes all items from a list-view control',
        insertText: '_GUICtrlListView_DeleteAllItems(${})'
    },
    {
        label: '_GUICtrlListView_DeleteColumn',
        documentation: 'Removes a column from a list-view control',
        insertText: '_GUICtrlListView_DeleteColumn(${})'
    },
    {
        label: '_GUICtrlListView_DeleteItem',
        documentation: 'Removes an item from a list-view control',
        insertText: '_GUICtrlListView_DeleteItem(${})'
    },
    {
        label: '_GUICtrlListView_DeleteItemsSelected',
        documentation: 'Deletes item(s) selected',
        insertText: '_GUICtrlListView_DeleteItemsSelected(${})'
    },
    {
        label: '_GUICtrlListView_Destroy',
        documentation: 'Delete the listview control',
        insertText: '_GUICtrlListView_Destroy(${})'
    },
    {
        label: '_GUICtrlListView_DrawDragImage',
        documentation: 'Draw the Drag Image',
        insertText: '_GUICtrlListView_DrawDragImage(${})'
    },
    {
        label: '_GUICtrlListView_EditLabel',
        documentation: 'Begins in place editing of the specified item text',
        insertText: '_GUICtrlListView_EditLabel(${})'
    },
    {
        label: '_GUICtrlListView_EnableGroupView',
        documentation: 'Enables or disables whether the items in the control display as a group',
        insertText: '_GUICtrlListView_EnableGroupView(${})'
    },
    {
        label: '_GUICtrlListView_EndUpdate',
        documentation: 'Enables screen repainting that was turned off with the _GUICtrlListView_BeginUpdate() function',
        insertText: '_GUICtrlListView_EndUpdate(${})'
    },
    {
        label: '_GUICtrlListView_EnsureVisible',
        documentation: 'Ensures that a list-view item is either entirely or partially visible',
        insertText: '_GUICtrlListView_EnsureVisible(${})'
    },
    {
        label: '_GUICtrlListView_FindInText',
        documentation: 'Searches for an item that contains the specified text anywhere in its text',
        insertText: '_GUICtrlListView_FindInText(${})'
    },
    {
        label: '_GUICtrlListView_FindItem',
        documentation: 'Searches for an item with the specified characteristics',
        insertText: '_GUICtrlListView_FindItem(${})'
    },
    {
        label: '_GUICtrlListView_FindNearest',
        documentation: 'Finds the item nearest to the position specified',
        insertText: '_GUICtrlListView_FindNearest(${})'
    },
    {
        label: '_GUICtrlListView_FindParam',
        documentation: 'Searches for an item with the specified lParam',
        insertText: '_GUICtrlListView_FindParam(${})'
    },
    {
        label: '_GUICtrlListView_FindText',
        documentation: 'Searches for an item with the specified text',
        insertText: '_GUICtrlListView_FindText(${})'
    },
    {
        label: '_GUICtrlListView_GetBkColor',
        documentation: 'Retrieves the background color of a list-view control',
        insertText: '_GUICtrlListView_GetBkColor(${})'
    },
    {
        label: '_GUICtrlListView_GetBkImage',
        documentation: 'Retrieves the background image in the control',
        insertText: '_GUICtrlListView_GetBkImage(${})'
    },
    {
        label: '_GUICtrlListView_GetCallbackMask',
        documentation: 'Retrieves the callback mask for the control',
        insertText: '_GUICtrlListView_GetCallbackMask(${})'
    },
    {
        label: '_GUICtrlListView_GetColumn',
        documentation: 'Retrieves the attributes of a column',
        insertText: '_GUICtrlListView_GetColumn(${})'
    },
    {
        label: '_GUICtrlListView_GetColumnCount',
        documentation: 'Retrieve the number of columns',
        insertText: '_GUICtrlListView_GetColumnCount(${})'
    },
    {
        label: '_GUICtrlListView_GetColumnOrder',
        documentation: 'Retrieves the current left-to-right order of columns',
        insertText: '_GUICtrlListView_GetColumnOrder(${})'
    },
    {
        label: '_GUICtrlListView_GetColumnOrderArray',
        documentation: 'Retrieves the current left-to-right order of columns in the control',
        insertText: '_GUICtrlListView_GetColumnOrderArray(${})'
    },
    {
        label: '_GUICtrlListView_GetColumnWidth',
        documentation: 'Retrieves the width of a column in report or list view',
        insertText: '_GUICtrlListView_GetColumnWidth(${})'
    },
    {
        label: '_GUICtrlListView_GetCounterPage',
        documentation: 'Calculates the number of items that can fit vertically in the visible area',
        insertText: '_GUICtrlListView_GetCounterPage(${})'
    },
    {
        label: '_GUICtrlListView_GetEditControl',
        documentation: 'Retrieves the handle to the edit control being used to edit an item\'s text',
        insertText: '_GUICtrlListView_GetEditControl(${})'
    },
    {
        label: '_GUICtrlListView_GetExtendedListViewStyle',
        documentation: 'Retrieves the extended styles that are currently in use',
        insertText: '_GUICtrlListView_GetExtendedListViewStyle(${})'
    },
    {
        label: '_GUICtrlListView_GetFocusedGroup',
        documentation: 'Gets the group that has the focus',
        insertText: '_GUICtrlListView_GetFocusedGroup(${})'
    },
    {
        label: '_GUICtrlListView_GetGroupCount',
        documentation: 'Gets the number of groups',
        insertText: '_GUICtrlListView_GetGroupCount(${})'
    },
    {
        label: '_GUICtrlListView_GetGroupInfo',
        documentation: 'Retrieves group information',
        insertText: '_GUICtrlListView_GetGroupInfo(${})'
    },
    {
        label: '_GUICtrlListView_GetGroupInfoByIndex',
        documentation: 'Retrieves group information',
        insertText: '_GUICtrlListView_GetGroupInfoByIndex(${})'
    },
    {
        label: '_GUICtrlListView_GetGroupRect',
        documentation: 'Gets the rectangle for a specified group',
        insertText: '_GUICtrlListView_GetGroupRect(${})'
    },
    {
        label: '_GUICtrlListView_GetGroupViewEnabled',
        documentation: 'Checks whether the control has group view enabled',
        insertText: '_GUICtrlListView_GetGroupViewEnabled(${})'
    },
    {
        label: '_GUICtrlListView_GetHeader',
        documentation: 'Retrieves the handle to the header control',
        insertText: '_GUICtrlListView_GetHeader(${})'
    },
    {
        label: '_GUICtrlListView_GetHotCursor',
        documentation: 'Retrieves the HCURSOR value used when the pointer is over an item while hot tracking is enabled',
        insertText: '_GUICtrlListView_GetHotCursor(${})'
    },
    {
        label: '_GUICtrlListView_GetHotItem',
        documentation: 'Retrieves the index of the hot item',
        insertText: '_GUICtrlListView_GetHotItem(${})'
    },
    {
        label: '_GUICtrlListView_GetHoverTime',
        documentation: 'Retrieves the amount of time that the mouse cursor must hover over an item before it is selected',
        insertText: '_GUICtrlListView_GetHoverTime(${})'
    },
    {
        label: '_GUICtrlListView_GetImageList',
        documentation: 'Retrieves the handle to an image list used for drawing listview items',
        insertText: '_GUICtrlListView_GetImageList(${})'
    },
    {
        label: '_GUICtrlListView_GetISearchString',
        documentation: 'Retrieves the incremental search string of the control',
        insertText: '_GUICtrlListView_GetISearchString(${})'
    },
    {
        label: '_GUICtrlListView_GetItem',
        documentation: 'Retrieves an item\'s attributes',
        insertText: '_GUICtrlListView_GetItem(${})'
    },
    {
        label: '_GUICtrlListView_GetItemChecked',
        documentation: 'Returns the check state for a list-view control item',
        insertText: '_GUICtrlListView_GetItemChecked(${})'
    },
    {
        label: '_GUICtrlListView_GetItemCount',
        documentation: 'Retrieves the number of items in a list-view control',
        insertText: '_GUICtrlListView_GetItemCount(${})'
    },
    {
        label: '_GUICtrlListView_GetItemCut',
        documentation: 'Determines whether the item is marked for a cut and paste operation',
        insertText: '_GUICtrlListView_GetItemCut(${})'
    },
    {
        label: '_GUICtrlListView_GetItemDropHilited',
        documentation: 'Determines whether the item is highlighted as a drag-and-drop target',
        insertText: '_GUICtrlListView_GetItemDropHilited(${})'
    },
    {
        label: '_GUICtrlListView_GetItemEx',
        documentation: 'Retrieves some or all of an item\'s attributes',
        insertText: '_GUICtrlListView_GetItemEx(${})'
    },
    {
        label: '_GUICtrlListView_GetItemFocused',
        documentation: 'Determines whether the item is highlighted as a drag-and-drop target',
        insertText: '_GUICtrlListView_GetItemFocused(${})'
    },
    {
        label: '_GUICtrlListView_GetItemGroupID',
        documentation: 'Gets the item group ID',
        insertText: '_GUICtrlListView_GetItemGroupID(${})'
    },
    {
        label: '_GUICtrlListView_GetItemImage',
        documentation: 'Retrieves the index of the item\'s icon',
        insertText: '_GUICtrlListView_GetItemImage(${})'
    },
    {
        label: '_GUICtrlListView_GetItemIndent',
        documentation: 'Retrieves the number of image widths the item is indented',
        insertText: '_GUICtrlListView_GetItemIndent(${})'
    },
    {
        label: '_GUICtrlListView_GetItemParam',
        documentation: 'Retrieves the application specific value of the item',
        insertText: '_GUICtrlListView_GetItemParam(${})'
    },
    {
        label: '_GUICtrlListView_GetItemPosition',
        documentation: 'Retrieves the position of an item',
        insertText: '_GUICtrlListView_GetItemPosition(${})'
    },
    {
        label: '_GUICtrlListView_GetItemPositionX',
        documentation: 'Retrieves the X position of an item',
        insertText: '_GUICtrlListView_GetItemPositionX(${})'
    },
    {
        label: '_GUICtrlListView_GetItemPositionY',
        documentation: 'Retrieves the Y position of an item',
        insertText: '_GUICtrlListView_GetItemPositionY(${})'
    },
    {
        label: '_GUICtrlListView_GetItemRect',
        documentation: 'Retrieves the bounding rectangle for all or part of an item',
        insertText: '_GUICtrlListView_GetItemRect(${})'
    },
    {
        label: '_GUICtrlListView_GetItemRectEx',
        documentation: 'Retrieves the bounding rectangle for all or part of an item',
        insertText: '_GUICtrlListView_GetItemRectEx(${})'
    },
    {
        label: '_GUICtrlListView_GetItemSelected',
        documentation: 'Determines whether the item is selected',
        insertText: '_GUICtrlListView_GetItemSelected(${})'
    },
    {
        label: '_GUICtrlListView_GetItemSpacing',
        documentation: 'Determines the spacing between items in the control',
        insertText: '_GUICtrlListView_GetItemSpacing(${})'
    },
    {
        label: '_GUICtrlListView_GetItemSpacingX',
        documentation: 'Determines the horizontal spacing between items in the control',
        insertText: '_GUICtrlListView_GetItemSpacingX(${})'
    },
    {
        label: '_GUICtrlListView_GetItemSpacingY',
        documentation: 'Determines the vertical spacing between items in the control',
        insertText: '_GUICtrlListView_GetItemSpacingY(${})'
    },
    {
        label: '_GUICtrlListView_GetItemState',
        documentation: 'Retrieves the state of a listview item',
        insertText: '_GUICtrlListView_GetItemState(${})'
    },
    {
        label: '_GUICtrlListView_GetItemStateImage',
        documentation: 'Gets the state image that is displayed',
        insertText: '_GUICtrlListView_GetItemStateImage(${})'
    },
    {
        label: '_GUICtrlListView_GetItemText',
        documentation: 'Retrieves the text of an item or subitem',
        insertText: '_GUICtrlListView_GetItemText(${})'
    },
    {
        label: '_GUICtrlListView_GetItemTextArray',
        documentation: 'Retrieves all of a list-view item',
        insertText: '_GUICtrlListView_GetItemTextArray(${})'
    },
    {
        label: '_GUICtrlListView_GetItemTextString',
        documentation: 'Retrieves all of a list-view item',
        insertText: '_GUICtrlListView_GetItemTextString(${})'
    },
    {
        label: '_GUICtrlListView_GetNextItem',
        documentation: 'Searches for an item that has the specified properties',
        insertText: '_GUICtrlListView_GetNextItem(${})'
    },
    {
        label: '_GUICtrlListView_GetNumberOfWorkAreas',
        documentation: 'Retrieves the number of working areas in the control',
        insertText: '_GUICtrlListView_GetNumberOfWorkAreas(${})'
    },
    {
        label: '_GUICtrlListView_GetOrigin',
        documentation: 'Retrieves the current view origin for the control',
        insertText: '_GUICtrlListView_GetOrigin(${})'
    },
    {
        label: '_GUICtrlListView_GetOriginX',
        documentation: 'Retrieves the current horizontal view origin for the control',
        insertText: '_GUICtrlListView_GetOriginX(${})'
    },
    {
        label: '_GUICtrlListView_GetOriginY',
        documentation: 'Retrieves the current vertical view origin for the control',
        insertText: '_GUICtrlListView_GetOriginY(${})'
    },
    {
        label: '_GUICtrlListView_GetOutlineColor',
        documentation: 'Retrieves the color of the border of the control',
        insertText: '_GUICtrlListView_GetOutlineColor(${})'
    },
    {
        label: '_GUICtrlListView_GetSelectedColumn',
        documentation: 'Retrieves the index of the selected column',
        insertText: '_GUICtrlListView_GetSelectedColumn(${})'
    },
    {
        label: '_GUICtrlListView_GetSelectedCount',
        documentation: 'Determines the number of selected items',
        insertText: '_GUICtrlListView_GetSelectedCount(${})'
    },
    {
        label: '_GUICtrlListView_GetSelectedIndices',
        documentation: 'Retrieve indices of selected item(s)',
        insertText: '_GUICtrlListView_GetSelectedIndices(${})'
    },
    {
        label: '_GUICtrlListView_GetSelectionMark',
        documentation: 'Retrieves the selection mark from the control',
        insertText: '_GUICtrlListView_GetSelectionMark(${})'
    },
    {
        label: '_GUICtrlListView_GetStringWidth',
        documentation: 'Determines the width of a specified string',
        insertText: '_GUICtrlListView_GetStringWidth(${})'
    },
    {
        label: '_GUICtrlListView_GetSubItemRect',
        documentation: 'Retrieves information about an item bounding rectangle',
        insertText: '_GUICtrlListView_GetSubItemRect(${})'
    },
    {
        label: '_GUICtrlListView_GetTextBkColor',
        documentation: 'Retrieves the text background color of the control',
        insertText: '_GUICtrlListView_GetTextBkColor(${})'
    },
    {
        label: '_GUICtrlListView_GetTextColor',
        documentation: 'Retrieves the text color of the control',
        insertText: '_GUICtrlListView_GetTextColor(${})'
    },
    {
        label: '_GUICtrlListView_GetToolTips',
        documentation: 'Retrieves the ToolTip control handle',
        insertText: '_GUICtrlListView_GetToolTips(${})'
    },
    {
        label: '_GUICtrlListView_GetTopIndex',
        documentation: 'Retrieves the index of the topmost visible item when in list or report view',
        insertText: '_GUICtrlListView_GetTopIndex(${})'
    },
    {
        label: '_GUICtrlListView_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control',
        insertText: '_GUICtrlListView_GetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlListView_GetView',
        documentation: 'Retrieves the current view of the control',
        insertText: '_GUICtrlListView_GetView(${})'
    },
    {
        label: '_GUICtrlListView_GetViewDetails',
        documentation: 'Determines whether the view mode is in detail mode',
        insertText: '_GUICtrlListView_GetViewDetails(${})'
    },
    {
        label: '_GUICtrlListView_GetViewLarge',
        documentation: 'Determines whether the view mode is in large icon mode',
        insertText: '_GUICtrlListView_GetViewLarge(${})'
    },
    {
        label: '_GUICtrlListView_GetViewList',
        documentation: 'Determines whether the view mode is in list mode',
        insertText: '_GUICtrlListView_GetViewList(${})'
    },
    {
        label: '_GUICtrlListView_GetViewRect',
        documentation: 'Retrieves the bounding rectangle of all items in the control',
        insertText: '_GUICtrlListView_GetViewRect(${})'
    },
    {
        label: '_GUICtrlListView_GetViewSmall',
        documentation: 'Determines whether the view mode is in small icon mode',
        insertText: '_GUICtrlListView_GetViewSmall(${})'
    },
    {
        label: '_GUICtrlListView_GetViewTile',
        documentation: 'Determines whether the view mode is in tile mode',
        insertText: '_GUICtrlListView_GetViewTile(${})'
    },
    {
        label: '_GUICtrlListView_HideColumn',
        documentation: 'Hides the column "sets column width to zero"',
        insertText: '_GUICtrlListView_HideColumn(${})'
    },
    {
        label: '_GUICtrlListView_HitTest',
        documentation: 'Determines which item is at a specified position',
        insertText: '_GUICtrlListView_HitTest(${})'
    },
    {
        label: '_GUICtrlListView_InsertColumn',
        documentation: 'Inserts a new column in the control',
        insertText: '_GUICtrlListView_InsertColumn(${})'
    },
    {
        label: '_GUICtrlListView_InsertGroup',
        documentation: 'Inserts a group',
        insertText: '_GUICtrlListView_InsertGroup(${})'
    },
    {
        label: '_GUICtrlListView_InsertItem',
        documentation: 'Inserts a new item in the control',
        insertText: '_GUICtrlListView_InsertItem(${})'
    },
    {
        label: '_GUICtrlListView_JustifyColumn',
        documentation: 'Set Justification of a column for a list-view control',
        insertText: '_GUICtrlListView_JustifyColumn(${})'
    },
    {
        label: '_GUICtrlListView_MapIDToIndex',
        documentation: 'Maps the ID of an item to an index',
        insertText: '_GUICtrlListView_MapIDToIndex(${})'
    },
    {
        label: '_GUICtrlListView_MapIndexToID',
        documentation: 'Maps an index to an item ID',
        insertText: '_GUICtrlListView_MapIndexToID(${})'
    },
    {
        label: '_GUICtrlListView_RedrawItems',
        documentation: 'Forces the control to redraw a range of items',
        insertText: '_GUICtrlListView_RedrawItems(${})'
    },
    {
        label: '_GUICtrlListView_RegisterSortCallBack',
        documentation: 'Register the Simple Sort callback function',
        insertText: '_GUICtrlListView_RegisterSortCallBack(${})'
    },
    {
        label: '_GUICtrlListView_RemoveAllGroups',
        documentation: 'Removes all groups from the control',
        insertText: '_GUICtrlListView_RemoveAllGroups(${})'
    },
    {
        label: '_GUICtrlListView_RemoveGroup',
        documentation: 'Removes a group from the control',
        insertText: '_GUICtrlListView_RemoveGroup(${})'
    },
    {
        label: '_GUICtrlListView_Scroll',
        documentation: 'Scrolls the content of a list-view',
        insertText: '_GUICtrlListView_Scroll(${})'
    },
    {
        label: '_GUICtrlListView_SetBkColor',
        documentation: 'Sets the background color of the control',
        insertText: '_GUICtrlListView_SetBkColor(${})'
    },
    {
        label: '_GUICtrlListView_SetBkImage',
        documentation: 'Sets the background image in the control',
        insertText: '_GUICtrlListView_SetBkImage(${})'
    },
    {
        label: '_GUICtrlListView_SetCallBackMask',
        documentation: 'Changes the callback mask for the control',
        insertText: '_GUICtrlListView_SetCallBackMask(${})'
    },
    {
        label: '_GUICtrlListView_SetColumn',
        documentation: 'Sets the attributes of a column',
        insertText: '_GUICtrlListView_SetColumn(${})'
    },
    {
        label: '_GUICtrlListView_SetColumnOrder',
        documentation: 'Sets the left-to-right order of columns',
        insertText: '_GUICtrlListView_SetColumnOrder(${})'
    },
    {
        label: '_GUICtrlListView_SetColumnOrderArray',
        documentation: 'Sets the left-to-right order of columns in the control',
        insertText: '_GUICtrlListView_SetColumnOrderArray(${})'
    },
    {
        label: '_GUICtrlListView_SetColumnWidth',
        documentation: 'Changes the width of a column',
        insertText: '_GUICtrlListView_SetColumnWidth(${})'
    },
    {
        label: '_GUICtrlListView_SetExtendedListViewStyle',
        documentation: 'Sets extended styles',
        insertText: '_GUICtrlListView_SetExtendedListViewStyle(${})'
    },
    {
        label: '_GUICtrlListView_SetGroupInfo',
        documentation: 'Sets group information',
        insertText: '_GUICtrlListView_SetGroupInfo(${})'
    },
    {
        label: '_GUICtrlListView_SetHotItem',
        documentation: 'Sets the hot item',
        insertText: '_GUICtrlListView_SetHotItem(${})'
    },
    {
        label: '_GUICtrlListView_SetHoverTime',
        documentation: 'Sets the amount of time which the mouse cursor must hover over an item before it is selected',
        insertText: '_GUICtrlListView_SetHoverTime(${})'
    },
    {
        label: '_GUICtrlListView_SetIconSpacing',
        documentation: 'Sets the spacing between icons where the style is large icon',
        insertText: '_GUICtrlListView_SetIconSpacing(${})'
    },
    {
        label: '_GUICtrlListView_SetImageList',
        documentation: 'Assigns an image list to the control',
        insertText: '_GUICtrlListView_SetImageList(${})'
    },
    {
        label: '_GUICtrlListView_SetItem',
        documentation: 'Sets some or all of a item\'s attributes',
        insertText: '_GUICtrlListView_SetItem(${})'
    },
    {
        label: '_GUICtrlListView_SetItemChecked',
        documentation: 'Sets the checked state',
        insertText: '_GUICtrlListView_SetItemChecked(${})'
    },
    {
        label: '_GUICtrlListView_SetItemCount',
        documentation: 'Causes the list-view control to allocate memory for the specified number of items',
        insertText: '_GUICtrlListView_SetItemCount(${})'
    },
    {
        label: '_GUICtrlListView_SetItemCut',
        documentation: 'Sets whether the item is marked for a cut-and-paste operation',
        insertText: '_GUICtrlListView_SetItemCut(${})'
    },
    {
        label: '_GUICtrlListView_SetItemDropHilited',
        documentation: 'Sets whether the item is highlighted as a drag-and-drop target',
        insertText: '_GUICtrlListView_SetItemDropHilited(${})'
    },
    {
        label: '_GUICtrlListView_SetItemEx',
        documentation: 'Sets some or all of a item\'s attributes',
        insertText: '_GUICtrlListView_SetItemEx(${})'
    },
    {
        label: '_GUICtrlListView_SetItemFocused',
        documentation: 'Sets whether the item has the focus',
        insertText: '_GUICtrlListView_SetItemFocused(${})'
    },
    {
        label: '_GUICtrlListView_SetItemGroupID',
        documentation: 'Sets the item group ID',
        insertText: '_GUICtrlListView_SetItemGroupID(${})'
    },
    {
        label: '_GUICtrlListView_SetItemImage',
        documentation: 'Sets the index of the item\'s icon in the control\'s image list',
        insertText: '_GUICtrlListView_SetItemImage(${})'
    },
    {
        label: '_GUICtrlListView_SetItemIndent',
        documentation: 'Sets the number of image widths to indent the item',
        insertText: '_GUICtrlListView_SetItemIndent(${})'
    },
    {
        label: '_GUICtrlListView_SetItemParam',
        documentation: 'Sets the value specific to the item',
        insertText: '_GUICtrlListView_SetItemParam(${})'
    },
    {
        label: '_GUICtrlListView_SetItemPosition',
        documentation: 'Moves an item to a specified position in the control',
        insertText: '_GUICtrlListView_SetItemPosition(${})'
    },
    {
        label: '_GUICtrlListView_SetItemPosition32',
        documentation: 'Moves an item to a specified position in the control',
        insertText: '_GUICtrlListView_SetItemPosition32(${})'
    },
    {
        label: '_GUICtrlListView_SetItemSelected',
        documentation: 'Sets whether the item is selected',
        insertText: '_GUICtrlListView_SetItemSelected(${})'
    },
    {
        label: '_GUICtrlListView_SetItemState',
        documentation: 'Changes the state of an item in the control',
        insertText: '_GUICtrlListView_SetItemState(${})'
    },
    {
        label: '_GUICtrlListView_SetItemStateImage',
        documentation: 'Sets the state image that is displayed',
        insertText: '_GUICtrlListView_SetItemStateImage(${})'
    },
    {
        label: '_GUICtrlListView_SetItemText',
        documentation: 'Changes the text of an item or subitem',
        insertText: '_GUICtrlListView_SetItemText(${})'
    },
    {
        label: '_GUICtrlListView_SetOutlineColor',
        documentation: 'Sets the color of the border',
        insertText: '_GUICtrlListView_SetOutlineColor(${})'
    },
    {
        label: '_GUICtrlListView_SetSelectedColumn',
        documentation: 'Sets the index of the selected column',
        insertText: '_GUICtrlListView_SetSelectedColumn(${})'
    },
    {
        label: '_GUICtrlListView_SetSelectionMark',
        documentation: 'Sets the selection mark in the control',
        insertText: '_GUICtrlListView_SetSelectionMark(${})'
    },
    {
        label: '_GUICtrlListView_SetTextBkColor',
        documentation: 'Sets the background color of text in the control',
        insertText: '_GUICtrlListView_SetTextBkColor(${})'
    },
    {
        label: '_GUICtrlListView_SetTextColor',
        documentation: 'Sets the color of text in the control',
        insertText: '_GUICtrlListView_SetTextColor(${})'
    },
    {
        label: '_GUICtrlListView_SetToolTips',
        documentation: 'Sets the ToolTip control that the control will use to display ToolTips',
        insertText: '_GUICtrlListView_SetToolTips(${})'
    },
    {
        label: '_GUICtrlListView_SetUnicodeFormat',
        documentation: 'Sets the UNICODE character format flag for the control',
        insertText: '_GUICtrlListView_SetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlListView_SetView',
        documentation: 'Sets the view of the control',
        insertText: '_GUICtrlListView_SetView(${})'
    },
    {
        label: '_GUICtrlListView_SetWorkAreas',
        documentation: 'Creates a work area within the control',
        insertText: '_GUICtrlListView_SetWorkAreas(${})'
    },
    {
        label: '_GUICtrlListView_SimpleSort',
        documentation: 'Sorts a list-view control (limited)',
        insertText: '_GUICtrlListView_SimpleSort(${})'
    },
    {
        label: '_GUICtrlListView_SortItems',
        documentation: 'Starts the sort call back, also sets the Arrow in the Header',
        insertText: '_GUICtrlListView_SortItems(${})'
    },
    {
        label: '_GUICtrlListView_SubItemHitTest',
        documentation: 'Determines which listview item or subitem is at a given position',
        insertText: '_GUICtrlListView_SubItemHitTest(${})'
    },
    {
        label: '_GUICtrlListView_UnRegisterSortCallBack',
        documentation: 'UnRegister the Sort callback function',
        insertText: '_GUICtrlListView_UnRegisterSortCallBack(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiListView UDF - #include <GuiListView.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items