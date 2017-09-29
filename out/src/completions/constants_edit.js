var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '$SS_BLACKFRAME',
        documentation: 'Specifies a box with a frame around the control that is the same color as the Window Frame. The default Windows color is black. Frame-style static controls do not display text.  ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_BLACKRECT',
        documentation: 'Specifies a rectangle filled with the current window frame color. This color is black in the default color scheme. Rectangle-style static controls do not display text. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_CENTER',
        documentation: 'Specifies a simple rectangle and centers the error value text in the rectangle. The control automatically wraps words that extend past the end of a line to the beginning of the next centered line. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_CENTERIMAGE',
        documentation: 'Specifies that the midpoint of a static control with the SS_BITMAP style will remain fixed when you resize the control. The four sides are adjusted to accommodate a new bitmap. If the bitmap is smaller than the control\'s client area, the rest of the client area is filled with the color of the pixel in the upper-left corner of the bitmap. It can be used with static control having only one line of text.\nThis style bit do not result in unused portions of the control being filled with the color of the top left pixel of the bitmap or icon. Unused portions of the control will remain the background color. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_ETCHEDFRAME',
        documentation: 'Draws the frame of the static control using the EDGE_ETCHED edge style. Frame-style static controls do not display text. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_ETCHEDHORZ',
        documentation: 'Draws the top and bottom edges of the static control using the EDGE_ETCHED edge style. Frame-style static controls do not display text. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_ETCHEDVERT',
        documentation: 'Draws the left and right edges of the static control using the EDGE_ETCHED edge style. Frame-style static controls do not display text. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_GRAYFRAME',
        documentation: 'Specifies a box with a frame drawn with the same color as the screen background (desktop). This color is gray in the default color scheme. Frame-style static controls do not display text. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_GRAYRECT',
        documentation: 'Specifies a rectangle filled with the current screen background color. This color is gray in the default color scheme. Rectangle-style static controls do not display text. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_LEFT',
        documentation: 'Specifies a simple rectangle and left-aligns the text in the rectangle. The text is formatted before it is displayed. Words that extend past the end of a line are automatically wrapped to the beginning of the next left-aligned line. Words that are longer than the width of the control are truncated. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_LEFTNOWORDWRAP',
        documentation: 'Specifies a rectangle and left-aligns the text in the rectangle. Tabs are expanded, but words are not wrapped. Text that extends past the end of a line is clipped. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_NOPREFIX',
        documentation: 'Prevents interpretation of any ampersand (&) characters in the control\'s text as accelerator prefix characters.\nAn application can combine SS_NOPREFIX with other styles by using the bitwise OR (|) operator. This can be useful when file names or other strings that might contain an ampersand (&) must be displayed within a static control in a dialog box. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_NOTIFY',
        documentation: 'Sends the parent window the STN_CLICKED notification when the user clicks the control. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_RIGHT',
        documentation: 'Specifies a rectangle and right-aligns the specified text in the rectangle. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_RIGHTJUST',
        documentation: 'Specifies that the lower right corner of a static control with the SS_BITMAP or SS_ICON style is to remain fixed when the control is resized. Only the top and left sides are adjusted to accommodate a new bitmap or icon. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_SIMPLE',
        documentation: 'Specifies a simple rectangle and displays a single line of left-aligned text in the rectangle. The text line cannot be shortened or altered in any way. Also, if the control is disabled, the control does not gray its text. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_SUNKEN',
        documentation: 'Draws a half-sunken border around a static control. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_WHITEFRAME',
        documentation: 'Specifies a box with a frame drawn with the same color as the window background. This color is white in the default color scheme. Frame-style static controls do not display text. ',
        detail: 'Label/Static Style Constant'
    },
    {
        label: '$SS_WHITERECT',
        documentation: 'Specifies a rectangle filled with the current window background color. This color is white in the default color scheme. Rectangle-style static controls do not display text. ',
        detail: 'Label/Static Style Constant'
    },
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation += '\n\nRequires #include <StaticConstants.au3>'
}

module.exports = items