'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_WinAPI_BackupRead',
        documentation: 'Backs up a file or directory, including the security information'
    },
    {
        label: '_WinAPI_BackupReadAbort',
        documentation: 'Finishes the use of _WinAPI_BackupRead() on the handle'
    },
    {
        label: '_WinAPI_BackupSeek',
        documentation: 'Seeks forward in a data stream initially accessed by using the _WinAPI_BackupRead() or _WinAPI_BackupWrite() function'
    },
    {
        label: '_WinAPI_BackupWrite',
        documentation: 'Restore a file or directory that was backed up using _WinAPI_BackupRead()'
    },
    {
        label: '_WinAPI_BackupWriteAbort',
        documentation: 'Finishes the use of _WinAPI_BackupWrite() on the handle'
    },
    {
        label: '_WinAPI_DefineDosDevice',
        documentation: 'Defines, redefines, or deletes MS-DOS device names'
    },
    {
        label: '_WinAPI_GetDriveType',
        documentation: 'Determines whether a disk drive is a removable, fixed, CD-ROM, RAM disk, or network drive'
    },
    {
        label: '_WinAPI_GetLogicalDrives',
        documentation: 'Retrieves a bitmask representing the currently available disk drives'
    },
    {
        label: '_WinAPI_GetPEType',
        documentation: 'Retrieves a type of the machine for the specified portable executable (PE)'
    },
    {
        label: '_WinAPI_QueryDosDevice',
        documentation: 'Retrieves the current mapping for a particular MS-DOS device name'
    },
    {
        label: '_WinAPI_Wow64EnableWow64FsRedirection',
        documentation: 'Enables or disables file system redirection for the calling thread '
    },
    {
        label: '_WinAPI_CreateObjectID',
        documentation: 'Creates or retrieves the object identifier for the specified file or directory'
    },
    {
        label: '_WinAPI_DeleteObjectID',
        documentation: 'Removes the object identifier from a specified file or directory'
    },
    {
        label: '_WinAPI_DeviceIoControl',
        documentation: 'Sends a control code directly to a specified device driver'
    },
    {
        label: '_WinAPI_EjectMedia',
        documentation: 'Ejects media from a device'
    },
    {
        label: '_WinAPI_GetCDType',
        documentation: 'Retrieves a type of the media which is loaded into a specified CD-ROM device'
    },
    {
        label: '_WinAPI_GetDriveBusType',
        documentation: 'Retrieves a bus type for the specified drive'
    },
    {
        label: '_WinAPI_GetDriveGeometryEx',
        documentation: 'Retrieves extended information about the disk\'s geometry'
    },
    {
        label: '_WinAPI_GetDriveNumber',
        documentation: 'Retrieves a device type, device number, and partition number for the specified drive'
    },
    {
        label: '_WinAPI_GetObjectID',
        documentation: 'Retrieves the object identifier for the specified file or directory'
    },
    {
        label: '_WinAPI_IOCTL',
        documentation: 'Create a unique system I/O control code (IOCTL)'
    },
    {
        label: '_WinAPI_IsDoorOpen',
        documentation: 'Checks if a CD (DVD) tray is open'
    },
    {
        label: '_WinAPI_IsWritable',
        documentation: 'Determines whether a disk is writable'
    },
    {
        label: '_WinAPI_LoadMedia',
        documentation: 'Loads media into a device '
    },
    {
        label: '_WinAPI_CopyFileEx',
        documentation: 'Copies an existing file to a new file, notifying the application of its progress through a callback function'
    },
    {
        label: '_WinAPI_CreateDirectory',
        documentation: 'Creates a new directory'
    },
    {
        label: '_WinAPI_CreateDirectoryEx',
        documentation: 'Creates a new directory with the attributes of a specified template directory'
    },
    {
        label: '_WinAPI_CreateFileEx',
        documentation: 'Creates or opens a file or I/O device'
    },
    {
        label: '_WinAPI_CreateFileMapping',
        documentation: 'Creates or opens a named or unnamed file mapping object for a specified file'
    },
    {
        label: '_WinAPI_CreateHardLink',
        documentation: 'Establishes a hard link between an existing file and a new file'
    },
    {
        label: '_WinAPI_CreateSymbolicLink',
        documentation: 'Creates a symbolic link'
    },
    {
        label: '_WinAPI_DecryptFile',
        documentation: 'Decrypts an encrypted file or directory'
    },
    {
        label: '_WinAPI_DeleteFile',
        documentation: 'Deletes an existing file'
    },
    {
        label: '_WinAPI_DeleteVolumeMountPoint',
        documentation: 'Deletes a drive letter or mounted folder'
    },
    {
        label: '_WinAPI_DuplicateEncryptionInfoFile',
        documentation: 'Copies the EFS metadata from one file or directory to another'
    },
    {
        label: '_WinAPI_EncryptFile',
        documentation: 'Encrypts a file or directory'
    },
    {
        label: '_WinAPI_EncryptionDisable',
        documentation: 'Disables or enables encryption of the specified directory and the files in it'
    },
    {
        label: '_WinAPI_EnumFiles',
        documentation: 'Enumerates the files and subdirectories for the specified directory with a name that matches the template'
    },
    {
        label: '_WinAPI_EnumFileStreams',
        documentation: 'Enumerates all streams with a ::$DATA stream type in the specified file or directory'
    },
    {
        label: '_WinAPI_EnumHardLinks',
        documentation: 'Enumerates all the hard links to the specified file'
    },
    {
        label: '_WinAPI_FileEncryptionStatus',
        documentation: 'Retrieves the encryption status of the specified file'
    },
    {
        label: '_WinAPI_FileExists',
        documentation: 'Tests whether the specified path is existing file'
    },
    {
        label: '_WinAPI_FileInUse',
        documentation: 'Tests whether the specified file in use by another application'
    },
    {
        label: '_WinAPI_FindClose',
        documentation: 'Closes a file search handle'
    },
    {
        label: '_WinAPI_FindCloseChangeNotification',
        documentation: 'Stops change notification handle monitoring'
    },
    {
        label: '_WinAPI_FindFirstChangeNotification',
        documentation: 'Creates a change notification handle and sets up initial change notification filter conditions'
    },
    {
        label: '_WinAPI_FindFirstFile',
        documentation: 'Searches a directory for a file or subdirectory with a name that matches a specific name'
    },
    {
        label: '_WinAPI_FindFirstFileName',
        documentation: 'Creates an enumeration of all the hard links to the specified file'
    },
    {
        label: '_WinAPI_FindFirstStream',
        documentation: 'Enumerates the first stream with a ::$DATA stream type in the specified file or directory'
    },
    {
        label: '_WinAPI_FindNextChangeNotification',
        documentation: 'Requests that the operating system signal a change notification handle the next time it detects an appropriate change'
    },
    {
        label: '_WinAPI_FindNextFile',
        documentation: 'Continues a file or directory search'
    },
    {
        label: '_WinAPI_FindNextFileName',
        documentation: 'Continues enumerating the hard links'
    },
    {
        label: '_WinAPI_FindNextStream',
        documentation: 'Continues a stream search'
    },
    {
        label: '_WinAPI_FlushViewOfFile',
        documentation: 'Writes to the disk a byte range within a mapped view of a file'
    },
    {
        label: '_WinAPI_GetBinaryType',
        documentation: 'Determines whether a file is an executable (.exe) file, and if so, which subsystem runs the executable file'
    },
    {
        label: '_WinAPI_GetCompressedFileSize',
        documentation: 'Retrieves the actual number of bytes of disk storage used to store a specified file'
    },
    {
        label: '_WinAPI_GetCompression',
        documentation: 'Retrieves the current compression state of a file or directory'
    },
    {
        label: '_WinAPI_GetCurrentDirectory',
        documentation: 'Retrieves the current directory for the current process'
    },
    {
        label: '_WinAPI_GetDiskFreeSpaceEx',
        documentation: 'Retrieves information about the amount of space that is available on a disk volume'
    },
    {
        label: '_WinAPI_GetFileAttributes',
        documentation: 'Retrieves file system attributes for a specified file or directory'
    },
    {
        label: '_WinAPI_GetFileID',
        documentation: 'Retrieves the file system\'s 8-byte file reference number for a file'
    },
    {
        label: '_WinAPI_GetFileInformationByHandle',
        documentation: 'Retrieves file information for the specified file'
    },
    {
        label: '_WinAPI_GetFileInformationByHandleEx',
        documentation: 'Retrieves file information for the specified file'
    },
    {
        label: '_WinAPI_GetFilePointerEx',
        documentation: 'Retrieves the file pointer of the specified file'
    },
    {
        label: '_WinAPI_GetFileSizeOnDisk',
        documentation: 'Retrieves the file allocation size on disk'
    },
    {
        label: '_WinAPI_GetFileTitle',
        documentation: 'Retrieves the name of the specified file'
    },
    {
        label: '_WinAPI_GetFileType',
        documentation: 'Retrieves the file type of the specified file'
    },
    {
        label: '_WinAPI_GetFinalPathNameByHandle',
        documentation: 'Retrieves the final path of the specified file'
    },
    {
        label: '_WinAPI_GetFinalPathNameByHandleEx',
        documentation: 'Retrieves the final path of the specified file'
    },
    {
        label: '_WinAPI_GetFullPathName',
        documentation: 'Retrieves the full path and file name of the specified file'
    },
    {
        label: '_WinAPI_GetProfilesDirectory',
        documentation: 'Retrieves the path to the root directory where user profiles are stored'
    },
    {
        label: '_WinAPI_GetTempFileName',
        documentation: 'Creates a name for a temporary file'
    },
    {
        label: '_WinAPI_GetVolumeInformation',
        documentation: 'Retrieves information about the file system and volume associated with the specified root directory'
    },
    {
        label: '_WinAPI_GetVolumeInformationByHandle',
        documentation: 'Retrieves information about the file system and volume associated with the specified file'
    },
    {
        label: '_WinAPI_GetVolumeNameForVolumeMountPoint',
        documentation: 'Retrieves a volume GUID path for the volume that is associated with the specified volume mount point'
    },
    {
        label: '_WinAPI_IsPathShared',
        documentation: 'Determines whether the path is shared'
    },
    {
        label: '_WinAPI_LockDevice',
        documentation: 'Enables or disables the mechanism that ejects media, for those devices possessing that locking capability'
    },
    {
        label: '_WinAPI_LockFile',
        documentation: 'Locks the specified file for exclusive access by the calling process'
    },
    {
        label: '_WinAPI_MapViewOfFile',
        documentation: 'Maps a view of a file mapping into the address space of a calling process'
    },
    {
        label: '_WinAPI_MoveFileEx',
        documentation: 'Moves a file or directory, notifying the application of its progress through a callback function'
    },
    {
        label: '_WinAPI_OpenFileById',
        documentation: 'Opens the file that matches the specified object identifier'
    },
    {
        label: '_WinAPI_OpenFileMapping',
        documentation: 'Opens a named file mapping object'
    },
    {
        label: '_WinAPI_PathIsDirectory',
        documentation: 'Verifies that a path is a valid directory'
    },
    {
        label: '_WinAPI_PathIsDirectoryEmpty',
        documentation: 'Determines whether a specified path is an empty directory'
    },
    {
        label: '_WinAPI_ReadDirectoryChanges',
        documentation: 'Retrieves information that describes the changes within the specified directory'
    },
    {
        label: '_WinAPI_RemoveDirectory',
        documentation: 'Deletes an existing empty directory'
    },
    {
        label: '_WinAPI_ReOpenFile',
        documentation: 'Reopens the specified file system object with different access rights, sharing mode, and flags'
    },
    {
        label: '_WinAPI_ReplaceFile',
        documentation: 'Replaces one file with another file, and creates a backup copy of the original file'
    },
    {
        label: '_WinAPI_SearchPath',
        documentation: 'Searches for a specified file in a specified path'
    },
    {
        label: '_WinAPI_SetCompression',
        documentation: 'Sets the compression state of a file or directory'
    },
    {
        label: '_WinAPI_SetCurrentDirectory',
        documentation: 'Changes the current directory for the current process'
    },
    {
        label: '_WinAPI_SetFileAttributes',
        documentation: 'Sets the attributes for a file or directory'
    },
    {
        label: '_WinAPI_SetFileInformationByHandleEx',
        documentation: 'Sets the file information for the specified file'
    },
    {
        label: '_WinAPI_SetFilePointerEx',
        documentation: 'Moves the file pointer of the specified file'
    },
    {
        label: '_WinAPI_SetFileShortName',
        documentation: 'Sets the short name for the specified file'
    },
    {
        label: '_WinAPI_SetFileValidData',
        documentation: 'Sets the valid data length of the specified file'
    },
    {
        label: '_WinAPI_SetSearchPathMode',
        documentation: 'Sets the per-process mode that the _WinAPI_SearchPath() function uses when locating files'
    },
    {
        label: '_WinAPI_SetVolumeMountPoint',
        documentation: 'Associates a volume with a drive letter or a directory on another volume'
    },
    {
        label: '_WinAPI_SfcIsFileProtected',
        documentation: 'Determines whether the specified file is protected'
    },
    {
        label: '_WinAPI_UnlockFile',
        documentation: 'Unlocks a region in an open file'
    },
    {
        label: '_WinAPI_UnmapViewOfFile',
        documentation: 'Unmaps a mapped view of a file from the calling process\'s address space'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIFiles.au3>'
}

module.exports = items