import { commands } from 'vscode';
import {
  buildScript,
  changeConsoleParams,
  checkScript,
  compileScript,
  debugConsole,
  debugMsgBox,
  killScript,
  killScriptOpened,
  launchHelp,
  launchInfo,
  launchKoda,
  runScript,
  tidyScript,
  openInclude,
  insertHeader,
  restartScript,
} from './ai_commands';

const commandList = [
  { id: 'extension.runScript', func: runScript },
  { id: 'extension.launchHelp', func: launchHelp },
  { id: 'extension.launchInfo', func: launchInfo },
  { id: 'extension.debugMsgBox', func: debugMsgBox },
  { id: 'extension.debugConsole', func: debugConsole },
  { id: 'extension.compile', func: compileScript },
  { id: 'extension.tidy', func: tidyScript },
  { id: 'extension.check', func: checkScript },
  { id: 'extension.build', func: buildScript },
  { id: 'extension.launchKoda', func: launchKoda },
  { id: 'extension.changeParams', func: changeConsoleParams },
  { id: 'extension.killScript', func: killScript },
  { id: 'extension.killScriptOpened', func: killScriptOpened },
  { id: 'extension.openInclude', func: openInclude },
  { id: 'extension.insertHeader', func: insertHeader },
  { id: 'extension.restartScript', func: restartScript },
];

export const registerCommands = () => {
  commandList.forEach(command => {
    commands.registerCommand(command.id, command.func);
  });
};

export default 'registerCommands';
