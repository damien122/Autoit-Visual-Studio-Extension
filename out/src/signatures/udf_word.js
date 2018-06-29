const opt = require('../util').optTag
const header = require('../util').valueFirstHeader
const tfHeader = require('../util').trueFalseHader
const include = '(Requires: `#include <Word.au3>`)'

const signatures = {
    "_Word_DocLinkAdd": {
        "documentation": `Adds a hyperlink to the document ${include}`,
        "label": "_Word_DocLinkAdd ( $oDoc, [$oAnchor], [$sAddress], [$sSubAddress], [$sScreenTip], [$sTextToDisplay], [$sTarget] )",
        "params": [{
            "label": "$oDoc",
            "documentation": "Word document object"
        }, {
            "label": "[$oAnchor]",
            "documentation": `${opt} Range object for the text or graphic to be turned into a hyperlink\u0020\u0020
                (default = Use entire document as range)`
        }, {
            "label": "[$sAddress]",
            "documentation": `${opt} The address for the specified link.\u0020\u0020
                The address can be an E-mail address, an Internet address or a file name (default = link to the specified document is used)`
        }, {
            "label": "[$sSubAddress]",
            "documentation": `${opt} The name of a location within the destination file, such as a bookmark, named range or slide number (default = None)`
        }, {
            "label": "[$sScreenTip]",
            "documentation": `${opt} The text that appears as a ScreenTip when the mouse pointer is positioned over the specified hyperlink (default = Uses value of \`$sAddress\`)`
        }, {
            "label": "[$sTextToDisplay]",
            "documentation": `${opt} The display text of the specified hyperlink.\u0020\u0020
                The value of this argument replaces the text or graphic specified by \`$oAnchor\` (default = Uses value of \`$sAddress\`)`
        }, {
            "label": "[$sTarget]",
            "documentation": `${opt} The name of the frame or window in which you want to load the specified hyperlink`
        }]
    },
    "_Word_DocLinkGet": {
        "documentation": `Returns a collection object containing all links in the document or a single link object ${include}`,
        "label": "_Word_DocLinkGet ( $oDoc , [$iIndex] )",
        "params": [{
            "label": "$oDoc",
            "documentation": "Word document object"
        }, {
            "label": "[$iIndex]",
            "documentation": `${opt} Specifies what to return:
                ${tfHeader}
                \`Default\` |-| Returns a collection of all links (default)    
                |n |-| The index number of the link to return (1 based)`
        }]
    },
    "_Word_DocOpen": {
        "documentation": `Opens a Word document ${include}`,
        "label": "_Word_DocOpen ( $oAppl, $sFilePath , [$bConfirmConversions], [$iFormat], [$bReadOnly], [$bRevert], [$bAddToRecentFiles], [$sOpenPassword], [$sWritePassword] )",
        "params": [{
            "label": "$oAppl",
            "documentation": "Word object returned by a preceding call to `_Word_Create()`"
        }, {
            "label": "$sFilePath",
            "documentation": "The name or full path of the document to open"
        }, {
            "label": "[$bConfirmConversions]",
            "documentation": `${opt} \`True\` displays the Convert File dialog if the file isn't in Word format (\`Default = False\`)`
        }, {
            "label": "[$iFormat]",
            "documentation": `${opt} Specifies the format to use when opening the document.\u0020\u0020
                Can be any of the WdOpenFormat enumeration (\`Default = $WdOpenFormatAuto\` = the existing format)`
        }, {
            "label": "[$bReadOnly]",
            "documentation": `${opt} \`True\` to open the document as read-only (\`Default = False\`).\u0020\u0020
                Note: This argument doesn't override the read-only recommended setting on a saved document.`
        }, {
            "label": "[$bRevert]",
            "documentation": `${opt} Controls what happens if \`$sFilePath\` is the name of an open document.\u0020\u0020
                \`True\` to discard any unsaved changes to the open document and reopen the file.\u0020\u0020
                \`False\` to activate the open document (\`Default = False\`)`
        }, {
            "label": "[$bAddToRecentFiles]",
            "documentation": `${opt} \`True\` adds the file name to the list of recently used files at the bottom of the File menu (\`Default = False\`)`
        }, {
            "label": "[$sOpenPassword]",
            "documentation": `${opt} The password for opening the document`
        }, {
            "label": "[$sWritePassword]",
            "documentation": `${opt} The password for saving changes to the document`
        }]
    },
    "_Word_DocPictureAdd": {
        "documentation": `Adds a picture to the document ${include}`,
        "label": "_Word_DocPictureAdd ( $oDoc, $sFilePath, [$bLinkToFile], [$bSaveWithDocument], [$oRange] )",
        "params": [{
            "label": "$oDoc",
            "documentation": "Word document object"
        }, {
            "label": "$sFilePath",
            "documentation": "The path and file name of the picture"
        }, {
            "label": "[$bLinkToFile]",
            "documentation": `${opt} Specifies whether to link the picture to the file from which it was created.\u0020\u0020
                ${tfHeader}
                \`True\`|-|Link the picture to the file from which it was created
                \`False\`|-|Make the picture an independent copy of the file (default)`
        }, {
            "label": "[$bSaveWithDocument]",
            "documentation": `${opt} Specifies whether to save the linked picture with the document.
                ${tfHeader}
                \`True\`|-|Save the linked picture with the document
                \`False\`|-|Do not save the linked picture with the document (default)`
        }, {
            "label": "[$oRange]",
            "documentation": `${opt} The location where the picture will be placed in the text.\u0020\u0020
                Can be \`0\` (the picture is placed automatically) or any range object (\`Default = 0\`)`
        }]
    },
    "_Word_DocPrint": {
        "documentation": `Prints all or parts of the specified document ${include}`,
        "label": "_Word_DocPrint ( $oDoc, [$bBackground], [$iCopies], [$iOrientation], [$bCollate], [$sPrinter], [$iRange], [$vFrom], [$vTo], [$sPages], [$iPageType], [$iItem] )",
        "params": [{
            "label": "$oDoc",
            "documentation": "Word document object"
        }, {
            "label": "[$bBackground]",
            "documentation": `${opt} \`True\` lets the script continue while the document is printed (\`Default = False\`)`
        }, {
            "label": "[$iCopies]",
            "documentation": `${opt} The number of copies to be printed (\`Default = 1\`)`
        }, {
            "label": "[$iOrientation]",
            "documentation": `${opt} Sets the orientation of the page:
                ${header}
                \`-1\`|-|Use current document orientation (\`Default\`)
                \`0\`|-|Portrait (\`$WdOrientPortrait\` of the WdOrientation enumeration) 
                \`1\`|-|Landscape (\`$WdOrientLandscape\` of the WdOrientation enumeration)`
        }, {
            "label": "[$bCollate]",
            "documentation": `${opt} \`True\` prints all pages of the document before printing the next copy (\`Default = True\`)`
        }, {
            "label": "[$sPrinter]",
            "documentation": `${opt} Sets the name of the printer (\`Default = ""\`&nbsp;=&nbsp;Active printer)`
        }, {
            "label": "[$iRange]",
            "documentation": `${opt} Specifies the page range to print.\u0020\u0020
                Can be any of the WdPrintOutRange enumeration.\u0020\u0020
                (\`Default = $WdPrintAllDocument\`&nbsp;=&nbsp;print the entire document)`
        }, {
            "label": "[$vFrom]",
            "documentation": `${opt} The starting page number (integer) when \`$iRange\` is set to \`$WdPrintFromTo\``
        }, {
            "label": "[$vTo]",
            "documentation": `${opt} The ending page number (integer) when \`$iRange\` is set to \`$WdPrintFromTo\``
        }, {
            "label": "[$sPages]",
            "documentation": `${opt} The page numbers and page ranges to be printed, separated by commas when \`$iRange\` is set to \`4\`.\u0020\u0020
                For example, \`"2, 6-10"\` prints page 2 and pages 6 through 10 (\`Default = ""\`)`
        }, {
            "label": "[$iPageType]",
            "documentation": `${opt} The type of pages to be printed. Can be any of the WdPrintOutPages enumeration\u0020\u0020
                (\`Default = $WdPrintAllPages\` = print all pages)`
        }, {
            "label": "[$iItem]",
            "documentation": `${opt} The item to be printed. Can be any of the WdPrintOutItem enumeration\u0020\u0020
                (\`Default = $WdPrintDocumentContent\` = document content)`
        }]
    },
    "_Word_DocRangeSet": {
        "documentation": `Sets or modifies a range in a document ${include}`,
        "label": "_Word_DocRangeSet ( $oDoc, $vRange, [$iStartUnit], [$iStartCount], [$iEndUnit], [$iEndCount] )",
        "params": [{
            "label": "$oDoc",
            "documentation": "Word document object"
        }, {
            "label": "$vRange",
            "documentation": `Range to set or extend. You can pass an existing range which then is extended. Also valid is: 
                ${header}
                |\`0\`|-|uses the current selection as range
                |\`-1\`|-|sets the range start/end at the start of the document
                |\`-2\`|-|sets the range start/end at the end of the document`
        }, {
            "label": "[$iStartUnit]",
            "documentation": `${opt} Unit by/to which the start position of the range is to be moved/set.\u0020\u0020
                Can be any of the WdUnit enumeration (\`Default = $WdWord\`).\u0020\u0020
                When set to \`-1\` the range is collapsed to the start of the range`
        }, {
            "label": "[$iStartCount]",
            "documentation": `${opt} Number of units by/to which the start of range is moved/set.\u0020\u0020
                Positive numbers move the range forward in the document.\u0020\u0020
                If the position is moved forward to a position beyond the end position of the range, the range is collapsed and both the start and end positions are moved together (default = don't move the start position)`
        }, {
            "label": "[$iEndUnit]",
            "documentation": `${opt} Unit by/to which the end position of the range is to be moved/set.\u0020\u0020
                Can be any of the WdUnit enumeration (\`Default = $WdWord\`).\u0020\u0020
                When set to \`-1\` the range is collapsed to the end of the range`
        }, {
            "label": "[$iEndCount]",
            "documentation": `${opt} Number of units by/to which the end of the range is moved/set.\u0020\u0020
                If this number is negative, the end is moved backward.\u0020\u0020
                If the ending position overtakes the starting position, the range collapses and both positions move together (default = don't move the end position)`
        }]
    },
    "_Word_DocSave": {
        "documentation": `Saves the specified Word document ${include}`,
        "label": "_Word_DocSave ( $oDoc )",
        "params": [{
            "label": "$oDoc",
            "documentation": "Word document object"
        }]
    },
    "_Word_DocSaveAs": {
        "documentation": `Saves the specified Word document with a new name or format ${include}`,
        "label": "_Word_DocSaveAs ( $oDoc, [$sFileName], [$iFileFormat], [$bReadOnlyRecommended], [$bAddToRecentFiles], [$sPassword], [$sWritePassword] )",
        "params": [{
            "label": "$oDoc",
            "documentation": "Word document object"
        }, {
            "label": "[$sFileName]",
            "documentation": `${opt} The full path name for the document (default = Current folder and current file name).\u0020\u0020
                If the document has never been saved, the default name is used (for example, Doc1.doc)`
        }, {
            "label": "[$iFileFormat]",
            "documentation": `${opt} The format in which the document is saved.\u0020\u0020
                Can be any WdSaveFormat constant (default = \`$WdFormatDocument\`)`
        }, {
            "label": "[$bReadOnlyRecommended]",
            "documentation": `${opt} True to have Word suggest read-only status whenever the document is opened (default = \`False\`)`
        }, {
            "label": "[$bAddToRecentFiles]",
            "documentation": `${opt} True to add the document to the list of recently used files (default = \`True\`)`
        }, {
            "label": "[$sPassword]",
            "documentation": `${opt} A password string for opening the document (default = "")`
        }, {
            "label": "[$sWritePassword]",
            "documentation": `${opt} A password string for saving changes to the document (default = "")`
        }]
    },
    "_Word_DocTableRead": {
        "documentation": `Reads a Word table and returns the content as a two-dimensional array ${include}`,
        "label": "_Word_DocTableRead ( $oDoc, $vTable [, $iIndexBase [, $sDelimiter]] )",
        "params": [{
            "label": "$oDoc",
            "documentation": "Word document object"
        }, {
            "label": "$vTable",
            "documentation": "Table object or index of the table in the table collection"
        }, {
            "label": "$iIndexBase",
            "documentation": `${opt} Can be 0 or 1 and specifies if the array starts with row 0 or 1 (default = 1)`
        }, {
            "label": "$sDelimiter",
            "documentation": `${opt} Specifies the character used to separate text into cells (default = \`@TAB\`)`
        }]
    },
    "_Word_DocTableWrite": {
        "documentation": `Writes a one or two dimensional array to a Word table ${include}`,
        "label": "_Word_DocTableWrite ( $oRange, ByRef $aArray [, $iIndexBase [, $sDelimiter]] )",
        "params": [{
            "label": "$oRange",
            "documentation": "Word range object where the table should be inserted"
        }, {
            "label": "$aArray",
            "documentation": `one or two-dimensional array to be converted to a table.  
                Can be zero or 1-based`
        }, {
            "label": "$iIndexBase",
            "documentation": `${opt} Can be 0 or 1 and specifies if the array starts with row 0 or 1 (default = 1)`
        }, {
            "label": "$sDelimiter",
            "documentation": `${opt} Specifies the character used to separate text into cells (default = \`@TAB\`)`
        }]
    },
    "_Word_Quit": {
        "documentation": `Closes all documents, the Word application and removes the object reference to it ${include}`,
        "label": "_Word_Quit ( $oAppl [, $iSaveChanges [, $iOriginalFormat [, $bForceClose]] )",
        "params": [{
            "label": "$oAppl",
            "documentation": "Word object returned by a preceding call to `_Word_Create()`"
        }, {
            "label": "$iSaveChanges",
            "documentation": `${opt} Specifies if changed documents should be saved before closing.  
                Can be one of the WdSaveOptions enumeration (default = \`$WdDoNotSaveChanges\`)`
        }, {
            "label": "$iOriginalFormat",
            "documentation": `${opt} Specifies how Word saves documents whose original format was not Word document format.  
                Can be any of the WdOriginalFormat enumeration (default = \`$WdWordDocument\`)`
        }, {
            "label": "$bForceClose",
            "documentation": `${opt} If True the Word application is closed even when it was running at \`_Word_Create()\` time (default = \`False\`)`
        }]
    },
}

module.exports = signatures