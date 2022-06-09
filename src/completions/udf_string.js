import { CompletionItemKind } from 'vscode';
import { fillCompletions } from '../util';

const items = [
  {
    label: '_HexToString',
    documentation: 'Convert a hex string to a string',
  },

  {
    label: '_StringBetween',
    documentation: 'Find strings between two string delimiters',
  },

  {
    label: '_StringExplode',
    documentation:
      'Splits up a string into substrings depending on the given delimiters as PHP Explode v5',
  },

  {
    label: '_StringInsert',
    documentation: 'Inserts a string within another string',
  },

  {
    label: '_StringProper',
    documentation: 'Changes a string to proper case, same as the =Proper function in Excel',
  },

  {
    label: '_StringRepeat',
    documentation: 'Repeats a string a specified number of times',
  },

  {
    label: '_StringTitleCase',
    documentation: 'Changes a string to a title case string',
  },

  {
    label: '_StringToHex',
    documentation: 'Convert a string to a hex string ',
  },
];

export default fillCompletions(items, CompletionItemKind.Function, 'String UDF', 'String.au3');
