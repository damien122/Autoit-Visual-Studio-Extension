'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_ScreenCapture_Capture',
        documentation: 'Captures a region of the screen',
        insertText: '_ScreenCapture_Capture(${})'
    },

    {
        label: '_ScreenCapture_CaptureWnd',
        documentation: 'Captures a screen shot of a specified window or controlID',
        insertText: '_ScreenCapture_CaptureWnd(${})'
    },

    {
        label: '_ScreenCapture_SaveImage',
        documentation: 'Saves an image to file',
        insertText: '_ScreenCapture_SaveImage(${})'
    },

    {
        label: '_ScreenCapture_SetBMPFormat',
        documentation: 'Sets the bit format that will be used for BMP screen captures',
        insertText: '_ScreenCapture_SetBMPFormat(${})'
    },

    {
        label: '_ScreenCapture_SetJPGQuality',
        documentation: 'Sets the quality level that will be used for JPEG screen captures',
        insertText: '_ScreenCapture_SetJPGQuality(${})'
    },

    {
        label: '_ScreenCapture_SetTIFColorDepth',
        documentation: 'Sets the color depth used for TIFF screen captures',
        insertText: '_ScreenCapture_SetTIFColorDepth(${})'
    },

    {
        label: '_ScreenCapture_SetTIFCompression',
        documentation: 'Sets the compression used for TIFF screen captures ',
        insertText: '_ScreenCapture_SetTIFCompression(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <ScreenCapture.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items