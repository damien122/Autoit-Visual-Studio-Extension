var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '$ACS_AUTOPLAY',
        documentation: 'Starts playing the animation as soon as the AVI clip is opened. ',
        detail: 'Avi Clip Style Constant'
    },
    {
        label: '$ACS_CENTER',
        documentation: 'Centers the animation in the animation control\'s window. ',
        detail: 'Avi Clip Style Constant'
    },
    {
        label: '$ACS_TRANSPARENT',
        documentation: 'Allows you to match an animation\'s background color to that of the underlying window, creating a \"transparent\" background. (Default value) ',
        detail: 'Avi Clip Style Constant'
    },
    {
        label: '$ACS_NONTRANSPARENT',
        documentation: 'To override default ACS_TRANSPARENT ',
        detail: 'Avi Clip Style Constant'
    },
]

// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation += '\n\nRequires #include <AVIConstants.au3>'
}

module.exports = items