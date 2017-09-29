var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '$WS_BORDER',
        documentation: 'Creates a window that has a thin-line border.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_POPUP',
        documentation: 'Creates a pop-up window. This style cannot be used with the WS_CHILD style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_CAPTION',
        documentation: 'Creates a window that has a title bar (includes the WS_BORDER style)',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_CLIPCHILDREN',
        documentation: 'Excludes the area occupied by child windows when drawing occurs within the parent window. This style is used when creating the parent window.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_CLIPSIBLINGS',
        documentation: 'Clips child windows relative to each other; that is, when a particular child window receives a WM_PAINT message, the WS_CLIPSIBLINGS style clips all other overlapping child windows out of the region of the child window to be updated. If WS_CLIPSIBLINGS is not specified and child windows overlap, it is possible, when drawing within the client area of a child window, to draw within the client area of a neighboring child window.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_DISABLED',
        documentation: 'Creates a window that is initially disabled.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_DLGFRAME',
        documentation: 'Creates a window that has a border of a style typically used with dialog boxes.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_HSCROLL',
        documentation: 'Creates a window that has a horizontal scroll bar.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_MAXIMIZE',
        documentation: 'Creates a window that is initially maximized.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_MAXIMIZEBOX',
        documentation: 'Creates a window that has a maximize button. Cannot be combined with the WS_EX_CONTEXTHELP style. The WS_SYSMENU style must also be specified.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_MINIMIZE',
        documentation: 'Creates a window that is initially minimized.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_MINIMIZEBOX',
        documentation: 'Creates a window that has a minimize button. Cannot be combined with the WS_EX_CONTEXTHELP style. The WS_SYSMENU style must also be specified.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_OVERLAPPED',
        documentation: 'Creates an overlapped window. An overlapped window has a title bar and a border. Same as the WS_TILED style',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_OVERLAPPEDWINDOW',
        documentation: 'Creates an overlapped window with the WS_OVERLAPPED, WS_CAPTION, WS_SYSMENU, WS_THICKFRAME, WS_MINIMIZEBOX, and WS_MAXIMIZEBOX styles. Same as the WS_TILEDWINDOW style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_POPUPWINDOW',
        documentation: 'Creates a pop-up window with WS_BORDER, WS_POPUP, and WS_SYSMENU styles. The WS_CAPTION and WS_POPUPWINDOW styles must be combined to make the window menu visible.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_SIZEBOX',
        documentation: 'Creates a window that has a sizing border. Same as the WS_THICKFRAME style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_SYSMENU',
        documentation: 'Creates a window that has a window menu on its title bar. The WS_CAPTION style must also be specified.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_THICKFRAME',
        documentation: 'Creates a window that has a sizing border. Same as the WS_SIZEBOX style',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_VSCROLL',
        documentation: 'Creates a window that has a vertical scroll bar.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_VISIBLE',
        documentation: 'Creates a window that is initially visible.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_CHILD',
        documentation: 'Creates a child window. A window with this style cannot have a menu bar. This style cannot be used with the WS_POPUP style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_GROUP',
        documentation: 'Specifies the first control of a group of controls. The group consists of this first control and all controls defined after it, up to the next control with the WS_GROUP style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_TABSTOP',
        documentation: 'Turns the control into a tab stop, which enables the user to select the control by tabbing through the controls in a dialog box.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$DS_MODALFRAME',
        documentation: 'Creates a dialog box with a modal dialog-box frame that can be combined with a title bar and window menu by specifying the WS_CAPTION and WS_SYSMENU styles.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$DS_SETFOREGROUND',
        documentation: 'This style is useful for modal dialog boxes that require immediate attention from the user regardless of whether the owner window is the foreground window.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$DS_CONTEXTHELP',
        documentation: 'Includes a question mark in the title bar of the dialog box. Cannot be used with the WS_MAXIMIZEBOX or WS_MINIMIZEBOX styles. Same as WS_EX_CONTEXTHELP extended style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_EX_ACCEPTFILES',
        documentation: 'Allow an edit or input control within the created GUI window to receive filenames via drag and drop. The control must have also the $GUI_DROPACCEPTED state set by GUICtrlSetState. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_APPWINDOW',
        documentation: 'Forces a top-level window onto the taskbar when the window is visible. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_COMPOSITED',
        documentation: 'Paints all descendants of a window in bottom-to-top painting order using double-buffering. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_CLIENTEDGE',
        documentation: 'Specifies that a window has a border with a sunken edge. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_CONTEXTHELP',
        documentation: 'Includes a question mark in the title bar of the window. Cannot be used with the WS_MAXIMIZEBOX or WS_MINIMIZEBOX ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_DLGMODALFRAME',
        documentation: 'Creates a window that has a double border; the window can, optionally, be created with a title bar by specifying the WS_CAPTION style in the dwStyle parameter. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_LAYOUTRTL',
        documentation: 'Specifies that a window has a layout from right to left (RTL) instead of the standard left to right (LTR). ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_MDICHILD',
        documentation: 'Create a child window that will be moved with its parent.(simulation of a MDI window maximize/minimize are not simulated). ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_OVERLAPPEDWINDOW',
        documentation: 'Combines the WS_EX_CLIENTEDGE and WS_EX_WINDOWEDGE styles. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_STATICEDGE',
        documentation: 'Creates a window with a three-dimensional border style intended to be used for items that do not accept user input. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_TOPMOST',
        documentation: 'Specifies that a window created with this style should be placed above all non-topmost windows and should stay above them, even when the window is deactivated. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_TRANSPARENT',
        documentation: 'The window appears transparent because the bits of underlying sibling windows have already been painted. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_TOOLWINDOW',
        documentation: 'Creates a tool window; that is, a window intended to be used as a floating toolbar. A tool window has a title bar that is shorter than a normal title bar, and the window title is drawn using a smaller font. A tool window does not appear in the taskbar or in the dialog box that appears when the user presses ALT+TAB. If a tool window has a system menu, its icon is not displayed on the title bar. However, you can display the system menu by typing ALT+SPACE. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_WINDOWEDGE',
        documentation: 'Specifies that a window has a border with a raised edge. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$WS_EX_LAYERED',
        documentation: 'Creates a layered window. Note that this cannot be used for child windows. ',
        detail: 'WindowsConstant Extended Control Style'
    },
    {
        label: '$GUI_WS_EX_PARENTDRAG',
        documentation: 'Allow the label or pic control to be used as the title bar to drag the whole the parent window. (Needs #include <GUIConstantsEx.au3>) ',
        detail: 'WindowsConstant Extended Control Style'
    }
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation += '\n\nRequires #include <WindowsConstants.au3>'
}

module.exports = items