const vscode = require('vscode');
const path = require('path');
const { spawn } = require('child_process');
const languageConfiguration = require('./languageConfiguration');
const hoverFeature = require('./ai_hover');
const completionFeature = require('./ai_completion');
const symbolsFeature = require('./ai_symbols');
const signaturesFeature = require('./ai_signature');
const workspaceSymbolsFeature = require('./ai_workspaceSymbols');
const goToDefinitionFeature = require('./ai_definition');

const { registerCommands } = require('./registerCommands');
const {
  getDiagnosticRange,
  getDiagnosticSeverity,
  updateDiagnostics,
} = require('./checkAutoItCode');

const { checkPath } = vscode.workspace.getConfiguration('autoit');

let diagnosticCollection;

const parseAu3CheckOutput = (document, output) => {
  const OUTPUT_REGEXP = /"(?<scriptPath>.+)"\((?<line>\d{1,4}),(?<position>\d{1,4})\)\s:\s(?<severity>warning|error):\s(?<description>.+)\./gm;
  let matches = null;
  let diagnosticRange;
  let diagnosticSeverity;
  let diagnostics = {};

  matches = OUTPUT_REGEXP.exec(output);
  while (matches !== null) {
    diagnosticRange = getDiagnosticRange(matches.groups.line, matches.groups.position);
    diagnosticSeverity = getDiagnosticSeverity(matches.groups.severity);

    diagnostics = updateDiagnostics(
      diagnostics,
      matches.groups.scriptPath,
      diagnosticRange,
      matches.groups.description,
      diagnosticSeverity,
    );

    matches = OUTPUT_REGEXP.exec(output);
  }

  Object.keys(diagnostics).forEach(scriptPath => {
    diagnosticCollection.set(vscode.Uri.file(scriptPath), diagnostics[scriptPath]);
  });
};

function checkAutoItCode(document) {
  if (document.languageId !== 'autoit') {
    return;
  }
  diagnosticCollection.clear();

  const options = {
    cwd: path.dirname(document.fileName),
  };

  const checkProcess = spawn(checkPath, [document.fileName], options);

  checkProcess.stdout.on('data', data => {
    if (data.length === 0) {
      return;
    }
    parseAu3CheckOutput(document, data.toString());
  });

  checkProcess.stderr.on('error', error => {
    vscode.window.showErrorMessage(`${checkPath} error: ${error}`);
  });
}

const activate = ctx => {
  const features = [
    hoverFeature,
    completionFeature,
    symbolsFeature,
    signaturesFeature,
    workspaceSymbolsFeature,
    goToDefinitionFeature,
  ];
  ctx.subscriptions.push(...features);

  ctx.subscriptions.push(
    vscode.languages.setLanguageConfiguration('autoit', languageConfiguration),
  );

  diagnosticCollection = vscode.languages.createDiagnosticCollection('autoit');
  ctx.subscriptions.push(diagnosticCollection);

  registerCommands();

  vscode.workspace.onDidSaveTextDocument(document => checkAutoItCode(document));
  vscode.workspace.onDidOpenTextDocument(document => checkAutoItCode(document));
  vscode.window.onDidChangeActiveTextEditor(editor => checkAutoItCode(editor.document));

  // eslint-disable-next-line no-console
  console.log('AutoIt is now active!');
};

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;
