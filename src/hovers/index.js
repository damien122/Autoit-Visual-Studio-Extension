import ai_functions from './ai_functions';
import keywords from './keywords';
import macros from './macros';
import udf_array from './udf_array';
import udf_clipboard from './udf_clipboard';
import udf_color from './udf_color';
import udf_crypt from './udf_crypt';
import udf_date from './udf_date';
import udf_debug from './udf_debug';
import udf_eventlog from './udf_eventlog';
import udf_excel from './udf_excel';
import udf_file from './udf_file';
import udf_ftpex from './udf_ftpex';
import udf_gdiplus from './udf_gdiplus';
import udf_guiavi from './udf_guiavi';
import udf_guibutton from './udf_guibutton';
import udf_guicombobox from './udf_guicombobox';
import udf_guicomboboxex from './udf_guicomboboxex';
import udf_guiDateTimePicker from './udf_guiDateTimePicker';
import udf_guiEdit from './udf_guiEdit';
import udf_guiHeader from './udf_guiHeader';
import udf_guiImageList from './udf_guiImageList';
import udf_guiIPAdress from './udf_guiIPAdress';
import udf_guiListBox from './udf_guiListBox';
import udf_guiListView from './udf_guiListView';
import udf_guiMenu from './udf_guiMenu';
import udf_guiMonthCal from './udf_guiMonthCal';
import udf_guiReBar from './udf_guiReBar';
import udf_guiRichEdit from './udf_guiRichEdit';
import udf_guiScrollBars from './udf_guiScrollBars';
import udf_guiSlider from './udf_guiSlider';
import udf_guiStatusBar from './udf_guiStatusBar';
import udf_guiTab from './udf_guiTab';
import udf_guiToolbar from './udf_guiToolbar';
import udf_guiToolTip from './udf_guiToolTip';
import udf_guiTreeView from './udf_guiTreeView';
import udf_ie from './udf_ie';
import udf_inet from './udf_inet';
import udf_math from './udf_math';
import udf_memory from './udf_memory';
import udf_misc from './udf_misc';
import udf_namedpipes from './udf_namedpipes';
import udf_netshare from './udf_netshare';
import udf_process from './udf_process';
import udf_screencapture from './udf_screencapture';
import udf_security from './udf_security';
import udf_sendmessage from './udf_sendmessage';
import udf_sound from './udf_sound';
import udf_sqlite from './udf_sqlite';
import udf_string from './udf_string';
import udf_timers from './udf_timers';
import udf_visa from './udf_visa';
import udf_winAPI from './udf_winAPI';
import udf_winAPIExCOM from './udf_winAPIExCOM';
import udf_winAPIExDiag from './udf_winAPIExDiag';
import udf_winAPIExDlg from './udf_winAPIExDlg';
import udf_winAPIExFiles from './udf_winAPIExFiles';
import udf_winAPIExGdi from './udf_winAPIExGdi';
import udf_winAPIExLocale from './udf_winAPIExLocale';
import udf_winAPIExMisc from './udf_winAPIExMisc';
import udf_winAPIExProc from './udf_winAPIExProc';
import udf_winAPIExReg from './udf_winAPIExReg';
import udf_winAPIExRes from './udf_winAPIExRes';
import udf_winAPIExShellEx from './udf_winAPIExShellEx';
import udf_winAPIExShPath from './udf_winAPIExShPath';
import udf_winAPIExSys from './udf_winAPIExSys';
import udf_winAPIExTheme from './udf_winAPIExTheme';
import { hovers as udfWinAPITheme } from '../signatures/WinAPIEx/WinAPITheme';
import { hovers as udfWinNet } from '../signatures/udf_winnet';
import { hovers as udfWord } from '../signatures/udf_word';

const hovers = {
  ...ai_functions,
  ...keywords,
  ...macros,
  ...udf_array,
  ...udf_clipboard,
  ...udf_color,
  ...udf_crypt,
  ...udf_date,
  ...udf_debug,
  ...udf_eventlog,
  ...udf_excel,
  ...udf_file,
  ...udf_ftpex,
  ...udf_gdiplus,
  ...udf_guiavi,
  ...udf_guibutton,
  ...udf_guicombobox,
  ...udf_guicomboboxex,
  ...udf_guiDateTimePicker,
  ...udf_guiEdit,
  ...udf_guiHeader,
  ...udf_guiImageList,
  ...udf_guiIPAdress,
  ...udf_guiListBox,
  ...udf_guiListView,
  ...udf_guiMenu,
  ...udf_guiMonthCal,
  ...udf_guiReBar,
  ...udf_guiRichEdit,
  ...udf_guiScrollBars,
  ...udf_guiSlider,
  ...udf_guiStatusBar,
  ...udf_guiTab,
  ...udf_guiToolbar,
  ...udf_guiToolTip,
  ...udf_guiTreeView,
  ...udf_ie,
  ...udf_inet,
  ...udf_math,
  ...udf_memory,
  ...udf_misc,
  ...udf_namedpipes,
  ...udf_netshare,
  ...udf_process,
  ...udf_screencapture,
  ...udf_security,
  ...udf_sendmessage,
  ...udf_sound,
  ...udf_sqlite,
  ...udf_string,
  ...udf_timers,
  ...udf_visa,
  ...udf_winAPI,
  ...udf_winAPIExCOM,
  ...udf_winAPIExDiag,
  ...udf_winAPIExDlg,
  ...udf_winAPIExFiles,
  ...udf_winAPIExGdi,
  ...udf_winAPIExLocale,
  ...udf_winAPIExMisc,
  ...udf_winAPIExProc,
  ...udf_winAPIExReg,
  ...udf_winAPIExRes,
  ...udf_winAPIExShellEx,
  ...udf_winAPIExShPath,
  ...udf_winAPIExSys,
  ...udf_winAPIExTheme,
  ...udfWinAPITheme,
  ...udfWinNet,
  ...udfWord,
};

export default hovers;
