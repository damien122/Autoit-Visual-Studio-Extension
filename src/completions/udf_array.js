import { CompletionItemKind } from 'vscode';
import { fillCompletions } from '../util';

const items = [
  {
    label: '_Array1DToHistogram',
    documentation: 'Transform a 1D array to Histogram',
  },
  {
    label: '_ArrayAdd',
    documentation: 'Adds a specified value at the end of an existing 1D or 2D array',
  },
  {
    label: '_ArrayBinarySearch',
    documentation: 'Uses the binary search algorithm to search through a 1D or 2D array',
  },
  {
    label: '_ArrayColDelete',
    documentation: 'Deletes a specified column from a 2D array',
  },
  {
    label: '_ArrayColInsert',
    documentation: 'Inserts a specified column into a 1D or 2D array',
  },
  {
    label: '_ArrayCombinations',
    documentation:
      'Returns an array of the combinations of a set of elements from a selected 1D array',
  },
  {
    label: '_ArrayConcatenate',
    documentation: 'Concatenate two arrays - either 1D or 2D with the same number of columns',
  },
  {
    label: '_ArrayDelete',
    documentation: 'Deletes the specified element(s) from the specified 1D or 2D array',
  },
  {
    label: '_ArrayDisplay',
    documentation: 'Displays a 1D or 2D array in a ListView',
  },
  {
    label: '_ArrayExtract',
    documentation: 'Extracts an array from the specified element(s) of a 1D or 2D array',
  },
  {
    label: '_ArrayFindAll',
    documentation:
      'Find the indices of all ocurrences of a search query between two points in a 1D or 2D array using _ArraySearch()',
  },
  {
    label: '_ArrayInsert',
    documentation: 'Insert a new value at the specified position of a 1D or 2D array',
  },
  {
    label: '_ArrayMax',
    documentation: 'Returns the highest value held in a 1D or 2D array',
  },
  {
    label: '_ArrayMaxIndex',
    documentation: 'Returns the index where the highest value occurs in a 1D or 2D array',
  },
  {
    label: '_ArrayMin',
    documentation: 'Returns the lowest value held in a 1D or 2D array',
  },
  {
    label: '_ArrayMinIndex',
    documentation: 'Returns the index where the lowest value occurs in a 1D or 2D array',
  },
  {
    label: '_ArrayPermute',
    documentation: 'Returns an array of the Permutations of all Elements in a 1D array',
  },
  {
    label: '_ArrayPop',
    documentation:
      'Returns the last element of an array, deleting that element from the array at the same time',
  },
  {
    label: '_ArrayPush',
    documentation:
      'Add new values without increasing array size by inserting at the end the new value and deleting the first one or vice versa',
  },
  {
    label: '_ArrayReverse',
    documentation:
      'Takes the given array and reverses the order in which the elements appear in a 1D array',
  },
  {
    label: '_ArraySearch',
    documentation:
      'Finds an entry within a 1D or 2D array. Similar to _ArrayBinarySearch(), except that the array does not need to be sorted',
  },
  {
    label: '_ArrayShuffle',
    documentation:
      'Shuffles selected rows of 1D or 2D arrays - can be limited to a specific column in 2D arrays',
  },
  {
    label: '_ArraySort',
    documentation:
      'Sort a 1D or 2D array on a specific index using the dualpivotsort/quicksort/insertionsort algorithms',
  },
  {
    label: '_ArraySwap',
    documentation: 'Swaps elements of a 1D array and full or part rows/columns of a 2D array',
  },
  {
    label: '_ArrayToClip',
    documentation:
      'Sends the contents of a 1D or 2D array to the clipboard, each element separated by a specified delimiter',
  },
  {
    label: '_ArrayToString',
    documentation:
      'Places the elements of a 1D or 2D array into a single string, separated by the specified delimiters',
  },
  {
    label: '_ArrayTranspose',
    documentation: 'Transposes a 1D or 2D array (swaps rows and columns)',
  },
  {
    label: '_ArrayTrim',
    documentation: 'Trims a certain number of characters from all elements in a 1D or 2D array',
  },
  {
    label: '_ArrayUnique',
    documentation:
      'Returns the Elements from a column of a 1D or 2D array, removing all duplicates',
  },
];

const functions = fillCompletions(
  items,
  CompletionItemKind.Function,
  'Array UDF - #include <Array.au3>',
);

export default functions;
