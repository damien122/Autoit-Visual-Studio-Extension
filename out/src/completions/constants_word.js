var {
    CompletionItemKind,
    MarkdownString
} = require('vscode')

var {
    valHeader,
    setDetail
} = require('../util')

var items = []

let WdBreakType = [
    {
        label: '$WdColumnBreak',
        documentation: `${valHeader}|Column break at the insertion point.|8`,
    }, {
        label: '$WdLineBreak',
        documentation: `${valHeader}|Line break.|6`,
    }, {
        label: '$WdLineBreakClearLeft',
        documentation: `${valHeader}|Line break.|9`,
    }, {
        label: '$WdLineBreakClearRight',
        documentation: `${valHeader}|Line break.|10`,
    }, {
        label: '$WdPageBreak',
        documentation: `${valHeader}|Page break at the insertion point.|7`,
    }, {
        label: '$WdSectionBreakContinuous',
        documentation: `${valHeader}|New section without a corresponding page break.|3`,
    }, {
        label: '$WdSectionBreakEvenPage',
        documentation: `${valHeader}|Section break with the next section beginning on the next even-numbered page. If the section break falls on an even-numbered page, Word leaves the next odd-numbered page blank.|4`,
    }, {
        label: '$WdSectionBreakNextPage',
        documentation: `${valHeader}|Section break on next page.|2`,
    }, {
        label: '$WdSectionBreakOddPage',
        documentation: `${valHeader}|Section break with the next section beginning on the next odd-numbered page. If the section break falls on an odd-numbered page, Word leaves the next even-numbered page blank.|5`,
    }, {
        label: '$WdTextWrappingBreak',
        documentation: `${valHeader}|Ends the current line and forces the text to continue below a picture, table, or other item. The text continues on the next blank line that does not contain a table aligned with the left or right margin.|11`,
    },
]
WdBreakType = setDetail(WdBreakType, 'WdBreakType Enumeration', 'Specifies type of break.')

let MsoDocProperties = [
    {
        label: '$msoPropertyTypeBoolean',
        documentation: `${valHeader}|Boolean value.|2`,
    }, {
        label: '$msoPropertyTypeDate',
        documentation: `${valHeader}|Date value.|3`,
    }, {
        label: '$msoPropertyTypeFloat',
        documentation: `${valHeader}|Floating point value.|5`,
    }, {
        label: '$msoPropertyTypeNumber',
        documentation: `${valHeader}|Integer value.|1`,
    }, {
        label: '$msoPropertyTypeString',
        documentation: `${valHeader}|String value.|4`,
    }, 
]
MsoDocProperties = setDetail(MsoDocProperties, 'MsoDocProperties Enumeration', 'Specifies the data type for a document property.')

let WdCollapseDirection = [
    {
        label: '$WdCollapseEnd',
        documentation: `${valHeader}|Collapse the range to the ending point.|0`,
    }, {
        label: '$WdCollapseStart',
        documentation: `${valHeader}|Collapse the range to the starting point.|1`,
    },
]
WdCollapseDirection = setDetail(WdCollapseDirection, 'WdCollapseDirection Enumeration', 'Specifies the direction in which to collapse a range or selection.')

let WdExportFormat = [
    {
        label: '$WdExportFormatPDF',
        documentation: `${valHeader}|Export document into PDF format.|17`,

    }, {
        label: '$WdExportFormatXPS',
        documentation: `${valHeader}|Export document into XML Paper Specification (XPS) format.|18`,

    },
]
WdExportFormat = setDetail(WdExportFormat, 'WdExportFormat Enumeration', 'Specifies format to use for exporting a document.')

let WdExportRange = [
    {
        label: '$WdExportAllDocument',
        documentation: `${valHeader}|Exports the entire document.|0`,
    }, {
        label: '$WdExportCurrentPage',
        documentation: `${valHeader}|Exports the current page.|2`,
        
    }, {
        label: '$WdExportFromTo',
        documentation: `${valHeader}|Exports the contents of a range using the starting and ending positions.|3`,
    }, {
        label: '$WdExportSelection',
        documentation: `${valHeader}|Exports the contents of the current selection.|1`,
    }, 
]
WdExportRange = setDetail(WdExportRange, 'WdExportRange Enumeration', 'Specifies how much of the document to export.')

let WdFindWrap = [
    {
        label: '$WdFindAsk',
        documentation: `${valHeader} |After searching the selection or range, Microsoft Word displays a message asking whether to search the remainder of the document|2`,
    }, {
        label: '$WdFindContinue',
        documentation: valHeader + '|The find operation continues if the beginning or end of the search range is reached|1',
    }, {
        label: '$WdFindStop',
        documentation: valHeader + '|The find operation ends if the beginning or end of the search range is reached |0 |',
    }
]
WdFindWrap = setDetail(WdFindWrap, 'WdFindWrap Enumeration', 'Specifies wrap behavior if a selection or range is specified for a find operation and the search text isn\'t found in the selection or range.')

let WdNewDocumentType = [{
    label: '$WdNewBlankDocument',
    documentation: `${valHeader}|Blank document.|0`
    }, {
        label: '$WdNewEmailMessage',
        documentation: `${valHeader}|E-mail message.|2`
    }, {
        label: '$WdNewFrameset',
        documentation: `${valHeader}|Frameset.|3`
    }, {
        label: '$WdNewWebPage',
        documentation: `${valHeader}|Web page.|1`
    }, {
        label: '$WdNewXMLDocument',
        documentation: `${valHeader}|XML document.|4`
}]
WdNewDocumentType = setDetail(WdNewDocumentType, 'WdNewDocumentType Enumeration', 'Specifies the type of new document to create.')

let WdOpenFormat = [
    {
        label: '$WdOpenFormatAllWord',
        documentation: `${valHeader}|A Microsoft Office Word format that is backward compatible with earlier versions of Word.|6`
    }, {
        label: '$WdOpenFormatAuto',
        documentation: `${valHeader}|The existing format.|0`
    }, {
        label: '$WdOpenFormatDocument',
        documentation: `${valHeader}|Word format.|1`
    }, {
        label: '$WdOpenFormatEncodedText',
        documentation: `${valHeader}|Encoded text format.|5`
    }, {
        label: '$WdOpenFormatRTF',
        documentation: `${valHeader}|Rich text format (RTF).|3`
    }, {
        label: '$WdOpenFormatTemplate',
        documentation: `${valHeader}|As a Word template.|2`
    }, {
        label: '$WdOpenFormatText',
        documentation: `${valHeader}|Unencoded text format.|4`
    }, {
        label: '$WdOpenFormatUnicodeText',
        documentation: `${valHeader}|Unicode text format.|5`
    }, {
        label: '$WdOpenFormatWebPages',
        documentation: `${valHeader}|HTML format.|7`
    }, {
        label: '$WdOpenFormatXML',
        documentation: `${valHeader}|XML format.|8`
    }, {
        label: '$WdOpenFormatAllWordTemplates',
        documentation: `${valHeader}|Word template format.|13`
    }, {
        label: '$WdOpenFormatDocument97',
        documentation: `${valHeader}|Microsoft Word 97 document format.|1`
    }, {
        label: '$WdOpenFormatTemplate97',
        documentation: `${valHeader}|Word 97 template format.|1`
    }, {
        label: '$WdOpenFormatXMLDocument',
        documentation: `${valHeader}|XML document format.|9`
    }, {
        label: '$WdOpenFormatXMLDocumentMacroEnabled',
        documentation: `${valHeader}|XML document format with macros enabled.|10`
    }, {
        label: '$WdOpenFormatXMLTemplate',
        documentation: `${valHeader}|XML template format.|11`
    }, {
        label: '$WdOpenFormatXMLTemplateMacroEnabled',
        documentation: `${valHeader}|XML template format with macros enabled.|12`
    }
]
WdOpenFormat = setDetail(WdOpenFormat, 'WdOpenFormat Enumeration', 'Specifies the format to use when opening a document.')

let WdOrientation = [
    {
        label: '$WdOrientLandscape',
        documentation: `${valHeader}|Landscape orientation|1`
    }, {
        label: '$WdOrientPortrait',
        documentation: `${valHeader}|Portrait orientation.|0`
    }
]
WdOrientation = setDetail(WdOrientation, 'WdOrientation Enumeration', 'Specifies a page layout orientation.')

let WdOriginalFormat = [
    {
        label: '$WdOriginalDocumentFormat',
        documentation: `${valHeader}|Original document format.|1`
    }, {
        label: '$WdPromptUser',
        documentation: `${valHeader}|Prompt user to select a document format.|2`
    }, {
        label: '$WdWordDocument',
        documentation: `${valHeader}|Microsoft Word document format.|0`
    }
]
WdOriginalFormat = setDetail(WdOriginalFormat, 'WdOriginalFormat Enumeration', 'Specifies the document format. This enumeration is commonly used when saving a document.')

let WdPrintOutItem = [
    { label: '$WdPrintAutoTextEntries', documentation: `${valHeader}|Autotext entries in the current document.|4 ` },
    { label: '$WdPrintComments', documentation: `${valHeader}|Comments in the current document.|2 ` },
    { label: '$WdPrintDocumentContent', documentation: `${valHeader}|Current document content.|0 ` },
    { label: '$WdPrintDocumentWithMarkup', documentation: `${valHeader}|Current document content including markup.|7 ` },
    { label: '$WdPrintEnvelope', documentation: `${valHeader}|An envelope.|6 ` },
    { label: '$WdPrintKeyAssignments', documentation: `${valHeader}|Key assignments in the current document.|5 ` },
    { label: '$WdPrintMarkup', documentation: `${valHeader}|Markup in the current document.|2 ` },
    { label: '$WdPrintProperties', documentation: `${valHeader}|Properties in the current document.|1 ` },
    { label: '$WdPrintStyles', documentation: `${valHeader}|Styles in the current document.|3 ` },
]
WdPrintOutItem = setDetail(WdPrintOutItem, 'WdPrintOutItem Enumeration', 'Specifies the item to print.')

let WdPrintOutPages = [
    { label: '$WdPrintAllPages', documentation: `${valHeader}|All pages.|0` },
    { label: '$WdPrintEvenPagesOnly', documentation: `${valHeader}|Even-numbered pages only.|2` },
    { label: '$WdPrintOddPagesOnly', documentation: `${valHeader}|Odd-numbered pages only.|1` },
]
WdPrintOutPages = setDetail(WdPrintOutPages, 'WdPrintOutPages Enumeration', 'Specifies the type of pages to print.')

let WdPrintOutRange = [
    { label: '$WdPrintAllDocument', documentation: `${valHeader}|The entire document.|0` },
    { label: '$WdPrintCurrentPage', documentation: `${valHeader}|The current page.|2` },
    { label: '$WdPrintFromTo', documentation: `${valHeader}|A specified range.|3` },
    { label: '$WdPrintRangeOfPages', documentation: `${valHeader}|A specified range of pages.|4` },
    { label: '$WdPrintSelection', documentation: `${valHeader}|The current selection.|1` },
]
WdPrintOutRange = setDetail(WdPrintOutRange, 'WdPrintOutRange Enumeration', 'Specifies a range to print.')

let WdSaveFormat = [
    { label: '$WdFormatDocument', documentation: `${valHeader}|Microsoft Office Word format.|0` },
    { label: '$WdFormatDOSText', documentation: `${valHeader}|Microsoft DOS text format.|4` },
    { label: '$WdFormatDOSTextLineBreaks', documentation: `${valHeader}|Microsoft DOS text with line breaks preserved.|5` },
    { label: '$WdFormatEncodedText', documentation: `${valHeader}|Encoded text format.|7` },
    { label: '$WdFormatFilteredHTML', documentation: `${valHeader}|Filtered HTML format.|10` },
    { label: '$WdFormatHTML', documentation: `${valHeader}|Standard HTML format.|8` },
    { label: '$WdFormatRTF', documentation: `${valHeader}|Rich text format (RTF).|6` },
    { label: '$WdFormatTemplate', documentation: `${valHeader}|Word template format.|1` },
    { label: '$WdFormatText', documentation: `${valHeader}|Microsoft Windows text format.|2` },
    { label: '$WdFormatTextLineBreaks', documentation: `${valHeader}|Windows text format with line breaks preserved.|3` },
    { label: '$WdFormatUnicodeText', documentation: `${valHeader}|Unicode text format.|7` },
    { label: '$WdFormatWebArchive', documentation: `${valHeader}|Web archive format.|9` },
    { label: '$WdFormatXML', documentation: `${valHeader}|Extensible Markup Language (XML) format.|11` },
    { label: '$WdFormatDocument97', documentation: `${valHeader}|Microsoft Word 97 document format.|0` },
    { label: '$WdFormatDocumentDefault', documentation: `${valHeader}|Word default document file format. For Microsoft Office Word 2007, this is the DOCX format.|16` },
    { label: '$WdFormatPDF', documentation: `${valHeader}|PDF format.|17` },
    { label: '$WdFormatTemplate97', documentation: `${valHeader}|Word 97 template format.|1` },
    { label: '$WdFormatXMLDocument', documentation: `${valHeader}|XML document format.|12` },
    { label: '$WdFormatXMLDocumentMacroEnabled', documentation: `${valHeader}|XML document format with macros enabled.|13` },
    { label: '$WdFormatXMLTemplate', documentation: `${valHeader}|XML template format.|14` },
    { label: '$WdFormatXMLTemplateMacroEnabled', documentation: `${valHeader}|XML template format with macros enabled.|15` },
    { label: '$WdFormatXPS', documentation: `${valHeader}|XPS format.|18` },
]
WdSaveFormat = setDetail(WdSaveFormat, 'WdSaveFormat Enumeration', 'Specifies the format to use when saving a document.')

let WdSaveOptions = [
    { label: '$WdDoNotSaveChanges', documentation: `${valHeader}|Do not save pending changes.|0` },
    { label: '$WdPromptToSaveChanges', documentation: `${valHeader}|Prompt the user to save pending changes.|-2` },
    { label: '$WdSaveChanges', documentation: `${valHeader}|Save pending changes automatically without prompting the user.|-1` },
]
WdSaveOptions = setDetail(WdSaveOptions, 'WdSaveOptions Enumeration', 'Specifies how pending changes should be handled.')

let WdUnits = [
    { label: '$WdCell', documentation: `${valHeader}|A cell.|12` },
    { label: '$WdCharacter', documentation: `${valHeader}|A character.|1` },
    { label: '$WdCharacterFormatting', documentation: `${valHeader}|Character formatting.|13` },
    { label: '$WdColumn', documentation: `${valHeader}|A column.|9` },
    { label: '$WdItem', documentation: `${valHeader}|The selected item.|16` },
    { label: '$WdLine', documentation: `${valHeader}|A line.|5` },
    { label: '$WdParagraph', documentation: `${valHeader}|A paragraph.|4` },
    { label: '$WdParagraphFormatting', documentation: `${valHeader}|Paragraph formatting.|14` },
    { label: '$WdRow', documentation: `${valHeader}|A row.|10` },
    { label: '$WdScreen', documentation: `${valHeader}|The screen dimensions.|7` },
    { label: '$WdSection', documentation: `${valHeader}|A section.|8` },
    { label: '$WdSentence', documentation: `${valHeader}|A sentence.|3` },
    { label: '$WdStory', documentation: `${valHeader}|A story.|6` },
    { label: '$WdTable', documentation: `${valHeader}|A table.|15` },
    { label: '$WdWindow', documentation: `${valHeader}|A window.|11` },
    { label: '$WdWord', documentation: `${valHeader}|A word.|2` },
]
WdUnits = setDetail(WdUnits, 'WdUnits Enumeration', 'Specifies a unit of measure to use.')

items = items.concat(WdExportRange, WdFindWrap, WdNewDocumentType, WdOpenFormat, WdOrientation, 
    WdOriginalFormat, WdPrintOutItem, WdPrintOutPages, WdPrintOutRange, WdSaveFormat, WdSaveOptions, 
    WdUnits, WdExportFormat, WdCollapseDirection, MsoDocProperties, WdBreakType)

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Enumeration
    i.documentation += '\n\nRequires #include <WordConstants.au3>'
    i.documentation = new MarkdownString(i.documentation)
}

module.exports = items