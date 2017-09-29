var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '$UDS_ALIGNLEFT',
        documentation: 'Positions the up-down control next to the left edge of the buddy window. The buddy window is moved to the right and its width is decreased to accommodate the width of the up-down control.',
        detail: 'Up-down Style Constant'
    },
    {
        label: '$UDS_ALIGNRIGHT',
        documentation: 'Positions the up-down control next to the right edge of the buddy window. The width of the buddy window is decreased to accommodate the width of the up-down control.',
        detail: 'Up-down Style Constant'
    },
    {
        label: '$UDS_ARROWKEYS',
        documentation: 'Causes the up-down control to process the UP ARROW and DOWN ARROW keys on the keyboard.',
        detail: 'Up-down Style Constant'
    },
    {
        label: '$UDS_HORZ',
        documentation: 'Causes the up-down control\'s arrows to point left and right instead of up and down.',
        detail: 'Up-down Style Constant'
    },
    {
        label: '$UDS_NOTHOUSANDS',
        documentation: 'Prevents insertion of a thousands separator between every three decimal positions.',
        detail: 'Up-down Style Constant'
    },
    {
        label: '$UDS_WRAP',
        documentation: 'Causes the position to wrap if it is incremented or decremented beyond the end or beginning of the range.',
        detail: 'Up-down Style Constant'
    },
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation += '\n\nRequires #include <UpDownConstants.au3>'
}

module.exports = items