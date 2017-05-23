'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUICtrlIpAddress_ClearAddress',
        documentation: 'Clears the contents of the IP address control'
    },
    {
        label: '_GUICtrlIpAddress_Create',
        documentation: 'Create a GUI IP Address Control'
    },
    {
        label: '_GUICtrlIpAddress_Destroy',
        documentation: 'Delete the IP Address control'
    },
    {
        label: '_GUICtrlIpAddress_Get',
        documentation: 'Retrieves the address from the IP address control'
    },
    {
        label: '_GUICtrlIpAddress_GetArray',
        documentation: 'Retrieves the address from the IP address control'
    },
    {
        label: '_GUICtrlIpAddress_GetEx',
        documentation: 'Retrieves the address from the IP address control'
    },
    {
        label: '_GUICtrlIpAddress_IsBlank',
        documentation: 'Determines if all fields in the IP address control are blank'
    },
    {
        label: '_GUICtrlIpAddress_Set',
        documentation: 'Sets the address in the IP address control'
    },
    {
        label: '_GUICtrlIpAddress_SetArray',
        documentation: 'Sets the address in the IP address control'
    },
    {
        label: '_GUICtrlIpAddress_SetEx',
        documentation: 'Sets the address in the IP address control'
    },
    {
        label: '_GUICtrlIpAddress_SetFocus',
        documentation: 'Sets the keyboard focus to the specified field in the IP address control'
    },
    {
        label: '_GUICtrlIpAddress_SetFont',
        documentation: 'Set font of the control'
    },
    {
        label: '_GUICtrlIpAddress_SetRange',
        documentation: 'Sets the valid range for the specified field in the IP address control'
    },
    {
        label: '_GUICtrlIpAddress_ShowHide',
        documentation: 'Shows/Hides the IP address control '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiIPAddress UDF - #include <GuiIPAddress.au3>'
}

module.exports = items