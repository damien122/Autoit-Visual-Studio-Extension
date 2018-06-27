# AutoIt-VSCode Changelog

## 0.2.1
* Added "setupudf" snippet

## 0.2.0
* Fixed the word pattern for the extension
* Improved formatting for some parameter documentation in signature helpers
* Made hovers case-insensitive

## 0.1.9
* Completions and Signature Helpers for files relative to include folders (e.g., `#include <Test.au3>`) are now provided
    * Defaults to searching in C:\Program Files (x86)\AutoIt3\Include, more can be added in User Settings
* Output window now clears on each Run, Compile or Build
* Implemented Workspace/Folder-wide Symbol Search (`Ctrl+T`)
* Upgraded Windows Message Codes from snippets to Completions
* Updated UDF file location for functions moved in latest AutoIt update (v3.3.14.3) 
* Added configuration option to hide variables when using Ctrl+Shift+O to view symbols
* Fixed word definitions to clear up highlighting/selection inconsistencies 

## 0.1.8
* Improved function signature helpers
    * Parameter position in function has much improved detection (no longer tripped up by commas in quotes)
    * Help for nested functions now work
    * Parameter descriptions have been upgraded with Markdown for better styling and layout
* Upgraded many snippets to Completions

## 0.1.7
* Updated ReadMe with links and more information about shortcuts and configuration
* Improved handling of functions from include scripts
* Debug Console and MsgBox can now be inserted solely with the cursor on the variable
* Symbol search now catches multiple variables declared on the same line
* Added and optimized #include snippets for all default scripts
* Converted some keyword snippets into IntelliSense completions

## 0.1.6
* The extension can now read in functions from user-specified include files and provide completion IntelliSense hints for them
* Added internal function parameters to IntelliSense (they are not yet limited to appearing in the scope of the function)
* Added configuration a path to launch Koda including an "Alt+M" shortcut
* Adjusted snippet code to better follow VS Code syntax

## 0.1.5
More IntelliSense!
* Added in function signature helpers (parameter info)
* AutoIt commands and keybindings now only show/activate in AutoIt files
* Debug MsgBoxes and Debug Consoles now match the indent of the line that they're generated from

## 0.1.4
* Added configuration for path to Au3Info

## 0.1.3
* Added AutoIt Configuration in Visual Studio Code Preferences.

## 0.1.2
The IntelliSense release!
* Hovers have been added for all UDFs
* Implementation of Completion Items has begun (Function, Macro and Variable suggestions will now have different icons)
* Symbol search added, press Ctrl+Shift+O to see where Functions and Variables have been declared in scripts

## 0.1.1
* You can now run a Syntax check and the Tidy tool
* You can now launch AutoIt Help by simply placing the cursor on functions and macros (complete selection no longer required)
* Even more hovers for UDFs
* Bugfix for commands that run through AutoIt3Wrapper (e.g. Build should make executables correctly now)

## 0.1.0
* Running, compiling and building now generate output live
* Added the ability to create console debug lines for highlighted variables and macros with Alt+D
* Added hovers for all macros, basic AutoIt functions and Array UDFs

## 0.0.9
* Running, compiling and building will now require the full install of SciTE4AutoIt3 (found [here](https://www.autoitscript.com/site/autoit-script-editor/downloads/)) in the default install location
* Changed compile command to closer reflect SciTe4AutoIt3 version (Opens GUI)
* Implemented build command, which works similar to previous compile command
* Added console output for running, compiling and building scripts
* Run, compile and build commands exit early if current file isn't AutoIt
* Implemented the hover feature and the first few hovers

## 0.0.8
* Implemented an option to compile scripts (Currently the AutoIt3Wrapper folder must be present in the "C:\Program Files (x86)\AutoIt3\SciTE" directory)
* Structure adjustment of the extension.
* Added more snippets.

## 0.0.6
* Added the ability to generate a debug MsgBox for a highlighted variable or macro with Ctrl+Shift+D.
* Added icon, banner color and description for marketplace.