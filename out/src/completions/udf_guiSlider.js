'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlSlider_ClearSel',
        documentation: 'Clears the current selection range',
        insertText: '_GUICtrlSlider_ClearSel(${})'
    },
    {
        label: '_GUICtrlSlider_ClearTics',
        documentation: 'Removes the current tick marks from a slider',
        insertText: '_GUICtrlSlider_ClearTics(${})'
    },
    {
        label: '_GUICtrlSlider_Create',
        documentation: 'Create a Slider control',
        insertText: '_GUICtrlSlider_Create(${})'
    },
    {
        label: '_GUICtrlSlider_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlSlider_Destroy(${})'
    },
    {
        label: '_GUICtrlSlider_GetBuddy',
        documentation: 'Retrieves the handle to a slider control buddy window at a given location',
        insertText: '_GUICtrlSlider_GetBuddy(${})'
    },
    {
        label: '_GUICtrlSlider_GetChannelRect',
        documentation: 'Retrieves the size and position of the bounding rectangle for a sliders\'s channel',
        insertText: '_GUICtrlSlider_GetChannelRect(${})'
    },
    {
        label: '_GUICtrlSlider_GetChannelRectEx',
        documentation: 'Retrieves the size and position of the bounding rectangle for a sliders\'s channel',
        insertText: '_GUICtrlSlider_GetChannelRectEx(${})'
    },
    {
        label: '_GUICtrlSlider_GetLineSize',
        documentation: 'Retrieves the number of logical positions the slider moves',
        insertText: '_GUICtrlSlider_GetLineSize(${})'
    },
    {
        label: '_GUICtrlSlider_GetLogicalTics',
        documentation: 'Retrieves an array that contains the logical positions of the tick marks for a slider',
        insertText: '_GUICtrlSlider_GetLogicalTics(${})'
    },
    {
        label: '_GUICtrlSlider_GetNumTics',
        documentation: 'Retrieves the number of tick marks from a slider',
        insertText: '_GUICtrlSlider_GetNumTics(${})'
    },
    {
        label: '_GUICtrlSlider_GetPageSize',
        documentation: 'Retrieves the number of logical positions the slider moves',
        insertText: '_GUICtrlSlider_GetPageSize(${})'
    },
    {
        label: '_GUICtrlSlider_GetPos',
        documentation: 'Retrieves the logical position the slider',
        insertText: '_GUICtrlSlider_GetPos(${})'
    },
    {
        label: '_GUICtrlSlider_GetRange',
        documentation: 'Retrieves the maximum and minimum position for the slider',
        insertText: '_GUICtrlSlider_GetRange(${})'
    },
    {
        label: '_GUICtrlSlider_GetRangeMax',
        documentation: 'Retrieves the maximum position for the slider',
        insertText: '_GUICtrlSlider_GetRangeMax(${})'
    },
    {
        label: '_GUICtrlSlider_GetRangeMin',
        documentation: 'Retrieves the minimum position for the slider',
        insertText: '_GUICtrlSlider_GetRangeMin(${})'
    },
    {
        label: '_GUICtrlSlider_GetSel',
        documentation: 'Retrieves the ending and starting position of the current selection range',
        insertText: '_GUICtrlSlider_GetSel(${})'
    },
    {
        label: '_GUICtrlSlider_GetSelEnd',
        documentation: 'Retrieves the ending position of the current selection range',
        insertText: '_GUICtrlSlider_GetSelEnd(${})'
    },
    {
        label: '_GUICtrlSlider_GetSelStart',
        documentation: 'Retrieves the starting position of the current selection range',
        insertText: '_GUICtrlSlider_GetSelStart(${})'
    },
    {
        label: '_GUICtrlSlider_GetThumbLength',
        documentation: 'Retrieves the length of the slider',
        insertText: '_GUICtrlSlider_GetThumbLength(${})'
    },
    {
        label: '_GUICtrlSlider_GetThumbRect',
        documentation: 'Retrieves the size and position of the bounding rectangle for the slider',
        insertText: '_GUICtrlSlider_GetThumbRect(${})'
    },
    {
        label: '_GUICtrlSlider_GetThumbRectEx',
        documentation: 'Retrieves the size and position of the bounding rectangle for the slider',
        insertText: '_GUICtrlSlider_GetThumbRectEx(${})'
    },
    {
        label: '_GUICtrlSlider_GetTic',
        documentation: 'Retrieves the logical position of a tick mark',
        insertText: '_GUICtrlSlider_GetTic(${})'
    },
    {
        label: '_GUICtrlSlider_GetTicPos',
        documentation: 'Retrieves the current physical position of a tick mark',
        insertText: '_GUICtrlSlider_GetTicPos(${})'
    },
    {
        label: '_GUICtrlSlider_GetToolTips',
        documentation: 'Retrieves the handle to the ToolTip control assigned to the slider, if any',
        insertText: '_GUICtrlSlider_GetToolTips(${})'
    },
    {
        label: '_GUICtrlSlider_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control',
        insertText: '_GUICtrlSlider_GetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlSlider_SetBuddy',
        documentation: 'Assigns a window as the buddy window for a slider control',
        insertText: '_GUICtrlSlider_SetBuddy(${})'
    },
    {
        label: '_GUICtrlSlider_SetLineSize',
        documentation: 'Sets the number of logical positions the slider moves',
        insertText: '_GUICtrlSlider_SetLineSize(${})'
    },
    {
        label: '_GUICtrlSlider_SetPageSize',
        documentation: 'Sets the number of logical positions the slider moves',
        insertText: '_GUICtrlSlider_SetPageSize(${})'
    },
    {
        label: '_GUICtrlSlider_SetPos',
        documentation: 'Sets the current logical position of the slider',
        insertText: '_GUICtrlSlider_SetPos(${})'
    },
    {
        label: '_GUICtrlSlider_SetRange',
        documentation: 'Sets the range of minimum and maximum logical positions for the slider',
        insertText: '_GUICtrlSlider_SetRange(${})'
    },
    {
        label: '_GUICtrlSlider_SetRangeMax',
        documentation: 'Sets the maximum logical position for the slider',
        insertText: '_GUICtrlSlider_SetRangeMax(${})'
    },
    {
        label: '_GUICtrlSlider_SetRangeMin',
        documentation: 'Sets the minimum logical position for the slider',
        insertText: '_GUICtrlSlider_SetRangeMin(${})'
    },
    {
        label: '_GUICtrlSlider_SetSel',
        documentation: 'Sets the starting and ending positions for the available selection range',
        insertText: '_GUICtrlSlider_SetSel(${})'
    },
    {
        label: '_GUICtrlSlider_SetSelEnd',
        documentation: 'Sets the ending logical position of the current selection range',
        insertText: '_GUICtrlSlider_SetSelEnd(${})'
    },
    {
        label: '_GUICtrlSlider_SetSelStart',
        documentation: 'Sets the starting logical position of the current selection range',
        insertText: '_GUICtrlSlider_SetSelStart(${})'
    },
    {
        label: '_GUICtrlSlider_SetThumbLength',
        documentation: 'Sets the length of the slider',
        insertText: '_GUICtrlSlider_SetThumbLength(${})'
    },
    {
        label: '_GUICtrlSlider_SetTic',
        documentation: 'Sets a tick mark in a slider at the specified logical position',
        insertText: '_GUICtrlSlider_SetTic(${})'
    },
    {
        label: '_GUICtrlSlider_SetTicFreq',
        documentation: 'Sets the interval frequency for tick marks in a slider',
        insertText: '_GUICtrlSlider_SetTicFreq(${})'
    },
    {
        label: '_GUICtrlSlider_SetTipSide',
        documentation: 'Positions a ToolTip control',
        insertText: '_GUICtrlSlider_SetTipSide(${})'
    },
    {
        label: '_GUICtrlSlider_SetToolTips',
        documentation: 'Assigns a ToolTip control to a slider control',
        insertText: '_GUICtrlSlider_SetToolTips(${})'
    },
    {
        label: '_GUICtrlSlider_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag for the control',
        insertText: '_GUICtrlSlider_SetUnicodeFormat(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiSlider UDF - #include <GuiSlider.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items