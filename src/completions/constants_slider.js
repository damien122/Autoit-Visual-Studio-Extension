var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '$TBS_AUTOTICKS',
        documentation: 'Adds tick marks when you set the range on the trackbar by using the TBM_SETRANGE message.',
        detail: 'Slider Style Constant'
    },
    {
        label: '$TBS_BOTH',
        documentation: 'Places ticks on both sides of the trackbar.',
        detail: 'Slider Style Constant'
    },
    {
        label: '$TBS_BOTTOM',
        documentation: 'Places ticks on the bottom of a horizontal trackbar.',
        detail: 'Slider Style Constant'
    },
    {
        label: '$TBS_HORZ',
        documentation: 'Specifies a horizontal trackbar. This is the default.',
        detail: 'Slider Style Constant'
    },
    {
        label: '$TBS_VERT',
        documentation: 'Places ticks on the left side of a vertical trackbar.',
        detail: 'Slider Style Constant'
    },
    {
        label: '$TBS_NOTHUMB',
        documentation: 'Specifies that the trackbar has no slider.',
        detail: 'Slider Style Constant'
    },
    {
        label: '$TBS_NOTICKS',
        documentation: 'Specifies that no ticks are placed on the trackbar.',
        detail: 'Slider Style Constant'
    },
    {
        label: '$TBS_LEFT',
        documentation: 'Places ticks on the left side of a vertical trackbar.',
        detail: 'Slider Style Constant'
    },
    {
        label: '$TBS_RIGHT',
        documentation: 'Places ticks on the right side of a vertical trackbar.',
        detail: 'Slider Style Constant'
    },
    {
        label: '$TBS_TOP',
        documentation: 'Places ticks on the top of a horizontal trackbar.',
        detail: 'Slider Style Constant'
    },
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation += '\n\nRequires #include <SliderConstants.au3>'
}

module.exports = items