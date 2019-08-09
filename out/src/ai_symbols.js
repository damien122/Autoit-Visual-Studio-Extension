const { languages, SymbolInformation, SymbolKind, workspace } = require('vscode');
const { AI_CONSTANTS, AUTOIT_MODE, isSkippableLine } = require('./util');

const functionPattern = /Func\s(.+)\(/;
const variablePattern = /(\$\w+)/g;
const config = workspace.getConfiguration('autoit');

module.exports = languages.registerDocumentSymbolProvider(AUTOIT_MODE, {
  provideDocumentSymbols(doc) {
    const result = [];
    const found = [];
    let funcName;

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
        const functionSymbol = new SymbolInformation(funcName[1], SymbolKind.Function, line.range);
        result.push(functionSymbol);
        found.push(funcName[1]);
      }

      if (config.showVariablesInGoToSymbol) {
        const variables = text.match(variablePattern);

        if (!variables) {
          // eslint-disable-next-line no-continue
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
