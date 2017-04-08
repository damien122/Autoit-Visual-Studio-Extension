'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_BackupRead',
        documentation: 'Backs up a file or directory, including the security information',
        insertText: '_WinAPI_BackupRead(${})'
    },
    {
        label: '_WinAPI_BackupReadAbort',
        documentation: 'Finishes the use of _WinAPI_BackupRead() on the handle',
        insertText: '_WinAPI_BackupReadAbort(${})'
    },
    {
        label: '_WinAPI_BackupSeek',
        documentation: 'Seeks forward in a data stream initially accessed by using the _WinAPI_BackupRead() or _WinAPI_BackupWrite() function',
        insertText: '_WinAPI_BackupSeek(${})'
    },
    {
        label: '_WinAPI_BackupWrite',
        documentation: 'Restore a file or directory that was backed up using _WinAPI_BackupRead()',
        insertText: '_WinAPI_BackupWrite(${})'
    },
    {
        label: '_WinAPI_BackupWriteAbort',
        documentation: 'Finishes the use of _WinAPI_BackupWrite() on the handle',
        insertText: '_WinAPI_BackupWriteAbort(${})'
    },
    {
        label: '_WinAPI_DefineDosDevice',
        documentation: 'Defines, redefines, or deletes MS-DOS device names',
        insertText: '_WinAPI_DefineDosDevice(${})'
    },
    {
        label: '_WinAPI_GetDriveType',
        documentation: 'Determines whether a disk drive is a removable, fixed, CD-ROM, RAM disk, or network drive',
        insertText: '_WinAPI_GetDriveType(${})'
    },
    {
        label: '_WinAPI_GetLogicalDrives',
        documentation: 'Retrieves a bitmask representing the currently available disk drives',
        insertText: '_WinAPI_GetLogicalDrives(${})'
    },
    {
        label: '_WinAPI_GetPEType',
        documentation: 'Retrieves a type of the machine for the specified portable executable (PE)',
        insertText: '_WinAPI_GetPEType(${})'
    },
    {
        label: '_WinAPI_QueryDosDevice',
        documentation: 'Retrieves the current mapping for a particular MS-DOS device name',
        insertText: '_WinAPI_QueryDosDevice(${})'
    },
    {
        label: '_WinAPI_Wow64EnableWow64FsRedirection',
        documentation: 'Enables or disables file system redirection for the calling thread ',
        insertText: '_WinAPI_Wow64EnableWow64FsRedirection(${})'
    },
    {
        label: '_WinAPI_CreateObjectID',
        documentation: 'Creates or retrieves the object identifier for the specified file or directory',
        insertText: '_WinAPI_CreateObjectID(${})'
    },
    {
        label: '_WinAPI_DeleteObjectID',
        documentation: 'Removes the object identifier from a specified file or directory',
        insertText: '_WinAPI_DeleteObjectID(${})'
    },
    {
        label: '_WinAPI_DeviceIoControl',
        documentation: 'Sends a control code directly to a specified device driver',
        insertText: '_WinAPI_DeviceIoControl(${})'
    },
    {
        label: '_WinAPI_EjectMedia',
        documentation: 'Ejects media from a device',
        insertText: '_WinAPI_EjectMedia(${})'
    },
    {
        label: '_WinAPI_GetCDType',
        documentation: 'Retrieves a type of the media which is loaded into a specified CD-ROM device',
        insertText: '_WinAPI_GetCDType(${})'
    },
    {
        label: '_WinAPI_GetDriveBusType',
        documentation: 'Retrieves a bus type for the specified drive',
        insertText: '_WinAPI_GetDriveBusType(${})'
    },
    {
        label: '_WinAPI_GetDriveGeometryEx',
        documentation: 'Retrieves extended information about the disk\'s geometry',
        insertText: '_WinAPI_GetDriveGeometryEx(${})'
    },
    {
        label: '_WinAPI_GetDriveNumber',
        documentation: 'Retrieves a device type, device number, and partition number for the specified drive',
        insertText: '_WinAPI_GetDriveNumber(${})'
    },
    {
        label: '_WinAPI_GetObjectID',
        documentation: 'Retrieves the object identifier for the specified file or directory',
        insertText: '_WinAPI_GetObjectID(${})'
    },
    {
        label: '_WinAPI_IOCTL',
        documentation: 'Create a unique system I/O control code (IOCTL)',
        insertText: '_WinAPI_IOCTL(${})'
    },
    {
        label: '_WinAPI_IsDoorOpen',
        documentation: 'Checks if a CD (DVD) tray is open',
        insertText: '_WinAPI_IsDoorOpen(${})'
    },
    {
        label: '_WinAPI_IsWritable',
        documentation: 'Determines whether a disk is writable',
        insertText: '_WinAPI_IsWritable(${})'
    },
    {
        label: '_WinAPI_LoadMedia',
        documentation: 'Loads media into a device ',
        insertText: '_WinAPI_LoadMedia(${})'
    },
    {
        label: '_WinAPI_CopyFileEx',
        documentation: 'Copies an existing file to a new file, notifying the application of its progress through a callback function',
        insertText: '_WinAPI_CopyFileEx(${})'
    },
    {
        label: '_WinAPI_CreateDirectory',
        documentation: 'Creates a new directory',
        insertText: '_WinAPI_CreateDirectory(${})'
    },
    {
        label: '_WinAPI_CreateDirectoryEx',
        documentation: 'Creates a new directory with the attributes of a specified template directory',
        insertText: '_WinAPI_CreateDirectoryEx(${})'
    },
    {
        label: '_WinAPI_CreateFileEx',
        documentation: 'Creates or opens a file or I/O device',
        insertText: '_WinAPI_CreateFileEx(${})'
    },
    {
        label: '_WinAPI_CreateFileMapping',
        documentation: 'Creates or opens a named or unnamed file mapping object for a specified file',
        insertText: '_WinAPI_CreateFileMapping(${})'
    },
    {
        label: '_WinAPI_CreateHardLink',
        documentation: 'Establishes a hard link between an existing file and a new file',
        insertText: '_WinAPI_CreateHardLink(${})'
    },
    {
        label: '_WinAPI_CreateSymbolicLink',
        documentation: 'Creates a symbolic link',
        insertText: '_WinAPI_CreateSymbolicLink(${})'
    },
    {
        label: '_WinAPI_DecryptFile',
        documentation: 'Decrypts an encrypted file or directory',
        insertText: '_WinAPI_DecryptFile(${})'
    },
    {
        label: '_WinAPI_DeleteFile',
        documentation: 'Deletes an existing file',
        insertText: '_WinAPI_DeleteFile(${})'
    },
    {
        label: '_WinAPI_DeleteVolumeMountPoint',
        documentation: 'Deletes a drive letter or mounted folder',
        insertText: '_WinAPI_DeleteVolumeMountPoint(${})'
    },
    {
        label: '_WinAPI_DuplicateEncryptionInfoFile',
        documentation: 'Copies the EFS metadata from one file or directory to another',
        insertText: '_WinAPI_DuplicateEncryptionInfoFile(${})'
    },
    {
        label: '_WinAPI_EncryptFile',
        documentation: 'Encrypts a file or directory',
        insertText: '_WinAPI_EncryptFile(${})'
    },
    {
        label: '_WinAPI_EncryptionDisable',
        documentation: 'Disables or enables encryption of the specified directory and the files in it',
        insertText: '_WinAPI_EncryptionDisable(${})'
    },
    {
        label: '_WinAPI_EnumFiles',
        documentation: 'Enumerates the files and subdirectories for the specified directory with a name that matches the template',
        insertText: '_WinAPI_EnumFiles(${})'
    },
    {
        label: '_WinAPI_EnumFileStreams',
        documentation: 'Enumerates all streams with a ::$DATA stream type in the specified file or directory',
        insertText: '_WinAPI_EnumFileStreams(${})'
    },
    {
        label: '_WinAPI_EnumHardLinks',
        documentation: 'Enumerates all the hard links to the specified file',
        insertText: '_WinAPI_EnumHardLinks(${})'
    },
    {
        label: '_WinAPI_FileEncryptionStatus',
        documentation: 'Retrieves the encryption status of the specified file',
        insertText: '_WinAPI_FileEncryptionStatus(${})'
    },
    {
        label: '_WinAPI_FileExists',
        documentation: 'Tests whether the specified path is existing file',
        insertText: '_WinAPI_FileExists(${})'
    },
    {
        label: '_WinAPI_FileInUse',
        documentation: 'Tests whether the specified file in use by another application',
        insertText: '_WinAPI_FileInUse(${})'
    },
    {
        label: '_WinAPI_FindClose',
        documentation: 'Closes a file search handle',
        insertText: '_WinAPI_FindClose(${})'
    },
    {
        label: '_WinAPI_FindCloseChangeNotification',
        documentation: 'Stops change notification handle monitoring',
        insertText: '_WinAPI_FindCloseChangeNotification(${})'
    },
    {
        label: '_WinAPI_FindFirstChangeNotification',
        documentation: 'Creates a change notification handle and sets up initial change notification filter conditions',
        insertText: '_WinAPI_FindFirstChangeNotification(${})'
    },
    {
        label: '_WinAPI_FindFirstFile',
        documentation: 'Searches a directory for a file or subdirectory with a name that matches a specific name',
        insertText: '_WinAPI_FindFirstFile(${})'
    },
    {
        label: '_WinAPI_FindFirstFileName',
        documentation: 'Creates an enumeration of all the hard links to the specified file',
        insertText: '_WinAPI_FindFirstFileName(${})'
    },
    {
        label: '_WinAPI_FindFirstStream',
        documentation: 'Enumerates the first stream with a ::$DATA stream type in the specified file or directory',
        insertText: '_WinAPI_FindFirstStream(${})'
    },
    {
        label: '_WinAPI_FindNextChangeNotification',
        documentation: 'Requests that the operating system signal a change notification handle the next time it detects an appropriate change',
        insertText: '_WinAPI_FindNextChangeNotification(${})'
    },
    {
        label: '_WinAPI_FindNextFile',
        documentation: 'Continues a file or directory search',
        insertText: '_WinAPI_FindNextFile(${})'
    },
    {
        label: '_WinAPI_FindNextFileName',
        documentation: 'Continues enumerating the hard links',
        insertText: '_WinAPI_FindNextFileName(${})'
    },
    {
        label: '_WinAPI_FindNextStream',
        documentation: 'Continues a stream search',
        insertText: '_WinAPI_FindNextStream(${})'
    },
    {
        label: '_WinAPI_FlushViewOfFile',
        documentation: 'Writes to the disk a byte range within a mapped view of a file',
        insertText: '_WinAPI_FlushViewOfFile(${})'
    },
    {
        label: '_WinAPI_GetBinaryType',
        documentation: 'Determines whether a file is an executable (.exe) file, and if so, which subsystem runs the executable file',
        insertText: '_WinAPI_GetBinaryType(${})'
    },
    {
        label: '_WinAPI_GetCompressedFileSize',
        documentation: 'Retrieves the actual number of bytes of disk storage used to store a specified file',
        insertText: '_WinAPI_GetCompressedFileSize(${})'
    },
    {
        label: '_WinAPI_GetCompression',
        documentation: 'Retrieves the current compression state of a file or directory',
        insertText: '_WinAPI_GetCompression(${})'
    },
    {
        label: '_WinAPI_GetCurrentDirectory',
        documentation: 'Retrieves the current directory for the current process',
        insertText: '_WinAPI_GetCurrentDirectory(${})'
    },
    {
        label: '_WinAPI_GetDiskFreeSpaceEx',
        documentation: 'Retrieves information about the amount of space that is available on a disk volume',
        insertText: '_WinAPI_GetDiskFreeSpaceEx(${})'
    },
    {
        label: '_WinAPI_GetFileAttributes',
        documentation: 'Retrieves file system attributes for a specified file or directory',
        insertText: '_WinAPI_GetFileAttributes(${})'
    },
    {
        label: '_WinAPI_GetFileID',
        documentation: 'Retrieves the file system\'s 8-byte file reference number for a file',
        insertText: '_WinAPI_GetFileID(${})'
    },
    {
        label: '_WinAPI_GetFileInformationByHandle',
        documentation: 'Retrieves file information for the specified file',
        insertText: '_WinAPI_GetFileInformationByHandle(${})'
    },
    {
        label: '_WinAPI_GetFileInformationByHandleEx',
        documentation: 'Retrieves file information for the specified file',
        insertText: '_WinAPI_GetFileInformationByHandleEx(${})'
    },
    {
        label: '_WinAPI_GetFilePointerEx',
        documentation: 'Retrieves the file pointer of the specified file',
        insertText: '_WinAPI_GetFilePointerEx(${})'
    },
    {
        label: '_WinAPI_GetFileSizeOnDisk',
        documentation: 'Retrieves the file allocation size on disk',
        insertText: '_WinAPI_GetFileSizeOnDisk(${})'
    },
    {
        label: '_WinAPI_GetFileTitle',
        documentation: 'Retrieves the name of the specified file',
        insertText: '_WinAPI_GetFileTitle(${})'
    },
    {
        label: '_WinAPI_GetFileType',
        documentation: 'Retrieves the file type of the specified file',
        insertText: '_WinAPI_GetFileType(${})'
    },
    {
        label: '_WinAPI_GetFinalPathNameByHandle',
        documentation: 'Retrieves the final path of the specified file',
        insertText: '_WinAPI_GetFinalPathNameByHandle(${})'
    },
    {
        label: '_WinAPI_GetFinalPathNameByHandleEx',
        documentation: 'Retrieves the final path of the specified file',
        insertText: '_WinAPI_GetFinalPathNameByHandleEx(${})'
    },
    {
        label: '_WinAPI_GetFullPathName',
        documentation: 'Retrieves the full path and file name of the specified file',
        insertText: '_WinAPI_GetFullPathName(${})'
    },
    {
        label: '_WinAPI_GetProfilesDirectory',
        documentation: 'Retrieves the path to the root directory where user profiles are stored',
        insertText: '_WinAPI_GetProfilesDirectory(${})'
    },
    {
        label: '_WinAPI_GetTempFileName',
        documentation: 'Creates a name for a temporary file',
        insertText: '_WinAPI_GetTempFileName(${})'
    },
    {
        label: '_WinAPI_GetVolumeInformation',
        documentation: 'Retrieves information about the file system and volume associated with the specified root directory',
        insertText: '_WinAPI_GetVolumeInformation(${})'
    },
    {
        label: '_WinAPI_GetVolumeInformationByHandle',
        documentation: 'Retrieves information about the file system and volume associated with the specified file',
        insertText: '_WinAPI_GetVolumeInformationByHandle(${})'
    },
    {
        label: '_WinAPI_GetVolumeNameForVolumeMountPoint',
        documentation: 'Retrieves a volume GUID path for the volume that is associated with the specified volume mount point',
        insertText: '_WinAPI_GetVolumeNameForVolumeMountPoint(${})'
    },
    {
        label: '_WinAPI_IsPathShared',
        documentation: 'Determines whether the path is shared',
        insertText: '_WinAPI_IsPathShared(${})'
    },
    {
        label: '_WinAPI_LockDevice',
        documentation: 'Enables or disables the mechanism that ejects media, for those devices possessing that locking capability',
        insertText: '_WinAPI_LockDevice(${})'
    },
    {
        label: '_WinAPI_LockFile',
        documentation: 'Locks the specified file for exclusive access by the calling process',
        insertText: '_WinAPI_LockFile(${})'
    },
    {
        label: '_WinAPI_MapViewOfFile',
        documentation: 'Maps a view of a file mapping into the address space of a calling process',
        insertText: '_WinAPI_MapViewOfFile(${})'
    },
    {
        label: '_WinAPI_MoveFileEx',
        documentation: 'Moves a file or directory, notifying the application of its progress through a callback function',
        insertText: '_WinAPI_MoveFileEx(${})'
    },
    {
        label: '_WinAPI_OpenFileById',
        documentation: 'Opens the file that matches the specified object identifier',
        insertText: '_WinAPI_OpenFileById(${})'
    },
    {
        label: '_WinAPI_OpenFileMapping',
        documentation: 'Opens a named file mapping object',
        insertText: '_WinAPI_OpenFileMapping(${})'
    },
    {
        label: '_WinAPI_PathIsDirectory',
        documentation: 'Verifies that a path is a valid directory',
        insertText: '_WinAPI_PathIsDirectory(${})'
    },
    {
        label: '_WinAPI_PathIsDirectoryEmpty',
        documentation: 'Determines whether a specified path is an empty directory',
        insertText: '_WinAPI_PathIsDirectoryEmpty(${})'
    },
    {
        label: '_WinAPI_ReadDirectoryChanges',
        documentation: 'Retrieves information that describes the changes within the specified directory',
        insertText: '_WinAPI_ReadDirectoryChanges(${})'
    },
    {
        label: '_WinAPI_RemoveDirectory',
        documentation: 'Deletes an existing empty directory',
        insertText: '_WinAPI_RemoveDirectory(${})'
    },
    {
        label: '_WinAPI_ReOpenFile',
        documentation: 'Reopens the specified file system object with different access rights, sharing mode, and flags',
        insertText: '_WinAPI_ReOpenFile(${})'
    },
    {
        label: '_WinAPI_ReplaceFile',
        documentation: 'Replaces one file with another file, and creates a backup copy of the original file',
        insertText: '_WinAPI_ReplaceFile(${})'
    },
    {
        label: '_WinAPI_SearchPath',
        documentation: 'Searches for a specified file in a specified path',
        insertText: '_WinAPI_SearchPath(${})'
    },
    {
        label: '_WinAPI_SetCompression',
        documentation: 'Sets the compression state of a file or directory',
        insertText: '_WinAPI_SetCompression(${})'
    },
    {
        label: '_WinAPI_SetCurrentDirectory',
        documentation: 'Changes the current directory for the current process',
        insertText: '_WinAPI_SetCurrentDirectory(${})'
    },
    {
        label: '_WinAPI_SetFileAttributes',
        documentation: 'Sets the attributes for a file or directory',
        insertText: '_WinAPI_SetFileAttributes(${})'
    },
    {
        label: '_WinAPI_SetFileInformationByHandleEx',
        documentation: 'Sets the file information for the specified file',
        insertText: '_WinAPI_SetFileInformationByHandleEx(${})'
    },
    {
        label: '_WinAPI_SetFilePointerEx',
        documentation: 'Moves the file pointer of the specified file',
        insertText: '_WinAPI_SetFilePointerEx(${})'
    },
    {
        label: '_WinAPI_SetFileShortName',
        documentation: 'Sets the short name for the specified file',
        insertText: '_WinAPI_SetFileShortName(${})'
    },
    {
        label: '_WinAPI_SetFileValidData',
        documentation: 'Sets the valid data length of the specified file',
        insertText: '_WinAPI_SetFileValidData(${})'
    },
    {
        label: '_WinAPI_SetSearchPathMode',
        documentation: 'Sets the per-process mode that the _WinAPI_SearchPath() function uses when locating files',
        insertText: '_WinAPI_SetSearchPathMode(${})'
    },
    {
        label: '_WinAPI_SetVolumeMountPoint',
        documentation: 'Associates a volume with a drive letter or a directory on another volume',
        insertText: '_WinAPI_SetVolumeMountPoint(${})'
    },
    {
        label: '_WinAPI_SfcIsFileProtected',
        documentation: 'Determines whether the specified file is protected',
        insertText: '_WinAPI_SfcIsFileProtected(${})'
    },
    {
        label: '_WinAPI_UnlockFile',
        documentation: 'Unlocks a region in an open file',
        insertText: '_WinAPI_UnlockFile(${})'
    },
    {
        label: '_WinAPI_UnmapViewOfFile',
        documentation: 'Unmaps a mapped view of a file from the calling process\'s address space',
        insertText: '_WinAPI_UnmapViewOfFile(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIFiles.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items