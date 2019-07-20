import { languages, commands } from 'vscode';
import langConfig from './languageConfiguration';
import AutoItCommands from './ai_commands';
import hoverFeature from './ai_hover';
import completionFeature from './ai_completion';
import symbolsFeature from './ai_symbols';
import signaturesFeature from './ai_signature';
import workspaceSymbolsFeature from './ai_workspaceSymbols';
import goToDefinitionFeature from './ai_definition';

function activate(context) {
  const features = [
    hoverFeature,
    completionFeature,
    symbolsFeature,
    signaturesFeature,
    workspaceSymbolsFeature,
    goToDefinitionFeature,
  ];
  context.subscriptions.push(...features);

  context.subscriptions.push(languages.setLanguageConfiguration('autoit', langConfig));

  // Run Script Command
  commands.registerCommand('extension.runScript', () => {
    AutoItCommands.runScript();
  });

  // Launch Help Command
  commands.registerCommand('extension.launchHelp', () => {
    AutoItCommands.launchHelp();
  });

  // Launch Au3Info
  commands.registerCommand('extension.launchInfo', () => {
    AutoItCommands.launchInfo();
  });

  // Insert Debug MsgBox
  commands.registerCommand('extension.debugMsgBox', () => {
    AutoItCommands.debugMsgBox();
  });

  // Compile scripts
  commands.registerCommand('extension.compile', () => {
    AutoItCommands.compileScript();
  });

  // Tidy script
  commands.registerCommand('extension.tidy', () => {
    AutoItCommands.tidyScript();
  });

  // Check script
  commands.registerCommand('extension.check', () => {
    AutoItCommands.checkScript();
  });

  // Build scripts
  commands.registerCommand('extension.build', () => {
    AutoItCommands.buildScript();
  });

  // Launch Debug-Console
  commands.registerCommand('extension.debugConsole', () => {
    AutoItCommands.debugConsole();
  });

  // Launch Koda Form Designer
  commands.registerCommand('extension.launchKoda', () => {
    AutoItCommands.launchKoda();
  });

  // Update console parameters
  commands.registerCommand('extension.changeParams', () => {
    AutoItCommands.changeConsoleParams();
  });

  // Kill running script command
  commands.registerCommand('extension.killScript', () => {
    AutoItCommands.killScript();
  });

  // eslint-disable-next-line no-console
  console.log('AutoIt is now active!');
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;
