'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_MemGlobalAlloc',
        documentation: 'Allocates the specified number of bytes from the heap'
    },

    {
        label: '_MemGlobalFree',
        documentation: 'Frees the specified global memory object and invalidates its handle'
    },

    {
        label: '_MemGlobalLock',
        documentation: 'Locks a global memory object and returns a pointer to the first byte of the object\'s memory block'
    },

    {
        label: '_MemGlobalSize',
        documentation: 'Retrieves the current size of the specified global memory object'
    },

    {
        label: '_MemGlobalUnlock',
        documentation: 'Decrements the lock count associated with a memory object that was allocated with GMEM_MOVEABLE'
    },

    {
        label: '_MemMoveMemory',
        documentation: 'Moves memory either forward or backward, aligned or unaligned'
    },

    {
        label: '_MemVirtualAlloc',
        documentation: 'Reserves or commits a region of pages in the virtual address space of the calling process'
    },

    {
        label: '_MemVirtualAllocEx',
        documentation: 'Reserves a region of memory within the virtual address space of a specified process'
    },

    {
        label: '_MemVirtualFree',
        documentation: 'Releases a region of pages within the virtual address space of a process'
    },

    {
        label: '_MemVirtualFreeEx',
        documentation: 'Releases a region of pages within the virtual address space of a process '
    },
    {
        label: '_WinAPI_LockWorkStation',
        documentation: 'Locks the workstation\'s display'
    },
    {
        label: '_WinAPI_ShutdownBlockReasonCreate',
        documentation: 'Indicates that the system cannot be shut down and sets a reason string to be displayed to the user if system shutdown is initiated'
    },
    {
        label: '_WinAPI_ShutdownBlockReasonDestroy',
        documentation: 'Indicates that the system can be shut down and frees the reason string'
    },
    {
        label: '_WinAPI_ShutdownBlockReasonQuery',
        documentation: 'Retrieves the reason string set by the _WinAPI_ShutdownBlockReasonCreate() function '
    },
    {
        label: '_WinAPI_SetWinEventHook',
        documentation: 'Sets an event hook function for a range of events'
    },
    {
        label: '_WinAPI_UnhookWinEvent',
        documentation: 'Removes an event hook function '
    },
    {
        label: '_WinAPI_AddClipboardFormatListener',
        documentation: 'Places the given window in the system-maintained clipboard format listener list'
    },
    {
        label: '_WinAPI_GetClipboardSequenceNumber',
        documentation: 'Retrieves the clipboard sequence number for the current window station'
    },
    {
        label: '_WinAPI_RemoveClipboardFormatListener',
        documentation: 'Removes the given window from the system-maintained clipboard format listener list '
    },
    {
        label: '_WinAPI_GetEffectiveClientRect',
        documentation: 'Calculates the dimensions of a rectangle in the client area that contains all the specified controls'
    },
    {
        label: '_WinAPI_GetMUILanguage',
        documentation: 'Gets the language currently in use by the common controls for a particular process'
    },
    {
        label: '_WinAPI_InitMUILanguage',
        documentation: 'Enables an application to specify a language to be used with the common controls that is different from the system language'
    },
    {
        label: '_WinAPI_LoadIconMetric',
        documentation: 'Loads a specified icon resource with a client-specified system metric'
    },
    {
        label: '_WinAPI_LoadIconWithScaleDown',
        documentation: 'Loads an icon and scales down a larger image instead of scaling up a smaller image'
    },
    {
        label: '_WinAPI_MirrorIcon',
        documentation: 'Reverses (mirrors) icons so that they are displayed correctly on a mirrored device context '
    },
    {
        label: '_WinAPI_GetDllDirectory',
        documentation: 'Retrieves the application-specific portion of the search path used to locate DLLs for the application'
    },
    {
        label: '_WinAPI_GetModuleHandleEx',
        documentation: 'Retrieves a module handle for the specified module'
    },
    {
        label: '_WinAPI_SetDllDirectory',
        documentation: 'Adds a directory to the search path used to locate DLLs for the application '
    },
    {
        label: '_WinAPI_CreateBuffer',
        documentation: 'Allocates a block of memory from the internal library heap'
    },
    {
        label: '_WinAPI_CreateBufferFromStruct',
        documentation: 'Allocates a block of memory from the internal library heap and initializes it with the structure\'s data'
    },
    {
        label: '_WinAPI_CreateString',
        documentation: 'Copies a specified string to the newly allocated memory block and returns its pointer'
    },
    {
        label: '_WinAPI_FreeMemory',
        documentation: 'Frees a memory block in the internal library heap'
    },
    {
        label: '_WinAPI_GetMemorySize',
        documentation: 'Retrieves the size of a memory block allocated from the internal library heap'
    },
    {
        label: '_WinAPI_IsMemory',
        documentation: 'Determines whether the specified pointer points to the memory block in the internal library heap '
    },
    {
        label: '_WinAPI_CompressBuffer',
        documentation: 'Compresses a buffer with specified compression format and engine type'
    },
    {
        label: '_WinAPI_ComputeCrc32',
        documentation: 'Calculates the CRC32 checksum of a block of memory'
    },
    {
        label: '_WinAPI_DecompressBuffer',
        documentation: 'Decompresses an entire compressed buffer'
    },
    {
        label: '_WinAPI_EqualMemory',
        documentation: 'Compares two blocks of memory to determine whether the specified number of bytes are identical'
    },
    {
        label: '_WinAPI_FillMemory',
        documentation: 'Fills a block of memory with the given value'
    },
    {
        label: '_WinAPI_GetPhysicallyInstalledSystemMemory',
        documentation: 'Retrieves the amount of RAM that is physically installed on the computer'
    },
    {
        label: '_WinAPI_GetSystemDEPPolicy',
        documentation: 'Gets the data execution prevention (DEP) policy setting for the system'
    },
    {
        label: '_WinAPI_IsBadCodePtr',
        documentation: 'Determines whether the calling process has read access to the memory at the specified address'
    },
    {
        label: '_WinAPI_IsBadReadPtr',
        documentation: 'Verifies that the calling process has read access to the specified range of memory'
    },
    {
        label: '_WinAPI_IsBadStringPtr',
        documentation: 'Verifies that the calling process has read access to the specified range of memory'
    },
    {
        label: '_WinAPI_IsBadWritePtr',
        documentation: 'Verifies that the calling process has write access to the specified range of memory'
    },
    {
        label: '_WinAPI_MoveMemory',
        documentation: 'Moves a block of memory from one location to another'
    },
    {
        label: '_WinAPI_ZeroMemory',
        documentation: 'Fills a block of memory with zeros '
    },
    {
        label: '_WinAPI_GetDefaultPrinter',
        documentation: 'Retrieves the printer name of the default printer for the current user on the local computer'
    },
    {
        label: '_WinAPI_GetPwrCapabilities',
        documentation: 'Retrieves information about the system power capabilities'
    },
    {
        label: '_WinAPI_GetSystemPowerStatus',
        documentation: 'Retrieves the power status of the system'
    },
    {
        label: '_WinAPI_RegisterPowerSettingNotification',
        documentation: 'Registers the application to receive power setting notifications for the specific power setting event'
    },
    {
        label: '_WinAPI_UnregisterPowerSettingNotification',
        documentation: 'Unregisters the power setting notification '
    },
    {
        label: '_WinAPI_CloseDesktop',
        documentation: 'Closes an open handle to a desktop object'
    },
    {
        label: '_WinAPI_CloseWindowStation',
        documentation: 'Closes an open window station handle'
    },
    {
        label: '_WinAPI_CreateDesktop',
        documentation: 'Creates a new desktop, associates it with the current window station of the calling process'
    },
    {
        label: '_WinAPI_CreateWindowStation',
        documentation: 'Creates a window station object, associates it with the calling process, and assigns it to the current session'
    },
    {
        label: '_WinAPI_EnumDesktops',
        documentation: 'Enumerates all desktops associated with the specified window station of the calling process'
    },
    {
        label: '_WinAPI_EnumDesktopWindows',
        documentation: 'Enumerates all top-level windows associated with the specified desktop'
    },
    {
        label: '_WinAPI_EnumWindowStations',
        documentation: 'Enumerates all window stations in the current session'
    },
    {
        label: '_WinAPI_GetProcessWindowStation',
        documentation: 'Retrieves a handle to the current window station for the calling process'
    },
    {
        label: '_WinAPI_GetUserObjectInformation',
        documentation: 'Retrieves information about the specified window station or desktop object'
    },
    {
        label: '_WinAPI_OpenDesktop',
        documentation: 'Opens the specified desktop object'
    },
    {
        label: '_WinAPI_OpenInputDesktop',
        documentation: 'Opens the desktop that receives user input'
    },
    {
        label: '_WinAPI_OpenWindowStation',
        documentation: 'Opens the specified window station'
    },
    {
        label: '_WinAPI_SetProcessWindowStation',
        documentation: 'Assigns the specified window station to the calling process'
    },
    {
        label: '_WinAPI_SetUserObjectInformation',
        documentation: 'Sets information about the specified window station or desktop object'
    },
    {
        label: '_WinAPI_SwitchDesktop',
        documentation: 'Makes the specified desktop visible and activates it '
    },
    {
        label: '_WinAPI_EnumPageFiles',
        documentation: 'Retrieves information for each installed pagefile in the system'
    },
    {
        label: '_WinAPI_GetCurrentHwProfile',
        documentation: 'Retrieves information about the current hardware profile for the local computer'
    },
    {
        label: '_WinAPI_GetHandleInformation',
        documentation: 'Retrieves certain properties of an object handle'
    },
    {
        label: '_WinAPI_GetPerformanceInfo',
        documentation: 'Retrieves the performance information'
    },
    {
        label: '_WinAPI_GetProcessShutdownParameters',
        documentation: 'Retrieves the shutdown parameters for the currently calling process'
    },
    {
        label: '_WinAPI_GetStartupInfo',
        documentation: 'Retrieves the contents of the STARTUPINFO structure that was specified when the calling process was created'
    },
    {
        label: '_WinAPI_GetSystemInfo',
        documentation: 'Retrieves information about the current system'
    },
    {
        label: '_WinAPI_GetSystemTimes',
        documentation: 'Retrieves system timing information'
    },
    {
        label: '_WinAPI_GetSystemWow64Directory',
        documentation: 'Retrieves the path of the system directory used by WOW64'
    },
    {
        label: '_WinAPI_GetTickCount',
        documentation: 'Retrieves the number of milliseconds that have elapsed since the system was started'
    },
    {
        label: '_WinAPI_GetTickCount64',
        documentation: 'Retrieves the number of milliseconds that have elapsed since the system was started'
    },
    {
        label: '_WinAPI_GetVersion',
        documentation: 'Retrieves version of the current operating system'
    },
    {
        label: '_WinAPI_GetVersionEx',
        documentation: 'Retrieves information about the current operating system'
    },
    {
        label: '_WinAPI_IsProcessorFeaturePresent',
        documentation: 'Determines whether the specified processor feature is supported by the current computer'
    },
    {
        label: '_WinAPI_QueryPerformanceCounter',
        documentation: 'Retrieves the current value of the high-resolution performance counter'
    },
    {
        label: '_WinAPI_QueryPerformanceFrequency',
        documentation: 'Retrieves the frequency of the high-resolution performance counter'
    },
    {
        label: '_WinAPI_SetProcessShutdownParameters',
        documentation: 'Sets a shutdown order for a process relative to the other processes in the system '
    },
    {
        label: '_WinAPI_ActivateKeyboardLayout',
        documentation: 'Sets the input locale identifier for the calling thread or the current process'
    },
    {
        label: '_WinAPI_DefRawInputProc',
        documentation: 'Calls the default raw input procedure to process the raw input messages that an application does not process'
    },
    {
        label: '_WinAPI_EnumRawInputDevices',
        documentation: 'Enumerates the raw input devices attached to the system'
    },
    {
        label: '_WinAPI_GetActiveWindow',
        documentation: 'Retrieves the window handle to the active window attached to the calling process\'s message queue'
    },
    {
        label: '_WinAPI_GetIdleTime',
        documentation: 'Retrieves the time that has elapsed since the last input'
    },
    {
        label: '_WinAPI_GetKeyboardLayout',
        documentation: 'Retrieves the active input locale identifier for the specified window'
    },
    {
        label: '_WinAPI_GetKeyboardLayoutList',
        documentation: 'Retrieves the all input locale identifiers corresponding to the current set of input locales in the system'
    },
    {
        label: '_WinAPI_GetKeyboardState',
        documentation: 'Copies the status of the 256 virtual keys to the specified buffer'
    },
    {
        label: '_WinAPI_GetKeyboardType',
        documentation: 'Retrieves information about the current keyboard'
    },
    {
        label: '_WinAPI_GetKeyNameText',
        documentation: 'Retrieves a string that represents the name of a key'
    },
    {
        label: '_WinAPI_GetKeyState',
        documentation: 'Retrieves the status of the specified virtual key'
    },
    {
        label: '_WinAPI_GetRawInputBuffer',
        documentation: 'Performs a buffered read of the raw input data'
    },
    {
        label: '_WinAPI_GetRawInputBufferLength',
        documentation: 'Retrieves the required buffer size to call the _WinAPI_GetRawInputBuffer() function'
    },
    {
        label: '_WinAPI_GetRawInputData',
        documentation: 'Retrieves the raw input from the specified device'
    },
    {
        label: '_WinAPI_GetRawInputDeviceInfo',
        documentation: 'Retrieves information about the raw input device'
    },
    {
        label: '_WinAPI_GetRegisteredRawInputDevices',
        documentation: 'Retrieves the information about the raw input devices for the current application'
    },
    {
        label: '_WinAPI_IsLoadKBLayout',
        documentation: 'Determines whether the specified input locale loaded into the system'
    },
    {
        label: '_WinAPI_IsWindowEnabled',
        documentation: 'Determines whether the specified window is enabled for mouse and keyboard input'
    },
    {
        label: '_WinAPI_Keybd_Event',
        documentation: 'Synthesizes a keystroke'
    },
    {
        label: '_WinAPI_LoadKeyboardLayout',
        documentation: 'Loads a new input locale identifier into the system'
    },
    {
        label: '_WinAPI_MapVirtualKey',
        documentation: 'Translates a virtual-key code into a scan code or character value, or translates a scan code into a virtual-key code'
    },
    {
        label: '_WinAPI_RegisterHotKey',
        documentation: 'Defines a system-wide hot key'
    },
    {
        label: '_WinAPI_RegisterRawInputDevices',
        documentation: 'Registers the devices that supply the raw input data'
    },
    {
        label: '_WinAPI_SetActiveWindow',
        documentation: 'Activates the specified window'
    },
    {
        label: '_WinAPI_SetKeyboardLayout',
        documentation: 'Sets an input locale identifier to the specified window'
    },
    {
        label: '_WinAPI_SetKeyboardState',
        documentation: 'Copies a 256-byte array of keyboard key states into the calling process\'s keyboard input-state table'
    },
    {
        label: '_WinAPI_TrackMouseEvent',
        documentation: 'Posts messages when the mouse pointer leaves a window or hovers over a window for a specified amount of time'
    },
    {
        label: '_WinAPI_UnloadKeyboardLayout',
        documentation: 'Unloads an input locale identifier'
    },
    {
        label: '_WinAPI_UnregisterHotKey',
        documentation: 'Frees a hot key previously registered by the calling thread '
    },
    {
        label: '_WinAPI_AdjustWindowRectEx',
        documentation: 'Calculates the required size of the window rectangle, based on the desired size of the client rectangle'
    },
    {
        label: '_WinAPI_AnimateWindow',
        documentation: 'Enables you to produce special effects when showing or hiding windows'
    },
    {
        label: '_WinAPI_BeginDeferWindowPos',
        documentation: 'Allocates memory for a multiple-window-position structure'
    },
    {
        label: '_WinAPI_BringWindowToTop',
        documentation: 'Brings the specified window to the top of the Z order'
    },
    {
        label: '_WinAPI_BroadcastSystemMessage',
        documentation: 'Sends a message to the specified recipients'
    },
    {
        label: '_WinAPI_CallWindowProcW',
        documentation: 'Passes message information to the specified window procedure'
    },
    {
        label: '_WinAPI_CascadeWindows',
        documentation: 'Cascades the specified child windows of the specified parent window'
    },
    {
        label: '_WinAPI_ChangeWindowMessageFilterEx',
        documentation: 'Modifies the User Interface Privilege Isolation (UIPI) message filter for a specified window'
    },
    {
        label: '_WinAPI_ChildWindowFromPointEx',
        documentation: 'Determines which, if any, of the child windows belonging to the specified parent window contains the specified point'
    },
    {
        label: '_WinAPI_CloseWindow',
        documentation: 'Minimizes (but does not destroy) the specified window'
    },
    {
        label: '_WinAPI_DeferWindowPos',
        documentation: 'Updates the specified multiple-window-position structure for the specified window'
    },
    {
        label: '_WinAPI_DefWindowProcW',
        documentation: 'Calls the default window procedure to provide default processing for any window messages'
    },
    {
        label: '_WinAPI_DeregisterShellHookWindow',
        documentation: 'Unregisters a specified Shell window that is registered to receive Shell hook messages'
    },
    {
        label: '_WinAPI_DragAcceptFiles',
        documentation: 'Registers whether a window accepts dropped files'
    },
    {
        label: '_WinAPI_DragFinish',
        documentation: 'Releases memory that the system allocated for use in transferring file names to the application'
    },
    {
        label: '_WinAPI_DragQueryFileEx',
        documentation: 'Retrieves the names of dropped files that result from a successful drag-and-drop operation'
    },
    {
        label: '_WinAPI_DragQueryPoint',
        documentation: 'Retrieves the position of the mouse pointer at the time a file was dropped during a drag-and-drop operation'
    },
    {
        label: '_WinAPI_EndDeferWindowPos',
        documentation: 'Simultaneously updates the position and size of one or more windows in a single screen-refreshing cycle'
    },
    {
        label: '_WinAPI_EnumChildWindows',
        documentation: 'Enumerates a child windows that belong to the specified parent window'
    },
    {
        label: '_WinAPI_GetClassInfoEx',
        documentation: 'Retrieves information about a window class'
    },
    {
        label: '_WinAPI_GetClassLongEx',
        documentation: 'Retrieves the specified value associated with the specified window'
    },
    {
        label: '_WinAPI_GetGUIThreadInfo',
        documentation: 'Retrieves information about the active window or a specified GUI thread'
    },
    {
        label: '_WinAPI_GetLastActivePopup',
        documentation: 'Determines which pop-up window owned by the specified window was most recently active'
    },
    {
        label: '_WinAPI_GetMessageExtraInfo',
        documentation: 'Retrieves the extra message information for the current thread'
    },
    {
        label: '_WinAPI_GetMonitorInfo',
        documentation: 'Retrieves information about a display monitor'
    },
    {
        label: '_WinAPI_GetObjectInfoByHandle',
        documentation: 'Retrieves information about a specified object'
    },
    {
        label: '_WinAPI_GetObjectNameByHandle',
        documentation: 'Retrieves a name of the specified object'
    },
    {
        label: '_WinAPI_GetShellWindow',
        documentation: 'Retrieves a handle to the Shell\'s desktop window'
    },
    {
        label: '_WinAPI_GetTopWindow',
        documentation: 'Retrieves a handle to the child window at the top of the Z order'
    },
    {
        label: '_WinAPI_GetWindowDisplayAffinity',
        documentation: 'Retrieves the current display affinity setting, from any process, for a given window'
    },
    {
        label: '_WinAPI_GetWindowInfo',
        documentation: 'Retrieves information about the specified window'
    },
    {
        label: '_WinAPI_GetWorkArea',
        documentation: 'Retrieves the size of the working area on the primary display monitor'
    },
    {
        label: '_WinAPI_IsChild',
        documentation: 'Tests whether a window is a child window of a specified parent window'
    },
    {
        label: '_WinAPI_IsHungAppWindow',
        documentation: 'Determines whether the specified application is not responding'
    },
    {
        label: '_WinAPI_IsIconic',
        documentation: 'Determines whether the specified window is minimized (iconic)'
    },
    {
        label: '_WinAPI_IsWindowUnicode',
        documentation: 'Determines whether the specified window is a native Unicode window'
    },
    {
        label: '_WinAPI_IsZoomed',
        documentation: 'Determines whether a window is maximized'
    },
    {
        label: '_WinAPI_KillTimer',
        documentation: 'Destroys the specified timer'
    },
    {
        label: '_WinAPI_OpenIcon',
        documentation: 'Restores a minimized (iconic) window to its previous size and position and activates the window'
    },
    {
        label: '_WinAPI_RegisterClass',
        documentation: 'Registers a window class'
    },
    {
        label: '_WinAPI_RegisterClassEx',
        documentation: 'Registers a window class'
    },
    {
        label: '_WinAPI_RegisterShellHookWindow',
        documentation: 'Registers a specified Shell window to receive certain messages for events or notifications'
    },
    {
        label: '_WinAPI_SendMessageTimeout',
        documentation: 'Sends the specified message to one of more windows'
    },
    {
        label: '_WinAPI_SetClassLongEx',
        documentation: 'Replaces the specified value into the specified window belongs'
    },
    {
        label: '_WinAPI_SetForegroundWindow',
        documentation: 'Puts the specified window into the foreground and activates its'
    },
    {
        label: '_WinAPI_SetMessageExtraInfo',
        documentation: 'Sets the extra message information for the current thread'
    },
    {
        label: '_WinAPI_SetTimer',
        documentation: 'Creates a timer with the specified time-out value'
    },
    {
        label: '_WinAPI_SetWindowDisplayAffinity',
        documentation: 'Stores the display affinity setting in kernel mode on the specified window'
    },
    {
        label: '_WinAPI_ShowOwnedPopups',
        documentation: 'Shows or hides all pop-up windows owned by the specified window'
    },
    {
        label: '_WinAPI_SwitchToThisWindow',
        documentation: 'Switches the focus to a specified window and bring it to the foreground'
    },
    {
        label: '_WinAPI_TileWindows',
        documentation: 'Tiles the specified child windows of the specified parent window'
    },
    {
        label: '_WinAPI_UnregisterClass',
        documentation: 'Unregisters a window class, freeing the memory required for the class'
    },
    {
        label: '_WinAPI_UpdateLayeredWindowEx',
        documentation: 'Updates a bitmap translucency of a layered window'
    },
    {
        label: '_WinAPI_UpdateLayeredWindowIndirect',
        documentation: 'Updates the position, size, shape, content, and translucency of a layered window'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPISys.au3>'
}

module.exports = items