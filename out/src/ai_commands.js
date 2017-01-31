var { window, Position } = require('vscode');
var launch = require('child_process').execFile;
const spawn = require('child_process').spawn;

// Executable paths
const aiPath = "C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe";
const wrapperPath = "C:\\Program Files (x86)\\AutoIt3\\SciTE\\AutoIt3Wrapper\\AutoIt3Wrapper.au3";
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
                
        procRunner([wrapperPath, '/run', '/prod', '/ErrorStdOut', '/in', 
            thisFile, '/UserParams', '$(1)', '$(2)', '$(3)', '$(4)']);
    },

    launchHelp: () => {
        var editor = window.activeTextEditor;

        if (!editor) {
            return; // No open text editor
        }

        // Get the selected text and launch it
        var selection = editor.selection;
        var query = editor.document.getText(selection).trim();

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

        // Make sure that a variable or macro is selected
        if (varToDebug.charAt(0) === '$' || varToDebug.charAt(0) === '@') {
            // Get the value of the next line after selected variable for the new MsgBox
            var nextLine = editor.selection.active.line + 1;
            var newPosition = new Position(nextLine, 0);

            var debugCode = "MsgBox(262144, 'Debug line ~' & @ScriptLineNumber - 1, 'Selection:' & @CRLF & '";
            debugCode +=  varToDebug + "' & @CRLF & @CRLF & 'Return:' & @CRLF & " + varToDebug;
            debugCode += ") ;### Debug MSGBOX\n";

            // Insert the code for the MsgBox into the script
            editor.edit(edit => {
                edit.insert(newPosition, debugCode);
            });
        } else {
            window.showErrorMessage("Select variable or macro to generate a Debug MsgBox");
            return;
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
        procRunner([wrapperPath, '/ShowGui', '/prod', '/in', thisFile]);
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
        procRunner([wrapperPath, '/NoStatus', '/prod', '/in', thisFile]);   
    }
};

function isAutoIt() {
    if (window.activeTextEditor.document.fileName.indexOf('.au3') > -1) {
        return true;
    } else {
        return false;
    }
};

function procRunner(args) {
    aiOut.show(true);

    var runner = spawn(aiPath, args);

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