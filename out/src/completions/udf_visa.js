'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_viClose',
        documentation: 'Closes a VISA connection to an Instrument/Device'
    },

    {
        label: '_viExecCommand',
        documentation: 'Send a Command/Query to an Instrument/Device through the VISA interface (GPIB / TCP)'
    },

    {
        label: '_viFindGpib',
        documentation: 'Send a Command/Query to an Instrument/Device through the VISA interface (GPIB / TCP)'
    },

    {
        label: '_viGpibBusReset',
        documentation: 'GPIB BUS "reset": Use this function when the GPIB BUS gets stuck for some reason. You might be lucky and resolve the problem by calling this function'
    },

    {
        label: '_viGTL',
        documentation: 'Go To Local mode: Instruments that accept this command will exit the "Remote Control mode" and go to "Local mode". If the instrument is already in "Local mode" this is simply ignored. Normally, if an instrument does not support this command it will simply stay in the "Remote Control mode"'
    },

    {
        label: '_viInteractiveControl',
        documentation: 'Interactive VISA control to test your SCPI commands'
    },

    {
        label: '_viOpen',
        documentation: 'Opens a VISA connection to an Instrument/Device'
    },

    {
        label: '_viSetAttribute',
        documentation: 'Set any VISA attribute This function, which is called by _viSetTimeout, can ALSO be used to set the other VISA specific attributes. Read the VISA documentation for more information and a list of VISA attributes and their corresponding values'
    },

    {
        label: '_viSetTimeout',
        documentation: 'Sets the VISA timeout in MILISECONDS '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <Visa.au3>'
}

module.exports = items