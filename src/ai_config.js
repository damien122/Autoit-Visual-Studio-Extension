
import { workspace, Uri, FileType} from 'vscode';
import { showInformationMessage, showErrorMessage } from './ai_showMessage';
const conf = {
  data: workspace.getConfiguration('autoit'),
  defaultPaths:{
    aiPath: {file: "AutoIt3.exe"},
    wrapperPath: {dir: "SciTE\\AutoIt3Wrapper\\", file: "AutoIt3Wrapper.au3"},
    checkPath: {file: "AU3Check.exe"},
    helpPath: {file: "AutoIt3Help.exe"},
    infoPath: {file: "Au3Info.exe"},
    kodaPath: {dir: "SciTE\\Koda\\", file: "FD.exe"},
    includePaths: [{dir: ""}],
    smartHelp: {check: {dir: "Advanced.Help\\HelpFiles\\", file: ""}}
  }
};

const listeners = new Map();
let listenerId = 0, aiPath = "", _noEvents;
workspace.onDidChangeConfiguration(({ affectsConfiguration }) => {
  if (_noEvents || !affectsConfiguration('autoit')) return;

  conf.data = workspace.getConfiguration('autoit');
  listeners.forEach(listener => {
    try{listener();}catch(er){console.error(er);}
  });
  getPaths();
});

getPaths();

function addListener(listener) {
  listeners.set(++listenerId, listener);
  return listenerId;
}

function removeListener(id) {
  listeners.remove(id);
}

function splitPath(path) {
  path = path.trim().match(/^(.*[\\/])?([^\\/]+)?$/).map(a => a || "");

  return {
    path: path[0],
    dir: path[1] + (path[1] === "" ? "" : "\\"),
    file: path[2],
    isRelative: !!(path[1] && !path[1].match(/^[a-zA-Z]:[\\/]/))
  };
}

function fixPath (value, data) {
  const path = splitPath(value || "");
  const file = data.file;
  const dir = data.dir;
  if (path.file === "")
    path.file = file || "";

  if (path.dir === "" || path.isRelative)
    path.dir = aiPath.dir + path.dir + (!path.isRelative ? (dir || "") : "");
  
  if (file === undefined)
    path.file += "/";

  return (path.dir + "/" + path.file).replace(/[\\/]+/g, "\\");
}

function verifyPath (path, data, msgSuffix) {
  const showError = () => {
    const timeout = data.message && !data.message.isHidden ? 1000 : 0;
    if (timeout) {
      data.message.hide();
      delete data.message;
    }
    if (data.prevCheck !== path) {
      const type = data.file !== undefined ? "File" : "Directory";
      setTimeout(() => data.message = showErrorMessage(`${type} "${data.fullPath}" not found (autoit.${msgSuffix})`), timeout);
    }

    data.prevCheck = path;
  };

  workspace.fs.stat(Uri.parse(`file:///${data.fullPath}`)).then(stats => {
    const type = (data.file !== undefined ? FileType.File : FileType.Directory) | FileType.SymbolicLink;
    if (!(stats.type & type))
      return showError();

    if (data.message) {
      data.message.hide();
      delete data.message;
    }
    data.prevCheck = path;

  }).catch(() => {
    showError();
  });
}

function updateFullPath(path, data, msgSuffix)
{
  if (path !== "")
    data.fullPath = fixPath(path, data);

  if (data.fullPath === undefined)
    data.fullPath = "";

  verifyPath(path, data, msgSuffix);
}

function getPaths() {
  aiPath = splitPath(conf.data.aiPath||"");

  for(let i in conf.defaultPaths) {
    const defaultPath = conf.defaultPaths[i],
      confValue = conf.data[i];

    if (i == "smartHelp") {
      if (Array.isArray(confValue))//convert array-based old config into new object-based
        return upgradeSmartHelpConfig();

      defaultPath.fullPath = {};
      for (let prefix in confValue) {

        const val = confValue[prefix];
        if (prefix == "_yourUdfFuncPrefix_" || typeof val.chmPath !== "string" || (typeof val.udfPath !== "string" && !Array.isArray(val.udfPath)))
          continue;

        const chmPath = val.chmPath.trim(),
          data = Object.assign({fullPath: ""}, defaultPath.check),
          udfPath = Array.isArray(val.udfPath) ? [...val.udfPath] : val.udfPath.split("|"),
          msgSuffix = `${i}.${prefix}`;

        updateFullPath(chmPath, data, `${msgSuffix}.chmPath`);

        for(let k = 0; k < udfPath.length; k++)
        {
          const data = Object.assign({fullPath: ""}, defaultPath.check);
          updateFullPath(udfPath[k], data, `${msgSuffix}.udfPath[${k}]`);
          udfPath[k] = data.fullPath;
        }
        defaultPath.fullPath[prefix] = {
          chmPath: data.fullPath,
          udfPath: udfPath
        };
      }
    }
    else if (Array.isArray(confValue)) {
      for (let j = 0; j < confValue.length; j++ ) {
        const path = (typeof confValue[j] == 'string' ? confValue[j] : '').trim();

        if (defaultPath[j] === undefined)
          defaultPath[j] = Object.assign({fullPath: ""}, defaultPath[0].check);
  
        updateFullPath(path, defaultPath[j], `${i}[${j}]`);
      }
    }
    else {
      defaultPath.fullPath = fixPath(confValue, defaultPath);
      verifyPath(confValue, defaultPath, i);
    }
  }
}

function upgradeSmartHelpConfig() {
  const data = conf.data.smartHelp,
    inspect = conf.data.inspect("smartHelp"),
    props = {
      workspaceFolderLanguageValue: [null, true],
      workspaceLanguageValue: [false, true],
      globalLanguageValue: [true, true],
      defaultLanguageValue: [null, true],
      workspaceFolderValue: [],
      workspaceValue: [false],
      globalValue: [true],
      defaultValue: []
    };

  let ret = {}, ConfigurationTarget, overrideInLanguage;
  for(let i in props) {
    if (inspect[i] !== undefined) {
      [ConfigurationTarget, overrideInLanguage] = props[i];
      break;
    }
  }
  if (Array.isArray(data)) {
    for(let i = 0; i < data.length; i++) {
      ret[data[i][0]] = {
        chmPath: data[i][1],
        udfPath: data[i][2].split("|")
      };
    }
  }
  if (!Object.keys(ret).length || typeof data == "string")
    ret = undefined;

  conf.data.update("smartHelp", ret, ConfigurationTarget, overrideInLanguage);
}

function noEvents(value)
{
  _noEvents = value;
}

const config = new Proxy(conf, {
  get(target, prop) {
    const val = target.defaultPaths[prop];
    if (val) {
      const isArray = Array.isArray(val);
      if (isArray || (val !== null && typeof val == "object"))
        return isArray ? val.map(a => a.fullPath) : val.fullPath;

      return val.fullPath;
    }
    return val;
  },
  set(target, prop, val) { return target.data.update(prop, val); }
});

export default {
  config,
  addListener,
  removeListener,
  noEvents
};
