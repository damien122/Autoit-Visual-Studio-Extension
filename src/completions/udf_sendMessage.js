import { CompletionItemKind } from 'vscode';
import { fillCompletions } from '../util';

const items = [
  {
    label: '_SendMessage',
    documentation: 'Wrapper for commonly used DLL Call',
  },

  {
    label: '_SendMessageA',
    documentation: 'Send a Message to a Window/Control (Force Ansi Call)',
  },
];

export default fillCompletions(
  items,
  CompletionItemKind.Function,
  'Send Message UDF',
  'SendMessage.au3',
);
