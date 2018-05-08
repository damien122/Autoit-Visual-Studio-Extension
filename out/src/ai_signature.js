'use strict'

var { languages, SignatureHelp, SignatureInformation, ParameterInformation, MarkdownString, workspace } = require('vscode')
var mergeJSON = require('merge-json')
var fs = require('fs')
var path = require('path')
var mainFunctions = require('./signatures/functions.json')
var udfs = require('./signatures/udfs.json')

var defaultSigs = mergeJSON.merge(mainFunctions, udfs)
var currentIncludeFiles = []
var includes = {}
const DEFAULT_UDFS = ['APIComConstants', 'APIConstants', 'APIDiagConstants', 
    'APIDlgConstants', 'APIErrorsConstants', 'APIFilesConstants', 'APIGdiConstants', 
    'APILocaleConstants', 'APIMiscConstants', 'APIProcConstants', 'APIRegConstants', 
    'APIResConstants', 'APIShellExConstants', 'APIShPathConstants', 'APISysConstants',
    'APIThemeConstants', 'Array', 'AutoItConstants', 'AVIConstants', 'BorderConstants',
    'ButtonConstants', 'Clipboard', 'Color', 'ColorConstants', 'ComboConstants', 
    'Constants', 'Crypt', 'Date', 'DateTimeConstants', 'Debug', 'DirConstants', 
    'EditConstants', 'EventLog', 'Excel', 'ExcelConstants', 'File', 'FileConstants', 
    'FontConstants', 'FrameConstants', 'FTPEx', 'GDIPlus', 'GDIPlusConstants', 'GuiAVI',
    'GuiButton', 'GuiComboBox', 'GuiComboBoxEx', 'GUIConstants', 'GUIConstantsEx', 
    'GuiDateTimePicker', 'GuiEdit', 'GuiHeader', 'GuiImageList', 'GuiIPAddress', 
    'GuiListBox', 'GuiListView', 'GuiMenu', 'GuiMonthCal', 'GuiReBar', 'GuiRichEdit',
    'GuiScrollBars', 'GuiSlider', 'GuiStatusBar', 'GuiTab', 'GuiToolbar', 'GuiToolTip',
    'GuiTreeView', 'HeaderConstants', 'IE', 'ImageListConstants', 'Inet', 'InetConstants',
    'IPAddressConstants', 'ListBoxConstants', 'ListViewConstants', 'Math', 'MathConstants',
    'Memory', 'MemoryConstants', 'MenuConstants', 'Misc', 'MsgBoxConstants', 'NamedPipes',
    'NetShare', 'NTSTATUSConstants', 'Process', 'ProcessConstants', 'ProgressConstants', 
    'RebarConstants', 'RichEditConstants', 'ScreenCapture', 'ScrollBarConstants', 
    'ScrollBarsConstants', 'Security', 'SecurityConstants', 'SendMessage', 
    'SliderConstants', 'Sound', 'SQLite', 'SQLite.dll', 'StaticConstants', 
    'StatusBarConstants', 'String', 'StringConstants', 'StructureConstants', 'TabConstants', 
    'Timers', 'ToolbarConstants', 'ToolTipConstants', 'TrayConstants', 'TreeViewConstants', 
    'UDFGlobalID', 'UpDownConstants', 'Visa', 'WinAPI', 'WinAPICom', 'WinAPIConstants',
    'WinAPIDiag', 'WinAPIDlg', 'WinAPIError', 'WinAPIEx', 'WinAPIFiles', 'WinAPIGdi', 
    'WinAPIInternals', 'WinAPIlangConstants', 'WinAPILocale', 'WinAPIMisc', 'WinAPIProc', 
    'WinAPIReg', 'WinAPIRes', 'WinAPIShellEx', 'WinAPIShPath', 'WinAPISys', 'WinAPIsysinfoConstants', 
    'WinAPITheme', 'WinAPIvkeysConstants', 'WindowsConstants', 'WinNet', 'Word', 'WordConstants']

module.exports = languages.registerSignatureHelpProvider({ language: 'autoit', scheme: 'file' }, {
    provideSignatureHelp(document, position) {
        // Find out what called for sig
        let caller = getCallInfo(document, position)
        if (caller == null) {
            return null
        }

        //Integrate user functions
        var signatures = mergeJSON.merge(defaultSigs, getIncludes(document))
        signatures = mergeJSON.merge(signatures, getLocalSigs(document))

        //Get the called word from the json files
        let foundSig = signatures[caller.func]
        if (foundSig == null) {
            return null
        }

        let result = new SignatureHelp()
        let si = new SignatureInformation(foundSig.label, 
            new MarkdownString("*" + foundSig.documentation + "*"))
            //Enter parameter information into signature information
        foundSig.params.forEach(element => {
            si.parameters.push(new ParameterInformation(element.label, 
                new MarkdownString(element.documentation)))
        })

        //Place signature information into results
        result.signatures = [si]
        result.activeSignature = 0
        result.activeParameter = caller.commas

        return result
    }
}, '(', ',')


function getCallInfo(doc, pos) {
    // Acquire the text up the point where the current cursor/paren/comma is at
    let codeAtPosition = doc.lineAt(pos.line).text.substring(0, pos.character)
    let cleanCode = getParsableCode(codeAtPosition)
    
    return {
        func: getCurrentFunction(cleanCode),
        commas: countCommas(cleanCode)
    }
}

function getParsableCode(code) {
    // Remove whole inner functions from the string for easier parsing
    code = code.replace(/\w+\([^()]*\)/g, '')
        .replace(/"[^"]*"/g, '').replace(/'[^']*'/g,'') // Remove double/single quote sets
        .replace(/"[^"]*(?=$)/g, '') // Remove double quote and text at end of line
        .replace(/'[^']*(?=$)/g, '') // Remove single quote and text at end of line
        .replace(/\([^()]*\)/g, '') // Remove paren sets
        .replace(/\({2,}/g, '(') // Reduce multiple open parens

    return code
}

function getCurrentFunction(code) {
    let parenSplit = code.split('(')
    // Get the 2nd to last item (right in front of last open paren)
    // and clean up the results
    return parenSplit[parenSplit.length - 2].match(/(.*)\b(\w+)/)[2]
}

function countCommas(code) {
    // Find the position of the closest/last open paren
    let openParen = code.lastIndexOf('(')
    // Count non-string commas in text following open paren
    let commas = code.slice(openParen).match(/(?!\B["'][^"']*),(?![^"']*['"]\B)/g)
    if (commas === null) {
        commas = 0
    } else {
        commas = commas.length
    }

    return commas
}

function getIncludes(doc) { // determines whether includes should be re-parsed or not.
    var text = doc.getText()
    var pattern = null
    const includePattern = /^\s+#include\s"(.+)"/gm
    const LIBRARY_INCLUDE_PATTERN = /^#include\s+<([\w.]+\.au3)>/gm
    var includesCheck = []

    while (pattern = includePattern.exec(text)) {
        includesCheck.push(pattern[1])
    }

    if (!arraysMatch(includesCheck, currentIncludeFiles)) {
        includes = {}
        for (var i in includesCheck) {
            var newIncludes = getIncludeData(includesCheck[i], doc)
            Object.assign(includes, newIncludes)
        }
        currentIncludeFiles = includesCheck
    }

    includesCheck = []
    while(pattern = LIBRARY_INCLUDE_PATTERN.exec(text)) {
        let filename = pattern[1].replace('.au3', '')
        if (DEFAULT_UDFS.indexOf(filename) == -1) {
            let fullPath = findFilepath(pattern[1])
            if (fullPath) {
                let newData = getIncludeData(fullPath, '')
                Object.assign(includes, newData)
            }
        }
    }

    return includes
}

function getIncludeData(fileName, doc) {
    // console.log(fileName)
    const _includeFuncPattern = /(?=\S)(?!;~\s)Func\s+((\w+)\((.+)\))/g
    var functions = {}
    var filePath = ""

    if (fileName.charAt(1) == ':') {
        filePath = fileName
    } else {
        filePath = path.normalize(path.dirname(doc.fileName) + 
        ((fileName.charAt(0) == '\\' || fileName.charAt(0) == '\/') ? '' : '\\') +
        fileName)
    }
    filePath = filePath.charAt(0).toUpperCase() + filePath.slice(1)
    
    var pattern = null
    var fileData = fs.readFileSync(filePath).toString()
    
    while ((pattern = _includeFuncPattern.exec(fileData)) !== null) {
        functions[pattern[2]] = { 
                label: pattern[1],
                documentation: `Function from ${fileName}`,
                params: getParams(pattern[3]) 
            }
    }

    return functions
}

function getLocalSigs(doc) {
    const _includeFuncPattern = /(?=\S)(?!;~\s)^Func\s+((\w+)\((.+)\))/gm
    let text = doc.getText()
    let functions = {}
    
    let pattern = null
    while ((pattern = _includeFuncPattern.exec(text)) !== null) {
        functions[pattern[2]] = {
            label: pattern[1],
            documentation: 'Local Function',
            params: getParams(pattern[3])
        }
    }

    return functions
}

function getParams(paramText) {
    var params = paramText.split(",")

    for (var p in params) {
        params[p] = { 
            label: params[p].trim(),
            documentation: ''
        }
    }    

    return params
}


function arraysMatch(arr1, arr2) {
    if (arr1.length == arr2.length &&
        arr1.some((v) => arr2.indexOf(v) <= 0)) {
        return true
    } else {
        return false
    }
}

function findFilepath(file) {
    let includePaths = workspace.getConfiguration('autoit').includePaths

    for (const iPath of includePaths) {
        let newPath = path.normalize(iPath + "\\") + file

        if (fs.existsSync(newPath)) {
            return newPath
        }
    }

    return 0
}