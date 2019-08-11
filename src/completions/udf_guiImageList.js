'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_GUIImageList_Add',
        documentation: 'Adds an image or images to an image list'
    },
    {
        label: '_GUIImageList_AddBitmap',
        documentation: 'Adds a bitmap to an image list'
    },
    {
        label: '_GUIImageList_AddIcon',
        documentation: 'Adds an icon to an image list'
    },
    {
        label: '_GUIImageList_AddMasked',
        documentation: 'Adds an image or images to an image list, generating a mask from the specified bitmap'
    },
    {
        label: '_GUIImageList_BeginDrag',
        documentation: 'Begins dragging an image'
    },
    {
        label: '_GUIImageList_Copy',
        documentation: 'Source image is copied to the destination image\'s index'
    },
    {
        label: '_GUIImageList_Create',
        documentation: 'Create an ImageList control'
    },
    {
        label: '_GUIImageList_Destroy',
        documentation: 'Destroys an image list'
    },
    {
        label: '_GUIImageList_DestroyIcon',
        documentation: 'Destroys an icon and frees any memory the icon occupied'
    },
    {
        label: '_GUIImageList_DragEnter',
        documentation: 'Displays the drag image at the specified position within the window'
    },
    {
        label: '_GUIImageList_DragLeave',
        documentation: 'Unlocks the specified window and hides the drag image, allowing the window to be updated'
    },
    {
        label: '_GUIImageList_DragMove',
        documentation: 'Moves the image that is being dragged during a drag-and-drop operation'
    },
    {
        label: '_GUIImageList_Draw',
        documentation: 'Draws an image list item in the specified device context'
    },
    {
        label: '_GUIImageList_DrawEx',
        documentation: 'Draws an image list item in the specified device context'
    },
    {
        label: '_GUIImageList_Duplicate',
        documentation: 'Creates a duplicate of an existing image list'
    },
    {
        label: '_GUIImageList_EndDrag',
        documentation: 'Ends a drag operation'
    },
    {
        label: '_GUIImageList_GetBkColor',
        documentation: 'Retrieves the current background color for an image list'
    },
    {
        label: '_GUIImageList_GetIcon',
        documentation: 'Creates an icon from an image and mask in an image list'
    },
    {
        label: '_GUIImageList_GetIconHeight',
        documentation: 'Retrieves the height of the images in an image list'
    },
    {
        label: '_GUIImageList_GetIconSize',
        documentation: 'Retrieves the dimensions of images in an image list'
    },
    {
        label: '_GUIImageList_GetIconSizeEx',
        documentation: 'Retrieves the dimensions of images in an image list'
    },
    {
        label: '_GUIImageList_GetIconWidth',
        documentation: 'Retrieves the width of the images in an image list'
    },
    {
        label: '_GUIImageList_GetImageCount',
        documentation: 'Retrieves the number of images in an image list'
    },
    {
        label: '_GUIImageList_GetImageInfoEx',
        documentation: 'Retrieves information about an image'
    },
    {
        label: '_GUIImageList_Remove',
        documentation: 'Remove Image(s) from the ImageList'
    },
    {
        label: '_GUIImageList_ReplaceIcon',
        documentation: 'Replaces an image with an icon or cursor'
    },
    {
        label: '_GUIImageList_SetBkColor',
        documentation: 'Sets the background color for an image list'
    },
    {
        label: '_GUIImageList_SetIconSize',
        documentation: 'Sets the dimensions of images in an image list and removes all images from the list'
    },
    {
        label: '_GUIImageList_SetImageCount',
        documentation: 'Resizes an existing image list'
    },
    {
        label: '_GUIImageList_Swap',
        documentation: 'Swap image between Source and Destination image\'s index '
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GuiImageList UDF - #include <GuiImageList.au3>'
}

module.exports = items