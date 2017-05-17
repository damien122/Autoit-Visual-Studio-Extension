'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: 'Abs',
        documentation: 'Calculates the absolute value of a number.'
    },
    {
        label: 'ACos',
        documentation: 'Calculates the arcCosine of a number.'
    },
    {
        label: 'AdlibRegister',
        documentation: 'Registers an Adlib function.'
    },
    {
        label: 'ASin',
        documentation: 'Calculates the arcsine of a number.'
    },
    {
        label: 'Assign',
        documentation: 'Assigns a variable by name with the data.'
    },
    {
        label: 'ATan',
        documentation: 'Calculates the arctangent of a number.'
    },
    {
        label: 'AutoItSetOption',
        documentation: 'Changes the operation of various AutoIt functions/parameters.'
    },
    {
        label: 'AutoItWinGetTitle',
        documentation: 'Retrieves the title of the AutoIt window.'
    },
    {
        label: 'AutoItWinSetTitle',
        documentation: 'Changes the title of the AutoIt window.'
    },
    {
        label: 'Beep',
        documentation: 'Changes the title of the AutoIt window.'
    },
    {
        label: 'Binary',
        documentation: 'Returns the binary representation of an expression.'
    },
    {
        label: 'BinaryLen',
        documentation: 'Returns the number of bytes in a binary variant.'
    },
    {
        label: 'BinaryMid',
        documentation: 'Extracts a number of bytes from a binary variant.'
    },
    {
        label: 'BinaryToString',
        documentation: 'Converts a binary variant into a string.'
    },
    {
        label: 'BitAND',
        documentation: 'Performs a bitwise AND operation.'
    },
    {
        label: 'BitNOT',
        documentation: 'Performs a bitwise NOT operation.'
    },
    {
        label: 'BitOR',
        documentation: 'Performs a bitwise OR operation.'
    },
    {
        label: 'BitRotate',
        documentation: 'Performs a bit shifting operation, with rotation.'
    },
    {
        label: 'BitShift',
        documentation: 'Performs a bit shifting operation.'
    },
    {
        label: 'BitXOR',
        documentation: 'Performs a bitwise exclusive OR (XOR) operation.'
    },
    {
        label: 'BlockInput',
        documentation: 'Disable/enable the mouse and keyboard.'
    },
    {
        label: 'Break',
        documentation: 'Enables or disables the users\' ability to exit a script from the tray icon menu.'
    },
    {
        label: 'Call',
        documentation: 'Calls a user-defined or built-in function contained in first parameter.'
    },
    {
        label: 'CDTray',
        documentation: 'Opens or closes the CD tray.'
    },
    {
        label: 'Ceiling',
        documentation: 'Returns a number rounded up to the next integer.'
    },
    {
        label: 'Chr',
        documentation: 'Returns a character corresponding to an ASCII code.'
    },
    {
        label: 'ChrW',
        documentation: 'Returns a character corresponding to a unicode code.'
    },
    {
        label: 'ClipGet',
        documentation: 'Retrieves text from the clipboard.'
    },
    {
        label: 'ClipPut',
        documentation: 'Writes text to the clipboard.'
    },
    {
        label: 'ConsoleRead',
        documentation: 'Read from the STDIN stream of the AutoIt script process.'
    },
    {
        label: 'ConsoleWrite',
        documentation: 'Writes data to the STDOUT stream. Some text editors can read this stream as can other programs which may be expecting data on this stream.'
    },
    {
        label: 'ConsoleWriteError',
        documentation: 'Writes data to the STDERR stream. Some text editors can read this stream as can other programs which may be expecting data on this stream.'
    },
    {
        label: 'ControlClick',
        documentation: 'Sends a mouse click command to a given control.'
    },
    {
        label: 'ControlCommand',
        documentation: 'Sends a command to a control.'
    },
    {
        label: 'ControlDisable',
        documentation: 'Disables or "grays-out" a control.'
    },
    {
        label: 'ControlEnable',
        documentation: 'Enables a "grayed-out" control.'
    },
    {
        label: 'ControlFocus',
        documentation: 'Sets input focus to a given control on a window.'
    },
    {
        label: 'ControlGetFocus',
        documentation: 'Returns the ControlRef# of the control that has keyboard focus within a specified window.'
    },
    {
        label: 'ControlGetHandle',
        documentation: 'Retrieves the internal handle of a control.'
    },
    {
        label: 'ControlGetPos',
        documentation: 'Retrieves the position and size of a control relative to its window.'
    },
    {
        label: 'ControlGetText',
        documentation: 'Retrieves text from a control.'
    },
    {
        label: 'ControlHide',
        documentation: 'Hides a control.'
    },
    {
        label: 'ControlListView',
        documentation: 'Sends a command to a ListView32 control.'
    },
    {
        label: 'ControlMove',
        documentation: 'Moves a control within a window.'
    },
    {
        label: 'ControlSend',
        documentation: 'Sends a string of characters to a control.'
    },
    {
        label: 'ControlSetText',
        documentation: 'Sets text of a control.'
    },
    {
        label: 'ControlShow',
        documentation: 'Shows a control that was hidden.'
    },
    {
        label: 'ControlTreeView',
        documentation: 'Sends a command to a TreeView32 control.'
    },
    {
        label: 'Cos',
        documentation: 'Calculates the cosine of a number.'
    },
    {
        label: 'Dec',
        documentation: 'Returns a numeric representation of a hexadecimal string.'
    },
    {
        label: 'DirCopy',
        documentation: 'Copies a directory and all sub-directories and files (Similar to xcopy). '
    },
    {
        label: 'DirCreate',
        documentation: 'Creates a directory/folder. '
    },
    {
        label: 'DirGetSize',
        documentation: 'Returns the size in bytes of a given directory. '
    },
    {
        label: 'DirMove',
        documentation: 'Moves a directory and all sub-directories and files. '
    },
    {
        label: 'DirRemove',
        documentation: 'Deletes a directory/folder. '
    },
    {
        label: 'DllCall',
        documentation: 'Dynamically calls a function in a DLL. '
    },
    {
        label: 'DllCallAddress',
        documentation: 'Dynamically calls a function at a specific memory address. '
    },
    {
        label: 'DllCallbackFree',
        documentation: 'Frees a previously created handle created with DllCallbackRegister. '
    },
    {
        label: 'DllCallbackGetPtr',
        documentation: 'Returns the pointer to a callback function that can be passed to the Win32 API. '
    },
    {
        label: 'DllCallbackRegister',
        documentation: 'Creates a user-defined DLL Callback function. '
    },
    {
        label: 'DllClose',
        documentation: 'Closes a previously opened DLL. '
    },
    {
        label: 'DllOpen',
        documentation: 'Opens a DLL file for use in DllCall. '
    },
    {
        label: 'DllStructCreate',
        documentation: 'Creates a C/C++ style structure to be used in DllCall. '
    },
    {
        label: 'DllStructGetData',
        documentation: 'Returns the data of an element of the struct. '
    },
    {
        label: 'DllStructGetPtr',
        documentation: 'Returns the pointer to the struct or an element in the struct. '
    },
    {
        label: 'DllStructGetSize',
        documentation: 'Returns the size of the struct in bytes. '
    },
    {
        label: 'DllStructSetData',
        documentation: 'Sets the data of an element in the struct. '
    },
    {
        label: 'DriveGetDrive',
        documentation: 'Returns an array containing the enumerated drives. '
    },
    {
        label: 'DriveGetFileSystem',
        documentation: 'Returns File System Type of a drive. '
    },
    {
        label: 'DriveGetLabel',
        documentation: 'Returns Volume Label of a drive, if it has one. '
    },
    {
        label: 'DriveGetSerial',
        documentation: 'Returns Serial Number of a drive. '
    },
    {
        label: 'DriveGetType',
        documentation: 'Returns drive type. '
    },
    {
        label: 'DriveMapAdd',
        documentation: 'Maps a network drive. '
    },
    {
        label: 'DriveMapDel',
        documentation: 'Disconnects a network drive. '
    },
    {
        label: 'DriveMapGet',
        documentation: 'Retrieves the details of a mapped drive. '
    },
    {
        label: 'DriveSetLabel',
        documentation: 'Sets the Volume Label of a drive. '
    },
    {
        label: 'DriveSpaceFree',
        documentation: 'Returns the free disk space of a path in Megabytes. '
    },
    {
        label: 'DriveSpaceTotal',
        documentation: 'Returns the total disk space of a path in Megabytes. '
    },
    {
        label: 'DriveStatus',
        documentation: 'Returns the status of the drive as a string. '
    },
    {
        label: 'EnvGet',
        documentation: 'Retrieves an environment variable. '
    },
    {
        label: 'EnvSet',
        documentation: 'Writes an environment variable. '
    },
    {
        label: 'EnvUpdate',
        documentation: 'Refreshes the OS environment. '
    },
    {
        label: 'Eval',
        documentation: 'Return the value of the variable defined by a string. '
    },
    {
        label: 'Execute',
        documentation: 'Execute an expression. '
    },
    {
        label: 'Exp',
        documentation: 'Calculates e to the power of a number. '
    },
    {
        label: 'FileChangeDir',
        documentation: 'Changes the current working directory. '
    },
    {
        label: 'FileClose',
        documentation: 'Closes a previously opened file. '
    },
    {
        label: 'FileCopy',
        documentation: 'Copies one or more files. '
    },
    {
        label: 'FileCreateNTFSLink',
        documentation: 'Creates an NTFS hardlink to a file or a directory. '
    },
    {
        label: 'FileCreateShortcut',
        documentation: 'Creates a shortcut (.lnk) to a file. '
    },
    {
        label: 'FileDelete',
        documentation: 'Delete one or more files. '
    },
    {
        label: 'FileExists',
        documentation: 'Checks if a file or directory exists. '
    },
    {
        label: 'FileFindFirstFile',
        documentation: 'Creates a search handle, defined by a path and file mask. '
    },
    {
        label: 'FileFindNextFile',
        documentation: 'Returns the next filename defined by the search handle. '
    },
    {
        label: 'FileFlush',
        documentation: 'Flushes the file\'s buffer to disk. '
    },
    {
        label: 'FileGetAttrib',
        documentation: 'Returns a code string representing a file\'s attributes. '
    },
    {
        label: 'FileGetEncoding',
        documentation: 'Determines the text encoding used in a file. '
    },
    {
        label: 'FileGetLongName',
        documentation: 'Returns the long path+name of the path+name passed. '
    },
    {
        label: 'FileGetPos',
        documentation: 'Retrieves the current file position. '
    },
    {
        label: 'FileGetShortcut',
        documentation: 'Retrieves details about a shortcut. '
    },
    {
        label: 'FileGetShortName',
        documentation: 'Returns the 8.3 short path+name of the path+name passed. '
    },
    {
        label: 'FileGetSize',
        documentation: 'Returns the size of a file in bytes. '
    },
    {
        label: 'FileGetTime',
        documentation: 'Returns the time and date information for a file. '
    },
    {
        label: 'FileGetVersion',
        documentation: 'Returns version information stored in a file. '
    },
    {
        label: 'FileInstall',
        documentation: 'Include and install a file with the compiled script. '
    },
    {
        label: 'FileMove',
        documentation: 'Moves one or more files. '
    },
    {
        label: 'FileOpen',
        documentation: 'Opens a file for reading or writing. '
    },
    {
        label: 'FileOpenDialog',
        documentation: 'Initiates a Open File Dialog. '
    },
    {
        label: 'FileRead',
        documentation: 'Read in a number of characters from a previously opened file. '
    },
    {
        label: 'FileReadLine',
        documentation: 'Read in a line of text from a previously opened text file. '
    },
    {
        label: 'FileReadToArray',
        documentation: 'Reads the specified file into an array. '
    },
    {
        label: 'FileRecycle',
        documentation: 'Sends a file or directory to the recycle bin. '
    },
    {
        label: 'FileRecycleEmpty',
        documentation: 'Empties the recycle bin. '
    },
    {
        label: 'FileSaveDialog',
        documentation: 'Initiates a Save File Dialog. '
    },
    {
        label: 'FileSelectFolder',
        documentation: 'Initiates a Browse For Folder dialog. '
    },
    {
        label: 'FileSetAttrib',
        documentation: 'Sets the attributes of one or more files/directories. '
    },
    {
        label: 'FileSetEnd',
        documentation: 'Sets the end of the file at the current file position. '
    },
    {
        label: 'FileSetPos',
        documentation: 'Sets the current file position. '
    },
    {
        label: 'FileSetTime',
        documentation: 'Sets the timestamp of one of more files. '
    },
    {
        label: 'FileWrite',
        documentation: 'Write text/data to the end of a previously opened file. '
    },
    {
        label: 'FileWriteLine',
        documentation: 'Append a line of text to the end of a previously opened text file. '
    },
    {
        label: 'Floor',
        documentation: 'Returns a number rounded down to the closest integer. '
    },
    {
        label: 'FtpSetProxy',
        documentation: 'Sets the internet proxy to use for ftp access. '
    },
    {
        label: 'FuncName',
        documentation: 'Returns the name of a function stored in a variable. '
    },
    {
        label: 'GUICreate',
        documentation: 'Create a GUI window. '
    },
    {
        label: 'GUICtrlCreateAvi',
        documentation: 'Creates an AVI video control for the GUI. '
    },
    {
        label: 'GUICtrlCreateButton',
        documentation: 'Creates a Button control for the GUI. '
    },
    {
        label: 'GUICtrlCreateCheckbox',
        documentation: 'Creates a Checkbox control for the GUI. '
    },
    {
        label: 'GUICtrlCreateCombo',
        documentation: 'Creates a ComboBox control for the GUI. '
    },
    {
        label: 'GUICtrlCreateContextMenu',
        documentation: 'Creates a context menu for a control or entire GUI window. '
    },
    {
        label: 'GUICtrlCreateDate',
        documentation: 'Creates a date control for the GUI. '
    },
    {
        label: 'GUICtrlCreateDummy',
        documentation: 'Creates a Dummy control for the GUI. '
    },
    {
        label: 'GUICtrlCreateEdit',
        documentation: 'Creates an Edit control for the GUI. '
    },
    {
        label: 'GUICtrlCreateGraphic',
        documentation: 'Creates a Graphic control for the GUI. '
    },
    {
        label: 'GUICtrlCreateGroup',
        documentation: 'Creates a Group control for the GUI. '
    },
    {
        label: 'GUICtrlCreateIcon',
        documentation: 'Creates an Icon control for the GUI. '
    },
    {
        label: 'GUICtrlCreateInput',
        documentation: 'Creates an Input control for the GUI. '
    },
    {
        label: 'GUICtrlCreateLabel',
        documentation: 'Creates a static Label control for the GUI. '
    },
    {
        label: 'GUICtrlCreateList',
        documentation: 'Creates a List control for the GUI. '
    },
    {
        label: 'GUICtrlCreateListView',
        documentation: 'Creates a ListView control for the GUI. '
    },
    {
        label: 'GUICtrlCreateListViewItem',
        documentation: 'Creates a ListView item. '
    },
    {
        label: 'GUICtrlCreateMenu',
        documentation: 'Creates a Menu control for the GUI. '
    },
    {
        label: 'GUICtrlCreateMenuItem',
        documentation: 'Creates a MenuItem control for the GUI. '
    },
    {
        label: 'GUICtrlCreateMonthCal',
        documentation: 'Creates a month calendar control for the GUI. '
    },
    {
        label: 'GUICtrlCreateObj',
        documentation: 'Creates an ActiveX control in the GUI. '
    },
    {
        label: 'GUICtrlCreatePic',
        documentation: 'Creates a Picture control for the GUI. '
    },
    {
        label: 'GUICtrlCreateProgress',
        documentation: 'Creates a Progress control for the GUI. '
    },
    {
        label: 'GUICtrlCreateRadio',
        documentation: 'Creates a Radio button control for the GUI. '
    },
    {
        label: 'GUICtrlCreateSlider',
        documentation: 'Creates a Slider control for the GUI. '
    },
    {
        label: 'GUICtrlCreateTab',
        documentation: 'Creates a Tab control for the GUI. '
    },
    {
        label: 'GUICtrlCreateTabItem',
        documentation: 'Creates a TabItem control within an existing tab control in the GUI. '
    },
    {
        label: 'GUICtrlCreateTreeView',
        documentation: 'Creates a TreeView control for the GUI. '
    },
    {
        label: 'GUICtrlCreateTreeViewItem',
        documentation: 'Creates a TreeViewItem control for the GUI. '
    },
    {
        label: 'GUICtrlCreateUpdown',
        documentation: 'Creates an UpDown control for the GUI. '
    },
    {
        label: 'GUICtrlDelete',
        documentation: 'Deletes a control. '
    },
    {
        label: 'GUICtrlGetHandle',
        documentation: 'Returns the handle for a control and some special (item) handles (Menu, ContextMenu, TreeViewItem). '
    },
    {
        label: 'GUICtrlGetState',
        documentation: 'Gets the current state of a control. '
    },
    {
        label: 'GUICtrlRead',
        documentation: 'Read state or data of a control. '
    },
    {
        label: 'GUICtrlRecvMsg',
        documentation: 'Send a message to a control and retrieve information in lParam. '
    },
    {
        label: 'GUICtrlRegisterListViewSort',
        documentation: 'Register a user defined function for an internal listview sorting callback function. '
    },
    {
        label: 'GUICtrlSendMsg',
        documentation: 'Send a message to a control. '
    },
    {
        label: 'GUICtrlSendToDummy',
        documentation: 'Sends a message to a Dummy control. '
    },
    {
        label: 'GUICtrlSetBkColor',
        documentation: 'Sets the background color of a control. '
    },
    {
        label: 'GUICtrlSetColor',
        documentation: 'Sets the text color of a control. '
    },
    {
        label: 'GUICtrlSetCursor',
        documentation: 'Sets the mouse cursor icon for a particular control. '
    },
    {
        label: 'GUICtrlSetData',
        documentation: 'Modifies the data for a control. '
    },
    {
        label: 'GUICtrlSetDefBkColor',
        documentation: 'Sets the default background color of all the controls of the GUI window. '
    },
    {
        label: 'GUICtrlSetDefColor',
        documentation: 'Sets the default text color of all the controls of the GUI window. '
    },
    {
        label: 'GUICtrlSetFont',
        documentation: 'Sets the font for a control. '
    },
    {
        label: 'GUICtrlSetGraphic',
        documentation: 'Modifies the data for a control. '
    },
    {
        label: 'GUICtrlSetImage',
        documentation: 'Sets the bitmap or icon image to use for a control. '
    },
    {
        label: 'GUICtrlSetLimit',
        documentation: 'Limits the number of characters/pixels for a control. '
    },
    {
        label: 'GUICtrlSetOnEvent',
        documentation: 'Defines a user-defined function to be called when a control is clicked. '
    },
    {
        label: 'GUICtrlSetPos',
        documentation: 'Changes the position of a control within the GUI window. '
    },
    {
        label: 'GUICtrlSetResizing',
        documentation: 'Defines the resizing method used by a control. '
    },
    {
        label: 'GUICtrlSetState',
        documentation: 'Changes the state of a control. '
    },
    {
        label: 'GUICtrlSetStyle',
        documentation: 'Changes the style of a control. '
    },
    {
        label: 'GUICtrlSetTip',
        documentation: 'Sets the tip text associated with a control. '
    },
    {
        label: 'GUIDelete',
        documentation: 'Deletes a GUI window and all controls that it contains. '
    },
    {
        label: 'GUIGetCursorInfo',
        documentation: 'Gets the mouse cursor position relative to GUI window. '
    },
    {
        label: 'GUIGetMsg',
        documentation: 'Polls the GUI to see if any events have occurred. '
    },
    {
        label: 'GUIGetStyle',
        documentation: 'Retrieves the styles of a GUI window. '
    },
    {
        label: 'GUIRegisterMsg',
        documentation: 'Register a user defined function for a known Windows Message ID (WM_MSG). '
    },
    {
        label: 'GUISetAccelerators',
        documentation: 'Sets the accelerator table to be used in a GUI window. '
    },
    {
        label: 'GUISetBkColor',
        documentation: 'Sets the background color of the GUI window. '
    },
    {
        label: 'GUISetCoord',
        documentation: 'Sets absolute coordinates for the next control. '
    },
    {
        label: 'GUISetCursor',
        documentation: 'Sets the mouse cursor icon for a GUI window. '
    },
    {
        label: 'GUISetFont',
        documentation: 'Sets the default font for a GUI window. '
    },
    {
        label: 'GUISetHelp',
        documentation: 'Sets an executable file that will be run when F1 is pressed. '
    },
    {
        label: 'GUISetIcon',
        documentation: 'Sets the icon used in a GUI window. '
    },
    {
        label: 'GUISetOnEvent',
        documentation: 'Defines a user function to be called when a system button is clicked. '
    },
    {
        label: 'GUISetState',
        documentation: 'Changes the state of a GUI window. '
    },
    {
        label: 'GUISetStyle',
        documentation: 'Changes the styles of a GUI window. '
    },
    {
        label: 'GUIStartGroup',
        documentation: 'Defines that any subsequent controls that are created will be "grouped" together. '
    },
    {
        label: 'GUISwitch',
        documentation: 'Switches the current window used for GUI functions. '
    },
    {
        label: 'Hex',
        documentation: 'Returns a string representation of an integer or of a binary type converted to hexadecimal. '
    },
    {
        label: 'HotKeySet',
        documentation: 'Sets a hotkey that calls a user function. '
    },
    {
        label: 'HttpSetProxy',
        documentation: 'Sets the internet proxy to use for http access. '
    },
    {
        label: 'HttpSetUserAgent',
        documentation: 'Sets the HTTP user-agent string which is sent with all Inet requests. '
    },
    {
        label: 'HWnd',
        documentation: 'Converts an expression into an HWND handle. '
    },
    {
        label: 'InetClose',
        documentation: 'Closes a handle returned from InetGet(). '
    },
    {
        label: 'InetGet',
        documentation: 'Downloads a file from the internet using the HTTP, HTTPS or FTP protocol. '
    },
    {
        label: 'InetGetInfo',
        documentation: 'Returns detailed data for a handle returned from InetGet(). '
    },
    {
        label: 'InetGetSize',
        documentation: 'Returns the size (in bytes) of a file located on the internet. '
    },
    {
        label: 'InetRead',
        documentation: 'Downloads a file from the internet using the HTTP, HTTPS or FTP protocol. '
    },
    {
        label: 'IniDelete',
        documentation: 'Deletes a value from a standard format .ini file. '
    },
    {
        label: 'IniRead',
        documentation: 'Reads a value from a standard format .ini file. '
    },
    {
        label: 'IniReadSection',
        documentation: 'Reads all key/value pairs from a section in a standard format .ini file. '
    },
    {
        label: 'IniReadSectionNames',
        documentation: 'Reads all sections in a standard format .ini file. '
    },
    {
        label: 'IniRenameSection',
        documentation: 'Renames a section in a standard format .ini file. '
    },
    {
        label: 'IniWrite',
        documentation: 'Writes a value to a standard format .ini file. '
    },
    {
        label: 'IniWriteSection',
        documentation: 'Writes a section to a standard format .ini file. '
    },
    {
        label: 'InputBox',
        documentation: 'Displays an input box to ask the user to enter a string. '
    },
    {
        label: 'Int',
        documentation: 'Returns the integer (whole number) representation of an expression. '
    },
    {
        label: 'IsAdmin',
        documentation: 'Checks if the current user has full administrator privileges. '
    },
    {
        label: 'IsArray',
        documentation: 'Checks if a variable is an array type. '
    },
    {
        label: 'IsBinary',
        documentation: 'Checks if a variable or expression is a binary type. '
    },
    {
        label: 'IsBool',
        documentation: 'Checks if a variable\'s base type is boolean. '
    },
    {
        label: 'IsDeclared',
        documentation: 'Check if a variable has been declared. '
    },
    {
        label: 'IsDllStruct',
        documentation: 'Checks if a variable is a DllStruct type. '
    },
    {
        label: 'IsFloat',
        documentation: 'Checks if the value of a variable or expression has a fractional component. '
    },
    {
        label: 'IsFunc',
        documentation: 'Checks if a variable or expression is a function type. '
    },
    {
        label: 'IsHWnd',
        documentation: 'Checks if a variable\'s base type is a pointer and window handle. '
    },
    {
        label: 'IsInt',
        documentation: 'Checks if the value of a variable or expression has no fractional component. '
    },
    {
        label: 'IsKeyword',
        documentation: 'Checks if a variable is a keyword (for example, Default). '
    },
    {
        label: 'IsNumber',
        documentation: 'Checks if a variable\'s base type is numeric. '
    },
    {
        label: 'IsObj',
        documentation: 'Checks if a variable or expression is an object type. '
    },
    {
        label: 'IsPtr',
        documentation: 'Checks if a variable\'s base type is a pointer. '
    },
    {
        label: 'IsString',
        documentation: 'Checks if a variable is a string type. '
    },
    {
        label: 'Log',
        documentation: 'Calculates the natural logarithm of a number. '
    },
    {
        label: 'MemGetStats',
        documentation: 'Retrieves memory related information. '
    },
    {
        label: 'Mod',
        documentation: 'Performs the modulus operation. '
    },
    {
        label: 'MouseClick',
        documentation: 'Perform a mouse click operation. '
    },
    {
        label: 'MouseClickDrag',
        documentation: 'Perform a mouse click and drag operation. '
    },
    {
        label: 'MouseDown',
        documentation: 'Perform a mouse down event at the current mouse position. '
    },
    {
        label: 'MouseGetCursor',
        documentation: 'Returns the cursor ID Number for the current Mouse Cursor. '
    },
    {
        label: 'MouseGetPos',
        documentation: 'Retrieves the current position of the mouse cursor. '
    },
    {
        label: 'MouseMove',
        documentation: 'Moves the mouse pointer. '
    },
    {
        label: 'MouseUp',
        documentation: 'Perform a mouse up event at the current mouse position. '
    },
    {
        label: 'MouseWheel',
        documentation: 'Moves the mouse wheel up or down. '
    },
    {
        label: 'MsgBox',
        documentation: 'Displays a simple message box with optional timeout. '
    },
    {
        label: 'Number',
        documentation: 'Returns the numeric representation of an expression. '
    },
    {
        label: 'ObjCreate',
        documentation: 'Creates a reference to a COM object from the given classname. '
    },
    {
        label: 'ObjCreateInterface',
        documentation: 'Creates a reference to an object from the given classname/object pointer, interface identifier and description string. '
    },
    {
        label: 'ObjEvent',
        documentation: 'Handles incoming events from the given Object. '
    },
    {
        label: 'ObjGet',
        documentation: 'Retrieves a reference to a COM object from an existing process or filename. '
    },
    {
        label: 'ObjName',
        documentation: 'Returns the name or interface description of an Object. '
    },
    {
        label: 'OnAutoItExitRegister',
        documentation: 'Registers a function to be called when AutoIt exits. '
    },
    {
        label: 'OnAutoItExitUnRegister',
        documentation: 'UnRegisters a function that was called when AutoIt exits. '
    },
    {
        label: 'Ping',
        documentation: 'Pings a host and returns the roundtrip-time. '
    },
    {
        label: 'PixelChecksum',
        documentation: 'Generates a checksum for a region of pixels. '
    },
    {
        label: 'PixelGetColor',
        documentation: 'Returns a pixel color according to x,y pixel coordinates. '
    },
    {
        label: 'PixelSearch',
        documentation: 'Searches a rectangle of pixels for the pixel color provided. '
    },
    {
        label: 'ProcessClose',
        documentation: 'Terminates a named process. '
    },
    {
        label: 'ProcessExists',
        documentation: 'Checks to see if a specified process exists. '
    },
    {
        label: 'ProcessGetStats',
        documentation: 'Returns an array about Memory or IO infos of a running process. '
    },
    {
        label: 'ProcessList',
        documentation: 'Returns an array listing the currently running processes (names and PIDs). '
    },
    {
        label: 'ProcessSetPriority',
        documentation: 'Changes the priority of a process. '
    },
    {
        label: 'ProcessWait',
        documentation: 'Pauses script execution until a given process exists. '
    },
    {
        label: 'ProcessWaitClose',
        documentation: 'Pauses script execution until a given process does not exist. '
    },
    {
        label: 'ProgressOff',
        documentation: 'Turns Progress window off. '
    },
    {
        label: 'ProgressOn',
        documentation: 'Creates a customizable progress bar window. '
    },
    {
        label: 'ProgressSet',
        documentation: 'Sets the position and/or text of a previously created Progress bar window. '
    },
    {
        label: 'Ptr',
        documentation: 'Converts an expression into a pointer variant. '
    },
    {
        label: 'Random',
        documentation: 'Generates a pseudo-random float-type number. '
    },
    {
        label: 'RegDelete',
        documentation: 'Deletes a key or value from the registry. '
    },
    {
        label: 'RegEnumKey',
        documentation: 'Reads the name of a subkey according to its instance. '
    },
    {
        label: 'RegEnumVal',
        documentation: 'Reads the name of a value according to its instance. '
    },
    {
        label: 'RegRead',
        documentation: 'Reads a value from the registry. '
    },
    {
        label: 'RegWrite',
        documentation: 'Creates a key or value in the registry. '
    },
    {
        label: 'Round',
        documentation: 'Returns a number rounded to a specified number of decimal places. '
    },
    {
        label: 'Run',
        documentation: 'Runs an external program. '
    },
    {
        label: 'RunAs',
        documentation: 'Runs an external program under the context of a different user. '
    },
    {
        label: 'RunAsWait',
        documentation: 'Runs an external program under the context of a different user and pauses script execution until the program finishes. '
    },
    {
        label: 'RunWait',
        documentation: 'Runs an external program and pauses script execution until the program finishes. '
    },
    {
        label: 'Send',
        documentation: 'Sends simulated keystrokes to the active window. '
    },
    {
        label: 'SendKeepActive',
        documentation: 'Attempts to keep a specified window active during Send(). '
    },
    {
        label: 'SetError',
        documentation: 'Manually set the value of the @error macro (and optionally @extended, and "Return Value"). '
    },
    {
        label: 'SetExtended',
        documentation: 'Manually set the value of the @extended macro. '
    },
    {
        label: 'ShellExecute',
        documentation: 'Runs an external program using the ShellExecute API. '
    },
    {
        label: 'ShellExecuteWait',
        documentation: 'Runs an external program using the ShellExecute API and pauses script execution until it finishes. '
    },
    {
        label: 'Shutdown',
        documentation: 'Shuts down the system. '
    },
    {
        label: 'Sin',
        documentation: 'Calculates the sine of a number. '
    },
    {
        label: 'Sleep',
        documentation: 'Pause script execution. '
    },
    {
        label: 'SoundPlay',
        documentation: 'Play a sound file. '
    },
    {
        label: 'SoundSetWaveVolume',
        documentation: 'Sets the system wave volume by percent. '
    },
    {
        label: 'SplashImageOn',
        documentation: 'Creates a customizable image popup window. '
    },
    {
        label: 'SplashOff',
        documentation: 'Turns SplashText or SplashImage off. '
    },
    {
        label: 'SplashTextOn',
        documentation: 'Creates a customizable text popup window. '
    },
    {
        label: 'Sqrt',
        documentation: 'Calculates the square-root of a number. '
    },
    {
        label: 'SRandom',
        documentation: 'Set Seed for random number generation. '
    },
    {
        label: 'StatusbarGetText',
        documentation: 'Retrieves the text from a standard status bar control. '
    },
    {
        label: 'StderrRead',
        documentation: 'Reads from the STDERR stream of a previously run child process. '
    },
    {
        label: 'StdinWrite',
        documentation: 'Writes a number of characters to the STDIN stream of a previously run child process. '
    },
    {
        label: 'StdioClose',
        documentation: 'Closes all resources associated with a process previously run with STDIO redirection. '
    },
    {
        label: 'StdoutRead',
        documentation: 'Reads from the STDOUT stream of a previously run child process. '
    },
    {
        label: 'String',
        documentation: 'Returns the string representation of an expression. '
    },
    {
        label: 'StringAddCR',
        documentation: 'Takes a string and prefixes all linefeed characters ( Chr(10) ) with a carriage return character ( Chr(13) ). '
    },
    {
        label: 'StringCompare',
        documentation: 'Compares two strings with options. '
    },
    {
        label: 'StringFormat',
        documentation: 'Returns a formatted string (similar to the C sprintf() function). '
    },
    {
        label: 'StringFromASCIIArray',
        documentation: 'Converts an array of ASCII codes to a string. '
    },
    {
        label: 'StringInStr',
        documentation: 'Checks if a string contains a given substring. '
    },
    {
        label: 'StringIsAlNum',
        documentation: 'Checks if a string contains only alphanumeric characters. '
    },
    {
        label: 'StringIsAlpha',
        documentation: 'Checks if a string contains only alphabetic characters. '
    },
    {
        label: 'StringIsASCII',
        documentation: 'Checks if a string contains only ASCII characters in the range 0x00 - 0x7f (0 - 127). '
    },
    {
        label: 'StringIsDigit',
        documentation: 'Checks if a string contains only digit (0-9) characters. '
    },
    {
        label: 'StringIsFloat',
        documentation: 'Checks if a string is a floating point number. '
    },
    {
        label: 'StringIsInt',
        documentation: 'Checks if a string is an integer. '
    },
    {
        label: 'StringIsLower',
        documentation: 'Checks if a string contains only lowercase characters. '
    },
    {
        label: 'StringIsSpace',
        documentation: 'Checks if a string contains only whitespace characters. '
    },
    {
        label: 'StringIsUpper',
        documentation: 'Checks if a string contains only uppercase characters. '
    },
    {
        label: 'StringIsXDigit',
        documentation: 'Checks if a string contains only hexadecimal digit (0-9, A-F) characters. '
    },
    {
        label: 'StringLeft',
        documentation: 'Returns a number of characters from the left-hand side of a string. '
    },
    {
        label: 'StringLen',
        documentation: 'Returns the number of characters in a string. '
    },
    {
        label: 'StringLower',
        documentation: 'Converts a string to lowercase. '
    },
    {
        label: 'StringMid',
        documentation: 'Extracts a number of characters from a string. '
    },
    {
        label: 'StringRegExp',
        documentation: 'Check if a string fits a given regular expression pattern. '
    },
    {
        label: 'StringRegExpReplace',
        documentation: 'Replace text in a string based on regular expressions. '
    },
    {
        label: 'StringReplace',
        documentation: 'Replaces substrings in a string. '
    },
    {
        label: 'StringReverse',
        documentation: 'Reverses the contents of the specified string. '
    },
    {
        label: 'StringRight',
        documentation: 'Returns a number of characters from the right-hand side of a string. '
    },
    {
        label: 'StringSplit',
        documentation: 'Splits up a string into substrings depending on the given delimiters. '
    },
    {
        label: 'StringStripCR',
        documentation: 'Removes all carriage return values ( Chr(13) ) from a string. '
    },
    {
        label: 'StringStripWS',
        documentation: 'Strips the white space in a string. '
    },
    {
        label: 'StringToASCIIArray',
        documentation: 'Converts a string to an array containing the ASCII code of each character. '
    },
    {
        label: 'StringToBinary',
        documentation: 'Converts a string into binary data. '
    },
    {
        label: 'StringTrimLeft',
        documentation: 'Trims a number of characters from the left hand side of a string. '
    },
    {
        label: 'StringTrimRight',
        documentation: 'Trims a number of characters from the right hand side of a string. '
    },
    {
        label: 'StringUpper',
        documentation: 'Converts a string to uppercase. '
    },
    {
        label: 'Tan',
        documentation: 'Calculates the tangent of a number. '
    },
    {
        label: 'TCPAccept',
        documentation: 'Permits an incoming connection attempt on a socket. '
    },
    {
        label: 'TCPCloseSocket',
        documentation: 'Closes a TCP socket. '
    },
    {
        label: 'TCPConnect',
        documentation: 'Create a socket connected to an existing server. '
    },
    {
        label: 'TCPListen',
        documentation: 'Creates a socket listening for an incoming connection. '
    },
    {
        label: 'TCPNameToIP',
        documentation: 'Converts an Internet name to IP address. '
    },
    {
        label: 'TCPRecv',
        documentation: 'Receives data from a connected socket. '
    },
    {
        label: 'TCPSend',
        documentation: 'Sends data on a connected socket. '
    },
    {
        label: 'TCPShutdown,',
        documentation: 'TCPShutdown Stops TCP services. '
    },
    {
        label: 'TCPStartup,',
        documentation: 'TCPStartup Starts TCP services. '
    },
    {
        label: 'TimerDiff',
        documentation: 'Returns the difference in time from a previous call to TimerInit(). '
    },
    {
        label: 'TimerInit',
        documentation: 'Returns a handle that can be passed to TimerDiff() to calculate the difference in milliseconds. '
    },
    {
        label: 'ToolTip',
        documentation: 'Creates a tooltip anywhere on the screen. '
    },
    {
        label: 'TrayCreateItem',
        documentation: 'Creates a menuitem control for the tray. '
    },
    {
        label: 'TrayCreateMenu',
        documentation: 'Creates a menu control for the tray menu. '
    },
    {
        label: 'TrayGetMsg',
        documentation: 'Polls the tray to see if any events have occurred. '
    },
    {
        label: 'TrayItemDelete',
        documentation: 'Deletes a menu/item control from the tray menu. '
    },
    {
        label: 'TrayItemGetHandle',
        documentation: 'Returns the handle for a tray menu(item). '
    },
    {
        label: 'TrayItemGetState',
        documentation: 'Gets the current state of a control. '
    },
    {
        label: 'TrayItemGetText',
        documentation: 'Gets the itemtext of a tray menu/item control. '
    },
    {
        label: 'TrayItemSetOnEvent',
        documentation: 'Defines a user-defined function to be called when a tray item is clicked. '
    },
    {
        label: 'TrayItemSetState',
        documentation: 'Sets the state of a tray menu/item control. '
    },
    {
        label: 'TrayItemSetText',
        documentation: 'Sets the itemtext of a tray menu/item control. '
    },
    {
        label: 'TraySetClick',
        documentation: 'Sets the clickmode of the tray icon - what mouseclicks will display the tray menu. '
    },
    {
        label: 'TraySetIcon',
        documentation: 'Loads/Sets a specified tray icon. '
    },
    {
        label: 'TraySetOnEvent',
        documentation: 'Defines a user function to be called when a special tray action happens. '
    },
    {
        label: 'TraySetPauseIcon',
        documentation: 'Loads/Sets a specified tray pause icon. '
    },
    {
        label: 'TraySetState',
        documentation: 'Sets the state of the tray icon. '
    },
    {
        label: 'TraySetToolTip',
        documentation: '(Re)Sets the tooltip text for the tray icon. '
    },
    {
        label: 'TrayTip',
        documentation: 'Displays a balloon tip from the AutoIt Icon. '
    },
    {
        label: 'UBound',
        documentation: 'Returns the size of array dimensions or the number of keys in a map. '
    },
    {
        label: 'UDPBind',
        documentation: 'Create a socket bound to an incoming connection. '
    },
    {
        label: 'UDPCloseSocket',
        documentation: 'Close a UDP socket. '
    },
    {
        label: 'UDPOpen',
        documentation: 'Open a socket connected to an existing server . '
    },
    {
        label: 'UDPRecv',
        documentation: 'Receives data from an opened socket. '
    },
    {
        label: 'UDPSend',
        documentation: 'Sends data on an opened socket. '
    },
    {
        label: 'UDPShutdown,',
        documentation: 'UDPShutdown Stops UDP services. '
    },
    {
        label: 'UDPStartup,',
        documentation: 'UDPStartup Starts UDP services. '
    },
    {
        label: 'VarGetType',
        documentation: 'Returns the internal type representation of a variant. '
    },
    {
        label: 'WinActivate',
        documentation: 'Activates (gives focus to) a window. '
    },
    {
        label: 'WinActive',
        documentation: 'Checks to see if a specified window exists and is currently active. '
    },
    {
        label: 'WinClose',
        documentation: 'Closes a window. '
    },
    {
        label: 'WinExists',
        documentation: 'Checks to see if a specified window exists. '
    },
    {
        label: 'WinFlash',
        documentation: 'Flashes a window in the taskbar. '
    },
    {
        label: 'WinGetCaretPos',
        documentation: 'Returns the coordinates of the caret in the foreground window. '
    },
    {
        label: 'WinGetClassList',
        documentation: 'Retrieves the classes from a window. '
    },
    {
        label: 'WinGetClientSize',
        documentation: 'Retrieves the size of a given window\'s client area. '
    },
    {
        label: 'WinGetHandle',
        documentation: 'Retrieves the internal handle of a window. '
    },
    {
        label: 'WinGetPos',
        documentation: 'Retrieves the position and size of a given window. '
    },
    {
        label: 'WinGetProcess',
        documentation: 'Retrieves the Process ID (PID) associated with a window. '
    },
    {
        label: 'WinGetState',
        documentation: 'Retrieves the state of a given window. '
    },
    {
        label: 'WinGetText',
        documentation: 'Retrieves the text from a window. '
    },
    {
        label: 'WinGetTitle',
        documentation: 'Retrieves the full title from a window. '
    },
    {
        label: 'WinKill',
        documentation: 'Forces a window to close. '
    },
    {
        label: 'WinList',
        documentation: 'Retrieves a list of windows. '
    },
    {
        label: 'WinMenuSelectItem',
        documentation: 'Invokes a menu item of a window. '
    },
    {
        label: 'WinMinimizeAll',
        documentation: 'Minimizes all windows. '
    },
    {
        label: 'WinMinimizeAllUndo',
        documentation: 'Undoes a previous WinMinimizeAll function. '
    },
    {
        label: 'WinMove',
        documentation: 'Moves and/or resizes a window. '
    },
    {
        label: 'WinSetOnTop',
        documentation: 'Change a window\'s "Always On Top" attribute. '
    },
    {
        label: 'WinSetState',
        documentation: 'Shows, hides, minimizes, maximizes, or restores a window. '
    },
    {
        label: 'WinSetTitle',
        documentation: 'Changes the title of a window. '
    },
    {
        label: 'WinSetTrans',
        documentation: 'Sets the transparency of a window. '
    },
    {
        label: 'WinWait',
        documentation: 'Pauses execution of the script until the requested window exists. '
    },
    {
        label: 'WinWaitActive',
        documentation: 'Pauses execution of the script until the requested window is active. '
    },
    {
        label: 'WinWaitClose',
        documentation: 'Pauses execution of the script until the requested window does not exist. '
    },
    {
        label: 'WinWaitNotActive',
        documentation: 'Pauses execution of the script until the requested window is not active. '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Function'
    // i.insertText = new SnippetString(i.insertText)
}

module.exports = items