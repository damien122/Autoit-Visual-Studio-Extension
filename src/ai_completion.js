import { languages, CompletionItem, CompletionItemKind, workspace, Range } from 'vscode';
import fs from 'fs';
import path from 'path';
import completions from './completions';
import { getIncludeText, getIncludePath } from './util';
import DEFAULT_UDFS from './constants';

let currentIncludeFiles = [];
let includes = [];

const functionPattern = /Func\s+(\w*)\s*\(/g;
const variablePattern = /\$(\w*)/g;
const includePattern = /^\s+#include\s"(.+)"/gm;
const LIBRARY_INCLUDE_PATTERN = /^#include\s+<([\w.]+\.au3)>/gm;

const createNewCompletionItem = (kind, name, strDetail = 'Document Function') => {
  const compItem = new CompletionItem(name, kind);

  compItem.detail = kind === CompletionItemKind.Variable ? 'Variable' : strDetail;

  return compItem;
};

const arraysMatch = (arr1, arr2) => {
  if (arr1.length === arr2.length && arr1.some(v => arr2.indexOf(v) <= 0)) {
    return true;
  }
  return false;
};

const provideCompletionItems = (document, position) => {
  // Gather the functions created by the user
  const added = {};
  let result = [];
  const text = document.getText();
  let range = document.getWordRangeAtPosition(position);
  const prefix = range ? document.getText(range) : '';
  const includesCheck = [];
  const libraryIncludes = [];

  if (!range) {
    range = new Range(position, position);
  }

  if (prefix[0] === '$') {
    let pattern = variablePattern.exec(text);
    while (pattern) {
      const varName = pattern[0];
      if (!added[varName]) {
        added[varName] = true;
        result.push(createNewCompletionItem(CompletionItemKind.Variable, varName));
      }

      pattern = variablePattern.exec(text);
    }
  }

  let pattern = functionPattern.exec(text);
  while (pattern) {
    const funcName = pattern[1];
    if (!added[funcName]) {
      added[funcName] = true;
      result.push(createNewCompletionItem(CompletionItemKind.Function, funcName));
    }
    pattern = functionPattern.exec(text);
  }

  // collect the includes of the document
  pattern = includePattern.exec(text);
  while (pattern) {
    includesCheck.push(pattern[1]);
    pattern = includePattern.exec(text);
  }

  // Redo the include collecting if the includes are different
  if (!arraysMatch(includesCheck, currentIncludeFiles)) {
    includes = [];
    let includeFunctions = [];
    for (const i in includesCheck) {
      includeFunctions = getIncludeData(includesCheck[i], document);
      if (includeFunctions) {
        for (var newFunc in includeFunctions) {
          includes.push(
            createNewCompletionItem(
              CompletionItemKind.Function,
              includeFunctions[newFunc],
              `Function from ${includesCheck[i]}`,
            ),
          );
        }
      }
    }
    currentIncludeFiles = includesCheck;
  }

  // Collect the library includes
  while ((pattern = LIBRARY_INCLUDE_PATTERN.exec(text))) {
    // Filter out the default UDFs
    const filename = pattern[1].replace('.au3', '');
    if (DEFAULT_UDFS.indexOf(filename) == -1) {
      libraryIncludes.push(pattern[1]);
    }
  }

  const library = [];
  for (const file of libraryIncludes) {
    const fullPath = findFilepath(file);
    if (fullPath) {
      const libraryResults = getIncludeData(fullPath, document);
      if (libraryResults) {
        for (var newFunc in libraryResults) {
          library.push(
            createNewCompletionItem(
              CompletionItemKind.Function,
              libraryResults[newFunc],
              `Function from ${file}`,
            ),
          );
        }
      }
    }
  }

  result = result.concat(includes, library); // Add either the existing include functions or the new ones to result

  return completions.concat(result);
};

module.exports = languages.registerCompletionItemProvider(
  { language: 'autoit', scheme: 'file' },
  { provideCompletionItems },
  '.',
  '$',
);

function getIncludeData(fileName, document) {
  const _includeFuncPattern = /^(?=\S)(?!;~\s)Func\s+(\w+)\s*\(/gm;
  const functions = [];
  const filePath = getIncludePath(fileName, document);

  let pattern = null;
  const fileData = getIncludeText(filePath);

  while ((pattern = _includeFuncPattern.exec(fileData))) {
    functions.push(pattern[1]);
  }

  return functions;
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
