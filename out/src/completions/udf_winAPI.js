'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_AttachConsole',
        documentation: 'Attaches the calling process to the console of the specified process',
        insertText: '_WinAPI_AttachConsole(${})'
    },
    {
        label: '_WinAPI_AttachThreadInput',
        documentation: 'Attaches the input processing mechanism of one thread to that of another thread',
        insertText: '_WinAPI_AttachThreadInput(${})'
    },
    {
        label: '_WinAPI_Beep',
        documentation: 'Generates simple tones on the speaker',
        insertText: '_WinAPI_Beep(${})'
    },
    {
        label: '_WinAPI_BitBlt',
        documentation: 'Performs a bit-block transfer of color data',
        insertText: '_WinAPI_BitBlt(${})'
    },
    {
        label: '_WinAPI_CallNextHookEx',
        documentation: 'Passes the hook information to the next hook procedure in the current hook chain',
        insertText: '_WinAPI_CallNextHookEx(${})'
    },
    {
        label: '_WinAPI_CallWindowProc',
        documentation: 'Passes the hook information to the next hook procedure in the current hook chain',
        insertText: '_WinAPI_CallWindowProc(${})'
    },
    {
        label: '_WinAPI_ClientToScreen',
        documentation: 'Converts the client coordinates of a specified point to screen coordinates',
        insertText: '_WinAPI_ClientToScreen(${})'
    },
    {
        label: '_WinAPI_CloseHandle',
        documentation: 'Closes an open object handle',
        insertText: '_WinAPI_CloseHandle(${})'
    },
    {
        label: '_WinAPI_CombineRgn',
        documentation: 'Combines two regions and stores the result in a third region',
        insertText: '_WinAPI_CombineRgn(${})'
    },
    {
        label: '_WinAPI_CommDlgExtendedError',
        documentation: 'Returns a common dialog box error string. This string indicates the most recent error to occur during the execution of one of the common dialog box functions',
        insertText: '_WinAPI_CommDlgExtendedError(${})'
    },
    {
        label: '_WinAPI_CopyIcon',
        documentation: 'Copies the specified icon from another module',
        insertText: '_WinAPI_CopyIcon(${})'
    },
    {
        label: '_WinAPI_CreateBitmap',
        documentation: 'Creates a bitmap with the specified width, height, and color format',
        insertText: '_WinAPI_CreateBitmap(${})'
    },
    {
        label: '_WinAPI_CreateCompatibleBitmap',
        documentation: 'Creates a bitmap compatible with the specified device context',
        insertText: '_WinAPI_CreateCompatibleBitmap(${})'
    },
    {
        label: '_WinAPI_CreateCompatibleDC',
        documentation: 'Creates a memory device context compatible with the specified device',
        insertText: '_WinAPI_CreateCompatibleDC(${})'
    },
    {
        label: '_WinAPI_CreateEvent',
        documentation: 'Creates or opens a named or unnamed event object',
        insertText: '_WinAPI_CreateEvent(${})'
    },
    {
        label: '_WinAPI_CreateFile',
        documentation: 'Creates or opens a file or other device',
        insertText: '_WinAPI_CreateFile(${})'
    },
    {
        label: '_WinAPI_CreateFont',
        documentation: 'Creates a logical font with the specified characteristics',
        insertText: '_WinAPI_CreateFont(${})'
    },
    {
        label: '_WinAPI_CreateFontIndirect',
        documentation: 'Creates a logical font that has specific characteristics',
        insertText: '_WinAPI_CreateFontIndirect(${})'
    },
    {
        label: '_WinAPI_CreatePen',
        documentation: 'Creates a logical pen that has the specified style, width, and color',
        insertText: '_WinAPI_CreatePen(${})'
    },
    {
        label: '_WinAPI_CreateProcess',
        documentation: 'Creates a new process and its primary thread',
        insertText: '_WinAPI_CreateProcess(${})'
    },
    {
        label: '_WinAPI_CreateRectRgn',
        documentation: 'Creates a rectangular region',
        insertText: '_WinAPI_CreateRectRgn(${})'
    },
    {
        label: '_WinAPI_CreateRoundRectRgn',
        documentation: 'Creates a rectangular region with rounded corners',
        insertText: '_WinAPI_CreateRoundRectRgn(${})'
    },
    {
        label: '_WinAPI_CreateSolidBitmap',
        documentation: 'Creates a solid color bitmap',
        insertText: '_WinAPI_CreateSolidBitmap(${})'
    },
    {
        label: '_WinAPI_CreateSolidBrush',
        documentation: 'Creates a logical brush that has the specified solid color',
        insertText: '_WinAPI_CreateSolidBrush(${})'
    },
    {
        label: '_WinAPI_CreateWindowEx',
        documentation: 'Creates an overlapped, pop-up, or child window',
        insertText: '_WinAPI_CreateWindowEx(${})'
    },
    {
        label: '_WinAPI_DefWindowProc',
        documentation: 'Call the default window procedure to provide default processing',
        insertText: '_WinAPI_DefWindowProc(${})'
    },
    {
        label: '_WinAPI_DeleteDC',
        documentation: 'Deletes the specified device context',
        insertText: '_WinAPI_DeleteDC(${})'
    },
    {
        label: '_WinAPI_DeleteObject',
        documentation: 'Deletes a logical pen, brush, font, bitmap, region, or palette',
        insertText: '_WinAPI_DeleteObject(${})'
    },
    {
        label: '_WinAPI_DestroyIcon',
        documentation: 'Destroys an icon and frees any memory the icon occupied',
        insertText: '_WinAPI_DestroyIcon(${})'
    },
    {
        label: '_WinAPI_DestroyWindow',
        documentation: 'Destroys the specified window',
        insertText: '_WinAPI_DestroyWindow(${})'
    },
    {
        label: '_WinAPI_DrawEdge',
        documentation: 'Draws one or more edges of rectangle',
        insertText: '_WinAPI_DrawEdge(${})'
    },
    {
        label: '_WinAPI_DrawFrameControl',
        documentation: 'Draws a frame control of the specified type and style',
        insertText: '_WinAPI_DrawFrameControl(${})'
    },
    {
        label: '_WinAPI_DrawIcon',
        documentation: 'Draws an icon or cursor into the specified device context',
        insertText: '_WinAPI_DrawIcon(${})'
    },
    {
        label: '_WinAPI_DrawIconEx',
        documentation: 'Draws an icon or cursor into the specified device context',
        insertText: '_WinAPI_DrawIconEx(${})'
    },
    {
        label: '_WinAPI_DrawLine',
        documentation: 'Draws a line',
        insertText: '_WinAPI_DrawLine(${})'
    },
    {
        label: '_WinAPI_DrawText',
        documentation: 'Draws formatted text in the specified rectangle',
        insertText: '_WinAPI_DrawText(${})'
    },
    {
        label: '_WinAPI_DuplicateHandle',
        documentation: 'Duplicates an object handle',
        insertText: '_WinAPI_DuplicateHandle(${})'
    },
    {
        label: '_WinAPI_EnableWindow',
        documentation: 'Enables or disables mouse and keyboard input to the specified window or control',
        insertText: '_WinAPI_EnableWindow(${})'
    },
    {
        label: '_WinAPI_EnumDisplayDevices',
        documentation: 'Obtains information about the display devices in a system',
        insertText: '_WinAPI_EnumDisplayDevices(${})'
    },
    {
        label: '_WinAPI_EnumWindows',
        documentation: 'Enumerates all windows',
        insertText: '_WinAPI_EnumWindows(${})'
    },
    {
        label: '_WinAPI_EnumWindowsPopup',
        documentation: 'Enumerates popup windows',
        insertText: '_WinAPI_EnumWindowsPopup(${})'
    },
    {
        label: '_WinAPI_EnumWindowsTop',
        documentation: 'Enumerates all top level windows',
        insertText: '_WinAPI_EnumWindowsTop(${})'
    },
    {
        label: '_WinAPI_ExpandEnvironmentStrings',
        documentation: 'Expands environment variable strings and replaces them with their defined values',
        insertText: '_WinAPI_ExpandEnvironmentStrings(${})'
    },
    {
        label: '_WinAPI_ExtractIconEx',
        documentation: 'Creates an array of handles to large or small icons extracted from a file',
        insertText: '_WinAPI_ExtractIconEx(${})'
    },
    {
        label: '_WinAPI_FatalAppExit',
        documentation: 'Displays a message box and terminates the application',
        insertText: '_WinAPI_FatalAppExit(${})'
    },
    {
        label: '_WinAPI_FillRect',
        documentation: 'Fills a rectangle by using the specified brush',
        insertText: '_WinAPI_FillRect(${})'
    },
    {
        label: '_WinAPI_FindExecutable',
        documentation: 'Retrieves the name of the executable file associated with the specified file name',
        insertText: '_WinAPI_FindExecutable(${})'
    },
    {
        label: '_WinAPI_FindWindow',
        documentation: 'Retrieves the handle to the top-level window whose class name and window name match',
        insertText: '_WinAPI_FindWindow(${})'
    },
    {
        label: '_WinAPI_FlashWindow',
        documentation: 'Flashes the specified window one time',
        insertText: '_WinAPI_FlashWindow(${})'
    },
    {
        label: '_WinAPI_FlashWindowEx',
        documentation: 'Flashes the specified window',
        insertText: '_WinAPI_FlashWindowEx(${})'
    },
    {
        label: '_WinAPI_FloatToInt',
        documentation: 'Returns a 4 byte float as an integer value',
        insertText: '_WinAPI_FloatToInt(${})'
    },
    {
        label: '_WinAPI_FlushFileBuffers',
        documentation: 'Flushes the buffers of a specified file and causes all buffered data to be written',
        insertText: '_WinAPI_FlushFileBuffers(${})'
    },
    {
        label: '_WinAPI_FormatMessage',
        documentation: 'Formats a message string',
        insertText: '_WinAPI_FormatMessage(${})'
    },
    {
        label: '_WinAPI_FrameRect',
        documentation: 'Draws a border around the specified rectangle by using the specified brush',
        insertText: '_WinAPI_FrameRect(${})'
    },
    {
        label: '_WinAPI_FreeLibrary',
        documentation: 'Decrements the reference count of the loaded dynamic-link library (DLL) module',
        insertText: '_WinAPI_FreeLibrary(${})'
    },
    {
        label: '_WinAPI_GetAncestor',
        documentation: 'Retrieves the handle to the ancestor of the specified window',
        insertText: '_WinAPI_GetAncestor(${})'
    },
    {
        label: '_WinAPI_GetAsyncKeyState',
        documentation: 'Determines whether a key is up or down at the time the function is called',
        insertText: '_WinAPI_GetAsyncKeyState(${})'
    },
    {
        label: '_WinAPI_GetBkMode',
        documentation: 'Returns the current background mix mode for a specified device context',
        insertText: '_WinAPI_GetBkMode(${})'
    },
    {
        label: '_WinAPI_GetClassName',
        documentation: 'Retrieves the name of the class to which the specified window belongs',
        insertText: '_WinAPI_GetClassName(${})'
    },
    {
        label: '_WinAPI_GetClientHeight',
        documentation: 'Retrieves the height of a window\'s client area',
        insertText: '_WinAPI_GetClientHeight(${})'
    },
    {
        label: '_WinAPI_GetClientRect',
        documentation: 'Retrieves the coordinates of a window\'s client area',
        insertText: '_WinAPI_GetClientRect(${})'
    },
    {
        label: '_WinAPI_GetClientWidth',
        documentation: 'Retrieves the width of a window\'s client area',
        insertText: '_WinAPI_GetClientWidth(${})'
    },
    {
        label: '_WinAPI_GetCurrentProcess',
        documentation: 'Returns the process handle of the calling process',
        insertText: '_WinAPI_GetCurrentProcess(${})'
    },
    {
        label: '_WinAPI_GetCurrentProcessID',
        documentation: 'Returns the process identifier of the calling process',
        insertText: '_WinAPI_GetCurrentProcessID(${})'
    },
    {
        label: '_WinAPI_GetCurrentThread',
        documentation: 'Retrieves a pseudo handle for the calling thread',
        insertText: '_WinAPI_GetCurrentThread(${})'
    },
    {
        label: '_WinAPI_GetCurrentThreadId',
        documentation: 'Returns the thread identifier of the calling thread',
        insertText: '_WinAPI_GetCurrentThreadId(${})'
    },
    {
        label: '_WinAPI_GetCursorInfo',
        documentation: 'Retrieves information about the global cursor',
        insertText: '_WinAPI_GetCursorInfo(${})'
    },
    {
        label: '_WinAPI_GetDC',
        documentation: 'Retrieves a handle of a display device context for the client area a window',
        insertText: '_WinAPI_GetDC(${})'
    },
    {
        label: '_WinAPI_GetDesktopWindow',
        documentation: 'Returns the handle of the Windows desktop window',
        insertText: '_WinAPI_GetDesktopWindow(${})'
    },
    {
        label: '_WinAPI_GetDeviceCaps',
        documentation: 'Retrieves device specific information about a specified device',
        insertText: '_WinAPI_GetDeviceCaps(${})'
    },
    {
        label: '_WinAPI_GetDIBits',
        documentation: 'Retrieves the bits of the specified bitmap and copies them into a buffer as a DIB',
        insertText: '_WinAPI_GetDIBits(${})'
    },
    {
        label: '_WinAPI_GetDlgCtrlID',
        documentation: 'Returns the identifier of the specified control',
        insertText: '_WinAPI_GetDlgCtrlID(${})'
    },
    {
        label: '_WinAPI_GetDlgItem',
        documentation: 'Retrieves the handle of a control in the specified dialog box',
        insertText: '_WinAPI_GetDlgItem(${})'
    },
    {
        label: '_WinAPI_GetFileSizeEx',
        documentation: 'Retrieves the size of the specified file',
        insertText: '_WinAPI_GetFileSizeEx(${})'
    },
    {
        label: '_WinAPI_GetFocus',
        documentation: 'Retrieves the handle of the window that has the keyboard focus',
        insertText: '_WinAPI_GetFocus(${})'
    },
    {
        label: '_WinAPI_GetForegroundWindow',
        documentation: 'Returns the handle of the foreground window',
        insertText: '_WinAPI_GetForegroundWindow(${})'
    },
    {
        label: '_WinAPI_GetGuiResources',
        documentation: 'Retrieves the count of handles to graphical user interface (GUI) objects in use by the specified process',
        insertText: '_WinAPI_GetGuiResources(${})'
    },
    {
        label: '_WinAPI_GetIconInfo',
        documentation: 'Retrieves information about the specified icon or cursor',
        insertText: '_WinAPI_GetIconInfo(${})'
    },
    {
        label: '_WinAPI_GetLastError',
        documentation: 'Returns the calling thread\'s lasterror code value',
        insertText: '_WinAPI_GetLastError(${})'
    },
    {
        label: '_WinAPI_GetLastErrorMessage',
        documentation: 'Returns the calling threads last error message',
        insertText: '_WinAPI_GetLastErrorMessage(${})'
    },
    {
        label: '_WinAPI_GetLayeredWindowAttributes',
        documentation: 'Gets Layered Window Attributes',
        insertText: '_WinAPI_GetLayeredWindowAttributes(${})'
    },
    {
        label: '_WinAPI_GetModuleHandle',
        documentation: 'Returns a module handle for the specified module',
        insertText: '_WinAPI_GetModuleHandle(${})'
    },
    {
        label: '_WinAPI_GetMousePos',
        documentation: 'Returns the current mouse position',
        insertText: '_WinAPI_GetMousePos(${})'
    },
    {
        label: '_WinAPI_GetMousePosX',
        documentation: 'Returns the current mouse X position',
        insertText: '_WinAPI_GetMousePosX(${})'
    },
    {
        label: '_WinAPI_GetMousePosY',
        documentation: 'Returns the current mouse Y position',
        insertText: '_WinAPI_GetMousePosY(${})'
    },
    {
        label: '_WinAPI_GetObject',
        documentation: 'Retrieves information for the specified graphics object',
        insertText: '_WinAPI_GetObject(${})'
    },
    {
        label: '_WinAPI_GetOpenFileName',
        documentation: 'Creates an Open dialog box that lets the user specify the drive, directory, and the name of a file or set of files to open',
        insertText: '_WinAPI_GetOpenFileName(${})'
    },
    {
        label: '_WinAPI_GetOverlappedResult',
        documentation: 'Retrieves the results of an overlapped operation',
        insertText: '_WinAPI_GetOverlappedResult(${})'
    },
    {
        label: '_WinAPI_GetParent',
        documentation: 'Retrieves the handle of the specified child window\'s parent window',
        insertText: '_WinAPI_GetParent(${})'
    },
    {
        label: '_WinAPI_GetProcAddress',
        documentation: 'Retrieves the address of an exported function or variable from the specified module',
        insertText: '_WinAPI_GetProcAddress(${})'
    },
    {
        label: '_WinAPI_GetProcessAffinityMask',
        documentation: 'Obtains the affinity masks for the process and the system',
        insertText: '_WinAPI_GetProcessAffinityMask(${})'
    },
    {
        label: '_WinAPI_GetSaveFileName',
        documentation: 'Creates a Save dialog box that lets the user specify the drive, directory, and name of a file to save',
        insertText: '_WinAPI_GetSaveFileName(${})'
    },
    {
        label: '_WinAPI_GetStdHandle',
        documentation: 'Retrieves a handle for the standard input, standard output, or standard error device',
        insertText: '_WinAPI_GetStdHandle(${})'
    },
    {
        label: '_WinAPI_GetStockObject',
        documentation: 'Retrieves a handle to one of the predefined stock pens, brushes, fonts, or palettes',
        insertText: '_WinAPI_GetStockObject(${})'
    },
    {
        label: '_WinAPI_GetSysColor',
        documentation: 'Retrieves the current color of the specified display element',
        insertText: '_WinAPI_GetSysColor(${})'
    },
    {
        label: '_WinAPI_GetSysColorBrush',
        documentation: 'Retrieves a handle identifying a logical brush that corresponds to the specified color index',
        insertText: '_WinAPI_GetSysColorBrush(${})'
    },
    {
        label: '_WinAPI_GetSystemMetrics',
        documentation: 'Retrieves the specified system metric or system configuration setting',
        insertText: '_WinAPI_GetSystemMetrics(${})'
    },
    {
        label: '_WinAPI_GetTextExtentPoint32',
        documentation: 'Computes the width and height of the specified string of text',
        insertText: '_WinAPI_GetTextExtentPoint32(${})'
    },
    {
        label: '_WinAPI_GetTextMetrics',
        documentation: 'Retrieves basic information for the currently selected font',
        insertText: '_WinAPI_GetTextMetrics(${})'
    },
    {
        label: '_WinAPI_GetWindow',
        documentation: 'Retrieves the handle of a window that has a specified relationship to the specified window',
        insertText: '_WinAPI_GetWindow(${})'
    },
    {
        label: '_WinAPI_GetWindowDC',
        documentation: 'Retrieves the device context (DC) for the entire window',
        insertText: '_WinAPI_GetWindowDC(${})'
    },
    {
        label: '_WinAPI_GetWindowHeight',
        documentation: 'Returns the height of the window',
        insertText: '_WinAPI_GetWindowHeight(${})'
    },
    {
        label: '_WinAPI_GetWindowLong',
        documentation: 'Retrieves information about the specified window',
        insertText: '_WinAPI_GetWindowLong(${})'
    },
    {
        label: '_WinAPI_GetWindowPlacement',
        documentation: 'Retrieves the placement of the window for Min, Max, and normal positions',
        insertText: '_WinAPI_GetWindowPlacement(${})'
    },
    {
        label: '_WinAPI_GetWindowRect',
        documentation: 'Retrieves the dimensions of the bounding rectangle of the specified window',
        insertText: '_WinAPI_GetWindowRect(${})'
    },
    {
        label: '_WinAPI_GetWindowRgn',
        documentation: 'Obtains a copy of the window region of a window',
        insertText: '_WinAPI_GetWindowRgn(${})'
    },
    {
        label: '_WinAPI_GetWindowText',
        documentation: 'Retrieves the text of the specified window\'s title bar',
        insertText: '_WinAPI_GetWindowText(${})'
    },
    {
        label: '_WinAPI_GetWindowThreadProcessId',
        documentation: 'Retrieves the identifier of the thread that created the specified window',
        insertText: '_WinAPI_GetWindowThreadProcessId(${})'
    },
    {
        label: '_WinAPI_GetWindowWidth',
        documentation: 'Returns the width of the window',
        insertText: '_WinAPI_GetWindowWidth(${})'
    },
    {
        label: '_WinAPI_GetXYFromPoint',
        documentation: 'Returns the X/Y values from a $tagPOINT structure',
        insertText: '_WinAPI_GetXYFromPoint(${})'
    },
    {
        label: '_WinAPI_GlobalMemoryStatus',
        documentation: 'Retrieves information about current available memory',
        insertText: '_WinAPI_GlobalMemoryStatus(${})'
    },
    {
        label: '_WinAPI_GUIDFromString',
        documentation: 'Converts a string GUID to binary form',
        insertText: '_WinAPI_GUIDFromString(${})'
    },
    {
        label: '_WinAPI_GUIDFromStringEx',
        documentation: 'Converts a string GUID to binary form',
        insertText: '_WinAPI_GUIDFromStringEx(${})'
    },
    {
        label: '_WinAPI_HiWord',
        documentation: 'Returns the high word of a longword value',
        insertText: '_WinAPI_HiWord(${})'
    },
    {
        label: '_WinAPI_InProcess',
        documentation: 'Determines whether a window belongs to the current process',
        insertText: '_WinAPI_InProcess(${})'
    },
    {
        label: '_WinAPI_IntToFloat',
        documentation: 'Returns a 4 byte integer as a float value',
        insertText: '_WinAPI_IntToFloat(${})'
    },
    {
        label: '_WinAPI_InvalidateRect',
        documentation: 'Adds a rectangle to the specified window\'s update region',
        insertText: '_WinAPI_InvalidateRect(${})'
    },
    {
        label: '_WinAPI_IsClassName',
        documentation: 'Wrapper to check ClassName of the control',
        insertText: '_WinAPI_IsClassName(${})'
    },
    {
        label: '_WinAPI_IsWindow',
        documentation: 'Determines whether the specified window handle identifies an existing window',
        insertText: '_WinAPI_IsWindow(${})'
    },
    {
        label: '_WinAPI_IsWindowVisible',
        documentation: 'Retrieves the visibility state of the specified window',
        insertText: '_WinAPI_IsWindowVisible(${})'
    },
    {
        label: '_WinAPI_LineTo',
        documentation: 'Draws a line from the current position up to, but not including, the specified point',
        insertText: '_WinAPI_LineTo(${})'
    },
    {
        label: '_WinAPI_LoadBitmap',
        documentation: 'Loads the specified bitmap resource from a module\'s executable file',
        insertText: '_WinAPI_LoadBitmap(${})'
    },
    {
        label: '_WinAPI_LoadImage',
        documentation: 'Loads an icon, cursor, or bitmap',
        insertText: '_WinAPI_LoadImage(${})'
    },
    {
        label: '_WinAPI_LoadLibrary',
        documentation: 'Maps a specified executable module into the address space of the calling process',
        insertText: '_WinAPI_LoadLibrary(${})'
    },
    {
        label: '_WinAPI_LoadLibraryEx',
        documentation: 'Maps a specified executable module into the address space of the calling process',
        insertText: '_WinAPI_LoadLibraryEx(${})'
    },
    {
        label: '_WinAPI_LoadShell32Icon',
        documentation: 'Extracts an icon from the shell32.dll file',
        insertText: '_WinAPI_LoadShell32Icon(${})'
    },
    {
        label: '_WinAPI_LoadString',
        documentation: 'loads a string resource from the executable file associated with a specified module',
        insertText: '_WinAPI_LoadString(${})'
    },
    {
        label: '_WinAPI_LocalFree',
        documentation: 'Frees the specified local memory object and invalidates its handle',
        insertText: '_WinAPI_LocalFree(${})'
    },
    {
        label: '_WinAPI_LoWord',
        documentation: 'Returns the low word of a longword',
        insertText: '_WinAPI_LoWord(${})'
    },
    {
        label: '_WinAPI_MAKELANGID',
        documentation: 'Construct language id from a primary language id and a sublanguage id',
        insertText: '_WinAPI_MAKELANGID(${})'
    },
    {
        label: '_WinAPI_MAKELCID',
        documentation: 'Construct locale id from a language id and a sort id',
        insertText: '_WinAPI_MAKELCID(${})'
    },
    {
        label: '_WinAPI_MakeLong',
        documentation: 'Returns a long int value from two int values',
        insertText: '_WinAPI_MakeLong(${})'
    },
    {
        label: '_WinAPI_MakeQWord',
        documentation: 'Returns a QWORD value from two int values',
        insertText: '_WinAPI_MakeQWord(${})'
    },
    {
        label: '_WinAPI_MessageBeep',
        documentation: 'Plays a waveform sound',
        insertText: '_WinAPI_MessageBeep(${})'
    },
    {
        label: '_WinAPI_Mouse_Event',
        documentation: 'Synthesizes mouse motion and button clicks',
        insertText: '_WinAPI_Mouse_Event(${})'
    },
    {
        label: '_WinAPI_MoveTo',
        documentation: 'Updates the current position to the specified point',
        insertText: '_WinAPI_MoveTo(${})'
    },
    {
        label: '_WinAPI_MoveWindow',
        documentation: 'Changes the position and dimensions of the specified window',
        insertText: '_WinAPI_MoveWindow(${})'
    },
    {
        label: '_WinAPI_MsgBox',
        documentation: 'Displays a message box with wider margin than original',
        insertText: '_WinAPI_MsgBox(${})'
    },
    {
        label: '_WinAPI_MulDiv',
        documentation: 'Multiplies two 32-bit values and then divides the 64-bit result by a third 32-bit value',
        insertText: '_WinAPI_MulDiv(${})'
    },
    {
        label: '_WinAPI_MultiByteToWideChar',
        documentation: 'Maps a character string to a wide-character (Unicode) string',
        insertText: '_WinAPI_MultiByteToWideChar(${})'
    },
    {
        label: '_WinAPI_MultiByteToWideCharEx',
        documentation: 'Maps a character string to a wide-character (Unicode) string',
        insertText: '_WinAPI_MultiByteToWideCharEx(${})'
    },
    {
        label: '_WinAPI_OpenProcess',
        documentation: 'Returns a handle of an existing process object',
        insertText: '_WinAPI_OpenProcess(${})'
    },
    {
        label: '_WinAPI_PathFindOnPath',
        documentation: 'Searchs for a file in the default system paths',
        insertText: '_WinAPI_PathFindOnPath(${})'
    },
    {
        label: '_WinAPI_PointFromRect',
        documentation: 'Returns the top/left coordinates of a $tagRECT as a $tagPOINT structure',
        insertText: '_WinAPI_PointFromRect(${})'
    },
    {
        label: '_WinAPI_PostMessage',
        documentation: 'Places a message in the message queue and then returns',
        insertText: '_WinAPI_PostMessage(${})'
    },
    {
        label: '_WinAPI_PrimaryLangId',
        documentation: 'Extract primary language id from a language id',
        insertText: '_WinAPI_PrimaryLangId(${})'
    },
    {
        label: '_WinAPI_PtInRect',
        documentation: 'Determines whether the specified point lies within the specified rectangle',
        insertText: '_WinAPI_PtInRect(${})'
    },
    {
        label: '_WinAPI_ReadFile',
        documentation: 'Reads data from a file',
        insertText: '_WinAPI_ReadFile(${})'
    },
    {
        label: '_WinAPI_ReadProcessMemory',
        documentation: 'Reads memory in a specified process',
        insertText: '_WinAPI_ReadProcessMemory(${})'
    },
    {
        label: '_WinAPI_RectIsEmpty',
        documentation: 'Determins whether a rectangle is empty',
        insertText: '_WinAPI_RectIsEmpty(${})'
    },
    {
        label: '_WinAPI_RedrawWindow',
        documentation: 'Updates the specified rectangle or region in a window\'s client area',
        insertText: '_WinAPI_RedrawWindow(${})'
    },
    {
        label: '_WinAPI_RegisterWindowMessage',
        documentation: 'Defines a new window message that is guaranteed to be unique throughout the system',
        insertText: '_WinAPI_RegisterWindowMessage(${})'
    },
    {
        label: '_WinAPI_ReleaseCapture',
        documentation: 'Releases the mouse capture from a window in the current thread and restores normal mouse input processing',
        insertText: '_WinAPI_ReleaseCapture(${})'
    },
    {
        label: '_WinAPI_ReleaseDC',
        documentation: 'Releases a device context',
        insertText: '_WinAPI_ReleaseDC(${})'
    },
    {
        label: '_WinAPI_ScreenToClient',
        documentation: 'Converts screen coordinates of a specified point on the screen to client coordinates',
        insertText: '_WinAPI_ScreenToClient(${})'
    },
    {
        label: '_WinAPI_SelectObject',
        documentation: 'Selects an object into the specified device context',
        insertText: '_WinAPI_SelectObject(${})'
    },
    {
        label: '_WinAPI_SetBkColor',
        documentation: 'Sets the current background color to the specified color value',
        insertText: '_WinAPI_SetBkColor(${})'
    },
    {
        label: '_WinAPI_SetBkMode',
        documentation: 'Sets the background mix mode of the specified device context',
        insertText: '_WinAPI_SetBkMode(${})'
    },
    {
        label: '_WinAPI_SetCapture',
        documentation: 'Sets the mouse capture to the specified window belonging to the current thread',
        insertText: '_WinAPI_SetCapture(${})'
    },
    {
        label: '_WinAPI_SetCursor',
        documentation: 'Establishes the cursor shape',
        insertText: '_WinAPI_SetCursor(${})'
    },
    {
        label: '_WinAPI_SetDefaultPrinter',
        documentation: 'Sets the default printer for the current user on the local computer',
        insertText: '_WinAPI_SetDefaultPrinter(${})'
    },
    {
        label: '_WinAPI_SetDIBits',
        documentation: 'Sets the pixels in a compatible bitmap using the color data found in a DIB',
        insertText: '_WinAPI_SetDIBits(${})'
    },
    {
        label: '_WinAPI_SetEndOfFile',
        documentation: 'Sets the physical file size for the specified file to the current position of the file pointer',
        insertText: '_WinAPI_SetEndOfFile(${})'
    },
    {
        label: '_WinAPI_SetEvent',
        documentation: 'Sets the specified event object to the signaled state',
        insertText: '_WinAPI_SetEvent(${})'
    },
    {
        label: '_WinAPI_SetFilePointer',
        documentation: 'Moves the file pointer of the specified file',
        insertText: '_WinAPI_SetFilePointer(${})'
    },
    {
        label: '_WinAPI_SetFocus',
        documentation: 'Sets the keyboard focus to the specified window',
        insertText: '_WinAPI_SetFocus(${})'
    },
    {
        label: '_WinAPI_SetFont',
        documentation: 'Sets a window font',
        insertText: '_WinAPI_SetFont(${})'
    },
    {
        label: '_WinAPI_SetHandleInformation',
        documentation: 'Sets certain properties of an object handle',
        insertText: '_WinAPI_SetHandleInformation(${})'
    },
    {
        label: '_WinAPI_SetLastError',
        documentation: 'Sets the last-error code for the calling thread',
        insertText: '_WinAPI_SetLastError(${})'
    },
    {
        label: '_WinAPI_SetLayeredWindowAttributes',
        documentation: 'Sets Layered Window Attributes',
        insertText: '_WinAPI_SetLayeredWindowAttributes(${})'
    },
    {
        label: '_WinAPI_SetParent',
        documentation: 'Changes the parent window of the specified child window',
        insertText: '_WinAPI_SetParent(${})'
    },
    {
        label: '_WinAPI_SetProcessAffinityMask',
        documentation: 'Sets a processor affinity mask for the threads of a specified process',
        insertText: '_WinAPI_SetProcessAffinityMask(${})'
    },
    {
        label: '_WinAPI_SetSysColors',
        documentation: 'Obtains information about the display devices in a system',
        insertText: '_WinAPI_SetSysColors(${})'
    },
    {
        label: '_WinAPI_SetTextColor',
        documentation: 'Sets the current text color to the specified color value',
        insertText: '_WinAPI_SetTextColor(${})'
    },
    {
        label: '_WinAPI_SetWindowLong',
        documentation: 'Sets information about the specified window',
        insertText: '_WinAPI_SetWindowLong(${})'
    },
    {
        label: '_WinAPI_SetWindowPlacement',
        documentation: 'Sets the placement of the window for Min, Max, and normal positions',
        insertText: '_WinAPI_SetWindowPlacement(${})'
    },
    {
        label: '_WinAPI_SetWindowPos',
        documentation: 'Changes the size, position, and Z order of a child, pop-up, or top-level window',
        insertText: '_WinAPI_SetWindowPos(${})'
    },
    {
        label: '_WinAPI_SetWindowRgn',
        documentation: 'Sets the window region of a window',
        insertText: '_WinAPI_SetWindowRgn(${})'
    },
    {
        label: '_WinAPI_SetWindowsHookEx',
        documentation: 'Installs an application-defined hook procedure into a hook chain',
        insertText: '_WinAPI_SetWindowsHookEx(${})'
    },
    {
        label: '_WinAPI_SetWindowText',
        documentation: 'Changes the text of the specified window\'s title bar',
        insertText: '_WinAPI_SetWindowText(${})'
    },
    {
        label: '_WinAPI_ShowCursor',
        documentation: 'Displays or hides the cursor',
        insertText: '_WinAPI_ShowCursor(${})'
    },
    {
        label: '_WinAPI_ShowError',
        documentation: 'Displays an error message box with an optional exit',
        insertText: '_WinAPI_ShowError(${})'
    },
    {
        label: '_WinAPI_ShowMsg',
        documentation: 'Displays an "Information" message box',
        insertText: '_WinAPI_ShowMsg(${})'
    },
    {
        label: '_WinAPI_ShowWindow',
        documentation: 'Sets the specified window\'s show state',
        insertText: '_WinAPI_ShowWindow(${})'
    },
    {
        label: '_WinAPI_StringFromGUID',
        documentation: 'Converts a binary GUID to string form',
        insertText: '_WinAPI_StringFromGUID(${})'
    },
    {
        label: '_WinAPI_StringLenA',
        documentation: 'Calculates the size of ANSI string',
        insertText: '_WinAPI_StringLenA(${})'
    },
    {
        label: '_WinAPI_StringLenW',
        documentation: 'Calculates the size of wide string',
        insertText: '_WinAPI_StringLenW(${})'
    },
    {
        label: '_WinAPI_SubLangId',
        documentation: 'Extract sublanguage id from a language id',
        insertText: '_WinAPI_SubLangId(${})'
    },
    {
        label: '_WinAPI_SystemParametersInfo',
        documentation: 'Retrieves or sets the value of one of the system-wide parameters',
        insertText: '_WinAPI_SystemParametersInfo(${})'
    },
    {
        label: '_WinAPI_TwipsPerPixelX',
        documentation: 'Returns the width of a pixel, in twips',
        insertText: '_WinAPI_TwipsPerPixelX(${})'
    },
    {
        label: '_WinAPI_TwipsPerPixelY',
        documentation: 'Returns the height of a pixel, in twips',
        insertText: '_WinAPI_TwipsPerPixelY(${})'
    },
    {
        label: '_WinAPI_UnhookWindowsHookEx',
        documentation: 'Removes a hook procedure installed in a hook chain by the _WinAPI_SetWindowsHookEx function',
        insertText: '_WinAPI_UnhookWindowsHookEx(${})'
    },
    {
        label: '_WinAPI_UpdateLayeredWindow',
        documentation: 'Updates the position, size, shape, content, and translucency of a layered window',
        insertText: '_WinAPI_UpdateLayeredWindow(${})'
    },
    {
        label: '_WinAPI_UpdateWindow',
        documentation: 'Updates the client area of a window by sending a WM_PAINT message to the window',
        insertText: '_WinAPI_UpdateWindow(${})'
    },
    {
        label: '_WinAPI_WaitForInputIdle',
        documentation: 'Waits until a process is waiting for user input with no input pending, or a time out',
        insertText: '_WinAPI_WaitForInputIdle(${})'
    },
    {
        label: '_WinAPI_WaitForMultipleObjects',
        documentation: 'Waits until one or all of the specified objects are in the signaled state',
        insertText: '_WinAPI_WaitForMultipleObjects(${})'
    },
    {
        label: '_WinAPI_WaitForSingleObject',
        documentation: 'Waits until the specified object is in the signaled state',
        insertText: '_WinAPI_WaitForSingleObject(${})'
    },
    {
        label: '_WinAPI_WideCharToMultiByte',
        documentation: 'Converts a Unicode string to a multibyte string',
        insertText: '_WinAPI_WideCharToMultiByte(${})'
    },
    {
        label: '_WinAPI_WindowFromPoint',
        documentation: 'Retrieves the handle of the window that contains the specified point',
        insertText: '_WinAPI_WindowFromPoint(${})'
    },
    {
        label: '_WinAPI_WriteConsole',
        documentation: 'Writes a character string to a console screen buffer',
        insertText: '_WinAPI_WriteConsole(${})'
    },
    {
        label: '_WinAPI_WriteFile',
        documentation: 'Writes data to a file at the position specified by the file pointer',
        insertText: '_WinAPI_WriteFile(${})'
    },
    {
        label: '_WinAPI_WriteProcessMemory',
        documentation: 'Writes memory in a specified process',
        insertText: '_WinAPI_WriteProcessMemory(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPI.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items