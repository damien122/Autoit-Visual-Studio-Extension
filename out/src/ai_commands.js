var { window, Position } = require('vscode');
var launch = require('child_process').execFile;

// Executable paths
const aiPath = "C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe";
const wrapperPath = "C:\\Program Files (x86)\\AutoIt3\\SciTE\\AutoIt3Wrapper\\AutoIt3Wrapper.au3";
var helpPath = "C:\\Program Files (x86)\\AutoIt3\\AutoIt3Help.exe";

module.exports = {
    
    runScript: () => {
        var thisDoc = window.activeTextEditor.document; // Get the object of the text editor
        var thisFile = thisDoc.fileName; // Get the current file name
        
        // Save the file
        thisDoc.save();

        window.setStatusBarMessage("Running the script...", 1500);
        // Launch the AutoIt executable with the script's path
        launch(aiPath, [thisFile, '/run', '/prod', '/ErrorStdOut', '/in'], (err, stdout, stderr) => {
            if (err) {
                window.showErrorMessage(err);
                console.error(stderr);
                return;
            }
            
            console.log(stdout);
        });
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
        // Save the file
        window.activeTextEditor.document.save();
        // Get the current file name
        var thisFile = window.activeTextEditor.document.fileName;

        // Launch the AutoIt Wrapper executable with the script's path
        launch(aiPath, [wrapperPath, '/prod', '/in', thisFile], (err, stdout, stderr) => {
            if (err) {
                window.showErrorMessage(stderr);
                console.error(stderr);
                return;
            }
            console.log(stdout);
        });
    }
};