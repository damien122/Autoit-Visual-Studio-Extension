const {
  languages,
  SymbolInformation,
  SymbolKind,
  Location,
  Position,
  workspace,
} = require('vscode');
const { AI_CONSTANTS, AUTOIT_MODE } = require('./util');

const _funcPattern = /Func\s(.+)\(/;
const _varPattern = /(\$\w+)/g;
const config = workspace.getConfiguration('autoit');

module.exports = languages.registerDocumentSymbolProvider(AUTOIT_MODE, {
  provideDocumentSymbols(doc, token) {
    const result = [];
    const found = [];
    let funcName;

    // Get the number of lines in the document to loop through
    const lineCount = Math.min(doc.lineCount, 10000);
    for (let lineNum = 0; lineNum < lineCount; lineNum++) {
      const line = doc.lineAt(lineNum);
      const text = line.text;

      if (isSkippableLine(line)) {
        continue;
      }

      funcName = _funcPattern.exec(text);
      if (funcName && !found.includes(funcName[1])) {
        const functionSymbol = new SymbolInformation(funcName[1], SymbolKind.Function, line.range);
        result.push(functionSymbol);
        found.push(funcName[1]);
      }

      if (config.showVariablesInGoToSymbol) {
        const variables = text.match(_varPattern);

        if (!variables) {
          continue;
        }

        variables.forEach(variable => {
          if (found.includes(variable) || AI_CONSTANTS.includes(variable)) {
            return;
          }

          const variableSymbol = new SymbolInformation(variable, SymbolKind.Variable, line.range);
          result.push(variableSymbol);
          found.push(variable);
        });
      }
    }

    return result;
  },
});

const isSkippableLine = line => {
  const skipChars = [';', '#'];

  if (line.isEmptyOrWhitespace) {
    return true;
  }

  const firstChar = line.text.charAt(line.firstNonWhitespaceCharacterIndex);
  if (skipChars.includes(firstChar)) {
    return true;
  }

  return false;
};
