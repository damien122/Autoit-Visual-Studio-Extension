'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlToolbar_AddBitmap',
        documentation: 'Adds images to the image list',
        insertText: '_GUICtrlToolbar_AddBitmap(${})'
    },
    {
        label: '_GUICtrlToolbar_AddButton',
        documentation: 'Adds a button',
        insertText: '_GUICtrlToolbar_AddButton(${})'
    },
    {
        label: '_GUICtrlToolbar_AddButtonSep',
        documentation: 'Adds a separator',
        insertText: '_GUICtrlToolbar_AddButtonSep(${})'
    },
    {
        label: '_GUICtrlToolbar_AddString',
        documentation: 'Adds a new string to the toolbar\'s string pool',
        insertText: '_GUICtrlToolbar_AddString(${})'
    },
    {
        label: '_GUICtrlToolbar_ButtonCount',
        documentation: 'Retrieves a count of the buttons',
        insertText: '_GUICtrlToolbar_ButtonCount(${})'
    },
    {
        label: '_GUICtrlToolbar_CheckButton',
        documentation: 'Checks or unchecks a given button',
        insertText: '_GUICtrlToolbar_CheckButton(${})'
    },
    {
        label: '_GUICtrlToolbar_ClickAccel',
        documentation: 'Clicks a specific button using it\'s accelerator',
        insertText: '_GUICtrlToolbar_ClickAccel(${})'
    },
    {
        label: '_GUICtrlToolbar_ClickButton',
        documentation: 'Clicks a specific button',
        insertText: '_GUICtrlToolbar_ClickButton(${})'
    },
    {
        label: '_GUICtrlToolbar_ClickIndex',
        documentation: 'Clicks a specific button using it\'s index',
        insertText: '_GUICtrlToolbar_ClickIndex(${})'
    },
    {
        label: '_GUICtrlToolbar_CommandToIndex',
        documentation: 'Retrieves the index for the button associated with the specified command identifier',
        insertText: '_GUICtrlToolbar_CommandToIndex(${})'
    },
    {
        label: '_GUICtrlToolbar_Create',
        documentation: 'Create a Toolbar control',
        insertText: '_GUICtrlToolbar_Create(${})'
    },
    {
        label: '_GUICtrlToolbar_Customize',
        documentation: 'Displays the Customize Toolbar dialog box',
        insertText: '_GUICtrlToolbar_Customize(${})'
    },
    {
        label: '_GUICtrlToolbar_DeleteButton',
        documentation: 'Deletes a button from the toolbar',
        insertText: '_GUICtrlToolbar_DeleteButton(${})'
    },
    {
        label: '_GUICtrlToolbar_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlToolbar_Destroy(${})'
    },
    {
        label: '_GUICtrlToolbar_EnableButton',
        documentation: 'Enables or disables the specified button',
        insertText: '_GUICtrlToolbar_EnableButton(${})'
    },
    {
        label: '_GUICtrlToolbar_FindToolbar',
        documentation: 'Finds a specific toolbar',
        insertText: '_GUICtrlToolbar_FindToolbar(${})'
    },
    {
        label: '_GUICtrlToolbar_GetAnchorHighlight',
        documentation: 'Retrieves the anchor highlight setting',
        insertText: '_GUICtrlToolbar_GetAnchorHighlight(${})'
    },
    {
        label: '_GUICtrlToolbar_GetBitmapFlags',
        documentation: 'Retrieves the flags that describe the type of bitmap to be used',
        insertText: '_GUICtrlToolbar_GetBitmapFlags(${})'
    },
    {
        label: '_GUICtrlToolbar_GetButtonBitmap',
        documentation: 'Retrieves the index of the bitmap associated with a button',
        insertText: '_GUICtrlToolbar_GetButtonBitmap(${})'
    },
    {
        label: '_GUICtrlToolbar_GetButtonInfo',
        documentation: 'Retrieves information for a button',
        insertText: '_GUICtrlToolbar_GetButtonInfo(${})'
    },
    {
        label: '_GUICtrlToolbar_GetButtonInfoEx',
        documentation: 'Retrieves extended information for a button',
        insertText: '_GUICtrlToolbar_GetButtonInfoEx(${})'
    },
    {
        label: '_GUICtrlToolbar_GetButtonParam',
        documentation: 'Retrieves the button param value',
        insertText: '_GUICtrlToolbar_GetButtonParam(${})'
    },
    {
        label: '_GUICtrlToolbar_GetButtonRect',
        documentation: 'Retrieves the bounding rectangle for a button',
        insertText: '_GUICtrlToolbar_GetButtonRect(${})'
    },
    {
        label: '_GUICtrlToolbar_GetButtonRectEx',
        documentation: 'Retrieves the bounding rectangle for a specified toolbar button',
        insertText: '_GUICtrlToolbar_GetButtonRectEx(${})'
    },
    {
        label: '_GUICtrlToolbar_GetButtonSize',
        documentation: 'Retrieves the current button width and height, in pixels',
        insertText: '_GUICtrlToolbar_GetButtonSize(${})'
    },
    {
        label: '_GUICtrlToolbar_GetButtonState',
        documentation: 'Retrieves information about the state of the specified button',
        insertText: '_GUICtrlToolbar_GetButtonState(${})'
    },
    {
        label: '_GUICtrlToolbar_GetButtonStyle',
        documentation: 'Retrieves the style flags of a button',
        insertText: '_GUICtrlToolbar_GetButtonStyle(${})'
    },
    {
        label: '_GUICtrlToolbar_GetButtonText',
        documentation: 'Retrieves the display text of a button',
        insertText: '_GUICtrlToolbar_GetButtonText(${})'
    },
    {
        label: '_GUICtrlToolbar_GetColorScheme',
        documentation: 'Retrieves the color scheme information',
        insertText: '_GUICtrlToolbar_GetColorScheme(${})'
    },
    {
        label: '_GUICtrlToolbar_GetDisabledImageList',
        documentation: 'Retrieves the disabled button image list',
        insertText: '_GUICtrlToolbar_GetDisabledImageList(${})'
    },
    {
        label: '_GUICtrlToolbar_GetExtendedStyle',
        documentation: 'Retrieves the extended styles',
        insertText: '_GUICtrlToolbar_GetExtendedStyle(${})'
    },
    {
        label: '_GUICtrlToolbar_GetHotImageList',
        documentation: 'Retrieves the hot button image list',
        insertText: '_GUICtrlToolbar_GetHotImageList(${})'
    },
    {
        label: '_GUICtrlToolbar_GetHotItem',
        documentation: 'Retrieves the index of the hot item',
        insertText: '_GUICtrlToolbar_GetHotItem(${})'
    },
    {
        label: '_GUICtrlToolbar_GetImageList',
        documentation: 'Retrieves the default state image list',
        insertText: '_GUICtrlToolbar_GetImageList(${})'
    },
    {
        label: '_GUICtrlToolbar_GetInsertMark',
        documentation: 'Retrieves the current insertion mark',
        insertText: '_GUICtrlToolbar_GetInsertMark(${})'
    },
    {
        label: '_GUICtrlToolbar_GetInsertMarkColor',
        documentation: 'Retrieves the color used to draw the insertion mark',
        insertText: '_GUICtrlToolbar_GetInsertMarkColor(${})'
    },
    {
        label: '_GUICtrlToolbar_GetMaxSize',
        documentation: 'Retrieves the total size of all of the visible buttons and separators',
        insertText: '_GUICtrlToolbar_GetMaxSize(${})'
    },
    {
        label: '_GUICtrlToolbar_GetMetrics',
        documentation: 'Retrieves the metrics of a toolbar control',
        insertText: '_GUICtrlToolbar_GetMetrics(${})'
    },
    {
        label: '_GUICtrlToolbar_GetPadding',
        documentation: 'Retrieves the horizontal and vertical padding',
        insertText: '_GUICtrlToolbar_GetPadding(${})'
    },
    {
        label: '_GUICtrlToolbar_GetRows',
        documentation: 'Retrieves the number of rows of buttons',
        insertText: '_GUICtrlToolbar_GetRows(${})'
    },
    {
        label: '_GUICtrlToolbar_GetString',
        documentation: 'Retrieves a string from the string pool',
        insertText: '_GUICtrlToolbar_GetString(${})'
    },
    {
        label: '_GUICtrlToolbar_GetStyle',
        documentation: 'Retrieves the styles currently in use for a toolbar control',
        insertText: '_GUICtrlToolbar_GetStyle(${})'
    },
    {
        label: '_GUICtrlToolbar_GetStyleAltDrag',
        documentation: 'Indicates that the control allows buttons to be dragged',
        insertText: '_GUICtrlToolbar_GetStyleAltDrag(${})'
    },
    {
        label: '_GUICtrlToolbar_GetStyleCustomErase',
        documentation: 'Indicates that the control generates NM_CUSTOMDRAW notification messages',
        insertText: '_GUICtrlToolbar_GetStyleCustomErase(${})'
    },
    {
        label: '_GUICtrlToolbar_GetStyleFlat',
        documentation: 'Indicates that the control is flat',
        insertText: '_GUICtrlToolbar_GetStyleFlat(${})'
    },
    {
        label: '_GUICtrlToolbar_GetStyleList',
        documentation: 'Indicates that the control has button text to the right of the bitmap',
        insertText: '_GUICtrlToolbar_GetStyleList(${})'
    },
    {
        label: '_GUICtrlToolbar_GetStyleRegisterDrop',
        documentation: 'Indicates that the control generates TBN_GETOBJECT notification messages',
        insertText: '_GUICtrlToolbar_GetStyleRegisterDrop(${})'
    },
    {
        label: '_GUICtrlToolbar_GetStyleToolTips',
        documentation: 'Indicates that the control has tooltips',
        insertText: '_GUICtrlToolbar_GetStyleToolTips(${})'
    },
    {
        label: '_GUICtrlToolbar_GetStyleTransparent',
        documentation: 'Indicates that the control is transparent',
        insertText: '_GUICtrlToolbar_GetStyleTransparent(${})'
    },
    {
        label: '_GUICtrlToolbar_GetStyleWrapable',
        documentation: 'Indicates that the control is wrapable',
        insertText: '_GUICtrlToolbar_GetStyleWrapable(${})'
    },
    {
        label: '_GUICtrlToolbar_GetTextRows',
        documentation: 'Retrieves the maximum number of text rows that can be displayed on a button',
        insertText: '_GUICtrlToolbar_GetTextRows(${})'
    },
    {
        label: '_GUICtrlToolbar_GetToolTips',
        documentation: 'Retrieves the handle to the ToolTip control',
        insertText: '_GUICtrlToolbar_GetToolTips(${})'
    },
    {
        label: '_GUICtrlToolbar_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag',
        insertText: '_GUICtrlToolbar_GetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlToolbar_HideButton',
        documentation: 'Hides or shows the specified button',
        insertText: '_GUICtrlToolbar_HideButton(${})'
    },
    {
        label: '_GUICtrlToolbar_HighlightButton',
        documentation: 'Sets the highlight state of a given button control',
        insertText: '_GUICtrlToolbar_HighlightButton(${})'
    },
    {
        label: '_GUICtrlToolbar_HitTest',
        documentation: 'Determines where a point lies within the control',
        insertText: '_GUICtrlToolbar_HitTest(${})'
    },
    {
        label: '_GUICtrlToolbar_IndexToCommand',
        documentation: 'Retrieves the command identifier associated with the button',
        insertText: '_GUICtrlToolbar_IndexToCommand(${})'
    },
    {
        label: '_GUICtrlToolbar_InsertButton',
        documentation: 'Inserts a button',
        insertText: '_GUICtrlToolbar_InsertButton(${})'
    },
    {
        label: '_GUICtrlToolbar_InsertMarkHitTest',
        documentation: 'Retrieves the insertion mark information for a point',
        insertText: '_GUICtrlToolbar_InsertMarkHitTest(${})'
    },
    {
        label: '_GUICtrlToolbar_IsButtonChecked',
        documentation: 'Indicates whether the specified button is checked',
        insertText: '_GUICtrlToolbar_IsButtonChecked(${})'
    },
    {
        label: '_GUICtrlToolbar_IsButtonEnabled',
        documentation: 'Indicates whether the specified button is enabled',
        insertText: '_GUICtrlToolbar_IsButtonEnabled(${})'
    },
    {
        label: '_GUICtrlToolbar_IsButtonHidden',
        documentation: 'Indicates whether the specified button is hidden',
        insertText: '_GUICtrlToolbar_IsButtonHidden(${})'
    },
    {
        label: '_GUICtrlToolbar_IsButtonHighlighted',
        documentation: 'Indicates whether the specified button is hilighted',
        insertText: '_GUICtrlToolbar_IsButtonHighlighted(${})'
    },
    {
        label: '_GUICtrlToolbar_IsButtonIndeterminate',
        documentation: 'Indicates whether the specified button is indeterminate',
        insertText: '_GUICtrlToolbar_IsButtonIndeterminate(${})'
    },
    {
        label: '_GUICtrlToolbar_IsButtonPressed',
        documentation: 'Indicates that the button is being clicked',
        insertText: '_GUICtrlToolbar_IsButtonPressed(${})'
    },
    {
        label: '_GUICtrlToolbar_LoadBitmap',
        documentation: 'Adds a bitmap to the image list from a file',
        insertText: '_GUICtrlToolbar_LoadBitmap(${})'
    },
    {
        label: '_GUICtrlToolbar_LoadImages',
        documentation: 'Loads system defined button images into a toolbar control\'s image list',
        insertText: '_GUICtrlToolbar_LoadImages(${})'
    },
    {
        label: '_GUICtrlToolbar_MapAccelerator',
        documentation: 'Determines the ID of the button that corresponds to the specified accelerator',
        insertText: '_GUICtrlToolbar_MapAccelerator(${})'
    },
    {
        label: '_GUICtrlToolbar_MoveButton',
        documentation: 'Moves a button from one index to another',
        insertText: '_GUICtrlToolbar_MoveButton(${})'
    },
    {
        label: '_GUICtrlToolbar_PressButton',
        documentation: 'Presses or releases the specified button',
        insertText: '_GUICtrlToolbar_PressButton(${})'
    },
    {
        label: '_GUICtrlToolbar_SetAnchorHighlight',
        documentation: 'Sets the anchor highlight setting',
        insertText: '_GUICtrlToolbar_SetAnchorHighlight(${})'
    },
    {
        label: '_GUICtrlToolbar_SetBitmapSize',
        documentation: 'Sets the size of the bitmapped images to be added to a toolbar',
        insertText: '_GUICtrlToolbar_SetBitmapSize(${})'
    },
    {
        label: '_GUICtrlToolbar_SetButtonBitMap',
        documentation: 'Sets the index of the bitmap associated with a button',
        insertText: '_GUICtrlToolbar_SetButtonBitMap(${})'
    },
    {
        label: '_GUICtrlToolbar_SetButtonInfo',
        documentation: 'Sets information for a button',
        insertText: '_GUICtrlToolbar_SetButtonInfo(${})'
    },
    {
        label: '_GUICtrlToolbar_SetButtonInfoEx',
        documentation: 'Sets extended information for a button',
        insertText: '_GUICtrlToolbar_SetButtonInfoEx(${})'
    },
    {
        label: '_GUICtrlToolbar_SetButtonParam',
        documentation: 'Sets the button param value',
        insertText: '_GUICtrlToolbar_SetButtonParam(${})'
    },
    {
        label: '_GUICtrlToolbar_SetButtonSize',
        documentation: 'Sets the size of the buttons to be added to a toolbar',
        insertText: '_GUICtrlToolbar_SetButtonSize(${})'
    },
    {
        label: '_GUICtrlToolbar_SetButtonState',
        documentation: 'Sets information about the state of the specified button',
        insertText: '_GUICtrlToolbar_SetButtonState(${})'
    },
    {
        label: '_GUICtrlToolbar_SetButtonStyle',
        documentation: 'Sets the style flags of a button',
        insertText: '_GUICtrlToolbar_SetButtonStyle(${})'
    },
    {
        label: '_GUICtrlToolbar_SetButtonText',
        documentation: 'Sets the display text of a button',
        insertText: '_GUICtrlToolbar_SetButtonText(${})'
    },
    {
        label: '_GUICtrlToolbar_SetButtonWidth',
        documentation: 'Sets the minimum and maximum button widths in the toolbar control',
        insertText: '_GUICtrlToolbar_SetButtonWidth(${})'
    },
    {
        label: '_GUICtrlToolbar_SetCmdID',
        documentation: 'Sets the command identifier of a toolbar button',
        insertText: '_GUICtrlToolbar_SetCmdID(${})'
    },
    {
        label: '_GUICtrlToolbar_SetColorScheme',
        documentation: 'Sets the color scheme information',
        insertText: '_GUICtrlToolbar_SetColorScheme(${})'
    },
    {
        label: '_GUICtrlToolbar_SetDisabledImageList',
        documentation: 'Sets the disabled image list',
        insertText: '_GUICtrlToolbar_SetDisabledImageList(${})'
    },
    {
        label: '_GUICtrlToolbar_SetDrawTextFlags',
        documentation: 'Sets the text drawing flags for the toolbar',
        insertText: '_GUICtrlToolbar_SetDrawTextFlags(${})'
    },
    {
        label: '_GUICtrlToolbar_SetExtendedStyle',
        documentation: 'Sets the extended styles control',
        insertText: '_GUICtrlToolbar_SetExtendedStyle(${})'
    },
    {
        label: '_GUICtrlToolbar_SetHotImageList',
        documentation: 'Sets the hot button image list',
        insertText: '_GUICtrlToolbar_SetHotImageList(${})'
    },
    {
        label: '_GUICtrlToolbar_SetHotItem',
        documentation: 'Sets the hot item',
        insertText: '_GUICtrlToolbar_SetHotItem(${})'
    },
    {
        label: '_GUICtrlToolbar_SetImageList',
        documentation: 'Sets the default button image list',
        insertText: '_GUICtrlToolbar_SetImageList(${})'
    },
    {
        label: '_GUICtrlToolbar_SetIndent',
        documentation: 'Sets the indentation for the first button control',
        insertText: '_GUICtrlToolbar_SetIndent(${})'
    },
    {
        label: '_GUICtrlToolbar_SetIndeterminate',
        documentation: 'Sets or clears the indeterminate state of the specified button',
        insertText: '_GUICtrlToolbar_SetIndeterminate(${})'
    },
    {
        label: '_GUICtrlToolbar_SetInsertMark',
        documentation: 'Sets the current insertion mark for the toolbar',
        insertText: '_GUICtrlToolbar_SetInsertMark(${})'
    },
    {
        label: '_GUICtrlToolbar_SetInsertMarkColor',
        documentation: 'Sets the color used to draw the insertion mark',
        insertText: '_GUICtrlToolbar_SetInsertMarkColor(${})'
    },
    {
        label: '_GUICtrlToolbar_SetMaxTextRows',
        documentation: 'Sets the maximum number of text rows displayed button',
        insertText: '_GUICtrlToolbar_SetMaxTextRows(${})'
    },
    {
        label: '_GUICtrlToolbar_SetMetrics',
        documentation: 'Sets the metrics of a toolbar control',
        insertText: '_GUICtrlToolbar_SetMetrics(${})'
    },
    {
        label: '_GUICtrlToolbar_SetPadding',
        documentation: 'Sets the padding control',
        insertText: '_GUICtrlToolbar_SetPadding(${})'
    },
    {
        label: '_GUICtrlToolbar_SetParent',
        documentation: 'Sets the window to which the control sends notification messages',
        insertText: '_GUICtrlToolbar_SetParent(${})'
    },
    {
        label: '_GUICtrlToolbar_SetRows',
        documentation: 'Sets the number of rows of buttons',
        insertText: '_GUICtrlToolbar_SetRows(${})'
    },
    {
        label: '_GUICtrlToolbar_SetStyle',
        documentation: 'Sets the style control',
        insertText: '_GUICtrlToolbar_SetStyle(${})'
    },
    {
        label: '_GUICtrlToolbar_SetStyleAltDrag',
        documentation: 'Sets whether that the control allows buttons to be dragged',
        insertText: '_GUICtrlToolbar_SetStyleAltDrag(${})'
    },
    {
        label: '_GUICtrlToolbar_SetStyleCustomErase',
        documentation: 'Sets whether the control generates NM_CUSTOMDRAW notification messages',
        insertText: '_GUICtrlToolbar_SetStyleCustomErase(${})'
    },
    {
        label: '_GUICtrlToolbar_SetStyleFlat',
        documentation: 'Sets whether the control is flat',
        insertText: '_GUICtrlToolbar_SetStyleFlat(${})'
    },
    {
        label: '_GUICtrlToolbar_SetStyleList',
        documentation: 'Sets whether the control has button text to the right of the bitmap',
        insertText: '_GUICtrlToolbar_SetStyleList(${})'
    },
    {
        label: '_GUICtrlToolbar_SetStyleRegisterDrop',
        documentation: 'Sets whether the control generates TBN_GETOBJECT notification messages',
        insertText: '_GUICtrlToolbar_SetStyleRegisterDrop(${})'
    },
    {
        label: '_GUICtrlToolbar_SetStyleToolTips',
        documentation: 'Sets whether the control has tooltips',
        insertText: '_GUICtrlToolbar_SetStyleToolTips(${})'
    },
    {
        label: '_GUICtrlToolbar_SetStyleTransparent',
        documentation: 'Sets whether the control is transparent',
        insertText: '_GUICtrlToolbar_SetStyleTransparent(${})'
    },
    {
        label: '_GUICtrlToolbar_SetStyleWrapable',
        documentation: 'Sets whether the control is wrapable',
        insertText: '_GUICtrlToolbar_SetStyleWrapable(${})'
    },
    {
        label: '_GUICtrlToolbar_SetToolTips',
        documentation: 'Associates a ToolTip control with a toolbar',
        insertText: '_GUICtrlToolbar_SetToolTips(${})'
    },
    {
        label: '_GUICtrlToolbar_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag',
        insertText: '_GUICtrlToolbar_SetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlToolbar_SetWindowTheme',
        documentation: 'Sets the visual style ',
        insertText: '_GUICtrlToolbar_SetWindowTheme(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <GuiToolbar.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items