const opt = require('../util').optTag
const header = require('../util').valueFirstHeader
const tfHeader = require('../util').trueFalseHader
const br = require('../util').br
const include = '(Requires: `#include <Array.au3>`)'

const signatures = {
    "_Array1DToHistogram": {
        "documentation": `Transform a 1D array to Histogram ${include}`,
        "label": "_Array1DToHistogram ( $aArray, [$iSizing] )",
        "params": [{
            "label": "$aArray",
            "documentation": "Array to transform"
        }, {
            "label": "[$iSizing]",
            "documentation": `${opt} Allows to zoom the histogram. \`Default\` = 100 percent`
        }]

    }
}

module.exports = signatures