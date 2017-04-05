var { window, Position } = require('vscode');
var launch = require('child_process').execFile;
const spawn = require('child_process').spawn;
var path = require('path');

// Executable paths
const aiPath = "C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe";
const wrapperPath = "C:\\Program Files (x86)\\AutoIt3\\SciTE\\AutoIt3Wrapper\\AutoIt3Wrapper.au3";
const tidyPath = "C:\\Program Files (x86)\\AutoIt3\\SciTE\\Tidy\\Tidy.exe";
const checkPath = "C:\\Program Files (x86)\\AutoIt3\\AU3Check.exe";
var helpPath = "C:\\Program Files (x86)\\AutoIt3\\AutoIt3Help.exe";

var aiOut = window.createOutputChannel('AutoIt');

module.exports = {
    
    runScript: () => {
        var thisDoc = window.activeTextEditor.document; // Get the object of the text editor
        var thisFile = thisDoc.fileName; // Get the current file name

        if (!isAutoIt()) {
            console.error("Not an AutoIt file!");
            return;
        }
        
        // Save the file
        thisDoc.save();

        window.setStatusBarMessage("Running the script...", 1500);
                
        procRunner(aiPath,[wrapperPath, '/run', '/prod', '/ErrorStdOut', '/in', 
            thisFile, '/UserParams', '$(1)', '$(2)', '$(3)', '$(4)']);
    },

    launchHelp: () => {
        var editor = window.activeTextEditor;

        if (!editor) {
            return; // No open text editor
        }

        // Get the selected text and launch it
        var doc = editor.document
        var query = doc.getText(doc.getWordRangeAtPosition(editor.selection.active));

        window.setStatusBarMessage(`Searching documentation for ${query}`, 1500);

        launch(helpPath, [query]);
    },

    launchInfo: () => {
        launch('C:\\Program Files (x86)\\AutoIt3\\Au3Info.exe');   
    },

    debugMsgBox: () => {
        var editor = window.activeTextEditor;

        if (!editor) {
            return; // No open editor
        }

        var selection = editor.selection;
        var varToDebug = editor.document.getText(selection).trim();

        var debugText = getDebugText();

        if (debugText) {
            var debugCode = `\n;### Debug MSGBOX ↓↓↓\nMsgBox(262144, 'Debug line ~' & @ScriptLineNumber, 'Selection:' & @CRLF & '${debugText.text}' & @CRLF & @CRLF & 'Return:' & @CRLF & ${debugText.text})\n`;

            //Insert the code for the MsgBox into the script
            editor.edit(edit => {
                edit.insert(debugText.position, debugCode);
            });
        }
    },

    compileScript: () => {
        if (!isAutoIt()) {
            console.error("Not an AutoIt file!");
            return;
        }
        
        // Save the file
        window.activeTextEditor.document.save();
        // Get the current file name
        var thisFile = window.activeTextEditor.document.fileName;

        window.setStatusBarMessage('Compiling script...', 1500);

              
        // Launch the AutoIt Wrapper executable with the script's path
        procRunner(aiPath,[wrapperPath, '/ShowGui', '/prod', '/in', thisFile]);
    },


    tidyScript: () => {
        if (!isAutoIt()) {
            console.error("Not an AutoIt file!");
            return;
        }
        
        // Save the file
        window.activeTextEditor.document.save();
        // Get the current file name
        var thisFile = window.activeTextEditor.document.fileName;

        window.setStatusBarMessage('Tidying script...' + thisFile, 1500);
              
        // Launch the AutoIt Wrapper executable with the script's path
        procRunner(tidyPath,[thisFile ]);
    },

    checkScript: () => {
        if (!isAutoIt()) {
            console.error("Not an AutoIt file!");
            return;
        }
        
        // Save the file
        window.activeTextEditor.document.save();
        // Get the current file name
        var thisFile = window.activeTextEditor.document.fileName;

        window.setStatusBarMessage('Checking script...' + thisFile, 1500);
              
        // Launch the AutoIt Wrapper executable with the script's path
        procRunner(checkPath,[thisFile ]);
    },

    buildScript: () => {
        if (!isAutoIt()) {
            console.error("Not an AutoIt file!");
            return;
        }

        // Save the file
        window.activeTextEditor.document.save();
        // Get the current file name
        var thisFile = window.activeTextEditor.document.fileName;

        window.setStatusBarMessage('Building script...', 1500);
        
        // Launch the AutoIt Wrapper executable with the script's path
        procRunner(aiPath,[wrapperPath, '/NoStatus', '/prod', '/in', thisFile]);   
    },

    debugConsole: () => {
        var editor = window.activeTextEditor;

        if (!editor) {
            return; // No open editor
        }

        var debugText = getDebugText();

        if (debugText) {
            var debugCode = `\n;### Debug CONSOLE ↓↓↓\nConsoleWrite('@@ Debug(' & @ScriptLineNumber & ') : ${debugText.text} = ' & ${debugText.text} & @CRLF & '>Error code: ' & @error & @CRLF)\n`;

            //Insert the code for the MsgBox into the script
            editor.edit(edit => {
                edit.insert(debugText.position, debugCode);
            });
        }
    }
};

function isAutoIt() {
    if (window.activeTextEditor.document.fileName.indexOf('.au3') > -1) {
        return true;
    } else {
        return false;
    }
};

function procRunner(cmdPath,args) {
    aiOut.show(true);
    
    // Set working directory to AutoIt script dir so that compile and build
    // commands work right
    var workDir = path.dirname(window.activeTextEditor.document.fileName);
    
    var runner = spawn(cmdPath, args, { cwd: workDir });

    runner.stdout.on('data', (data) => {
            var output = data.toString();
            console.log(output);
            aiOut.append(output);
        });

        runner.stderr.on('data', (data) => {
            var output = data.toString();
            console.log(output);
            aiOut.append(output);
        });

        runner.on('exit', (code) => {
            console.log(`Process exited with code ${code}`);
            aiOut.appendLine(`Process exited with code ${code}`);
    });
}

function getDebugText() {
    var editor = window.activeTextEditor;

    if (!editor) {
        return; // No open editor
    }

    var selection = editor.selection;
    var varToDebug = editor.document.getText(selection).trim();

    // Make sure that a variable or macro is selected
    if (varToDebug.charAt(0) === '$' || varToDebug.charAt(0) === '@') {
        var nextLine = editor.selection.active.line + 1;
        var newPosition = new Position(nextLine, 0);

        return {text: varToDebug, position: newPosition};
    } else {
        window.showErrorMessage("Select variable or macro to generate a debug line");
        return {};
    }
}