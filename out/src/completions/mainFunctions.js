'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: 'Abs',
        documentation: 'Calculates the absolute value of a number.',
        insertText: 'Abs(${})'
    },
    {
        label: 'ACos',
        documentation: 'Calculates the arcCosine of a number.',
        insertText: 'ACos(${})'
    },
    {
        label: 'AdlibRegister',
        documentation: 'Registers an Adlib function.',
        insertText: 'AdlibRegister(${})'
    },
    {
        label: 'ASin',
        documentation: 'Calculates the arcsine of a number.',
        insertText: 'ASin(${})'
    },
    {
        label: 'Assign',
        documentation: 'Assigns a variable by name with the data.',
        insertText: 'Assign(${})'
    },
    {
        label: 'ATan',
        documentation: 'Calculates the arctangent of a number.',
        insertText: 'ATan(${})'
    },
    {
        label: 'AutoItSetOption',
        documentation: 'Changes the operation of various AutoIt functions/parameters.',
        insertText: 'AutoItSetOption(${})'
    },
    {
        label: 'AutoItWinGetTitle',
        documentation: 'Retrieves the title of the AutoIt window.',
        insertText: 'AutoItWinGetTitle(${})'
    },
    {
        label: 'AutoItWinSetTitle',
        documentation: 'Changes the title of the AutoIt window.',
        insertText: 'AutoItWinSetTitle(${})'
    },
    {
        label: 'Beep',
        documentation: 'Changes the title of the AutoIt window.',
        insertText: 'Beep(${})'
    },
    {
        label: 'Binary',
        documentation: 'Returns the binary representation of an expression.',
        insertText: 'Binary(${})'
    },
    {
        label: 'BinaryLen',
        documentation: 'Returns the number of bytes in a binary variant.',
        insertText: 'BinaryLen(${})'
    },
    {
        label: 'BinaryMid',
        documentation: 'Extracts a number of bytes from a binary variant.',
        insertText: 'BinaryMid(${})'
    },
    {
        label: 'BinaryToString',
        documentation: 'Converts a binary variant into a string.',
        insertText: 'BinaryToString(${})'
    },
    {
        label: 'BitAND',
        documentation: 'Performs a bitwise AND operation.',
        insertText: 'BitAND(${})'
    },
    {
        label: 'BitNOT',
        documentation: 'Performs a bitwise NOT operation.',
        insertText: 'BitNOT(${})'
    },
    {
        label: 'BitOR',
        documentation: 'Performs a bitwise OR operation.',
        insertText: 'BitOR(${})'
    },
    {
        label: 'BitRotate',
        documentation: 'Performs a bit shifting operation, with rotation.',
        insertText: 'BitRotate(${})'
    },
    {
        label: 'BitShift',
        documentation: 'Performs a bit shifting operation.',
        insertText: 'BitShift(${})'
    },
    {
        label: 'BitXOR',
        documentation: 'Performs a bitwise exclusive OR (XOR) operation.',
        insertText: 'BitXOR(${})'
    },
    {
        label: 'BlockInput',
        documentation: 'Disable/enable the mouse and keyboard.',
        insertText: 'BlockInput(${})'
    },
    {
        label: 'Break',
        documentation: 'Enables or disables the users\' ability to exit a script from the tray icon menu.',
        insertText: 'Break(${})'
    },
    {
        label: 'Call',
        documentation: 'Calls a user-defined or built-in function contained in first parameter.',
        insertText: 'Call(${})'
    },
    {
        label: 'CDTray',
        documentation: 'Opens or closes the CD tray.',
        insertText: 'CDTray(${})'
    },
    {
        label: 'Ceiling',
        documentation: 'Returns a number rounded up to the next integer.',
        insertText: 'Ceiling(${})'
    },
    {
        label: 'Chr',
        documentation: 'Returns a character corresponding to an ASCII code.',
        insertText: 'Chr(${})'
    },
    {
        label: 'ChrW',
        documentation: 'Returns a character corresponding to a unicode code.',
        insertText: 'ChrW(${})'
    },
    {
        label: 'ClipGet',
        documentation: 'Retrieves text from the clipboard.',
        insertText: 'ClipGet(${})'
    },
    {
        label: 'ClipPut',
        documentation: 'Writes text to the clipboard.',
        insertText: 'ClipPut(${})'
    },
    {
        label: 'ConsoleRead',
        documentation: 'Read from the STDIN stream of the AutoIt script process.',
        insertText: 'ConsoleRead(${})'
    },
    {
        label: 'ConsoleWrite',
        documentation: 'Writes data to the STDOUT stream. Some text editors can read this stream as can other programs which may be expecting data on this stream.',
        insertText: 'ConsoleWrite(${})'
    },
    {
        label: 'ConsoleWriteError',
        documentation: 'Writes data to the STDERR stream. Some text editors can read this stream as can other programs which may be expecting data on this stream.',
        insertText: 'ConsoleWriteError(${})'
    },
    {
        label: 'ControlClick',
        documentation: 'Sends a mouse click command to a given control.',
        insertText: 'ControlClick(${})'
    },
    {
        label: 'ControlCommand',
        documentation: 'Sends a command to a control.',
        insertText: 'ControlCommand(${})'
    },
    {
        label: 'ControlDisable',
        documentation: 'Disables or "grays-out" a control.',
        insertText: 'ControlDisable(${})'
    },
    {
        label: 'ControlEnable',
        documentation: 'Enables a "grayed-out" control.',
        insertText: 'ControlEnable(${})'
    },
    {
        label: 'ControlFocus',
        documentation: 'Sets input focus to a given control on a window.',
        insertText: 'ControlFocus(${})'
    },
    {
        label: 'ControlGetFocus',
        documentation: 'Returns the ControlRef# of the control that has keyboard focus within a specified window.',
        insertText: 'ControlGetFocus(${})'
    },
    {
        label: 'ControlGetHandle',
        documentation: 'Retrieves the internal handle of a control.',
        insertText: 'ControlGetHandle(${})'
    },
    {
        label: 'ControlGetPos',
        documentation: 'Retrieves the position and size of a control relative to its window.',
        insertText: 'ControlGetPos(${})'
    },
    {
        label: 'ControlGetText',
        documentation: 'Retrieves text from a control.',
        insertText: 'ControlGetText(${})'
    },
    {
        label: 'ControlHide',
        documentation: 'Hides a control.',
        insertText: 'ControlHide(${})'
    },
    {
        label: 'ControlListView',
        documentation: 'Sends a command to a ListView32 control.',
        insertText: 'ControlListView(${})'
    },
    {
        label: 'ControlMove',
        documentation: 'Moves a control within a window.',
        insertText: 'ControlMove(${})'
    },
    {
        label: 'ControlSend',
        documentation: 'Sends a string of characters to a control.',
        insertText: 'ControlSend(${})'
    },
    {
        label: 'ControlSetText',
        documentation: 'Sets text of a control.',
        insertText: 'ControlSetText(${})'
    },
    {
        label: 'ControlShow',
        documentation: 'Shows a control that was hidden.',
        insertText: 'ControlShow(${})'
    },
    {
        label: 'ControlTreeView',
        documentation: 'Sends a command to a TreeView32 control.',
        insertText: 'ControlTreeView(${})'
    },
    {
        label: 'Cos',
        documentation: 'Calculates the cosine of a number.',
        insertText: 'Cos(${})'
    },
    {
        label: 'Dec',
        documentation: 'Returns a numeric representation of a hexadecimal string.',
        insertText: 'Dec(${})'
    },
    {
        label: 'DirCopy',
        documentation: 'Copies a directory and all sub-directories and files (Similar to xcopy). ',
        insertText: 'DirCopy(${})'
    },
    {
        label: 'DirCreate',
        documentation: 'Creates a directory/folder. ',
        insertText: 'DirCreate(${})'
    },
    {
        label: 'DirGetSize',
        documentation: 'Returns the size in bytes of a given directory. ',
        insertText: 'DirGetSize(${})'
    },
    {
        label: 'DirMove',
        documentation: 'Moves a directory and all sub-directories and files. ',
        insertText: 'DirMove(${})'
    },
    {
        label: 'DirRemove',
        documentation: 'Deletes a directory/folder. ',
        insertText: 'DirRemove(${})'
    },
    {
        label: 'DllCall',
        documentation: 'Dynamically calls a function in a DLL. ',
        insertText: 'DllCall(${})'
    },
    {
        label: 'DllCallAddress',
        documentation: 'Dynamically calls a function at a specific memory address. ',
        insertText: 'DllCallAddress(${})'
    },
    {
        label: 'DllCallbackFree',
        documentation: 'Frees a previously created handle created with DllCallbackRegister. ',
        insertText: 'DllCallbackFree(${})'
    },
    {
        label: 'DllCallbackGetPtr',
        documentation: 'Returns the pointer to a callback function that can be passed to the Win32 API. ',
        insertText: 'DllCallbackGetPtr(${})'
    },
    {
        label: 'DllCallbackRegister',
        documentation: 'Creates a user-defined DLL Callback function. ',
        insertText: 'DllCallbackRegister(${})'
    },
    {
        label: 'DllClose',
        documentation: 'Closes a previously opened DLL. ',
        insertText: 'DllClose(${})'
    },
    {
        label: 'DllOpen',
        documentation: 'Opens a DLL file for use in DllCall. ',
        insertText: 'DllOpen(${})'
    },
    {
        label: 'DllStructCreate',
        documentation: 'Creates a C/C++ style structure to be used in DllCall. ',
        insertText: 'DllStructCreate(${})'
    },
    {
        label: 'DllStructGetData',
        documentation: 'Returns the data of an element of the struct. ',
        insertText: 'DllStructGetData(${})'
    },
    {
        label: 'DllStructGetPtr',
        documentation: 'Returns the pointer to the struct or an element in the struct. ',
        insertText: 'DllStructGetPtr(${})'
    },
    {
        label: 'DllStructGetSize',
        documentation: 'Returns the size of the struct in bytes. ',
        insertText: 'DllStructGetSize(${})'
    },
    {
        label: 'DllStructSetData',
        documentation: 'Sets the data of an element in the struct. ',
        insertText: 'DllStructSetData(${})'
    },
    {
        label: 'DriveGetDrive',
        documentation: 'Returns an array containing the enumerated drives. ',
        insertText: 'DriveGetDrive(${})'
    },
    {
        label: 'DriveGetFileSystem',
        documentation: 'Returns File System Type of a drive. ',
        insertText: 'DriveGetFileSystem(${})'
    },
    {
        label: 'DriveGetLabel',
        documentation: 'Returns Volume Label of a drive, if it has one. ',
        insertText: 'DriveGetLabel(${})'
    },
    {
        label: 'DriveGetSerial',
        documentation: 'Returns Serial Number of a drive. ',
        insertText: 'DriveGetSerial(${})'
    },
    {
        label: 'DriveGetType',
        documentation: 'Returns drive type. ',
        insertText: 'DriveGetType(${})'
    },
    {
        label: 'DriveMapAdd',
        documentation: 'Maps a network drive. ',
        insertText: 'DriveMapAdd(${})'
    },
    {
        label: 'DriveMapDel',
        documentation: 'Disconnects a network drive. ',
        insertText: 'DriveMapDel(${})'
    },
    {
        label: 'DriveMapGet',
        documentation: 'Retrieves the details of a mapped drive. ',
        insertText: 'DriveMapGet(${})'
    },
    {
        label: 'DriveSetLabel',
        documentation: 'Sets the Volume Label of a drive. ',
        insertText: 'DriveSetLabel(${})'
    },
    {
        label: 'DriveSpaceFree',
        documentation: 'Returns the free disk space of a path in Megabytes. ',
        insertText: 'DriveSpaceFree(${})'
    },
    {
        label: 'DriveSpaceTotal',
        documentation: 'Returns the total disk space of a path in Megabytes. ',
        insertText: 'DriveSpaceTotal(${})'
    },
    {
        label: 'DriveStatus',
        documentation: 'Returns the status of the drive as a string. ',
        insertText: 'DriveStatus(${})'
    },
    {
        label: 'EnvGet',
        documentation: 'Retrieves an environment variable. ',
        insertText: 'EnvGet(${})'
    },
    {
        label: 'EnvSet',
        documentation: 'Writes an environment variable. ',
        insertText: 'EnvSet(${})'
    },
    {
        label: 'EnvUpdate',
        documentation: 'Refreshes the OS environment. ',
        insertText: 'EnvUpdate(${})'
    },
    {
        label: 'Eval',
        documentation: 'Return the value of the variable defined by a string. ',
        insertText: 'Eval(${})'
    },
    {
        label: 'Execute',
        documentation: 'Execute an expression. ',
        insertText: 'Execute(${})'
    },
    {
        label: 'Exp',
        documentation: 'Calculates e to the power of a number. ',
        insertText: 'Exp(${})'
    },
    {
        label: 'FileChangeDir',
        documentation: 'Changes the current working directory. ',
        insertText: 'FileChangeDir(${})'
    },
    {
        label: 'FileClose',
        documentation: 'Closes a previously opened file. ',
        insertText: 'FileClose(${})'
    },
    {
        label: 'FileCopy',
        documentation: 'Copies one or more files. ',
        insertText: 'FileCopy(${})'
    },
    {
        label: 'FileCreateNTFSLink',
        documentation: 'Creates an NTFS hardlink to a file or a directory. ',
        insertText: 'FileCreateNTFSLink(${})'
    },
    {
        label: 'FileCreateShortcut',
        documentation: 'Creates a shortcut (.lnk) to a file. ',
        insertText: 'FileCreateShortcut(${})'
    },
    {
        label: 'FileDelete',
        documentation: 'Delete one or more files. ',
        insertText: 'FileDelete(${})'
    },
    {
        label: 'FileExists',
        documentation: 'Checks if a file or directory exists. ',
        insertText: 'FileExists(${})'
    },
    {
        label: 'FileFindFirstFile',
        documentation: 'Creates a search handle, defined by a path and file mask. ',
        insertText: 'FileFindFirstFile(${})'
    },
    {
        label: 'FileFindNextFile',
        documentation: 'Returns the next filename defined by the search handle. ',
        insertText: 'FileFindNextFile(${})'
    },
    {
        label: 'FileFlush',
        documentation: 'Flushes the file\'s buffer to disk. ',
        insertText: 'FileFlush(${})'
    },
    {
        label: 'FileGetAttrib',
        documentation: 'Returns a code string representing a file\'s attributes. ',
        insertText: 'FileGetAttrib(${})'
    },
    {
        label: 'FileGetEncoding',
        documentation: 'Determines the text encoding used in a file. ',
        insertText: 'FileGetEncoding(${})'
    },
    {
        label: 'FileGetLongName',
        documentation: 'Returns the long path+name of the path+name passed. ',
        insertText: 'FileGetLongName(${})'
    },
    {
        label: 'FileGetPos',
        documentation: 'Retrieves the current file position. ',
        insertText: 'FileGetPos(${})'
    },
    {
        label: 'FileGetShortcut',
        documentation: 'Retrieves details about a shortcut. ',
        insertText: 'FileGetShortcut(${})'
    },
    {
        label: 'FileGetShortName',
        documentation: 'Returns the 8.3 short path+name of the path+name passed. ',
        insertText: 'FileGetShortName(${})'
    },
    {
        label: 'FileGetSize',
        documentation: 'Returns the size of a file in bytes. ',
        insertText: 'FileGetSize(${})'
    },
    {
        label: 'FileGetTime',
        documentation: 'Returns the time and date information for a file. ',
        insertText: 'FileGetTime(${})'
    },
    {
        label: 'FileGetVersion',
        documentation: 'Returns version information stored in a file. ',
        insertText: 'FileGetVersion(${})'
    },
    {
        label: 'FileInstall',
        documentation: 'Include and install a file with the compiled script. ',
        insertText: 'FileInstall(${})'
    },
    {
        label: 'FileMove',
        documentation: 'Moves one or more files. ',
        insertText: 'FileMove(${})'
    },
    {
        label: 'FileOpen',
        documentation: 'Opens a file for reading or writing. ',
        insertText: 'FileOpen(${})'
    },
    {
        label: 'FileOpenDialog',
        documentation: 'Initiates a Open File Dialog. ',
        insertText: 'FileOpenDialog(${})'
    },
    {
        label: 'FileRead',
        documentation: 'Read in a number of characters from a previously opened file. ',
        insertText: 'FileRead(${})'
    },
    {
        label: 'FileReadLine',
        documentation: 'Read in a line of text from a previously opened text file. ',
        insertText: 'FileReadLine(${})'
    },
    {
        label: 'FileReadToArray',
        documentation: 'Reads the specified file into an array. ',
        insertText: 'FileReadToArray(${})'
    },
    {
        label: 'FileRecycle',
        documentation: 'Sends a file or directory to the recycle bin. ',
        insertText: 'FileRecycle(${})'
    },
    {
        label: 'FileRecycleEmpty',
        documentation: 'Empties the recycle bin. ',
        insertText: 'FileRecycleEmpty(${})'
    },
    {
        label: 'FileSaveDialog',
        documentation: 'Initiates a Save File Dialog. ',
        insertText: 'FileSaveDialog(${})'
    },
    {
        label: 'FileSelectFolder',
        documentation: 'Initiates a Browse For Folder dialog. ',
        insertText: 'FileSelectFolder(${})'
    },
    {
        label: 'FileSetAttrib',
        documentation: 'Sets the attributes of one or more files/directories. ',
        insertText: 'FileSetAttrib(${})'
    },
    {
        label: 'FileSetEnd',
        documentation: 'Sets the end of the file at the current file position. ',
        insertText: 'FileSetEnd(${})'
    },
    {
        label: 'FileSetPos',
        documentation: 'Sets the current file position. ',
        insertText: 'FileSetPos(${})'
    },
    {
        label: 'FileSetTime',
        documentation: 'Sets the timestamp of one of more files. ',
        insertText: 'FileSetTime(${})'
    },
    {
        label: 'FileWrite',
        documentation: 'Write text/data to the end of a previously opened file. ',
        insertText: 'FileWrite(${})'
    },
    {
        label: 'FileWriteLine',
        documentation: 'Append a line of text to the end of a previously opened text file. ',
        insertText: 'FileWriteLine(${})'
    },
    {
        label: 'Floor',
        documentation: 'Returns a number rounded down to the closest integer. ',
        insertText: 'Floor(${})'
    },
    {
        label: 'FtpSetProxy',
        documentation: 'Sets the internet proxy to use for ftp access. ',
        insertText: 'FtpSetProxy(${})'
    },
    {
        label: 'FuncName',
        documentation: 'Returns the name of a function stored in a variable. ',
        insertText: 'FuncName(${})'
    },
    {
        label: 'GUICreate',
        documentation: 'Create a GUI window. ',
        insertText: 'GUICreate(${})'
    },
    {
        label: 'GUICtrlCreateAvi',
        documentation: 'Creates an AVI video control for the GUI. ',
        insertText: 'GUICtrlCreateAvi(${})'
    },
    {
        label: 'GUICtrlCreateButton',
        documentation: 'Creates a Button control for the GUI. ',
        insertText: 'GUICtrlCreateButton(${})'
    },
    {
        label: 'GUICtrlCreateCheckbox',
        documentation: 'Creates a Checkbox control for the GUI. ',
        insertText: 'GUICtrlCreateCheckbox(${})'
    },
    {
        label: 'GUICtrlCreateCombo',
        documentation: 'Creates a ComboBox control for the GUI. ',
        insertText: 'GUICtrlCreateCombo(${})'
    },
    {
        label: 'GUICtrlCreateContextMenu',
        documentation: 'Creates a context menu for a control or entire GUI window. ',
        insertText: 'GUICtrlCreateContextMenu(${})'
    },
    {
        label: 'GUICtrlCreateDate',
        documentation: 'Creates a date control for the GUI. ',
        insertText: 'GUICtrlCreateDate(${})'
    },
    {
        label: 'GUICtrlCreateDummy',
        documentation: 'Creates a Dummy control for the GUI. ',
        insertText: 'GUICtrlCreateDummy(${})'
    },
    {
        label: 'GUICtrlCreateEdit',
        documentation: 'Creates an Edit control for the GUI. ',
        insertText: 'GUICtrlCreateEdit(${})'
    },
    {
        label: 'GUICtrlCreateGraphic',
        documentation: 'Creates a Graphic control for the GUI. ',
        insertText: 'GUICtrlCreateGraphic(${})'
    },
    {
        label: 'GUICtrlCreateGroup',
        documentation: 'Creates a Group control for the GUI. ',
        insertText: 'GUICtrlCreateGroup(${})'
    },
    {
        label: 'GUICtrlCreateIcon',
        documentation: 'Creates an Icon control for the GUI. ',
        insertText: 'GUICtrlCreateIcon(${})'
    },
    {
        label: 'GUICtrlCreateInput',
        documentation: 'Creates an Input control for the GUI. ',
        insertText: 'GUICtrlCreateInput(${})'
    },
    {
        label: 'GUICtrlCreateLabel',
        documentation: 'Creates a static Label control for the GUI. ',
        insertText: 'GUICtrlCreateLabel(${})'
    },
    {
        label: 'GUICtrlCreateList',
        documentation: 'Creates a List control for the GUI. ',
        insertText: 'GUICtrlCreateList(${})'
    },
    {
        label: 'GUICtrlCreateListView',
        documentation: 'Creates a ListView control for the GUI. ',
        insertText: 'GUICtrlCreateListView(${})'
    },
    {
        label: 'GUICtrlCreateListViewItem',
        documentation: 'Creates a ListView item. ',
        insertText: 'GUICtrlCreateListViewItem(${})'
    },
    {
        label: 'GUICtrlCreateMenu',
        documentation: 'Creates a Menu control for the GUI. ',
        insertText: 'GUICtrlCreateMenu(${})'
    },
    {
        label: 'GUICtrlCreateMenuItem',
        documentation: 'Creates a MenuItem control for the GUI. ',
        insertText: 'GUICtrlCreateMenuItem(${})'
    },
    {
        label: 'GUICtrlCreateMonthCal',
        documentation: 'Creates a month calendar control for the GUI. ',
        insertText: 'GUICtrlCreateMonthCal(${})'
    },
    {
        label: 'GUICtrlCreateObj',
        documentation: 'Creates an ActiveX control in the GUI. ',
        insertText: 'GUICtrlCreateObj(${})'
    },
    {
        label: 'GUICtrlCreatePic',
        documentation: 'Creates a Picture control for the GUI. ',
        insertText: 'GUICtrlCreatePic(${})'
    },
    {
        label: 'GUICtrlCreateProgress',
        documentation: 'Creates a Progress control for the GUI. ',
        insertText: 'GUICtrlCreateProgress(${})'
    },
    {
        label: 'GUICtrlCreateRadio',
        documentation: 'Creates a Radio button control for the GUI. ',
        insertText: 'GUICtrlCreateRadio(${})'
    },
    {
        label: 'GUICtrlCreateSlider',
        documentation: 'Creates a Slider control for the GUI. ',
        insertText: 'GUICtrlCreateSlider(${})'
    },
    {
        label: 'GUICtrlCreateTab',
        documentation: 'Creates a Tab control for the GUI. ',
        insertText: 'GUICtrlCreateTab(${})'
    },
    {
        label: 'GUICtrlCreateTabItem',
        documentation: 'Creates a TabItem control within an existing tab control in the GUI. ',
        insertText: 'GUICtrlCreateTabItem(${})'
    },
    {
        label: 'GUICtrlCreateTreeView',
        documentation: 'Creates a TreeView control for the GUI. ',
        insertText: 'GUICtrlCreateTreeView(${})'
    },
    {
        label: 'GUICtrlCreateTreeViewItem',
        documentation: 'Creates a TreeViewItem control for the GUI. ',
        insertText: 'GUICtrlCreateTreeViewItem(${})'
    },
    {
        label: 'GUICtrlCreateUpdown',
        documentation: 'Creates an UpDown control for the GUI. ',
        insertText: 'GUICtrlCreateUpdown(${})'
    },
    {
        label: 'GUICtrlDelete',
        documentation: 'Deletes a control. ',
        insertText: 'GUICtrlDelete(${})'
    },
    {
        label: 'GUICtrlGetHandle',
        documentation: 'Returns the handle for a control and some special (item) handles (Menu, ContextMenu, TreeViewItem). ',
        insertText: 'GUICtrlGetHandle(${})'
    },
    {
        label: 'GUICtrlGetState',
        documentation: 'Gets the current state of a control. ',
        insertText: 'GUICtrlGetState(${})'
    },
    {
        label: 'GUICtrlRead',
        documentation: 'Read state or data of a control. ',
        insertText: 'GUICtrlRead(${})'
    },
    {
        label: 'GUICtrlRecvMsg',
        documentation: 'Send a message to a control and retrieve information in lParam. ',
        insertText: 'GUICtrlRecvMsg(${})'
    },
    {
        label: 'GUICtrlRegisterListViewSort',
        documentation: 'Register a user defined function for an internal listview sorting callback function. ',
        insertText: 'GUICtrlRegisterListViewSort(${})'
    },
    {
        label: 'GUICtrlSendMsg',
        documentation: 'Send a message to a control. ',
        insertText: 'GUICtrlSendMsg(${})'
    },
    {
        label: 'GUICtrlSendToDummy',
        documentation: 'Sends a message to a Dummy control. ',
        insertText: 'GUICtrlSendToDummy(${})'
    },
    {
        label: 'GUICtrlSetBkColor',
        documentation: 'Sets the background color of a control. ',
        insertText: 'GUICtrlSetBkColor(${})'
    },
    {
        label: 'GUICtrlSetColor',
        documentation: 'Sets the text color of a control. ',
        insertText: 'GUICtrlSetColor(${})'
    },
    {
        label: 'GUICtrlSetCursor',
        documentation: 'Sets the mouse cursor icon for a particular control. ',
        insertText: 'GUICtrlSetCursor(${})'
    },
    {
        label: 'GUICtrlSetData',
        documentation: 'Modifies the data for a control. ',
        insertText: 'GUICtrlSetData(${})'
    },
    {
        label: 'GUICtrlSetDefBkColor',
        documentation: 'Sets the default background color of all the controls of the GUI window. ',
        insertText: 'GUICtrlSetDefBkColor(${})'
    },
    {
        label: 'GUICtrlSetDefColor',
        documentation: 'Sets the default text color of all the controls of the GUI window. ',
        insertText: 'GUICtrlSetDefColor(${})'
    },
    {
        label: 'GUICtrlSetFont',
        documentation: 'Sets the font for a control. ',
        insertText: 'GUICtrlSetFont(${})'
    },
    {
        label: 'GUICtrlSetGraphic',
        documentation: 'Modifies the data for a control. ',
        insertText: 'GUICtrlSetGraphic(${})'
    },
    {
        label: 'GUICtrlSetImage',
        documentation: 'Sets the bitmap or icon image to use for a control. ',
        insertText: 'GUICtrlSetImage(${})'
    },
    {
        label: 'GUICtrlSetLimit',
        documentation: 'Limits the number of characters/pixels for a control. ',
        insertText: 'GUICtrlSetLimit(${})'
    },
    {
        label: 'GUICtrlSetOnEvent',
        documentation: 'Defines a user-defined function to be called when a control is clicked. ',
        insertText: 'GUICtrlSetOnEvent(${})'
    },
    {
        label: 'GUICtrlSetPos',
        documentation: 'Changes the position of a control within the GUI window. ',
        insertText: 'GUICtrlSetPos(${})'
    },
    {
        label: 'GUICtrlSetResizing',
        documentation: 'Defines the resizing method used by a control. ',
        insertText: 'GUICtrlSetResizing(${})'
    },
    {
        label: 'GUICtrlSetState',
        documentation: 'Changes the state of a control. ',
        insertText: 'GUICtrlSetState(${})'
    },
    {
        label: 'GUICtrlSetStyle',
        documentation: 'Changes the style of a control. ',
        insertText: 'GUICtrlSetStyle(${})'
    },
    {
        label: 'GUICtrlSetTip',
        documentation: 'Sets the tip text associated with a control. ',
        insertText: 'GUICtrlSetTip(${})'
    },
    {
        label: 'GUIDelete',
        documentation: 'Deletes a GUI window and all controls that it contains. ',
        insertText: 'GUIDelete(${})'
    },
    {
        label: 'GUIGetCursorInfo',
        documentation: 'Gets the mouse cursor position relative to GUI window. ',
        insertText: 'GUIGetCursorInfo(${})'
    },
    {
        label: 'GUIGetMsg',
        documentation: 'Polls the GUI to see if any events have occurred. ',
        insertText: 'GUIGetMsg(${})'
    },
    {
        label: 'GUIGetStyle',
        documentation: 'Retrieves the styles of a GUI window. ',
        insertText: 'GUIGetStyle(${})'
    },
    {
        label: 'GUIRegisterMsg',
        documentation: 'Register a user defined function for a known Windows Message ID (WM_MSG). ',
        insertText: 'GUIRegisterMsg(${})'
    },
    {
        label: 'GUISetAccelerators',
        documentation: 'Sets the accelerator table to be used in a GUI window. ',
        insertText: 'GUISetAccelerators(${})'
    },
    {
        label: 'GUISetBkColor',
        documentation: 'Sets the background color of the GUI window. ',
        insertText: 'GUISetBkColor(${})'
    },
    {
        label: 'GUISetCoord',
        documentation: 'Sets absolute coordinates for the next control. ',
        insertText: 'GUISetCoord(${})'
    },
    {
        label: 'GUISetCursor',
        documentation: 'Sets the mouse cursor icon for a GUI window. ',
        insertText: 'GUISetCursor(${})'
    },
    {
        label: 'GUISetFont',
        documentation: 'Sets the default font for a GUI window. ',
        insertText: 'GUISetFont(${})'
    },
    {
        label: 'GUISetHelp',
        documentation: 'Sets an executable file that will be run when F1 is pressed. ',
        insertText: 'GUISetHelp(${})'
    },
    {
        label: 'GUISetIcon',
        documentation: 'Sets the icon used in a GUI window. ',
        insertText: 'GUISetIcon(${})'
    },
    {
        label: 'GUISetOnEvent',
        documentation: 'Defines a user function to be called when a system button is clicked. ',
        insertText: 'GUISetOnEvent(${})'
    },
    {
        label: 'GUISetState',
        documentation: 'Changes the state of a GUI window. ',
        insertText: 'GUISetState(${})'
    },
    {
        label: 'GUISetStyle',
        documentation: 'Changes the styles of a GUI window. ',
        insertText: 'GUISetStyle(${})'
    },
    {
        label: 'GUIStartGroup',
        documentation: 'Defines that any subsequent controls that are created will be "grouped" together. ',
        insertText: 'GUIStartGroup(${})'
    },
    {
        label: 'GUISwitch',
        documentation: 'Switches the current window used for GUI functions. ',
        insertText: 'GUISwitch(${})'
    },
    {
        label: 'Hex',
        documentation: 'Returns a string representation of an integer or of a binary type converted to hexadecimal. ',
        insertText: 'Hex(${})'
    },
    {
        label: 'HotKeySet',
        documentation: 'Sets a hotkey that calls a user function. ',
        insertText: 'HotKeySet(${})'
    },
    {
        label: 'HttpSetProxy',
        documentation: 'Sets the internet proxy to use for http access. ',
        insertText: 'HttpSetProxy(${})'
    },
    {
        label: 'HttpSetUserAgent',
        documentation: 'Sets the HTTP user-agent string which is sent with all Inet requests. ',
        insertText: 'HttpSetUserAgent(${})'
    },
    {
        label: 'HWnd',
        documentation: 'Converts an expression into an HWND handle. ',
        insertText: 'HWnd(${})'
    },
    {
        label: 'InetClose',
        documentation: 'Closes a handle returned from InetGet(). ',
        insertText: 'InetClose(${})'
    },
    {
        label: 'InetGet',
        documentation: 'Downloads a file from the internet using the HTTP, HTTPS or FTP protocol. ',
        insertText: 'InetGet(${})'
    },
    {
        label: 'InetGetInfo',
        documentation: 'Returns detailed data for a handle returned from InetGet(). ',
        insertText: 'InetGetInfo(${})'
    },
    {
        label: 'InetGetSize',
        documentation: 'Returns the size (in bytes) of a file located on the internet. ',
        insertText: 'InetGetSize(${})'
    },
    {
        label: 'InetRead',
        documentation: 'Downloads a file from the internet using the HTTP, HTTPS or FTP protocol. ',
        insertText: 'InetRead(${})'
    },
    {
        label: 'IniDelete',
        documentation: 'Deletes a value from a standard format .ini file. ',
        insertText: 'IniDelete(${})'
    },
    {
        label: 'IniRead',
        documentation: 'Reads a value from a standard format .ini file. ',
        insertText: 'IniRead(${})'
    },
    {
        label: 'IniReadSection',
        documentation: 'Reads all key/value pairs from a section in a standard format .ini file. ',
        insertText: 'IniReadSection(${})'
    },
    {
        label: 'IniReadSectionNames',
        documentation: 'Reads all sections in a standard format .ini file. ',
        insertText: 'IniReadSectionNames(${})'
    },
    {
        label: 'IniRenameSection',
        documentation: 'Renames a section in a standard format .ini file. ',
        insertText: 'IniRenameSection(${})'
    },
    {
        label: 'IniWrite',
        documentation: 'Writes a value to a standard format .ini file. ',
        insertText: 'IniWrite(${})'
    },
    {
        label: 'IniWriteSection',
        documentation: 'Writes a section to a standard format .ini file. ',
        insertText: 'IniWriteSection(${})'
    },
    {
        label: 'InputBox',
        documentation: 'Displays an input box to ask the user to enter a string. ',
        insertText: 'InputBox(${})'
    },
    {
        label: 'Int',
        documentation: 'Returns the integer (whole number) representation of an expression. ',
        insertText: 'Int(${})'
    },
    {
        label: 'IsAdmin',
        documentation: 'Checks if the current user has full administrator privileges. ',
        insertText: 'IsAdmin(${})'
    },
    {
        label: 'IsArray',
        documentation: 'Checks if a variable is an array type. ',
        insertText: 'IsArray(${})'
    },
    {
        label: 'IsBinary',
        documentation: 'Checks if a variable or expression is a binary type. ',
        insertText: 'IsBinary(${})'
    },
    {
        label: 'IsBool',
        documentation: 'Checks if a variable\'s base type is boolean. ',
        insertText: 'IsBool(${})'
    },
    {
        label: 'IsDeclared',
        documentation: 'Check if a variable has been declared. ',
        insertText: 'IsDeclared(${})'
    },
    {
        label: 'IsDllStruct',
        documentation: 'Checks if a variable is a DllStruct type. ',
        insertText: 'IsDllStruct(${})'
    },
    {
        label: 'IsFloat',
        documentation: 'Checks if the value of a variable or expression has a fractional component. ',
        insertText: 'IsFloat(${})'
    },
    {
        label: 'IsFunc',
        documentation: 'Checks if a variable or expression is a function type. ',
        insertText: 'IsFunc(${})'
    },
    {
        label: 'IsHWnd',
        documentation: 'Checks if a variable\'s base type is a pointer and window handle. ',
        insertText: 'IsHWnd(${})'
    },
    {
        label: 'IsInt',
        documentation: 'Checks if the value of a variable or expression has no fractional component. ',
        insertText: 'IsInt(${})'
    },
    {
        label: 'IsKeyword',
        documentation: 'Checks if a variable is a keyword (for example, Default). ',
        insertText: 'IsKeyword(${})'
    },
    {
        label: 'IsNumber',
        documentation: 'Checks if a variable\'s base type is numeric. ',
        insertText: 'IsNumber(${})'
    },
    {
        label: 'IsObj',
        documentation: 'Checks if a variable or expression is an object type. ',
        insertText: 'IsObj(${})'
    },
    {
        label: 'IsPtr',
        documentation: 'Checks if a variable\'s base type is a pointer. ',
        insertText: 'IsPtr(${})'
    },
    {
        label: 'IsString',
        documentation: 'Checks if a variable is a string type. ',
        insertText: 'IsString(${})'
    },
    {
        label: 'Log',
        documentation: 'Calculates the natural logarithm of a number. ',
        insertText: 'Log(${})'
    },
    {
        label: 'MemGetStats',
        documentation: 'Retrieves memory related information. ',
        insertText: 'MemGetStats(${})'
    },
    {
        label: 'Mod',
        documentation: 'Performs the modulus operation. ',
        insertText: 'Mod(${})'
    },
    {
        label: 'MouseClick',
        documentation: 'Perform a mouse click operation. ',
        insertText: 'MouseClick(${})'
    },
    {
        label: 'MouseClickDrag',
        documentation: 'Perform a mouse click and drag operation. ',
        insertText: 'MouseClickDrag(${})'
    },
    {
        label: 'MouseDown',
        documentation: 'Perform a mouse down event at the current mouse position. ',
        insertText: 'MouseDown(${})'
    },
    {
        label: 'MouseGetCursor',
        documentation: 'Returns the cursor ID Number for the current Mouse Cursor. ',
        insertText: 'MouseGetCursor(${})'
    },
    {
        label: 'MouseGetPos',
        documentation: 'Retrieves the current position of the mouse cursor. ',
        insertText: 'MouseGetPos(${})'
    },
    {
        label: 'MouseMove',
        documentation: 'Moves the mouse pointer. ',
        insertText: 'MouseMove(${})'
    },
    {
        label: 'MouseUp',
        documentation: 'Perform a mouse up event at the current mouse position. ',
        insertText: 'MouseUp(${})'
    },
    {
        label: 'MouseWheel',
        documentation: 'Moves the mouse wheel up or down. ',
        insertText: 'MouseWheel(${})'
    },
    {
        label: 'MsgBox',
        documentation: 'Displays a simple message box with optional timeout. ',
        insertText: 'MsgBox(${})'
    },
    {
        label: 'Number',
        documentation: 'Returns the numeric representation of an expression. ',
        insertText: 'Number(${})'
    },
    {
        label: 'ObjCreate',
        documentation: 'Creates a reference to a COM object from the given classname. ',
        insertText: 'ObjCreate(${})'
    },
    {
        label: 'ObjCreateInterface',
        documentation: 'Creates a reference to an object from the given classname/object pointer, interface identifier and description string. ',
        insertText: 'ObjCreateInterface(${})'
    },
    {
        label: 'ObjEvent',
        documentation: 'Handles incoming events from the given Object. ',
        insertText: 'ObjEvent(${})'
    },
    {
        label: 'ObjGet',
        documentation: 'Retrieves a reference to a COM object from an existing process or filename. ',
        insertText: 'ObjGet(${})'
    },
    {
        label: 'ObjName',
        documentation: 'Returns the name or interface description of an Object. ',
        insertText: 'ObjName(${})'
    },
    {
        label: 'OnAutoItExitRegister',
        documentation: 'Registers a function to be called when AutoIt exits. ',
        insertText: 'OnAutoItExitRegister(${})'
    },
    {
        label: 'OnAutoItExitUnRegister',
        documentation: 'UnRegisters a function that was called when AutoIt exits. ',
        insertText: 'OnAutoItExitUnRegister(${})'
    },
    {
        label: 'Ping',
        documentation: 'Pings a host and returns the roundtrip-time. ',
        insertText: 'Ping(${})'
    },
    {
        label: 'PixelChecksum',
        documentation: 'Generates a checksum for a region of pixels. ',
        insertText: 'PixelChecksum(${})'
    },
    {
        label: 'PixelGetColor',
        documentation: 'Returns a pixel color according to x,y pixel coordinates. ',
        insertText: 'PixelGetColor(${})'
    },
    {
        label: 'PixelSearch',
        documentation: 'Searches a rectangle of pixels for the pixel color provided. ',
        insertText: 'PixelSearch(${})'
    },
    {
        label: 'ProcessClose',
        documentation: 'Terminates a named process. ',
        insertText: 'ProcessClose(${})'
    },
    {
        label: 'ProcessExists',
        documentation: 'Checks to see if a specified process exists. ',
        insertText: 'ProcessExists(${})'
    },
    {
        label: 'ProcessGetStats',
        documentation: 'Returns an array about Memory or IO infos of a running process. ',
        insertText: 'ProcessGetStats(${})'
    },
    {
        label: 'ProcessList',
        documentation: 'Returns an array listing the currently running processes (names and PIDs). ',
        insertText: 'ProcessList(${})'
    },
    {
        label: 'ProcessSetPriority',
        documentation: 'Changes the priority of a process. ',
        insertText: 'ProcessSetPriority(${})'
    },
    {
        label: 'ProcessWait',
        documentation: 'Pauses script execution until a given process exists. ',
        insertText: 'ProcessWait(${})'
    },
    {
        label: 'ProcessWaitClose',
        documentation: 'Pauses script execution until a given process does not exist. ',
        insertText: 'ProcessWaitClose(${})'
    },
    {
        label: 'ProgressOff',
        documentation: 'Turns Progress window off. ',
        insertText: 'ProgressOff(${})'
    },
    {
        label: 'ProgressOn',
        documentation: 'Creates a customizable progress bar window. ',
        insertText: 'ProgressOn(${})'
    },
    {
        label: 'ProgressSet',
        documentation: 'Sets the position and/or text of a previously created Progress bar window. ',
        insertText: 'ProgressSet(${})'
    },
    {
        label: 'Ptr',
        documentation: 'Converts an expression into a pointer variant. ',
        insertText: 'Ptr(${})'
    },
    {
        label: 'Random',
        documentation: 'Generates a pseudo-random float-type number. ',
        insertText: 'Random(${})'
    },
    {
        label: 'RegDelete',
        documentation: 'Deletes a key or value from the registry. ',
        insertText: 'RegDelete(${})'
    },
    {
        label: 'RegEnumKey',
        documentation: 'Reads the name of a subkey according to its instance. ',
        insertText: 'RegEnumKey(${})'
    },
    {
        label: 'RegEnumVal',
        documentation: 'Reads the name of a value according to its instance. ',
        insertText: 'RegEnumVal(${})'
    },
    {
        label: 'RegRead',
        documentation: 'Reads a value from the registry. ',
        insertText: 'RegRead(${})'
    },
    {
        label: 'RegWrite',
        documentation: 'Creates a key or value in the registry. ',
        insertText: 'RegWrite(${})'
    },
    {
        label: 'Round',
        documentation: 'Returns a number rounded to a specified number of decimal places. ',
        insertText: 'Round(${})'
    },
    {
        label: 'Run',
        documentation: 'Runs an external program. ',
        insertText: 'Run(${})'
    },
    {
        label: 'RunAs',
        documentation: 'Runs an external program under the context of a different user. ',
        insertText: 'RunAs(${})'
    },
    {
        label: 'RunAsWait',
        documentation: 'Runs an external program under the context of a different user and pauses script execution until the program finishes. ',
        insertText: 'RunAsWait(${})'
    },
    {
        label: 'RunWait',
        documentation: 'Runs an external program and pauses script execution until the program finishes. ',
        insertText: 'RunWait(${})'
    },
    {
        label: 'Send',
        documentation: 'Sends simulated keystrokes to the active window. ',
        insertText: 'Send(${})'
    },
    {
        label: 'SendKeepActive',
        documentation: 'Attempts to keep a specified window active during Send(). ',
        insertText: 'SendKeepActive(${})'
    },
    {
        label: 'SetError',
        documentation: 'Manually set the value of the @error macro (and optionally @extended, and "Return Value"). ',
        insertText: 'SetError(${})'
    },
    {
        label: 'SetExtended',
        documentation: 'Manually set the value of the @extended macro. ',
        insertText: 'SetExtended(${})'
    },
    {
        label: 'ShellExecute',
        documentation: 'Runs an external program using the ShellExecute API. ',
        insertText: 'ShellExecute(${})'
    },
    {
        label: 'ShellExecuteWait',
        documentation: 'Runs an external program using the ShellExecute API and pauses script execution until it finishes. ',
        insertText: 'ShellExecuteWait(${})'
    },
    {
        label: 'Shutdown',
        documentation: 'Shuts down the system. ',
        insertText: 'Shutdown(${})'
    },
    {
        label: 'Sin',
        documentation: 'Calculates the sine of a number. ',
        insertText: 'Sin(${})'
    },
    {
        label: 'Sleep',
        documentation: 'Pause script execution. ',
        insertText: 'Sleep(${})'
    },
    {
        label: 'SoundPlay',
        documentation: 'Play a sound file. ',
        insertText: 'SoundPlay(${})'
    },
    {
        label: 'SoundSetWaveVolume',
        documentation: 'Sets the system wave volume by percent. ',
        insertText: 'SoundSetWaveVolume(${})'
    },
    {
        label: 'SplashImageOn',
        documentation: 'Creates a customizable image popup window. ',
        insertText: 'SplashImageOn(${})'
    },
    {
        label: 'SplashOff',
        documentation: 'Turns SplashText or SplashImage off. ',
        insertText: 'SplashOff(${})'
    },
    {
        label: 'SplashTextOn',
        documentation: 'Creates a customizable text popup window. ',
        insertText: 'SplashTextOn(${})'
    },
    {
        label: 'Sqrt',
        documentation: 'Calculates the square-root of a number. ',
        insertText: 'Sqrt(${})'
    },
    {
        label: 'SRandom',
        documentation: 'Set Seed for random number generation. ',
        insertText: 'SRandom(${})'
    },
    {
        label: 'StatusbarGetText',
        documentation: 'Retrieves the text from a standard status bar control. ',
        insertText: 'StatusbarGetText(${})'
    },
    {
        label: 'StderrRead',
        documentation: 'Reads from the STDERR stream of a previously run child process. ',
        insertText: 'StderrRead(${})'
    },
    {
        label: 'StdinWrite',
        documentation: 'Writes a number of characters to the STDIN stream of a previously run child process. ',
        insertText: 'StdinWrite(${})'
    },
    {
        label: 'StdioClose',
        documentation: 'Closes all resources associated with a process previously run with STDIO redirection. ',
        insertText: 'StdioClose(${})'
    },
    {
        label: 'StdoutRead',
        documentation: 'Reads from the STDOUT stream of a previously run child process. ',
        insertText: 'StdoutRead(${})'
    },
    {
        label: 'String',
        documentation: 'Returns the string representation of an expression. ',
        insertText: 'String(${})'
    },
    {
        label: 'StringAddCR',
        documentation: 'Takes a string and prefixes all linefeed characters ( Chr(10) ) with a carriage return character ( Chr(13) ). ',
        insertText: 'StringAddCR(${})'
    },
    {
        label: 'StringCompare',
        documentation: 'Compares two strings with options. ',
        insertText: 'StringCompare(${})'
    },
    {
        label: 'StringFormat',
        documentation: 'Returns a formatted string (similar to the C sprintf() function). ',
        insertText: 'StringFormat(${})'
    },
    {
        label: 'StringFromASCIIArray',
        documentation: 'Converts an array of ASCII codes to a string. ',
        insertText: 'StringFromASCIIArray(${})'
    },
    {
        label: 'StringInStr',
        documentation: 'Checks if a string contains a given substring. ',
        insertText: 'StringInStr(${})'
    },
    {
        label: 'StringIsAlNum',
        documentation: 'Checks if a string contains only alphanumeric characters. ',
        insertText: 'StringIsAlNum(${})'
    },
    {
        label: 'StringIsAlpha',
        documentation: 'Checks if a string contains only alphabetic characters. ',
        insertText: 'StringIsAlpha(${})'
    },
    {
        label: 'StringIsASCII',
        documentation: 'Checks if a string contains only ASCII characters in the range 0x00 - 0x7f (0 - 127). ',
        insertText: 'StringIsASCII(${})'
    },
    {
        label: 'StringIsDigit',
        documentation: 'Checks if a string contains only digit (0-9) characters. ',
        insertText: 'StringIsDigit(${})'
    },
    {
        label: 'StringIsFloat',
        documentation: 'Checks if a string is a floating point number. ',
        insertText: 'StringIsFloat(${})'
    },
    {
        label: 'StringIsInt',
        documentation: 'Checks if a string is an integer. ',
        insertText: 'StringIsInt(${})'
    },
    {
        label: 'StringIsLower',
        documentation: 'Checks if a string contains only lowercase characters. ',
        insertText: 'StringIsLower(${})'
    },
    {
        label: 'StringIsSpace',
        documentation: 'Checks if a string contains only whitespace characters. ',
        insertText: 'StringIsSpace(${})'
    },
    {
        label: 'StringIsUpper',
        documentation: 'Checks if a string contains only uppercase characters. ',
        insertText: 'StringIsUpper(${})'
    },
    {
        label: 'StringIsXDigit',
        documentation: 'Checks if a string contains only hexadecimal digit (0-9, A-F) characters. ',
        insertText: 'StringIsXDigit(${})'
    },
    {
        label: 'StringLeft',
        documentation: 'Returns a number of characters from the left-hand side of a string. ',
        insertText: 'StringLeft(${})'
    },
    {
        label: 'StringLen',
        documentation: 'Returns the number of characters in a string. ',
        insertText: 'StringLen(${})'
    },
    {
        label: 'StringLower',
        documentation: 'Converts a string to lowercase. ',
        insertText: 'StringLower(${})'
    },
    {
        label: 'StringMid',
        documentation: 'Extracts a number of characters from a string. ',
        insertText: 'StringMid(${})'
    },
    {
        label: 'StringRegExp',
        documentation: 'Check if a string fits a given regular expression pattern. ',
        insertText: 'StringRegExp(${})'
    },
    {
        label: 'StringRegExpReplace',
        documentation: 'Replace text in a string based on regular expressions. ',
        insertText: 'StringRegExpReplace(${})'
    },
    {
        label: 'StringReplace',
        documentation: 'Replaces substrings in a string. ',
        insertText: 'StringReplace(${})'
    },
    {
        label: 'StringReverse',
        documentation: 'Reverses the contents of the specified string. ',
        insertText: 'StringReverse(${})'
    },
    {
        label: 'StringRight',
        documentation: 'Returns a number of characters from the right-hand side of a string. ',
        insertText: 'StringRight(${})'
    },
    {
        label: 'StringSplit',
        documentation: 'Splits up a string into substrings depending on the given delimiters. ',
        insertText: 'StringSplit(${})'
    },
    {
        label: 'StringStripCR',
        documentation: 'Removes all carriage return values ( Chr(13) ) from a string. ',
        insertText: 'StringStripCR(${})'
    },
    {
        label: 'StringStripWS',
        documentation: 'Strips the white space in a string. ',
        insertText: 'StringStripWS(${})'
    },
    {
        label: 'StringToASCIIArray',
        documentation: 'Converts a string to an array containing the ASCII code of each character. ',
        insertText: 'StringToASCIIArray(${})'
    },
    {
        label: 'StringToBinary',
        documentation: 'Converts a string into binary data. ',
        insertText: 'StringToBinary(${})'
    },
    {
        label: 'StringTrimLeft',
        documentation: 'Trims a number of characters from the left hand side of a string. ',
        insertText: 'StringTrimLeft(${})'
    },
    {
        label: 'StringTrimRight',
        documentation: 'Trims a number of characters from the right hand side of a string. ',
        insertText: 'StringTrimRight(${})'
    },
    {
        label: 'StringUpper',
        documentation: 'Converts a string to uppercase. ',
        insertText: 'StringUpper(${})'
    },
    {
        label: 'Tan',
        documentation: 'Calculates the tangent of a number. ',
        insertText: 'Tan(${})'
    },
    {
        label: 'TCPAccept',
        documentation: 'Permits an incoming connection attempt on a socket. ',
        insertText: 'TCPAccept(${})'
    },
    {
        label: 'TCPCloseSocket',
        documentation: 'Closes a TCP socket. ',
        insertText: 'TCPCloseSocket(${})'
    },
    {
        label: 'TCPConnect',
        documentation: 'Create a socket connected to an existing server. ',
        insertText: 'TCPConnect(${})'
    },
    {
        label: 'TCPListen',
        documentation: 'Creates a socket listening for an incoming connection. ',
        insertText: 'TCPListen(${})'
    },
    {
        label: 'TCPNameToIP',
        documentation: 'Converts an Internet name to IP address. ',
        insertText: 'TCPNameToIP(${})'
    },
    {
        label: 'TCPRecv',
        documentation: 'Receives data from a connected socket. ',
        insertText: 'TCPRecv(${})'
    },
    {
        label: 'TCPSend',
        documentation: 'Sends data on a connected socket. ',
        insertText: 'TCPSend(${})'
    },
    {
        label: 'TCPShutdown,',
        documentation: 'TCPShutdown Stops TCP services. ',
        insertText: 'TCPShutdown,(${})'
    },
    {
        label: 'TCPStartup,',
        documentation: 'TCPStartup Starts TCP services. ',
        insertText: 'TCPStartup,(${})'
    },
    {
        label: 'TimerDiff',
        documentation: 'Returns the difference in time from a previous call to TimerInit(). ',
        insertText: 'TimerDiff(${})'
    },
    {
        label: 'TimerInit',
        documentation: 'Returns a handle that can be passed to TimerDiff() to calculate the difference in milliseconds. ',
        insertText: 'TimerInit(${})'
    },
    {
        label: 'ToolTip',
        documentation: 'Creates a tooltip anywhere on the screen. ',
        insertText: 'ToolTip(${})'
    },
    {
        label: 'TrayCreateItem',
        documentation: 'Creates a menuitem control for the tray. ',
        insertText: 'TrayCreateItem(${})'
    },
    {
        label: 'TrayCreateMenu',
        documentation: 'Creates a menu control for the tray menu. ',
        insertText: 'TrayCreateMenu(${})'
    },
    {
        label: 'TrayGetMsg',
        documentation: 'Polls the tray to see if any events have occurred. ',
        insertText: 'TrayGetMsg(${})'
    },
    {
        label: 'TrayItemDelete',
        documentation: 'Deletes a menu/item control from the tray menu. ',
        insertText: 'TrayItemDelete(${})'
    },
    {
        label: 'TrayItemGetHandle',
        documentation: 'Returns the handle for a tray menu(item). ',
        insertText: 'TrayItemGetHandle(${})'
    },
    {
        label: 'TrayItemGetState',
        documentation: 'Gets the current state of a control. ',
        insertText: 'TrayItemGetState(${})'
    },
    {
        label: 'TrayItemGetText',
        documentation: 'Gets the itemtext of a tray menu/item control. ',
        insertText: 'TrayItemGetText(${})'
    },
    {
        label: 'TrayItemSetOnEvent',
        documentation: 'Defines a user-defined function to be called when a tray item is clicked. ',
        insertText: 'TrayItemSetOnEvent(${})'
    },
    {
        label: 'TrayItemSetState',
        documentation: 'Sets the state of a tray menu/item control. ',
        insertText: 'TrayItemSetState(${})'
    },
    {
        label: 'TrayItemSetText',
        documentation: 'Sets the itemtext of a tray menu/item control. ',
        insertText: 'TrayItemSetText(${})'
    },
    {
        label: 'TraySetClick',
        documentation: 'Sets the clickmode of the tray icon - what mouseclicks will display the tray menu. ',
        insertText: 'TraySetClick(${})'
    },
    {
        label: 'TraySetIcon',
        documentation: 'Loads/Sets a specified tray icon. ',
        insertText: 'TraySetIcon(${})'
    },
    {
        label: 'TraySetOnEvent',
        documentation: 'Defines a user function to be called when a special tray action happens. ',
        insertText: 'TraySetOnEvent(${})'
    },
    {
        label: 'TraySetPauseIcon',
        documentation: 'Loads/Sets a specified tray pause icon. ',
        insertText: 'TraySetPauseIcon(${})'
    },
    {
        label: 'TraySetState',
        documentation: 'Sets the state of the tray icon. ',
        insertText: 'TraySetState(${})'
    },
    {
        label: 'TraySetToolTip',
        documentation: '(Re)Sets the tooltip text for the tray icon. ',
        insertText: 'TraySetToolTip(${})'
    },
    {
        label: 'TrayTip',
        documentation: 'Displays a balloon tip from the AutoIt Icon. ',
        insertText: 'TrayTip(${})'
    },
    {
        label: 'UBound',
        documentation: 'Returns the size of array dimensions or the number of keys in a map. ',
        insertText: 'UBound(${})'
    },
    {
        label: 'UDPBind',
        documentation: 'Create a socket bound to an incoming connection. ',
        insertText: 'UDPBind(${})'
    },
    {
        label: 'UDPCloseSocket',
        documentation: 'Close a UDP socket. ',
        insertText: 'UDPCloseSocket(${})'
    },
    {
        label: 'UDPOpen',
        documentation: 'Open a socket connected to an existing server . ',
        insertText: 'UDPOpen(${})'
    },
    {
        label: 'UDPRecv',
        documentation: 'Receives data from an opened socket. ',
        insertText: 'UDPRecv(${})'
    },
    {
        label: 'UDPSend',
        documentation: 'Sends data on an opened socket. ',
        insertText: 'UDPSend(${})'
    },
    {
        label: 'UDPShutdown,',
        documentation: 'UDPShutdown Stops UDP services. ',
        insertText: 'UDPShutdown,(${})'
    },
    {
        label: 'UDPStartup,',
        documentation: 'UDPStartup Starts UDP services. ',
        insertText: 'UDPStartup,(${})'
    },
    {
        label: 'VarGetType',
        documentation: 'Returns the internal type representation of a variant. ',
        insertText: 'VarGetType(${})'
    },
    {
        label: 'WinActivate',
        documentation: 'Activates (gives focus to) a window. ',
        insertText: 'WinActivate(${})'
    },
    {
        label: 'WinActive',
        documentation: 'Checks to see if a specified window exists and is currently active. ',
        insertText: 'WinActive(${})'
    },
    {
        label: 'WinClose',
        documentation: 'Closes a window. ',
        insertText: 'WinClose(${})'
    },
    {
        label: 'WinExists',
        documentation: 'Checks to see if a specified window exists. ',
        insertText: 'WinExists(${})'
    },
    {
        label: 'WinFlash',
        documentation: 'Flashes a window in the taskbar. ',
        insertText: 'WinFlash(${})'
    },
    {
        label: 'WinGetCaretPos',
        documentation: 'Returns the coordinates of the caret in the foreground window. ',
        insertText: 'WinGetCaretPos(${})'
    },
    {
        label: 'WinGetClassList',
        documentation: 'Retrieves the classes from a window. ',
        insertText: 'WinGetClassList(${})'
    },
    {
        label: 'WinGetClientSize',
        documentation: 'Retrieves the size of a given window\'s client area. ',
        insertText: 'WinGetClientSize(${})'
    },
    {
        label: 'WinGetHandle',
        documentation: 'Retrieves the internal handle of a window. ',
        insertText: 'WinGetHandle(${})'
    },
    {
        label: 'WinGetPos',
        documentation: 'Retrieves the position and size of a given window. ',
        insertText: 'WinGetPos(${})'
    },
    {
        label: 'WinGetProcess',
        documentation: 'Retrieves the Process ID (PID) associated with a window. ',
        insertText: 'WinGetProcess(${})'
    },
    {
        label: 'WinGetState',
        documentation: 'Retrieves the state of a given window. ',
        insertText: 'WinGetState(${})'
    },
    {
        label: 'WinGetText',
        documentation: 'Retrieves the text from a window. ',
        insertText: 'WinGetText(${})'
    },
    {
        label: 'WinGetTitle',
        documentation: 'Retrieves the full title from a window. ',
        insertText: 'WinGetTitle(${})'
    },
    {
        label: 'WinKill',
        documentation: 'Forces a window to close. ',
        insertText: 'WinKill(${})'
    },
    {
        label: 'WinList',
        documentation: 'Retrieves a list of windows. ',
        insertText: 'WinList(${})'
    },
    {
        label: 'WinMenuSelectItem',
        documentation: 'Invokes a menu item of a window. ',
        insertText: 'WinMenuSelectItem(${})'
    },
    {
        label: 'WinMinimizeAll',
        documentation: 'Minimizes all windows. ',
        insertText: 'WinMinimizeAll(${})'
    },
    {
        label: 'WinMinimizeAllUndo',
        documentation: 'Undoes a previous WinMinimizeAll function. ',
        insertText: 'WinMinimizeAllUndo(${})'
    },
    {
        label: 'WinMove',
        documentation: 'Moves and/or resizes a window. ',
        insertText: 'WinMove(${})'
    },
    {
        label: 'WinSetOnTop',
        documentation: 'Change a window\'s "Always On Top" attribute. ',
        insertText: 'WinSetOnTop(${})'
    },
    {
        label: 'WinSetState',
        documentation: 'Shows, hides, minimizes, maximizes, or restores a window. ',
        insertText: 'WinSetState(${})'
    },
    {
        label: 'WinSetTitle',
        documentation: 'Changes the title of a window. ',
        insertText: 'WinSetTitle(${})'
    },
    {
        label: 'WinSetTrans',
        documentation: 'Sets the transparency of a window. ',
        insertText: 'WinSetTrans(${})'
    },
    {
        label: 'WinWait',
        documentation: 'Pauses execution of the script until the requested window exists. ',
        insertText: 'WinWait(${})'
    },
    {
        label: 'WinWaitActive',
        documentation: 'Pauses execution of the script until the requested window is active. ',
        insertText: 'WinWaitActive(${})'
    },
    {
        label: 'WinWaitClose',
        documentation: 'Pauses execution of the script until the requested window does not exist. ',
        insertText: 'WinWaitClose(${})'
    },
    {
        label: 'WinWaitNotActive',
        documentation: 'Pauses execution of the script until the requested window is not active. ',
        insertText: 'WinWaitNotActive(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Function'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items