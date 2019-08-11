var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '$PBS_MARQUEE',
        documentation: 'Displays progress status as a scrolling marquee.',
        detail: 'Progress Bar Style Constant'
    },
    {
        label: '$PBS_SMOOTH',
        documentation: 'Displays progress status in a smooth scrolling bar instead of the default segmented bar.\nNote This style is supported only in the Windows Classic theme. All other themes won\'t visually change with or without this style.',
        detail: 'Progress Bar Style Constant '
    }, {
        label: '$PBS_SMOOTHREVERSE',
        documentation: 'Displays progress status with a smooth backward transition when changing from a higher value to a lower value. By default, the control will instantly jump to the lower value.\nNote This style is supported only on Windows Vista or later. ',
        detail: 'Progress Bar Style Constant'
    },
    {
        label: '$PBS_VERTICAL',
        documentation: 'Displays progress status vertically, from bottom to top.',
        detail: 'Progress Bar Style Constant'
    },
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation += '\n\nRequires #include <ProgressConstants.au3>'
}

module.exports = items