'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlToolbar_AddBitmap',
        documentation: 'Adds images to the image list'
    },
    {
        label: '_GUICtrlToolbar_AddButton',
        documentation: 'Adds a button'
    },
    {
        label: '_GUICtrlToolbar_AddButtonSep',
        documentation: 'Adds a separator'
    },
    {
        label: '_GUICtrlToolbar_AddString',
        documentation: 'Adds a new string to the toolbar\'s string pool'
    },
    {
        label: '_GUICtrlToolbar_ButtonCount',
        documentation: 'Retrieves a count of the buttons'
    },
    {
        label: '_GUICtrlToolbar_CheckButton',
        documentation: 'Checks or unchecks a given button'
    },
    {
        label: '_GUICtrlToolbar_ClickAccel',
        documentation: 'Clicks a specific button using it\'s accelerator'
    },
    {
        label: '_GUICtrlToolbar_ClickButton',
        documentation: 'Clicks a specific button'
    },
    {
        label: '_GUICtrlToolbar_ClickIndex',
        documentation: 'Clicks a specific button using it\'s index'
    },
    {
        label: '_GUICtrlToolbar_CommandToIndex',
        documentation: 'Retrieves the index for the button associated with the specified command identifier'
    },
    {
        label: '_GUICtrlToolbar_Create',
        documentation: 'Create a Toolbar control'
    },
    {
        label: '_GUICtrlToolbar_Customize',
        documentation: 'Displays the Customize Toolbar dialog box'
    },
    {
        label: '_GUICtrlToolbar_DeleteButton',
        documentation: 'Deletes a button from the toolbar'
    },
    {
        label: '_GUICtrlToolbar_Destroy',
        documentation: 'Delete the control'
    },
    {
        label: '_GUICtrlToolbar_EnableButton',
        documentation: 'Enables or disables the specified button'
    },
    {
        label: '_GUICtrlToolbar_FindToolbar',
        documentation: 'Finds a specific toolbar'
    },
    {
        label: '_GUICtrlToolbar_GetAnchorHighlight',
        documentation: 'Retrieves the anchor highlight setting'
    },
    {
        label: '_GUICtrlToolbar_GetBitmapFlags',
        documentation: 'Retrieves the flags that describe the type of bitmap to be used'
    },
    {
        label: '_GUICtrlToolbar_GetButtonBitmap',
        documentation: 'Retrieves the index of the bitmap associated with a button'
    },
    {
        label: '_GUICtrlToolbar_GetButtonInfo',
        documentation: 'Retrieves information for a button'
    },
    {
        label: '_GUICtrlToolbar_GetButtonInfoEx',
        documentation: 'Retrieves extended information for a button'
    },
    {
        label: '_GUICtrlToolbar_GetButtonParam',
        documentation: 'Retrieves the button param value'
    },
    {
        label: '_GUICtrlToolbar_GetButtonRect',
        documentation: 'Retrieves the bounding rectangle for a button'
    },
    {
        label: '_GUICtrlToolbar_GetButtonRectEx',
        documentation: 'Retrieves the bounding rectangle for a specified toolbar button'
    },
    {
        label: '_GUICtrlToolbar_GetButtonSize',
        documentation: 'Retrieves the current button width and height, in pixels'
    },
    {
        label: '_GUICtrlToolbar_GetButtonState',
        documentation: 'Retrieves information about the state of the specified button'
    },
    {
        label: '_GUICtrlToolbar_GetButtonStyle',
        documentation: 'Retrieves the style flags of a button'
    },
    {
        label: '_GUICtrlToolbar_GetButtonText',
        documentation: 'Retrieves the display text of a button'
    },
    {
        label: '_GUICtrlToolbar_GetColorScheme',
        documentation: 'Retrieves the color scheme information'
    },
    {
        label: '_GUICtrlToolbar_GetDisabledImageList',
        documentation: 'Retrieves the disabled button image list'
    },
    {
        label: '_GUICtrlToolbar_GetExtendedStyle',
        documentation: 'Retrieves the extended styles'
    },
    {
        label: '_GUICtrlToolbar_GetHotImageList',
        documentation: 'Retrieves the hot button image list'
    },
    {
        label: '_GUICtrlToolbar_GetHotItem',
        documentation: 'Retrieves the index of the hot item'
    },
    {
        label: '_GUICtrlToolbar_GetImageList',
        documentation: 'Retrieves the default state image list'
    },
    {
        label: '_GUICtrlToolbar_GetInsertMark',
        documentation: 'Retrieves the current insertion mark'
    },
    {
        label: '_GUICtrlToolbar_GetInsertMarkColor',
        documentation: 'Retrieves the color used to draw the insertion mark'
    },
    {
        label: '_GUICtrlToolbar_GetMaxSize',
        documentation: 'Retrieves the total size of all of the visible buttons and separators'
    },
    {
        label: '_GUICtrlToolbar_GetMetrics',
        documentation: 'Retrieves the metrics of a toolbar control'
    },
    {
        label: '_GUICtrlToolbar_GetPadding',
        documentation: 'Retrieves the horizontal and vertical padding'
    },
    {
        label: '_GUICtrlToolbar_GetRows',
        documentation: 'Retrieves the number of rows of buttons'
    },
    {
        label: '_GUICtrlToolbar_GetString',
        documentation: 'Retrieves a string from the string pool'
    },
    {
        label: '_GUICtrlToolbar_GetStyle',
        documentation: 'Retrieves the styles currently in use for a toolbar control'
    },
    {
        label: '_GUICtrlToolbar_GetStyleAltDrag',
        documentation: 'Indicates that the control allows buttons to be dragged'
    },
    {
        label: '_GUICtrlToolbar_GetStyleCustomErase',
        documentation: 'Indicates that the control generates NM_CUSTOMDRAW notification messages'
    },
    {
        label: '_GUICtrlToolbar_GetStyleFlat',
        documentation: 'Indicates that the control is flat'
    },
    {
        label: '_GUICtrlToolbar_GetStyleList',
        documentation: 'Indicates that the control has button text to the right of the bitmap'
    },
    {
        label: '_GUICtrlToolbar_GetStyleRegisterDrop',
        documentation: 'Indicates that the control generates TBN_GETOBJECT notification messages'
    },
    {
        label: '_GUICtrlToolbar_GetStyleToolTips',
        documentation: 'Indicates that the control has tooltips'
    },
    {
        label: '_GUICtrlToolbar_GetStyleTransparent',
        documentation: 'Indicates that the control is transparent'
    },
    {
        label: '_GUICtrlToolbar_GetStyleWrapable',
        documentation: 'Indicates that the control is wrapable'
    },
    {
        label: '_GUICtrlToolbar_GetTextRows',
        documentation: 'Retrieves the maximum number of text rows that can be displayed on a button'
    },
    {
        label: '_GUICtrlToolbar_GetToolTips',
        documentation: 'Retrieves the handle to the ToolTip control'
    },
    {
        label: '_GUICtrlToolbar_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag'
    },
    {
        label: '_GUICtrlToolbar_HideButton',
        documentation: 'Hides or shows the specified button'
    },
    {
        label: '_GUICtrlToolbar_HighlightButton',
        documentation: 'Sets the highlight state of a given button control'
    },
    {
        label: '_GUICtrlToolbar_HitTest',
        documentation: 'Determines where a point lies within the control'
    },
    {
        label: '_GUICtrlToolbar_IndexToCommand',
        documentation: 'Retrieves the command identifier associated with the button'
    },
    {
        label: '_GUICtrlToolbar_InsertButton',
        documentation: 'Inserts a button'
    },
    {
        label: '_GUICtrlToolbar_InsertMarkHitTest',
        documentation: 'Retrieves the insertion mark information for a point'
    },
    {
        label: '_GUICtrlToolbar_IsButtonChecked',
        documentation: 'Indicates whether the specified button is checked'
    },
    {
        label: '_GUICtrlToolbar_IsButtonEnabled',
        documentation: 'Indicates whether the specified button is enabled'
    },
    {
        label: '_GUICtrlToolbar_IsButtonHidden',
        documentation: 'Indicates whether the specified button is hidden'
    },
    {
        label: '_GUICtrlToolbar_IsButtonHighlighted',
        documentation: 'Indicates whether the specified button is hilighted'
    },
    {
        label: '_GUICtrlToolbar_IsButtonIndeterminate',
        documentation: 'Indicates whether the specified button is indeterminate'
    },
    {
        label: '_GUICtrlToolbar_IsButtonPressed',
        documentation: 'Indicates that the button is being clicked'
    },
    {
        label: '_GUICtrlToolbar_LoadBitmap',
        documentation: 'Adds a bitmap to the image list from a file'
    },
    {
        label: '_GUICtrlToolbar_LoadImages',
        documentation: 'Loads system defined button images into a toolbar control\'s image list'
    },
    {
        label: '_GUICtrlToolbar_MapAccelerator',
        documentation: 'Determines the ID of the button that corresponds to the specified accelerator'
    },
    {
        label: '_GUICtrlToolbar_MoveButton',
        documentation: 'Moves a button from one index to another'
    },
    {
        label: '_GUICtrlToolbar_PressButton',
        documentation: 'Presses or releases the specified button'
    },
    {
        label: '_GUICtrlToolbar_SetAnchorHighlight',
        documentation: 'Sets the anchor highlight setting'
    },
    {
        label: '_GUICtrlToolbar_SetBitmapSize',
        documentation: 'Sets the size of the bitmapped images to be added to a toolbar'
    },
    {
        label: '_GUICtrlToolbar_SetButtonBitMap',
        documentation: 'Sets the index of the bitmap associated with a button'
    },
    {
        label: '_GUICtrlToolbar_SetButtonInfo',
        documentation: 'Sets information for a button'
    },
    {
        label: '_GUICtrlToolbar_SetButtonInfoEx',
        documentation: 'Sets extended information for a button'
    },
    {
        label: '_GUICtrlToolbar_SetButtonParam',
        documentation: 'Sets the button param value'
    },
    {
        label: '_GUICtrlToolbar_SetButtonSize',
        documentation: 'Sets the size of the buttons to be added to a toolbar'
    },
    {
        label: '_GUICtrlToolbar_SetButtonState',
        documentation: 'Sets information about the state of the specified button'
    },
    {
        label: '_GUICtrlToolbar_SetButtonStyle',
        documentation: 'Sets the style flags of a button'
    },
    {
        label: '_GUICtrlToolbar_SetButtonText',
        documentation: 'Sets the display text of a button'
    },
    {
        label: '_GUICtrlToolbar_SetButtonWidth',
        documentation: 'Sets the minimum and maximum button widths in the toolbar control'
    },
    {
        label: '_GUICtrlToolbar_SetCmdID',
        documentation: 'Sets the command identifier of a toolbar button'
    },
    {
        label: '_GUICtrlToolbar_SetColorScheme',
        documentation: 'Sets the color scheme information'
    },
    {
        label: '_GUICtrlToolbar_SetDisabledImageList',
        documentation: 'Sets the disabled image list'
    },
    {
        label: '_GUICtrlToolbar_SetDrawTextFlags',
        documentation: 'Sets the text drawing flags for the toolbar'
    },
    {
        label: '_GUICtrlToolbar_SetExtendedStyle',
        documentation: 'Sets the extended styles control'
    },
    {
        label: '_GUICtrlToolbar_SetHotImageList',
        documentation: 'Sets the hot button image list'
    },
    {
        label: '_GUICtrlToolbar_SetHotItem',
        documentation: 'Sets the hot item'
    },
    {
        label: '_GUICtrlToolbar_SetImageList',
        documentation: 'Sets the default button image list'
    },
    {
        label: '_GUICtrlToolbar_SetIndent',
        documentation: 'Sets the indentation for the first button control'
    },
    {
        label: '_GUICtrlToolbar_SetIndeterminate',
        documentation: 'Sets or clears the indeterminate state of the specified button'
    },
    {
        label: '_GUICtrlToolbar_SetInsertMark',
        documentation: 'Sets the current insertion mark for the toolbar'
    },
    {
        label: '_GUICtrlToolbar_SetInsertMarkColor',
        documentation: 'Sets the color used to draw the insertion mark'
    },
    {
        label: '_GUICtrlToolbar_SetMaxTextRows',
        documentation: 'Sets the maximum number of text rows displayed button'
    },
    {
        label: '_GUICtrlToolbar_SetMetrics',
        documentation: 'Sets the metrics of a toolbar control'
    },
    {
        label: '_GUICtrlToolbar_SetPadding',
        documentation: 'Sets the padding control'
    },
    {
        label: '_GUICtrlToolbar_SetParent',
        documentation: 'Sets the window to which the control sends notification messages'
    },
    {
        label: '_GUICtrlToolbar_SetRows',
        documentation: 'Sets the number of rows of buttons'
    },
    {
        label: '_GUICtrlToolbar_SetStyle',
        documentation: 'Sets the style control'
    },
    {
        label: '_GUICtrlToolbar_SetStyleAltDrag',
        documentation: 'Sets whether that the control allows buttons to be dragged'
    },
    {
        label: '_GUICtrlToolbar_SetStyleCustomErase',
        documentation: 'Sets whether the control generates NM_CUSTOMDRAW notification messages'
    },
    {
        label: '_GUICtrlToolbar_SetStyleFlat',
        documentation: 'Sets whether the control is flat'
    },
    {
        label: '_GUICtrlToolbar_SetStyleList',
        documentation: 'Sets whether the control has button text to the right of the bitmap'
    },
    {
        label: '_GUICtrlToolbar_SetStyleRegisterDrop',
        documentation: 'Sets whether the control generates TBN_GETOBJECT notification messages'
    },
    {
        label: '_GUICtrlToolbar_SetStyleToolTips',
        documentation: 'Sets whether the control has tooltips'
    },
    {
        label: '_GUICtrlToolbar_SetStyleTransparent',
        documentation: 'Sets whether the control is transparent'
    },
    {
        label: '_GUICtrlToolbar_SetStyleWrapable',
        documentation: 'Sets whether the control is wrapable'
    },
    {
        label: '_GUICtrlToolbar_SetToolTips',
        documentation: 'Associates a ToolTip control with a toolbar'
    },
    {
        label: '_GUICtrlToolbar_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag'
    },
    {
        label: '_GUICtrlToolbar_SetWindowTheme',
        documentation: 'Sets the visual style '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <GuiToolbar.au3>'
}

module.exports = items