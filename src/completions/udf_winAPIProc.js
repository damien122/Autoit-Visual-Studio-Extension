'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_ProcessGetName',
        documentation: 'Returns a string containing the process name that belongs to a given PID'
    },
    {
        label: '_ProcessGetPriority',
        documentation: 'Get the priority of an open process'
    },
    {
        label: '_RunDos',
        documentation: 'Executes a DOS command in a hidden command window '
    },
    {
        label: '_WinAPI_AdjustTokenPrivileges',
        documentation: 'Enables or disables privileges in the specified access token'
    },
    {
        label: '_WinAPI_AssignProcessToJobObject',
        documentation: 'Assigns a process to an existing job object'
    },
    {
        label: '_WinAPI_CreateJobObject',
        documentation: 'Creates or opens a job object'
    },
    {
        label: '_WinAPI_CreateProcessWithToken',
        documentation: 'Creates a new process and its primary thread in the security context of the specified token'
    },
    {
        label: '_WinAPI_DuplicateTokenEx',
        documentation: 'Creates a new primary or impersonation access token that duplicates an existing token'
    },
    {
        label: '_WinAPI_EmptyWorkingSet',
        documentation: 'Removes as many pages as possible from the working set of the specified process'
    },
    {
        label: '_WinAPI_EnumChildProcess',
        documentation: 'Enumerates a child processes that belong to the specified process'
    },
    {
        label: '_WinAPI_EnumDeviceDrivers',
        documentation: 'Retrieves the load address for each device driver in the system'
    },
    {
        label: '_WinAPI_EnumProcessHandles',
        documentation: 'Enumerates a handles that belong to the specified process'
    },
    {
        label: '_WinAPI_EnumProcessModules',
        documentation: 'Retrieves a handle and name for each module in the specified process'
    },
    {
        label: '_WinAPI_EnumProcessThreads',
        documentation: 'Enumerates a threads that belong to the specified process'
    },
    {
        label: '_WinAPI_EnumProcessWindows',
        documentation: 'Enumerates a windows that belong to the specified process'
    },
    {
        label: '_WinAPI_GetCurrentProcessExplicitAppUserModelID',
        documentation: 'Retrieves the application-defined, explicit Application User Model ID for the current process'
    },
    {
        label: '_WinAPI_GetDeviceDriverBaseName',
        documentation: 'Retrieves the base name of the specified device driver'
    },
    {
        label: '_WinAPI_GetDeviceDriverFileName',
        documentation: 'Retrieves the path available for the specified device driver'
    },
    {
        label: '_WinAPI_GetExitCodeProcess',
        documentation: 'Retrieves the termination status of the specified process'
    },
    {
        label: '_WinAPI_GetModuleFileNameEx',
        documentation: 'Retrieves the fully-qualified path for the file containing the specified module'
    },
    {
        label: '_WinAPI_GetModuleInformation',
        documentation: 'Retrieves information about the specified module'
    },
    {
        label: '_WinAPI_GetParentProcess',
        documentation: 'Retrieves the PID of the parent process for the specified process'
    },
    {
        label: '_WinAPI_GetPriorityClass',
        documentation: 'Retrieves the priority class for the specified process'
    },
    {
        label: '_WinAPI_GetProcessCommandLine',
        documentation: 'Retrieves the command-line string for the specified process'
    },
    {
        label: '_WinAPI_GetProcessFileName',
        documentation: 'Retrieves the fully-qualified path of the executable file for the specified process'
    },
    {
        label: '_WinAPI_GetProcessHandleCount',
        documentation: 'Retrieves the number of open handles that belong to the specified process'
    },
    {
        label: '_WinAPI_GetProcessID',
        documentation: 'Retrieves the process identifier of the specified process'
    },
    {
        label: '_WinAPI_GetProcessIoCounters',
        documentation: 'Retrieves accounting information for all I/O operations performed by the specified process'
    },
    {
        label: '_WinAPI_GetProcessMemoryInfo',
        documentation: 'Retrieves information about the memory usage of the specified process'
    },
    {
        label: '_WinAPI_GetProcessName',
        documentation: 'Retrieves the name for the specified process'
    },
    {
        label: '_WinAPI_GetProcessTimes',
        documentation: 'Retrieves timing information for the specified process'
    },
    {
        label: '_WinAPI_GetProcessUser',
        documentation: 'Retrieves the user and domain name for the specified process'
    },
    {
        label: '_WinAPI_GetProcessWorkingDirectory',
        documentation: 'Retrieves the current working directory for the specified process'
    },
    {
        label: '_WinAPI_GetThreadDesktop',
        documentation: 'Retrieves a handle to the desktop assigned to the specified thread'
    },
    {
        label: '_WinAPI_GetThreadErrorMode',
        documentation: 'Retrieves the error mode for the calling thread'
    },
    {
        label: '_WinAPI_GetWindowFileName',
        documentation: 'Retrieves the fully-qualified path of the module associated with the specified window handle'
    },
    {
        label: '_WinAPI_IsElevated',
        documentation: 'Determines whether the current process is elevated'
    },
    {
        label: '_WinAPI_IsProcessInJob',
        documentation: 'Determines whether the process is running in the specified job'
    },
    {
        label: '_WinAPI_IsWow64Process',
        documentation: 'Determines whether the specified process is running under WOW64'
    },
    {
        label: '_WinAPI_OpenJobObject',
        documentation: 'Opens an existing job object'
    },
    {
        label: '_WinAPI_OpenProcessToken',
        documentation: 'Opens the access token associated with a process'
    },
    {
        label: '_WinAPI_QueryInformationJobObject',
        documentation: 'Retrieves limit and job state information from the job object'
    },
    {
        label: '_WinAPI_SetInformationJobObject',
        documentation: 'Sets limits for a job object'
    },
    {
        label: '_WinAPI_SetPriorityClass',
        documentation: 'Sets the priority class for the specified process'
    },
    {
        label: '_WinAPI_SetThreadDesktop',
        documentation: 'Assigns the specified desktop to the calling thread'
    },
    {
        label: '_WinAPI_SetThreadErrorMode',
        documentation: 'Controls whether the system will handle the specified types of serious errors or whether the calling thread will handle them'
    },
    {
        label: '_WinAPI_SetThreadExecutionState',
        documentation: 'Prevents the system from entering sleep or turning off the display while the current application is running'
    },
    {
        label: '_WinAPI_TerminateJobObject',
        documentation: 'Terminates all processes currently associated with the job'
    },
    {
        label: '_WinAPI_TerminateProcess',
        documentation: 'Terminates the specified process and all of its threads'
    },
    {
        label: '_WinAPI_UserHandleGrantAccess',
        documentation: 'Grants or denies access to a handle to a User object to a job that has a user-interface restriction'
    },
    {
        label: '_WinAPI_CreateMutex',
        documentation: 'Creates or opens a named or unnamed mutex object'
    },
    {
        label: '_WinAPI_CreateSemaphore',
        documentation: 'Creates or opens a named or unnamed semaphore object'
    },
    {
        label: '_WinAPI_OpenMutex',
        documentation: 'Opens an existing named mutex object'
    },
    {
        label: '_WinAPI_OpenSemaphore',
        documentation: 'Opens an existing named semaphore object'
    },
    {
        label: '_WinAPI_ReleaseMutex',
        documentation: 'Releases ownership of the specified mutex object'
    },
    {
        label: '_WinAPI_ReleaseSemaphore',
        documentation: 'Increases the count of the specified semaphore object by a specified amount'
    },
    {
        label: '_WinAPI_ResetEvent',
        documentation: 'Sets the specified event object to the nonsignaled state '
    },

]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIProc.au3>'
}

module.exports = items