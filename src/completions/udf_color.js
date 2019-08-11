'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_ColorConvertHSLtoRGB',
        documentation: 'Converts HSL to RGB'
    },

    {
        label: '_ColorConvertRGBtoHSL',
        documentation: 'Converts RGB to HSL'
    },

    {
        label: '_ColorGetBlue',
        documentation: 'Returns the blue component of a given color'
    },

    {
        label: '_ColorGetCOLORREF',
        documentation: 'Returns the COLORREF color'
    },

    {
        label: '_ColorGetGreen',
        documentation: 'Returns the green component of a given color'
    },

    {
        label: '_ColorGetRed',
        documentation: 'Returns the red component of a given color'
    },

    {
        label: '_ColorGetRGB',
        documentation: 'Returns an array containing RGB values in their respective positions'
    },

    {
        label: '_ColorSetCOLORREF',
        documentation: 'Returns the COLORREF color'
    },

    {
        label: '_ColorSetRGB',
        documentation: 'Returns the RGB color '
    },
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Color UDF - #include <WinAPIGdi.au3>'
}

module.exports = items