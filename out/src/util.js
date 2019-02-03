
const descriptionHeader = "|Description |Value |\n|:---|:---:|\n";
const valueFirstHeader = "\n|&nbsp;|&nbsp;&nbsp;&nbsp; |&nbsp;\n|---:|:---:|:---|";
const trueFalseHeader = `\n|&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;
    :---|:---:|:---`
const opt = "##### [optional]  \n"
const br = "\u0020\u0020"
const defaultZero = br + br + "`Default = 0`"

const setDetailAndDocumentation = (array, detail, doc) => {
    
    for (let i of array) {
        i.detail = detail,
        i.documentation += `\n\n*${doc}*`
    }
    
    return array
}

const AI_CONSTANTS = ['$MB_ICONERROR', '$MB_ICONINFORMATION', '$MB_YESNO', '$MB_TASKMODAL', '$IDYES', '$IDNO',]

module.exports = {
    descriptionHeader: descriptionHeader,
    valueFirstHeader: valueFirstHeader,
    setDetail: setDetailAndDocumentation,
    opt,
    trueFalseHader: trueFalseHeader,
    br,
    AI_CONSTANTS: AI_CONSTANTS,
    defaultZero,
}