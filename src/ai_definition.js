import { languages, Location, Position, Uri } from 'vscode';
import fs from 'fs';
import { AUTOIT_MODE, getIncludePath, getIncludeText, findFilepath } from './util';

const AutoItDefinitionProvider = {
  provideDefinition(document, position) {
    const lookupRange = document.getWordRangeAtPosition(position);
    const lookup = document.getText(lookupRange);
    const docText = document.getText();
    let defRegex;
    const relativeInclude = /^\s*#include\s"(.+)"/gm;
    const libraryInclude = /^\s*#include\s<(.+)>/gm;

    if (lookup.charAt(0) === '$') {
      defRegex = new RegExp(`((?:Local|Global|Const)\\s*)?\\${lookup}\\s+?=?`, 'i');
    }
    else {
      defRegex = new RegExp(`(Func\\s+)${lookup}\\s*\\(`);
    }

    let found = docText.match(defRegex);

    if (found) {
      return new Location(document.uri, document.positionAt(found.index + (found[1]||"").length));
    }

    // If nothing was found, search include files
    const scriptsToSearch = [];

    found = relativeInclude.exec(docText);
    while (found) {
      // Check if file exists in document directory
      let includeFile = getIncludePath(found[1], document);
      if (fs.existsSync(includeFile)) {
        scriptsToSearch.push(includeFile);
      } else {
        // Find first instance using include paths
        includeFile = findFilepath(found[1], false);
        if (includeFile) scriptsToSearch.push(includeFile);
      }
      found = relativeInclude.exec(docText);
    }

    found = libraryInclude.exec(docText);
    while (found) {
      // Find first instance using include paths
      const includeFile = findFilepath(found[1], false);
      if (includeFile) scriptsToSearch.push(includeFile);

      found = libraryInclude.exec(docText);
    }

    if (scriptsToSearch.length) {
      found = null;
      for (let i = 0; i < scriptsToSearch.length; i += 1) {
        const scriptPath = getIncludePath(scriptsToSearch[i], document);
        const scriptContent = getIncludeText(scriptPath);

        found = scriptContent.match(defRegex);

        if (found) {
          const arr = scriptContent.slice(0, found.index + ((found[1]||"").length)).split("\n"),
                line = arr.length-1,
                char = arr[arr.length-1].length;

          return new Location(Uri.file(scriptPath), new Position(line, char));
        }
      }
    }

    return null;
  },
};

const defProvider = languages.registerDefinitionProvider(AUTOIT_MODE, AutoItDefinitionProvider);

export default defProvider;
