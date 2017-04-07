'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlRebar_AddBand',
        documentation: 'Adds a new band in a rebar control',
        insertText: '_GUICtrlRebar_AddBand(${})'
    },
    {
        label: '_GUICtrlRebar_AddToolBarBand',
        documentation: 'Adds a new band in a rebar control',
        insertText: '_GUICtrlRebar_AddToolBarBand(${})'
    },
    {
        label: '_GUICtrlRebar_BeginDrag',
        documentation: 'Adds a new band in a rebar control',
        insertText: '_GUICtrlRebar_BeginDrag(${})'
    },
    {
        label: '_GUICtrlRebar_Create',
        documentation: 'Create a Rebar control',
        insertText: '_GUICtrlRebar_Create(${})'
    },
    {
        label: '_GUICtrlRebar_DeleteBand',
        documentation: 'Deletes a band from a rebar control',
        insertText: '_GUICtrlRebar_DeleteBand(${})'
    },
    {
        label: '_GUICtrlRebar_Destroy',
        documentation: 'Delete the control',
        insertText: '_GUICtrlRebar_Destroy(${})'
    },
    {
        label: '_GUICtrlRebar_DragMove',
        documentation: 'Updates the drag position in the rebar control after a previous _GUICtrlRebar_BeginDrag message',
        insertText: '_GUICtrlRebar_DragMove(${})'
    },
    {
        label: '_GUICtrlRebar_EndDrag',
        documentation: 'Terminates the rebar control\'s drag-and-drop operation',
        insertText: '_GUICtrlRebar_EndDrag(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandBackColor',
        documentation: 'Retrieves the Band background color',
        insertText: '_GUICtrlRebar_GetBandBackColor(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandBorders',
        documentation: 'Retrieves the borders of a band',
        insertText: '_GUICtrlRebar_GetBandBorders(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandBordersEx',
        documentation: 'Retrieves the borders of a band',
        insertText: '_GUICtrlRebar_GetBandBordersEx(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandChildHandle',
        documentation: 'Retrieves the Handle to the child window contained in the band, if any',
        insertText: '_GUICtrlRebar_GetBandChildHandle(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandChildSize',
        documentation: 'Retrieves the Child size settings',
        insertText: '_GUICtrlRebar_GetBandChildSize(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandCount',
        documentation: 'Retrieves the count of bands currently in the rebar control',
        insertText: '_GUICtrlRebar_GetBandCount(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandForeColor',
        documentation: 'Retrieves the Band foreground color',
        insertText: '_GUICtrlRebar_GetBandForeColor(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandHeaderSize',
        documentation: 'Retrieves the size of the band\'s header, in pixels',
        insertText: '_GUICtrlRebar_GetBandHeaderSize(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandID',
        documentation: 'Get the value that the control uses to identify this band for custom draw notification messages',
        insertText: '_GUICtrlRebar_GetBandID(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandIdealSize',
        documentation: 'Get Ideal width of the band, in pixels',
        insertText: '_GUICtrlRebar_GetBandIdealSize(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandLength',
        documentation: 'Get Length of the band, in pixels',
        insertText: '_GUICtrlRebar_GetBandLength(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandLParam',
        documentation: 'Get Application-defined value',
        insertText: '_GUICtrlRebar_GetBandLParam(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandMargins',
        documentation: 'Get Length of the band, in pixels',
        insertText: '_GUICtrlRebar_GetBandMargins(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandMarginsEx',
        documentation: 'Get Length of the band, in pixels',
        insertText: '_GUICtrlRebar_GetBandMarginsEx(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandRect',
        documentation: 'Retrieves the bounding rectangle for a given band in a rebar control',
        insertText: '_GUICtrlRebar_GetBandRect(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandRectEx',
        documentation: 'Retrieves the bounding rectangle for a given band in a rebar control',
        insertText: '_GUICtrlRebar_GetBandRectEx(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyle',
        documentation: 'Get the band style Flags',
        insertText: '_GUICtrlRebar_GetBandStyle(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleBreak',
        documentation: 'Determine if band break flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleBreak(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleChildEdge',
        documentation: 'Determine if band child edge flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleChildEdge(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleFixedBMP',
        documentation: 'Determine if band fixed BMP flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleFixedBMP(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleFixedSize',
        documentation: 'Determine if band fixed size flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleFixedSize(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleGripperAlways',
        documentation: 'Determine if band gripper flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleGripperAlways(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleHidden',
        documentation: 'Determine if band hidden flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleHidden(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleHideTitle',
        documentation: 'Determine if band hide title flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleHideTitle(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleNoGripper',
        documentation: 'Determine if band noGripper flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleNoGripper(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleTopAlign',
        documentation: 'Determine if band top align flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleTopAlign(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleUseChevron',
        documentation: 'Determine if band use chevron flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleUseChevron(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandStyleVariableHeight',
        documentation: 'Determine if band variable height flag is set',
        insertText: '_GUICtrlRebar_GetBandStyleVariableHeight(${})'
    },
    {
        label: '_GUICtrlRebar_GetBandText',
        documentation: 'Retrieves the display text for the band',
        insertText: '_GUICtrlRebar_GetBandText(${})'
    },
    {
        label: '_GUICtrlRebar_GetBarHeight',
        documentation: 'Retrieves the height of the rebar control',
        insertText: '_GUICtrlRebar_GetBarHeight(${})'
    },
    {
        label: '_GUICtrlRebar_GetBarInfo',
        documentation: 'Retrieves information about the rebar control and the image list it uses',
        insertText: '_GUICtrlRebar_GetBarInfo(${})'
    },
    {
        label: '_GUICtrlRebar_GetBKColor',
        documentation: 'Retrieves a rebar control\'s default background color',
        insertText: '_GUICtrlRebar_GetBKColor(${})'
    },
    {
        label: '_GUICtrlRebar_GetColorScheme',
        documentation: 'Retrieves the color scheme information from the rebar control',
        insertText: '_GUICtrlRebar_GetColorScheme(${})'
    },
    {
        label: '_GUICtrlRebar_GetRowCount',
        documentation: 'Retrieves the number of rows of bands in a rebar control',
        insertText: '_GUICtrlRebar_GetRowCount(${})'
    },
    {
        label: '_GUICtrlRebar_GetRowHeight',
        documentation: 'Retrieves the height of a specified row in a rebar control',
        insertText: '_GUICtrlRebar_GetRowHeight(${})'
    },
    {
        label: '_GUICtrlRebar_GetTextColor',
        documentation: 'Retrieves a rebar control\'s default text color',
        insertText: '_GUICtrlRebar_GetTextColor(${})'
    },
    {
        label: '_GUICtrlRebar_GetToolTips',
        documentation: 'Retrieves the handle to any ToolTip control associated with the rebar control',
        insertText: '_GUICtrlRebar_GetToolTips(${})'
    },
    {
        label: '_GUICtrlRebar_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control',
        insertText: '_GUICtrlRebar_GetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlRebar_HitTest',
        documentation: 'Determines which band is at a specified position',
        insertText: '_GUICtrlRebar_HitTest(${})'
    },
    {
        label: '_GUICtrlRebar_IDToIndex',
        documentation: 'Converts a band identifier to a band index in a rebar control',
        insertText: '_GUICtrlRebar_IDToIndex(${})'
    },
    {
        label: '_GUICtrlRebar_MaximizeBand',
        documentation: 'Resizes a band in a rebar control to either its ideal or largest size',
        insertText: '_GUICtrlRebar_MaximizeBand(${})'
    },
    {
        label: '_GUICtrlRebar_MinimizeBand',
        documentation: 'Resizes a band in a rebar control to its smallest size',
        insertText: '_GUICtrlRebar_MinimizeBand(${})'
    },
    {
        label: '_GUICtrlRebar_MoveBand',
        documentation: 'Moves a band from one index to another',
        insertText: '_GUICtrlRebar_MoveBand(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandBackColor',
        documentation: 'Set the Band background color',
        insertText: '_GUICtrlRebar_SetBandBackColor(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandForeColor',
        documentation: 'Set the Band foreground color',
        insertText: '_GUICtrlRebar_SetBandForeColor(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandHeaderSize',
        documentation: 'Set the size of the band\'s header, in pixels',
        insertText: '_GUICtrlRebar_SetBandHeaderSize(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandID',
        documentation: 'Set the value that the control uses to identify this band for custom draw notification messages',
        insertText: '_GUICtrlRebar_SetBandID(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandIdealSize',
        documentation: 'Set Ideal width of the band, in pixels',
        insertText: '_GUICtrlRebar_SetBandIdealSize(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandLength',
        documentation: 'Set the size length of the band',
        insertText: '_GUICtrlRebar_SetBandLength(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandLParam',
        documentation: 'Set Application-defined value',
        insertText: '_GUICtrlRebar_SetBandLParam(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyle',
        documentation: 'Set the band style Flags',
        insertText: '_GUICtrlRebar_SetBandStyle(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleBreak',
        documentation: 'Set whether the band is on a new line',
        insertText: '_GUICtrlRebar_SetBandStyleBreak(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleChildEdge',
        documentation: 'Set whether the band has an edge at the top and bottom of the child window',
        insertText: '_GUICtrlRebar_SetBandStyleChildEdge(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleFixedBMP',
        documentation: 'Set whether the band background bitmap does not move when the band is resized',
        insertText: '_GUICtrlRebar_SetBandStyleFixedBMP(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleFixedSize',
        documentation: 'Set whether the band can\'t be sized. With this style, the sizing grip is not displayed on the band',
        insertText: '_GUICtrlRebar_SetBandStyleFixedSize(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleGripperAlways',
        documentation: 'Set whether the band will always have a sizing grip, even if it is the only band in the rebar',
        insertText: '_GUICtrlRebar_SetBandStyleGripperAlways(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleHidden',
        documentation: 'Set whether the band will not be visible',
        insertText: '_GUICtrlRebar_SetBandStyleHidden(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleHideTitle',
        documentation: 'Set whether to keep band title hidden',
        insertText: '_GUICtrlRebar_SetBandStyleHideTitle(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleNoGripper',
        documentation: 'Set whether the band will never have a sizing grip, even if there is more than one band in the rebar',
        insertText: '_GUICtrlRebar_SetBandStyleNoGripper(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleTopAlign',
        documentation: 'Set whether to keep band in top row',
        insertText: '_GUICtrlRebar_SetBandStyleTopAlign(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleUseChevron',
        documentation: 'Set whether to display drop-down button',
        insertText: '_GUICtrlRebar_SetBandStyleUseChevron(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandStyleVariableHeight',
        documentation: 'Set whether the band can be resized by the rebar control',
        insertText: '_GUICtrlRebar_SetBandStyleVariableHeight(${})'
    },
    {
        label: '_GUICtrlRebar_SetBandText',
        documentation: 'Sets the display text for the band of a rebar control',
        insertText: '_GUICtrlRebar_SetBandText(${})'
    },
    {
        label: '_GUICtrlRebar_SetBarInfo',
        documentation: 'Sets the characteristics of a rebar control',
        insertText: '_GUICtrlRebar_SetBarInfo(${})'
    },
    {
        label: '_GUICtrlRebar_SetBKColor',
        documentation: 'Sets the default background color of a rebar control',
        insertText: '_GUICtrlRebar_SetBKColor(${})'
    },
    {
        label: '_GUICtrlRebar_SetColorScheme',
        documentation: 'Sets the color scheme of a rebar control',
        insertText: '_GUICtrlRebar_SetColorScheme(${})'
    },
    {
        label: '_GUICtrlRebar_SetTextColor',
        documentation: 'Sets a rebar control\'s default text color',
        insertText: '_GUICtrlRebar_SetTextColor(${})'
    },
    {
        label: '_GUICtrlRebar_SetToolTips',
        documentation: 'Associates a ToolTip control with the rebar control',
        insertText: '_GUICtrlRebar_SetToolTips(${})'
    },
    {
        label: '_GUICtrlRebar_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag for the control',
        insertText: '_GUICtrlRebar_SetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlRebar_ShowBand',
        documentation: 'Shows or hides a given band in a rebar control ',
        insertText: '_GUICtrlRebar_ShowBand(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiReBar UDF - #include <GuiReBar.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items