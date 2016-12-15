// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var launch = require('child_process').execFile;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    var aiPath = "C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe"
    var helpPath = "C:\\Program Files (x86)\\AutoIt3\\AutoIt3Help.exe"
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('AutoIt is now active!');

    var runScript = vscode.commands.registerCommand('extension.runScript', function () {
        
        //Save the file
        vscode.window.activeTextEditor.document.save();
        //Get the current file name
        var thisFile = vscode.window.activeTextEditor.document.fileName;
        //Launch the AutoIt executable with the script's path
        launch(aiPath, [thisFile], (err, stdout, stderr) => {
            if (err) {
                vscode.window.showErrorMessage(err);
                return;
            }
        });
    });

    var launchHelp = vscode.commands.registerCommand('extension.launchHelp', function () {
        
        var editor = vscode.window.activeTextEditor;

        if (!editor) {
            return; // No open text editor
        }

        //Get selected text and launch it
        var selection = editor.selection;
        var query = editor.document.getText(selection);

        vscode.window.setStatusBarMessage("Searching documentation for " 
            + query, 1500);

        launch(helpPath, [query]);
    });

    var launchInfo = vscode.commands.registerCommand('extension.launchInfo', function () {

        launch('C:\\Program Files (x86)\\AutoIt3\\Au3Info.exe')
    });

    //Debug MsgBox
    var debugMsgBox = vscode.commands.registerCommand('extension.debugMsgBox', function () {
        var editor = vscode.window.activeTextEditor;

        if  (!editor) {
            return; // No open text editor
        }

        var selection = editor.selection;
        var varToDebug = editor.document.getText(selection);
        //Make sure that a variable is selected
        if (varToDebug.charAt(0) !== "$") {
            vscode.window.showErrorMessage("Select a variable to generate a Debug MessageBox");
            return;
        } else {
            // Get the line for the new MsgBox
            var nextLine = editor.selection.active.line + 1;
            // vscode.window.showInformationMessage(currentLine + " is the current line");

            editor.edit(edit => {
                edit.insert(new vscode.Position(nextLine, 0), 
                "MsgBox(262144, 'Debug line ~' & @ScriptLineNumber - 1, 'Selection:' & @CRLF & '${varToDebug}' & @CRLF & @CRLF & 'Return:' & @CRLF & " + varToDebug + ") ;### Debug MSGBOX \n")
            });
        }
        


    });

    context.subscriptions.push(runScript);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;