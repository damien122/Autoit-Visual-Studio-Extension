'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_Excel_BookAttach',
        documentation: 'Attaches to the first instance of a workbook where the search string matches based on the selected mode',
        insertText: '_Excel_BookAttach(${})'
    },
    {
        label: '_Excel_BookClose',
        documentation: 'Closes the specified workbook',
        insertText: '_Excel_BookClose(${})'
    },
    {
        label: '_Excel_BookList',
        documentation: 'Returns a list of workbooks of a specified or all Excel instances',
        insertText: '_Excel_BookList(${})'
    },
    {
        label: '_Excel_BookNew',
        documentation: 'Creates a new workbook',
        insertText: '_Excel_BookNew(${})'
    },
    {
        label: '_Excel_BookOpen',
        documentation: 'Opens an existing workbook',
        insertText: '_Excel_BookOpen(${})'
    },
    {
        label: '_Excel_BookOpenText',
        documentation: 'Opens a text file and parses the content to a new workbook with a single sheet',
        insertText: '_Excel_BookOpenText(${})'
    },
    {
        label: '_Excel_BookSave',
        documentation: 'Saves the specified workbook',
        insertText: '_Excel_BookSave(${})'
    },
    {
        label: '_Excel_BookSaveAs',
        documentation: 'Saves the specified workbook with a new filename and/or type',
        insertText: '_Excel_BookSaveAs(${})'
    },
    {
        label: '_Excel_Close',
        documentation: 'Closes all worksheets and the instance of the Excel application',
        insertText: '_Excel_Close(${})'
    },
    {
        label: '_Excel_ColumnToLetter',
        documentation: 'Converts the column number to letter(s)',
        insertText: '_Excel_ColumnToLetter(${})'
    },
    {
        label: '_Excel_ColumnToNumber',
        documentation: 'Converts the column letter(s) to a number',
        insertText: '_Excel_ColumnToNumber(${})'
    },
    {
        label: '_Excel_ConvertFormula',
        documentation: 'Converts cell references in a formula between A1 and R1C1 reference styles, relative and absolute reference type, or both',
        insertText: '_Excel_ConvertFormula(${})'
    },
    {
        label: '_Excel_Export',
        documentation: 'Exports a workbook, worksheet, chart or range as PDF or XPS',
        insertText: '_Excel_Export(${})'
    },
    {
        label: '_Excel_FilterGet',
        documentation: 'Returns a list of set filters',
        insertText: '_Excel_FilterGet(${})'
    },
    {
        label: '_Excel_FilterSet',
        documentation: 'Sets/unsets filter definitions and filters the range',
        insertText: '_Excel_FilterSet(${})'
    },
    {
        label: '_Excel_Open',
        documentation: 'Connects to an existing Excel instance or creates a new one',
        insertText: '_Excel_Open(${})'
    },
    {
        label: '_Excel_PictureAdd',
        documentation: 'Adds a picture on the specified workbook and worksheet',
        insertText: '_Excel_PictureAdd(${})'
    },
    {
        label: '_Excel_Print',
        documentation: 'Prints a workbook, worksheet, chart or range',
        insertText: '_Excel_Print(${})'
    },
    {
        label: '_Excel_RangeCopyPaste',
        documentation: 'Cuts or copies one or multiple cells, rows or columns to a range or from/to the clipboard',
        insertText: '_Excel_RangeCopyPaste(${})'
    },
    {
        label: '_Excel_RangeDelete',
        documentation: 'Deletes one or multiple cells, rows or columns from the specified worksheet',
        insertText: '_Excel_RangeDelete(${})'
    },
    {
        label: '_Excel_RangeFind',
        documentation: 'Finds matching cells in a range or workbook and returns an array with information about the found cells',
        insertText: '_Excel_RangeFind(${})'
    },
    {
        label: '_Excel_RangeInsert',
        documentation: 'Inserts one or multiple empty cells, rows or columns into the specified worksheet',
        insertText: '_Excel_RangeInsert(${})'
    },
    {
        label: '_Excel_RangeLinkAddRemove',
        documentation: 'Adds or removes a hyperlink to/from a specified range',
        insertText: '_Excel_RangeLinkAddRemove(${})'
    },
    {
        label: '_Excel_RangeRead',
        documentation: 'Reads the value, formula or displayed text from a cell or range of cells of the specified workbook and worksheet',
        insertText: '_Excel_RangeRead(${})'
    },
    {
        label: '_Excel_RangeReplace',
        documentation: 'Finds and replaces matching strings in a range or worksheet',
        insertText: '_Excel_RangeReplace(${})'
    },
    {
        label: '_Excel_RangeSort',
        documentation: 'Sorts a cell range',
        insertText: '_Excel_RangeSort(${})'
    },
    {
        label: '_Excel_RangeValidate',
        documentation: 'Adds data validation to the specified range',
        insertText: '_Excel_RangeValidate(${})'
    },
    {
        label: '_Excel_RangeWrite',
        documentation: 'Writes value(s) or formula(s) to a cell or a cell range on the specified workbook and worksheet',
        insertText: '_Excel_RangeWrite(${})'
    },
    {
        label: '_Excel_SheetAdd',
        documentation: 'Adds new sheet(s) to a workbook and sets their names',
        insertText: '_Excel_SheetAdd(${})'
    },
    {
        label: '_Excel_SheetCopyMove',
        documentation: 'Copies or moves the specified sheet before or after a specified sheet in the same or a different workbook',
        insertText: '_Excel_SheetCopyMove(${})'
    },
    {
        label: '_Excel_SheetDelete',
        documentation: 'Deletes the specified sheet by object, string name or by number',
        insertText: '_Excel_SheetDelete(${})'
    },
    {
        label: '_Excel_SheetList',
        documentation: 'Returns a list of all sheets in the specified workbook ',
        insertText: '_Excel_SheetList(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Excel UDF - #include <Excel.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items