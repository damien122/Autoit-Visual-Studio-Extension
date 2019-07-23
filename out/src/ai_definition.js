import { languages, Location, Position, Uri, workspace } from 'vscode';
import { AUTOIT_MODE, getIncludePath, getIncludeText } from './util';

const AutoItDefinitionProvider = {
  provideDefinition(document, position) {
    const lookupRange = document.getWordRangeAtPosition(position);
    const lookup = document.getText(lookupRange);
    const docText = document.getText();
    let defRegex = new RegExp(`Func\\s${lookup}\\(`);
    const relativeInclude = /^\s*#include\s"(.+)"/gm;
    const libraryInclude = /^\s*#include\s<(.+)>/gm;

    const config = workspace.getConfiguration('autoit');
    const includePaths = config.includePaths;

    if (lookup.charAt(0) === '$') {
      defRegex = new RegExp(`(?:(?:Local|Global|Const) )?\\${lookup}\\s?=?`, 'i');
    }

    let found = docText.match(defRegex);

    if (found) {
      return new Location(document.uri, document.positionAt(found.index));
    }

    // If nothing was found, search include files
    const scriptsToSearch = [];
    found = relativeInclude.exec(docText);
    while (found) {
      scriptsToSearch.push(found[1]);
      found = relativeInclude.exec(docText);
    }

    found = libraryInclude.exec(docText);
    while (found) {
      for (let i = 0; i < includePaths.length; i += 1) {
        scriptsToSearch.push(`${includePaths[i]}\\${found[1]}`);
      }

      found = libraryInclude.exec(docText);
    }

    console.log(scriptsToSearch);

    if (Array.isArray(scriptsToSearch) && scriptsToSearch.length) {
      found = null;
      for (let i = 0; i < scriptsToSearch.length; i += 1) {
        const scriptPath = getIncludePath(scriptsToSearch[i], document);
        const scriptContent = getIncludeText(scriptPath);

        found = scriptContent.match(defRegex);

        if (found) {
          const line = scriptContent.slice(0, found.index).match(/\n/g).length;

          return new Location(Uri.file(scriptPath), new Position(line, found.index));
        }
      }
    }

    return null;
  },
};

const defProvider = languages.registerDefinitionProvider(AUTOIT_MODE, AutoItDefinitionProvider);

module.exports = defProvider;
