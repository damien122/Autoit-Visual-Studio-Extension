const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
const languageConfiguration = require('./languageConfiguration');
const hoverFeature = require('./ai_hover');
const completionFeature = require('./ai_completion');
const symbolsFeature = require('./ai_symbols');
const signaturesFeature = require('./ai_signature');
const workspaceSymbolsFeature = require('./ai_workspaceSymbols');
const goToDefinitionFeature = require('./ai_definition');

const { registerCommands } = require('./registerCommands');
const { parseAu3CheckOutput } = require('./diagnosticUtils');
const config = require("./ai_config").default.config;
let diagnosticCollection;

const checkAutoItCode = document => {

  diagnosticCollection.clear();

  if (!config.enableDiagnostics) {
    return;
  }

  if (document.languageId !== 'autoit') {
    return;
  }

  if (!fs.existsSync(config.checkPath)) {
    vscode.window.showErrorMessage(
      'Invalid Check Path! Please review AutoIt settings (Check Path in UI, autoit.checkPath in JSON)',
    );
    return;
  }
  const checkProcess = spawn(config.checkPath, [document.fileName], {
    cwd: path.dirname(document.fileName),
  });

  checkProcess.stdout.on('data', data => {
    if (data.length === 0) {
      return;
    }
    parseAu3CheckOutput(data.toString(), diagnosticCollection);
  });

  checkProcess.stderr.on('error', error => {
    vscode.window.showErrorMessage(`${config.checkPath} error: ${error}`);
  });
};

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

  registerCommands();

  diagnosticCollection = vscode.languages.createDiagnosticCollection('autoit');
  ctx.subscriptions.push(diagnosticCollection);

  vscode.workspace.onDidSaveTextDocument(document => checkAutoItCode(document));
  vscode.workspace.onDidOpenTextDocument(document => checkAutoItCode(document));
  vscode.window.onDidChangeActiveTextEditor(editor => {
    if (editor) {
      checkAutoItCode(editor.document);
    }
  });

  // eslint-disable-next-line no-console
  console.log('AutoIt is now active!');
};

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
