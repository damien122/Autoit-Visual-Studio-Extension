import { br, signatureToHover, opt } from '../../util';

const include = '`#include <WinAPITHeme.au3>`';

const commonParams = {
  hBP: {
    label: '$hBP',
    documentation: 'Handle of the buffered paint context.',
  },
  hTheme: {
    label: '$hTheme',
    documentation: "Handle to a window's specified theme data.",
  },
  iStateID: {
    label: '$iStateID',
    documentation: 'The state of the part.',
  },
  hDC: {
    label: '$hDC',
    documentation: 'Handle to the device context.',
  },
  hDC_Drawing: {
    label: '$hDC',
    documentation: 'Handle to the device context to use for drawing.',
  },
  iFlags: {
    label: '$iFlags',
    documentation: "The string's formatting flags (`$DT_`\\*).",
  },
  iPartID: {
    label: '$iPartID',
    documentation: `The part that has the desired text appearance.${br}
          If this value is 0, the text is drawn in the default font, or a font selected into the device context.`,
  },
  sText: {
    label: '$sText',
    documentation: 'The string that contains the text to draw.',
  },
  tRECT: {
    label: '$tRECT',
    documentation:
      '`$tagRECT` structure that contains the rectangle in which the text is to be drawn.',
  },
};

const signatures = {
  _WinAPI_BeginBufferedPaint: {
    documentation: `Begins a buffered paint operation ${include}`,
    label: `_WinAPI_BeginBufferedPaint ( $hDC, $tTarget, ByRef $hNewDC, [$iFormat] = 0, [$iFlags] = 0, [$tExclude] = 0, [$iAlpha] = -1 )`,
    params: [
      {
        label: '$hDC',
        documentation: 'Handle of the target DC on which the buffer will be painted.',
      },
      {
        label: '$tTarget',
        documentation:
          '`$tagRECT` structure that specifies the area of the target DC in which to paint.',
      },
      {
        label: '$hNewDC',
        documentation: 'Handle of the new device context.',
      },
      {
        label: '[$iFormat]',
        documentation: `${opt} The format of the buffer. This parameter can be one of the following values.${br}${br}
          \`$BPBF_COMPATIBLEBITMAP\` (Default)${br}
          \`$BPBF_DIB\`${br}
          \`$BPBF_TOPDOWNDIB\`${br}
          \`$BPBF_TOPDOWNMONODIB\``,
      },
      {
        label: '[$iFlags]',
        documentation: `${opt} The additional flags, one or more of the following values.${br}
          ${br}\`$BPPF_ERASE\`${br}
          ${br}\`$BPPF_NOCLIP\`${br}
          \`$BPPF_NONCLIENT\``,
      },
      {
        label: '[$tExclude]',
        documentation: `${opt} \`$tagRECT\` structure that specifies the area which is excluded from the clipping region.`,
      },
      {
        label: '[$iAlpha]',
        documentation: `${opt} The alpha transparency value to be used on the entire source bitmap.${br}
          If this parameter is not specified or (-1) (Default), the source buffer is copied to the destination with no blending.`,
      },
    ],
  },
  _WinAPI_BufferedPaintClear: {
    documentation: `Clears a specified rectangle in the buffer to ARGB = {0,0,0,0} ${include}`,
    label: '_WinAPI_BufferedPaintClear ( $hBP, [$tRECT] = 0 )',
    params: [
      commonParams.hBP,
      {
        label: '$tRECT',
        documentation: `${opt} \`$tagRECT\` structure that specifies the rectangle to clear. If this parameter is 0 (Default), the entire buffer is used.`,
      },
    ],
  },
  _WinAPI_BufferedPaintInit: {
    documentation: `Initialize buffered painting for the current thread ${include}`,
    label: '_WinAPI_BufferedPaintInit ( )',
    params: [],
  },
  _WinAPI_BufferedPaintSetAlpha: {
    documentation: `Sets the alpha to a specified value in a given rectangle ${include}`,
    label: '_WinAPI_BufferedPaintSetAlpha ( $hBP, [$iAlpha] = 255, [$tRECT] = 0 )',
    params: [
      commonParams.hBP,
      {
        label: '$iAlpha',
        documentation: `${opt} The alpha value to set. The alpha value can range from zero (fully transparent) to 255 (Default)(fully opaque).`,
      },
      {
        label: '$tRECT',
        documentation: `${opt} \`$tagRECT\` structure that specifies the rectangle in which to set the alpha. If this parameter is 0 (Default), the entire buffer is used.`,
      },
    ],
  },
  _WinAPI_BufferedPaintUnInit: {
    documentation: `Closes down buffered painting for the current thread ${include}`,
    label: '_WinAPI_BufferedPaintUnInit ( )',
    params: [],
  },
  _WinAPI_CloseThemeData: {
    documentation: `Closes the theme data handle ${include}`,
    label: '_WinAPI_CloseThemeData ( $hTheme )',
    params: [commonParams.hTheme],
  },
  _WinAPI_DrawThemeBackground: {
    documentation: `Draws the border and fill defined by the visual style for the specified control part ${include}`,
    label:
      '_WinAPI_DrawThemeBackground ( $hTheme, $iPartID, $iStateID, $hDC, $tRECT, [$tCLIP] = 0 )',
    params: [
      commonParams.hTheme,
      {
        label: '$iPartID',
        documentation: 'The part to draw.',
      },
      {
        label: '$iStateID',
        documentation: 'The state of the part to draw.',
      },
      {
        label: '$hDC',
        documentation:
          'Handle to the device context for drawing the theme-defined background image.',
      },
      {
        label: '$tRECT',
        documentation:
          '`$tagRECT` structure that contains the rectangle in which the background image is drawn.',
      },
      {
        label: '$tCLIP',
        documentation: `${opt} \`$tagRECT\` structure that contains a clipping rectangle.`,
      },
    ],
  },

  _WinAPI_DrawThemeEdge: {
    documentation: `Draws one or more edges defined by the visual style of a rectangle ${include}`,
    label:
      '_WinAPI_DrawThemeEdge ( $hTheme, $iPartID, $iStateID, $hDC, $tRECT, $iEdge, $iFlags, [$tAREA] = 0 )',
    params: [
      commonParams.hTheme,
      {
        label: '$iPartID',
        documentation: 'The part that contains the rectangle.',
      },
      commonParams.iStateID,
      commonParams.hDC,
      {
        label: '$tRECT',
        documentation: `\`$tagRECT\` structure that contains the rectangle.`,
      },
      {
        label: '$iEdge',
        documentation:
          'The type of inner and outer edges to draw.This parameter must be a combination of one inner-border flag and one outer-border flag (`$BDR_`\\*), or one of the combination flags (`$EDGE_`\\*).',
      },
      {
        label: '$iFlags',
        documentation:
          'The type of border to draw. It can be a combination of the `$BF_`\\* constants.',
      },
      {
        label: '$tAREA',
        documentation: `${opt} \`$tagRECT\` structure that contains the rectangle that receives the interior rectangle, if \`$BF_ADJUST\` is used.`,
      },
    ],
  },

  _WinAPI_DrawThemeIcon: {
    documentation: `Draws an image from an image list with the icon effect defined by the visual style ${include}`,
    label: '_WinAPI_DrawThemeIcon ( $hTheme, $iPartID, $iStateID, $hDC, $tRECT, $hIL, $iIndex )',
    params: [
      commonParams.hTheme,
      {
        label: '$iPartID',
        documentation: 'The part in which the image is drawn.',
      },
      commonParams.iStateID,
      commonParams.hDC,
      {
        label: '$tRECT',
        documentation:
          '`$tagRECT` structure that contains the rectangle in which the image is drawn.',
      },
      {
        label: '$hIL',
        documentation: 'Handle to an image list that contains the image to draw.',
      },
      {
        label: '$iIndex',
        documentation: 'The index of the image to draw.',
      },
    ],
  },

  _WinAPI_DrawThemeParentBackground: {
    documentation: `Draws the part of a parent control that is covered by a partially-transparent or alpha-blended child control ${include}`,
    label: '_WinAPI_DrawThemeParentBackground ( $hWnd, $hDC, [$tRECT] = 0] )',
    params: [
      {
        label: '$hWnd',
        documentation: 'Handle of the child control.',
      },
      {
        label: '$hDC',
        documentation: "Handle to the child control's DC.",
      },
      {
        label: '$tRECT',
        documentation: `${opt} \`$tagRECT\` structure that defines the area, in the child window's coordinates, to be drawn.`,
      },
    ],
  },

  _WinAPI_DrawThemeText: {
    documentation: `Draws text using the color and font defined by the visual style ${include}`,
    label: '_WinAPI_DrawThemeText ( $hTheme, $iPartID, $iStateID, $hDC, $sText, $tRECT, $iFlags )',
    params: [
      commonParams.hTheme,
      commonParams.iPartID,
      commonParams.iStateID,
      commonParams.hDC_Drawing,
      commonParams.sText,
      commonParams.tRECT,
      commonParams.iFlags,
    ],
  },

  _WinAPI_DrawThemeTextEx: {
    documentation: `Draws text using the color and font defined by the visual style ${include}`,
    label:
      '_WinAPI_DrawThemeTextEx ( $hTheme, $iPartID, $iStateID, $hDC, $sText, $tRECT, $iFlags, $tDTTOPTS )',
    params: [
      commonParams.hTheme,
      commonParams.iPartID,
      commonParams.iStateID,
      commonParams.hDC_Drawing,
      commonParams.sText,
      commonParams.tRECT,
      commonParams.iFlags,
      {
        label: '$tDTTOPTS',
        documentation: '`$tagDTTOPTS` structure that defines additional formatting options.',
      },
    ],
  },

  _WinAPI_EndBufferedPaint: {
    documentation: `Completes a buffered paint operation and frees the associated buffered paint handle ${include}`,
    label: '_WinAPI_EndBufferedPaint ( $hBP, [$bUpdate] = True )',
    params: [
      commonParams.hBP,
      {
        label: '$bUpdate',
        documentation: `${opt} Specifies whether copy the buffer to the target DC, valid values:${br}
          \`True\` - The target DC will be updated from the buffer (Default).${br}
          \`False\` - The target DC remains unchanged.`,
      },
    ],
  },

  _WinAPI_GetBufferedPaintBits: {
    documentation: `Retrieves a pointer to the buffer bitmap if the buffer is a device-independent bitmap (DIB) ${include}`,
    label: '_WinAPI_GetBufferedPaintBits ( $hBP )',
    params: [commonParams.hBP],
  },

  _WinAPI_GetBufferedPaintDC: {
    documentation: `Gets the paint device context (DC) ${include}`,
    label: '_WinAPI_GetBufferedPaintDC ( $hBP )',
    params: [commonParams.hBP],
  },

  _WinAPI_GetBufferedPaintTargetDC: {
    documentation: `Retrieves the target device context (DC) ${include}`,
    label: '_WinAPI_GetBufferedPaintTargetDC ( $hBP )',
    params: [commonParams.hBP],
  },

  _WinAPI_GetBufferedPaintTargetRect: {
    documentation: `Retrieves the target rectangle ${include}`,
    label: '_WinAPI_GetBufferedPaintTargetRect ( $hBP )',
    params: [commonParams.hBP],
  },
};

const hovers = signatureToHover(signatures);

export { signatures as default, hovers };
