'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlRebar_AddBand',
        documentation: 'Adds a new band in a rebar control'
    },
    {
        label: '_GUICtrlRebar_AddToolBarBand',
        documentation: 'Adds a new band in a rebar control'
    },
    {
        label: '_GUICtrlRebar_BeginDrag',
        documentation: 'Adds a new band in a rebar control'
    },
    {
        label: '_GUICtrlRebar_Create',
        documentation: 'Create a Rebar control'
    },
    {
        label: '_GUICtrlRebar_DeleteBand',
        documentation: 'Deletes a band from a rebar control'
    },
    {
        label: '_GUICtrlRebar_Destroy',
        documentation: 'Delete the control'
    },
    {
        label: '_GUICtrlRebar_DragMove',
        documentation: 'Updates the drag position in the rebar control after a previous _GUICtrlRebar_BeginDrag message'
    },
    {
        label: '_GUICtrlRebar_EndDrag',
        documentation: 'Terminates the rebar control\'s drag-and-drop operation'
    },
    {
        label: '_GUICtrlRebar_GetBandBackColor',
        documentation: 'Retrieves the Band background color'
    },
    {
        label: '_GUICtrlRebar_GetBandBorders',
        documentation: 'Retrieves the borders of a band'
    },
    {
        label: '_GUICtrlRebar_GetBandBordersEx',
        documentation: 'Retrieves the borders of a band'
    },
    {
        label: '_GUICtrlRebar_GetBandChildHandle',
        documentation: 'Retrieves the Handle to the child window contained in the band, if any'
    },
    {
        label: '_GUICtrlRebar_GetBandChildSize',
        documentation: 'Retrieves the Child size settings'
    },
    {
        label: '_GUICtrlRebar_GetBandCount',
        documentation: 'Retrieves the count of bands currently in the rebar control'
    },
    {
        label: '_GUICtrlRebar_GetBandForeColor',
        documentation: 'Retrieves the Band foreground color'
    },
    {
        label: '_GUICtrlRebar_GetBandHeaderSize',
        documentation: 'Retrieves the size of the band\'s header, in pixels'
    },
    {
        label: '_GUICtrlRebar_GetBandID',
        documentation: 'Get the value that the control uses to identify this band for custom draw notification messages'
    },
    {
        label: '_GUICtrlRebar_GetBandIdealSize',
        documentation: 'Get Ideal width of the band, in pixels'
    },
    {
        label: '_GUICtrlRebar_GetBandLength',
        documentation: 'Get Length of the band, in pixels'
    },
    {
        label: '_GUICtrlRebar_GetBandLParam',
        documentation: 'Get Application-defined value'
    },
    {
        label: '_GUICtrlRebar_GetBandMargins',
        documentation: 'Get Length of the band, in pixels'
    },
    {
        label: '_GUICtrlRebar_GetBandMarginsEx',
        documentation: 'Get Length of the band, in pixels'
    },
    {
        label: '_GUICtrlRebar_GetBandRect',
        documentation: 'Retrieves the bounding rectangle for a given band in a rebar control'
    },
    {
        label: '_GUICtrlRebar_GetBandRectEx',
        documentation: 'Retrieves the bounding rectangle for a given band in a rebar control'
    },
    {
        label: '_GUICtrlRebar_GetBandStyle',
        documentation: 'Get the band style Flags'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleBreak',
        documentation: 'Determine if band break flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleChildEdge',
        documentation: 'Determine if band child edge flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleFixedBMP',
        documentation: 'Determine if band fixed BMP flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleFixedSize',
        documentation: 'Determine if band fixed size flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleGripperAlways',
        documentation: 'Determine if band gripper flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleHidden',
        documentation: 'Determine if band hidden flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleHideTitle',
        documentation: 'Determine if band hide title flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleNoGripper',
        documentation: 'Determine if band noGripper flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleTopAlign',
        documentation: 'Determine if band top align flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleUseChevron',
        documentation: 'Determine if band use chevron flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleVariableHeight',
        documentation: 'Determine if band variable height flag is set'
    },
    {
        label: '_GUICtrlRebar_GetBandText',
        documentation: 'Retrieves the display text for the band'
    },
    {
        label: '_GUICtrlRebar_GetBarHeight',
        documentation: 'Retrieves the height of the rebar control'
    },
    {
        label: '_GUICtrlRebar_GetBarInfo',
        documentation: 'Retrieves information about the rebar control and the image list it uses'
    },
    {
        label: '_GUICtrlRebar_GetBKColor',
        documentation: 'Retrieves a rebar control\'s default background color'
    },
    {
        label: '_GUICtrlRebar_GetColorScheme',
        documentation: 'Retrieves the color scheme information from the rebar control'
    },
    {
        label: '_GUICtrlRebar_GetRowCount',
        documentation: 'Retrieves the number of rows of bands in a rebar control'
    },
    {
        label: '_GUICtrlRebar_GetRowHeight',
        documentation: 'Retrieves the height of a specified row in a rebar control'
    },
    {
        label: '_GUICtrlRebar_GetTextColor',
        documentation: 'Retrieves a rebar control\'s default text color'
    },
    {
        label: '_GUICtrlRebar_GetToolTips',
        documentation: 'Retrieves the handle to any ToolTip control associated with the rebar control'
    },
    {
        label: '_GUICtrlRebar_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control'
    },
    {
        label: '_GUICtrlRebar_HitTest',
        documentation: 'Determines which band is at a specified position'
    },
    {
        label: '_GUICtrlRebar_IDToIndex',
        documentation: 'Converts a band identifier to a band index in a rebar control'
    },
    {
        label: '_GUICtrlRebar_MaximizeBand',
        documentation: 'Resizes a band in a rebar control to either its ideal or largest size'
    },
    {
        label: '_GUICtrlRebar_MinimizeBand',
        documentation: 'Resizes a band in a rebar control to its smallest size'
    },
    {
        label: '_GUICtrlRebar_MoveBand',
        documentation: 'Moves a band from one index to another'
    },
    {
        label: '_GUICtrlRebar_SetBandBackColor',
        documentation: 'Set the Band background color'
    },
    {
        label: '_GUICtrlRebar_SetBandForeColor',
        documentation: 'Set the Band foreground color'
    },
    {
        label: '_GUICtrlRebar_SetBandHeaderSize',
        documentation: 'Set the size of the band\'s header, in pixels'
    },
    {
        label: '_GUICtrlRebar_SetBandID',
        documentation: 'Set the value that the control uses to identify this band for custom draw notification messages'
    },
    {
        label: '_GUICtrlRebar_SetBandIdealSize',
        documentation: 'Set Ideal width of the band, in pixels'
    },
    {
        label: '_GUICtrlRebar_SetBandLength',
        documentation: 'Set the size length of the band'
    },
    {
        label: '_GUICtrlRebar_SetBandLParam',
        documentation: 'Set Application-defined value'
    },
    {
        label: '_GUICtrlRebar_SetBandStyle',
        documentation: 'Set the band style Flags'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleBreak',
        documentation: 'Set whether the band is on a new line'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleChildEdge',
        documentation: 'Set whether the band has an edge at the top and bottom of the child window'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleFixedBMP',
        documentation: 'Set whether the band background bitmap does not move when the band is resized'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleFixedSize',
        documentation: 'Set whether the band can\'t be sized. With this style, the sizing grip is not displayed on the band'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleGripperAlways',
        documentation: 'Set whether the band will always have a sizing grip, even if it is the only band in the rebar'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleHidden',
        documentation: 'Set whether the band will not be visible'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleHideTitle',
        documentation: 'Set whether to keep band title hidden'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleNoGripper',
        documentation: 'Set whether the band will never have a sizing grip, even if there is more than one band in the rebar'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleTopAlign',
        documentation: 'Set whether to keep band in top row'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleUseChevron',
        documentation: 'Set whether to display drop-down button'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleVariableHeight',
        documentation: 'Set whether the band can be resized by the rebar control'
    },
    {
        label: '_GUICtrlRebar_SetBandText',
        documentation: 'Sets the display text for the band of a rebar control'
    },
    {
        label: '_GUICtrlRebar_SetBarInfo',
        documentation: 'Sets the characteristics of a rebar control'
    },
    {
        label: '_GUICtrlRebar_SetBKColor',
        documentation: 'Sets the default background color of a rebar control'
    },
    {
        label: '_GUICtrlRebar_SetColorScheme',
        documentation: 'Sets the color scheme of a rebar control'
    },
    {
        label: '_GUICtrlRebar_SetTextColor',
        documentation: 'Sets a rebar control\'s default text color'
    },
    {
        label: '_GUICtrlRebar_SetToolTips',
        documentation: 'Associates a ToolTip control with the rebar control'
    },
    {
        label: '_GUICtrlRebar_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag for the control'
    },
    {
        label: '_GUICtrlRebar_ShowBand',
        documentation: 'Shows or hides a given band in a rebar control '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiReBar UDF - #include <GuiReBar.au3>'
}

module.exports = items