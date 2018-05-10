
var valHeader = "|Description |Value |\n|:---|:---:|\n"

var setDetailAndDocumentation = (array, detail, doc) => {
    
    for (let i of array) {
        i.detail = detail,
        i.documentation += `\n\n*${doc}*`
    }
    
    return array
}


module.exports = {
    valHeader: valHeader,
    setDetail: setDetailAndDocumentation
}