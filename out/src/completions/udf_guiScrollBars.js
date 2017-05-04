'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUIScrollBars_EnableScrollBar',
        documentation: 'Enable/Disable scrollbar',
        insertText: '_GUIScrollBars_EnableScrollBar(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollBarInfoEx',
        documentation: 'Retrieves information about the specified scroll bar',
        insertText: '_GUIScrollBars_GetScrollBarInfoEx(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollBarRect',
        documentation: 'Retrieves coordinates of the scroll bar',
        insertText: '_GUIScrollBars_GetScrollBarRect(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollBarRGState',
        documentation: 'Retrieves the state of a scroll bar component',
        insertText: '_GUIScrollBars_GetScrollBarRGState(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollBarXYLineButton',
        documentation: 'Retrieves the Height or width of the thumb',
        insertText: '_GUIScrollBars_GetScrollBarXYLineButton(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollBarXYThumbBottom',
        documentation: 'Retrieves the Position of the bottom or right of the thumb',
        insertText: '_GUIScrollBars_GetScrollBarXYThumbBottom(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollBarXYThumbTop',
        documentation: 'Retrieves the Position of the top or left of the thumb',
        insertText: '_GUIScrollBars_GetScrollBarXYThumbTop(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollInfo',
        documentation: 'Retrieves the parameters of a scroll bar',
        insertText: '_GUIScrollBars_GetScrollInfo(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoEx',
        documentation: 'Retrieves the parameters of a scroll bar',
        insertText: '_GUIScrollBars_GetScrollInfoEx(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoMax',
        documentation: 'Retrieves the maximum scrolling position',
        insertText: '_GUIScrollBars_GetScrollInfoMax(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoMin',
        documentation: 'Retrieves the minimum scrolling position',
        insertText: '_GUIScrollBars_GetScrollInfoMin(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoPage',
        documentation: 'Retrieves the page size',
        insertText: '_GUIScrollBars_GetScrollInfoPage(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoPos',
        documentation: 'Retrieves the position of the scroll box',
        insertText: '_GUIScrollBars_GetScrollInfoPos(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollInfoTrackPos',
        documentation: 'Retrieves the immediate position of a scroll box that the user is dragging',
        insertText: '_GUIScrollBars_GetScrollInfoTrackPos(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollPos',
        documentation: 'Retrieves the current position of the scroll box (thumb) in the specified scroll bar',
        insertText: '_GUIScrollBars_GetScrollPos(${})'
    },
    {
        label: '_GUIScrollBars_GetScrollRange',
        documentation: 'Retrieves the current minimum and maximum scroll box (thumb) positions for the specified scroll bar',
        insertText: '_GUIScrollBars_GetScrollRange(${})'
    },
    {
        label: '_GUIScrollBars_Init',
        documentation: 'Initialize the scrollbars for the window',
        insertText: '_GUIScrollBars_Init(${})'
    },
    {
        label: '_GUIScrollBars_ScrollWindow',
        documentation: 'Scrolls the contents of the specified window\'s client area',
        insertText: '_GUIScrollBars_ScrollWindow(${})'
    },
    {
        label: '_GUIScrollBars_SetScrollInfo',
        documentation: 'Sets the parameters of a scroll bar',
        insertText: '_GUIScrollBars_SetScrollInfo(${})'
    },
    {
        label: '_GUIScrollBars_SetScrollInfoMax',
        documentation: 'Sets the maximum scrolling position',
        insertText: '_GUIScrollBars_SetScrollInfoMax(${})'
    },
    {
        label: '_GUIScrollBars_SetScrollInfoMin',
        documentation: 'Sets the minimum scrolling position',
        insertText: '_GUIScrollBars_SetScrollInfoMin(${})'
    },
    {
        label: '_GUIScrollBars_SetScrollInfoPage',
        documentation: 'Sets the page size',
        insertText: '_GUIScrollBars_SetScrollInfoPage(${})'
    },
    {
        label: '_GUIScrollBars_SetScrollInfoPos',
        documentation: 'Sets the position of the scroll box (thumb) in the specified scroll bar',
        insertText: '_GUIScrollBars_SetScrollInfoPos(${})'
    },
    {
        label: '_GUIScrollBars_SetScrollRange',
        documentation: 'Sets the minimum and maximum scroll box positions for the specified scroll bar',
        insertText: '_GUIScrollBars_SetScrollRange(${})'
    },
    {
        label: '_GUIScrollBars_ShowScrollBar',
        documentation: 'Shows or hides the specified scroll bar ',
        insertText: '_GUIScrollBars_ShowScrollBar(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiScrollBars UDF - #include <GuiScrollBars.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items