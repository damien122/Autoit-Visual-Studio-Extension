
const descriptionHeader = "|Description |Value |\n|:---|:---:|\n";
const valueFirstHeader = "\n|&nbsp;|&nbsp;&nbsp;&nbsp; |&nbsp;\n|---:|:---:|:---|";
const trueFalseHeader = `\n|&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;
    :---|:---:|:---`
const optTag = "##### [optional]  \n"
const br = "\u0020\u0020"

var setDetailAndDocumentation = (array, detail, doc) => {
    
    for (let i of array) {
        i.detail = detail,
        i.documentation += `\n\n*${doc}*`
    }
    
    return array
}


module.exports = {
    descriptionHeader: descriptionHeader,
    valueFirstHeader: valueFirstHeader,
    setDetail: setDetailAndDocumentation,
    optTag: optTag,
    trueFalseHader: trueFalseHeader,
    br: br
}