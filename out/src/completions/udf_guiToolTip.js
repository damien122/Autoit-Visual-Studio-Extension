'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUIToolTip_Activate',
        documentation: 'Activates a ToolTip control',
        insertText: '_GUIToolTip_Activate(${})'
    },
    {
        label: '_GUIToolTip_AddTool',
        documentation: 'Registers a tool with the ToolTip control',
        insertText: '_GUIToolTip_AddTool(${})'
    },
    {
        label: '_GUIToolTip_AdjustRect',
        documentation: 'Calculates the text display rectangle from the window rectangle',
        insertText: '_GUIToolTip_AdjustRect(${})'
    },
    {
        label: '_GUIToolTip_BitsToTTF',
        documentation: 'Decode bit flags to TTF_* strings',
        insertText: '_GUIToolTip_BitsToTTF(${})'
    },
    {
        label: '_GUIToolTip_Create',
        documentation: 'Creates a ToolTip control',
        insertText: '_GUIToolTip_Create(${})'
    },
    {
        label: '_GUIToolTip_Deactivate',
        documentation: 'Deactivates a ToolTip control',
        insertText: '_GUIToolTip_Deactivate(${})'
    },
    {
        label: '_GUIToolTip_DelTool',
        documentation: 'Deletes a tool from a tooltip control',
        insertText: '_GUIToolTip_DelTool(${})'
    },
    {
        label: '_GUIToolTip_Destroy',
        documentation: 'Delete a ToolTip control',
        insertText: '_GUIToolTip_Destroy(${})'
    },
    {
        label: '_GUIToolTip_EnumTools',
        documentation: 'Retrieves information about the current tool',
        insertText: '_GUIToolTip_EnumTools(${})'
    },
    {
        label: '_GUIToolTip_GetBubbleHeight',
        documentation: 'Returns the height of the control',
        insertText: '_GUIToolTip_GetBubbleHeight(${})'
    },
    {
        label: '_GUIToolTip_GetBubbleSize',
        documentation: 'Returns the width and height of a ToolTip control',
        insertText: '_GUIToolTip_GetBubbleSize(${})'
    },
    {
        label: '_GUIToolTip_GetBubbleWidth',
        documentation: 'Returns the width of a ToolTip control',
        insertText: '_GUIToolTip_GetBubbleWidth(${})'
    },
    {
        label: '_GUIToolTip_GetCurrentTool',
        documentation: 'Retrieves information for the current tool',
        insertText: '_GUIToolTip_GetCurrentTool(${})'
    },
    {
        label: '_GUIToolTip_GetDelayTime',
        documentation: 'Retrieves the initial, pop-up or reshow durations of a ToolTip control',
        insertText: '_GUIToolTip_GetDelayTime(${})'
    },
    {
        label: '_GUIToolTip_GetMargin',
        documentation: 'Retrieves the top, left, bottom, and right margins of a ToolTip control',
        insertText: '_GUIToolTip_GetMargin(${})'
    },
    {
        label: '_GUIToolTip_GetMarginEx',
        documentation: 'Retrieves the top, left, bottom, and right margins of a ToolTip control',
        insertText: '_GUIToolTip_GetMarginEx(${})'
    },
    {
        label: '_GUIToolTip_GetMaxTipWidth',
        documentation: 'Retrieves the maximum width of a ToolTip window',
        insertText: '_GUIToolTip_GetMaxTipWidth(${})'
    },
    {
        label: '_GUIToolTip_GetText',
        documentation: 'Retrieves the text of a tool',
        insertText: '_GUIToolTip_GetText(${})'
    },
    {
        label: '_GUIToolTip_GetTipBkColor',
        documentation: 'Retrieves the background color',
        insertText: '_GUIToolTip_GetTipBkColor(${})'
    },
    {
        label: '_GUIToolTip_GetTipTextColor',
        documentation: 'Retrieves the text color of a ToolTip control',
        insertText: '_GUIToolTip_GetTipTextColor(${})'
    },
    {
        label: '_GUIToolTip_GetTitleBitMap',
        documentation: 'Retrieves the title bitmap icon',
        insertText: '_GUIToolTip_GetTitleBitMap(${})'
    },
    {
        label: '_GUIToolTip_GetTitleText',
        documentation: 'Retrieve the title',
        insertText: '_GUIToolTip_GetTitleText(${})'
    },
    {
        label: '_GUIToolTip_GetToolCount',
        documentation: 'Returns the count of tools maintained by the ToolTip control',
        insertText: '_GUIToolTip_GetToolCount(${})'
    },
    {
        label: '_GUIToolTip_GetToolInfo',
        documentation: 'Retrieves the information about a specific tool',
        insertText: '_GUIToolTip_GetToolInfo(${})'
    },
    {
        label: '_GUIToolTip_HitTest',
        documentation: 'Retrieves the information that a ToolTip control maintains about a tool',
        insertText: '_GUIToolTip_HitTest(${})'
    },
    {
        label: '_GUIToolTip_NewToolRect',
        documentation: 'Sets a new bounding rectangle for a tool',
        insertText: '_GUIToolTip_NewToolRect(${})'
    },
    {
        label: '_GUIToolTip_Pop',
        documentation: 'Removes a displayed ToolTip from view',
        insertText: '_GUIToolTip_Pop(${})'
    },
    {
        label: '_GUIToolTip_PopUp',
        documentation: 'Causes the ToolTip to display at the coordinates of the last mouse message',
        insertText: '_GUIToolTip_PopUp(${})'
    },
    {
        label: '_GUIToolTip_SetDelayTime',
        documentation: 'Sets the initial, pop-up, and reshow durations of a ToolTip',
        insertText: '_GUIToolTip_SetDelayTime(${})'
    },
    {
        label: '_GUIToolTip_SetMargin',
        documentation: 'Sets the top, left, bottom, and right margins of a ToolTip',
        insertText: '_GUIToolTip_SetMargin(${})'
    },
    {
        label: '_GUIToolTip_SetMaxTipWidth',
        documentation: 'Sets the maximum width for a ToolTip window',
        insertText: '_GUIToolTip_SetMaxTipWidth(${})'
    },
    {
        label: '_GUIToolTip_SetTipBkColor',
        documentation: 'Sets the background color of a ToolTip',
        insertText: '_GUIToolTip_SetTipBkColor(${})'
    },
    {
        label: '_GUIToolTip_SetTipTextColor',
        documentation: 'Sets the text color',
        insertText: '_GUIToolTip_SetTipTextColor(${})'
    },
    {
        label: '_GUIToolTip_SetTitle',
        documentation: 'Adds a standard icon and title string',
        insertText: '_GUIToolTip_SetTitle(${})'
    },
    {
        label: '_GUIToolTip_SetToolInfo',
        documentation: 'Sets the information for a tool',
        insertText: '_GUIToolTip_SetToolInfo(${})'
    },
    {
        label: '_GUIToolTip_SetWindowTheme',
        documentation: 'Sets the visual style',
        insertText: '_GUIToolTip_SetWindowTheme(${})'
    },
    {
        label: '_GUIToolTip_ToolExists',
        documentation: 'Determines whether a tool currently exists (is displayed)',
        insertText: '_GUIToolTip_ToolExists(${})'
    },
    {
        label: '_GUIToolTip_ToolToArray',
        documentation: 'Transfers a ToolInfo structure to an array',
        insertText: '_GUIToolTip_ToolToArray(${})'
    },
    {
        label: '_GUIToolTip_TrackActivate',
        documentation: 'Activates or deactivates a tracking ToolTip',
        insertText: '_GUIToolTip_TrackActivate(${})'
    },
    {
        label: '_GUIToolTip_TrackPosition',
        documentation: 'Sets the position of a tracking ToolTip',
        insertText: '_GUIToolTip_TrackPosition(${})'
    },
    {
        label: '_GUIToolTip_Update',
        documentation: 'Forces the current tool to be redrawn',
        insertText: '_GUIToolTip_Update(${})'
    },
    {
        label: '_GUIToolTip_UpdateTipText',
        documentation: 'Sets the ToolTip text for a tool ',
        insertText: '_GUIToolTip_UpdateTipText(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <GuiToolTip.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items