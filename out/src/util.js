
var valHeader = "|Description |Value |\n|:---|:---:|\n"
var descHeader = "|Value | |Description |\n|:---|---|:---:|\n"

var setDetailAndDocumentation = (array, detail, doc) => {
    
    for (let i of array) {
        i.detail = detail,
        i.documentation += `\n\n*${doc}*`
    }
    
    return array
}


module.exports = {
    valHeader: valHeader,
    descHeader: descHeader,
    setDetail: setDetailAndDocumentation
}