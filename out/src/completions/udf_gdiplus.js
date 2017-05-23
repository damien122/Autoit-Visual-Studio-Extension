'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GDIPlus_RectFCreate',
        documentation: 'Create a $tagGDIPRECTF structure'
    },
    {
        label: '_GDIPlus_Shutdown',
        documentation: 'Clean up resources used by Microsoft Windows GDI+'
    },
    {
        label: '_GDIPlus_Startup',
        documentation: 'Initialize Microsoft Windows GDI+_GDIPlus_ArrowCapCreate Creates an adjustable arrow line cap with the specified height and width'
    },
    {
        label: '_GDIPlus_ArrowCapDispose',
        documentation: 'Release an adjustable arrow line cap object'
    },
    {
        label: '_GDIPlus_ArrowCapGetFillState',
        documentation: 'Determines whether the arrow cap is filled'
    },
    {
        label: '_GDIPlus_ArrowCapGetHeight',
        documentation: 'Gets the height of the arrow cap'
    },
    {
        label: '_GDIPlus_ArrowCapGetMiddleInset',
        documentation: 'Gets the value of the inset'
    },
    {
        label: '_GDIPlus_ArrowCapGetWidth',
        documentation: 'Gets the width of the arrow cap'
    },
    {
        label: '_GDIPlus_ArrowCapSetFillState',
        documentation: 'Sets whether the arrow cap is filled'
    },
    {
        label: '_GDIPlus_ArrowCapSetHeight',
        documentation: 'Sets the height of the arrow cap'
    },
    {
        label: '_GDIPlus_ArrowCapSetMiddleInset',
        documentation: 'Gets the value of the inset'
    },
    {
        label: '_GDIPlus_ArrowCapSetWidth',
        documentation: 'Sets the width of the arrow cap'
    },
    {
        label: '_GDIPlus_CustomLineCapClone',
        documentation: 'Clones a CustomLineCap object'
    },
    {
        label: '_GDIPlus_CustomLineCapCreate',
        documentation: 'Creates a CustomLineCap object'
    },
    {
        label: '_GDIPlus_CustomLineCapDispose',
        documentation: 'Release a custom line cap object'
    },
    {
        label: '_GDIPlus_CustomLineCapGetStrokeCaps',
        documentation: 'Gets the end cap styles for both the start line cap and the end line cap'
    },
    {
        label: '_GDIPlus_CustomLineCapSetStrokeCaps',
        documentation: 'Sets the distance between the base cap to the start of the line_GDIPlus_BitmapApplyEffect Alters a Bitmap by applying a specified effect'
    },
    {
        label: '_GDIPlus_BitmapApplyEffectEx',
        documentation: 'Alters a Bitmap by applying a specified effect'
    },
    {
        label: '_GDIPlus_BitmapCloneArea',
        documentation: 'Create a clone of a Bitmap object from the coordinates and format specified'
    },
    {
        label: '_GDIPlus_BitmapConvertFormat',
        documentation: 'Converts a bitmap to a specified pixel format'
    },
    {
        label: '_GDIPlus_BitmapCreateApplyEffect',
        documentation: 'Creates a new Bitmap by applying a specified effect to an existing Bitmap'
    },
    {
        label: '_GDIPlus_BitmapCreateApplyEffectEx',
        documentation: 'Creates a new Bitmap by applying a specified effect to an existing Bitmap'
    },
    {
        label: '_GDIPlus_BitmapCreateDIBFromBitmap',
        documentation: 'Creates a DIB Section'
    },
    {
        label: '_GDIPlus_BitmapCreateFromFile',
        documentation: 'Create a Bitmap object from file'
    },
    {
        label: '_GDIPlus_BitmapCreateFromGraphics',
        documentation: 'Creates a Bitmap object based on a Graphics object, a width, and a height'
    },
    {
        label: '_GDIPlus_BitmapCreateFromHBITMAP',
        documentation: 'Create a Bitmap object from a bitmap handle'
    },
    {
        label: '_GDIPlus_BitmapCreateFromHICON',
        documentation: 'Creates a Bitmap object based on an icon'
    },
    {
        label: '_GDIPlus_BitmapCreateFromHICON32',
        documentation: 'Creates a Bitmap object based on a 32bit icon'
    },
    {
        label: '_GDIPlus_BitmapCreateFromMemory',
        documentation: 'Loads an image (JPG, BMP, PNG, etc.) which is saved as a binary string and converts it to a bitmap (GDI+) or hbitmap (GDI)'
    },
    {
        label: '_GDIPlus_BitmapCreateFromResource',
        documentation: 'Creates a Bitmap object based on an icon'
    },
    {
        label: '_GDIPlus_BitmapCreateFromScan0',
        documentation: 'Creates a Bitmap object based on an array of bytes along with size and format information'
    },
    {
        label: '_GDIPlus_BitmapCreateFromStream',
        documentation: 'Creates a Bitmap object based on an IStream COM interface'
    },
    {
        label: '_GDIPlus_BitmapCreateHBITMAPFromBitmap',
        documentation: 'Create a handle to a bitmap from a bitmap object'
    },
    {
        label: '_GDIPlus_BitmapDispose',
        documentation: 'Release a bitmap object'
    },
    {
        label: '_GDIPlus_BitmapGetHistogram',
        documentation: 'Returns one or more histograms for specified color channels of the specified Bitmap'
    },
    {
        label: '_GDIPlus_BitmapGetHistogramEx',
        documentation: 'Returns histograms for the Bitmap´s color channels: Red, Green, Blue, Alpha and Grey'
    },
    {
        label: '_GDIPlus_BitmapGetHistogramSize',
        documentation: 'Returns the number of elements for allocation by _GDIPlus_BitmapGetHistogramEx()'
    },
    {
        label: '_GDIPlus_BitmapGetPixel',
        documentation: 'Gets the color of a specified pixel in this bitmap'
    },
    {
        label: '_GDIPlus_BitmapLockBits',
        documentation: 'Locks a portion of a bitmap for reading or writing'
    },
    {
        label: '_GDIPlus_BitmapSetPixel',
        documentation: 'Sets the color of a specified pixel in this bitmap'
    },
    {
        label: '_GDIPlus_BitmapUnlockBits',
        documentation: 'Unlocks a portion of a bitmap that was locked by _GDIPlus_BitmapLockBits'
    },
    {
        label: '_GDIPlus_HICONCreateFromBitmap',
        documentation: 'Creates an icon handle from a bitmap object'
    },
    {
        label: '_GDIPlus_PaletteInitialize',
        documentation: 'Initializes a standard, optimal, or custom color palette_GDIPlus_BrushClone Clone a Brush object'
    },
    {
        label: '_GDIPlus_BrushDispose',
        documentation: 'Release a Brush object'
    },
    {
        label: '_GDIPlus_BrushGetType',
        documentation: 'Retrieve the type of Brush object_GDIPlus_HatchBrushCreate Creates a HatchBrush object based on a hatch style, a foreground color, and a background color_GDIPlus_LineBrushCreate Creates a LinearGradientBrush object from a set of boundary points and boundary colors'
    },
    {
        label: '_GDIPlus_LineBrushCreateFromRect',
        documentation: 'Creates a LinearGradientBrush object from a rectangle and boundary colors'
    },
    {
        label: '_GDIPlus_LineBrushCreateFromRectWithAngle',
        documentation: 'Creates a LinearGradientBrush object from a rectangle, boundary colors and angle of direction'
    },
    {
        label: '_GDIPlus_LineBrushGetColors',
        documentation: 'Gets the starting color and ending color of a linear gradient brush'
    },
    {
        label: '_GDIPlus_LineBrushGetRect',
        documentation: 'Gets the rectangle that defines the boundaries of a linear gradient brush'
    },
    {
        label: '_GDIPlus_LineBrushMultiplyTransform',
        documentation: 'Updates a brush\'s transformation matrix with the product of itself and another matrix'
    },
    {
        label: '_GDIPlus_LineBrushResetTransform',
        documentation: 'Resets the transformation matrix of a linear gradient brush to the identity matrix'
    },
    {
        label: '_GDIPlus_LineBrushSetBlend',
        documentation: 'Sets the blend factors and the blend positions of a linear gradient brush to create a custom blend'
    },
    {
        label: '_GDIPlus_LineBrushSetColors',
        documentation: 'Sets the starting color and ending color of a linear gradient brush'
    },
    {
        label: '_GDIPlus_LineBrushSetGammaCorrection',
        documentation: 'Specifies whether gamma correction is enabled for a linear gradient brush'
    },
    {
        label: '_GDIPlus_LineBrushSetLinearBlend',
        documentation: 'Sets the blend shape of a linear gradient brush to create a custom blend based on a triangular shape'
    },
    {
        label: '_GDIPlus_LineBrushSetPresetBlend',
        documentation: 'Sets the colors to be interpolated for a linear gradient brush and their corresponding blend positions'
    },
    {
        label: '_GDIPlus_LineBrushSetSigmaBlend',
        documentation: 'Sets the blend shape of a linear gradient brush to create a custom blend based on a bell-shaped curve'
    },
    {
        label: '_GDIPlus_LineBrushSetTransform',
        documentation: 'Sets the transformation matrix of a linear gradient brush'
    },
    {
        label: '_GDIPlus_BrushCreateSolid',
        documentation: 'Create a solid Brush object'
    },
    {
        label: '_GDIPlus_BrushGetSolidColor',
        documentation: 'Get the color of a Solid Brush object'
    },
    {
        label: '_GDIPlus_BrushSetSolidColor',
        documentation: 'Set the color of a Solid Brush object_GDIPlus_TextureCreate Creates a TextureBrush object based on an image and a wrap mode'
    },
    {
        label: '_GDIPlus_TextureCreate2',
        documentation: 'Creates a TextureBrush object based on an image, a wrap mode and a defining rectangle'
    },
    {
        label: '_GDIPlus_TextureCreateIA',
        documentation: 'Creates a TextureBrush object based on an image, a defining rectangle, and a set of image properties_GDIPlus_EffectCreate Creates an Effect object of the type specified by the guid parameter'
    },
    {
        label: '_GDIPlus_EffectCreateBlur',
        documentation: 'Creates a Blur class effect object'
    },
    {
        label: '_GDIPlus_EffectCreateBrightnessContrast',
        documentation: 'Creates a BrightnessContrast class effect object'
    },
    {
        label: '_GDIPlus_EffectCreateColorBalance',
        documentation: 'Creates a ColorBalance class effect object'
    },
    {
        label: '_GDIPlus_EffectCreateColorCurve',
        documentation: 'Creates a ColorBalance class effect object'
    },
    {
        label: '_GDIPlus_EffectCreateColorLUT',
        documentation: 'Creates a ColorLUT class effect object'
    },
    {
        label: '_GDIPlus_EffectCreateColorMatrix',
        documentation: 'Creates a ColorMatrixEffect class effect object'
    },
    {
        label: '_GDIPlus_EffectCreateHueSaturationLightness',
        documentation: 'Creates a HueSaturationLightness class effect object'
    },
    {
        label: '_GDIPlus_EffectCreateLevels',
        documentation: 'Creates a Levels class effect object'
    },
    {
        label: '_GDIPlus_EffectCreateRedEyeCorrection',
        documentation: 'Creates a RedEyeCorrection class effect object'
    },
    {
        label: '_GDIPlus_EffectCreateSharpen',
        documentation: 'Creates a Sharpen class effect object'
    },
    {
        label: '_GDIPlus_EffectCreateTint',
        documentation: 'Creates a Tint class effect object'
    },
    {
        label: '_GDIPlus_EffectDispose',
        documentation: 'Deletes the specified Effect object'
    },
    {
        label: '_GDIPlus_EffectGetParameters',
        documentation: 'Returns the parameters for the specified Effect object'
    },
    {
        label: '_GDIPlus_EffectSetParameters',
        documentation: 'Sets the parameters for the specified Effect object_GDIPlus_FontCreate Create a Font object'
    },
    {
        label: '_GDIPlus_FontDispose',
        documentation: 'Release a Font object'
    },
    {
        label: '_GDIPlus_FontGetHeight',
        documentation: 'Gets the line spacing of a font in the current unit of a specified Graphics object_GDIPlus_FontPrivateAddFont Adds a font file to the private font collection'
    },
    {
        label: '_GDIPlus_FontPrivateAddMemoryFont',
        documentation: 'Adds a font that is contained in system memory to a Microsoft® Windows® GDI+ font collection'
    },
    {
        label: '_GDIPlus_FontPrivateCollectionDispose',
        documentation: 'Deletes the specified PrivateFontCollection object'
    },
    {
        label: '_GDIPlus_FontPrivateCreateCollection',
        documentation: 'Creates a PrivateFont Collection object_GDIPlus_FontFamilyCreate Create a Font Family object'
    },
    {
        label: '_GDIPlus_FontFamilyCreateFromCollection',
        documentation: 'Creates a FontFamily object based on a specified font family'
    },
    {
        label: '_GDIPlus_FontFamilyDispose',
        documentation: 'Release a Font Family object'
    },
    {
        label: '_GDIPlus_FontFamilyGetCellAscent',
        documentation: 'Gets the cell ascent, in design units, of a font family for the specified style or style combination'
    },
    {
        label: '_GDIPlus_FontFamilyGetCellDescent',
        documentation: 'Gets the cell descent, in design units, of a font family for the specified style or style combination'
    },
    {
        label: '_GDIPlus_FontFamilyGetEmHeight',
        documentation: 'Gets the size (commonly called em size or em height), in design units, of a font family'
    },
    {
        label: '_GDIPlus_FontFamilyGetLineSpacing',
        documentation: 'Gets the line spacing, in design units, of this font family for the specified style or style combination_GDIPlus_GraphicsClear Clears a Graphics object to a specified color'
    },
    {
        label: '_GDIPlus_GraphicsCreateFromHDC',
        documentation: 'Create a Graphics object from a device context (DC)'
    },
    {
        label: '_GDIPlus_GraphicsCreateFromHWND',
        documentation: 'Create a Graphics object from a window handle'
    },
    {
        label: '_GDIPlus_GraphicsDispose',
        documentation: 'Release a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsDrawArc',
        documentation: 'Draw an arc'
    },
    {
        label: '_GDIPlus_GraphicsDrawBezier',
        documentation: 'Draw a bezier spline'
    },
    {
        label: '_GDIPlus_GraphicsDrawClosedCurve',
        documentation: 'Draw a closed cardinal spline'
    },
    {
        label: '_GDIPlus_GraphicsDrawClosedCurve2',
        documentation: 'Draws a closed cardinal spline'
    },
    {
        label: '_GDIPlus_GraphicsDrawCurve',
        documentation: 'Draw a cardinal spline'
    },
    {
        label: '_GDIPlus_GraphicsDrawCurve2',
        documentation: 'Draws a cardinal spline'
    },
    {
        label: '_GDIPlus_GraphicsDrawEllipse',
        documentation: 'Draw an ellipse'
    },
    {
        label: '_GDIPlus_GraphicsDrawImage',
        documentation: 'Draw an Image object'
    },
    {
        label: '_GDIPlus_GraphicsDrawImagePointsRect',
        documentation: 'Draws an image'
    },
    {
        label: '_GDIPlus_GraphicsDrawImageRect',
        documentation: 'Draws an image at a specified location'
    },
    {
        label: '_GDIPlus_GraphicsDrawImageRectRect',
        documentation: 'Draw an Image object'
    },
    {
        label: '_GDIPlus_GraphicsDrawLine',
        documentation: 'Draw a line'
    },
    {
        label: '_GDIPlus_GraphicsDrawPath',
        documentation: 'Draws a sequence of lines and curves defined by a GraphicsPath object'
    },
    {
        label: '_GDIPlus_GraphicsDrawPie',
        documentation: 'Draw a pie'
    },
    {
        label: '_GDIPlus_GraphicsDrawPolygon',
        documentation: 'Draw a polygon'
    },
    {
        label: '_GDIPlus_GraphicsDrawRect',
        documentation: 'Draw a rectangle'
    },
    {
        label: '_GDIPlus_GraphicsFillClosedCurve',
        documentation: 'Fill a closed cardinal spline'
    },
    {
        label: '_GDIPlus_GraphicsFillClosedCurve2',
        documentation: 'Creates a closed cardinal spline from an array of points and uses a brush to fill the interior of the spline'
    },
    {
        label: '_GDIPlus_GraphicsFillEllipse',
        documentation: 'Fill an ellipse'
    },
    {
        label: '_GDIPlus_GraphicsFillPath',
        documentation: 'Uses a brush to fill the interior of a path'
    },
    {
        label: '_GDIPlus_GraphicsFillPie',
        documentation: 'Fill a pie'
    },
    {
        label: '_GDIPlus_GraphicsFillPolygon',
        documentation: 'Fill a polygon'
    },
    {
        label: '_GDIPlus_GraphicsFillRect',
        documentation: 'Fill a rectangle'
    },
    {
        label: '_GDIPlus_GraphicsFillRegion',
        documentation: 'Uses a brush to fill a specified region'
    },
    {
        label: '_GDIPlus_GraphicsGetCompositingMode',
        documentation: 'Gets the compositing mode currently set for a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsGetCompositingQuality',
        documentation: 'Gets the compositing quality currently set for a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsGetDC',
        documentation: 'Gets a handle to the device context of the Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsGetInterpolationMode',
        documentation: 'Gets the interpolation mode currently set for a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsGetSmoothingMode',
        documentation: 'Gets the graphics object rendering quality'
    },
    {
        label: '_GDIPlus_GraphicsGetTransform',
        documentation: 'Gets the world transformation matrix of a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsReleaseDC',
        documentation: 'Releases the device context of the Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsResetClip',
        documentation: 'Sets the clipping region of a Graphics object to an infinite region'
    },
    {
        label: '_GDIPlus_GraphicsResetTransform',
        documentation: 'Sets the world transformation matrix of a Graphics object to the identity matrix'
    },
    {
        label: '_GDIPlus_GraphicsRestore',
        documentation: 'Restores the state of a Graphics object to the state stored by a previous call to the _GDIPlus_GraphicsSave method of the Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsRotateTransform',
        documentation: 'Updates the world transformation matrix of a Graphics object with the product of itself and a rotation matrix'
    },
    {
        label: '_GDIPlus_GraphicsSave',
        documentation: 'Saves the current state (transformations, clipping region, and quality settings) of a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsScaleTransform',
        documentation: 'Updates a Graphics object\'s world transformation matrix with the product of itself and a scaling matrix'
    },
    {
        label: '_GDIPlus_GraphicsSetClipPath',
        documentation: 'Updates the clipping region of this Graphics object to a region that is the combination of itself and the region specified by a graphics path'
    },
    {
        label: '_GDIPlus_GraphicsSetClipRect',
        documentation: 'Updates the clipping region of a Graphics object to a region that is the combination of itself and a rectangle'
    },
    {
        label: '_GDIPlus_GraphicsSetClipRegion',
        documentation: 'Updates the clipping region of a Graphics object to a region that is the combination of itself and the region specified by a Region object'
    },
    {
        label: '_GDIPlus_GraphicsSetCompositingMode',
        documentation: 'Sets the compositing mode of a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsSetCompositingQuality',
        documentation: 'Sets the compositing quality of a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsSetInterpolationMode',
        documentation: 'Sets the interpolation mode of a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsSetPixelOffsetMode',
        documentation: 'Sets the pixel offset mode of a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsSetSmoothingMode',
        documentation: 'Sets the graphics object rendering quality'
    },
    {
        label: '_GDIPlus_GraphicsSetTextRenderingHint',
        documentation: 'Sets the contrast value of a Graphics object'
    },
    {
        label: '_GDIPlus_GraphicsSetTransform',
        documentation: 'Sets the world transformation for a graphics object'
    },
    {
        label: '_GDIPlus_GraphicsTransformPoints',
        documentation: 'Converts an array of points from one coordinate space to another'
    },
    {
        label: '_GDIPlus_GraphicsTranslateTransform',
        documentation: 'Updates a Graphics object\'s world transformation matrix with the product of itself and a translation matrix_GDIPlus_Decoders Get an array of information about the available image decoders'
    },
    {
        label: '_GDIPlus_DecodersGetCount',
        documentation: 'Get the number of available image decoders'
    },
    {
        label: '_GDIPlus_DecodersGetSize',
        documentation: 'Get the total size of the structure that is returned by _GDIPlus_GetImageDecoders'
    },
    {
        label: '_GDIPlus_Encoders',
        documentation: 'Get an array of information about the available image encoders'
    },
    {
        label: '_GDIPlus_EncodersGetCLSID',
        documentation: 'Return the encoder CLSID for a specific image file type'
    },
    {
        label: '_GDIPlus_EncodersGetCount',
        documentation: 'Get the number of available image encoders'
    },
    {
        label: '_GDIPlus_EncodersGetParamList',
        documentation: 'Get the parameter list for a specified image encoder'
    },
    {
        label: '_GDIPlus_EncodersGetParamListSize',
        documentation: 'Get the size of the parameter list for a specified image encoder'
    },
    {
        label: '_GDIPlus_EncodersGetSize',
        documentation: 'Get the total size of the structure that is returned by _GDIPlus_GetImageEncoders'
    },
    {
        label: '_GDIPlus_ParamAdd',
        documentation: 'Add a value to an encoder parameter list'
    },
    {
        label: '_GDIPlus_ParamInit',
        documentation: 'Allocate an empty encoder parameter list'
    },
    {
        label: '_GDIPlus_ParamSize',
        documentation: 'Get an encoder parameter size_GDIPlus_PathAddArc Adds an elliptical arc to the current figure of a path'
    },
    {
        label: '_GDIPlus_PathAddBezier',
        documentation: 'Adds a bezier spline to the current figure of a path'
    },
    {
        label: '_GDIPlus_PathAddClosedCurve',
        documentation: 'Adds a closed cardinal spline to a path'
    },
    {
        label: '_GDIPlus_PathAddClosedCurve2',
        documentation: 'Adds a closed cardinal spline to a path'
    },
    {
        label: '_GDIPlus_PathAddCurve',
        documentation: 'Adds a cardinal spline to the current figure of a path'
    },
    {
        label: '_GDIPlus_PathAddCurve2',
        documentation: 'Adds a cardinal spline to the current figure of a path'
    },
    {
        label: '_GDIPlus_PathAddCurve3',
        documentation: 'Adds a cardinal spline to the current figure of a path'
    },
    {
        label: '_GDIPlus_PathAddEllipse',
        documentation: 'Adds an ellipse to the current figure a path'
    },
    {
        label: '_GDIPlus_PathAddLine',
        documentation: 'Adds a line to the current figure of a path'
    },
    {
        label: '_GDIPlus_PathAddLine2',
        documentation: 'Adds a sequence of lines to the current figure of a path'
    },
    {
        label: '_GDIPlus_PathAddPath',
        documentation: 'Adds a path to another path'
    },
    {
        label: '_GDIPlus_PathAddPie',
        documentation: 'Adds a pie to a path'
    },
    {
        label: '_GDIPlus_PathAddPolygon',
        documentation: 'Adds a polygon to a path'
    },
    {
        label: '_GDIPlus_PathAddRectangle',
        documentation: 'Adds a rectangle to a path'
    },
    {
        label: '_GDIPlus_PathAddString',
        documentation: 'Adds the outline of a string to a path'
    },
    {
        label: '_GDIPlus_PathClone',
        documentation: 'Clones a path'
    },
    {
        label: '_GDIPlus_PathCloseFigure',
        documentation: 'Closes the current figure of a path'
    },
    {
        label: '_GDIPlus_PathCreate',
        documentation: 'Creates a GraphicsPath object and initializes the fill mode'
    },
    {
        label: '_GDIPlus_PathCreate2',
        documentation: 'Creates a GraphicsPath object based on an array of points, an array of types, and a fill mode'
    },
    {
        label: '_GDIPlus_PathDispose',
        documentation: 'Releases a GraphicsPath object'
    },
    {
        label: '_GDIPlus_PathFlatten',
        documentation: 'Applies a transformation to a path and converts each curve in the path to a sequence of connected lines'
    },
    {
        label: '_GDIPlus_PathGetData',
        documentation: 'Gets an array of points and types from a path'
    },
    {
        label: '_GDIPlus_PathGetFillMode',
        documentation: 'Gets the fill mode of a path'
    },
    {
        label: '_GDIPlus_PathGetLastPoint',
        documentation: 'Gets the ending point of the last figure in a path'
    },
    {
        label: '_GDIPlus_PathGetPointCount',
        documentation: 'Gets the number of points in a path\'s array of data points'
    },
    {
        label: '_GDIPlus_PathGetPoints',
        documentation: 'Gets an array of points from a path'
    },
    {
        label: '_GDIPlus_PathGetWorldBounds',
        documentation: 'Gets the bounding rectangle for a path'
    },
    {
        label: '_GDIPlus_PathIsOutlineVisiblePoint',
        documentation: 'Determines whether a specified point touches the outline of a path with the specified Graphics and Pen'
    },
    {
        label: '_GDIPlus_PathIsVisiblePoint',
        documentation: 'Determines whether a specified point lies in the area that is filled when a path is filled by a specified Graphics object'
    },
    {
        label: '_GDIPlus_PathReset',
        documentation: 'Empties a path and sets the fill mode to alternate (0)'
    },
    {
        label: '_GDIPlus_PathReverse',
        documentation: 'Reverses the order of the points that define a path\'s lines and curves'
    },
    {
        label: '_GDIPlus_PathSetFillMode',
        documentation: 'Sets the fill mode of a path'
    },
    {
        label: '_GDIPlus_PathSetMarker',
        documentation: 'Designates the last point in a path as a marker point'
    },
    {
        label: '_GDIPlus_PathStartFigure',
        documentation: 'Starts a new figure without closing the current figure. Subsequent points added to a path are added to the new figure'
    },
    {
        label: '_GDIPlus_PathTransform',
        documentation: 'Multiplies each of a path\'s data points by a specified matrix'
    },
    {
        label: '_GDIPlus_PathWarp',
        documentation: 'Applies a warp transformation to a path. The function also flattens (converts to a sequence of straight lines) the path'
    },
    {
        label: '_GDIPlus_PathWiden',
        documentation: 'Replaces a path with curves that enclose the area that is filled when the path is drawn by a specified pen. The function also flattens the path'
    },
    {
        label: '_GDIPlus_PathWindingModeOutline',
        documentation: 'Transforms and flattens a path, and then converts the path\'s data points so that they represent only the outline of the path_GDIPlus_DrawImageFX Draws a portion of an image after applying a specified effect'
    },
    {
        label: '_GDIPlus_DrawImageFXEx',
        documentation: 'Draws a portion of an image after applying a specified effect'
    },
    {
        label: '_GDIPlus_DrawImagePoints',
        documentation: 'Draws an image at a specified location'
    },
    {
        label: '_GDIPlus_ImageDispose',
        documentation: 'Release an image object'
    },
    {
        label: '_GDIPlus_ImageGetDimension',
        documentation: 'Gets the width and height of an image which is supported by GDIPlus'
    },
    {
        label: '_GDIPlus_ImageGetFlags',
        documentation: 'Returns enumeration of pixel data attributes contained in an image'
    },
    {
        label: '_GDIPlus_ImageGetGraphicsContext',
        documentation: 'Get the graphics context of the image'
    },
    {
        label: '_GDIPlus_ImageGetHeight',
        documentation: 'Get the image height'
    },
    {
        label: '_GDIPlus_ImageGetHorizontalResolution',
        documentation: 'Returns horizontal resolution in DPI (pixels per inch) of an image'
    },
    {
        label: '_GDIPlus_ImageGetPixelFormat',
        documentation: 'Returns pixel format of an image: Bits per pixel, Alpha channels, RGB, Grayscale, Indexed etc'
    },
    {
        label: '_GDIPlus_ImageGetRawFormat',
        documentation: 'Returns file format GUID and image format name of an image'
    },
    {
        label: '_GDIPlus_ImageGetThumbnail',
        documentation: 'Gets a thumbnail image from this Image object'
    },
    {
        label: '_GDIPlus_ImageGetType',
        documentation: 'Returns type (bitmap or metafile) of an image'
    },
    {
        label: '_GDIPlus_ImageGetVerticalResolution',
        documentation: 'Returns vertical resolution in DPI (pixels per inch) of an image'
    },
    {
        label: '_GDIPlus_ImageGetWidth',
        documentation: 'Get the image width'
    },
    {
        label: '_GDIPlus_ImageLoadFromFile',
        documentation: 'Create an image object based on a file'
    },
    {
        label: '_GDIPlus_ImageLoadFromStream',
        documentation: 'Creates an Image object based on a stream'
    },
    {
        label: '_GDIPlus_ImageResize',
        documentation: 'Resize an image to a new given size'
    },
    {
        label: '_GDIPlus_ImageRotateFlip',
        documentation: 'Rotates and flips an image'
    },
    {
        label: '_GDIPlus_ImageSaveToFile',
        documentation: 'Save an image to file'
    },
    {
        label: '_GDIPlus_ImageSaveToFileEx',
        documentation: 'Save an image to file'
    },
    {
        label: '_GDIPlus_ImageSaveToStream',
        documentation: 'Saves an Image object to a stream'
    },
    {
        label: '_GDIPlus_ImageScale',
        documentation: 'Scales an image by a given factor'
    },
    {
        label: '_GDIPlus_ImageAttributesCreate',
        documentation: 'Creates an ImageAttributes object'
    },
    {
        label: '_GDIPlus_ImageAttributesDispose',
        documentation: 'Releases an ImageAttributes object'
    },
    {
        label: '_GDIPlus_ImageAttributesSetColorKeys',
        documentation: 'Sets or clears the color key (transparency range) for a specified category'
    },
    {
        label: '_GDIPlus_ImageAttributesSetColorMatrix',
        documentation: 'Sets or clears the color- and grayscale-adjustment matrices for a specified category_GDIPlus_MatrixClone Clones a Matrix object'
    },
    {
        label: '_GDIPlus_MatrixCreate',
        documentation: 'Creates and initializes a Matrix object that represents the identity matrix'
    },
    {
        label: '_GDIPlus_MatrixDispose',
        documentation: 'Release a matrix object'
    },
    {
        label: '_GDIPlus_MatrixGetElements',
        documentation: 'Gets the elements of a matrix'
    },
    {
        label: '_GDIPlus_MatrixInvert',
        documentation: 'Replaces the elements of a matrix with the elements of its inverse'
    },
    {
        label: '_GDIPlus_MatrixMultiply',
        documentation: 'Updates a matrix with the product of itself and another matrix'
    },
    {
        label: '_GDIPlus_MatrixRotate',
        documentation: 'Updates a matrix with the product of itself and a rotation matrix'
    },
    {
        label: '_GDIPlus_MatrixScale',
        documentation: 'Updates a matrix with the product of itself and a scaling matrix'
    },
    {
        label: '_GDIPlus_MatrixSetElements',
        documentation: 'Sets the elements of a matrix'
    },
    {
        label: '_GDIPlus_MatrixShear',
        documentation: 'Updates a matrix with the product of itself and another matrix'
    },
    {
        label: '_GDIPlus_MatrixTransformPoints',
        documentation: 'Multiplies each point in an array by a matrix'
    },
    {
        label: '_GDIPlus_MatrixTranslate',
        documentation: 'Updates a matrix with the product of itself and a translation matrix_GDIPlus_ColorMatrixCreate Creates and initializes an identity color matrix'
    },
    {
        label: '_GDIPlus_ColorMatrixCreateGrayScale',
        documentation: 'Creates and initializes a gray-scaling color matrix'
    },
    {
        label: '_GDIPlus_ColorMatrixCreateNegative',
        documentation: 'Creates and initializes a negative color matrix'
    },
    {
        label: '_GDIPlus_ColorMatrixCreateSaturation',
        documentation: 'Creates and initializes a saturation color matrix'
    },
    {
        label: '_GDIPlus_ColorMatrixCreateScale',
        documentation: 'Creates and initializes a scaling color matrix'
    },
    {
        label: '_GDIPlus_ColorMatrixCreateTranslate',
        documentation: 'Creates and initializes a translation color matrix'
    },
    {
        label: '_GDIPlus_PathBrushCreate',
        documentation: 'Creates a PathGradientBrush object based on an array of points and initializes the wrap mode of the brush'
    },
    {
        label: '_GDIPlus_PathBrushCreateFromPath',
        documentation: 'Creates a PathGradientBrush object based on a GraphicsPath object'
    },
    {
        label: '_GDIPlus_PathBrushGetCenterPoint',
        documentation: 'Gets the center point of a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushGetFocusScales',
        documentation: 'Gets the focus scales of a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushGetPointCount',
        documentation: 'Gets the number of points in the array of points that defines a brush\'s boundary path'
    },
    {
        label: '_GDIPlus_PathBrushGetRect',
        documentation: 'Gets the smallest rectangle that encloses the boundary path of a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushGetWrapMode',
        documentation: 'Gets the wrap mode currently set for a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushMultiplyTransform',
        documentation: 'Updates a brush\'s transformation matrix with the product of itself and another matrix'
    },
    {
        label: '_GDIPlus_PathBrushResetTransform',
        documentation: 'Resets the transformation matrix of a path gradient brush to the identity matrix'
    },
    {
        label: '_GDIPlus_PathBrushSetBlend',
        documentation: 'Sets the blend factors and the blend positions of a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushSetCenterColor',
        documentation: 'Sets the color of the center point of a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushSetCenterPoint',
        documentation: 'Sets the center point of a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushSetFocusScales',
        documentation: 'Sets the focus scales of a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushSetGammaCorrection',
        documentation: 'Specifies whether gamma correction is enabled for a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushSetLinearBlend',
        documentation: 'Sets the blend shape of a path gradient brush to create a custom blend based on a triangular shape'
    },
    {
        label: '_GDIPlus_PathBrushSetPresetBlend',
        documentation: 'Sets the preset colors and the blend positions of a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushSetSigmaBlend',
        documentation: 'Sets the blend shape of a path gradient brush to create a custom blend based on a bell-shaped curve'
    },
    {
        label: '_GDIPlus_PathBrushSetSurroundColor',
        documentation: 'Sets the surround color for a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushSetSurroundColorsWithCount',
        documentation: 'Sets the surround colors currently specified for a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushSetTransform',
        documentation: 'Sets the transformation matrix of a path gradient brush'
    },
    {
        label: '_GDIPlus_PathBrushSetWrapMode',
        documentation: 'Sets the wrap mode of a path gradient brush'
    },
    {
        label: '_GDIPlus_PathIterCreate',
        documentation: 'Creates a new GraphicsPathIterator object and associates it with a GraphicsPath object'
    },
    {
        label: '_GDIPlus_PathIterDispose',
        documentation: 'Releases a GraphicsPathIterator object'
    },
    {
        label: '_GDIPlus_PathIterGetSubpathCount',
        documentation: 'Gets the number of subpaths (also called figures) in the path'
    },
    {
        label: '_GDIPlus_PathIterNextMarkerPath',
        documentation: 'Gets the next marker-delimited section of an iterator\'s associated path'
    },
    {
        label: '_GDIPlus_PathIterNextSubpathPath',
        documentation: 'Gets the next figure (subpath) from an iterator\'s associated path'
    },
    {
        label: '_GDIPlus_PathIterRewind',
        documentation: 'Rewinds an iterator to the beginning of its associated path'
    },
    {
        label: '_GDIPlus_PenCreate',
        documentation: 'Create a pen object'
    },
    {
        label: '_GDIPlus_PenCreate2',
        documentation: 'Creates a Pen object that uses the attributes of a brush'
    },
    {
        label: '_GDIPlus_PenDispose',
        documentation: 'Release a pen object'
    },
    {
        label: '_GDIPlus_PenGetAlignment',
        documentation: 'Gets the pen alignment'
    },
    {
        label: '_GDIPlus_PenGetColor',
        documentation: 'Gets the pen color'
    },
    {
        label: '_GDIPlus_PenGetCustomEndCap',
        documentation: 'Gets the custom end cap for the pen'
    },
    {
        label: '_GDIPlus_PenGetDashCap',
        documentation: 'Gets the pen dash cap style'
    },
    {
        label: '_GDIPlus_PenGetDashStyle',
        documentation: 'Gets the pen dash style'
    },
    {
        label: '_GDIPlus_PenGetEndCap',
        documentation: 'Gets the pen end cap'
    },
    {
        label: '_GDIPlus_PenGetMiterLimit',
        documentation: 'Gets the miter length currently set for a Pen object'
    },
    {
        label: '_GDIPlus_PenGetWidth',
        documentation: 'Retrieve the width of a pen'
    },
    {
        label: '_GDIPlus_PenSetAlignment',
        documentation: 'Sets the pen alignment'
    },
    {
        label: '_GDIPlus_PenSetColor',
        documentation: 'Sets the pen color'
    },
    {
        label: '_GDIPlus_PenSetCustomEndCap',
        documentation: 'Sets the custom end cap for the pen'
    },
    {
        label: '_GDIPlus_PenSetDashCap',
        documentation: 'Sets the pen dash cap style'
    },
    {
        label: '_GDIPlus_PenSetDashStyle',
        documentation: 'Sets the pen dash style'
    },
    {
        label: '_GDIPlus_PenSetEndCap',
        documentation: 'Sets the pen end cap'
    },
    {
        label: '_GDIPlus_PenSetLineCap',
        documentation: 'Sets the cap styles for the start, end, and dashes in a line drawn with the pen'
    },
    {
        label: '_GDIPlus_PenSetLineJoin',
        documentation: 'Sets the line join for a Pen object'
    },
    {
        label: '_GDIPlus_PenSetMiterLimit',
        documentation: 'Sets the miter limit of a Pen object'
    },
    {
        label: '_GDIPlus_PenSetStartCap',
        documentation: 'Sets the start cap for a Pen object'
    },
    {
        label: '_GDIPlus_PenSetWidth',
        documentation: 'Sets the width of a pen'
    },
    {
        label: '_GDIPlus_RegionClone',
        documentation: 'Clones a Region object'
    },
    {
        label: '_GDIPlus_RegionCombinePath',
        documentation: 'Updates a region to the portion of itself that intersects the specified path\'s interior'
    },
    {
        label: '_GDIPlus_RegionCombineRect',
        documentation: 'Updates a region to the portion of itself that intersects the specified rectangle\'s interior'
    },
    {
        label: '_GDIPlus_RegionCombineRegion',
        documentation: 'Updates a region to the portion of itself that intersects another region'
    },
    {
        label: '_GDIPlus_RegionCreate',
        documentation: 'Creates a region that is infinite'
    },
    {
        label: '_GDIPlus_RegionCreateFromPath',
        documentation: 'Creates a region that is defined by a path object and has a fill mode that is contained in the path object'
    },
    {
        label: '_GDIPlus_RegionCreateFromRect',
        documentation: 'Creates a region that is defined by a rectangle'
    },
    {
        label: '_GDIPlus_RegionDispose',
        documentation: 'Releases a Region object'
    },
    {
        label: '_GDIPlus_RegionGetBounds',
        documentation: 'Gets a rectangle that encloses a region'
    },
    {
        label: '_GDIPlus_RegionGetHRgn',
        documentation: 'Creates a GDI region from a GDI+ Region object'
    },
    {
        label: '_GDIPlus_RegionTransform',
        documentation: 'Tansforms a region by multiplying each of its data points by a specified matrix'
    },
    {
        label: '_GDIPlus_RegionTranslate',
        documentation: 'Offsets a region by specified amounts in the horizontal and vertical directions'
    },
    {
        label: '_GDIPlus_StringFormatCreate',
        documentation: 'Create a String Format object'
    },
    {
        label: '_GDIPlus_StringFormatDispose',
        documentation: 'Release a String Format object'
    },
    {
        label: '_GDIPlus_StringFormatGetMeasurableCharacterRangeCount',
        documentation: 'Gets the number of measurable character ranges that are currently set for a StringFormat object'
    },
    {
        label: '_GDIPlus_StringFormatSetAlign',
        documentation: 'Sets the text alignment of a string format object'
    },
    {
        label: '_GDIPlus_StringFormatSetLineAlign',
        documentation: 'Sets the line alignment of a StringFormat object in relation to the origin of a layout rectangle'
    },
    {
        label: '_GDIPlus_StringFormatSetMeasurableCharacterRanges',
        documentation: 'Sets a series of character ranges for a StringFormat object that, when in a string, can be measured_GDIPlus_GraphicsDrawString Draw a string'
    },
    {
        label: '_GDIPlus_GraphicsDrawStringEx',
        documentation: 'Draw a string'
    },
    {
        label: '_GDIPlus_GraphicsMeasureCharacterRanges',
        documentation: 'Gets a set of region objects each of which bounds a range of character positions within a string'
    },
    {
        label: '_GDIPlus_GraphicsMeasureString',
        documentation: 'Measures the size of a string'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GDIPlus UDF - #include <GDIPlus.au3>'
}

module.exports = items