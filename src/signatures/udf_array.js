
const { opt, br, defaultZero } = require('../util')
const include = '(Requires: `#include <Array.au3>`)'

const signatures = {
    "_Array1DToHistogram": {
        "documentation": `Transform a 1D array to Histogram ${include}`,
        "label": "_Array1DToHistogram ( $aArray, [$iSizing] )",
        "params": [{
            "label": "$aArray",
            "documentation": "Array to transform"
        }, {
            "label": "$iSizing",
            "documentation": `${opt} Allows to zoom the histogram. \`Default = 100 percent\``
        }]
    },
    "_ArrayAdd": {
        "documentation": `Adds a specified value at the end of an existing 1D or 2D array ${include}`,
        "label": "_ArrayAdd ( ByRef $aArray, $vValue, [$iStart], [$sDelim_Item], [$sDelim_Row], [$iForce] )",
        "params": [{
            "label": "$aArray",
            "documentation": "Array to modify"
        }, {
            "label": "$vValue",
            "documentation": "Value(s) to add - can be a single item, a delimited string or an array"
        }, {
            "label": "$iStart",
            "documentation": `${opt} Column in which addition is to begin (2D array only)${br}
                \`Default = 0\``
        }, {
            "label": "$sDelim_Item",
            "documentation": `${opt} Delimiter used if a string is to be split into items${br}
                \`Default = "|"\``
        }, {
            "label": "$sDelim_Row",
            "documentation": `${opt} Delimiter used if a string is to be split into rows (2D only)
                ${br}\`Default = @CRLF\``
        }, {
            "label": "$iForce",
            "documentation": `${opt} Maintains default behaviour,${br}
                \`$ARRAYFILL_FORCE_DEFAULT (0)\`${br}
                Forces \`$vValue\` addition as a single item,${br}
                \`$ARRAYFILL_FORCE_SINGLEITEM (1)\`${br}
                Or forces datatype for all added items${br}
                \`$ARRAYFILL_FORCE_INT (2)\`${br}
                \`$ARRAYFILL_FORCE_NUMBER (3)\`${br}
                \`$ARRAYFILL_FORCE_PTR (4)\`${br}
                \`$ARRAYFILL_FORCE_HWND (5)\`${br}
                \`$ARRAYFILL_FORCE_STRING (6)\`${br}
                \`$ARRAYFILL_FORCE_BOOLEAN (7)\``
        }]
    },
    "_ArrayBinarySearch": {
        "documentation": `Uses the binary search algorithm to search through a 1D or 2D array ${include}`,
        "label": "_ArrayBinarySearch ( Const ByRef $aArray, $vValue, [$iStart], [$iEnd], [$iColumn] )",
        "params": [{
            "label": "$aArray",
            "documentation": "Array to search"
        }, {
            "label": "$vValue",
            "documentation": "Value to find"
        }, {
            "label": "$iStart",
            "documentation": `${opt} Index of array to start searching at ${defaultZero}`
        }, {
            "label": "$iEnd",
            "documentation": `${opt} Index of array to stop searching at ${defaultZero}`
        }, {
            "label": "$iColumn",
            "documentation": `${opt} Column of array to search ${defaultZero}`
        }]
    },
}

module.exports = signatures