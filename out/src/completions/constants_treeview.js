var {
    CompletionItemKind, MarkdownString
} = require('vscode')

const styleConst = 'TreeView Style Constant'
const expand = 'Expand flag Constant'
const getNext = 'GetNext flag Constant'

var items = [{
        label: '$TVS_HASBUTTONS',
        documentation: 'Displays plus (+) and minus (-) buttons next to parent items. The user clicks the buttons to expand or collapse a parent item\'s list of child items. To include buttons with items at the root of the tree view, TVS_LINESATROOT must also be specified.',
        detail: styleConst
    },
    {
        label: '$TVS_HASLINES',
        documentation: 'Uses lines to show the hierarchy of items.',
        detail: styleConst
    },
    {
        label: '$TVS_LINESATROOT',
        documentation: 'Uses lines to link items at the root of the tree view control. This value is ignored if TVS_HASLINES is not also specified.',
        detail: styleConst
    },
    {
        label: '$TVS_DISABLEDRAGDROP',
        documentation: 'Prevents the tree view control from sending TVN_BEGINDRAG notification messages.',
        detail: styleConst
    },
    {
        label: '$TVS_SHOWSELALWAYS',
        documentation: 'Causes a selected item to remain selected when the tree view control loses focus.',
        detail: styleConst
    },
    {
        label: '$TVS_RTLREADING',
        documentation: 'Normal windows display text left-to-right (LTR). Windows can be mirrored to display languages such as Hebrew or Arabic that read right-to-left (RTL). Normally, tree view text will be displayed in same direction as the the text in its parent window. If TVS_RTLREADING is set, tree view text will read in the opposite direction from the text in the parent window. ',
        detail: styleConst
    },
    {
        label: '$TVS_NOTOOLTIPS',
        documentation: 'The tree view control does not support tooltips.',
        detail: styleConst
    },
    {
        label: '$TVS_CHECKBOXES',
        documentation: 'Enables check boxes for items in a tree-view control. Once a tree-view control is created with this style, the style cannot be removed. Instead, you must destroy the control and create a new one in its place.',
        detail: styleConst
    },
    {
        label: '$TVS_TRACKSELECT',
        documentation: 'Enables hot tracking in a tree view control.',
        detail: styleConst
    },
    {
        label: '$TVS_SINGLEEXPAND',
        documentation: 'When this style is enabled, changing the selection in the tree view will automatically cause the item being selected to expand and the item being unselected to collapse. If the mouse is used to single-click the selected item and that item is closed, it will be expanded. If the user holds the CTRL key down while selecting an item, the item being unselected will not be collapsed.',
        detail: styleConst
    },
    {
        label: '$TVS_FULLROWSELECT',
        documentation: 'Enables full-row selection in the tree view. The entire row of the selected item is highlighted, and clicking anywhere on an item\'s row will cause it to be selected. This style cannot be used in conjunction with the TVS_HASLINES style.',
        detail: styleConst
    },
    {
        label: '$TVS_NOSCROLL',
        documentation: 'Disables both horizontal and vertical scrolling in the control. The control will not display any scroll bars.',
        detail: styleConst
    },
    {
        label: '$TVS_NONEVENHEIGHT',
        documentation: 'The height of the items can be set to an odd height with the TVM_SETITEMHEIGHT message. By default, the height of items must be an even value.',
        detail: styleConst
    },
    {
        label: '$TVS_NOHSCROLL',
        documentation: 'Disables horizontal scrolling in the control\n\n`= 0x00008000`',
        detail: styleConst
    },
    {
        label: '$TVS_DEFAULT',
        documentation: 'Default control style\n\n`= 0x00000037`',
        detail: styleConst
    },
    {
        label: '$GUI_SS_DEFAULT_TREEVIEW',
        documentation: '`= BitOR($TVS_HASBUTTONS, $TVS_HASLINES, $TVS_LINESATROOT, $TVS_DISABLEDRAGDROP, $TVS_SHOWSELALWAYS)`',
        detail: styleConst
    },
    {
        label: '$TVE_COLLAPSE',
        documentation: '`= 0x0001`',
        detail: expand
    },
    {
        label: '$TVE_EXPAND',
        documentation: '`= 0x0002`',
        detail: expand
    },
    {
        label: '$TVE_TOGGLE',
        documentation: '`= 0x0003`',
        detail: expand
    },
    {
        label: '$TVE_EXPANDPARTIAL',
        documentation: '`= 0x4000`',
        detail: expand
    },
    {
        label: '$TVE_COLLAPSERESET',
        documentation: '`= 0x8000`',
        detail: expand
    },
    {
        label: '$TVGN_ROOT',
        documentation: '`= 0x00000000`',
        detail: getNext
    },
    {
        label: '$TVGN_NEXT',
        documentation: '`= 0x00000001`',
        detail: getNext
    },
    {
        label: '$TVGN_PREVIOUS',
        documentation: '`= 0x00000002`',
        detail: getNext
    },
    {
        label: '$TVGN_PARENT',
        documentation: '`= 0x00000003`',
        detail: getNext
    },
    {
        label: '$TVGN_CHILD',
        documentation: '`= 0x00000004`',
        detail: getNext
    },
    {
        label: '$TVGN_FIRSTVISIBLE',
        documentation: '`= 0x00000005`',
        detal: getNext
    },
    {
        label: '$TVGN_NEXTVISIBLE',
        documentation: '`= 0x00000006`',
        detal: getNext
    },
    {
        label: '$TVGN_PREVIOUSVISIBLE',
        documentation: '`= 0x00000007`',
        detal: getNext
    },
    {
        label: '$TVGN_DROPHILITE',
        documentation: '`= 0x00000008`',
        detal: getNext
    },
    {
        label: '$TVGN_LASTVISIBLE',
        documentation: '`= 0x0000000A`',
        detal: getNext
    }
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation = new MarkdownString(i.documentation)
    i.detail += '\n#include <TreeViewConstants.au3>'
}

module.exports = items