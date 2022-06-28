import { window, Position, workspace, Uri } from 'vscode';
import { execFile as launch, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { findFilepath, getIncludeText } from './util';

import ini from "ini";

const config = (() =>
{
  let conf = {
    data: workspace.getConfiguration('autoit')
  };
  workspace.onDidChangeConfiguration(({affectsConfiguration}) => {
    if (!affectsConfiguration("autoit"))
      return;

    conf.data = workspace.getConfiguration('autoit');
    runners.cleanup();
  });
  return new Proxy(conf,
  {
    get(target, prop) { return target.data[prop]; },
    set(target, prop, val) { return target.data.update(prop, val); }
  });
})();

//AutoIt3Wrapper.au3 sets CTRL+Break and CTRL+ALT+Break hotkeys
//they interfere with this extension (unless user changed hotkeys)
//this will disable hotkeys via AutoIt3Wrapper.ini while script is running
//and restore original when it's finished (or if no .ini existed it will be deleted)
const aWrapperHotkey = (()=>
{
  let fileData, ret = {}, autoIt3WrapperIni;

  if (process.env.SCITE_USERHOME && fs.existsSync(process.env.SCITE_USERHOME + "/AutoIt3Wrapper"))
    autoIt3WrapperIni = process.env.SCITE_USERHOME + "/AutoIt3Wrapper/AutoIt3Wrapper.ini";
  else if (process.env.SCITE_HOME && fs.existsSync(process.env.SCITE_HOME + "/AutoIt3Wrapper"))
    autoIt3WrapperIni = process.env.SCITE_HOME + "/AutoIt3Wrapper/AutoIt3Wrapper.ini";
  else
    autoIt3WrapperIni = path.dirname(config.wrapperPath) + "/AutoIt3Wrapper.ini";

  try
  {
    fileData = fs.readFileSync(autoIt3WrapperIni, 'utf-8');
    ret = ini.parse(fileData);
  }
  catch(er){console.log(er);}
  if (!ret.Other)
    ret.Other = {};

  Object.assign(ret.Other, {SciTE_STOPEXECUTE:"", SciTE_RESTART:""});
  return {
    disable: () =>
    {
      fs.writeFileSync(autoIt3WrapperIni, ini.encode(ret), "utf-8");
    },
    reset: () =>
    {
      if (fileData === undefined)
        fs.rmSync(autoIt3WrapperIni);
      else
        fs.writeFileSync(autoIt3WrapperIni, fileData, "utf-8");
    }
  };
})();
const aiOutCommon = window.createOutputChannel('AutoIt', 'vscode-autoit-output');

const runners = {
  list: new Map(), //list of running scripts
  isNewLine: true, //track if previous message ended with a newline
  lastId: 0, //last id used in output
  id: 0, //last launched process id
  get lastRunning()
  {
    return this.findRunner({status: true, thisFile: null});
  },

  get lastRunningOpened()
  {
    return this.findRunner({status: true, thisFile: getActiveDocumentFile()});
  },

  findRunner(filter = {status: true, thisFile: null})
  {
    for(let list = [...this.list.entries()], i = list.length-1; i >= 0; i--)
    {
      const [runner, info] = list[i];
      let good = true;
      for(let f in filter)
      {
        if (filter[f] !== null && filter[f] !== info[f])
        {
          good = false;
          break;
        }
      }
      if (good)
        return {runner, info};

    }
    return null;
  },

  outputRegex: new RegExp(`^extension-output-${require("../package.json").publisher}\.${require("../package.json").name}-#([0-9]+)-(.*)`),
  isAiOutVisible()
  {
    for(let i = 0, found; i < window.visibleTextEditors.length; i++)
    {
      found = window.visibleTextEditors[i].document.fileName.match(this.outputRegex);
      if (found)
        return {id: found[1], name: found[2]};
    }
    return;
  },
  cleanup()
  {
    const now = new Date().getTime();
    const timeout = config.multiOutputStaleTimeout * 1000;
    const endTime = now - timeout;
    //get list of finished processes, ordered by endTime descent
    const values = [...this.list.entries()].filter(a => !a[1].status).sort((a,b) => b[1].endTime - a[1].endTime);
    for(let i = 0; i < values.length; i++)
    {
      const [runner, info] = values[i];
      clearTimeout(info.timer);
      info.callback = () =>
      {
        if (info.aiOut !== aiOutCommon)
          info.aiOut.dispose();

        const isAiOutVisible = this.isAiOutVisible();
        if (isAiOutVisible && isAiOutVisible.name == info.aiOut.name)
          aiOutCommon.show(true); //switch to main output

        this.list.delete(runner);
      };
      if (i >= config.multiOutputStaleMax || (config.multiOutputStaleTimeout && info.endTime < endTime))
        info.callback();
      else
       info.timer = config.multiOutputStaleTimeout ? setTimeout(info.callback.bind(this), info.endTime - endTime) : null;
    }
  }
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


/*
window.activeTextEditor.document.fileName is not available in some situations
(like when runScript() executed in settings tab)
*/
function getActiveDocumentFile() {
  return window.activeTextEditor && window.activeTextEditor.document.fileName || "";
}

let hhproc;

function procRunner(cmdPath, args, bAiOutReuse = true) {
  const thisFile = getActiveDocumentFile(),
        processCommand = cmdPath + " " + args,
        runnerPrev = bAiOutReuse && runners.findRunner({status: false, thisFile, processCommand}),
        id = runnerPrev ? runnerPrev.info.id : ++runners.id,
        prefix = "#" + id + ":⠀",
        prefixEmpty = "".padStart(prefix.length, "⠀"),
        aiOutProcess = config.multiOutput ? runnerPrev ? runnerPrev.info.aiOut : window.createOutputChannel(`AutoIt #${id} (${thisFile})`, 'vscode-autoit-output') : new Proxy({},{get(){return()=>{};}}),
        //using proxy to "forward" all property calls to aiOutCommon and aiOutProcess
        aiOut = new Proxy(aiOutCommon, {
          get(aiOut, prop)
          {
            let ret = aiOut[prop];
            if (ret instanceof Function)
            {
              ret = (...args) =>
              {
                aiOutProcess[prop].apply(aiOutProcess[prop], args); //process output
                if ((prop == "append" || prop == "appendLine") && config.processIdInOutput != "None")
                {
                  const isNewLine = runners.isNewLine;
                  runners.isNewLine = prop == "appendLine" || args[0].match(/[\r\n]$/);
                  //make sure process ID displays at the beginning of the line
                  args[0] = args[0].replace(/([\r\n]+)(.+)/g, "$1" + prefixEmpty + "$2");
                  if (runners.lastId != id || isNewLine)
                  {
                    if (config.processIdInOutput == "Multi")
                      args[0] = prefix + args[0]; //display ID on each line
                    else
                      args[0] = (runners.lastId == id ? prefixEmpty : prefix) + args[0];

                    if (!isNewLine)
                      args[0] = "\r\n" + args[0];
                  }

                  runners.lastId = id;
                }

                aiOut[prop].apply(aiOut[prop], args); //common output
              };
            }

            return ret;
          }
        });

  if (runnerPrev)
  {
    clearTimeout(runnerPrev.info.timer);
    runnerPrev.startTime = new Date().getTime();
    runnerPrev.info.status = true;
    aiOutProcess.clear(); //clear process output
    runners.lastId = 0; //force displaying ID
  }
  if (!config.multiOutput)
    aiOutCommon.clear();

//  if (id == 1 || runners.isAiOutVisible()) //only switch output channel if autoit channel is opened now
  (config.multiOutput ? aiOutProcess : aiOutCommon).show(true);
  // Set working directory to AutoIt script dir so that compile and build
  // commands work right
  const workDir = path.dirname(thisFile);

  aWrapperHotkey.disable();
  const runner = spawn(cmdPath, args, {
    cwd: workDir,
  });

  const aWrapperHotkeyTimer = setTimeout(aWrapperHotkey.reset, 5000);
  aiOutProcess.appendLine(`Starting process #${id} (PID ${runner.pid})`);

  //display process command line, adding quotes to file paths as it does in SciTE
  aiOut.appendLine(`>"${cmdPath}" ${args.map((a,i,ar) => !i || ar[i-1] == "/in" ? '"' + a + '"' : a).join(" ")}`);
  if (runnerPrev)
  {
    runners.list.set(runner, runnerPrev.info);
    runners.list.delete(runnerPrev.runner);
  }
  else
  {
    runners.list.set(runner, {id, startTime: new Date().getTime(), endTime: 0, aiOut: aiOutProcess, thisFile, processCommand, status: true});
  }

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
    const info = runners.list.get(runner);
    info.endTime = new Date().getTime();
    info.status = false;
    clearTimeout(aWrapperHotkeyTimer);
    runners.cleanup();
    aWrapperHotkey.reset();
  });
}

const runScript = () => {
  const thisDoc = window.activeTextEditor.document; // Get the object of the text editor
  const thisFile = thisDoc.fileName; // Get the current file name

  // Save the file
  thisDoc.save();

  const params = config.consoleParams;

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
  procRunner(config.aiPath, [config.wrapperPath, '/NoStatus', '/prod', '/in', thisFile]);
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
  const currentParameters = config.consoleParams;

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
        const params = config.consoleParams;

        const message = params
          ? `Current console parameter(s): ${params}`
          : `Console parameter(s) have been cleared.`;

        window.showInformationMessage(message);
      });
    });
};

const killScript = (thisFile = null) => {
  const data = runners.findRunner({status: true, thisFile});
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
  const UDFCreator = config.UDFCreator;

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
  const {runner, info} = runners.lastRunningOpened||{};
  if (runner)
  {
    runner.on("exit", () =>
    {
      if (info.callback)
      {
        clearTimeout(info.timer);
        info.callback();
      }
      runScript();
    });
    return killScript(info.thisFile);
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
