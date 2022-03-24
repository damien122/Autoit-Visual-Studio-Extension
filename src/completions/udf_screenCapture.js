import { CompletionItemKind } from 'vscode';
import { fillCompletions } from '../util';

const items = [
  {
    label: '_ScreenCapture_Capture',
    documentation: 'Captures a region of the screen',
  },

  {
    label: '_ScreenCapture_CaptureWnd',
    documentation: 'Captures a screen shot of a specified window or controlID',
  },

  {
    label: '_ScreenCapture_SaveImage',
    documentation: 'Saves an image to file',
  },

  {
    label: '_ScreenCapture_SetBMPFormat',
    documentation: 'Sets the bit format that will be used for BMP screen captures',
  },

  {
    label: '_ScreenCapture_SetJPGQuality',
    documentation: 'Sets the quality level that will be used for JPEG screen captures',
  },

  {
    label: '_ScreenCapture_SetTIFColorDepth',
    documentation: 'Sets the color depth used for TIFF screen captures',
  },

  {
    label: '_ScreenCapture_SetTIFCompression',
    documentation: 'Sets the compression used for TIFF screen captures ',
  },
];

const functions = fillCompletions(
  items,
  CompletionItemKind.Function,
  'Screen Capture UDF - #include <ScreenCapture.au3>',
);

export default functions;
