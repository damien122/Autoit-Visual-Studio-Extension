'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_GUIImageList_Add',
        documentation: 'Adds an image or images to an image list',
        insertText: '_GUIImageList_Add(${})'
    },
    {
        label: '_GUIImageList_AddBitmap',
        documentation: 'Adds a bitmap to an image list',
        insertText: '_GUIImageList_AddBitmap(${})'
    },
    {
        label: '_GUIImageList_AddIcon',
        documentation: 'Adds an icon to an image list',
        insertText: '_GUIImageList_AddIcon(${})'
    },
    {
        label: '_GUIImageList_AddMasked',
        documentation: 'Adds an image or images to an image list, generating a mask from the specified bitmap',
        insertText: '_GUIImageList_AddMasked(${})'
    },
    {
        label: '_GUIImageList_BeginDrag',
        documentation: 'Begins dragging an image',
        insertText: '_GUIImageList_BeginDrag(${})'
    },
    {
        label: '_GUIImageList_Copy',
        documentation: 'Source image is copied to the destination image\'s index',
        insertText: '_GUIImageList_Copy(${})'
    },
    {
        label: '_GUIImageList_Create',
        documentation: 'Create an ImageList control',
        insertText: '_GUIImageList_Create(${})'
    },
    {
        label: '_GUIImageList_Destroy',
        documentation: 'Destroys an image list',
        insertText: '_GUIImageList_Destroy(${})'
    },
    {
        label: '_GUIImageList_DestroyIcon',
        documentation: 'Destroys an icon and frees any memory the icon occupied',
        insertText: '_GUIImageList_DestroyIcon(${})'
    },
    {
        label: '_GUIImageList_DragEnter',
        documentation: 'Displays the drag image at the specified position within the window',
        insertText: '_GUIImageList_DragEnter(${})'
    },
    {
        label: '_GUIImageList_DragLeave',
        documentation: 'Unlocks the specified window and hides the drag image, allowing the window to be updated',
        insertText: '_GUIImageList_DragLeave(${})'
    },
    {
        label: '_GUIImageList_DragMove',
        documentation: 'Moves the image that is being dragged during a drag-and-drop operation',
        insertText: '_GUIImageList_DragMove(${})'
    },
    {
        label: '_GUIImageList_Draw',
        documentation: 'Draws an image list item in the specified device context',
        insertText: '_GUIImageList_Draw(${})'
    },
    {
        label: '_GUIImageList_DrawEx',
        documentation: 'Draws an image list item in the specified device context',
        insertText: '_GUIImageList_DrawEx(${})'
    },
    {
        label: '_GUIImageList_Duplicate',
        documentation: 'Creates a duplicate of an existing image list',
        insertText: '_GUIImageList_Duplicate(${})'
    },
    {
        label: '_GUIImageList_EndDrag',
        documentation: 'Ends a drag operation',
        insertText: '_GUIImageList_EndDrag(${})'
    },
    {
        label: '_GUIImageList_GetBkColor',
        documentation: 'Retrieves the current background color for an image list',
        insertText: '_GUIImageList_GetBkColor(${})'
    },
    {
        label: '_GUIImageList_GetIcon',
        documentation: 'Creates an icon from an image and mask in an image list',
        insertText: '_GUIImageList_GetIcon(${})'
    },
    {
        label: '_GUIImageList_GetIconHeight',
        documentation: 'Retrieves the height of the images in an image list',
        insertText: '_GUIImageList_GetIconHeight(${})'
    },
    {
        label: '_GUIImageList_GetIconSize',
        documentation: 'Retrieves the dimensions of images in an image list',
        insertText: '_GUIImageList_GetIconSize(${})'
    },
    {
        label: '_GUIImageList_GetIconSizeEx',
        documentation: 'Retrieves the dimensions of images in an image list',
        insertText: '_GUIImageList_GetIconSizeEx(${})'
    },
    {
        label: '_GUIImageList_GetIconWidth',
        documentation: 'Retrieves the width of the images in an image list',
        insertText: '_GUIImageList_GetIconWidth(${})'
    },
    {
        label: '_GUIImageList_GetImageCount',
        documentation: 'Retrieves the number of images in an image list',
        insertText: '_GUIImageList_GetImageCount(${})'
    },
    {
        label: '_GUIImageList_GetImageInfoEx',
        documentation: 'Retrieves information about an image',
        insertText: '_GUIImageList_GetImageInfoEx(${})'
    },
    {
        label: '_GUIImageList_Remove',
        documentation: 'Remove Image(s) from the ImageList',
        insertText: '_GUIImageList_Remove(${})'
    },
    {
        label: '_GUIImageList_ReplaceIcon',
        documentation: 'Replaces an image with an icon or cursor',
        insertText: '_GUIImageList_ReplaceIcon(${})'
    },
    {
        label: '_GUIImageList_SetBkColor',
        documentation: 'Sets the background color for an image list',
        insertText: '_GUIImageList_SetBkColor(${})'
    },
    {
        label: '_GUIImageList_SetIconSize',
        documentation: 'Sets the dimensions of images in an image list and removes all images from the list',
        insertText: '_GUIImageList_SetIconSize(${})'
    },
    {
        label: '_GUIImageList_SetImageCount',
        documentation: 'Resizes an existing image list',
        insertText: '_GUIImageList_SetImageCount(${})'
    },
    {
        label: '_GUIImageList_Swap',
        documentation: 'Swap image between Source and Destination image\'s index ',
        insertText: '_GUIImageList_Swap(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiImageList UDF - #include <GuiImageList.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items