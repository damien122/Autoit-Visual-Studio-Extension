var {
    window,
    Position,
    workspace
} = require('vscode');
var launch = require('child_process').execFile;
const spawn = require('child_process').spawn;
var path = require('path');
var configuration = workspace.getConfiguration('autoit');

// Executable paths
const aiPath = configuration.aiPath;
const wrapperPath = configuration.wrapperPath;
const tidyPath = configuration.tidyPath;
const checkPath = configuration.checkPath;
const helpPath = configuration.helpPath;
const infoPath = configuration.infoPath;
const kodaPath = configuration.kodaPath;



var aiOut = window.createOutputChannel('AutoIt');

let runner

module.exports = {

    runScript: () => {
        var thisDoc = window.activeTextEditor.document; // Get the object of the text editor
        var thisFile = thisDoc.fileName; // Get the current file name

        // Save the file
        thisDoc.save();

        let params = workspace.getConfiguration('autoit').get('consoleParams')

        window.setStatusBarMessage("Running the script...", 1500);

        if (params) {

            let paramArray = params.match(/[\w-\/]+|"[^"]+"/g) // split the string by space or quotes
            let i = paramArray.length

            console.log(paramArray)

            while (i--) {
                paramArray[i] = paramArray[i].replace(/"/g, "") // remove the quotes
            }

            procRunner(aiPath, [wrapperPath, '/run', '/prod', '/ErrorStdOut', '/in', thisFile, '/UserParams', ...paramArray]);
        } else {
            procRunner(aiPath, [wrapperPath, '/run', '/prod', '/ErrorStdOut', '/in', thisFile]);
        }
    },

    launchHelp: () => {
        var editor = window.activeTextEditor;

        // Get the selected text and launch it
        var doc = editor.document
        var query = doc.getText(doc.getWordRangeAtPosition(editor.selection.active));

        window.setStatusBarMessage(`Searching documentation for ${query}`, 1500);

        launch(helpPath, [query]);
    },

    launchInfo: () => {
        launch(infoPath);
    },

    debugMsgBox: () => {
        var editor = window.activeTextEditor;
        var indent;

        var debugText = getDebugText();

        indent = getIndent()

        if (debugText) {
            var debugCode = `${indent};### Debug MSGBOX ↓↓↓\n${indent}MsgBox(262144, 'Debug line ~' & @ScriptLineNumber, 'Selection:' & @CRLF & '${debugText.text}' & @CRLF & @CRLF & 'Return:' & @CRLF & ${debugText.text})\n`;

            //Insert the code for the MsgBox into the script
            editor.edit(edit => {
                edit.insert(debugText.position, debugCode);
            });
        }
    },

    compileScript: () => {
        // Save the file
        window.activeTextEditor.document.save();
        // Get the current file name
        var thisFile = window.activeTextEditor.document.fileName;

        window.setStatusBarMessage('Compiling script...', 1500);


        // Launch the AutoIt Wrapper executable with the script's path
        procRunner(aiPath, [wrapperPath, '/ShowGui', '/prod', '/in', thisFile]);
    },


    tidyScript: () => {
        // Save the file
        window.activeTextEditor.document.save();
        // Get the current file name
        var thisFile = window.activeTextEditor.document.fileName;

        window.setStatusBarMessage('Tidying script...' + thisFile, 1500);

        // Launch the AutoIt Wrapper executable with the script's path
        procRunner(tidyPath, [thisFile]);
    },

    checkScript: () => {
        // Save the file
        window.activeTextEditor.document.save();
        // Get the current file name
        var thisFile = window.activeTextEditor.document.fileName;

        window.setStatusBarMessage('Checking script...' + thisFile, 1500);

        // Launch the AutoIt Wrapper executable with the script's path
        procRunner(checkPath, [thisFile]);
    },

    buildScript: () => {
        // Save the file
        window.activeTextEditor.document.save();
        // Get the current file name
        var thisFile = window.activeTextEditor.document.fileName;

        window.setStatusBarMessage('Building script...', 1500);

        // Launch the AutoIt Wrapper executable with the script's path
        procRunner(aiPath, [wrapperPath, '/NoStatus', '/prod', '/in', thisFile]);
    },

    debugConsole: () => {
        var editor = window.activeTextEditor;
        var indent;

        var debugText = getDebugText();

        indent = getIndent()

        if (debugText) {
            var debugCode = `${indent};### Debug CONSOLE ↓↓↓\n${indent}ConsoleWrite('@@ Debug(' & @ScriptLineNumber & ') : ${debugText.text} = ' & ${debugText.text} & @CRLF & '>Error code: ' & @error & @CRLF)\n`;

            //Insert the code for the MsgBox into the script
            editor.edit(edit => {
                edit.insert(debugText.position, debugCode);
            });
        }
    },

    launchKoda: () => {
        //Launch Koda Form Designer(FD.exe)
        procRunner(kodaPath);
    },

    changeConsoleParams: () => {
        let currentParameters = workspace.getConfiguration('autoit').get('consoleParams')

        window.showInputBox({
            placeHolder: `param "param with spaces" 3`,
            value: currentParameters,
            prompt: "Enter space-separated parameters to send to the command line when scripts are run. Wrap single parameters with one or more spaces with quotes."
        }).then((input) => {
            if (input == undefined) { // Preserve standing console parameters if input is cancelled
                input = currentParameters
            }

            configuration.update('consoleParams', input, false).then(()=> {
                let params = workspace.getConfiguration('autoit').get('consoleParams')

                let message = params ? `Current console parameter(s): ${params}` : `Console parameter(s) have been cleared.`

                window.showInformationMessage(message)
            })
        })
    },

    killScript: () => {
        runner.stdin.pause()
        runner.kill()
    }
};

function procRunner(cmdPath, args) {
    aiOut.clear();
    aiOut.show(true);

    // Set working directory to AutoIt script dir so that compile and build
    // commands work right
    var workDir = path.dirname(window.activeTextEditor.document.fileName);

    runner = spawn(cmdPath, args, {
        cwd: workDir
    });

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
    var thisDoc = editor.document
    var varToDebug = thisDoc.getText(
        thisDoc.getWordRangeAtPosition(editor.selection.active)
    )

    // Make sure that a variable or macro is selected
    if (varToDebug.charAt(0) === '$' || varToDebug.charAt(0) === '@') {
        var nextLine = editor.selection.active.line + 1;
        var newPosition = new Position(nextLine, 0);

        return {
            text: varToDebug,
            position: newPosition
        };
    } else {
        window.showErrorMessage(`"${varToDebug}" is not a variable or macro, debug line can't be generated`);
        return {};
    }
}

function getIndent() {
    var editor = window.activeTextEditor;
    var doc = editor.document;

    // Grab the whole line
    var currentLine = doc.lineAt(editor.selection.active.line).text
    // Get the indent of the current line
    var findIndent = /(\s*).+/
    return findIndent.exec(currentLine)[1]
}
