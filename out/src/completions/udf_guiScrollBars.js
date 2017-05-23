'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUIScrollBars_EnableScrollBar',
        documentation: 'Enable/Disable scrollbar'
    },
    {
        label: '_GUIScrollBars_GetScrollBarInfoEx',
        documentation: 'Retrieves information about the specified scroll bar'
    },
    {
        label: '_GUIScrollBars_GetScrollBarRect',
        documentation: 'Retrieves coordinates of the scroll bar'
    },
    {
        label: '_GUIScrollBars_GetScrollBarRGState',
        documentation: 'Retrieves the state of a scroll bar component'
    },
    {
        label: '_GUIScrollBars_GetScrollBarXYLineButton',
        documentation: 'Retrieves the Height or width of the thumb'
    },
    {
        label: '_GUIScrollBars_GetScrollBarXYThumbBottom',
        documentation: 'Retrieves the Position of the bottom or right of the thumb'
    },
    {
        label: '_GUIScrollBars_GetScrollBarXYThumbTop',
        documentation: 'Retrieves the Position of the top or left of the thumb'
    },
    {
        label: '_GUIScrollBars_GetScrollInfo',
        documentation: 'Retrieves the parameters of a scroll bar'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoEx',
        documentation: 'Retrieves the parameters of a scroll bar'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoMax',
        documentation: 'Retrieves the maximum scrolling position'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoMin',
        documentation: 'Retrieves the minimum scrolling position'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoPage',
        documentation: 'Retrieves the page size'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoPos',
        documentation: 'Retrieves the position of the scroll box'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoTrackPos',
        documentation: 'Retrieves the immediate position of a scroll box that the user is dragging'
    },
    {
        label: '_GUIScrollBars_GetScrollPos',
        documentation: 'Retrieves the current position of the scroll box (thumb) in the specified scroll bar'
    },
    {
        label: '_GUIScrollBars_GetScrollRange',
        documentation: 'Retrieves the current minimum and maximum scroll box (thumb) positions for the specified scroll bar'
    },
    {
        label: '_GUIScrollBars_Init',
        documentation: 'Initialize the scrollbars for the window'
    },
    {
        label: '_GUIScrollBars_ScrollWindow',
        documentation: 'Scrolls the contents of the specified window\'s client area'
    },
    {
        label: '_GUIScrollBars_SetScrollInfo',
        documentation: 'Sets the parameters of a scroll bar'
    },
    {
        label: '_GUIScrollBars_SetScrollInfoMax',
        documentation: 'Sets the maximum scrolling position'
    },
    {
        label: '_GUIScrollBars_SetScrollInfoMin',
        documentation: 'Sets the minimum scrolling position'
    },
    {
        label: '_GUIScrollBars_SetScrollInfoPage',
        documentation: 'Sets the page size'
    },
    {
        label: '_GUIScrollBars_SetScrollInfoPos',
        documentation: 'Sets the position of the scroll box (thumb) in the specified scroll bar'
    },
    {
        label: '_GUIScrollBars_SetScrollRange',
        documentation: 'Sets the minimum and maximum scroll box positions for the specified scroll bar'
    },
    {
        label: '_GUIScrollBars_ShowScrollBar',
        documentation: 'Shows or hides the specified scroll bar '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiScrollBars UDF - #include <GuiScrollBars.au3>'
}

module.exports = items