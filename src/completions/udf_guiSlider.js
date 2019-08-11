'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlSlider_ClearSel',
        documentation: 'Clears the current selection range'
    },
    {
        label: '_GUICtrlSlider_ClearTics',
        documentation: 'Removes the current tick marks from a slider'
    },
    {
        label: '_GUICtrlSlider_Create',
        documentation: 'Create a Slider control'
    },
    {
        label: '_GUICtrlSlider_Destroy',
        documentation: 'Delete the control'
    },
    {
        label: '_GUICtrlSlider_GetBuddy',
        documentation: 'Retrieves the handle to a slider control buddy window at a given location'
    },
    {
        label: '_GUICtrlSlider_GetChannelRect',
        documentation: 'Retrieves the size and position of the bounding rectangle for a sliders\'s channel'
    },
    {
        label: '_GUICtrlSlider_GetChannelRectEx',
        documentation: 'Retrieves the size and position of the bounding rectangle for a sliders\'s channel'
    },
    {
        label: '_GUICtrlSlider_GetLineSize',
        documentation: 'Retrieves the number of logical positions the slider moves'
    },
    {
        label: '_GUICtrlSlider_GetLogicalTics',
        documentation: 'Retrieves an array that contains the logical positions of the tick marks for a slider'
    },
    {
        label: '_GUICtrlSlider_GetNumTics',
        documentation: 'Retrieves the number of tick marks from a slider'
    },
    {
        label: '_GUICtrlSlider_GetPageSize',
        documentation: 'Retrieves the number of logical positions the slider moves'
    },
    {
        label: '_GUICtrlSlider_GetPos',
        documentation: 'Retrieves the logical position the slider'
    },
    {
        label: '_GUICtrlSlider_GetRange',
        documentation: 'Retrieves the maximum and minimum position for the slider'
    },
    {
        label: '_GUICtrlSlider_GetRangeMax',
        documentation: 'Retrieves the maximum position for the slider'
    },
    {
        label: '_GUICtrlSlider_GetRangeMin',
        documentation: 'Retrieves the minimum position for the slider'
    },
    {
        label: '_GUICtrlSlider_GetSel',
        documentation: 'Retrieves the ending and starting position of the current selection range'
    },
    {
        label: '_GUICtrlSlider_GetSelEnd',
        documentation: 'Retrieves the ending position of the current selection range'
    },
    {
        label: '_GUICtrlSlider_GetSelStart',
        documentation: 'Retrieves the starting position of the current selection range'
    },
    {
        label: '_GUICtrlSlider_GetThumbLength',
        documentation: 'Retrieves the length of the slider'
    },
    {
        label: '_GUICtrlSlider_GetThumbRect',
        documentation: 'Retrieves the size and position of the bounding rectangle for the slider'
    },
    {
        label: '_GUICtrlSlider_GetThumbRectEx',
        documentation: 'Retrieves the size and position of the bounding rectangle for the slider'
    },
    {
        label: '_GUICtrlSlider_GetTic',
        documentation: 'Retrieves the logical position of a tick mark'
    },
    {
        label: '_GUICtrlSlider_GetTicPos',
        documentation: 'Retrieves the current physical position of a tick mark'
    },
    {
        label: '_GUICtrlSlider_GetToolTips',
        documentation: 'Retrieves the handle to the ToolTip control assigned to the slider, if any'
    },
    {
        label: '_GUICtrlSlider_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control'
    },
    {
        label: '_GUICtrlSlider_SetBuddy',
        documentation: 'Assigns a window as the buddy window for a slider control'
    },
    {
        label: '_GUICtrlSlider_SetLineSize',
        documentation: 'Sets the number of logical positions the slider moves'
    },
    {
        label: '_GUICtrlSlider_SetPageSize',
        documentation: 'Sets the number of logical positions the slider moves'
    },
    {
        label: '_GUICtrlSlider_SetPos',
        documentation: 'Sets the current logical position of the slider'
    },
    {
        label: '_GUICtrlSlider_SetRange',
        documentation: 'Sets the range of minimum and maximum logical positions for the slider'
    },
    {
        label: '_GUICtrlSlider_SetRangeMax',
        documentation: 'Sets the maximum logical position for the slider'
    },
    {
        label: '_GUICtrlSlider_SetRangeMin',
        documentation: 'Sets the minimum logical position for the slider'
    },
    {
        label: '_GUICtrlSlider_SetSel',
        documentation: 'Sets the starting and ending positions for the available selection range'
    },
    {
        label: '_GUICtrlSlider_SetSelEnd',
        documentation: 'Sets the ending logical position of the current selection range'
    },
    {
        label: '_GUICtrlSlider_SetSelStart',
        documentation: 'Sets the starting logical position of the current selection range'
    },
    {
        label: '_GUICtrlSlider_SetThumbLength',
        documentation: 'Sets the length of the slider'
    },
    {
        label: '_GUICtrlSlider_SetTic',
        documentation: 'Sets a tick mark in a slider at the specified logical position'
    },
    {
        label: '_GUICtrlSlider_SetTicFreq',
        documentation: 'Sets the interval frequency for tick marks in a slider'
    },
    {
        label: '_GUICtrlSlider_SetTipSide',
        documentation: 'Positions a ToolTip control'
    },
    {
        label: '_GUICtrlSlider_SetToolTips',
        documentation: 'Assigns a ToolTip control to a slider control'
    },
    {
        label: '_GUICtrlSlider_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag for the control'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiSlider UDF - #include <GuiSlider.au3>'
}

module.exports = items