import { CompletionItemKind } from 'vscode';
import { fillCompletions } from '../util';

const items = [
  {
    label: '_SoundClose',
    documentation: 'Closes a sound previously opened with _SoundOpen',
  },

  {
    label: '_SoundLength',
    documentation: 'Returns the length of the soundfile',
  },

  {
    label: '_SoundOpen',
    documentation: 'Opens a sound file for use with other _Sound functions',
  },

  {
    label: '_SoundPause',
    documentation: 'Pause a playing sound',
  },

  {
    label: '_SoundPlay',
    documentation: 'Play a sound file',
  },

  {
    label: '_SoundPos',
    documentation: 'Returns the current position of the sound',
  },

  {
    label: '_SoundResume',
    documentation: 'Resume a paused sound',
  },

  {
    label: '_SoundSeek',
    documentation: 'Seeks the sound to the specified position',
  },

  {
    label: '_SoundStatus',
    documentation: 'Returns the status of the sound',
  },

  {
    label: '_SoundStop',
    documentation: 'Stop a playing sound ',
  },
];

const functions = fillCompletions(
  items,
  CompletionItemKind.Function,
  'Sound UDF - #include <Sound.au3>',
);

export default functions;
