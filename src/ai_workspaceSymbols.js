import { languages, SymbolInformation, SymbolKind, Location, Position, workspace } from 'vscode';
import fs from 'fs';
import { functionPattern, variablePattern, regionPattern } from './util';

const config = workspace.getConfiguration('autoit');

const makeSymbol = (name, type, filePath, docLine) => {
  return new SymbolInformation(name, type, '', new Location(filePath, new Position(docLine, 0)));
};

function provideWorkspaceSymbols(query) {
  const symbols = [];
  let search = query;

  // Don't start searching when it's empty
  if (!search) {
    search = '.*';
  }

  // Enable searching for leading $
  const searchFilter = new RegExp(search.replace('$', '\\$'), 'i');

  // Get list of AutoIt files in workspace
  return workspace.findFiles('**/*.{au3,a3x}').then(data => {
    data.forEach(file => {
      const foundVars = [];

      fs.readFileSync(file.fsPath)
        .toString()
        .split('\n')
        .forEach((line, index) => {
          let symbolKind;
          const variableFound = variablePattern.exec(line);
          const functionFound = functionPattern.exec(line);
          const regionFound = regionPattern.exec(line);

          if (line.charAt(0) === ';') return false; // Skip commented lines

          if (variableFound && config.showVariablesInGoToSymbol) {
            const { 1: newName } = variableFound;

            // Filter based on search (if it's not empty)
            if (!searchFilter.exec(newName)) {
              return false;
            }
            symbolKind = SymbolKind.Variable;

            if (foundVars.indexOf(newName) === -1) {
              foundVars.push(newName);
              return symbols.push(makeSymbol(newName, symbolKind, file, index));
            }
            return false;
          }

          if (functionFound) {
            const { 1: newName } = functionFound;
            if (!searchFilter.exec(newName)) {
              return false;
            }
            symbolKind = SymbolKind.Function;
            return symbols.push(makeSymbol(newName, symbolKind, file, index));
          }

          if (regionFound) {
            const { 1: newName } = regionFound;
            if (!searchFilter.exec(newName)) {
              return false;
            }
            symbolKind = SymbolKind.Namespace;
            return symbols.push(makeSymbol(newName, symbolKind, file, index));
          }

          return false;
        });
    });

    return symbols;
  });
}

const workspaceSymbolProvider = languages.registerWorkspaceSymbolProvider({
  provideWorkspaceSymbols,
});

export default workspaceSymbolProvider;
