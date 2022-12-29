import { commands } from 'vscode';
import * as aiCommands from './ai_commands';
import { commandsList, commandsPrefix } from './commandsList';

export const registerCommands = () => {
  for (let i = 0; i < commandsList.length; i += 1) {
    const command = commandsList[i];
    if (aiCommands[command])
      commands.registerCommand(commandsPrefix + command, aiCommands[command]);
  }
};

export default 'registerCommands';
