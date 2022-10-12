import { window, Position, workspace, Uri , RelativePattern} from 'vscode';
import { execFile as launch, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { findFilepath, getIncludeText } from './util';
import { parse } from "jsonc-parser";
import { commandsList as _commandsList, commandsPrefix} from "./commandsList";

const runners = {
  list: new Map(), //list of running scripts
  isNewLine: true, //track if previous message ended with a newline
  lastId: 0, //last id used in global output
  id: 0, //last launched process id
  outputName: `extension-output-${require("../package.json").publisher}.${require("../package.json").name}-#`,
  get lastRunning() {
    return this.findRunner({ status: true, thisFile: null });
  },

  get lastRunningOpened() {
    return this.findRunner({ status: true, thisFile: getActiveDocumentFile() });
  },

  findRunner(filter = { status: true, thisFile: null }) {
    for (let list = [...this.list.entries()], i = list.length - 1; i >= 0; i--) {
      const [runner, info] = list[i];
      let good = true;
      for (let f in filter) {
        if (filter[f] !== null && filter[f] !== info[f]) {
          good = false;
          break;
        }
      }
      if (good)
        return { runner, info };


    }
    return null;
  },

  isAiOutVisible() {
    for (let i = 0, index, filename; i < window.visibleTextEditors.length; i++) {
      filename = window.visibleTextEditors[i].document.fileName;
      if (this.outputName === filename.substring(0, this.outputName.length)) {
        filename = filename.substring(this.outputName.length);
        index = filename.indexOf("-");
        return { id: filename.substring(0, index), name: filename.substring(index + 1), output: window.visibleTextEditors[i]};
      }
    }
    return;
  },

  cleanup() {
    const now = new Date().getTime();
    const timeout = config.multiOutputFinishedTimeout * 1000;
    const endTime = now - timeout;
    //get list of finished processes, ordered by endTime descent
    const values = [...this.list.entries()].filter(a => !a[1].status).sort((a, b) => b[1].endTime - a[1].endTime);
    for (let i = 0; i < values.length; i++) {
      const [runner, info] = values[i];
      const _aiOutCommon = aiOutCommon;
      clearTimeout(info.timer);
      info.callback = () => {
        info._aiOut.flush();
        if (info.aiOut !== _aiOutCommon)
          info.aiOut.dispose();
        const isAiOutVisible = this.isAiOutVisible();
        if (isAiOutVisible && isAiOutVisible.name == info.aiOut.name)
          _aiOutCommon.show(true); //switch to common output

        this.list.delete(runner);
      };
      if (i >= config.multiOutputMaxFinished || (config.multiOutputFinishedTimeout && info.endTime < endTime))
        info.callback();
      else
        info.timer = config.multiOutputFinishedTimeout ? setTimeout(info.callback.bind(this), info.endTime - endTime) : null;
    }
  }
};//runners

window.onDidChangeVisibleTextEditors(list => {
  const out = runners.isAiOutVisible();
  if (!out || !config.outputMaxHistoryLines)
    return;

  if (out.output.document.lineCount > config.outputMaxHistoryLines) {
    const text = out.output.document.getText();
    const lines = text.split(/\r?\n/);
    let ret = "";
    for(let i = lines.length - config.outputMaxHistoryLines - 2; i < lines.length; i++)
      ret += lines[i] + (i < lines.length - 1 ? "\r\n" : "");

    aiOutCommon.replace(ret);
  }
  
});

//accepts new option parameter in second argument: timeout
const {showInformationMessage, showErrorMessage, messages} = (() => {
  const messages = { info:{}, error:{} };
  const ret = (type) => {
    const timers = {};
    const func = (...args) => {
      let timeout;
      const [message, options] = args;
      if (options && options instanceof Object && !(options instanceof Array)) {
        timeout = options.timeout;
        //not sure if we need to bother sanitize options object or not, seems to work as is
        // delete options.timeout;
        // if (!options.keys().length)
        //   args.splice(1,1);
      }
      const _clearTimeout = () =>{
        clearTimeout(timers[message]);
        delete(timers[message]);
      };
      _clearTimeout();
      let isHidden = false;
      const callback = () => {
        _clearTimeout();
        // https://github.com/microsoft/vscode/issues/153693
        for (let i = 0; i < 4; i++) // showing rapidly 4 messages hides the message...an exploit?
          window[type].apply(window, args);

        isHidden = true;
      };
      timers[message] = timeout !== undefined && setTimeout(callback, timeout);
      return {
        get isHidden() {
          return isHidden;
        },
        hide: callback,
        message: window[type].apply(window, args).finally(_clearTimeout)
      };
    };
    return func;
  };
  return {
    showInformationMessage: ret("showInformationMessage"),
    showErrorMessage: ret("showErrorMessage"),
    messages,
  };
})();

const config = (() => {
  const conf = {
    data: workspace.getConfiguration('autoit'),
  };
  workspace.onDidChangeConfiguration(({ affectsConfiguration }) => {
    if (!affectsConfiguration('autoit')) return;

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
//and restore original (or if no .ini existed it will be deleted)
//when AutoIt3Wrapper detected running, or after 5 seconds
const aWrapperHotkey = (() => {
  let dataOrig, data, ini, timer, count = new Map();
  const regex = /(SciTE_(STOPEXECUTE|RESTART)\s*=).*/gi,
    env = process.env;
  const fileData = () => {
    ini = dataOrig = null;
    data = "";
    //we should not cache this
    if (env.SCITE_USERHOME && fs.existsSync(env.SCITE_USERHOME + "/AutoIt3Wrapper"))
      ini = env.SCITE_USERHOME + "/AutoIt3Wrapper/AutoIt3Wrapper.ini";
    else if (env.SCITE_HOME && fs.existsSync(env.SCITE_HOME + "/AutoIt3Wrapper"))
      ini = env.SCITE_HOME + "/AutoIt3Wrapper/AutoIt3Wrapper.ini";
    else
      ini = path.dirname(config.wrapperPath) + "/AutoIt3Wrapper.ini";

    try {
      dataOrig = data = fs.readFileSync(ini, 'utf-8');
    } catch (er) { }
    const other = data.match(/^\s*\[Other\]\s*$/im);
    const hotkeys = { STOPEXECUTE: 0, RESTART: 0 };
    if (other) {
      regex.lastIndex = other.index;
      let res;
      while ((res = regex.exec(data))) {
        data = data.substring(0, res.index) + res[1] + data.substring(res.index + res[0].length);
        regex.lastIndex -= res[0].length - res[1].length;
        hotkeys[res[2].toUpperCase()]++;
      }
    }
    else {
      data += `\r\n[Other]`;
    }
    if (!hotkeys.STOPEXECUTE)
      data += `\r\nSciTE_STOPEXECUTE=`;
    if (!hotkeys.RESTART)
      data += `\r\nSciTE_RESTART=`;

    return { ini, data, dataOrig };
  };

  return {
    disable: function (id) {
      clearTimeout(timer);
      count.set(id, id);
      if (count.size == 1) {
        const { ini, data } = fileData();
        try {
          fs.writeFileSync(ini, data, "utf-8");
        } catch (er) { }
      }
      timer = setTimeout(() => this.reset(id), 5000);
      return id;
    },
    reset: (id) => {
      clearTimeout(timer);
      count.delete(id);
      if (!ini || count.size)
        return;

      try {
        if (dataOrig === null)
          fs.rmSync(ini);
        else
          fs.writeFileSync(ini, dataOrig, "utf-8");
      } catch (er) { }
      ini = dataOrig = data = null;
    }
  };
})();

const aiOutCommon = window.createOutputChannel('AutoIt (global)', 'vscode-autoit-output');

const AiOut = ({ id, aiOutProcess }) => {
  let prevLine = "",
      prevLineTimer,
      isNewLineProcess = true;

  const spacer = " ", //using U+00A0 NO-BREAK SPACE character to avoid white-space character highlight.
    prefixId = "#" + id + ":" + spacer,
    prefixEmpty = "".padStart(prefixId.length, spacer),
    hotkeyFailedMsg = /!!?>Failed Setting Hotkey\(s\)(?::|...)[\r\n]*|(?:false)?--> SetHotKey (?:\(\) )?Restart failed(?:,|. -->) SetHotKey (?:\(\) )?Stop failed\.[\r\n]*/gi,
    outputText = (aiOut, prop, lines) => { //using separate function, for performance, so it doesn't have to be created for each message
      const time = getTime();

      let linesProcess = Object.assign([], lines);
      if (prop == "appendLine") {
        if (!isNewLineProcess) {
          isNewLineProcess = true;
          aiOutProcess.append("\r\n");
        }
        if (!runners.isNewLine) {
          runners.isNewLine = true;
          aiOut.append("\r\n");
        }
      }
      if (config.outputShowTime == "Process" || config.outputShowTime == "All") {
        for(let i = 0; i < linesProcess.length; i++) {
          if (i == linesProcess.length-1 && linesProcess[i] === "")
            break;

          if (isNewLineProcess)
            linesProcess[i] = time + spacer + linesProcess[i];

          isNewLineProcess = true;
        }
      }
      let textProcess = linesProcess.join("\r\n");
      if (textProcess) {
        aiOutProcess[prop](textProcess); //process output
        isNewLineProcess = prop == "appendLine" || textProcess.substring(textProcess.length - 2) == "\r\n";
      }

      if (runners.lastId != id && !runners.isNewLine) {
        aiOut.append(prop == "appendLine" ? "" : "\r\n");
        runners.isNewLine = true;
      }

      const prefixTime = (config.outputShowTime == "Global" || config.outputShowTime == "All") ? time + spacer : "";
      for(let i = 0; i < lines.length; i++) {
        if (i == lines.length-1 && lines[i] === "")
          break;

        if (runners.isNewLine) {
          if (config.processIdInOutput == "Multi")
            lines[i] = prefixId + lines[i];
          else if (config.processIdInOutput != "None")
            lines[i] = (runners.lastId == id ? prefixEmpty : prefixId) + lines[i];

          if (prefixTime)
            lines[i] = prefixTime + lines[i];
          
            runners.lastId = id;
        }
        runners.isNewLine = true;
      }
      const textGlobal = lines.join("\r\n");
      if (textGlobal) {
        aiOut[prop](textGlobal); //common output

        runners.isNewLine = prop == "appendLine" || textGlobal.substring(textGlobal.length - 2) == "\r\n";
      }
    };

  let hotkeyFailedMsgFound = false;
  //using proxy to "forward" all property calls to aiOutCommon and aiOutProcess
  return new Proxy(aiOutCommon, {
    get(aiOut, prop, proxy) {
      const isFlush = prop == "flush",
            isError = prop == "error";

      if (isFlush)
        prop = "append";
      else if (isError)
        prop = "appendLine";

      let ret = aiOut[prop];
      if (ret instanceof Function) {
        ret = (text) => {
          if (text === undefined)
            return;
          //incoming text maybe split in chunks
          //to detect message about failed hotkeys we need a complete line
          //therefore we split text into lines and show right the way only the complete ones
          //if after 100 milliseconds nothing else received we show the incomplete line
          clearTimeout(prevLineTimer);
          const lines = prop == "append" ? text.split(/\r?\n/) : [text];
          lines[0] = prevLine + lines[0];
          for (let i = 0; i < lines.length; i++) {
            if (!hotkeyFailedMsgFound) {
              const line = lines[i].replace(hotkeyFailedMsg, "");
              if (line != lines[i]) {
                aWrapperHotkey.reset(id);
                // lines.splice(i--, 1);
                lines[i] = `+>Setting Hotkeys...--> Press `;
                if (keybindings[commandsPrefix + "restartScript"])
                  lines[i] += `${keybindings[commandsPrefix + "restartScript"]} to Restart`;
                
                if (keybindings[commandsPrefix + "killScript"] || keybindings[commandsPrefix + "killScriptOpened"]) {
                  if (keybindings[commandsPrefix + "restartScript"])
                    lines[i] += ` or `;

                  lines[i] += `${keybindings[commandsPrefix + "killScript"] || keybindings[commandsPrefix + "killScriptOpened"]} to Stop.`;
                }
                hotkeyFailedMsgFound = true;
              }
            }
          }
          prevLine = !isFlush && prop == "append" ? lines[lines.length - 1] : "";
          if (prevLine) {
            //last line is not complete, remove it from current text and delay showing it
            if (lines.length > 1)
              lines[lines.length - 1] = "";
            else
              lines.pop();

            prevLineTimer = setTimeout(() => proxy.flush(), 100);
          }
          if (lines.length)
            outputText(aiOut, prop, lines);

        };
      }
      if (isFlush)
        ret("");

      return ret;
    }
  });
}; //AiOut

//get keybindings
let keybindings; //note, we are defining this variable without value!
{//anonymous scope
  let profileDir;
  const prefs = workspace.getConfiguration('autoit'),
    prefName = "consoleParams",
    pref = prefs.inspect(prefName),
    prefValue = pref.globalValue !== undefined ? pref.globalValue.replace(/ ?-profileDirID[\d.]+$/, "") : pref.globalValue,
    //generate ID, in some rare circumstances previous ID could still be present, try remove it
    id = (prefValue ? prefValue + " " : "") + "-profileDirID." + new Date().getTime() + performance.now(),
    dir = (process.env.VSCODE_PORTABLE ? process.env.VSCODE_PORTABLE + "/user-data" : process.env.APPDATA + "/Code") + "/User/",
    settingsJsonWatcher = workspace.createFileSystemWatcher(new RelativePattern(dir, "**/settings.json")),
    settingsJsonWatcherEventHandler = uri => {
      if (profileDir)
        return;

      fs.readFile(uri.fsPath, (err, data) => {
        if (profileDir)
          return;

        const json = parse(data.toString());
        if (json[pref.key] !== id )
          return;

        profileDir = uri.fsPath.replace(/[^\\/]+$/, "");
        settingsJsonWatcher.dispose();
        reset();
      });
    },
    reset = () => {
      clearTimeout(settingsTimer);
      prefs.update(prefName, prefValue, true);
      initKeybindings(profileDir || dir);
    };

  settingsJsonWatcher.onDidChange(settingsJsonWatcherEventHandler);
  settingsJsonWatcher.onDidCreate(settingsJsonWatcherEventHandler);
  prefs.update(prefName, id, true);
  const settingsTimer = setTimeout(reset, 2000);
  const initKeybindings = dir => {
    let readFileLast = 0; //prevent multiple calls
    const commandsList = {};
    for(let i = 0; i < _commandsList.length; i++)
      commandsList[commandsPrefix + _commandsList[i]] = "";
  
    const keybindingsDefaultRaw = require("../package.json").contributes.keybindings;
    const keybindingsDefault = keybindingsDefaultRaw.reduce((a,b)=>(a[b.command]=b.key,a),{});
    const fs = require("fs");
    const promise = {resolve: ()=>{},isResolved:false};
  
    const readFile = uri => {
  
      const now = performance.now();
      if (uri && (uri.scheme != "file" || uri.fsPath != file || !promise.isResolved || readFileLast + 200 > now))
        return;
  
      keybindings = new Promise(resolve => (promise.resolve = resolve, promise.isResolved = false));
      Object.assign(keybindings, Object.assign({}, keybindingsDefault));
      readFileLast = now;
      //read file
      fs.readFile(file, (err, data) => {
        //we can't use JSON.parse() because file may contain comments
        keybindingsUpdate(err ? keybindingsDefaultRaw : parse(data.toString()) || keybindingsDefaultRaw);
      });
    };
    const fileName = "keybindings.json";
    const file = Uri.file(dir + fileName).fsPath;
    const watcher = workspace.createFileSystemWatcher(new RelativePattern(dir, "*.json"));
    watcher.onDidChange(readFile);
    watcher.onDidCreate(readFile);
    watcher.onDidDelete(readFile);

    const keybindingsUpdate = list => {
      const keybindingsNew = {},
        keybindingsFallback = Object.assign({}, keybindingsDefault);

      for(let i = 0; i < list.length; i++) {
        const isRemove = list[i].command.substring(0, 1) == "-";
        const command = isRemove ? list[i].command.substring(1, list[i].command.length) : list[i].command;
        if (command in commandsList) {
          if (isRemove) {
            delete keybindings[command];
            delete keybindingsFallback[command];
            continue;
          }
          keybindingsNew[command] = list[i].key;
        }
      }
      for(let command in commandsList) {
        const key = keybindingsNew[command] || keybindingsFallback[command];
        if (!key)
          continue;
        //capitalize first letter
        keybindingsFallback[command] = key.replace(/\w+/g, w => (w.substring(0,1).toUpperCase()) + w.substring(1));
        //add spaces around "+"
        // keybindingsFallback[i] = keybindingsFallback[i].replace(/\+/g, " $& ");
        keybindings[command] = keybindingsFallback[command];
      }

      if (messages.error.killScript && (keybindings[commandsPrefix + "killScript"] || keybindings[commandsPrefix + "killScriptOpened"])) {
        messages.error.killScript.hide();
        delete messages.error.killScript;
      }
      promise.resolve(keybindingsFallback);
      promise.isResolved = true;
    };
    readFile();
  };
}

let hhproc;

function getTime() {
  return new Date().toLocaleString('sv', {hour:'numeric', minute:'numeric', second:'numeric', fractionalSecondDigits: 3}).replace(',', '.');
}

/*
window.activeTextEditor.document.fileName is not available in some situations
(like when runScript() executed in settings tab)
*/
function getActiveDocumentFile() {
  return window.activeTextEditor && window.activeTextEditor.document.fileName || "";
}

function procRunner(cmdPath, args, bAiOutReuse = true) {
  const thisFile = getActiveDocumentFile(),
    processCommand = cmdPath + " " + args,
    runnerPrev = bAiOutReuse && runners.findRunner({ status: false, thisFile, processCommand }),
    id = runnerPrev ? runnerPrev.info.id : ++runners.id,
    aiOutProcess = config.multiOutput
      ? runnerPrev && !runnerPrev.info.aiOut.void && runnerPrev.info.aiOut || window.createOutputChannel(`AutoIt #${id} (${thisFile})`, 'vscode-autoit-output')
      : new Proxy({}, { get() { return () => { }; } }),
    aiOut = new AiOut({ id, aiOutProcess }),
    info = runnerPrev && runnerPrev.info || {
      id,
      startTime: new Date().getTime(),
      endTime: 0,
      aiOut: aiOutProcess,
      thisFile,
      processCommand,
      status: true
    },
    exit = (code, text) => {
      aWrapperHotkey.reset(id);
      code = ~~code; //convert possible null into 0
      info.endTime = new Date().getTime();
      info.status = false;
      aiOut.flush();
      aiOut.appendLine((code > 1 || code < -1 ? "!" : code < 1 ? ">" : "-") + `>Exit code ${code}${text ? " (" + text + ")" : ""} Time: ${(info.endTime - info.startTime) / 1000}`);
      runners.cleanup();
//      runners.lastId = null;
    };
    if (!info._aiOut)
      info._aiOut = aiOut;

  if (runnerPrev) {
    if (runnerPrev.info.aiOut.void) //void won't be undefined when used proxy object
      runnerPrev.info.aiOut = aiOutProcess;

    clearTimeout(runnerPrev.info.timer);
    runnerPrev.info.startTime = new Date().getTime();
    info.status = true;
    if (config.clearOutput)
      aiOutProcess.clear(); //clear process output

    runners.lastId = 0; //force displaying ID
  }
  if (!config.multiOutput && config.clearOutput)
    aiOutCommon.clear();

  //  if (id == 1 || runners.isAiOutVisible()) //only switch output channel if autoit channel is opened now
  (config.multiOutput ? aiOutProcess : aiOutCommon).show(true);
  // Set working directory to AutoIt script dir so that compile and build
  // commands work right
  const workDir = path.dirname(thisFile);

  aWrapperHotkey.disable(id);
  const runner = spawn(cmdPath, args, {
    cwd: workDir,
  });
  //display process command line, adding quotes to file paths as it does in SciTE
  aiOut.appendLine(`Starting process #${id}\r\n"${cmdPath}" ${args.map((a, i, ar) => !i || ar[i - 1] == "/in" ? '"' + a + '"' : a).join(" ")} [PID ${runner.pid || "n/a"}]`);

  if (runnerPrev) {
    //since we are reusing output panel
    //we need update our list
    //Map() doesn't allow update/replace keys, we'll have to add new one and delete old.
    runners.list.set(runner, runnerPrev.info);
    runners.list.delete(runnerPrev.runner);
  }
  else {
    runners.list.set(runner, info);
  }
  // process failed to start
  if (!runner.pid) {
    exit(-2, "wrong path?");
    return runner;
  }

  runner.stdout.on('data', data => {
    const output = data.toString();
    aiOut.append(output);
  });

  runner.stderr.on('data', data => {
    const output = data.toString();
    aiOut.error(output);
  });

  runner.on('exit', exit);
  return runner;
}
workspace.onDidCloseTextDocument(doc => {
  if (!config.terminateRunningOnClose)
    return;

  if (runners.findRunner({ status: true, thisFile: doc.fileName }))
    killScript(doc.fileName);
});

const runScript = () => {
  const thisDoc = window.activeTextEditor.document; // Get the object of the text editor
  const thisFile = getActiveDocumentFile(); // Get the current file name
  if (!keybindings[commandsPrefix + "killScript"] && !keybindings[commandsPrefix + "killScriptOpened"]) {
    messages.error.killScript = showErrorMessage(`Please set "AutoIt: Kill Running Script" keyboard shortcut.`, { timeout: 30000 });
    return messages.error.killScript;
  }
  // Save the file
  thisDoc.save().then(isSaved => {
    if (thisDoc.isUntitled)
      return window.showErrorMessage(`"${thisFile}" file must be saved first!`);

    if (thisDoc.isDirty)
      showInformationMessage(`File failed to save, running saved file instead ("${thisFile}")`, { timeout: 30000 });

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
      ], config.multiOutput && config.multiOutputReuseOutput);
    } else {
      procRunner(config.aiPath, [config.wrapperPath, '/run', '/prod', '/ErrorStdOut', '/in', thisFile], config.multiOutput && config.multiOutputReuseOutput);
    }
  });
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
          const sources = config.smartHelp[i][2].split("|");

          for (let j = 0; j < sources.length; j += 1) {

            let filePath = sources[j];
            if (!fs.existsSync(filePath)) {
              filePath = findFilepath(filePath, true);
              if (!filePath) { continue; }
            }
            let text = getIncludeText(filePath);
            let found = text.match(regex);

            if (found) {
              if (hhproc) { hhproc.kill(); }
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
  let lineNbr = editor.selection.active.line;
  let currentLine = thisDoc.lineAt(lineNbr);
  const wordRange = editor.document.getWordRangeAtPosition(editor.selection.start);
  const varToDebug = (!wordRange) ? '' : thisDoc.getText(thisDoc.getWordRangeAtPosition(editor.selection.active));

  // Make sure that a variable or macro is selected
  if (varToDebug.charAt(0) === '$' || varToDebug.charAt(0) === '@') {
    const lineCount = thisDoc.lineCount - 2;
    const isContinue = /\s_\b\s*(;.*)?\s*/;

    if (!currentLine._isLastLine) {
      // Find first line without continuation character
      while (lineNbr <= lineCount) {
        let noContinue = (isContinue.exec(currentLine.text) === null);
        if (noContinue) { break; }

        lineNbr += 1;
        currentLine = thisDoc.lineAt(lineNbr);
      }
    }
    let endPos = currentLine.range.end.character;
    const newPosition = new Position(lineNbr, endPos);

    return {
      text: varToDebug,
      position: newPosition,
    };
  }
  window.showErrorMessage(
    `"${varToDebug}" is not a variable or macro, debug line can't be generated`
  );
  return {};
}

function getIndent() {
  const editor = window.activeTextEditor;
  const doc = editor.document;
  const line = doc.lineAt(editor.selection.active.line);

  if (line.isEmptyOrWhitespace) { return ''; }

  // Grab the whole line
  const text = line.text;
  // Get the indent of the current line
  const findIndent = /(\s*).+/;
  return findIndent.exec(text)[1];
}

const debugMsgBox = () => {
  const editor = window.activeTextEditor;

  const debugText = getDebugText();

  if (Object.keys(debugText).length) {
    const indent = getIndent();
    const debugCode = `\n${indent};### Debug MSGBOX ↓↓↓\n${indent}MsgBox(262144, 'Debug line ~' & @ScriptLineNumber, 'Selection:' & @CRLF & '${debugText.text}' & @CRLF & @CRLF & 'Return:' & @CRLF & ${debugText.text})`;

    // Insert the code for the MsgBox into the script
    editor.edit(edit => {
      edit.insert(debugText.position, debugCode);
    });
  }
};

const compileScript = () => {
  const thisDoc = window.activeTextEditor.document;
  const thisFile = getActiveDocumentFile();// Get the current file name

  // Save the file
  thisDoc.save().then(isSaved => {
    if (thisDoc.isUntitled)
      return window.showErrorMessage(`"${thisFile}" file must be saved first!`);

    if (thisDoc.isDirty)
     showInformationMessage(`File failed to save, using saved file instead ("${thisFile}")`, { timeout: 30000 });

    window.setStatusBarMessage('Compiling script...', 1500);

    // Launch the AutoIt Wrapper executable with the script's path
    procRunner(config.aiPath, [config.wrapperPath, '/ShowGui', '/prod', '/in', thisFile]);
  });
};

const tidyScript = () => {
  const thisDoc = window.activeTextEditor.document;
  const thisFile = getActiveDocumentFile();// Get the current file name

  // Save the file
  thisDoc.save().then(isSaved => {
    if (thisDoc.isUntitled)
      return window.showErrorMessage(`"${thisFile}" file must be saved first!`);

    if (thisDoc.isDirty)
      return window.showErrorMessage(`File failed to save ("${thisFile}")`);

    window.setStatusBarMessage(`Tidying script...${thisFile}`, 1500);

    // Launch the AutoIt Wrapper executable with the script's path
    procRunner(config.aiPath, [config.wrapperPath, '/Tidy', '/in', thisFile]);

  });
};

const checkScript = () => {
  const thisDoc = window.activeTextEditor.document;
  const thisFile = getActiveDocumentFile();// Get the current file name

  // Save the file
  thisDoc.save().then(isSaved => {
    if (thisDoc.isUntitled)
      return window.showErrorMessage(`"${thisFile}" file must be saved first!`);

    if (thisDoc.isDirty)
      return window.showErrorMessage(`File failed to save ("${thisFile}")`);

    window.setStatusBarMessage(`Checking script...${thisFile}`, 1500);

    // Launch the AutoIt Wrapper executable with the script's path
    procRunner(config.aiPath, [config.wrapperPath, '/AU3check', '/prod', '/in', thisFile]);
  });
};

const buildScript = () => {
  const thisDoc = window.activeTextEditor.document;
  const thisFile = getActiveDocumentFile();// Get the current file name

  // Save the file
  thisDoc.save().then(isSaved => {
    if (thisDoc.isUntitled)
      return window.showErrorMessage(`"${thisFile}" file must be saved first!`);

    if (thisDoc.isDirty)
      showInformationMessage(`File failed to save, using saved file instead ("${thisFile}")`, { timeout: 30000 });

    window.setStatusBarMessage('Building script...', 1500);

    // Launch the AutoIt Wrapper executable with the script's path
    procRunner(config.aiPath, [config.wrapperPath, '/NoStatus', '/prod', '/in', thisFile]);
  });
};

const debugConsole = () => {
  const editor = window.activeTextEditor;
  const debugText = getDebugText();

  if (Object.keys(debugText).length) {
    const indent = getIndent();
    const debugCode = `\n${indent};### Debug CONSOLE ↓↓↓\n${indent}ConsoleWrite('@@ Debug(' & @ScriptLineNumber & ') : ${debugText.text} = ' & ${debugText.text} & @CRLF & '>Error code: ' & @error & @CRLF)`;

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
  const data = runners.findRunner({ status: true, thisFile });
  if (!data) {
    const file = thisFile ? " (" + thisFile.split("\\").splice(-2, 2).join("\\") + ") " : " ";
    showInformationMessage(`No script${file}currently is running.`, { timeout: 10000 });
    return;
  }

  window.setStatusBarMessage('Stopping the script...', 1500);
  data.runner.stdin.pause();
  data.runner.kill();
};

const killScriptOpened = () => {
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
      const library = found[0].includes("<");
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
  const { runner, info } = runners.lastRunningOpened || {};
  if (runner) {
    runner.on('exit', () => {
      if (info.callback) {
        clearTimeout(info.timer);
        info.callback();
      }
      runScript();
    });
    if (info.status) return killScript(info.thisFile);
  }
  runScript();
};

export {
  buildScript as build,
  changeConsoleParams as changeParams,
  checkScript as check,
  compileScript as compile,
  debugConsole,
  debugMsgBox,
  killScript,
  killScriptOpened,
  launchHelp,
  launchInfo,
  launchKoda,
  runScript,
  tidyScript as tidy,
  openInclude,
  insertHeader,
  restartScript,
};
