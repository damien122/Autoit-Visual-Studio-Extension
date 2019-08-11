'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_WinAPI_AttachConsole',
        documentation: 'Attaches the calling process to the console of the specified process'
    },
    {
        label: '_WinAPI_AttachThreadInput',
        documentation: 'Attaches the input processing mechanism of one thread to that of another thread'
    },
    {
        label: '_WinAPI_Beep',
        documentation: 'Generates simple tones on the speaker'
    },
    {
        label: '_WinAPI_BitBlt',
        documentation: 'Performs a bit-block transfer of color data'
    },
    {
        label: '_WinAPI_CallNextHookEx',
        documentation: 'Passes the hook information to the next hook procedure in the current hook chain'
    },
    {
        label: '_WinAPI_CallWindowProc',
        documentation: 'Passes the hook information to the next hook procedure in the current hook chain'
    },
    {
        label: '_WinAPI_ClientToScreen',
        documentation: 'Converts the client coordinates of a specified point to screen coordinates'
    },
    {
        label: '_WinAPI_CloseHandle',
        documentation: 'Closes an open object handle'
    },
    {
        label: '_WinAPI_CombineRgn',
        documentation: 'Combines two regions and stores the result in a third region'
    },
    {
        label: '_WinAPI_CommDlgExtendedError',
        documentation: 'Returns a common dialog box error string. This string indicates the most recent error to occur during the execution of one of the common dialog box functions'
    },
    {
        label: '_WinAPI_CopyIcon',
        documentation: 'Copies the specified icon from another module'
    },
    {
        label: '_WinAPI_CreateBitmap',
        documentation: 'Creates a bitmap with the specified width, height, and color format'
    },
    {
        label: '_WinAPI_CreateCompatibleBitmap',
        documentation: 'Creates a bitmap compatible with the specified device context'
    },
    {
        label: '_WinAPI_CreateCompatibleDC',
        documentation: 'Creates a memory device context compatible with the specified device'
    },
    {
        label: '_WinAPI_CreateEvent',
        documentation: 'Creates or opens a named or unnamed event object'
    },
    {
        label: '_WinAPI_CreateFile',
        documentation: 'Creates or opens a file or other device'
    },
    {
        label: '_WinAPI_CreateFont',
        documentation: 'Creates a logical font with the specified characteristics'
    },
    {
        label: '_WinAPI_CreateFontIndirect',
        documentation: 'Creates a logical font that has specific characteristics'
    },
    {
        label: '_WinAPI_CreatePen',
        documentation: 'Creates a logical pen that has the specified style, width, and color'
    },
    {
        label: '_WinAPI_CreateProcess',
        documentation: 'Creates a new process and its primary thread'
    },
    {
        label: '_WinAPI_CreateRectRgn',
        documentation: 'Creates a rectangular region'
    },
    {
        label: '_WinAPI_CreateRoundRectRgn',
        documentation: 'Creates a rectangular region with rounded corners'
    },
    {
        label: '_WinAPI_CreateSolidBitmap',
        documentation: 'Creates a solid color bitmap'
    },
    {
        label: '_WinAPI_CreateSolidBrush',
        documentation: 'Creates a logical brush that has the specified solid color'
    },
    {
        label: '_WinAPI_CreateWindowEx',
        documentation: 'Creates an overlapped, pop-up, or child window'
    },
    {
        label: '_WinAPI_DefWindowProc',
        documentation: 'Call the default window procedure to provide default processing'
    },
    {
        label: '_WinAPI_DeleteDC',
        documentation: 'Deletes the specified device context'
    },
    {
        label: '_WinAPI_DeleteObject',
        documentation: 'Deletes a logical pen, brush, font, bitmap, region, or palette'
    },
    {
        label: '_WinAPI_DestroyIcon',
        documentation: 'Destroys an icon and frees any memory the icon occupied'
    },
    {
        label: '_WinAPI_DestroyWindow',
        documentation: 'Destroys the specified window'
    },
    {
        label: '_WinAPI_DrawEdge',
        documentation: 'Draws one or more edges of rectangle'
    },
    {
        label: '_WinAPI_DrawFrameControl',
        documentation: 'Draws a frame control of the specified type and style'
    },
    {
        label: '_WinAPI_DrawIcon',
        documentation: 'Draws an icon or cursor into the specified device context'
    },
    {
        label: '_WinAPI_DrawIconEx',
        documentation: 'Draws an icon or cursor into the specified device context'
    },
    {
        label: '_WinAPI_DrawLine',
        documentation: 'Draws a line'
    },
    {
        label: '_WinAPI_DrawText',
        documentation: 'Draws formatted text in the specified rectangle'
    },
    {
        label: '_WinAPI_DuplicateHandle',
        documentation: 'Duplicates an object handle'
    },
    {
        label: '_WinAPI_EnableWindow',
        documentation: 'Enables or disables mouse and keyboard input to the specified window or control'
    },
    {
        label: '_WinAPI_EnumDisplayDevices',
        documentation: 'Obtains information about the display devices in a system'
    },
    {
        label: '_WinAPI_EnumWindows',
        documentation: 'Enumerates all windows'
    },
    {
        label: '_WinAPI_EnumWindowsPopup',
        documentation: 'Enumerates popup windows'
    },
    {
        label: '_WinAPI_EnumWindowsTop',
        documentation: 'Enumerates all top level windows'
    },
    {
        label: '_WinAPI_ExpandEnvironmentStrings',
        documentation: 'Expands environment variable strings and replaces them with their defined values'
    },
    {
        label: '_WinAPI_ExtractIconEx',
        documentation: 'Creates an array of handles to large or small icons extracted from a file'
    },
    {
        label: '_WinAPI_FatalAppExit',
        documentation: 'Displays a message box and terminates the application'
    },
    {
        label: '_WinAPI_FillRect',
        documentation: 'Fills a rectangle by using the specified brush'
    },
    {
        label: '_WinAPI_FindExecutable',
        documentation: 'Retrieves the name of the executable file associated with the specified file name'
    },
    {
        label: '_WinAPI_FindWindow',
        documentation: 'Retrieves the handle to the top-level window whose class name and window name match'
    },
    {
        label: '_WinAPI_FlashWindow',
        documentation: 'Flashes the specified window one time'
    },
    {
        label: '_WinAPI_FlashWindowEx',
        documentation: 'Flashes the specified window'
    },
    {
        label: '_WinAPI_FloatToInt',
        documentation: 'Returns a 4 byte float as an integer value'
    },
    {
        label: '_WinAPI_FlushFileBuffers',
        documentation: 'Flushes the buffers of a specified file and causes all buffered data to be written'
    },
    {
        label: '_WinAPI_FormatMessage',
        documentation: 'Formats a message string'
    },
    {
        label: '_WinAPI_FrameRect',
        documentation: 'Draws a border around the specified rectangle by using the specified brush'
    },
    {
        label: '_WinAPI_FreeLibrary',
        documentation: 'Decrements the reference count of the loaded dynamic-link library (DLL) module'
    },
    {
        label: '_WinAPI_GetAncestor',
        documentation: 'Retrieves the handle to the ancestor of the specified window'
    },
    {
        label: '_WinAPI_GetAsyncKeyState',
        documentation: 'Determines whether a key is up or down at the time the function is called'
    },
    {
        label: '_WinAPI_GetBkMode',
        documentation: 'Returns the current background mix mode for a specified device context'
    },
    {
        label: '_WinAPI_GetClassName',
        documentation: 'Retrieves the name of the class to which the specified window belongs'
    },
    {
        label: '_WinAPI_GetClientHeight',
        documentation: 'Retrieves the height of a window\'s client area'
    },
    {
        label: '_WinAPI_GetClientRect',
        documentation: 'Retrieves the coordinates of a window\'s client area'
    },
    {
        label: '_WinAPI_GetClientWidth',
        documentation: 'Retrieves the width of a window\'s client area'
    },
    {
        label: '_WinAPI_GetCurrentProcess',
        documentation: 'Returns the process handle of the calling process'
    },
    {
        label: '_WinAPI_GetCurrentProcessID',
        documentation: 'Returns the process identifier of the calling process'
    },
    {
        label: '_WinAPI_GetCurrentThread',
        documentation: 'Retrieves a pseudo handle for the calling thread'
    },
    {
        label: '_WinAPI_GetCurrentThreadId',
        documentation: 'Returns the thread identifier of the calling thread'
    },
    {
        label: '_WinAPI_GetCursorInfo',
        documentation: 'Retrieves information about the global cursor'
    },
    {
        label: '_WinAPI_GetDC',
        documentation: 'Retrieves a handle of a display device context for the client area a window'
    },
    {
        label: '_WinAPI_GetDesktopWindow',
        documentation: 'Returns the handle of the Windows desktop window'
    },
    {
        label: '_WinAPI_GetDeviceCaps',
        documentation: 'Retrieves device specific information about a specified device'
    },
    {
        label: '_WinAPI_GetDIBits',
        documentation: 'Retrieves the bits of the specified bitmap and copies them into a buffer as a DIB'
    },
    {
        label: '_WinAPI_GetDlgCtrlID',
        documentation: 'Returns the identifier of the specified control'
    },
    {
        label: '_WinAPI_GetDlgItem',
        documentation: 'Retrieves the handle of a control in the specified dialog box'
    },
    {
        label: '_WinAPI_GetFileSizeEx',
        documentation: 'Retrieves the size of the specified file'
    },
    {
        label: '_WinAPI_GetFocus',
        documentation: 'Retrieves the handle of the window that has the keyboard focus'
    },
    {
        label: '_WinAPI_GetForegroundWindow',
        documentation: 'Returns the handle of the foreground window'
    },
    {
        label: '_WinAPI_GetGuiResources',
        documentation: 'Retrieves the count of handles to graphical user interface (GUI) objects in use by the specified process'
    },
    {
        label: '_WinAPI_GetIconInfo',
        documentation: 'Retrieves information about the specified icon or cursor'
    },
    {
        label: '_WinAPI_GetLastError',
        documentation: 'Returns the calling thread\'s lasterror code value'
    },
    {
        label: '_WinAPI_GetLastErrorMessage',
        documentation: 'Returns the calling threads last error message'
    },
    {
        label: '_WinAPI_GetLayeredWindowAttributes',
        documentation: 'Gets Layered Window Attributes'
    },
    {
        label: '_WinAPI_GetModuleHandle',
        documentation: 'Returns a module handle for the specified module'
    },
    {
        label: '_WinAPI_GetMousePos',
        documentation: 'Returns the current mouse position'
    },
    {
        label: '_WinAPI_GetMousePosX',
        documentation: 'Returns the current mouse X position'
    },
    {
        label: '_WinAPI_GetMousePosY',
        documentation: 'Returns the current mouse Y position'
    },
    {
        label: '_WinAPI_GetObject',
        documentation: 'Retrieves information for the specified graphics object'
    },
    {
        label: '_WinAPI_GetOpenFileName',
        documentation: 'Creates an Open dialog box that lets the user specify the drive, directory, and the name of a file or set of files to open'
    },
    {
        label: '_WinAPI_GetOverlappedResult',
        documentation: 'Retrieves the results of an overlapped operation'
    },
    {
        label: '_WinAPI_GetParent',
        documentation: 'Retrieves the handle of the specified child window\'s parent window'
    },
    {
        label: '_WinAPI_GetProcAddress',
        documentation: 'Retrieves the address of an exported function or variable from the specified module'
    },
    {
        label: '_WinAPI_GetProcessAffinityMask',
        documentation: 'Obtains the affinity masks for the process and the system'
    },
    {
        label: '_WinAPI_GetSaveFileName',
        documentation: 'Creates a Save dialog box that lets the user specify the drive, directory, and name of a file to save'
    },
    {
        label: '_WinAPI_GetStdHandle',
        documentation: 'Retrieves a handle for the standard input, standard output, or standard error device'
    },
    {
        label: '_WinAPI_GetStockObject',
        documentation: 'Retrieves a handle to one of the predefined stock pens, brushes, fonts, or palettes'
    },
    {
        label: '_WinAPI_GetSysColor',
        documentation: 'Retrieves the current color of the specified display element'
    },
    {
        label: '_WinAPI_GetSysColorBrush',
        documentation: 'Retrieves a handle identifying a logical brush that corresponds to the specified color index'
    },
    {
        label: '_WinAPI_GetSystemMetrics',
        documentation: 'Retrieves the specified system metric or system configuration setting'
    },
    {
        label: '_WinAPI_GetTextExtentPoint32',
        documentation: 'Computes the width and height of the specified string of text'
    },
    {
        label: '_WinAPI_GetTextMetrics',
        documentation: 'Retrieves basic information for the currently selected font'
    },
    {
        label: '_WinAPI_GetWindow',
        documentation: 'Retrieves the handle of a window that has a specified relationship to the specified window'
    },
    {
        label: '_WinAPI_GetWindowDC',
        documentation: 'Retrieves the device context (DC) for the entire window'
    },
    {
        label: '_WinAPI_GetWindowHeight',
        documentation: 'Returns the height of the window'
    },
    {
        label: '_WinAPI_GetWindowLong',
        documentation: 'Retrieves information about the specified window'
    },
    {
        label: '_WinAPI_GetWindowPlacement',
        documentation: 'Retrieves the placement of the window for Min, Max, and normal positions'
    },
    {
        label: '_WinAPI_GetWindowRect',
        documentation: 'Retrieves the dimensions of the bounding rectangle of the specified window'
    },
    {
        label: '_WinAPI_GetWindowRgn',
        documentation: 'Obtains a copy of the window region of a window'
    },
    {
        label: '_WinAPI_GetWindowText',
        documentation: 'Retrieves the text of the specified window\'s title bar'
    },
    {
        label: '_WinAPI_GetWindowThreadProcessId',
        documentation: 'Retrieves the identifier of the thread that created the specified window'
    },
    {
        label: '_WinAPI_GetWindowWidth',
        documentation: 'Returns the width of the window'
    },
    {
        label: '_WinAPI_GetXYFromPoint',
        documentation: 'Returns the X/Y values from a $tagPOINT structure'
    },
    {
        label: '_WinAPI_GlobalMemoryStatus',
        documentation: 'Retrieves information about current available memory'
    },
    {
        label: '_WinAPI_GUIDFromString',
        documentation: 'Converts a string GUID to binary form'
    },
    {
        label: '_WinAPI_GUIDFromStringEx',
        documentation: 'Converts a string GUID to binary form'
    },
    {
        label: '_WinAPI_HiWord',
        documentation: 'Returns the high word of a longword value'
    },
    {
        label: '_WinAPI_InProcess',
        documentation: 'Determines whether a window belongs to the current process'
    },
    {
        label: '_WinAPI_IntToFloat',
        documentation: 'Returns a 4 byte integer as a float value'
    },
    {
        label: '_WinAPI_InvalidateRect',
        documentation: 'Adds a rectangle to the specified window\'s update region'
    },
    {
        label: '_WinAPI_IsClassName',
        documentation: 'Wrapper to check ClassName of the control'
    },
    {
        label: '_WinAPI_IsWindow',
        documentation: 'Determines whether the specified window handle identifies an existing window'
    },
    {
        label: '_WinAPI_IsWindowVisible',
        documentation: 'Retrieves the visibility state of the specified window'
    },
    {
        label: '_WinAPI_LineTo',
        documentation: 'Draws a line from the current position up to, but not including, the specified point'
    },
    {
        label: '_WinAPI_LoadBitmap',
        documentation: 'Loads the specified bitmap resource from a module\'s executable file'
    },
    {
        label: '_WinAPI_LoadImage',
        documentation: 'Loads an icon, cursor, or bitmap'
    },
    {
        label: '_WinAPI_LoadLibrary',
        documentation: 'Maps a specified executable module into the address space of the calling process'
    },
    {
        label: '_WinAPI_LoadLibraryEx',
        documentation: 'Maps a specified executable module into the address space of the calling process'
    },
    {
        label: '_WinAPI_LoadShell32Icon',
        documentation: 'Extracts an icon from the shell32.dll file'
    },
    {
        label: '_WinAPI_LoadString',
        documentation: 'loads a string resource from the executable file associated with a specified module'
    },
    {
        label: '_WinAPI_LocalFree',
        documentation: 'Frees the specified local memory object and invalidates its handle'
    },
    {
        label: '_WinAPI_LoWord',
        documentation: 'Returns the low word of a longword'
    },
    {
        label: '_WinAPI_MAKELANGID',
        documentation: 'Construct language id from a primary language id and a sublanguage id'
    },
    {
        label: '_WinAPI_MAKELCID',
        documentation: 'Construct locale id from a language id and a sort id'
    },
    {
        label: '_WinAPI_MakeLong',
        documentation: 'Returns a long int value from two int values'
    },
    {
        label: '_WinAPI_MakeQWord',
        documentation: 'Returns a QWORD value from two int values'
    },
    {
        label: '_WinAPI_MessageBeep',
        documentation: 'Plays a waveform sound'
    },
    {
        label: '_WinAPI_Mouse_Event',
        documentation: 'Synthesizes mouse motion and button clicks'
    },
    {
        label: '_WinAPI_MoveTo',
        documentation: 'Updates the current position to the specified point'
    },
    {
        label: '_WinAPI_MoveWindow',
        documentation: 'Changes the position and dimensions of the specified window'
    },
    {
        label: '_WinAPI_MsgBox',
        documentation: 'Displays a message box with wider margin than original'
    },
    {
        label: '_WinAPI_MulDiv',
        documentation: 'Multiplies two 32-bit values and then divides the 64-bit result by a third 32-bit value'
    },
    {
        label: '_WinAPI_MultiByteToWideChar',
        documentation: 'Maps a character string to a wide-character (Unicode) string'
    },
    {
        label: '_WinAPI_MultiByteToWideCharEx',
        documentation: 'Maps a character string to a wide-character (Unicode) string'
    },
    {
        label: '_WinAPI_OpenProcess',
        documentation: 'Returns a handle of an existing process object'
    },
    {
        label: '_WinAPI_PathFindOnPath',
        documentation: 'Searchs for a file in the default system paths'
    },
    {
        label: '_WinAPI_PointFromRect',
        documentation: 'Returns the top/left coordinates of a $tagRECT as a $tagPOINT structure'
    },
    {
        label: '_WinAPI_PostMessage',
        documentation: 'Places a message in the message queue and then returns'
    },
    {
        label: '_WinAPI_PrimaryLangId',
        documentation: 'Extract primary language id from a language id'
    },
    {
        label: '_WinAPI_PtInRect',
        documentation: 'Determines whether the specified point lies within the specified rectangle'
    },
    {
        label: '_WinAPI_ReadFile',
        documentation: 'Reads data from a file'
    },
    {
        label: '_WinAPI_ReadProcessMemory',
        documentation: 'Reads memory in a specified process'
    },
    {
        label: '_WinAPI_RectIsEmpty',
        documentation: 'Determins whether a rectangle is empty'
    },
    {
        label: '_WinAPI_RedrawWindow',
        documentation: 'Updates the specified rectangle or region in a window\'s client area'
    },
    {
        label: '_WinAPI_RegisterWindowMessage',
        documentation: 'Defines a new window message that is guaranteed to be unique throughout the system'
    },
    {
        label: '_WinAPI_ReleaseCapture',
        documentation: 'Releases the mouse capture from a window in the current thread and restores normal mouse input processing'
    },
    {
        label: '_WinAPI_ReleaseDC',
        documentation: 'Releases a device context'
    },
    {
        label: '_WinAPI_ScreenToClient',
        documentation: 'Converts screen coordinates of a specified point on the screen to client coordinates'
    },
    {
        label: '_WinAPI_SelectObject',
        documentation: 'Selects an object into the specified device context'
    },
    {
        label: '_WinAPI_SetBkColor',
        documentation: 'Sets the current background color to the specified color value'
    },
    {
        label: '_WinAPI_SetBkMode',
        documentation: 'Sets the background mix mode of the specified device context'
    },
    {
        label: '_WinAPI_SetCapture',
        documentation: 'Sets the mouse capture to the specified window belonging to the current thread'
    },
    {
        label: '_WinAPI_SetCursor',
        documentation: 'Establishes the cursor shape'
    },
    {
        label: '_WinAPI_SetDefaultPrinter',
        documentation: 'Sets the default printer for the current user on the local computer'
    },
    {
        label: '_WinAPI_SetDIBits',
        documentation: 'Sets the pixels in a compatible bitmap using the color data found in a DIB'
    },
    {
        label: '_WinAPI_SetEndOfFile',
        documentation: 'Sets the physical file size for the specified file to the current position of the file pointer'
    },
    {
        label: '_WinAPI_SetEvent',
        documentation: 'Sets the specified event object to the signaled state'
    },
    {
        label: '_WinAPI_SetFilePointer',
        documentation: 'Moves the file pointer of the specified file'
    },
    {
        label: '_WinAPI_SetFocus',
        documentation: 'Sets the keyboard focus to the specified window'
    },
    {
        label: '_WinAPI_SetFont',
        documentation: 'Sets a window font'
    },
    {
        label: '_WinAPI_SetHandleInformation',
        documentation: 'Sets certain properties of an object handle'
    },
    {
        label: '_WinAPI_SetLastError',
        documentation: 'Sets the last-error code for the calling thread'
    },
    {
        label: '_WinAPI_SetLayeredWindowAttributes',
        documentation: 'Sets Layered Window Attributes'
    },
    {
        label: '_WinAPI_SetParent',
        documentation: 'Changes the parent window of the specified child window'
    },
    {
        label: '_WinAPI_SetProcessAffinityMask',
        documentation: 'Sets a processor affinity mask for the threads of a specified process'
    },
    {
        label: '_WinAPI_SetSysColors',
        documentation: 'Obtains information about the display devices in a system'
    },
    {
        label: '_WinAPI_SetTextColor',
        documentation: 'Sets the current text color to the specified color value'
    },
    {
        label: '_WinAPI_SetWindowLong',
        documentation: 'Sets information about the specified window'
    },
    {
        label: '_WinAPI_SetWindowPlacement',
        documentation: 'Sets the placement of the window for Min, Max, and normal positions'
    },
    {
        label: '_WinAPI_SetWindowPos',
        documentation: 'Changes the size, position, and Z order of a child, pop-up, or top-level window'
    },
    {
        label: '_WinAPI_SetWindowRgn',
        documentation: 'Sets the window region of a window'
    },
    {
        label: '_WinAPI_SetWindowsHookEx',
        documentation: 'Installs an application-defined hook procedure into a hook chain'
    },
    {
        label: '_WinAPI_SetWindowText',
        documentation: 'Changes the text of the specified window\'s title bar'
    },
    {
        label: '_WinAPI_ShowCursor',
        documentation: 'Displays or hides the cursor'
    },
    {
        label: '_WinAPI_ShowError',
        documentation: 'Displays an error message box with an optional exit'
    },
    {
        label: '_WinAPI_ShowMsg',
        documentation: 'Displays an "Information" message box'
    },
    {
        label: '_WinAPI_ShowWindow',
        documentation: 'Sets the specified window\'s show state'
    },
    {
        label: '_WinAPI_StringFromGUID',
        documentation: 'Converts a binary GUID to string form'
    },
    {
        label: '_WinAPI_StringLenA',
        documentation: 'Calculates the size of ANSI string'
    },
    {
        label: '_WinAPI_StringLenW',
        documentation: 'Calculates the size of wide string'
    },
    {
        label: '_WinAPI_SubLangId',
        documentation: 'Extract sublanguage id from a language id'
    },
    {
        label: '_WinAPI_SystemParametersInfo',
        documentation: 'Retrieves or sets the value of one of the system-wide parameters'
    },
    {
        label: '_WinAPI_TwipsPerPixelX',
        documentation: 'Returns the width of a pixel, in twips'
    },
    {
        label: '_WinAPI_TwipsPerPixelY',
        documentation: 'Returns the height of a pixel, in twips'
    },
    {
        label: '_WinAPI_UnhookWindowsHookEx',
        documentation: 'Removes a hook procedure installed in a hook chain by the _WinAPI_SetWindowsHookEx function'
    },
    {
        label: '_WinAPI_UpdateLayeredWindow',
        documentation: 'Updates the position, size, shape, content, and translucency of a layered window'
    },
    {
        label: '_WinAPI_UpdateWindow',
        documentation: 'Updates the client area of a window by sending a WM_PAINT message to the window'
    },
    {
        label: '_WinAPI_WaitForInputIdle',
        documentation: 'Waits until a process is waiting for user input with no input pending, or a time out'
    },
    {
        label: '_WinAPI_WaitForMultipleObjects',
        documentation: 'Waits until one or all of the specified objects are in the signaled state'
    },
    {
        label: '_WinAPI_WaitForSingleObject',
        documentation: 'Waits until the specified object is in the signaled state'
    },
    {
        label: '_WinAPI_WideCharToMultiByte',
        documentation: 'Converts a Unicode string to a multibyte string'
    },
    {
        label: '_WinAPI_WindowFromPoint',
        documentation: 'Retrieves the handle of the window that contains the specified point'
    },
    {
        label: '_WinAPI_WriteConsole',
        documentation: 'Writes a character string to a console screen buffer'
    },
    {
        label: '_WinAPI_WriteFile',
        documentation: 'Writes data to a file at the position specified by the file pointer'
    },
    {
        label: '_WinAPI_WriteProcessMemory',
        documentation: 'Writes memory in a specified process'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPI.au3>'
}

module.exports = items