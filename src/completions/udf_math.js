import { CompletionItemKind } from 'vscode';
import { fillCompletions } from '../util';

const items = [
  {
    label: '_Degree',
    documentation: 'Converts radians to degrees',
  },
  {
    label: '_MathCheckDiv',
    documentation: 'Checks if first number is divisible by the second number',
  },
  {
    label: '_Max',
    documentation: 'Evaluates which of the two numbers is higher',
  },
  {
    label: '_Min',
    documentation: 'Evaluates which of the two numbers is lower',
  },
  {
    label: '_Radian',
    documentation: 'Converts degrees to radians ',
  },
];

const functions = fillCompletions(
  items,
  CompletionItemKind.Function,
  'Math UDF - #include <Math.au3>',
);

export default functions;
