import { workspace, Uri, FileType } from 'vscode';
import { showInformationMessage, showErrorMessage } from './ai_showMessage';

const conf = {
  data: workspace.getConfiguration('autoit'),
  paths: {
    aiPath: { file: "AutoIt3.exe" },
    wrapperPath: { dir: "SciTE\\AutoIt3Wrapper\\", file: "AutoIt3Wrapper.au3" },
    checkPath: { file: "AU3Check.exe" },
    helpPath: { file: "AutoIt3Help.exe" },
    infoPath: { file: "Au3Info.exe" },
    kodaPath: { dir: "SciTE\\Koda\\", file: "FD.exe" },
    includePaths: [{ dir: "" }],
    smartHelp: [{ dir: "", file: "" }]
  }
};

const listeners = new Map();
let listenerId = 0, aiPath = "";
workspace.onDidChangeConfiguration(({ affectsConfiguration }) => {
  if (!affectsConfiguration('autoit')) return;

  conf.data = workspace.getConfiguration('autoit');
  listeners.forEach(listener => {
    try { listener(); } catch (er) { console.error(er); }
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

function fixPath(key, value, index) {
  const path = splitPath(value || "");
  const file = (conf.paths[key][index] || conf.paths[key]).file;
  const dir = (conf.paths[key][index] || conf.paths[key]).dir;
  if (path.file === "")
    path.file = file || "";

  if (path.dir === "" || path.isRelative)
    path.dir = aiPath.dir + path.dir + (!path.isRelative ? (dir || "") : "");

  if (file === undefined)
    path.file += "/";

  return (path.dir + "/" + path.file).replace(/[\\/]+/g, "\\");
}

function verifyPath(val, obj, key, index) {
  const showError = () => {
    const timeout = obj.message && !obj.message.isHidden ? 1000 : 0;
    if (timeout) {
      obj.message.hide();
      delete obj.message;
    }

    if (obj.prevCheck !== val) {
      const type = (conf.paths[key][index] || conf.paths[key]).file !== undefined ? "File" : "Directory";
      setTimeout(() => obj.message = showErrorMessage(`${type} "${obj.fullPath}" not found (autoit.${key}${index === undefined ? '' : ` [${index}]`})`), timeout);
    }

    obj.prevCheck = val;
  };

  workspace.fs.stat(Uri.parse(`file:///${obj.fullPath}`)).then(data => {
    const type = ((conf.paths[key][index] || conf.paths[key]).file !== undefined ? FileType.File : FileType.Directory) | FileType.SymbolicLink;
    if (!(data.type & type))
      return showError();

    if (obj.message) {
      obj.message.hide();
      delete obj.message;
    }
    obj.prevCheck = val;

  }).catch(() => {
    showError();
  });
}

function getPaths() {
  aiPath = splitPath(conf.data.aiPath || "");

  for (let i in conf.paths) {
    const value = conf.data[i];
    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; j++) {
        const val = typeof value[j] === 'string' ? value[j].trim() : '';
        if (conf.paths[i][j] === undefined)
          conf.paths[i][j] = Object.assign({ fullPath: "" }, conf.paths[i][0]);

        const obj = conf.paths[i][j];

        if (val !== "")
          obj.fullPath = fixPath(i, val, j);

        if (obj.fullPath === undefined)
          obj.fullPath = "";

        verifyPath(val, obj, i, j);
      }
    }
    else {
      const obj = conf.paths[i];
      obj.fullPath = fixPath(i, value);
      verifyPath(value, obj, i);
    }

  }
}
const config = new Proxy(conf,
  {
    get(target, prop) {
      if (target.paths[prop]) {
        if (Array.isArray(target.paths[prop])) return target.paths[prop].map(a => a.fullPath);

        return target.paths[prop].fullPath;
      }
      return target.data[prop];
    },
    set(target, prop, val) { return target.data.update(prop, val); }
  });

export default {
  config,
  addListener,
  removeListener
};