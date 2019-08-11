'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_WinAPI_AddIconOverlay',
        documentation: 'Creates an icon by merging the source icon and overlay mask'
    },
    {
        label: '_WinAPI_AdjustBitmap',
        documentation: 'Creates a new device-depended bitmap (DDB) from the source bitmap with new dimensions and color adjustment'
    },
    {
        label: '_WinAPI_AlphaBlend',
        documentation: 'Displays bitmaps that have transparent or semitransparent pixels'
    },
    {
        label: '_WinAPI_CompressBitmapBits',
        documentation: 'Creates a compressed data block from the specified bitmap'
    },
    {
        label: '_WinAPI_CopyBitmap',
        documentation: 'Creates a duplicate of a specified bitmap with a device-independent bitmap (DIB) section'
    },
    {
        label: '_WinAPI_CopyImage',
        documentation: 'Creates a new image (icon, cursor, or bitmap) and copies the attributes of the specified image to the new one'
    },
    {
        label: '_WinAPI_Create32BitHBITMAP',
        documentation: 'Creates a 32 bits-per-pixel bitmap from the specified icon'
    },
    {
        label: '_WinAPI_Create32BitHICON',
        documentation: 'Converts an icon to a 32 bits-per-pixel format and copies to the new icon'
    },
    {
        label: '_WinAPI_CreateANDBitmap',
        documentation: 'Creates AND bitmask device-independent bitmap (DIB) from the specified bitmap'
    },
    {
        label: '_WinAPI_CreateBitmapIndirect',
        documentation: 'Creates a bitmap with the specified width, height, and color format (color planes and bits-per-pixel)'
    },
    {
        label: '_WinAPI_CreateCompatibleBitmapEx',
        documentation: 'Creates a bitmap compatible with the device and fills it the specified color'
    },
    {
        label: '_WinAPI_CreateDIB',
        documentation: 'Creates an uncompressed device-independent bitmap (DIB) with the specified width, height, and color depth'
    },
    {
        label: '_WinAPI_CreateDIBColorTable',
        documentation: 'Creates RGB color table from the specified array of colors'
    },
    {
        label: '_WinAPI_CreateDIBitmap',
        documentation: 'Creates a compatible bitmap (DDB) from a DIB and, optionally, sets the bitmap bits'
    },
    {
        label: '_WinAPI_CreateDIBSection',
        documentation: 'Creates a DIB that applications can write to directly'
    },
    {
        label: '_WinAPI_CreateEmptyIcon',
        documentation: 'Creates a fully transparent icon with the specified width, height, and color depth'
    },
    {
        label: '_WinAPI_CreateIconIndirect',
        documentation: 'Creates an icon or cursor that has the specified size, colors, and bit patterns'
    },
    {
        label: '_WinAPI_DrawBitmap',
        documentation: 'Draws a bitmap into the specified device context'
    },
    {
        label: '_WinAPI_ExtFloodFill',
        documentation: 'Fills an area of the display surface with the current brush'
    },
    {
        label: '_WinAPI_GetBitmapBits',
        documentation: 'Copies the bitmap bits of a specified device-dependent bitmap into a buffer'
    },
    {
        label: '_WinAPI_GetBitmapDimension',
        documentation: 'Retrieves a dimension of the specified bitmap'
    },
    {
        label: '_WinAPI_GetBitmapDimensionEx',
        documentation: 'Retrieves the dimensions of a compatible bitmap'
    },
    {
        label: '_WinAPI_GetDIBColorTable',
        documentation: 'Retrieves RGB color table from the DIB section bitmap'
    },
    {
        label: '_WinAPI_GetIconDimension',
        documentation: 'Retrieves a dimension of the specified icon'
    },
    {
        label: '_WinAPI_GetPixel',
        documentation: 'Retrieves the color value of the pixel at the specified coordinates'
    },
    {
        label: '_WinAPI_GetStretchBltMode',
        documentation: 'Retrieves the current stretching mode'
    },
    {
        label: '_WinAPI_GradientFill',
        documentation: 'Fills rectangle or triangle gradient'
    },
    {
        label: '_WinAPI_InvertANDBitmap',
        documentation: 'Inverts the specified AND bitmask bitmap by performing a logical NOT operation'
    },
    {
        label: '_WinAPI_IsAlphaBitmap',
        documentation: 'Determines whether the specified bitmap has an alpha channel'
    },
    {
        label: '_WinAPI_MaskBlt',
        documentation: 'Combines the color data for the source and destination bitmaps using the specified mask and raster operation'
    },
    {
        label: '_WinAPI_PlgBlt',
        documentation: 'Performs a bit-block transfer of color data from the specified rectangle in the source DC to the specified parallelogram in the DC context'
    },
    {
        label: '_WinAPI_RadialGradientFill',
        documentation: 'Fills radial gradient'
    },
    {
        label: '_WinAPI_SaveHBITMAPToFile',
        documentation: 'Saves a specified bitmap to the specified bitmap (.bmp) file'
    },
    {
        label: '_WinAPI_SaveHICONToFile',
        documentation: 'Saves a specified single or multiple icon (HICON) to the specified icon (.ico) file'
    },
    {
        label: '_WinAPI_SetBitmapBits',
        documentation: 'Sets the bits of color data for a bitmap to the specified values'
    },
    {
        label: '_WinAPI_SetBitmapDimensionEx',
        documentation: 'Assigns preferred dimensions to a compatible bitmap'
    },
    {
        label: '_WinAPI_SetDIBColorTable',
        documentation: 'Sets RGB color table in the DIB section bitmap'
    },
    {
        label: '_WinAPI_SetDIBitsToDevice',
        documentation: 'Sets the pixels in the specified rectangle on the device'
    },
    {
        label: '_WinAPI_SetPixel',
        documentation: 'Sets the pixel at the specified coordinates to the specified color'
    },
    {
        label: '_WinAPI_SetStretchBltMode',
        documentation: 'Sets the bitmap stretching mode in the specified device context'
    },
    {
        label: '_WinAPI_StretchBlt',
        documentation: 'Copies a bitmap from a source rectangle into a destination rectangle, stretching or compressing the bitmap to fit the dimensions of the destination rectangle'
    },
    {
        label: '_WinAPI_StretchDIBits',
        documentation: 'Copies the color data for a rectangle of pixels in a DIB, JPEG, or PNG image to the specified destination rectangle, stretching or compressing the rows and columns by using the specified raster operation'
    },
    {
        label: '_WinAPI_TransparentBlt',
        documentation: 'Performs a bit-block transfer of the color data corresponding to a rectangle of pixels '
    },
    {
        label: '_WinAPI_CreateBrushIndirect',
        documentation: 'Creates a logical brush that has the specified style, color, and pattern'
    },
    {
        label: '_WinAPI_ExtCreatePen',
        documentation: 'Creates a logical cosmetic or geometric pen that has the specified style, width, and brush attributes'
    },
    {
        label: '_WinAPI_GetBrushOrg',
        documentation: 'Retrieves the current brush origin for the specified device context'
    },
    {
        label: '_WinAPI_PatBlt',
        documentation: 'Paints the specified rectangle using the brush that is currently selected into the specified device context'
    },
    {
        label: '_WinAPI_SetBrushOrg',
        documentation: 'Sets the brush origin that GDI assigns to the next brush an application selects into the specified device context'
    },
    {
        label: '_WinAPI_SetDCBrushColor',
        documentation: 'Sets the current device context (DC) brush color to the specified color value'
    },
    {
        label: '_WinAPI_SetDCPenColor',
        documentation: 'Sets the current device context (DC) pen color to the specified color value '
    },
    {
        label: '_WinAPI_ExcludeClipRect',
        documentation: 'Creates a new clipping region that consists of the existing clipping region minus the specified rectangle'
    },
    {
        label: '_WinAPI_ExtSelectClipRgn',
        documentation: 'Combines the specified region with the current clipping region'
    },
    {
        label: '_WinAPI_GetClipBox',
        documentation: 'Retrieves the dimensions of the bounding rectangle of the visible area'
    },
    {
        label: '_WinAPI_GetClipRgn',
        documentation: 'Retrieves a handle identifying the current application-defined clipping region'
    },
    {
        label: '_WinAPI_IntersectClipRect',
        documentation: 'Creates a new clipping region from the intersection of the current clipping region and the specified rectangle'
    },
    {
        label: '_WinAPI_OffsetClipRgn',
        documentation: 'Moves the clipping region of a device context by the specified offsets'
    },
    {
        label: '_WinAPI_PtVisible',
        documentation: 'Determines whether the specified point is within the clipping region'
    },
    {
        label: '_WinAPI_RectVisible',
        documentation: 'Determines whether any part of the specified rectangle lies within the clipping region'
    },
    {
        label: '_WinAPI_SelectClipPath',
        documentation: 'Selects the current path as a clipping region, combining the new region with any existing clipping region'
    },
    {
        label: '_WinAPI_SelectClipRgn',
        documentation: 'Selects a region as the current clipping region for the specified device context '
    },
    {
        label: '_WinAPI_ColorAdjustLuma',
        documentation: 'Changes the luminance of a RGB value'
    },
    {
        label: '_WinAPI_ColorHLSToRGB',
        documentation: 'Converts colors from hue-luminance-saturation (HLS) to RGB format'
    },
    {
        label: '_WinAPI_ColorRGBToHLS',
        documentation: 'Converts colors from RGB to hue-luminance-saturation (HLS) format'
    },
    {
        label: '_WinAPI_CreateColorAdjustment',
        documentation: 'Creates $tagCOLORADJUSTMENT structure specifies the color adjustment'
    },
    {
        label: '_WinAPI_GetBValue',
        documentation: 'Retrieves an intensity value for the blue component of a 32-bit RGB value'
    },
    {
        label: '_WinAPI_GetColorAdjustment',
        documentation: 'Retrieves the color adjustment for the specified device context (DC)'
    },
    {
        label: '_WinAPI_GetDeviceGammaRamp',
        documentation: 'Gets the gamma ramp on direct color display boards that support downloadable gamma ramps in hardware'
    },
    {
        label: '_WinAPI_GetGValue',
        documentation: 'Retrieves an intensity value for the green component of a 32-bit RGB value'
    },
    {
        label: '_WinAPI_GetRValue',
        documentation: 'Retrieves an intensity value for the red component of a 32-bit RGB value'
    },
    {
        label: '_WinAPI_GetUDFColorMode',
        documentation: 'Retrieves the current color mode for WinAPIEx UDF library'
    },
    {
        label: '_WinAPI_InvertColor',
        documentation: 'Inverts (negative) the specified color'
    },
    {
        label: '_WinAPI_RGB',
        documentation: 'Creates a RGB color value based on red, green, and blue components'
    },
    {
        label: '_WinAPI_SetColorAdjustment',
        documentation: 'Sets the color adjustment for a device context (DC)'
    },
    {
        label: '_WinAPI_SetDeviceGammaRamp',
        documentation: 'Sets the gamma ramp on direct color display boards that support downloadable gamma ramps in hardware'
    },
    {
        label: '_WinAPI_SetUDFColorMode',
        documentation: 'Sets the color mode for the WinAPIEx library'
    },
    {
        label: '_WinAPI_SwitchColor',
        documentation: 'Converts a color from BGR to RGB and vice versa '
    },
    {
        label: '_WinAPI_CombineTransform',
        documentation: 'Concatenates two world-space to page-space transformations'
    },
    {
        label: '_WinAPI_CreateTransform',
        documentation: 'Creates $tagXFORM structure specifies a world-space to page-space transformation'
    },
    {
        label: '_WinAPI_DPtoLP',
        documentation: 'Converts device coordinates into logical coordinates'
    },
    {
        label: '_WinAPI_GetCurrentPosition',
        documentation: 'Retrieves the current position for the specified device context'
    },
    {
        label: '_WinAPI_GetGraphicsMode',
        documentation: 'Retrieves the current graphics mode for the specified device context'
    },
    {
        label: '_WinAPI_GetMapMode',
        documentation: 'Retrieves the current mapping mode'
    },
    {
        label: '_WinAPI_GetPosFromRect',
        documentation: 'Interprets the coordinates of the rectangle as offset and position coordinates'
    },
    {
        label: '_WinAPI_GetWindowExt',
        documentation: 'Retrieves the x-extent and y-extent of the window for the specified device context'
    },
    {
        label: '_WinAPI_GetWindowOrg',
        documentation: 'Retrieves the x-coordinates and y-coordinates of the window origin for the specified device context'
    },
    {
        label: '_WinAPI_GetWorldTransform',
        documentation: 'Retrieves the current world-space to page-space transformation'
    },
    {
        label: '_WinAPI_LPtoDP',
        documentation: 'Converts a logical coordinates into device coordinates'
    },
    {
        label: '_WinAPI_ModifyWorldTransform',
        documentation: 'Changes the world transformation for a device context using the specified mode'
    },
    {
        label: '_WinAPI_OffsetPoints',
        documentation: 'Moves a points from the array by the specified offsets'
    },
    {
        label: '_WinAPI_OffsetWindowOrg',
        documentation: 'Modifies the window origin for a device context using the specified horizontal and vertical offsets'
    },
    {
        label: '_WinAPI_RotatePoints',
        documentation: 'Rotates a points from the array by the specified angle'
    },
    {
        label: '_WinAPI_ScaleWindowExt',
        documentation: 'Modifies the window for a device context using the ratios formed by the specified multiplicands and divisors'
    },
    {
        label: '_WinAPI_SetGraphicsMode',
        documentation: 'Sets the graphics mode for the specified device context'
    },
    {
        label: '_WinAPI_SetMapMode',
        documentation: 'Sets the mapping mode of the specified device context'
    },
    {
        label: '_WinAPI_SetWindowExt',
        documentation: 'Sets the horizontal and vertical extents of the window for a device context by using the specified values'
    },
    {
        label: '_WinAPI_SetWindowOrg',
        documentation: 'Specifies which window point maps to the viewport origin (0,0)'
    },
    {
        label: '_WinAPI_SetWorldTransform',
        documentation: 'Sets a two-dimensional linear transformation between world space and page space for the specified device context '
    },
    {
        label: '_WinAPI_DwmDefWindowProc',
        documentation: 'Default window procedure for Desktop Window Manager (DWM) hit testing within the non-client area'
    },
    {
        label: '_WinAPI_DwmEnableBlurBehindWindow',
        documentation: 'Enables the blur effect on a specified window'
    },
    {
        label: '_WinAPI_DwmEnableComposition',
        documentation: 'Enables or disables Desktop Window Manager (DWM) composition'
    },
    {
        label: '_WinAPI_DwmExtendFrameIntoClientArea',
        documentation: 'Extends the window frame behind the client area'
    },
    {
        label: '_WinAPI_DwmGetColorizationColor',
        documentation: 'Retrieves the current color used for Desktop Window Manager (DWM) glass composition'
    },
    {
        label: '_WinAPI_DwmGetColorizationParameters',
        documentation: 'Retrieves the colorization parameters used for Desktop Window Manager (DWM)'
    },
    {
        label: '_WinAPI_DwmGetWindowAttribute',
        documentation: 'Retrieves the current value of a specified attribute applied to the window'
    },
    {
        label: '_WinAPI_DwmInvalidateIconicBitmaps',
        documentation: 'Indicates that all previously provided iconic bitmaps from a window, both thumbnails and peek representations, should be refreshed'
    },
    {
        label: '_WinAPI_DwmIsCompositionEnabled',
        documentation: 'Determines whether Desktop Window Manager (DWM) composition is enabled'
    },
    {
        label: '_WinAPI_DwmQueryThumbnailSourceSize',
        documentation: 'Returns the source size of the Desktop Window Manager (DWM) thumbnail'
    },
    {
        label: '_WinAPI_DwmRegisterThumbnail',
        documentation: 'Creates a Desktop Window Manager (DWM) thumbnail relationship between the destination and source windows'
    },
    {
        label: '_WinAPI_DwmSetColorizationParameters',
        documentation: 'Sets the colorization parameters for Desktop Window Manager (DWM)'
    },
    {
        label: '_WinAPI_DwmSetIconicLivePreviewBitmap',
        documentation: 'Sets a static, iconic bitmap to display a live preview (also known as a Peek preview) of a window or tab'
    },
    {
        label: '_WinAPI_DwmSetIconicThumbnail',
        documentation: 'Sets a static, iconic bitmap on a window or tab to use as a thumbnail representation'
    },
    {
        label: '_WinAPI_DwmSetWindowAttribute',
        documentation: 'Sets the value of the specified attributes for non-client rendering to apply to the window'
    },
    {
        label: '_WinAPI_DwmUnregisterThumbnail',
        documentation: 'Removes a Desktop Window Manager (DWM) thumbnail relationship'
    },
    {
        label: '_WinAPI_DwmUpdateThumbnailProperties',
        documentation: 'Specifies Desktop Window Manager (DWM) thumbnail properties '
    },
    {
        label: '_WinAPI_EnumDisplaySettings',
        documentation: 'Retrieves information about one of the graphics modes for a display device'
    },
    {
        label: '_WinAPI_GetCurrentObject',
        documentation: 'Retrieves a handle to an object of the specified type that has been selected into the specified device context'
    },
    {
        label: '_WinAPI_GetDCEx',
        documentation: 'Retrieves a handle to a device context (DC) for the client area of a specified window'
    },
    {
        label: '_WinAPI_GetObjectType',
        documentation: 'Retrieves the type of the specified object'
    },
    {
        label: '_WinAPI_PrintWindow',
        documentation: 'Copies a visual window into the specified device context'
    },
    {
        label: '_WinAPI_RestoreDC',
        documentation: 'Restores a device context (DC) to the specified state'
    },
    {
        label: '_WinAPI_SaveDC',
        documentation: 'Saves the current state of the specified device context (DC) by copying data describing selected objects and graphic modes to a context stack '
    },
    {
        label: '_WinAPI_AddFontMemResourceEx',
        documentation: 'Adds the font resource from a memory image to the system'
    },
    {
        label: '_WinAPI_AddFontResourceEx',
        documentation: 'Adds the font resource from the specified file to the system font table'
    },
    {
        label: '_WinAPI_CreateFontEx',
        documentation: 'Creates a logical font with the specified characteristics'
    },
    {
        label: '_WinAPI_EnumFontFamilies',
        documentation: 'Enumerates all uniquely-named fonts in the system that match the specified font characteristics'
    },
    {
        label: '_WinAPI_GetFontMemoryResourceInfo',
        documentation: 'Reads out font information from a TTF loaded into the memory'
    },
    {
        label: '_WinAPI_GetFontName',
        documentation: 'Retrieves the unique name of the font based on its typeface name, character set, and style'
    },
    {
        label: '_WinAPI_GetFontResourceInfo',
        documentation: 'Retrieves the fontname from the specified font resource file'
    },
    {
        label: '_WinAPI_GetGlyphOutline',
        documentation: 'Retrieves the outline or bitmap for a character in the TrueType font'
    },
    {
        label: '_WinAPI_GetOutlineTextMetrics',
        documentation: 'Retrieves text metrics for TrueType fonts'
    },
    {
        label: '_WinAPI_GetTabbedTextExtent',
        documentation: 'Computes the width and height of a character string which may contain one or more tab characters'
    },
    {
        label: '_WinAPI_GetTextAlign',
        documentation: 'Retrieves the text-alignment setting for the specified device context'
    },
    {
        label: '_WinAPI_GetTextCharacterExtra',
        documentation: 'Retrieves the current intercharacter spacing for the specified device context'
    },
    {
        label: '_WinAPI_GetTextColor',
        documentation: 'Retrieves the current text color for the specified device context'
    },
    {
        label: '_WinAPI_GetTextFace',
        documentation: 'Retrieves the typeface name of the font that is selected into the specified device context'
    },
    {
        label: '_WinAPI_RemoveFontMemResourceEx',
        documentation: 'Removes the fonts added from a memory image'
    },
    {
        label: '_WinAPI_RemoveFontResourceEx',
        documentation: 'Removes the fonts in the specified file from the system font table'
    },
    {
        label: '_WinAPI_SetTextAlign',
        documentation: 'Sets the text-alignment flags for the specified device context'
    },
    {
        label: '_WinAPI_SetTextCharacterExtra',
        documentation: 'Sets the intercharacter spacing for the specified device context'
    },
    {
        label: '_WinAPI_SetTextJustification',
        documentation: 'Specifies the amount of space the system should add to the break characters in a string of text'
    },
    {
        label: '_WinAPI_TabbedTextOut',
        documentation: 'Writes a character string at a specified location and expanding tabs to the specified tab-stop positions'
    },
    {
        label: '_WinAPI_TextOut',
        documentation: 'Writes a string at the specified location, using the currently selected font, background color, and text color '
    },
    {
        label: '_WinAPI_AngleArc',
        documentation: 'Draws a line segment and an arc'
    },
    {
        label: '_WinAPI_Arc',
        documentation: 'Draws an elliptical arc'
    },
    {
        label: '_WinAPI_ArcTo',
        documentation: 'Draws an elliptical arc'
    },
    {
        label: '_WinAPI_GetArcDirection',
        documentation: 'Retrieves the current arc direction for the specified device context'
    },
    {
        label: '_WinAPI_LineDDA',
        documentation: 'Determines which pixels should be highlighted for a line'
    },
    {
        label: '_WinAPI_MoveToEx',
        documentation: 'Updates the current position to the specified point'
    },
    {
        label: '_WinAPI_PolyBezier',
        documentation: 'Draws one or more Bezier curves'
    },
    {
        label: '_WinAPI_PolyBezierTo',
        documentation: 'Draws one or more Bezier curves'
    },
    {
        label: '_WinAPI_PolyDraw',
        documentation: 'Draws a set of line segments and Bezier curves'
    },
    {
        label: '_WinAPI_SetArcDirection',
        documentation: 'Sets the drawing arc direction '
    },
    {
        label: '_WinAPI_CloseEnhMetaFile',
        documentation: 'Closes an enhanced-metafile device context and returns a handle that identifies an enhanced-format metafile'
    },
    {
        label: '_WinAPI_CopyEnhMetaFile',
        documentation: 'Copies the contents of an enhanced-format metafile to a specified file'
    },
    {
        label: '_WinAPI_CreateEnhMetaFile',
        documentation: 'Creates a device context for an enhanced-format metafile'
    },
    {
        label: '_WinAPI_DeleteEnhMetaFile',
        documentation: 'Deletes an enhanced-format metafile or an enhanced-format metafile handle'
    },
    {
        label: '_WinAPI_GdiComment',
        documentation: 'Copies a comment from a buffer into a specified enhanced-format metafile'
    },
    {
        label: '_WinAPI_GetEnhMetaFile',
        documentation: 'Creates a handle that identifies the enhanced-format metafile stored in the specified file'
    },
    {
        label: '_WinAPI_GetEnhMetaFileBits',
        documentation: 'Retrieves the contents of the specified enhanced-format metafile'
    },
    {
        label: '_WinAPI_GetEnhMetaFileDescription',
        documentation: 'Retrieves an optional text description from an enhanced-format metafile'
    },
    {
        label: '_WinAPI_GetEnhMetaFileDimension',
        documentation: 'Retrieves a dimension of the specified enhanced-format metafile'
    },
    {
        label: '_WinAPI_GetEnhMetaFileHeader',
        documentation: 'Retrieves the record containing the header for the specified enhanced-format metafile'
    },
    {
        label: '_WinAPI_PlayEnhMetaFile',
        documentation: 'Displays the picture stored in the specified enhanced-format metafile'
    },
    {
        label: '_WinAPI_SetEnhMetaFileBits',
        documentation: 'Creates a memory-based enhanced-format metafile from the specified data '
    },
    {
        label: '_WinAPI_EnumDisplayMonitors',
        documentation: 'Enumerates display monitors (including invisible pseudo-monitors associated with the mirroring drivers)'
    },
    {
        label: '_WinAPI_MonitorFromPoint',
        documentation: 'Retrieves a handle to the display monitor that contains a specified point'
    },
    {
        label: '_WinAPI_MonitorFromRect',
        documentation: 'Retrieves a handle to the display monitor that has the largest area of intersection with a specified rectangle'
    },
    {
        label: '_WinAPI_MonitorFromWindow',
        documentation: 'Retrieves a handle to the display monitor that has the largest area of intersection with the specified window'
    },
    {
        label: '_WinAPI_BeginPaint',
        documentation: 'Prepares the specified window for painting'
    },
    {
        label: '_WinAPI_DrawAnimatedRects',
        documentation: 'Animates the caption of a window to indicate the opening of an icon or the minimizing or maximizing of a window'
    },
    {
        label: '_WinAPI_DrawShadowText',
        documentation: 'Draws formatted text in the specified rectangle with a drop shadow'
    },
    {
        label: '_WinAPI_EndPaint',
        documentation: 'Marks the end of painting in the specified window'
    },
    {
        label: '_WinAPI_GetBkColor',
        documentation: 'Retrieves the current background color for the specified device context'
    },
    {
        label: '_WinAPI_GetBoundsRect',
        documentation: 'Obtains the current accumulated bounding rectangle for a specified device context'
    },
    {
        label: '_WinAPI_GetROP2',
        documentation: 'Retrieves the foreground mix mode of the specified device context'
    },
    {
        label: '_WinAPI_GetUpdateRect',
        documentation: 'Retrieves the coordinates of the rectangle that completely encloses the update region of the specified window'
    },
    {
        label: '_WinAPI_GetUpdateRgn',
        documentation: 'Retrieves the update region of a window by copying it into the specified region'
    },
    {
        label: '_WinAPI_GetWindowRgnBox',
        documentation: 'Retrieves the dimensions of the tightest bounding rectangle for the window region of a window'
    },
    {
        label: '_WinAPI_InvalidateRgn',
        documentation: 'Adds a region to the specified window\'s update region'
    },
    {
        label: '_WinAPI_LockWindowUpdate',
        documentation: 'Disables or enables drawing in the specified window'
    },
    {
        label: '_WinAPI_PaintDesktop',
        documentation: 'Fills the clipping region in the specified device context with the desktop pattern or wallpaper'
    },
    {
        label: '_WinAPI_SetBoundsRect',
        documentation: 'Controls the accumulation of bounding rectangle information for the specified device context'
    },
    {
        label: '_WinAPI_SetROP2',
        documentation: 'Retrieves the foreground mix mode of the specified device context'
    },
    {
        label: '_WinAPI_ValidateRect',
        documentation: 'Removes a rectangle from the current update region of the specified window'
    },
    {
        label: '_WinAPI_ValidateRgn',
        documentation: 'Removes a region from the current update region of the specified window'
    },
    {
        label: '_WinAPI_WindowFromDC',
        documentation: 'Retrieves a handle to the window associated with the specified display device context (DC) '
    },
    {
        label: '_WinAPI_AbortPath',
        documentation: 'Closes and discards any paths in the specified device context'
    },
    {
        label: '_WinAPI_BeginPath',
        documentation: 'Opens a path bracket in the specified device context'
    },
    {
        label: '_WinAPI_CloseFigure',
        documentation: 'Closes an open figure in a path'
    },
    {
        label: '_WinAPI_EndPath',
        documentation: 'Closes a path bracket and selects the path defined by the bracket into the specified device context'
    },
    {
        label: '_WinAPI_FillPath',
        documentation: 'Closes any open figures in the current path and fills the path\'s interior by using the current brush'
    },
    {
        label: '_WinAPI_FlattenPath',
        documentation: 'Transforms any curves in the path that is selected into the current DC, turning each curve into a sequence of lines'
    },
    {
        label: '_WinAPI_PathToRegion',
        documentation: 'Creates a region from the path that is selected into the specified device context'
    },
    {
        label: '_WinAPI_StrokeAndFillPath',
        documentation: 'Closes any open figures in a path, strokes the outline of the path, and fills its interior'
    },
    {
        label: '_WinAPI_StrokePath',
        documentation: 'Renders the specified path by using the current pen'
    },
    {
        label: '_WinAPI_WidenPath',
        documentation: 'Redefines the current path as the area that would be painted if the path were stroked '
    },
    {
        label: '_WinAPI_CopyRect',
        documentation: 'Copies the coordinates of one rectangle to another'
    },
    {
        label: '_WinAPI_DrawFocusRect',
        documentation: 'Draws a rectangle in the style used to indicate that the rectangle has the focus'
    },
    {
        label: '_WinAPI_EqualRect',
        documentation: 'Determines whether the two specified rectangles are equal'
    },
    {
        label: '_WinAPI_InflateRect',
        documentation: 'Increases or decreases the width and height of the specified rectangle'
    },
    {
        label: '_WinAPI_IntersectRect',
        documentation: 'Creates the intersection of two rectangles'
    },
    {
        label: '_WinAPI_IsRectEmpty',
        documentation: 'Determines whether the specified rectangle is empty'
    },
    {
        label: '_WinAPI_OffsetRect',
        documentation: 'Moves the specified rectangle by the specified offsets'
    },
    {
        label: '_WinAPI_PtInRectEx',
        documentation: 'Determines whether the specified point lies within the specified rectangle'
    },
    {
        label: '_WinAPI_SubtractRect',
        documentation: 'Determines the coordinates of a rectangle formed by subtracting one rectangle from another'
    },
    {
        label: '_WinAPI_UnionRect',
        documentation: 'Creates the union of two rectangles '
    },
    {
        label: '_WinAPI_CreateEllipticRgn',
        documentation: 'Creates an elliptical region'
    },
    {
        label: '_WinAPI_CreateNullRgn',
        documentation: 'Creates an empty region'
    },
    {
        label: '_WinAPI_CreatePolygonRgn',
        documentation: 'Creates a polygonal region'
    },
    {
        label: '_WinAPI_CreateRectRgnIndirect',
        documentation: 'Creates a rectangular region'
    },
    {
        label: '_WinAPI_EqualRgn',
        documentation: 'Checks the two specified regions to determine whether they are identical'
    },
    {
        label: '_WinAPI_ExtCreateRegion',
        documentation: 'Creates a region from the specified region and transformation data'
    },
    {
        label: '_WinAPI_FillRgn',
        documentation: 'Fills a region by using the specified brush'
    },
    {
        label: '_WinAPI_FrameRgn',
        documentation: 'Draws a border around the specified region by using the specified brush'
    },
    {
        label: '_WinAPI_GetPolyFillMode',
        documentation: 'Retrieves the current polygon fill mode'
    },
    {
        label: '_WinAPI_GetRegionData',
        documentation: 'Fills the specified buffer with data describing a region'
    },
    {
        label: '_WinAPI_GetRgnBox',
        documentation: 'Retrieves the bounding rectangle of the specified region'
    },
    {
        label: '_WinAPI_InvertRgn',
        documentation: 'Inverts the colors in the specified region'
    },
    {
        label: '_WinAPI_OffsetRgn',
        documentation: 'Moves a region by the specified offsets'
    },
    {
        label: '_WinAPI_PaintRgn',
        documentation: 'Paints the specified region by using the brush currently selected into the device context'
    },
    {
        label: '_WinAPI_PtInRegion',
        documentation: 'Determines whether the specified point is inside the specified region'
    },
    {
        label: '_WinAPI_RectInRegion',
        documentation: 'Determines whether any part of the specified rectangle is within the boundaries of a region'
    },
    {
        label: '_WinAPI_SetPolyFillMode',
        documentation: 'Sets the polygon fill mode for functions that fill polygons'
    },
    {
        label: '_WinAPI_SetRectRgn',
        documentation: 'Converts a region into a rectangular region with the specified coordinates '
    },
    {
        label: '_WinAPI_Ellipse',
        documentation: 'Draws an ellipse'
    },
    {
        label: '_WinAPI_InvertRect',
        documentation: 'Inverts a rectangle in a window by performing a logical NOT operation on the color values for each pixel'
    },
    {
        label: '_WinAPI_Polygon',
        documentation: 'Draws a polygon consisting of two or more vertices connected by straight lines'
    },
    {
        label: '_WinAPI_Rectangle',
        documentation: 'Draws a rectangle'
    },
    {
        label: '_WinAPI_RoundRect',
        documentation: 'Draws a rectangle with rounded corners '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIGdi.au3>'
}

module.exports = items