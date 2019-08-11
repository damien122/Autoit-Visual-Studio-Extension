var {
    CompletionItemKind,
    MarkdownString
} = require('vscode')

var items = [{
        label: '$DDL_ARCHIVE',
        documentation: '`= 0x00000020`',
        detail: ''
    },
    {
        label: '$DDL_DIRECTORY',
        documentation: '`= 0x00000010`',
        detail: ''
    },
    {
        label: '$DDL_DRIVES',
        documentation: '`= 0x00004000`',
        detail: ''
    },
    {
        label: '$DDL_EXCLUSIVE',
        documentation: '`= 0x00008000`',
        detail: ''
    },
    {
        label: '$DDL_HIDDEN',
        documentation: '`= 0x00000002`',
        detail: ''
    },
    {
        label: '$DDL_READONLY',
        documentation: '`= 0x00000001`',
        detail: ''
    },
    {
        label: '$DDL_READWRITE',
        documentation: '`= 0x00000000`',
        detail: ''
    },
    {
        label: '$DDL_SYSTEM',
        documentation: '`= 0x00000004`',
        detail: ''
    },
]


// Add the icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Constant
    i.documentation = new MarkdownString(i.documentation)
    i.detail += 'Dir Constant\nRequires #include <StatusBarConstants.au3>'
}

module.exports = items