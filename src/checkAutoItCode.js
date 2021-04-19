// const configuration = workspace.getConfiguration('autoit');
// const { checkPath } = configuration;
import { DiagnosticSeverity } from 'vscode';

export const getDiagnosticSeverity = severityString => {
  switch (severityString) {
    case 'warning':
      return DiagnosticSeverity.Warning;
    default:
      return DiagnosticSeverity.Error;
  }
};

const checkAutoItCode = () => {
  return null;
};

export default checkAutoItCode;
