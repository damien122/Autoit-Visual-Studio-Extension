'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlMenu_AddMenuItem',
        documentation: 'Adds a new menu item to the end of the menu'
    },
    {
        label: '_GUICtrlMenu_AppendMenu',
        documentation: 'Appends a new item to the end of the specified menu bar, drop-down menu, submenu, or shortcut menu'
    },
    {
        label: '_GUICtrlMenu_CalculatePopupWindowPosition',
        documentation: 'Calculates an appropriate pop-up window position'
    },
    {
        label: '_GUICtrlMenu_CheckMenuItem',
        documentation: 'Sets the state of the specified menu item\'s check mark attribute to either selected or clear'
    },
    {
        label: '_GUICtrlMenu_CheckRadioItem',
        documentation: 'Checks a specified menu item and makes it a radio item'
    },
    {
        label: '_GUICtrlMenu_CreateMenu',
        documentation: 'Creates a menu'
    },
    {
        label: '_GUICtrlMenu_CreatePopup',
        documentation: 'Creates a drop down menu, submenu, or shortcut menu'
    },
    {
        label: '_GUICtrlMenu_DeleteMenu',
        documentation: 'Deletes an item from the specified menu'
    },
    {
        label: '_GUICtrlMenu_DestroyMenu',
        documentation: 'Destroys the specified menu and frees any memory that the menu occupies'
    },
    {
        label: '_GUICtrlMenu_DrawMenuBar',
        documentation: 'Redraws the menu bar of the specified window'
    },
    {
        label: '_GUICtrlMenu_EnableMenuItem',
        documentation: 'Enables, disables, or grays the specified menu item'
    },
    {
        label: '_GUICtrlMenu_FindItem',
        documentation: 'Retrieves a menu item based on it\'s text'
    },
    {
        label: '_GUICtrlMenu_FindParent',
        documentation: 'Retrieves the window to which a menu belongs'
    },
    {
        label: '_GUICtrlMenu_GetItemBmp',
        documentation: 'Retrieves the bitmap displayed for the item'
    },
    {
        label: '_GUICtrlMenu_GetItemBmpChecked',
        documentation: 'Retrieves the bitmap displayed if the item is selected'
    },
    {
        label: '_GUICtrlMenu_GetItemBmpUnchecked',
        documentation: 'Retrieves the bitmap displayed if the item is not selected'
    },
    {
        label: '_GUICtrlMenu_GetItemChecked',
        documentation: 'Retrieves the status of the menu item checked state'
    },
    {
        label: '_GUICtrlMenu_GetItemCount',
        documentation: 'Retrieves the number of items in the specified menu'
    },
    {
        label: '_GUICtrlMenu_GetItemData',
        documentation: 'Retrieves the application defined value associated with the menu item'
    },
    {
        label: '_GUICtrlMenu_GetItemDefault',
        documentation: 'Retrieves the status of the menu item default state'
    },
    {
        label: '_GUICtrlMenu_GetItemDisabled',
        documentation: 'Retrieves the status of the menu item disabled state'
    },
    {
        label: '_GUICtrlMenu_GetItemEnabled',
        documentation: 'Retrieves the status of the menu item enabled state'
    },
    {
        label: '_GUICtrlMenu_GetItemGrayed',
        documentation: 'Retrieves the status of the menu item grayed state'
    },
    {
        label: '_GUICtrlMenu_GetItemHighlighted',
        documentation: 'Retrieves the status of the menu item highlighted state'
    },
    {
        label: '_GUICtrlMenu_GetItemID',
        documentation: 'Retrieves the menu item ID'
    },
    {
        label: '_GUICtrlMenu_GetItemInfo',
        documentation: 'Retrieves information about a menu item'
    },
    {
        label: '_GUICtrlMenu_GetItemRect',
        documentation: 'Retrieves the bounding rectangle for the specified menu item'
    },
    {
        label: '_GUICtrlMenu_GetItemRectEx',
        documentation: 'Retrieves the bounding rectangle for the specified menu item'
    },
    {
        label: '_GUICtrlMenu_GetItemState',
        documentation: 'Retrieves the menu item state'
    },
    {
        label: '_GUICtrlMenu_GetItemStateEx',
        documentation: 'Retrieves the menu flags associated with the specified menu item'
    },
    {
        label: '_GUICtrlMenu_GetItemSubMenu',
        documentation: 'Retrieves a the submenu activated by a specified item'
    },
    {
        label: '_GUICtrlMenu_GetItemText',
        documentation: 'Retrieves the text of the specified menu item'
    },
    {
        label: '_GUICtrlMenu_GetItemType',
        documentation: 'Retrieves the menu item type'
    },
    {
        label: '_GUICtrlMenu_GetMenu',
        documentation: 'Retrieves the handle of the menu assigned to the given window'
    },
    {
        label: '_GUICtrlMenu_GetMenuBackground',
        documentation: 'Retrieves the brush to use for the menu\'s background'
    },
    {
        label: '_GUICtrlMenu_GetMenuBarInfo',
        documentation: 'Retrieves information about the specified menu bar'
    },
    {
        label: '_GUICtrlMenu_GetMenuContextHelpID',
        documentation: 'Retrieves the context help identifier'
    },
    {
        label: '_GUICtrlMenu_GetMenuData',
        documentation: 'Retrieves the application defined value'
    },
    {
        label: '_GUICtrlMenu_GetMenuDefaultItem',
        documentation: 'Retrieves the default menu item on the specified menu'
    },
    {
        label: '_GUICtrlMenu_GetMenuHeight',
        documentation: 'Retrieves the maximum height of a menu'
    },
    {
        label: '_GUICtrlMenu_GetMenuInfo',
        documentation: 'Retrieves information about a specified menu'
    },
    {
        label: '_GUICtrlMenu_GetMenuStyle',
        documentation: 'Retrieves the style information for a menu'
    },
    {
        label: '_GUICtrlMenu_GetSystemMenu',
        documentation: 'Allows the application to access the window menu for copying and modifying'
    },
    {
        label: '_GUICtrlMenu_InsertMenuItem',
        documentation: 'Inserts a new menu item at the specified position'
    },
    {
        label: '_GUICtrlMenu_InsertMenuItemEx',
        documentation: 'Inserts a new menu item at the specified position in a menu'
    },
    {
        label: '_GUICtrlMenu_IsMenu',
        documentation: 'Determines whether a handle is a menu handle'
    },
    {
        label: '_GUICtrlMenu_LoadMenu',
        documentation: 'Loads the specified menu resource from the executable file associated with an application instance'
    },
    {
        label: '_GUICtrlMenu_MapAccelerator',
        documentation: 'Maps a menu accelerator key to it\'s position in the menu'
    },
    {
        label: '_GUICtrlMenu_MenuItemFromPoint',
        documentation: 'Determines which menu item is at the specified location'
    },
    {
        label: '_GUICtrlMenu_RemoveMenu',
        documentation: 'Deletes a menu item or detaches a submenu from the specified menu'
    },
    {
        label: '_GUICtrlMenu_SetItemBitmaps',
        documentation: 'Associates the specified bitmap with a menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemBmp',
        documentation: 'Sets the bitmap displayed for the item'
    },
    {
        label: '_GUICtrlMenu_SetItemBmpChecked',
        documentation: 'Sets the bitmap displayed if the item is selected'
    },
    {
        label: '_GUICtrlMenu_SetItemBmpUnchecked',
        documentation: 'Sets the bitmap displayed if the item is not selected'
    },
    {
        label: '_GUICtrlMenu_SetItemChecked',
        documentation: 'Sets the checked state of a menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemData',
        documentation: 'Sets the application defined value for a menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemDefault',
        documentation: 'Sets the status of the menu item default state'
    },
    {
        label: '_GUICtrlMenu_SetItemDisabled',
        documentation: 'Sets the disabled state of a menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemEnabled',
        documentation: 'Sets the enabled state of a menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemGrayed',
        documentation: 'Sets the grayed state of a menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemHighlighted',
        documentation: 'Sets the highlighted state of a menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemID',
        documentation: 'Sets the menu item ID'
    },
    {
        label: '_GUICtrlMenu_SetItemInfo',
        documentation: 'Changes information about a menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemState',
        documentation: 'Sets the state of a menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemSubMenu',
        documentation: 'Sets the drop down menu or submenu associated with the menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemText',
        documentation: 'Sets the text for a menu item'
    },
    {
        label: '_GUICtrlMenu_SetItemType',
        documentation: 'Sets the menu item type'
    },
    {
        label: '_GUICtrlMenu_SetMenu',
        documentation: 'Assigns a new menu to the specified window'
    },
    {
        label: '_GUICtrlMenu_SetMenuBackground',
        documentation: 'Sets the background brush for the menu'
    },
    {
        label: '_GUICtrlMenu_SetMenuContextHelpID',
        documentation: 'Sets the context help identifier for the menu'
    },
    {
        label: '_GUICtrlMenu_SetMenuData',
        documentation: 'Sets the application defined for the menu'
    },
    {
        label: '_GUICtrlMenu_SetMenuDefaultItem',
        documentation: 'Sets the default menu item'
    },
    {
        label: '_GUICtrlMenu_SetMenuHeight',
        documentation: 'Sets the maximum height of the menu'
    },
    {
        label: '_GUICtrlMenu_SetMenuInfo',
        documentation: 'Sets information for a specified menu'
    },
    {
        label: '_GUICtrlMenu_SetMenuStyle',
        documentation: 'Sets the menu style'
    },
    {
        label: '_GUICtrlMenu_TrackPopupMenu',
        documentation: 'Displays a shortcut menu at the specified location '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiMenu UDF - #include <GuiMenu.au3>'
}

module.exports = items