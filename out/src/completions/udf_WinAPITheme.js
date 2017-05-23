'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_WinAPI_BeginBufferedPaint',
        documentation: 'Begins a buffered paint operation'
    },
    {
        label: '_WinAPI_BufferedPaintClear',
        documentation: 'Clears a specified rectangle in the buffer to ARGB = {0,0,0,0}'
    },
    {
        label: '_WinAPI_BufferedPaintInit',
        documentation: 'Initialize buffered painting for the current thread'
    },
    {
        label: '_WinAPI_BufferedPaintSetAlpha',
        documentation: 'Sets the alpha to a specified value in a given rectangle'
    },
    {
        label: '_WinAPI_BufferedPaintUnInit',
        documentation: 'Closes down buffered painting for the current thread'
    },
    {
        label: '_WinAPI_CloseThemeData',
        documentation: 'Closes the theme data handle'
    },
    {
        label: '_WinAPI_DrawThemeBackground',
        documentation: 'Draws the border and fill defined by the visual style for the specified control part'
    },
    {
        label: '_WinAPI_DrawThemeEdge',
        documentation: 'Draws one or more edges defined by the visual style of a rectangle'
    },
    {
        label: '_WinAPI_DrawThemeIcon',
        documentation: 'Draws an image from an image list with the icon effect defined by the visual style'
    },
    {
        label: '_WinAPI_DrawThemeParentBackground',
        documentation: 'Draws the part of a parent control that is covered by a partially-transparent or alpha-blended child control'
    },
    {
        label: '_WinAPI_DrawThemeText',
        documentation: 'Draws text using the color and font defined by the visual style'
    },
    {
        label: '_WinAPI_DrawThemeTextEx',
        documentation: 'Draws text using the color and font defined by the visual style'
    },
    {
        label: '_WinAPI_EndBufferedPaint',
        documentation: 'Completes a buffered paint operation and frees the associated buffered paint handle'
    },
    {
        label: '_WinAPI_GetBufferedPaintBits',
        documentation: 'Retrieves a pointer to the buffer bitmap if the buffer is a device-independent bitmap (DIB)'
    },
    {
        label: '_WinAPI_GetBufferedPaintDC',
        documentation: 'Gets the paint device context (DC)'
    },
    {
        label: '_WinAPI_GetBufferedPaintTargetDC',
        documentation: 'Retrieves the target device context (DC)'
    },
    {
        label: '_WinAPI_GetBufferedPaintTargetRect',
        documentation: 'Retrieves the target rectangle'
    },
    {
        label: '_WinAPI_GetCurrentThemeName',
        documentation: 'Retrieves the name of the current visual styles, color scheme name, and size name'
    },
    {
        label: '_WinAPI_GetThemeAppProperties',
        documentation: 'Retrieves the property flags that control how visual styles are applied in the current application'
    },
    {
        label: '_WinAPI_GetThemeBackgroundContentRect',
        documentation: 'Retrieves the size of the content area for the background defined by the visual style'
    },
    {
        label: '_WinAPI_GetThemeBackgroundExtent',
        documentation: 'Calculates the size and location of the background, defined by the visual style, given the content area'
    },
    {
        label: '_WinAPI_GetThemeBackgroundRegion',
        documentation: 'Computes the region for a regular or partially transparent background that is bounded by a specified rectangle'
    },
    {
        label: '_WinAPI_GetThemeBitmap',
        documentation: 'Retrieves the bitmap associated with a particular theme, part, state, and property'
    },
    {
        label: '_WinAPI_GetThemeBool',
        documentation: 'Retrieves the value of a BOOL property from the SysMetrics section of theme data'
    },
    {
        label: '_WinAPI_GetThemeColor',
        documentation: 'Retrieves the value of a color property'
    },
    {
        label: '_WinAPI_GetThemeDocumentationProperty',
        documentation: 'Retrieves the value for a theme property from the documentation section of the specified theme file'
    },
    {
        label: '_WinAPI_GetThemeEnumValue',
        documentation: 'Retrieves the value of an enumerated type property'
    },
    {
        label: '_WinAPI_GetThemeFilename',
        documentation: 'Retrieves the value of a filename property'
    },
    {
        label: '_WinAPI_GetThemeFont',
        documentation: 'Retrieves the value of a font property'
    },
    {
        label: '_WinAPI_GetThemeInt',
        documentation: 'Retrieves the value of an INT property'
    },
    {
        label: '_WinAPI_GetThemeMargins',
        documentation: 'Retrieves the value of a margins property'
    },
    {
        label: '_WinAPI_GetThemeMetric',
        documentation: 'Retrieves the value of a metric property'
    },
    {
        label: '_WinAPI_GetThemePartSize',
        documentation: 'Calculates the original size of the part defined by a visual style'
    },
    {
        label: '_WinAPI_GetThemePosition',
        documentation: 'Retrieves the value of a position property'
    },
    {
        label: '_WinAPI_GetThemePropertyOrigin',
        documentation: 'Retrieves the location of the theme property definition for a property'
    },
    {
        label: '_WinAPI_GetThemeRect',
        documentation: 'Retrieves the value of a RECT property'
    },
    {
        label: '_WinAPI_GetThemeString',
        documentation: 'Retrieves the value of a string property'
    },
    {
        label: '_WinAPI_GetThemeSysBool',
        documentation: 'Retrieves the Boolean value of a system metric'
    },
    {
        label: '_WinAPI_GetThemeSysColor',
        documentation: 'Retrieves the value of a system color'
    },
    {
        label: '_WinAPI_GetThemeSysColorBrush',
        documentation: 'Retrieves a system color brush'
    },
    {
        label: '_WinAPI_GetThemeSysFont',
        documentation: 'Retrieves the font information of a system font'
    },
    {
        label: '_WinAPI_GetThemeSysInt',
        documentation: 'Retrieves the value of a system INT'
    },
    {
        label: '_WinAPI_GetThemeSysSize',
        documentation: 'Retrieves the value of a system size metric from theme data'
    },
    {
        label: '_WinAPI_GetThemeSysString',
        documentation: 'Retrieves the value of a system string'
    },
    {
        label: '_WinAPI_GetThemeTextExtent',
        documentation: 'Calculates the size and location of the specified text when rendered in the visual style font'
    },
    {
        label: '_WinAPI_GetThemeTextMetrics',
        documentation: 'Retrieves information about the font specified by a visual style for a particular part'
    },
    {
        label: '_WinAPI_GetThemeTransitionDuration',
        documentation: 'Gets the duration for the specified transition'
    },
    {
        label: '_WinAPI_GetWindowTheme',
        documentation: 'Retrieves a theme handle to a window that has visual styles applied'
    },
    {
        label: '_WinAPI_IsThemeActive',
        documentation: 'Tests if a visual style for the current application is active'
    },
    {
        label: '_WinAPI_IsThemeBackgroundPartiallyTransparent',
        documentation: 'Retrieves whether the background specified by the visual style has transparent pieces or alpha-blended pieces'
    },
    {
        label: '_WinAPI_IsThemePartDefined',
        documentation: 'Retrieves whether a visual style has defined parameters for the specified part'
    },
    {
        label: '_WinAPI_OpenThemeData',
        documentation: 'Opens the theme data for a window and its associated class'
    },
    {
        label: '_WinAPI_SetThemeAppProperties',
        documentation: 'Sets the flags that determine how visual styles are implemented in the calling application'
    },
    {
        label: '_WinAPI_SetWindowTheme',
        documentation: 'Causes a window to use a different set of visual style information than its class normally uses '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPITheme.au3>'
}

module.exports = items