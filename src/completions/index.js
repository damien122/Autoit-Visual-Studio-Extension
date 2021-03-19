import AVI from './constants_avi';
import ButtonConstants from './constants_buttonconstants';
import ComboConstants from './constants_combo';
import DateTimeConstants from './constants_datetime';
import DirConstants from './constants_dir';
import EditConstants from './constants_edit';
import ExcelConstants from './constants_excel';
import FileConstants from './constants_file';
import FontConstants from './constants_font';
import FrameConstants from './constants_frame';
import GDIPlusConstants from './constants_gdiplus';
import ListBoxConstants from './constants_listbox';
import ListViewConstants from './constants_listview';
import MsgBoxConstants from './constants_msgbox';
import ProgressConstants from './constants_progress';
import SliderConstants from './constants_slider';
import StaticConstants from './constants_static';
import StatusBarConstants from './constants_statusbar';
import StringConstants from './constants_string';
import TabConstants from './constants_tab';
import TrayConstants from './constants_tray';
import TreeViewConstants from './constants_treeview';
import UpDownConstants from './constants_updown';
import WindowsConstants from './constants_windows';
import WordConstants from './constants_word';
import KEYWORDS from './keywords';
import MACROS from './macros';
import MAIN_FUNCTIONS from './mainFunctions';
import SendKeys from './send_keys';
import ArrayUDF from './udf_array';
import WinAPISys from './udf_clipboard';
import ColorUDF from './udf_color';
import Crypt from './udf_crypt';
import DateUDF from './udf_date';
import Debug from './udf_debug';
import EventLog from './udf_eventlog';
import Excel from './udf_excel';
import FileUDF from './udf_file';
import FTPEx from './udf_ftpex';
import GDIPlus from './udf_gdiplus';
import GuiAVI from './udf_guiAvi';
import GuiButton from './udf_guiButton';
import GuiComboBox from './udf_guiComboBox';
import GuiComboBoxEx from './udf_guiComboBoxEx';
import GuiDTP from './udf_guiDateTimePicker';
import GuiEdit from './udf_guiEdit';
import GuiHeader from './udf_guiHeader';
import GuiImageList from './udf_guiImageList';
import GuiIPAddress from './udf_guiIPAddress';
import GuiListBox from './udf_guiListBox';
import GuiListView from './udf_guiListView';
import GuiMenu from './udf_guiMenu';
import GuiMonthCal from './udf_guiMonthCal';
import GuiReBar from './udf_guiReBar';
import GuiRichEdit from './udf_guiRichEdit';
import GuiScrollBars from './udf_guiScrollBars';
import GuiSlider from './udf_guiSlider';
import GuiStatusBar from './udf_guiStatusBar';
import GuiTab from './udf_guiTab';
import GuiToolbar from './udf_guiToolbar';
import GuiToolTip from './udf_guiToolTip';
import GuiTreeView from './udf_guiTreeView';
import IE from './udf_ie';
import Inet from './udf_inet';
import MathUDF from './udf_math';
import Misc from './udf_misc';
import NamedPipes from './udf_namedPipes';
import NetShare from './udf_netShare';
import ScreenCapture from './udf_screenCapture';
import Security from './udf_security';
import SendMessage from './udf_sendMessage';
import Sound from './udf_sound';
import SQLite from './udf_sqlite';
import StringUDF from './udf_string';
import Timers from './udf_timers';
import Visa from './udf_visa';
import WinAPI from './udf_winAPI';
import WinAPICom from './udf_WinAPICom';
import WinAPIDiag from './udf_WinAPIDiag';
import WinAPIDlg from './udf_WinAPIDlg';
import WinAPIFiles from './udf_WinAPIFiles';
import WinAPIGdi from './udf_WinAPIGdi';
import WinAPILocale from './udf_WinAPILocale';
import WinAPIMisc from './udf_WinAPIMisc';
import WinAPIProc from './udf_winAPIProc';
import WinAPIReg from './udf_WinAPIReg';
import WinAPIRes from './udf_WinAPIRes';
import WinAPIShellEx from './udf_WinAPIShellEx';
import WinAPIShPath from './udf_WinAPIShPath';
import WinAPITheme from './udf_WinAPITheme';
import WinNet from './udf_winNet';
import Word from './udf_word';
import InetConstants from './constantsInet';

const completions = [
  ...AVI,
  ...ButtonConstants,
  ...ComboConstants,
  ...DateTimeConstants,
  ...DirConstants,
  ...EditConstants,
  ...ExcelConstants,
  ...FileConstants,
  ...FontConstants,
  ...FrameConstants,
  ...GDIPlusConstants,
  ...ListBoxConstants,
  ...ListViewConstants,
  ...MsgBoxConstants,
  ...ProgressConstants,
  ...SliderConstants,
  ...StaticConstants,
  ...StatusBarConstants,
  ...StringConstants,
  ...TabConstants,
  ...TrayConstants,
  ...TreeViewConstants,
  ...UpDownConstants,
  ...WindowsConstants,
  ...WordConstants,
  ...KEYWORDS,
  ...MACROS,
  ...MAIN_FUNCTIONS,
  ...SendKeys,
  ...ArrayUDF,
  ...WinAPISys,
  ...ColorUDF,
  ...Crypt,
  ...DateUDF,
  ...Debug,
  ...EventLog,
  ...Excel,
  ...FileUDF,
  ...FTPEx,
  ...GDIPlus,
  ...GuiAVI,
  ...GuiButton,
  ...GuiComboBox,
  ...GuiComboBoxEx,
  ...GuiDTP,
  ...GuiEdit,
  ...GuiHeader,
  ...GuiImageList,
  ...GuiIPAddress,
  ...GuiListBox,
  ...GuiListView,
  ...GuiMenu,
  ...GuiMonthCal,
  ...GuiReBar,
  ...GuiRichEdit,
  ...GuiScrollBars,
  ...GuiSlider,
  ...GuiStatusBar,
  ...GuiTab,
  ...GuiToolbar,
  ...GuiToolTip,
  ...GuiTreeView,
  ...IE,
  ...Inet,
  ...MathUDF,
  ...Misc,
  ...NamedPipes,
  ...NetShare,
  ...ScreenCapture,
  ...Security,
  ...SendMessage,
  ...Sound,
  ...SQLite,
  ...StringUDF,
  ...Timers,
  ...Visa,
  ...WinAPI,
  ...WinAPICom,
  ...WinAPIDiag,
  ...WinAPIDlg,
  ...WinAPIFiles,
  ...WinAPIGdi,
  ...WinAPILocale,
  ...WinAPIMisc,
  ...WinAPIProc,
  ...WinAPIReg,
  ...WinAPIRes,
  ...WinAPIShellEx,
  ...WinAPIShPath,
  ...WinAPITheme,
  ...WinNet,
  ...Word,
  ...InetConstants,
];

export default completions;
