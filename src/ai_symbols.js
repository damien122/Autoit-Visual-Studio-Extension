import { languages, Location, SymbolInformation, SymbolKind, workspace, Range } from 'vscode';
import {
  AI_CONSTANTS,
  AUTOIT_MODE,
  isSkippableLine,
  functionPattern,
  variablePattern,
  regionPattern,
} from './util';

const config = workspace.getConfiguration('autoit');

const createVariableSymbol = (variable, variableKind, doc, line, container) => {
  return new SymbolInformation(
    variable,
    variableKind,
    container,
    new Location(doc.uri, line.range),
  );
};

/**
 * Generates a SymbolInformation object for a function from a given TextDocument
 * that includes the full range of the function's body
 * @param {String} functionName The name of the function from the AutoIt script
 * @param {TextDocument} doc The current document to search
 * @param {String} docText The text from the document (usually generated through `TextDocument.getText()`)
 * @returns SymbolInformation
 */
const createFunctionSymbol = (functionName, doc, docText) => {
  const pattern = new RegExp(
    // `^Func\\s+\\b(?<funcName>${functionName}\\b).*\\n(?:(?!EndFunc\\b).*\\n)*EndFunc.*\\n?`
    `Func\\s+\\b(?<funcName>${functionName}+\\b).*?(EndFunc)`,
    'si',
  );
  const result = pattern.exec(docText);
  if (result === null) {
    return null;
  }
  const endPoint = result.index + result[0].length;
  const newFunctionSymbol = new SymbolInformation(
    result[1],
    SymbolKind.Function,
    '',
    new Location(doc.uri, new Range(doc.positionAt(result.index), doc.positionAt(endPoint))),
  );

  return newFunctionSymbol;
};

/**
 * Generates a SymbolInformation object for a Region from a given TextDocument
 * that includes the full range of the region's body
 * @param {String} regionName The name of the region from the AutoIt script
 * @param {TextDocument} doc The current document to search
 * @param {String} docText The text from the document (usually generated through `TextDocument.getText()`)
 * @returns SymbolInformation
 */
const createRegionSymbol = (regionName, doc, docText) => {
  const cleanRegionName = regionName.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const pattern = new RegExp(`#Region\\s[- ]{0,}(${cleanRegionName}).*?#EndRegion`, 's');

  const result = pattern.exec(docText);
  if (result === null) {
    return null;
  }
  const endPoint = result.index + result[0].length;
  const newRegionSymbol = new SymbolInformation(
    result[1],
    SymbolKind.Namespace,
    '',
    new Location(doc.uri, new Range(doc.positionAt(result.index), doc.positionAt(endPoint))),
  );

  return newRegionSymbol;
};

export default languages.registerDocumentSymbolProvider(AUTOIT_MODE, {
  provideDocumentSymbols(doc) {
    const result = [];
    const found = [];
    const delims = ["'", '"', ';'];
    let funcName;
    let variableKind;
    let inComment = false;
    let inContinue = false;

    // Get the number of lines in the document to loop through
    const lineCount = Math.min(doc.lineCount, 10000);
    for (let lineNum = 0; lineNum < lineCount; lineNum += 1) {
      const line = doc.lineAt(lineNum);
      const { text } = line;
      const regionName = text.match(regionPattern);
      let container;

      if (isSkippableLine(line) && !regionName) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (/^#(?:ce|comments-end)/.test(text)) {
        inComment = false;
        // eslint-disable-next-line no-continue
        continue;
      }

      if (/^#(?:cs|comments-start)/.test(text)) {
        inComment = true;
      }

      if (inComment) {
        // eslint-disable-next-line no-continue
        continue;
      }

      funcName = functionPattern.exec(text);
      if (funcName && !found.includes(funcName[0])) {
        const functionSymbol = createFunctionSymbol(funcName[1], doc, doc.getText());

        if (functionSymbol) {
          result.push(functionSymbol);
          found.push(funcName[1]);
        }
      }

      if (config.showVariablesInGoToSymbol) {
        if (!inContinue) {
          if (/^\s*?(Local|Global)?\sConst/.test(text)) {
            variableKind = SymbolKind.Constant;
          } else if (/^\s*?(Local|Global)?\sEnum/.test(text)) {
            variableKind = SymbolKind.Enum;
          } else {
            variableKind = SymbolKind.Variable;
          }
        }

        inContinue = /\s_\b\s*(;.*)?\s*/.test(text);

        const variables = text.match(variablePattern);
        if (variables) {
          // eslint-disable-next-line no-loop-func
          variables.forEach(variable => {
            if (AI_CONSTANTS.includes(variable)) {
              return;
            }

            // ignore strings beginning with preset delimiters
            if (delims.includes(variable.charAt(0))) {
              return;
            }

            // Go through symbols for function container and symbols that match name and container
            container = result.find(testSymbol => {
              return (
                testSymbol.location.range.contains(line.range) &&
                testSymbol.kind === SymbolKind.Function
              );
            });

            if (container === undefined) {
              container = '';
            }

            if (
              result.some(testSymbol => {
                return testSymbol.name === variable && testSymbol.containerName === container.name;
              })
            ) {
              return;
            }

            result.push(createVariableSymbol(variable, variableKind, doc, line, container.name));
            found.push(variable);
          });
        }
      }

      if (config.showRegionsInGoToSymbol) {
        if (regionName && !found.includes(regionName[0])) {
          const regionSymbol = createRegionSymbol(regionName[1], doc, doc.getText());
          if (regionSymbol) {
            result.push(regionSymbol);
            found.push(regionName[0]);
          }
        }
      }
    }

    return result;
  },
});
