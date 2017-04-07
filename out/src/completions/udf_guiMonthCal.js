'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUICtrlMonthCal_Create',
        documentation: 'Creates a Month Calendar control',
        insertText: '_GUICtrlMonthCal_Create(${})'
    },
    {
        label: '_GUICtrlMonthCal_Destroy',
        documentation: 'Delete the MonthCal control',
        insertText: '_GUICtrlMonthCal_Destroy(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetCalendarBorder',
        documentation: 'Gets the size of the border, in pixels',
        insertText: '_GUICtrlMonthCal_GetCalendarBorder(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetCalendarCount',
        documentation: 'Gets the number of calendars currently displayed in the calendar control',
        insertText: '_GUICtrlMonthCal_GetCalendarCount(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetColor',
        documentation: 'Retrieves a given color for the control',
        insertText: '_GUICtrlMonthCal_GetColor(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetColorArray',
        documentation: 'Retrieves the color for a given portion of a month calendar control',
        insertText: '_GUICtrlMonthCal_GetColorArray(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetCurSel',
        documentation: 'Retrieves the currently selected date',
        insertText: '_GUICtrlMonthCal_GetCurSel(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetCurSelStr',
        documentation: 'Retrieves the currently selected date in string format',
        insertText: '_GUICtrlMonthCal_GetCurSelStr(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetFirstDOW',
        documentation: 'Retrieves the first day of the week',
        insertText: '_GUICtrlMonthCal_GetFirstDOW(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetFirstDOWStr',
        documentation: 'Retrieves the first day of the week as a string',
        insertText: '_GUICtrlMonthCal_GetFirstDOWStr(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMaxSelCount',
        documentation: 'Retrieves the maximum date range that can be selected in a month calendar control',
        insertText: '_GUICtrlMonthCal_GetMaxSelCount(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMaxTodayWidth',
        documentation: 'Retrieves the maximum width of the "today" string in a month calendar control',
        insertText: '_GUICtrlMonthCal_GetMaxTodayWidth(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMinReqHeight',
        documentation: 'Retrieves the minimum height required to display a full month',
        insertText: '_GUICtrlMonthCal_GetMinReqHeight(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMinReqRect',
        documentation: 'Retrieves the minimum size required to display a full month',
        insertText: '_GUICtrlMonthCal_GetMinReqRect(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMinReqRectArray',
        documentation: 'Retrieves the minimum size required to display a full month in a month calendar control',
        insertText: '_GUICtrlMonthCal_GetMinReqRectArray(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMinReqWidth',
        documentation: 'Retrieves the minimum width required to display a full month',
        insertText: '_GUICtrlMonthCal_GetMinReqWidth(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMonthDelta',
        documentation: 'Retrieves the scroll rate for a month calendar control',
        insertText: '_GUICtrlMonthCal_GetMonthDelta(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMonthRange',
        documentation: 'Retrieves date information that represents the high and low display limits',
        insertText: '_GUICtrlMonthCal_GetMonthRange(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMonthRangeMax',
        documentation: 'Retrieves date information that represents the high limit of the controls display',
        insertText: '_GUICtrlMonthCal_GetMonthRangeMax(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMonthRangeMaxStr',
        documentation: 'Retrieves date information that represents the high limit of the controls display in string format',
        insertText: '_GUICtrlMonthCal_GetMonthRangeMaxStr(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMonthRangeMin',
        documentation: 'Retrieves date information that represents the low limit of the controls display',
        insertText: '_GUICtrlMonthCal_GetMonthRangeMin(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMonthRangeMinStr',
        documentation: 'Retrieves date information that represents the low limit of the controls display in string format',
        insertText: '_GUICtrlMonthCal_GetMonthRangeMinStr(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetMonthRangeSpan',
        documentation: 'Returns a value that represents the range, in months, spanned',
        insertText: '_GUICtrlMonthCal_GetMonthRangeSpan(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetRange',
        documentation: 'Retrieves the minimum and maximum allowable dates',
        insertText: '_GUICtrlMonthCal_GetRange(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetRangeMax',
        documentation: 'Retrieves the upper limit date range',
        insertText: '_GUICtrlMonthCal_GetRangeMax(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetRangeMaxStr',
        documentation: 'Retrieves the upper limit date range in string format',
        insertText: '_GUICtrlMonthCal_GetRangeMaxStr(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetRangeMin',
        documentation: 'Retrieves the lower limit date range',
        insertText: '_GUICtrlMonthCal_GetRangeMin(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetRangeMinStr',
        documentation: 'Retrieves the lower limit date range in string form',
        insertText: '_GUICtrlMonthCal_GetRangeMinStr(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetSelRange',
        documentation: 'Retrieves the upper and lower limits of the date range currently selected',
        insertText: '_GUICtrlMonthCal_GetSelRange(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetSelRangeMax',
        documentation: 'Retrieves the upper date range currently selected by the user',
        insertText: '_GUICtrlMonthCal_GetSelRangeMax(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetSelRangeMaxStr',
        documentation: 'Retrieves the upper date range currently selected by the user in string form',
        insertText: '_GUICtrlMonthCal_GetSelRangeMaxStr(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetSelRangeMin',
        documentation: 'Retrieves the lower date range currently selected by the user',
        insertText: '_GUICtrlMonthCal_GetSelRangeMin(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetSelRangeMinStr',
        documentation: 'Retrieves the lower date range currently selected by the user in string form',
        insertText: '_GUICtrlMonthCal_GetSelRangeMinStr(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetToday',
        documentation: 'Retrieves the date information for the date specified as "today"',
        insertText: '_GUICtrlMonthCal_GetToday(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetTodayStr',
        documentation: 'Retrieves the date information for the date specified as "today" in string format',
        insertText: '_GUICtrlMonthCal_GetTodayStr(${})'
    },
    {
        label: '_GUICtrlMonthCal_GetUnicodeFormat',
        documentation: 'Retrieves the Unicode character format flag for the control',
        insertText: '_GUICtrlMonthCal_GetUnicodeFormat(${})'
    },
    {
        label: '_GUICtrlMonthCal_HitTest',
        documentation: 'Determines which portion of a month calendar control is at a given point',
        insertText: '_GUICtrlMonthCal_HitTest(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetCalendarBorder',
        documentation: 'Sets the size of the border, in pixels',
        insertText: '_GUICtrlMonthCal_SetCalendarBorder(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetColor',
        documentation: 'Sets the color for a given portion of the month calendar',
        insertText: '_GUICtrlMonthCal_SetColor(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetCurSel',
        documentation: 'Sets the currently selected date',
        insertText: '_GUICtrlMonthCal_SetCurSel(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetDayState',
        documentation: 'Sets the day states for all months that are currently visible',
        insertText: '_GUICtrlMonthCal_SetDayState(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetFirstDOW',
        documentation: 'Sets the first day of the week for a month calendar control',
        insertText: '_GUICtrlMonthCal_SetFirstDOW(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetMaxSelCount',
        documentation: 'Sets the maximum number of days that can be selected in a month calendar control',
        insertText: '_GUICtrlMonthCal_SetMaxSelCount(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetMonthDelta',
        documentation: 'Sets the scroll rate for a month calendar control',
        insertText: '_GUICtrlMonthCal_SetMonthDelta(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetRange',
        documentation: 'Sets date information that represents the high and low limits',
        insertText: '_GUICtrlMonthCal_SetRange(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetSelRange',
        documentation: 'Sets the selection for a month calendar control to a given date range',
        insertText: '_GUICtrlMonthCal_SetSelRange(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetToday',
        documentation: 'Sets the date information for the date specified as "today"',
        insertText: '_GUICtrlMonthCal_SetToday(${})'
    },
    {
        label: '_GUICtrlMonthCal_SetUnicodeFormat',
        documentation: 'Sets the Unicode character format flag for the control ',
        insertText: '_GUICtrlMonthCal_SetUnicodeFormat(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiMonthCal UDF - #include <GuiMonthCal.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items