import { languages, Location, Position, Uri } from 'vscode';
import { AUTOIT_MODE, getIncludePath, getIncludeText } from './util';


const AutoItDefinitionProvider = {
  provideDefinition(document, position) {
    const lookupRange = document.getWordRangeAtPosition(position);
    const lookup = document.getText(lookupRange);
    const docText = document.getText();
    let defRegex = new RegExp(`Func\\s${lookup}\\(`);
    const includePattern = /^\s*#include\s"(.+)"/gm;

    if (lookup.charAt(0) === '$') {
      defRegex = new RegExp(`(?:(?:Local|Global|Const) )?\\${lookup}\\s?=?`, 'i');
    }

    let found = docText.match(defRegex);

    if (found) {
      return new Location(document.uri, document.positionAt(found.index));
    }

    // If nothing was found, search include files
    const scriptsToSearch = [];
    found = includePattern.exec(docText);
    while (found) {
      scriptsToSearch.push(found[1]);
      found = includePattern.exec(docText);
    }

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
