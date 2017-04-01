'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_Array1DToHistogram',
        documentation: 'Transform a 1D array to Histogram',
        insertText: '_Array1DToHistogram(${})'
    },
    {
        label: '_ArrayAdd',
        documentation: 'Adds a specified value at the end of an existing 1D or 2D array',
        insertText: '_ArrayAdd(${})'
    },
    {
        label: '_ArrayBinarySearch',
        documentation: 'Uses the binary search algorithm to search through a 1D or 2D array',
        insertText: '_ArrayBinarySearch(${})'
    },
    {
        label: '_ArrayColDelete',
        documentation: 'Deletes a specified column from a 2D array',
        insertText: '_ArrayColDelete(${})'
    },
    {
        label: '_ArrayColInsert',
        documentation: 'Inserts a specified column into a 1D or 2D array',
        insertText: '_ArrayColInsert(${})'
    },
    {
        label: '_ArrayCombinations',
        documentation: 'Returns an array of the combinations of a set of elements from a selected 1D array',
        insertText: '_ArrayCombinations(${})'
    },
    {
        label: '_ArrayConcatenate',
        documentation: 'Concatenate two arrays - either 1D or 2D with the same number of columns',
        insertText: '_ArrayConcatenate(${})'
    },
    {
        label: '_ArrayDelete',
        documentation: 'Deletes the specified element(s) from the specified 1D or 2D array',
        insertText: '_ArrayDelete(${})'
    },
    {
        label: '_ArrayDisplay',
        documentation: 'Displays a 1D or 2D array in a ListView',
        insertText: '_ArrayDisplay(${})'
    },
    {
        label: '_ArrayExtract',
        documentation: 'Extracts an array from the specified element(s) of a 1D or 2D array',
        insertText: '_ArrayExtract(${})'
    },
    {
        label: '_ArrayFindAll',
        documentation: 'Find the indices of all ocurrences of a search query between two points in a 1D or 2D array using _ArraySearch()',
        insertText: '_ArrayFindAll(${})'
    },
    {
        label: '_ArrayInsert',
        documentation: 'Insert a new value at the specified position of a 1D or 2D array',
        insertText: '_ArrayInsert(${})'
    },
    {
        label: '_ArrayMax',
        documentation: 'Returns the highest value held in a 1D or 2D array',
        insertText: '_ArrayMax(${})'
    },
    {
        label: '_ArrayMaxIndex',
        documentation: 'Returns the index where the highest value occurs in a 1D or 2D array',
        insertText: '_ArrayMaxIndex(${})'
    },
    {
        label: '_ArrayMin',
        documentation: 'Returns the lowest value held in a 1D or 2D array',
        insertText: '_ArrayMin(${})'
    },
    {
        label: '_ArrayMinIndex',
        documentation: 'Returns the index where the lowest value occurs in a 1D or 2D array',
        insertText: '_ArrayMinIndex(${})'
    },
    {
        label: '_ArrayPermute',
        documentation: 'Returns an array of the Permutations of all Elements in a 1D array',
        insertText: '_ArrayPermute(${})'
    },
    {
        label: '_ArrayPop',
        documentation: 'Returns the last element of an array, deleting that element from the array at the same time',
        insertText: '_ArrayPop(${})'
    },
    {
        label: '_ArrayPush',
        documentation: 'Add new values without increasing array size by inserting at the end the new value and deleting the first one or vice versa',
        insertText: '_ArrayPush(${})'
    },
    {
        label: '_ArrayReverse',
        documentation: 'Takes the given array and reverses the order in which the elements appear in a 1D array',
        insertText: '_ArrayReverse(${})'
    },
    {
        label: '_ArraySearch',
        documentation: 'Finds an entry within a 1D or 2D array. Similar to _ArrayBinarySearch(), except that the array does not need to be sorted',
        insertText: '_ArraySearch(${})'
    },
    {
        label: '_ArrayShuffle',
        documentation: 'Shuffles selected rows of 1D or 2D arrays - can be limited to a specific column in 2D arrays',
        insertText: '_ArrayShuffle(${})'
    },
    {
        label: '_ArraySort',
        documentation: 'Sort a 1D or 2D array on a specific index using the dualpivotsort/quicksort/insertionsort algorithms',
        insertText: '_ArraySort(${})'
    },
    {
        label: '_ArraySwap',
        documentation: 'Swaps elements of a 1D array and full or part rows/columns of a 2D array',
        insertText: '_ArraySwap(${})'
    },
    {
        label: '_ArrayToClip',
        documentation: 'Sends the contents of a 1D or 2D array to the clipboard, each element separated by a specified delimiter',
        insertText: '_ArrayToClip(${})'
    },
    {
        label: '_ArrayToString',
        documentation: 'Places the elements of a 1D or 2D array into a single string, separated by the specified delimiters',
        insertText: '_ArrayToString(${})'
    },
    {
        label: '_ArrayTranspose',
        documentation: 'Transposes a 1D or 2D array (swaps rows and columns)',
        insertText: '_ArrayTranspose(${})'
    },
    {
        label: '_ArrayTrim',
        documentation: 'Trims a certain number of characters from all elements in a 1D or 2D array',
        insertText: '_ArrayTrim(${})'
    },
    {
        label: '_ArrayUnique',
        documentation: 'Returns the Elements from a column of a 1D or 2D array, removing all duplicates',
        insertText: '_ArrayUnique(${})'
    },
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Array UDF - #include <Array.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items