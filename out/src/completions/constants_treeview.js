var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '$TVS_HASBUTTONS',
        documentation: 'Displays plus (+) and minus (-) buttons next to parent items. The user clicks the buttons to expand or collapse a parent item\'s list of child items. To include buttons with items at the root of the tree view, TVS_LINESATROOT must also be specified.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_HASLINES',
        documentation: 'Uses lines to show the hierarchy of items.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_LINESATROOT',
        documentation: 'Uses lines to link items at the root of the tree view control. This value is ignored if TVS_HASLINES is not also specified.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_DISABLEDRAGDROP',
        documentation: 'Prevents the tree view control from sending TVN_BEGINDRAG notification messages.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_SHOWSELALWAYS',
        documentation: 'Causes a selected item to remain selected when the tree view control loses focus.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_RTLREADING',
        documentation: 'Normal windows display text left-to-right (LTR). Windows can be mirrored to display languages such as Hebrew or Arabic that read right-to-left (RTL). Normally, tree view text will be displayed in same direction as the the text in its parent window. If TVS_RTLREADING is set, tree view text will read in the opposite direction from the text in the parent window. ',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_NOTOOLTIPS',
        documentation: 'The tree view control does not support tooltips.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_CHECKBOXES',
        documentation: 'Enables check boxes for items in a tree-view control. Once a tree-view control is created with this style, the style cannot be removed. Instead, you must destroy the control and create a new one in its place.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_TRACKSELECT',
        documentation: 'Enables hot tracking in a tree view control.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_SINGLEEXPAND',
        documentation: 'When this style is enabled, changing the selection in the tree view will automatically cause the item being selected to expand and the item being unselected to collapse. If the mouse is used to single-click the selected item and that item is closed, it will be expanded. If the user holds the CTRL key down while selecting an item, the item being unselected will not be collapsed.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_FULLROWSELECT',
        documentation: 'Enables full-row selection in the tree view. The entire row of the selected item is highlighted, and clicking anywhere on an item\'s row will cause it to be selected. This style cannot be used in conjunction with the TVS_HASLINES style.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_NOSCROLL',
        documentation: 'Disables both horizontal and vertical scrolling in the control. The control will not display any scroll bars.',
        detail: 'TreeView Style Constant'
    },
    {
        label: '$TVS_NONEVENHEIGHT',
        documentation: 'The height of the items can be set to an odd height with the TVM_SETITEMHEIGHT message. By default, the height of items must be an even value.',
        detail: 'TreeView Style Constant'
    },
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation += '\n\nRequires #include <TreeViewConstants.au3>'
}

module.exports = items