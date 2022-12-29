import { CompletionItemKind } from 'vscode';
import { fillCompletions } from '../util';

const items = [
  {
    label: '_WinAPI_CLSIDFromProgID',
    documentation: 'Looks up a CLSID in the registry, given a ProgID',
  },
  {
    label: '_WinAPI_CoInitialize',
    documentation: 'Initializes the COM library for use by the calling process',
  },
  {
    label: '_WinAPI_CoTaskMemAlloc',
    documentation: 'Allocates a block of task memory',
  },
  {
    label: '_WinAPI_CoTaskMemFree',
    documentation: 'Frees a block of task memory',
  },
  {
    label: '_WinAPI_CoTaskMemRealloc',
    documentation: 'Changes the size of a previously allocated block of task memory',
  },
  {
    label: '_WinAPI_CoUninitialize',
    documentation: 'Closes the COM library on the current process',
  },
  {
    label: '_WinAPI_CreateGUID',
    documentation: 'Creates a globally unique identifier (GUID)',
  },
  {
    label: '_WinAPI_CreateStreamOnHGlobal',
    documentation: 'Creates a stream object that uses a memory handle to store the stream contents',
  },
  {
    label: '_WinAPI_GetHGlobalFromStream',
    documentation: 'Retrieves the global memory handle to a stream',
  },
  {
    label: '_WinAPI_ProgIDFromCLSID',
    documentation: 'Retrieves the ProgID for a given CLSID',
  },
  {
    label: '_WinAPI_ReleaseStream',
    documentation: 'Releases a stream object ',
  },
];

export default fillCompletions(
  items,
  CompletionItemKind.Function,
  'WinAPICom UDF',
  'WinAPICom.au3',
);
