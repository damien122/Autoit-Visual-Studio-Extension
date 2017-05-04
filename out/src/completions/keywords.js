'use strict'

var {
    CompletionItemKind,
    // SnippetString
} = require('vscode')

var items = [{
        label: 'And',
        documentation: 'Logical And operation.\ne.g. If $vVar = 5 And $vVar2 > 6 Then\n(True if $vVar equals 5 and $vVar2 is greater than 6)',
    },
    {
        label: 'ByRef',
        documentation: 'Indicates that a parameter should be treated as a reference to the original',
    },
    {
        label: 'Case',
        documentation: ''
    },
    {
        label: 'Const',
        documentation: 'Declare a constant'
    },
    {
        label: 'ContinueCase',
        documentation: 'Abort the code in the current Case block and continue with the code in the next Case block when in a Select or Switch structure.'
    },
    {
        label: 'ContinueLoop',
        documentation: 'Continue a While/Do/For loop'
    },
    {
        label: 'Default',
        documentation: 'Keyword value used in function call'
    },
    {
        label: 'Dim',
        documentation: 'Declare a variable in Local scope if the variable name doesn\'t already exist globally (in which case it reuses the global variable!)'
    },
    {
        label: 'Do',
        documentation: ''
    },
    {
        label: 'Else',
        documentation: ''
    },
    {
        label: 'ElseIf',
        documentation: ''
    },
    {
        label: 'EndFunc',
        documentation: 'Closes a Function definition'
    },
    {
        label: 'EndIf',
        documentation: 'Closes an If block'
    },
    {
        label: 'EndSelect',
        documentation: 'Closes a Select block'
    },
    {
        label: 'EndSwitch',
        documentation: 'Closes a Switch block'
    },
    {
        label: 'EndWith',
        documentation: 'Closes a With block'
    },
    {
        label: 'Enum',
        documentation: 'Enumerates constants.'
    },
    {
        label: 'Exit',
        documentation: 'Terminates the script.'
    },
    {
        label: 'ExitLoop',
        documentation: 'Terminate a While/Do/For loop.'
    },
    {
        label: 'False',
        documentation: 'Boolean value for use in logical expressions.'
    },
    {
        label: 'For',
        documentation: ''
    },
    {
        label: 'Func',
        documentation: 'Defines a user-defined function that takes zero or more arguments and optionally returns a result.'
    },
    {
        label: 'Global',
        documentation: ''
    },
    {
        label: 'If',
        documentation: 'Conditionally run one or more statements.'
    },
    {
        label: 'In',
        documentation: ''
    },
    {
        label: 'Local',
        documentation: ''
    },
    {
        label: 'Next',
        documentation: ''
    },
    {
        label: 'Not',
        documentation: 'Logical Not operation'
    },
    {
        label: 'Null',
        documentation: 'Keyword value to use in function call.'
    },
    {
        label: 'Or',
        documentation: 'Logical Or operation'
    },
    {
        label: 'Redim',
        documentation: 'Resize an existing array.'
    },
    {
        label: 'Return',
        documentation: 'Exit a function and provide a value'
    },
    {
        label: 'Select',
        documentation: 'Conditionally run statements.'
    },
    {
        label: 'Static',
        documentation: 'Declare a static variable or create a static array.'
    },
    {
        label: 'Step',
        documentation: ''
    },
    {
        label: 'Switch',
        documentation: 'Conditionally run statements.'
    },
    {
        label: 'Then',
        documentation: ''
    },
    {
        label: 'To',
        documentation: ''
    },
    {
        label: 'True',
        documentation: 'Boolean value for use in logical expressions.'
    },
    {
        label: 'Until',
        documentation: ''
    },
    {
        label: 'Volatile',
        documentation: 'Function qualifier. (EXPERIMENTAL)'
    },
    {
        label: 'Wend',
        documentation: 'Closes a While Loop'
    },
    {
        label: 'While',
        documentation: 'Loop based on an expression.'
    },
    {
        label: 'With',
        documentation: 'Used to reduce long references to dot-accessible type of variables.'
    }

]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Keyword
    i.detail = 'Keyword'
    // i.insertText = new SnippetString(i.insertText)
}

module.exports = items