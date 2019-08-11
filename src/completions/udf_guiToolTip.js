'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUIToolTip_Activate',
        documentation: 'Activates a ToolTip control'
    },
    {
        label: '_GUIToolTip_AddTool',
        documentation: 'Registers a tool with the ToolTip control'
    },
    {
        label: '_GUIToolTip_AdjustRect',
        documentation: 'Calculates the text display rectangle from the window rectangle'
    },
    {
        label: '_GUIToolTip_BitsToTTF',
        documentation: 'Decode bit flags to TTF_* strings'
    },
    {
        label: '_GUIToolTip_Create',
        documentation: 'Creates a ToolTip control'
    },
    {
        label: '_GUIToolTip_Deactivate',
        documentation: 'Deactivates a ToolTip control'
    },
    {
        label: '_GUIToolTip_DelTool',
        documentation: 'Deletes a tool from a tooltip control'
    },
    {
        label: '_GUIToolTip_Destroy',
        documentation: 'Delete a ToolTip control'
    },
    {
        label: '_GUIToolTip_EnumTools',
        documentation: 'Retrieves information about the current tool'
    },
    {
        label: '_GUIToolTip_GetBubbleHeight',
        documentation: 'Returns the height of the control'
    },
    {
        label: '_GUIToolTip_GetBubbleSize',
        documentation: 'Returns the width and height of a ToolTip control'
    },
    {
        label: '_GUIToolTip_GetBubbleWidth',
        documentation: 'Returns the width of a ToolTip control'
    },
    {
        label: '_GUIToolTip_GetCurrentTool',
        documentation: 'Retrieves information for the current tool'
    },
    {
        label: '_GUIToolTip_GetDelayTime',
        documentation: 'Retrieves the initial, pop-up or reshow durations of a ToolTip control'
    },
    {
        label: '_GUIToolTip_GetMargin',
        documentation: 'Retrieves the top, left, bottom, and right margins of a ToolTip control'
    },
    {
        label: '_GUIToolTip_GetMarginEx',
        documentation: 'Retrieves the top, left, bottom, and right margins of a ToolTip control'
    },
    {
        label: '_GUIToolTip_GetMaxTipWidth',
        documentation: 'Retrieves the maximum width of a ToolTip window'
    },
    {
        label: '_GUIToolTip_GetText',
        documentation: 'Retrieves the text of a tool'
    },
    {
        label: '_GUIToolTip_GetTipBkColor',
        documentation: 'Retrieves the background color'
    },
    {
        label: '_GUIToolTip_GetTipTextColor',
        documentation: 'Retrieves the text color of a ToolTip control'
    },
    {
        label: '_GUIToolTip_GetTitleBitMap',
        documentation: 'Retrieves the title bitmap icon'
    },
    {
        label: '_GUIToolTip_GetTitleText',
        documentation: 'Retrieve the title'
    },
    {
        label: '_GUIToolTip_GetToolCount',
        documentation: 'Returns the count of tools maintained by the ToolTip control'
    },
    {
        label: '_GUIToolTip_GetToolInfo',
        documentation: 'Retrieves the information about a specific tool'
    },
    {
        label: '_GUIToolTip_HitTest',
        documentation: 'Retrieves the information that a ToolTip control maintains about a tool'
    },
    {
        label: '_GUIToolTip_NewToolRect',
        documentation: 'Sets a new bounding rectangle for a tool'
    },
    {
        label: '_GUIToolTip_Pop',
        documentation: 'Removes a displayed ToolTip from view'
    },
    {
        label: '_GUIToolTip_PopUp',
        documentation: 'Causes the ToolTip to display at the coordinates of the last mouse message'
    },
    {
        label: '_GUIToolTip_SetDelayTime',
        documentation: 'Sets the initial, pop-up, and reshow durations of a ToolTip'
    },
    {
        label: '_GUIToolTip_SetMargin',
        documentation: 'Sets the top, left, bottom, and right margins of a ToolTip'
    },
    {
        label: '_GUIToolTip_SetMaxTipWidth',
        documentation: 'Sets the maximum width for a ToolTip window'
    },
    {
        label: '_GUIToolTip_SetTipBkColor',
        documentation: 'Sets the background color of a ToolTip'
    },
    {
        label: '_GUIToolTip_SetTipTextColor',
        documentation: 'Sets the text color'
    },
    {
        label: '_GUIToolTip_SetTitle',
        documentation: 'Adds a standard icon and title string'
    },
    {
        label: '_GUIToolTip_SetToolInfo',
        documentation: 'Sets the information for a tool'
    },
    {
        label: '_GUIToolTip_SetWindowTheme',
        documentation: 'Sets the visual style'
    },
    {
        label: '_GUIToolTip_ToolExists',
        documentation: 'Determines whether a tool currently exists (is displayed)'
    },
    {
        label: '_GUIToolTip_ToolToArray',
        documentation: 'Transfers a ToolInfo structure to an array'
    },
    {
        label: '_GUIToolTip_TrackActivate',
        documentation: 'Activates or deactivates a tracking ToolTip'
    },
    {
        label: '_GUIToolTip_TrackPosition',
        documentation: 'Sets the position of a tracking ToolTip'
    },
    {
        label: '_GUIToolTip_Update',
        documentation: 'Forces the current tool to be redrawn'
    },
    {
        label: '_GUIToolTip_UpdateTipText',
        documentation: 'Sets the ToolTip text for a tool '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <GuiToolTip.au3>'
}

module.exports = items