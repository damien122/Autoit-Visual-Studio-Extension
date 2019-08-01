import {
  languages,
  SignatureHelp,
  SignatureInformation,
  ParameterInformation,
  MarkdownString,
  workspace,
} from 'vscode';
import fs from 'fs';
import path from 'path';
import { getIncludeText, getIncludePath } from './util';
import defaultSigs from './signatures';
import DEFAULT_UDFS from './constants';

let currentIncludeFiles = [];
let includes = {};

/**
 * Reduces a partial line of code to the current Function for parsing
 * @param {string} code The line of code
 */
function getParsableCode(code) {
  const reducedCode = code
    .replace(/\w+\([^()]*\)/g, '')
    .replace(/"[^"]*"/g, '')
    .replace(/'[^']*'/g, '') // Remove double/single quote sets
    .replace(/"[^"]*(?=$)/g, '') // Remove double quote and text at end of line
    .replace(/'[^']*(?=$)/g, '') // Remove single quote and text at end of line
    .replace(/\([^()]*\)/g, '') // Remove paren sets
    .replace(/\({2,}/g, '('); // Reduce multiple open parens

  return reducedCode;
}

function getCurrentFunction(code) {
  const parenSplit = code.split('(');
  // Get the 2nd to last item (right in front of last open paren)
  // and clean up the results
  return parenSplit[parenSplit.length - 2].match(/(.*)\b(\w+)/)[2];
}

function countCommas(code) {
  // Find the position of the closest/last open paren
  const openParen = code.lastIndexOf('(');
  // Count non-string commas in text following open paren
  let commas = code.slice(openParen).match(/(?!\B["'][^"']*),(?![^"']*['"]\B)/g);
  if (commas === null) {
    commas = 0;
  } else {
    commas = commas.length;
  }

  return commas;
}

function getCallInfo(doc, pos) {
  // Acquire the text up the point where the current cursor/paren/comma is at
  const codeAtPosition = doc.lineAt(pos.line).text.substring(0, pos.character);
  const cleanCode = getParsableCode(codeAtPosition);

  return {
    func: getCurrentFunction(cleanCode),
    commas: countCommas(cleanCode),
  };
}

function arraysMatch(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.some(v => arr2.indexOf(v) <= 0)) {
    return true;
  }
  return false;
}

function getIncludes(doc) {
  // determines whether includes should be re-parsed or not.
  const text = doc.getText();

  const includePattern = /^\s+#include\s"(.+)"/gm;
  const LIBRARY_INCLUDE_PATTERN = /^#include\s+<([\w.]+\.au3)>/gm;

  let includesCheck = [];
  let pattern;
  do {
    pattern = includePattern.exec(text);
    if (pattern) {
      includesCheck.push(pattern[1]);
    }
  } while (pattern);

  if (!arraysMatch(includesCheck, currentIncludeFiles)) {
    includes = {};
    for (const i in includesCheck) {
      const newIncludes = getIncludeData(includesCheck[i], doc);
      Object.assign(includes, newIncludes);
    }
    currentIncludeFiles = includesCheck;
  }

  includesCheck = [];
  while ((pattern = LIBRARY_INCLUDE_PATTERN.exec(text))) {
    const filename = pattern[1].replace('.au3', '');
    if (DEFAULT_UDFS.indexOf(filename) == -1) {
      const fullPath = findFilepath(pattern[1]);
      if (fullPath) {
        const newData = getIncludeData(fullPath, doc);
        Object.assign(includes, newData);
      }
    }
  }

  return includes;
}

function getLocalSigs(doc) {
  const _includeFuncPattern = /(?=\S)(?!;~\s)^Func\s+((\w+)\((.+)\))/gm;
  const text = doc.getText();
  const functions = {};

  let pattern = null;
  while ((pattern = _includeFuncPattern.exec(text)) !== null) {
    functions[pattern[2]] = {
      label: pattern[1],
      documentation: 'Local Function',
      params: getParams(pattern[3]),
    };
  }

  return functions;
}

module.exports = languages.registerSignatureHelpProvider(
  { language: 'autoit', scheme: 'file' },
  {
    provideSignatureHelp(document, position) {
      // Find out what called for sig
      const caller = getCallInfo(document, position);
      if (caller == null) {
        return null;
      }

      // Integrate user functions
      const signatures = Object.assign(
        {},
        defaultSigs,
        getIncludes(document),
        getLocalSigs(document),
      );

      // Get the called word from the json files
      const foundSig = signatures[caller.func];
      if (foundSig == null) {
        return null;
      }

      const thisSignature = new SignatureInformation(
        foundSig.label,
        new MarkdownString(`##### ${foundSig.documentation}`),
      );
      // Enter parameter information into signature information
      foundSig.params.forEach(element => {
        thisSignature.parameters.push(
          new ParameterInformation(element.label, new MarkdownString(element.documentation)),
        );
      });

      // Place signature information into results
      const result = new SignatureHelp();
      result.signatures = [thisSignature];
      result.activeSignature = 0;
      result.activeParameter = caller.commas;

      return result;
    },
  },
  '(',
  ',',
);

function getIncludeData(fileName, doc) {
  // console.log(fileName)
  const _includeFuncPattern = /(?=\S)(?!;~\s)Func\s+((\w+)\((.+)\))/g;
  const functions = {};
  const filePath = getIncludePath(fileName, doc);

  let pattern = null;
  const fileData = getIncludeText(filePath);

  while ((pattern = _includeFuncPattern.exec(fileData)) !== null) {
    functions[pattern[2]] = {
      label: pattern[1],
      documentation: `Function from ${fileName}`,
      params: getParams(pattern[3]),
    };
  }

  return functions;
}

function getParams(paramText) {
  const params = paramText.split(',');

  for (const p in params) {
    params[p] = {
      label: params[p].trim(),
      documentation: '',
    };
  }

  return params;
}

function findFilepath(file) {
  const includePaths = workspace.getConfiguration('autoit').includePaths;

  for (const iPath of includePaths) {
    const newPath = path.normalize(`${iPath}\\`) + file;

    if (fs.existsSync(newPath)) {
      return newPath;
    }
  }

  return 0;
}
