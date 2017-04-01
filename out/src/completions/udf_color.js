'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_ColorConvertHSLtoRGB',
        documentation: 'Converts HSL to RGB',
        insertText: '_ColorConvertHSLtoRGB(${})'
    },

    {
        label: '_ColorConvertRGBtoHSL',
        documentation: 'Converts RGB to HSL',
        insertText: '_ColorConvertRGBtoHSL(${})'
    },

    {
        label: '_ColorGetBlue',
        documentation: 'Returns the blue component of a given color',
        insertText: '_ColorGetBlue(${})'
    },

    {
        label: '_ColorGetCOLORREF',
        documentation: 'Returns the COLORREF color',
        insertText: '_ColorGetCOLORREF(${})'
    },

    {
        label: '_ColorGetGreen',
        documentation: 'Returns the green component of a given color',
        insertText: '_ColorGetGreen(${})'
    },

    {
        label: '_ColorGetRed',
        documentation: 'Returns the red component of a given color',
        insertText: '_ColorGetRed(${})'
    },

    {
        label: '_ColorGetRGB',
        documentation: 'Returns an array containing RGB values in their respective positions',
        insertText: '_ColorGetRGB(${})'
    },

    {
        label: '_ColorSetCOLORREF',
        documentation: 'Returns the COLORREF color',
        insertText: '_ColorSetCOLORREF(${})'
    },

    {
        label: '_ColorSetRGB',
        documentation: 'Returns the RGB color ',
        insertText: '_ColorSetRGB(${})'
    },
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Color UDF - #include <WinAPIGdi.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items