'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_IE_Example',
        documentation: 'Display a new browser window pre-loaded with documents to be used in IE.au3 examples or your own testing',
        insertText: '_IE_Example(${})'
    },
    {
        label: '_IE_Introduction',
        documentation: 'Display introductory information about IE.au3 in a new browser window',
        insertText: '_IE_Introduction(${})'
    },
    {
        label: '_IE_VersionInfo',
        documentation: 'Returns an array of information about the IE.au3 version',
        insertText: '_IE_VersionInfo(${})'
    },
    {
        label: '_IEAction',
        documentation: 'Perform any of a set of simple actions on the Browser',
        insertText: '_IEAction(${})'
    },
    {
        label: '_IEAttach',
        documentation: 'Attach to the specified instance of Internet Explorer where the search string sub-string matches (based on the selected mode)',
        insertText: '_IEAttach(${})'
    },
    {
        label: '_IEBodyReadHTML',
        documentation: 'Returns the HTML inside the <body> tag of the document',
        insertText: '_IEBodyReadHTML(${})'
    },
    {
        label: '_IEBodyReadText',
        documentation: 'Returns the Text inside the <body> tag of the document',
        insertText: '_IEBodyReadText(${})'
    },
    {
        label: '_IEBodyWriteHTML',
        documentation: 'Replaces the HTML inside the <body> tag of the document',
        insertText: '_IEBodyWriteHTML(${})'
    },
    {
        label: '_IECreate',
        documentation: 'Create an Internet Explorer Browser Window',
        insertText: '_IECreate(${})'
    },
    {
        label: '_IECreateEmbedded',
        documentation: 'Create a Webbrowser object suitable for embedding in an AutoIt GUI with GUICtrlCreateObj()',
        insertText: '_IECreateEmbedded(${})'
    },
    {
        label: '_IEDocGetObj',
        documentation: 'Given any DOM object, returns a reference to the associated document object',
        insertText: '_IEDocGetObj(${})'
    },
    {
        label: '_IEDocInsertHTML',
        documentation: 'Inserts HTML Text in or around an element',
        insertText: '_IEDocInsertHTML(${})'
    },
    {
        label: '_IEDocInsertText',
        documentation: 'Inserts Text in or around an element',
        insertText: '_IEDocInsertText(${})'
    },
    {
        label: '_IEDocReadHTML',
        documentation: 'Returns the full HTML source of a document',
        insertText: '_IEDocReadHTML(${})'
    },
    {
        label: '_IEDocWriteHTML',
        documentation: 'Replaces the HTML for the entire document',
        insertText: '_IEDocWriteHTML(${})'
    },
    {
        label: '_IEErrorNotify',
        documentation: 'Specifies whether IE.au3 automatically notifies of Warnings and Errors (to the console)',
        insertText: '_IEErrorNotify(${})'
    },
    {
        label: '_IEFormElementCheckBoxSelect',
        documentation: 'Set the value of a specified form element',
        insertText: '_IEFormElementCheckBoxSelect(${})'
    },
    {
        label: '_IEFormElementGetCollection',
        documentation: 'Returns a collection object variable representing all Form Elements within a given Form',
        insertText: '_IEFormElementGetCollection(${})'
    },
    {
        label: '_IEFormElementGetObjByName',
        documentation: 'Returns an object reference to a Form Element by name',
        insertText: '_IEFormElementGetObjByName(${})'
    },
    {
        label: '_IEFormElementGetValue',
        documentation: 'Returns the value of a given Form Element',
        insertText: '_IEFormElementGetValue(${})'
    },
    {
        label: '_IEFormElementOptionSelect',
        documentation: 'Set the value of a specified form element',
        insertText: '_IEFormElementOptionSelect(${})'
    },
    {
        label: '_IEFormElementRadioSelect',
        documentation: 'Set the value of a specified form element',
        insertText: '_IEFormElementRadioSelect(${})'
    },
    {
        label: '_IEFormElementSetValue',
        documentation: 'Set the value of a specified Form Element',
        insertText: '_IEFormElementSetValue(${})'
    },
    {
        label: '_IEFormGetCollection',
        documentation: 'Returns a collection object variable representing the Forms in the document or a single form by index',
        insertText: '_IEFormGetCollection(${})'
    },
    {
        label: '_IEFormGetObjByName',
        documentation: 'Returns an object reference to a Form by name',
        insertText: '_IEFormGetObjByName(${})'
    },
    {
        label: '_IEFormImageClick',
        documentation: 'Simulate a mouse click on an <input type=image>. Match by sub-string match of alt text, name or src',
        insertText: '_IEFormImageClick(${})'
    },
    {
        label: '_IEFormReset',
        documentation: 'Reset a specified Form setting the values back to their loaded defaults',
        insertText: '_IEFormReset(${})'
    },
    {
        label: '_IEFormSubmit',
        documentation: 'Submit a specified Form',
        insertText: '_IEFormSubmit(${})'
    },
    {
        label: '_IEFrameGetCollection',
        documentation: 'Returns a collection object containing the frames in a FrameSet or the iFrames on a normal page or a single Frame or iFrame by index',
        insertText: '_IEFrameGetCollection(${})'
    },
    {
        label: '_IEFrameGetObjByName',
        documentation: 'Returns an object reference to a Frame or iFrame by name',
        insertText: '_IEFrameGetObjByName(${})'
    },
    {
        label: '_IEGetObjById',
        documentation: 'Returns an object variable by id',
        insertText: '_IEGetObjById(${})'
    },
    {
        label: '_IEGetObjByName',
        documentation: 'Returns an object variable by name',
        insertText: '_IEGetObjByName(${})'
    },
    {
        label: '_IEHeadInsertEventScript',
        documentation: 'Inserts a Javascript into the Head of the document',
        insertText: '_IEHeadInsertEventScript(${})'
    },
    {
        label: '_IEImgClick',
        documentation: 'Simulate a mouse click on an image. Match by sub-string match of alt text, name, or src',
        insertText: '_IEImgClick(${})'
    },
    {
        label: '_IEImgGetCollection',
        documentation: 'Returns a collection object variable representing the IMG tags in the document or a single image by index',
        insertText: '_IEImgGetCollection(${})'
    },
    {
        label: '_IEIsFrameSet',
        documentation: 'Checks to see if the specified Window contains a FrameSet',
        insertText: '_IEIsFrameSet(${})'
    },
    {
        label: '_IELinkClickByIndex',
        documentation: 'Simulate a mouse click on a link by 0-based index (in source order)',
        insertText: '_IELinkClickByIndex(${})'
    },
    {
        label: '_IELinkClickByText',
        documentation: 'Simulate a mouse click on a link with text sub-string matching the string provided',
        insertText: '_IELinkClickByText(${})'
    },
    {
        label: '_IELinkGetCollection',
        documentation: 'Returns a collection object containing all links in the document or a single link by index',
        insertText: '_IELinkGetCollection(${})'
    },
    {
        label: '_IELoadWait',
        documentation: 'Wait for a browser page load to complete before returning',
        insertText: '_IELoadWait(${})'
    },
    {
        label: '_IELoadWaitTimeout',
        documentation: 'Retrieve or set the current value in milliseconds _IELoadWait() will try before timing out',
        insertText: '_IELoadWaitTimeout(${})'
    },
    {
        label: '_IENavigate',
        documentation: 'Directs an existing browser window to navigate to the specified URL',
        insertText: '_IENavigate(${})'
    },
    {
        label: '_IEPropertyGet',
        documentation: 'Returns a select property of the Browser or DOM element',
        insertText: '_IEPropertyGet(${})'
    },
    {
        label: '_IEPropertySet',
        documentation: 'Set a select property of the Browser or DOM element',
        insertText: '_IEPropertySet(${})'
    },
    {
        label: '_IEQuit',
        documentation: 'Close the browser and remove the object reference to it',
        insertText: '_IEQuit(${})'
    },
    {
        label: '_IETableGetCollection',
        documentation: 'Returns a collection object variable representing all the tables in a document or a single table by index',
        insertText: '_IETableGetCollection(${})'
    },
    {
        label: '_IETableWriteToArray',
        documentation: 'Reads the contents of a Table into an array',
        insertText: '_IETableWriteToArray(${})'
    },
    {
        label: '_IETagNameAllGetCollection',
        documentation: 'Returns a collection object all elements in the document or document hierarchy in source order or a single element by index',
        insertText: '_IETagNameAllGetCollection(${})'
    },
    {
        label: '_IETagNameGetCollection',
        documentation: 'Returns a collection object of all elements in the object with the specified TagName or a single element by index ',
        insertText: '_IETagNameGetCollection(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <IE.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items