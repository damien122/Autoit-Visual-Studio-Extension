'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_Excel_BookAttach',
        documentation: 'Attaches to the first instance of a workbook where the search string matches based on the selected mode'
    },
    {
        label: '_Excel_BookClose',
        documentation: 'Closes the specified workbook'
    },
    {
        label: '_Excel_BookList',
        documentation: 'Returns a list of workbooks of a specified or all Excel instances'
    },
    {
        label: '_Excel_BookNew',
        documentation: 'Creates a new workbook'
    },
    {
        label: '_Excel_BookOpen',
        documentation: 'Opens an existing workbook'
    },
    {
        label: '_Excel_BookOpenText',
        documentation: 'Opens a text file and parses the content to a new workbook with a single sheet'
    },
    {
        label: '_Excel_BookSave',
        documentation: 'Saves the specified workbook'
    },
    {
        label: '_Excel_BookSaveAs',
        documentation: 'Saves the specified workbook with a new filename and/or type'
    },
    {
        label: '_Excel_Close',
        documentation: 'Closes all worksheets and the instance of the Excel application'
    },
    {
        label: '_Excel_ColumnToLetter',
        documentation: 'Converts the column number to letter(s)'
    },
    {
        label: '_Excel_ColumnToNumber',
        documentation: 'Converts the column letter(s) to a number'
    },
    {
        label: '_Excel_ConvertFormula',
        documentation: 'Converts cell references in a formula between A1 and R1C1 reference styles, relative and absolute reference type, or both'
    },
    {
        label: '_Excel_Export',
        documentation: 'Exports a workbook, worksheet, chart or range as PDF or XPS'
    },
    {
        label: '_Excel_FilterGet',
        documentation: 'Returns a list of set filters'
    },
    {
        label: '_Excel_FilterSet',
        documentation: 'Sets/unsets filter definitions and filters the range'
    },
    {
        label: '_Excel_Open',
        documentation: 'Connects to an existing Excel instance or creates a new one'
    },
    {
        label: '_Excel_PictureAdd',
        documentation: 'Adds a picture on the specified workbook and worksheet'
    },
    {
        label: '_Excel_Print',
        documentation: 'Prints a workbook, worksheet, chart or range'
    },
    {
        label: '_Excel_RangeCopyPaste',
        documentation: 'Cuts or copies one or multiple cells, rows or columns to a range or from/to the clipboard'
    },
    {
        label: '_Excel_RangeDelete',
        documentation: 'Deletes one or multiple cells, rows or columns from the specified worksheet'
    },
    {
        label: '_Excel_RangeFind',
        documentation: 'Finds matching cells in a range or workbook and returns an array with information about the found cells'
    },
    {
        label: '_Excel_RangeInsert',
        documentation: 'Inserts one or multiple empty cells, rows or columns into the specified worksheet'
    },
    {
        label: '_Excel_RangeLinkAddRemove',
        documentation: 'Adds or removes a hyperlink to/from a specified range'
    },
    {
        label: '_Excel_RangeRead',
        documentation: 'Reads the value, formula or displayed text from a cell or range of cells of the specified workbook and worksheet'
    },
    {
        label: '_Excel_RangeReplace',
        documentation: 'Finds and replaces matching strings in a range or worksheet'
    },
    {
        label: '_Excel_RangeSort',
        documentation: 'Sorts a cell range'
    },
    {
        label: '_Excel_RangeValidate',
        documentation: 'Adds data validation to the specified range'
    },
    {
        label: '_Excel_RangeWrite',
        documentation: 'Writes value(s) or formula(s) to a cell or a cell range on the specified workbook and worksheet'
    },
    {
        label: '_Excel_SheetAdd',
        documentation: 'Adds new sheet(s) to a workbook and sets their names'
    },
    {
        label: '_Excel_SheetCopyMove',
        documentation: 'Copies or moves the specified sheet before or after a specified sheet in the same or a different workbook'
    },
    {
        label: '_Excel_SheetDelete',
        documentation: 'Deletes the specified sheet by object, string name or by number'
    },
    {
        label: '_Excel_SheetList',
        documentation: 'Returns a list of all sheets in the specified workbook '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Excel UDF - #include <Excel.au3>'
}

module.exports = items