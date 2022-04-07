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

const functions = fillCompletions(
  items,
  CompletionItemKind.Function,
  'Send Message UDF - #include <SendMessage.au3>',
);

export default functions;
