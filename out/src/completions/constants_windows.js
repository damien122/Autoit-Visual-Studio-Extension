var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '$WS_BORDER',
        documentation: 'Value: 0x00800000\n	Creates a window that has a thin-line border.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_POPUP',
        documentation: 'Value: 0x80000000\n	Creates a pop-up window. This style cannot be used with the WS_CHILD style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_CAPTION',
        documentation: 'Value: 0x00C00000\n	Creates a window that has a title bar (includes the WS_BORDER style)',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_CLIPCHILDREN',
        documentation: 'Value: 0x02000000\n	Excludes the area occupied by child windows when drawing occurs within the parent window. This style is used when creating the parent window.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_CLIPSIBLINGS',
        documentation: 'Value: 0x04000000\n	Clips child windows relative to each other; that is, when a particular child window receives a WM_PAINT message, the WS_CLIPSIBLINGS style clips all other overlapping child windows out of the region of the child window to be updated. If WS_CLIPSIBLINGS is not specified and child windows overlap, it is possible, when drawing within the client area of a child window, to draw within the client area of a neighboring child window.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_DISABLED',
        documentation: 'Value: 0x08000000\n	Creates a window that is initially disabled.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_DLGFRAME',
        documentation: 'Value: 0x00400000\n	Creates a window that has a border of a style typically used with dialog boxes.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_HSCROLL',
        documentation: 'Value: 0x00100000\n	Creates a window that has a horizontal scroll bar.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_MAXIMIZE',
        documentation: 'Value: 0x01000000\n	Creates a window that is initially maximized.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_MAXIMIZEBOX',
        documentation: 'Value: 0x00010000\n	Creates a window that has a maximize button. Cannot be combined with the WS_EX_CONTEXTHELP style. The WS_SYSMENU style must also be specified.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_MINIMIZE',
        documentation: 'Value: 0x20000000\n	Creates a window that is initially minimized.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_MINIMIZEBOX',
        documentation: 'Value: 0x00020000\n	Creates a window that has a minimize button. Cannot be combined with the WS_EX_CONTEXTHELP style. The WS_SYSMENU style must also be specified.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_OVERLAPPED',
        documentation: 'Value: 0x00000000\n	Creates an overlapped window. An overlapped window has a title bar and a border. Same as the WS_TILED style',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_OVERLAPPEDWINDOW',
        documentation: 'Value: 0x00CF0000\n	Creates an overlapped window with the WS_OVERLAPPED, WS_CAPTION, WS_SYSMENU, WS_THICKFRAME, WS_MINIMIZEBOX, and WS_MAXIMIZEBOX styles. Same as the WS_TILEDWINDOW style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_POPUPWINDOW',
        documentation: 'Value: 0x80880000\n	Creates a pop-up window with WS_BORDER, WS_POPUP, and WS_SYSMENU styles. The WS_CAPTION and WS_POPUPWINDOW styles must be combined to make the window menu visible.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_SIZEBOX',
        documentation: 'Value: 0x00040000\n	Creates a window that has a sizing border. Same as the WS_THICKFRAME style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_SYSMENU',
        documentation: 'Value: 0x00080000\n	Creates a window that has a window menu on its title bar. The WS_CAPTION style must also be specified.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_THICKFRAME',
        documentation: 'Value: 0x00040000\n	Creates a window that has a sizing border. Same as the WS_SIZEBOX style',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_VSCROLL',
        documentation: 'Value: 0x00200000\n	Creates a window that has a vertical scroll bar.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_VISIBLE',
        documentation: 'Value: 0x10000000\n	Creates a window that is initially visible.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_CHILD',
        documentation: 'Value: 0x40000000\n	Creates a child window. A window with this style cannot have a menu bar. This style cannot be used with the WS_POPUP style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_GROUP',
        documentation: 'Value: 0x00020000\n	Specifies the first control of a group of controls. The group consists of this first control and all controls defined after it, up to the next control with the WS_GROUP style.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$WS_TABSTOP',
        documentation: 'Value: 0x00010000\n	Turns the control into a tab stop, which enables the user to select the control by tabbing through the controls in a dialog box.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$DS_MODALFRAME',
        documentation: 'Value: 0x00000080\n	Creates a dialog box with a modal dialog-box frame that can be combined with a title bar and window menu by specifying the WS_CAPTION and WS_SYSMENU styles.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$DS_SETFOREGROUND',
        documentation: 'Value: 0x00000200\n	This style is useful for modal dialog boxes that require immediate attention from the user regardless of whether the owner window is the foreground window.',
        detail: 'WindowsConstants Control Style'
    },
    {
        label: '$DS_CONTEXTHELP',
        documentation: 'Value: 0x00002000\n	Includes a question mark in the title bar of the dialog box. Cannot be used with the WS_MAXIMIZEBOX or WS_MINIMIZEBOX styles. Same as WS_EX_CONTEXTHELP extended style.',
        detail: 'WindowsConstants Control Style'
    }
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation += '\n\nRequires #include <WindowsConstants.au3>'
}

module.exports = items