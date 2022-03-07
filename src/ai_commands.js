import { window, Position, workspace, Uri } from 'vscode';
import { execFile as launch, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const vscode = require('vscode');
const configuration = workspace.getConfiguration('autoit');

// Executable paths
const { aiPath, wrapperPath, tidyPath, checkPath, helpPath, infoPath, kodaPath } = configuration;

const aiOut = window.createOutputChannel('AutoIt');

let runner;

function procRunner(cmdPath, args) {
  aiOut.clear();
  aiOut.show(true);

  // Set working directory to AutoIt script dir so that compile and build
  // commands work right
  const workDir = path.dirname(window.activeTextEditor.document.fileName);

  runner = spawn(cmdPath, args, {
    cwd: workDir,
  });

  runner.stdout.on('data', data => {
    const output = data.toString();
    aiOut.append(output);
  });

  runner.stderr.on('data', data => {
    const output = data.toString();
    aiOut.append(output);
  });

  runner.on('exit', code => {
    aiOut.appendLine(`Process exited with code ${code}`);
  });
}

const runScript = () => {
  const thisDoc = window.activeTextEditor.document; // Get the object of the text editor
  const thisFile = thisDoc.fileName; // Get the current file name

  // Save the file
  thisDoc.save();

  const params = workspace.getConfiguration('autoit').get('consoleParams');

  window.setStatusBarMessage('Running the script...', 1500);

  if (params) {
    const quoteSplit = /[\w-/]+|"[^"]+"/g;
    const paramArray = params.match(quoteSplit); // split the string by space or quotes

    const cleanParams = paramArray.map(value => {
      return value.replace(/"/g, '');
    });

    procRunner(aiPath, [
      wrapperPath,
      '/run',
      '/prod',
      '/ErrorStdOut',
      '/in',
      thisFile,
      '/UserParams',
      ...cleanParams,
    ]);
  } else {
    procRunner(aiPath, [wrapperPath, '/run', '/prod', '/ErrorStdOut', '/in', thisFile]);
  }
};

const launchHelp = () => {
  const editor = window.activeTextEditor;

  // Get the selected text and launch it
  const doc = editor.document;
  const query = doc.getText(doc.getWordRangeAtPosition(editor.selection.active));

  window.setStatusBarMessage(`Searching documentation for ${query}`, 1500);

  launch(helpPath, [query]);
};

const launchInfo = () => {
  launch(infoPath);
};

function getDebugText() {
  const editor = window.activeTextEditor;
  const thisDoc = editor.document;
  const varToDebug = thisDoc.getText(thisDoc.getWordRangeAtPosition(editor.selection.active));

  // Make sure that a variable or macro is selected
  if (varToDebug.charAt(0) === '$' || varToDebug.charAt(0) === '@') {
    const nextLine = editor.selection.active.line + 1;
    const newPosition = new Position(nextLine, 0);

    return {
      text: varToDebug,
      position: newPosition,
    };
  }
  window.showErrorMessage(
    `"${varToDebug}" is not a variable or macro, debug line can't be generated`,
  );
  return {};
}

function getIndent() {
  const editor = window.activeTextEditor;
  const doc = editor.document;

  // Grab the whole line
  const currentLine = doc.lineAt(editor.selection.active.line).text;
  // Get the indent of the current line
  const findIndent = /(\s*).+/;
  return findIndent.exec(currentLine)[1];
}

const debugMsgBox = () => {
  const editor = window.activeTextEditor;

  const debugText = getDebugText();

  const indent = getIndent();

  if (debugText) {
    const debugCode = `${indent};### Debug MSGBOX ↓↓↓\n${indent}MsgBox(262144, 'Debug line ~' & @ScriptLineNumber, 'Selection:' & @CRLF & '${debugText.text}' & @CRLF & @CRLF & 'Return:' & @CRLF & ${debugText.text})\n`;

    // Insert the code for the MsgBox into the script
    editor.edit(edit => {
      edit.insert(debugText.position, debugCode);
    });
  }
};

const compileScript = () => {
  // Save the file
  window.activeTextEditor.document.save();
  // Get the current file name
  const thisFile = window.activeTextEditor.document.fileName;

  window.setStatusBarMessage('Compiling script...', 1500);

  // Launch the AutoIt Wrapper executable with the script's path
  procRunner(aiPath, [wrapperPath, '/ShowGui', '/prod', '/in', thisFile]);
};

const tidyScript = () => {
  // Save the file
  window.activeTextEditor.document.save();
  // Get the current file name
  const thisFile = window.activeTextEditor.document.fileName;

  window.setStatusBarMessage(`Tidying script...${thisFile}`, 1500);

  // Launch the AutoIt Wrapper executable with the script's path
  procRunner(tidyPath, [thisFile]);
};

const checkScript = () => {
  // Save the file
  window.activeTextEditor.document.save();
  // Get the current file name
  const thisFile = window.activeTextEditor.document.fileName;

  window.setStatusBarMessage(`Checking script...${thisFile}`, 1500);

  // Launch the AutoIt Wrapper executable with the script's path
  procRunner(checkPath, [thisFile]);
};

const buildScript = () => {
  // Save the file
  window.activeTextEditor.document.save();
  // Get the current file name
  const thisFile = window.activeTextEditor.document.fileName;

  window.setStatusBarMessage('Building script...', 1500);

  // Launch the AutoIt Wrapper executable with the script's path
  procRunner(aiPath, [wrapperPath, '/NoStatus', '/prod', '/in', thisFile]);
};

const debugConsole = () => {
  const editor = window.activeTextEditor;
  const debugText = getDebugText();
  const indent = getIndent();

  if (debugText) {
    const debugCode = `${indent};### Debug CONSOLE ↓↓↓\n${indent}ConsoleWrite('@@ Debug(' & @ScriptLineNumber & ') : ${debugText.text} = ' & ${debugText.text} & @CRLF & '>Error code: ' & @error & @CRLF)\n`;

    // Insert the code for the MsgBox into the script
    editor.edit(edit => {
      edit.insert(debugText.position, debugCode);
    });
  }
};

const launchKoda = () => {
  // Launch Koda Form Designer(FD.exe)
  procRunner(kodaPath);
};

const changeConsoleParams = () => {
  const currentParameters = workspace.getConfiguration('autoit').get('consoleParams');

  window
    .showInputBox({
      placeHolder: `param "param with spaces" 3`,
      value: currentParameters,
      prompt:
        'Enter space-separated parameters to send to the command line when scripts are run. Wrap single parameters with one or more spaces with quotes.',
    })
    .then(input => {
      let newParams = input;
      if (input === undefined) {
        // Preserve standing console parameters if input is cancelled
        newParams = currentParameters;
      }

      configuration.update('consoleParams', newParams, false).then(() => {
        const params = workspace.getConfiguration('autoit').get('consoleParams');

        const message = params
          ? `Current console parameter(s): ${params}`
          : `Console parameter(s) have been cleared.`;

        window.showInformationMessage(message);
      });
    });
};

const killScript = () => {
  runner.stdin.pause();
  runner.kill();
};

const openInclude = () => {
  const editor = window.activeTextEditor;
  const doc = editor.document;

  const currentLine = doc.lineAt(editor.selection.active.line).text;
  const findInclude = /^(?:\s*)#include.+["'<](.*)["'>]/i;
  const found = findInclude.exec(currentLine);
  
  if (found === null) {
    window.showErrorMessage(
      `Not on #include line.`,
    );
    return;
  }

  let includeFile = found[1];
  if (!fs.existsSync(includeFile)) {
    includeFile = findFilepath(includeFile);
  }
  
  if (!includeFile) {
    window.showErrorMessage(
      `Unable to locate #include file.`,
    );
    return;
  }

  const url = Uri.parse('file:///' + includeFile);
  window.showTextDocument(url);
};
  
  
function findFilepath(file) {
  const { includePaths } = workspace.getConfiguration('autoit');
  let newPath;

  for (let i = 0; i < includePaths.length; i += 1) {
    newPath = path.normalize(`${includePaths[i]}\\`) + file;
    if (fs.existsSync(newPath)) {
      return newPath;
    }
  }

  return 0;
}

export {
  buildScript,
  changeConsoleParams,
  checkScript,
  compileScript,
  debugConsole,
  debugMsgBox,
  killScript,
  launchHelp,
  launchInfo,
  launchKoda,
  runScript,
  tidyScript,
  openInclude,
};
