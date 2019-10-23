import mainFunctions from './functions.json';
import udfs from './udfs.json';
import debug from './udf_debug';
import word from './udf_word';
import winnet from './udf_winnet';
import udfArray from './udf_array';
import WinAPITheme from './WinAPIEx/WinAPITheme';

const signatures = {
  ...mainFunctions,
  ...udfs,
  ...debug,
  ...word,
  ...winnet,
  ...udfArray,
  ...WinAPITheme,
};

export default signatures;
