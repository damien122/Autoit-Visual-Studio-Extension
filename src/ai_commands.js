import { window, Position, workspace, Uri } from 'vscode';
import { execFile as launch, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { findFilepath, getIncludeText } from './util';

const config = Object.assign({}, workspace.getConfiguration('autoit'));

workspace.onDidChangeConfiguration(({affectsConfiguration}) => {
  if (!affectsConfiguration("autoit"))
    return;

  Object.assign(config, workspace.getConfiguration('autoit'));
});


const aiOutAll = window.createOutputChannel('AutoIt', 'vscode-autoit-output');

const runners = {
  list: new Map(), //list of running scripts
  aiOut: new Map(), //list of existed script outputs
  isNewLine: true, //was previous message ended with a newline?
  aiOutMaxCount: 2, //max number of aiOutProcess outputs to keep after script exited
  aiOutTimeout: 60000, //timeout in msec to automatically close output after script exited
  lastId: 0, //last output id printed text (used to show ID or not)
  id: 0,
  get lastRunning()
  {
    return this.lastRunningScript();
  },
  get lastRunningOpened()
  {
    return this.lastRunningScript(getActiveDocumentFile());
  },

  findLastAiOut(thisFile, processCommand)
  {
    for(let list = [...this.aiOut.entries()], i = list.length-1, runner, info; i >= 0; i--)
    {
      [runner, info] = list[i];
      if (info.thisFile == thisFile && info.processCommand == processCommand)
      {
        return {runner, info};
      }
    }
    return null;
  },
  lastRunningScript(thisFile = null)
  {
    for(let list = [...this.list.entries()], i = list.length-1, runner, info; i >= 0; i--)
    {
      [runner, info] = list[i];
      if (!thisFile || info.thisFile == thisFile)
      {
        return {runner, info};
      }
    }
    return null;
  },
  aiOutCleanup({id, thisFile, runner, aiOutProcess, processCommand} = {})
  {
    const that = this;
    const callback = () =>
    {
      aiOutProcess.dispose();
      if (that.id == id)
        aiOutAll.show(true); //switch to main output

      that.aiOut.delete(runner);
    };
    if (runner)
      this.aiOut.set(runner, {timer: this.aiOutTimeout ? setTimeout(callback, this.aiOutTimeout) : null, callback, thisFile, processCommand, aiOutProcess, id});

    while (this.aiOut.size > this.aiOutMaxCount)
    {
      const {timer, callback} = this.aiOut.values().next().value;
      clearTimeout(timer);
      callback();
    }
  }
};

function getActiveDocumentFile() {
  return window.activeTextEditor && window.activeTextEditor.document.fileName || "";
}

let hhproc;

function procRunner(cmdPath, args, bAiOutNew = true) {
  const thisFile = getActiveDocumentFile(),
        processCommand = cmdPath + " " + args,
        aiOutPrev = bAiOutNew && runners.findLastAiOut(thisFile, processCommand),
        id = aiOutPrev ? aiOutPrev.info.id : ++runners.id,
        prefix = "#" + id + ":⠀",
        prefixEmpty = "".padStart(prefix.length, "⠀"),
         aiOutProcess = aiOutPrev ? aiOutPrev.info.aiOutProcess : window.createOutputChannel(`AutoIt #${id} (${thisFile})`, 'vscode-autoit-output'),
        //using proxy to "forward" all property calls to aiOutAll and aiOutProcess
        aiOut = new Proxy(aiOutAll, {
          get(aiOut, prop, proxy)
          {
            if (aiOut[prop] instanceof Function)
            {
              return (...args) =>
              {
                aiOutProcess[prop].apply(aiOutProcess[prop], args); //process output
                if (["append", "appendLine"].includes(prop))
                {
                  const isNewLine = runners.isNewLine;
                  runners.isNewLine = prop == "appendLine" || args[0].match(/[\r\n]$/);
                  //make sure process ID displays at the beginning of the line
                  args[0] = args[0].replace(/([\r\n]+)(.+)/g, "$1" + prefixEmpty + "$2");
                  if (runners.lastId != id || isNewLine)
                  {
                    if (config.idOnEachLine)
                      args[0] = prefix + args[0]; //display ID on each line
                    else
                      args[0] = (runners.lastId == id ? prefixEmpty : prefix) + args[0];

                    if (!isNewLine)
                      args[0] = "\r\n" + args[0];
                  }

                  runners.lastId = id;
                }

                aiOut[prop].apply(aiOut[prop], args); //global output
              };
            }
            else
            {
              return aiOut[prop];
            }
          }
        });

  if (aiOutPrev)
  {
    clearTimeout(aiOutPrev.info.timer);
    runners.aiOut.delete(aiOutPrev.runner);
    aiOutProcess.clear();
    runners.lastId = 0;
  }

  aiOutProcess.show(true);
  // Set working directory to AutoIt script dir so that compile and build
  // commands work right
  const workDir = path.dirname(thisFile);

  const runner = spawn(cmdPath, args, {
    cwd: workDir,
  });
  aiOutProcess.appendLine(`Starting process #${id} (PID ${runner.pid})`);
  aiOut.appendLine(`>"${cmdPath}" ${args.map((a,i,ar) => !i || ar[i-1] == "/in" ? '"' + a + '"' : a).join(" ")}`);
  if (!aiOutPrev)
    runners.list.set(runner, {id, aiOut: aiOutProcess, thisFile, processCommand});

  runner.stdout.on('data', data => {
    const output = data.toString();
    aiOut.append(output);
  });

  runner.stderr.on('data', data => {
    const output = data.toString();
    aiOut.append(output);
  });

  runner.on('exit', code => {
    code = ~~code;
    aiOut.appendLine(`${"+-!"[code>1||code<-1?2:code<1?0:1]}>Process exited with code ${code}`);
    runners.aiOutCleanup({id, runner, aiOutProcess, thisFile, processCommand});
    runners.list.delete(runner);
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

    procRunner(config.aiPath, [
      config.wrapperPath,
      '/run',
      '/prod',
      '/ErrorStdOut',
      '/in',
      thisFile,
      '/UserParams',
      ...cleanParams,
    ], false);
  } else {
    procRunner(config.aiPath, [config.wrapperPath, '/run', '/prod', '/ErrorStdOut', '/in', thisFile], false);
  }
};

const launchHelp = () => {
  const editor = window.activeTextEditor;
  const wordRange = editor.document.getWordRangeAtPosition(editor.selection.start);

  if (!wordRange) {
    launch(config.helpPath);
  } else {
    // Get the selected text and launch it
    const doc = editor.document;
    const query = doc.getText(doc.getWordRangeAtPosition(editor.selection.active));
    const findPrefix = /^[_]+[a-zA-Z0-9]+_/;
    const prefix = findPrefix.exec(query);

    window.setStatusBarMessage(`Searching documentation for ${query}`, 1500);

    if (prefix) {
      for (let i = 0; i < config.smartHelp.length; i += 1) {
        if (config.smartHelp[i][0] === prefix[0]) {
          // Make sure help file exists
          if (!fs.existsSync(config.smartHelp[i][1])) {
            window.showErrorMessage(`Unable to locate ${config.smartHelp[i][1]}`);
            return;
          }

          const regex = new RegExp(`\\bFunc\\s+${query}\\s*\\(`, "g");
          const sources = config.smartHelp[i][2].split("|")

          for (let j = 0; j < sources.length; j += 1) {

            let filePath = sources[j];
            if (!fs.existsSync(filePath)) {
              filePath = findFilepath(filePath, true)
              if (!filePath) { continue };
            }
            let text = getIncludeText(filePath);
            let found = text.match(regex);

            if (found) {
              if (hhproc) { hhproc.kill() };
              hhproc = spawn("hh", [`mk:@MSITStore:${config.smartHelp[i][1]}::/funcs/${query}.htm`]);
              return;
            }
          }
          break;
        }
      }
    }

    launch(config.helpPath, [query]);
  }
};

const launchInfo = () => {
  launch(config.infoPath);
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
  const thisFile = getActiveDocumentFile();

  window.setStatusBarMessage('Compiling script...', 1500);

  // Launch the AutoIt Wrapper executable with the script's path
  procRunner(config.aiPath, [config.wrapperPath, '/ShowGui', '/prod', '/in', thisFile]);
};

const tidyScript = () => {
  // Save the file
  window.activeTextEditor.document.save();
  // Get the current file name
  const thisFile = getActiveDocumentFile();

  window.setStatusBarMessage(`Tidying script...${thisFile}`, 1500);

  // Launch the AutoIt Wrapper executable with the script's path
  procRunner(config.tidyPath, [thisFile]);
};

const checkScript = () => {
  // Save the file
  window.activeTextEditor.document.save();
  // Get the current file name
  const thisFile = getActiveDocumentFile();

  window.setStatusBarMessage(`Checking script...${thisFile}`, 1500);

  // Launch the AutoIt Wrapper executable with the script's path
  procRunner(config.aiPath, [config.wrapperPath, '/AU3check', '/prod', '/in', thisFile]);
};

const buildScript = () => {
  // Save the file
  window.activeTextEditor.document.save();
  // Get the current file name
  const thisFile = getActiveDocumentFile();

  window.setStatusBarMessage('Building script...', 1500);

  // Launch the AutoIt Wrapper executable with the script's path
  procRunner(config.aiPath, [config.wrapperPath, '/NoStatus', '/prod', '/in', thisFile], true);
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
  procRunner(config.kodaPath);
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

      config.update('consoleParams', newParams, false).then(() => {
        const params = workspace.getConfiguration('autoit').get('consoleParams');

        const message = params
          ? `Current console parameter(s): ${params}`
          : `Console parameter(s) have been cleared.`;

        window.showInformationMessage(message);
      });
    });
};

const showInformationMessage = (text, timeout = 10000) =>
{
  clearTimeout(showInformationMessage.timer[text]);

  const callback = () =>
  {
    clearTimeout(timer);
    for(let i = 0; i < 4; i++) // showing rapidly 4 messages hides the message...an exploit?
      window.showInformationMessage(text);
  };
  const timer = setTimeout(callback, timeout);

  showInformationMessage.timer[text] = timer;
  return window.showInformationMessage(text).finally(() => clearTimeout(timer));
};
showInformationMessage.timer = {};

const killScript = (thisFile = null) => {
  const data = runners.lastRunningScript(thisFile);
  if (!data) {
    const file = thisFile ? " (" +thisFile.split("\\").splice(-2, 2).join("\\") + ") " : " ";
    showInformationMessage(`No script${file}is currently running.`);
    return;
  }

  window.setStatusBarMessage('Stopping the script...', 1500);
  data.runner.stdin.pause();
  data.runner.kill();
};

const killScriptOpened = () =>
{
  killScript(getActiveDocumentFile());
};

const openInclude = () => {
  const editor = window.activeTextEditor;
  const doc = editor.document;

  const currentLine = doc.lineAt(editor.selection.active.line).text;
  const findInclude = /^(?:\s*)#include.+["'<](.*\.au3)["'>]/i;
  const found = findInclude.exec(currentLine);

  if (found === null) {
    window.showErrorMessage(`Not on #include line.`);
    return;
  }

  let includeFile = found[1];

  if (!fs.existsSync(includeFile)) {
    // check based on current document directory
    const docPath = path.dirname(doc.fileName);
    const currFile = path.normalize(`${docPath}\\${includeFile}`);

    if (fs.existsSync(currFile)) {
      includeFile = currFile;
    } else {
      const library = found[0].includes("<")
      includeFile = findFilepath(includeFile, library);
    }
  }

  // check for
  if (!includeFile) {
    window.showErrorMessage(`Unable to locate #include file.`);
    return;
  }

  const url = Uri.parse(`file:///${includeFile}`);
  window.showTextDocument(url);
};

const insertHeader = () => {
  const editor = window.activeTextEditor;
  const doc = editor.document;
  const currentLine = editor.selection.active.line;
  const lineText = doc.lineAt(currentLine).text;
  const UDFCreator = workspace.getConfiguration('autoit').get('UDFCreator');

  const findFunc = /(?=\S)(?!;~\s)Func\s+((\w+)\((.+)?\))/i;
  const found = findFunc.exec(lineText);

  if (found === null) {
    window.showErrorMessage(`Not on function definition.`);
    return;
  }
  const hdrType =
    found[2].substring(0, 2) === '__' ? '#INTERNAL_USE_ONLY# ' : '#FUNCTION# =========';
  let syntaxBegin = `${found[2]}(`;
  let syntaxEnd = ')';
  let paramsOut = 'None';
  if (found[3]) {
    const params = found[3].split(',').map((element, index) => {
      let parameter = element;
      let tag = '- ';
      if (element.search('=') !== -1) {
        tag += '[optional] ';
        syntaxBegin += '[';
        syntaxEnd = `]${syntaxEnd}`;
      }
      syntaxBegin += (index ? ', ' : '') + element;
      if (element.substring(0, 5).toLowerCase() === 'byref') {
        parameter = element.substring(6); // strip off byref keyword
        tag += '[in/out] ';
      }
      return parameter
        .trim()
        .split(' ')[0]
        .padEnd(21)
        .concat(tag);
    });
    const paramPrefix = '\n;                  ';
    paramsOut = params.join(paramPrefix);
  }
  const syntaxOut = `${syntaxBegin}${syntaxEnd}`;
  const header = `; ${hdrType}===========================================================================================================
; Name ..........: ${found[2]}
; Description ...:
; Syntax ........: ${syntaxOut}
; Parameters ....: ${paramsOut}
; Return values .: None
; Author ........: ${UDFCreator}
; Modified ......:
; Remarks .......:
; Related .......:
; Link ..........:
; Example .......: No
; ===============================================================================================================================
`;

  const newPosition = new Position(currentLine, 0);
  editor.edit(editBuilder => {
    editBuilder.insert(newPosition, header);
  });
};

const restartScript = () => {
  const data = runners.lastRunningOpened;
  if (data)
  {
    data.runner.on("exit", () =>
    {
      const {callback, timer} = runners.aiOut.get(data.runner);
      if (callback)
      {
        clearTimeout(timer);
        callback();
      }
      runScript();
    });
    return killScript(data.info.thisFile);
  }
  runScript();
};

export {
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
};
