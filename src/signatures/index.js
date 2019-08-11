import mainFunctions from './functions.json';
import udfs from './udfs.json';
import word from './udf_word';
import winnet from './udf_winnet';
import udfArray from './udf_array';

const signatures = {
  ...mainFunctions,
  ...udfs,
  ...word,
  ...winnet,
  ...udfArray,
};

export default signatures;
