import { languages, Location, SymbolInformation, SymbolKind, workspace } from 'vscode';
import { AI_CONSTANTS, AUTOIT_MODE, isSkippableLine, functionPattern } from './util';

const variablePattern = /(\$\w+)/g;
const config = workspace.getConfiguration('autoit');

const createVariableSymbol = (variable, variableKind, doc, line) => {
  return new SymbolInformation(variable, variableKind, '', new Location(doc.uri, line.range));
};

export default languages.registerDocumentSymbolProvider(AUTOIT_MODE, {
  provideDocumentSymbols(doc) {
    const result = [];
    const found = [];
    let funcName;
    let variableKind;

    // Get the number of lines in the document to loop through
    const lineCount = Math.min(doc.lineCount, 10000);
    for (let lineNum = 0; lineNum < lineCount; lineNum += 1) {
      const line = doc.lineAt(lineNum);
      const { text } = line;

      if (isSkippableLine(line)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      funcName = functionPattern.exec(text);
      if (funcName && !found.includes(funcName[1])) {
        const functionSymbol = new SymbolInformation(
          funcName[1],
          SymbolKind.Function,
          '',
          new Location(doc.uri, line.range),
        );
        result.push(functionSymbol);
        found.push(funcName[1]);
      }

      if (config.showVariablesInGoToSymbol) {
        const variables = text.match(variablePattern);

        if (!variables) {
          // eslint-disable-next-line no-continue
          continue;
        }

        if (/^Const/.test(text)) {
          variableKind = SymbolKind.Constant;
        } else if (/^Enum/.test(text)) {
          variableKind = SymbolKind.Enum;
        } else {
          variableKind = SymbolKind.Variable;
        }

        // eslint-disable-next-line no-loop-func
        variables.forEach(variable => {
          if (found.includes(variable) || AI_CONSTANTS.includes(variable)) {
            return;
          }

          result.push(createVariableSymbol(variable, variableKind, doc, line));
          found.push(variable);
        });
      }
    }

    return result;
  },
});
