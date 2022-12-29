import { CompletionItemKind } from 'vscode';
import { fillCompletions } from '../util';

const items = [
  {
    label: '_GUICtrlAVI_Close',
    documentation: 'Closes an AVI clip',
  },
  {
    label: '_GUICtrlAVI_Create',
    documentation: 'Creates an AVI control',
  },
  {
    label: '_GUICtrlAVI_Destroy',
    documentation: 'Delete the control',
  },
  {
    label: '_GUICtrlAVI_IsPlaying',
    documentation: 'Checks whether an Audio-Video Interleaved (AVI) clip is playing',
  },
  {
    label: '_GUICtrlAVI_Open',
    documentation: 'Opens an AVI clip and displays its first frame in an animation control',
  },
  {
    label: '_GUICtrlAVI_OpenEx',
    documentation: 'Opens an AVI clip and displays its first frame in an animation control',
  },
  {
    label: '_GUICtrlAVI_Play',
    documentation: 'Plays an AVI clip in an animation control',
  },
  {
    label: '_GUICtrlAVI_Seek',
    documentation: 'Directs an AVI control to display a particular frame of an AVI clip',
  },
  {
    label: '_GUICtrlAVI_Show',
    documentation: 'Show/Hide the AVI control',
  },
  {
    label: '_GUICtrlAVI_Stop',
    documentation: 'Stops playing an AVI clip',
  },
];

export default fillCompletions(items, CompletionItemKind.Function, 'GuiAVI UDF', 'GuiAVI.au3');
