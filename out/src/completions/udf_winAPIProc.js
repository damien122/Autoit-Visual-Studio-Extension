'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_ProcessGetName',
        documentation: 'Returns a string containing the process name that belongs to a given PID',
        insertText: '_ProcessGetName(${})'
    },
    {
        label: '_ProcessGetPriority',
        documentation: 'Get the priority of an open process',
        insertText: '_ProcessGetPriority(${})'
    },
    {
        label: '_RunDos',
        documentation: 'Executes a DOS command in a hidden command window ',
        insertText: '_RunDos(${})'
    },
    {
        label: '_WinAPI_AdjustTokenPrivileges',
        documentation: 'Enables or disables privileges in the specified access token',
        insertText: '_WinAPI_AdjustTokenPrivileges(${})'
    },
    {
        label: '_WinAPI_AssignProcessToJobObject',
        documentation: 'Assigns a process to an existing job object',
        insertText: '_WinAPI_AssignProcessToJobObject(${})'
    },
    {
        label: '_WinAPI_CreateJobObject',
        documentation: 'Creates or opens a job object',
        insertText: '_WinAPI_CreateJobObject(${})'
    },
    {
        label: '_WinAPI_CreateProcessWithToken',
        documentation: 'Creates a new process and its primary thread in the security context of the specified token',
        insertText: '_WinAPI_CreateProcessWithToken(${})'
    },
    {
        label: '_WinAPI_DuplicateTokenEx',
        documentation: 'Creates a new primary or impersonation access token that duplicates an existing token',
        insertText: '_WinAPI_DuplicateTokenEx(${})'
    },
    {
        label: '_WinAPI_EmptyWorkingSet',
        documentation: 'Removes as many pages as possible from the working set of the specified process',
        insertText: '_WinAPI_EmptyWorkingSet(${})'
    },
    {
        label: '_WinAPI_EnumChildProcess',
        documentation: 'Enumerates a child processes that belong to the specified process',
        insertText: '_WinAPI_EnumChildProcess(${})'
    },
    {
        label: '_WinAPI_EnumDeviceDrivers',
        documentation: 'Retrieves the load address for each device driver in the system',
        insertText: '_WinAPI_EnumDeviceDrivers(${})'
    },
    {
        label: '_WinAPI_EnumProcessHandles',
        documentation: 'Enumerates a handles that belong to the specified process',
        insertText: '_WinAPI_EnumProcessHandles(${})'
    },
    {
        label: '_WinAPI_EnumProcessModules',
        documentation: 'Retrieves a handle and name for each module in the specified process',
        insertText: '_WinAPI_EnumProcessModules(${})'
    },
    {
        label: '_WinAPI_EnumProcessThreads',
        documentation: 'Enumerates a threads that belong to the specified process',
        insertText: '_WinAPI_EnumProcessThreads(${})'
    },
    {
        label: '_WinAPI_EnumProcessWindows',
        documentation: 'Enumerates a windows that belong to the specified process',
        insertText: '_WinAPI_EnumProcessWindows(${})'
    },
    {
        label: '_WinAPI_GetCurrentProcessExplicitAppUserModelID',
        documentation: 'Retrieves the application-defined, explicit Application User Model ID for the current process',
        insertText: '_WinAPI_GetCurrentProcessExplicitAppUserModelID(${})'
    },
    {
        label: '_WinAPI_GetDeviceDriverBaseName',
        documentation: 'Retrieves the base name of the specified device driver',
        insertText: '_WinAPI_GetDeviceDriverBaseName(${})'
    },
    {
        label: '_WinAPI_GetDeviceDriverFileName',
        documentation: 'Retrieves the path available for the specified device driver',
        insertText: '_WinAPI_GetDeviceDriverFileName(${})'
    },
    {
        label: '_WinAPI_GetExitCodeProcess',
        documentation: 'Retrieves the termination status of the specified process',
        insertText: '_WinAPI_GetExitCodeProcess(${})'
    },
    {
        label: '_WinAPI_GetModuleFileNameEx',
        documentation: 'Retrieves the fully-qualified path for the file containing the specified module',
        insertText: '_WinAPI_GetModuleFileNameEx(${})'
    },
    {
        label: '_WinAPI_GetModuleInformation',
        documentation: 'Retrieves information about the specified module',
        insertText: '_WinAPI_GetModuleInformation(${})'
    },
    {
        label: '_WinAPI_GetParentProcess',
        documentation: 'Retrieves the PID of the parent process for the specified process',
        insertText: '_WinAPI_GetParentProcess(${})'
    },
    {
        label: '_WinAPI_GetPriorityClass',
        documentation: 'Retrieves the priority class for the specified process',
        insertText: '_WinAPI_GetPriorityClass(${})'
    },
    {
        label: '_WinAPI_GetProcessCommandLine',
        documentation: 'Retrieves the command-line string for the specified process',
        insertText: '_WinAPI_GetProcessCommandLine(${})'
    },
    {
        label: '_WinAPI_GetProcessFileName',
        documentation: 'Retrieves the fully-qualified path of the executable file for the specified process',
        insertText: '_WinAPI_GetProcessFileName(${})'
    },
    {
        label: '_WinAPI_GetProcessHandleCount',
        documentation: 'Retrieves the number of open handles that belong to the specified process',
        insertText: '_WinAPI_GetProcessHandleCount(${})'
    },
    {
        label: '_WinAPI_GetProcessID',
        documentation: 'Retrieves the process identifier of the specified process',
        insertText: '_WinAPI_GetProcessID(${})'
    },
    {
        label: '_WinAPI_GetProcessIoCounters',
        documentation: 'Retrieves accounting information for all I/O operations performed by the specified process',
        insertText: '_WinAPI_GetProcessIoCounters(${})'
    },
    {
        label: '_WinAPI_GetProcessMemoryInfo',
        documentation: 'Retrieves information about the memory usage of the specified process',
        insertText: '_WinAPI_GetProcessMemoryInfo(${})'
    },
    {
        label: '_WinAPI_GetProcessName',
        documentation: 'Retrieves the name for the specified process',
        insertText: '_WinAPI_GetProcessName(${})'
    },
    {
        label: '_WinAPI_GetProcessTimes',
        documentation: 'Retrieves timing information for the specified process',
        insertText: '_WinAPI_GetProcessTimes(${})'
    },
    {
        label: '_WinAPI_GetProcessUser',
        documentation: 'Retrieves the user and domain name for the specified process',
        insertText: '_WinAPI_GetProcessUser(${})'
    },
    {
        label: '_WinAPI_GetProcessWorkingDirectory',
        documentation: 'Retrieves the current working directory for the specified process',
        insertText: '_WinAPI_GetProcessWorkingDirectory(${})'
    },
    {
        label: '_WinAPI_GetThreadDesktop',
        documentation: 'Retrieves a handle to the desktop assigned to the specified thread',
        insertText: '_WinAPI_GetThreadDesktop(${})'
    },
    {
        label: '_WinAPI_GetThreadErrorMode',
        documentation: 'Retrieves the error mode for the calling thread',
        insertText: '_WinAPI_GetThreadErrorMode(${})'
    },
    {
        label: '_WinAPI_GetWindowFileName',
        documentation: 'Retrieves the fully-qualified path of the module associated with the specified window handle',
        insertText: '_WinAPI_GetWindowFileName(${})'
    },
    {
        label: '_WinAPI_IsElevated',
        documentation: 'Determines whether the current process is elevated',
        insertText: '_WinAPI_IsElevated(${})'
    },
    {
        label: '_WinAPI_IsProcessInJob',
        documentation: 'Determines whether the process is running in the specified job',
        insertText: '_WinAPI_IsProcessInJob(${})'
    },
    {
        label: '_WinAPI_IsWow64Process',
        documentation: 'Determines whether the specified process is running under WOW64',
        insertText: '_WinAPI_IsWow64Process(${})'
    },
    {
        label: '_WinAPI_OpenJobObject',
        documentation: 'Opens an existing job object',
        insertText: '_WinAPI_OpenJobObject(${})'
    },
    {
        label: '_WinAPI_OpenProcessToken',
        documentation: 'Opens the access token associated with a process',
        insertText: '_WinAPI_OpenProcessToken(${})'
    },
    {
        label: '_WinAPI_QueryInformationJobObject',
        documentation: 'Retrieves limit and job state information from the job object',
        insertText: '_WinAPI_QueryInformationJobObject(${})'
    },
    {
        label: '_WinAPI_SetInformationJobObject',
        documentation: 'Sets limits for a job object',
        insertText: '_WinAPI_SetInformationJobObject(${})'
    },
    {
        label: '_WinAPI_SetPriorityClass',
        documentation: 'Sets the priority class for the specified process',
        insertText: '_WinAPI_SetPriorityClass(${})'
    },
    {
        label: '_WinAPI_SetThreadDesktop',
        documentation: 'Assigns the specified desktop to the calling thread',
        insertText: '_WinAPI_SetThreadDesktop(${})'
    },
    {
        label: '_WinAPI_SetThreadErrorMode',
        documentation: 'Controls whether the system will handle the specified types of serious errors or whether the calling thread will handle them',
        insertText: '_WinAPI_SetThreadErrorMode(${})'
    },
    {
        label: '_WinAPI_SetThreadExecutionState',
        documentation: 'Prevents the system from entering sleep or turning off the display while the current application is running',
        insertText: '_WinAPI_SetThreadExecutionState(${})'
    },
    {
        label: '_WinAPI_TerminateJobObject',
        documentation: 'Terminates all processes currently associated with the job',
        insertText: '_WinAPI_TerminateJobObject(${})'
    },
    {
        label: '_WinAPI_TerminateProcess',
        documentation: 'Terminates the specified process and all of its threads',
        insertText: '_WinAPI_TerminateProcess(${})'
    },
    {
        label: '_WinAPI_UserHandleGrantAccess',
        documentation: 'Grants or denies access to a handle to a User object to a job that has a user-interface restriction',
        insertText: '_WinAPI_UserHandleGrantAccess(${})'
    },
    {
        label: '_WinAPI_CreateMutex',
        documentation: 'Creates or opens a named or unnamed mutex object',
        insertText: '_WinAPI_CreateMutex(${})'
    },
    {
        label: '_WinAPI_CreateSemaphore',
        documentation: 'Creates or opens a named or unnamed semaphore object',
        insertText: '_WinAPI_CreateSemaphore(${})'
    },
    {
        label: '_WinAPI_OpenMutex',
        documentation: 'Opens an existing named mutex object',
        insertText: '_WinAPI_OpenMutex(${})'
    },
    {
        label: '_WinAPI_OpenSemaphore',
        documentation: 'Opens an existing named semaphore object',
        insertText: '_WinAPI_OpenSemaphore(${})'
    },
    {
        label: '_WinAPI_ReleaseMutex',
        documentation: 'Releases ownership of the specified mutex object',
        insertText: '_WinAPI_ReleaseMutex(${})'
    },
    {
        label: '_WinAPI_ReleaseSemaphore',
        documentation: 'Increases the count of the specified semaphore object by a specified amount',
        insertText: '_WinAPI_ReleaseSemaphore(${})'
    },
    {
        label: '_WinAPI_ResetEvent',
        documentation: 'Sets the specified event object to the nonsignaled state ',
        insertText: '_WinAPI_ResetEvent(${})'
    },

]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIProc.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items