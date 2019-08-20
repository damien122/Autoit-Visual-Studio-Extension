import { br, signatureToHover, opt } from '../../util';

const include = '`#include <WinAPITHeme.au3>`';

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
      {
        label: '$hBP',
        documentation: 'Handle of the buffered paint context.',
      },
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
};

const hovers = signatureToHover(signatures);

export { signatures as default, hovers };
