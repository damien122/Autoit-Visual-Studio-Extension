'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_MemGlobalAlloc',
        documentation: 'Allocates the specified number of bytes from the heap',
        insertText: '_MemGlobalAlloc(${})'
    },

    {
        label: '_MemGlobalFree',
        documentation: 'Frees the specified global memory object and invalidates its handle',
        insertText: '_MemGlobalFree(${})'
    },

    {
        label: '_MemGlobalLock',
        documentation: 'Locks a global memory object and returns a pointer to the first byte of the object\'s memory block',
        insertText: '_MemGlobalLock(${})'
    },

    {
        label: '_MemGlobalSize',
        documentation: 'Retrieves the current size of the specified global memory object',
        insertText: '_MemGlobalSize(${})'
    },

    {
        label: '_MemGlobalUnlock',
        documentation: 'Decrements the lock count associated with a memory object that was allocated with GMEM_MOVEABLE',
        insertText: '_MemGlobalUnlock(${})'
    },

    {
        label: '_MemMoveMemory',
        documentation: 'Moves memory either forward or backward, aligned or unaligned',
        insertText: '_MemMoveMemory(${})'
    },

    {
        label: '_MemVirtualAlloc',
        documentation: 'Reserves or commits a region of pages in the virtual address space of the calling process',
        insertText: '_MemVirtualAlloc(${})'
    },

    {
        label: '_MemVirtualAllocEx',
        documentation: 'Reserves a region of memory within the virtual address space of a specified process',
        insertText: '_MemVirtualAllocEx(${})'
    },

    {
        label: '_MemVirtualFree',
        documentation: 'Releases a region of pages within the virtual address space of a process',
        insertText: '_MemVirtualFree(${})'
    },

    {
        label: '_MemVirtualFreeEx',
        documentation: 'Releases a region of pages within the virtual address space of a process ',
        insertText: '_MemVirtualFreeEx(${})'
    },
    {
        label: '_WinAPI_LockWorkStation',
        documentation: 'Locks the workstation\'s display',
        insertText: '_WinAPI_LockWorkStation(${})'
    },
    {
        label: '_WinAPI_ShutdownBlockReasonCreate',
        documentation: 'Indicates that the system cannot be shut down and sets a reason string to be displayed to the user if system shutdown is initiated',
        insertText: '_WinAPI_ShutdownBlockReasonCreate(${})'
    },
    {
        label: '_WinAPI_ShutdownBlockReasonDestroy',
        documentation: 'Indicates that the system can be shut down and frees the reason string',
        insertText: '_WinAPI_ShutdownBlockReasonDestroy(${})'
    },
    {
        label: '_WinAPI_ShutdownBlockReasonQuery',
        documentation: 'Retrieves the reason string set by the _WinAPI_ShutdownBlockReasonCreate() function ',
        insertText: '_WinAPI_ShutdownBlockReasonQuery(${})'
    },
    {
        label: '_WinAPI_SetWinEventHook',
        documentation: 'Sets an event hook function for a range of events',
        insertText: '_WinAPI_SetWinEventHook(${})'
    },
    {
        label: '_WinAPI_UnhookWinEvent',
        documentation: 'Removes an event hook function ',
        insertText: '_WinAPI_UnhookWinEvent(${})'
    },
    {
        label: '_WinAPI_AddClipboardFormatListener',
        documentation: 'Places the given window in the system-maintained clipboard format listener list',
        insertText: '_WinAPI_AddClipboardFormatListener(${})'
    },
    {
        label: '_WinAPI_GetClipboardSequenceNumber',
        documentation: 'Retrieves the clipboard sequence number for the current window station',
        insertText: '_WinAPI_GetClipboardSequenceNumber(${})'
    },
    {
        label: '_WinAPI_RemoveClipboardFormatListener',
        documentation: 'Removes the given window from the system-maintained clipboard format listener list ',
        insertText: '_WinAPI_RemoveClipboardFormatListener(${})'
    },
    {
        label: '_WinAPI_GetEffectiveClientRect',
        documentation: 'Calculates the dimensions of a rectangle in the client area that contains all the specified controls',
        insertText: '_WinAPI_GetEffectiveClientRect(${})'
    },
    {
        label: '_WinAPI_GetMUILanguage',
        documentation: 'Gets the language currently in use by the common controls for a particular process',
        insertText: '_WinAPI_GetMUILanguage(${})'
    },
    {
        label: '_WinAPI_InitMUILanguage',
        documentation: 'Enables an application to specify a language to be used with the common controls that is different from the system language',
        insertText: '_WinAPI_InitMUILanguage(${})'
    },
    {
        label: '_WinAPI_LoadIconMetric',
        documentation: 'Loads a specified icon resource with a client-specified system metric',
        insertText: '_WinAPI_LoadIconMetric(${})'
    },
    {
        label: '_WinAPI_LoadIconWithScaleDown',
        documentation: 'Loads an icon and scales down a larger image instead of scaling up a smaller image',
        insertText: '_WinAPI_LoadIconWithScaleDown(${})'
    },
    {
        label: '_WinAPI_MirrorIcon',
        documentation: 'Reverses (mirrors) icons so that they are displayed correctly on a mirrored device context ',
        insertText: '_WinAPI_MirrorIcon(${})'
    },
    {
        label: '_WinAPI_GetDllDirectory',
        documentation: 'Retrieves the application-specific portion of the search path used to locate DLLs for the application',
        insertText: '_WinAPI_GetDllDirectory(${})'
    },
    {
        label: '_WinAPI_GetModuleHandleEx',
        documentation: 'Retrieves a module handle for the specified module',
        insertText: '_WinAPI_GetModuleHandleEx(${})'
    },
    {
        label: '_WinAPI_SetDllDirectory',
        documentation: 'Adds a directory to the search path used to locate DLLs for the application ',
        insertText: '_WinAPI_SetDllDirectory(${})'
    },
    {
        label: '_WinAPI_CreateBuffer',
        documentation: 'Allocates a block of memory from the internal library heap',
        insertText: '_WinAPI_CreateBuffer(${})'
    },
    {
        label: '_WinAPI_CreateBufferFromStruct',
        documentation: 'Allocates a block of memory from the internal library heap and initializes it with the structure\'s data',
        insertText: '_WinAPI_CreateBufferFromStruct(${})'
    },
    {
        label: '_WinAPI_CreateString',
        documentation: 'Copies a specified string to the newly allocated memory block and returns its pointer',
        insertText: '_WinAPI_CreateString(${})'
    },
    {
        label: '_WinAPI_FreeMemory',
        documentation: 'Frees a memory block in the internal library heap',
        insertText: '_WinAPI_FreeMemory(${})'
    },
    {
        label: '_WinAPI_GetMemorySize',
        documentation: 'Retrieves the size of a memory block allocated from the internal library heap',
        insertText: '_WinAPI_GetMemorySize(${})'
    },
    {
        label: '_WinAPI_IsMemory',
        documentation: 'Determines whether the specified pointer points to the memory block in the internal library heap ',
        insertText: '_WinAPI_IsMemory(${})'
    },
    {
        label: '_WinAPI_CompressBuffer',
        documentation: 'Compresses a buffer with specified compression format and engine type',
        insertText: '_WinAPI_CompressBuffer(${})'
    },
    {
        label: '_WinAPI_ComputeCrc32',
        documentation: 'Calculates the CRC32 checksum of a block of memory',
        insertText: '_WinAPI_ComputeCrc32(${})'
    },
    {
        label: '_WinAPI_DecompressBuffer',
        documentation: 'Decompresses an entire compressed buffer',
        insertText: '_WinAPI_DecompressBuffer(${})'
    },
    {
        label: '_WinAPI_EqualMemory',
        documentation: 'Compares two blocks of memory to determine whether the specified number of bytes are identical',
        insertText: '_WinAPI_EqualMemory(${})'
    },
    {
        label: '_WinAPI_FillMemory',
        documentation: 'Fills a block of memory with the given value',
        insertText: '_WinAPI_FillMemory(${})'
    },
    {
        label: '_WinAPI_GetPhysicallyInstalledSystemMemory',
        documentation: 'Retrieves the amount of RAM that is physically installed on the computer',
        insertText: '_WinAPI_GetPhysicallyInstalledSystemMemory(${})'
    },
    {
        label: '_WinAPI_GetSystemDEPPolicy',
        documentation: 'Gets the data execution prevention (DEP) policy setting for the system',
        insertText: '_WinAPI_GetSystemDEPPolicy(${})'
    },
    {
        label: '_WinAPI_IsBadCodePtr',
        documentation: 'Determines whether the calling process has read access to the memory at the specified address',
        insertText: '_WinAPI_IsBadCodePtr(${})'
    },
    {
        label: '_WinAPI_IsBadReadPtr',
        documentation: 'Verifies that the calling process has read access to the specified range of memory',
        insertText: '_WinAPI_IsBadReadPtr(${})'
    },
    {
        label: '_WinAPI_IsBadStringPtr',
        documentation: 'Verifies that the calling process has read access to the specified range of memory',
        insertText: '_WinAPI_IsBadStringPtr(${})'
    },
    {
        label: '_WinAPI_IsBadWritePtr',
        documentation: 'Verifies that the calling process has write access to the specified range of memory',
        insertText: '_WinAPI_IsBadWritePtr(${})'
    },
    {
        label: '_WinAPI_MoveMemory',
        documentation: 'Moves a block of memory from one location to another',
        insertText: '_WinAPI_MoveMemory(${})'
    },
    {
        label: '_WinAPI_ZeroMemory',
        documentation: 'Fills a block of memory with zeros ',
        insertText: '_WinAPI_ZeroMemory(${})'
    },
    {
        label: '_WinAPI_GetDefaultPrinter',
        documentation: 'Retrieves the printer name of the default printer for the current user on the local computer',
        insertText: '_WinAPI_GetDefaultPrinter(${})'
    },
    {
        label: '_WinAPI_GetPwrCapabilities',
        documentation: 'Retrieves information about the system power capabilities',
        insertText: '_WinAPI_GetPwrCapabilities(${})'
    },
    {
        label: '_WinAPI_GetSystemPowerStatus',
        documentation: 'Retrieves the power status of the system',
        insertText: '_WinAPI_GetSystemPowerStatus(${})'
    },
    {
        label: '_WinAPI_RegisterPowerSettingNotification',
        documentation: 'Registers the application to receive power setting notifications for the specific power setting event',
        insertText: '_WinAPI_RegisterPowerSettingNotification(${})'
    },
    {
        label: '_WinAPI_UnregisterPowerSettingNotification',
        documentation: 'Unregisters the power setting notification ',
        insertText: '_WinAPI_UnregisterPowerSettingNotification(${})'
    },
    {
        label: '_WinAPI_CloseDesktop',
        documentation: 'Closes an open handle to a desktop object',
        insertText: '_WinAPI_CloseDesktop(${})'
    },
    {
        label: '_WinAPI_CloseWindowStation',
        documentation: 'Closes an open window station handle',
        insertText: '_WinAPI_CloseWindowStation(${})'
    },
    {
        label: '_WinAPI_CreateDesktop',
        documentation: 'Creates a new desktop, associates it with the current window station of the calling process',
        insertText: '_WinAPI_CreateDesktop(${})'
    },
    {
        label: '_WinAPI_CreateWindowStation',
        documentation: 'Creates a window station object, associates it with the calling process, and assigns it to the current session',
        insertText: '_WinAPI_CreateWindowStation(${})'
    },
    {
        label: '_WinAPI_EnumDesktops',
        documentation: 'Enumerates all desktops associated with the specified window station of the calling process',
        insertText: '_WinAPI_EnumDesktops(${})'
    },
    {
        label: '_WinAPI_EnumDesktopWindows',
        documentation: 'Enumerates all top-level windows associated with the specified desktop',
        insertText: '_WinAPI_EnumDesktopWindows(${})'
    },
    {
        label: '_WinAPI_EnumWindowStations',
        documentation: 'Enumerates all window stations in the current session',
        insertText: '_WinAPI_EnumWindowStations(${})'
    },
    {
        label: '_WinAPI_GetProcessWindowStation',
        documentation: 'Retrieves a handle to the current window station for the calling process',
        insertText: '_WinAPI_GetProcessWindowStation(${})'
    },
    {
        label: '_WinAPI_GetUserObjectInformation',
        documentation: 'Retrieves information about the specified window station or desktop object',
        insertText: '_WinAPI_GetUserObjectInformation(${})'
    },
    {
        label: '_WinAPI_OpenDesktop',
        documentation: 'Opens the specified desktop object',
        insertText: '_WinAPI_OpenDesktop(${})'
    },
    {
        label: '_WinAPI_OpenInputDesktop',
        documentation: 'Opens the desktop that receives user input',
        insertText: '_WinAPI_OpenInputDesktop(${})'
    },
    {
        label: '_WinAPI_OpenWindowStation',
        documentation: 'Opens the specified window station',
        insertText: '_WinAPI_OpenWindowStation(${})'
    },
    {
        label: '_WinAPI_SetProcessWindowStation',
        documentation: 'Assigns the specified window station to the calling process',
        insertText: '_WinAPI_SetProcessWindowStation(${})'
    },
    {
        label: '_WinAPI_SetUserObjectInformation',
        documentation: 'Sets information about the specified window station or desktop object',
        insertText: '_WinAPI_SetUserObjectInformation(${})'
    },
    {
        label: '_WinAPI_SwitchDesktop',
        documentation: 'Makes the specified desktop visible and activates it ',
        insertText: '_WinAPI_SwitchDesktop(${})'
    },
    {
        label: '_WinAPI_EnumPageFiles',
        documentation: 'Retrieves information for each installed pagefile in the system',
        insertText: '_WinAPI_EnumPageFiles(${})'
    },
    {
        label: '_WinAPI_GetCurrentHwProfile',
        documentation: 'Retrieves information about the current hardware profile for the local computer',
        insertText: '_WinAPI_GetCurrentHwProfile(${})'
    },
    {
        label: '_WinAPI_GetHandleInformation',
        documentation: 'Retrieves certain properties of an object handle',
        insertText: '_WinAPI_GetHandleInformation(${})'
    },
    {
        label: '_WinAPI_GetPerformanceInfo',
        documentation: 'Retrieves the performance information',
        insertText: '_WinAPI_GetPerformanceInfo(${})'
    },
    {
        label: '_WinAPI_GetProcessShutdownParameters',
        documentation: 'Retrieves the shutdown parameters for the currently calling process',
        insertText: '_WinAPI_GetProcessShutdownParameters(${})'
    },
    {
        label: '_WinAPI_GetStartupInfo',
        documentation: 'Retrieves the contents of the STARTUPINFO structure that was specified when the calling process was created',
        insertText: '_WinAPI_GetStartupInfo(${})'
    },
    {
        label: '_WinAPI_GetSystemInfo',
        documentation: 'Retrieves information about the current system',
        insertText: '_WinAPI_GetSystemInfo(${})'
    },
    {
        label: '_WinAPI_GetSystemTimes',
        documentation: 'Retrieves system timing information',
        insertText: '_WinAPI_GetSystemTimes(${})'
    },
    {
        label: '_WinAPI_GetSystemWow64Directory',
        documentation: 'Retrieves the path of the system directory used by WOW64',
        insertText: '_WinAPI_GetSystemWow64Directory(${})'
    },
    {
        label: '_WinAPI_GetTickCount',
        documentation: 'Retrieves the number of milliseconds that have elapsed since the system was started',
        insertText: '_WinAPI_GetTickCount(${})'
    },
    {
        label: '_WinAPI_GetTickCount64',
        documentation: 'Retrieves the number of milliseconds that have elapsed since the system was started',
        insertText: '_WinAPI_GetTickCount64(${})'
    },
    {
        label: '_WinAPI_GetVersion',
        documentation: 'Retrieves version of the current operating system',
        insertText: '_WinAPI_GetVersion(${})'
    },
    {
        label: '_WinAPI_GetVersionEx',
        documentation: 'Retrieves information about the current operating system',
        insertText: '_WinAPI_GetVersionEx(${})'
    },
    {
        label: '_WinAPI_IsProcessorFeaturePresent',
        documentation: 'Determines whether the specified processor feature is supported by the current computer',
        insertText: '_WinAPI_IsProcessorFeaturePresent(${})'
    },
    {
        label: '_WinAPI_QueryPerformanceCounter',
        documentation: 'Retrieves the current value of the high-resolution performance counter',
        insertText: '_WinAPI_QueryPerformanceCounter(${})'
    },
    {
        label: '_WinAPI_QueryPerformanceFrequency',
        documentation: 'Retrieves the frequency of the high-resolution performance counter',
        insertText: '_WinAPI_QueryPerformanceFrequency(${})'
    },
    {
        label: '_WinAPI_SetProcessShutdownParameters',
        documentation: 'Sets a shutdown order for a process relative to the other processes in the system ',
        insertText: '_WinAPI_SetProcessShutdownParameters(${})'
    },
    {
        label: '_WinAPI_ActivateKeyboardLayout',
        documentation: 'Sets the input locale identifier for the calling thread or the current process',
        insertText: '_WinAPI_ActivateKeyboardLayout(${})'
    },
    {
        label: '_WinAPI_DefRawInputProc',
        documentation: 'Calls the default raw input procedure to process the raw input messages that an application does not process',
        insertText: '_WinAPI_DefRawInputProc(${})'
    },
    {
        label: '_WinAPI_EnumRawInputDevices',
        documentation: 'Enumerates the raw input devices attached to the system',
        insertText: '_WinAPI_EnumRawInputDevices(${})'
    },
    {
        label: '_WinAPI_GetActiveWindow',
        documentation: 'Retrieves the window handle to the active window attached to the calling process\'s message queue',
        insertText: '_WinAPI_GetActiveWindow(${})'
    },
    {
        label: '_WinAPI_GetIdleTime',
        documentation: 'Retrieves the time that has elapsed since the last input',
        insertText: '_WinAPI_GetIdleTime(${})'
    },
    {
        label: '_WinAPI_GetKeyboardLayout',
        documentation: 'Retrieves the active input locale identifier for the specified window',
        insertText: '_WinAPI_GetKeyboardLayout(${})'
    },
    {
        label: '_WinAPI_GetKeyboardLayoutList',
        documentation: 'Retrieves the all input locale identifiers corresponding to the current set of input locales in the system',
        insertText: '_WinAPI_GetKeyboardLayoutList(${})'
    },
    {
        label: '_WinAPI_GetKeyboardState',
        documentation: 'Copies the status of the 256 virtual keys to the specified buffer',
        insertText: '_WinAPI_GetKeyboardState(${})'
    },
    {
        label: '_WinAPI_GetKeyboardType',
        documentation: 'Retrieves information about the current keyboard',
        insertText: '_WinAPI_GetKeyboardType(${})'
    },
    {
        label: '_WinAPI_GetKeyNameText',
        documentation: 'Retrieves a string that represents the name of a key',
        insertText: '_WinAPI_GetKeyNameText(${})'
    },
    {
        label: '_WinAPI_GetKeyState',
        documentation: 'Retrieves the status of the specified virtual key',
        insertText: '_WinAPI_GetKeyState(${})'
    },
    {
        label: '_WinAPI_GetRawInputBuffer',
        documentation: 'Performs a buffered read of the raw input data',
        insertText: '_WinAPI_GetRawInputBuffer(${})'
    },
    {
        label: '_WinAPI_GetRawInputBufferLength',
        documentation: 'Retrieves the required buffer size to call the _WinAPI_GetRawInputBuffer() function',
        insertText: '_WinAPI_GetRawInputBufferLength(${})'
    },
    {
        label: '_WinAPI_GetRawInputData',
        documentation: 'Retrieves the raw input from the specified device',
        insertText: '_WinAPI_GetRawInputData(${})'
    },
    {
        label: '_WinAPI_GetRawInputDeviceInfo',
        documentation: 'Retrieves information about the raw input device',
        insertText: '_WinAPI_GetRawInputDeviceInfo(${})'
    },
    {
        label: '_WinAPI_GetRegisteredRawInputDevices',
        documentation: 'Retrieves the information about the raw input devices for the current application',
        insertText: '_WinAPI_GetRegisteredRawInputDevices(${})'
    },
    {
        label: '_WinAPI_IsLoadKBLayout',
        documentation: 'Determines whether the specified input locale loaded into the system',
        insertText: '_WinAPI_IsLoadKBLayout(${})'
    },
    {
        label: '_WinAPI_IsWindowEnabled',
        documentation: 'Determines whether the specified window is enabled for mouse and keyboard input',
        insertText: '_WinAPI_IsWindowEnabled(${})'
    },
    {
        label: '_WinAPI_Keybd_Event',
        documentation: 'Synthesizes a keystroke',
        insertText: '_WinAPI_Keybd_Event(${})'
    },
    {
        label: '_WinAPI_LoadKeyboardLayout',
        documentation: 'Loads a new input locale identifier into the system',
        insertText: '_WinAPI_LoadKeyboardLayout(${})'
    },
    {
        label: '_WinAPI_MapVirtualKey',
        documentation: 'Translates a virtual-key code into a scan code or character value, or translates a scan code into a virtual-key code',
        insertText: '_WinAPI_MapVirtualKey(${})'
    },
    {
        label: '_WinAPI_RegisterHotKey',
        documentation: 'Defines a system-wide hot key',
        insertText: '_WinAPI_RegisterHotKey(${})'
    },
    {
        label: '_WinAPI_RegisterRawInputDevices',
        documentation: 'Registers the devices that supply the raw input data',
        insertText: '_WinAPI_RegisterRawInputDevices(${})'
    },
    {
        label: '_WinAPI_SetActiveWindow',
        documentation: 'Activates the specified window',
        insertText: '_WinAPI_SetActiveWindow(${})'
    },
    {
        label: '_WinAPI_SetKeyboardLayout',
        documentation: 'Sets an input locale identifier to the specified window',
        insertText: '_WinAPI_SetKeyboardLayout(${})'
    },
    {
        label: '_WinAPI_SetKeyboardState',
        documentation: 'Copies a 256-byte array of keyboard key states into the calling process\'s keyboard input-state table',
        insertText: '_WinAPI_SetKeyboardState(${})'
    },
    {
        label: '_WinAPI_TrackMouseEvent',
        documentation: 'Posts messages when the mouse pointer leaves a window or hovers over a window for a specified amount of time',
        insertText: '_WinAPI_TrackMouseEvent(${})'
    },
    {
        label: '_WinAPI_UnloadKeyboardLayout',
        documentation: 'Unloads an input locale identifier',
        insertText: '_WinAPI_UnloadKeyboardLayout(${})'
    },
    {
        label: '_WinAPI_UnregisterHotKey',
        documentation: 'Frees a hot key previously registered by the calling thread ',
        insertText: '_WinAPI_UnregisterHotKey(${})'
    },
    {
        label: '_WinAPI_AdjustWindowRectEx',
        documentation: 'Calculates the required size of the window rectangle, based on the desired size of the client rectangle',
        insertText: '_WinAPI_AdjustWindowRectEx(${})'
    },
    {
        label: '_WinAPI_AnimateWindow',
        documentation: 'Enables you to produce special effects when showing or hiding windows',
        insertText: '_WinAPI_AnimateWindow(${})'
    },
    {
        label: '_WinAPI_BeginDeferWindowPos',
        documentation: 'Allocates memory for a multiple-window-position structure',
        insertText: '_WinAPI_BeginDeferWindowPos(${})'
    },
    {
        label: '_WinAPI_BringWindowToTop',
        documentation: 'Brings the specified window to the top of the Z order',
        insertText: '_WinAPI_BringWindowToTop(${})'
    },
    {
        label: '_WinAPI_BroadcastSystemMessage',
        documentation: 'Sends a message to the specified recipients',
        insertText: '_WinAPI_BroadcastSystemMessage(${})'
    },
    {
        label: '_WinAPI_CallWindowProcW',
        documentation: 'Passes message information to the specified window procedure',
        insertText: '_WinAPI_CallWindowProcW(${})'
    },
    {
        label: '_WinAPI_CascadeWindows',
        documentation: 'Cascades the specified child windows of the specified parent window',
        insertText: '_WinAPI_CascadeWindows(${})'
    },
    {
        label: '_WinAPI_ChangeWindowMessageFilterEx',
        documentation: 'Modifies the User Interface Privilege Isolation (UIPI) message filter for a specified window',
        insertText: '_WinAPI_ChangeWindowMessageFilterEx(${})'
    },
    {
        label: '_WinAPI_ChildWindowFromPointEx',
        documentation: 'Determines which, if any, of the child windows belonging to the specified parent window contains the specified point',
        insertText: '_WinAPI_ChildWindowFromPointEx(${})'
    },
    {
        label: '_WinAPI_CloseWindow',
        documentation: 'Minimizes (but does not destroy) the specified window',
        insertText: '_WinAPI_CloseWindow(${})'
    },
    {
        label: '_WinAPI_DeferWindowPos',
        documentation: 'Updates the specified multiple-window-position structure for the specified window',
        insertText: '_WinAPI_DeferWindowPos(${})'
    },
    {
        label: '_WinAPI_DefWindowProcW',
        documentation: 'Calls the default window procedure to provide default processing for any window messages',
        insertText: '_WinAPI_DefWindowProcW(${})'
    },
    {
        label: '_WinAPI_DeregisterShellHookWindow',
        documentation: 'Unregisters a specified Shell window that is registered to receive Shell hook messages',
        insertText: '_WinAPI_DeregisterShellHookWindow(${})'
    },
    {
        label: '_WinAPI_DragAcceptFiles',
        documentation: 'Registers whether a window accepts dropped files',
        insertText: '_WinAPI_DragAcceptFiles(${})'
    },
    {
        label: '_WinAPI_DragFinish',
        documentation: 'Releases memory that the system allocated for use in transferring file names to the application',
        insertText: '_WinAPI_DragFinish(${})'
    },
    {
        label: '_WinAPI_DragQueryFileEx',
        documentation: 'Retrieves the names of dropped files that result from a successful drag-and-drop operation',
        insertText: '_WinAPI_DragQueryFileEx(${})'
    },
    {
        label: '_WinAPI_DragQueryPoint',
        documentation: 'Retrieves the position of the mouse pointer at the time a file was dropped during a drag-and-drop operation',
        insertText: '_WinAPI_DragQueryPoint(${})'
    },
    {
        label: '_WinAPI_EndDeferWindowPos',
        documentation: 'Simultaneously updates the position and size of one or more windows in a single screen-refreshing cycle',
        insertText: '_WinAPI_EndDeferWindowPos(${})'
    },
    {
        label: '_WinAPI_EnumChildWindows',
        documentation: 'Enumerates a child windows that belong to the specified parent window',
        insertText: '_WinAPI_EnumChildWindows(${})'
    },
    {
        label: '_WinAPI_GetClassInfoEx',
        documentation: 'Retrieves information about a window class',
        insertText: '_WinAPI_GetClassInfoEx(${})'
    },
    {
        label: '_WinAPI_GetClassLongEx',
        documentation: 'Retrieves the specified value associated with the specified window',
        insertText: '_WinAPI_GetClassLongEx(${})'
    },
    {
        label: '_WinAPI_GetGUIThreadInfo',
        documentation: 'Retrieves information about the active window or a specified GUI thread',
        insertText: '_WinAPI_GetGUIThreadInfo(${})'
    },
    {
        label: '_WinAPI_GetLastActivePopup',
        documentation: 'Determines which pop-up window owned by the specified window was most recently active',
        insertText: '_WinAPI_GetLastActivePopup(${})'
    },
    {
        label: '_WinAPI_GetMessageExtraInfo',
        documentation: 'Retrieves the extra message information for the current thread',
        insertText: '_WinAPI_GetMessageExtraInfo(${})'
    },
    {
        label: '_WinAPI_GetMonitorInfo',
        documentation: 'Retrieves information about a display monitor',
        insertText: '_WinAPI_GetMonitorInfo(${})'
    },
    {
        label: '_WinAPI_GetObjectInfoByHandle',
        documentation: 'Retrieves information about a specified object',
        insertText: '_WinAPI_GetObjectInfoByHandle(${})'
    },
    {
        label: '_WinAPI_GetObjectNameByHandle',
        documentation: 'Retrieves a name of the specified object',
        insertText: '_WinAPI_GetObjectNameByHandle(${})'
    },
    {
        label: '_WinAPI_GetShellWindow',
        documentation: 'Retrieves a handle to the Shell\'s desktop window',
        insertText: '_WinAPI_GetShellWindow(${})'
    },
    {
        label: '_WinAPI_GetTopWindow',
        documentation: 'Retrieves a handle to the child window at the top of the Z order',
        insertText: '_WinAPI_GetTopWindow(${})'
    },
    {
        label: '_WinAPI_GetWindowDisplayAffinity',
        documentation: 'Retrieves the current display affinity setting, from any process, for a given window',
        insertText: '_WinAPI_GetWindowDisplayAffinity(${})'
    },
    {
        label: '_WinAPI_GetWindowInfo',
        documentation: 'Retrieves information about the specified window',
        insertText: '_WinAPI_GetWindowInfo(${})'
    },
    {
        label: '_WinAPI_GetWorkArea',
        documentation: 'Retrieves the size of the working area on the primary display monitor',
        insertText: '_WinAPI_GetWorkArea(${})'
    },
    {
        label: '_WinAPI_IsChild',
        documentation: 'Tests whether a window is a child window of a specified parent window',
        insertText: '_WinAPI_IsChild(${})'
    },
    {
        label: '_WinAPI_IsHungAppWindow',
        documentation: 'Determines whether the specified application is not responding',
        insertText: '_WinAPI_IsHungAppWindow(${})'
    },
    {
        label: '_WinAPI_IsIconic',
        documentation: 'Determines whether the specified window is minimized (iconic)',
        insertText: '_WinAPI_IsIconic(${})'
    },
    {
        label: '_WinAPI_IsWindowUnicode',
        documentation: 'Determines whether the specified window is a native Unicode window',
        insertText: '_WinAPI_IsWindowUnicode(${})'
    },
    {
        label: '_WinAPI_IsZoomed',
        documentation: 'Determines whether a window is maximized',
        insertText: '_WinAPI_IsZoomed(${})'
    },
    {
        label: '_WinAPI_KillTimer',
        documentation: 'Destroys the specified timer',
        insertText: '_WinAPI_KillTimer(${})'
    },
    {
        label: '_WinAPI_OpenIcon',
        documentation: 'Restores a minimized (iconic) window to its previous size and position and activates the window',
        insertText: '_WinAPI_OpenIcon(${})'
    },
    {
        label: '_WinAPI_RegisterClass',
        documentation: 'Registers a window class',
        insertText: '_WinAPI_RegisterClass(${})'
    },
    {
        label: '_WinAPI_RegisterClassEx',
        documentation: 'Registers a window class',
        insertText: '_WinAPI_RegisterClassEx(${})'
    },
    {
        label: '_WinAPI_RegisterShellHookWindow',
        documentation: 'Registers a specified Shell window to receive certain messages for events or notifications',
        insertText: '_WinAPI_RegisterShellHookWindow(${})'
    },
    {
        label: '_WinAPI_SendMessageTimeout',
        documentation: 'Sends the specified message to one of more windows',
        insertText: '_WinAPI_SendMessageTimeout(${})'
    },
    {
        label: '_WinAPI_SetClassLongEx',
        documentation: 'Replaces the specified value into the specified window belongs',
        insertText: '_WinAPI_SetClassLongEx(${})'
    },
    {
        label: '_WinAPI_SetForegroundWindow',
        documentation: 'Puts the specified window into the foreground and activates its',
        insertText: '_WinAPI_SetForegroundWindow(${})'
    },
    {
        label: '_WinAPI_SetMessageExtraInfo',
        documentation: 'Sets the extra message information for the current thread',
        insertText: '_WinAPI_SetMessageExtraInfo(${})'
    },
    {
        label: '_WinAPI_SetTimer',
        documentation: 'Creates a timer with the specified time-out value',
        insertText: '_WinAPI_SetTimer(${})'
    },
    {
        label: '_WinAPI_SetWindowDisplayAffinity',
        documentation: 'Stores the display affinity setting in kernel mode on the specified window',
        insertText: '_WinAPI_SetWindowDisplayAffinity(${})'
    },
    {
        label: '_WinAPI_ShowOwnedPopups',
        documentation: 'Shows or hides all pop-up windows owned by the specified window',
        insertText: '_WinAPI_ShowOwnedPopups(${})'
    },
    {
        label: '_WinAPI_SwitchToThisWindow',
        documentation: 'Switches the focus to a specified window and bring it to the foreground',
        insertText: '_WinAPI_SwitchToThisWindow(${})'
    },
    {
        label: '_WinAPI_TileWindows',
        documentation: 'Tiles the specified child windows of the specified parent window',
        insertText: '_WinAPI_TileWindows(${})'
    },
    {
        label: '_WinAPI_UnregisterClass',
        documentation: 'Unregisters a window class, freeing the memory required for the class',
        insertText: '_WinAPI_UnregisterClass(${})'
    },
    {
        label: '_WinAPI_UpdateLayeredWindowEx',
        documentation: 'Updates a bitmap translucency of a layered window',
        insertText: '_WinAPI_UpdateLayeredWindowEx(${})'
    },
    {
        label: '_WinAPI_UpdateLayeredWindowIndirect',
        documentation: 'Updates the position, size, shape, content, and translucency of a layered window',
        insertText: '_WinAPI_UpdateLayeredWindowIndirect(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPISys.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items