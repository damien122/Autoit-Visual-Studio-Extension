'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '\$MB_OK',
        documentation: 'One push button: OK',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_OKCANCEL',
        documentation: 'Two push buttons: OK and Cancel',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_ABORTRETRYIGNORE',
        documentation: 'Three push buttons: Abort, Retry, and Ignore',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_YESNOCANCEL',
        documentation: 'Three push buttons: Yes, No, and Cancel',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_YESNO',
        documentation: 'Two push buttons: Yes and No',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_RETRYCANCEL',
        documentation: 'Two push buttons: Retry and Cancel',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_CANCELTRYCONTINUE',
        documentation: 'Three buttons: Cancel, Try Again and Continue',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_HELP',
        documentation: 'Adds a Help button to the message box. When the user clicks the Help button or presses F1, the system sends a WM_HELP message to the owner.',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_ICONERROR',
        documentation: 'Stop-sign icon.',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_ICONQUESTION',
        documentation: 'Question-mark icon',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_ICONWARNING',
        documentation: 'Exclamation-point icon',
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_ICONINFORMATION',
        documentation: "Information-sign icon consisting of an 'i' in a circle",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_DEFBUTTON1',
        documentation: "First button is default button",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_DEFBUTTON2',
        documentation: "Second button is default button",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_DEFBUTTON3',
        documentation: "Third button is default button",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_DEFBUTTON4',
        documentation: "Fourth button is default button",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_APPLMODAL',
        documentation: "Application modal",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_SYSTEMMODAL',
        documentation: "System modal (dialog has an icon)",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_TASKMODAL',
        documentation: "Task modal",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_DEFAULT_DESKTOP_ONLY',
        documentation: "MsgBox() shows on the desktop of the interactive window station.",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_RIGHT',
        documentation: "Title and text are right-justified",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_RTLREADING',
        documentation: "Displays message and caption text using right-to-left reading order on Hebrew and Arabic systems.",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_SETFOREGROUND',
        documentation: "The message box becomes the foreground window.",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_TOPMOST',
        documentation: "MsgBox() has top-most attribute set",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$MB_SERVICE_NOTIFICATION',
        documentation: "The function displays a message box on the current active desktop, even if there is no user logged on to the computer.",
        detail: 'MsgBox Constant Flag Parameter'
    },
    {
        label: '\$IDOK',
        documentation: "OK button was selected",
        detail: 'MsgBox Constant Return Value'
    },
    {
        label: '\$IDCANCEL',
        documentation: "Cancel button was selected",
        detail: 'MsgBox Constant Return Value'
    },
    {
        label: '\$IDABORT',
        documentation: "Abort button was selected",
        detail: 'MsgBox Constant Return Value'
    },
    {
        label: '\$IDRETRY',
        documentation: "Retry button was selected",
        detail: 'MsgBox Constant Return Value'
    },
    {
        label: '\$IDIGNORE',
        documentation: "Ignore button was selected",
        detail: 'MsgBox Constant Return Value'
    },
    {
        label: '\$IDYES',
        documentation: "Yes button was selected",
        detail: 'MsgBox Constant Return Value'
    },
    {
        label: '\$IDNO',
        documentation: "No button was selected",
        detail: 'MsgBox Constant Return Value'
    },
    {
        label: '\$IDCLOSE',
        documentation: "Close button was selected",
        detail: 'MsgBox Constant Return Value'
    },
    {
        label: '\$IDHELP',
        documentation: "Help button was selected",
        detail: 'MsgBox Constant Return Value'
    },
    {
        label: '\$IDTRYAGAIN',
        documentation: "Try Again button was selected",
        detail: 'MsgBox Constant Return Value'
    },
    {
        label: '\$IDTRYCONTINUE',
        documentation: "Continue button was selected",
        detail: 'MsgBox Constant Return Value'
    }
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Variable
    i.documentation += '\n\nRequires #include <MsgBoxConstants.au3>'
}

module.exports = items