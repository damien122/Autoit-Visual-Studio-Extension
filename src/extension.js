const vscode = require('vscode');
const languageConfiguration = require('./languageConfiguration');
const hoverFeature = require('./ai_hover');
const completionFeature = require('./ai_completion');
const symbolsFeature = require('./ai_symbols');
const signaturesFeature = require('./ai_signature');
const workspaceSymbolsFeature = require('./ai_workspaceSymbols');
const goToDefinitionFeature = require('./ai_definition');
const {
  runScript,
  launchHelp,
  launchInfo,
  debugMsgBox,
  debugConsole,
  compileScript,
  tidyScript,
  checkScript,
  buildScript,
  launchKoda,
  changeConsoleParams,
  killScript,
} = require('./ai_commands');

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

  // Run Script Command
  vscode.commands.registerCommand('extension.runScript', () => {
    runScript();
  });

  // Launch Help Command
  vscode.commands.registerCommand('extension.launchHelp', () => {
    launchHelp();
  });

  // Launch Au3Info
  vscode.commands.registerCommand('extension.launchInfo', () => {
    launchInfo();
  });

  // Insert Debug MsgBox
  vscode.commands.registerCommand('extension.debugMsgBox', () => {
    debugMsgBox();
  });

  // Launch Debug-Console
  vscode.commands.registerCommand('extension.debugConsole', () => {
    debugConsole();
  });

  // Compile scripts
  vscode.commands.registerCommand('extension.compile', () => {
    compileScript();
  });

  // Tidy script
  vscode.commands.registerCommand('extension.tidy', () => {
    tidyScript();
  });

  // Check script
  vscode.commands.registerCommand('extension.check', () => {
    checkScript();
  });

  // Build scripts
  vscode.commands.registerCommand('extension.build', () => {
    buildScript();
  });

  // Launch Koda Form Designer
  vscode.commands.registerCommand('extension.launchKoda', () => {
    launchKoda();
  });

  // Update console parameters
  vscode.commands.registerCommand('extension.changeParams', () => {
    changeConsoleParams();
  });

  // Kill running script command
  vscode.commands.registerCommand('extension.killScript', () => {
    killScript();
  });

  // eslint-disable-next-line no-console
  console.log('AutoIt is now active!');
};

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;
