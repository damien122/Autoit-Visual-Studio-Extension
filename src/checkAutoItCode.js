// const configuration = workspace.getConfiguration('autoit');
// const { checkPath } = configuration;
import { Diagnostic, DiagnosticSeverity, Range, Position } from 'vscode';

export const getDiagnosticSeverity = severityString => {
  switch (severityString) {
    case 'warning':
      return DiagnosticSeverity.Warning;
    default:
      return DiagnosticSeverity.Error;
  }
};

export const getDiagnosticRange = (line, position) => {
  const diagnosticPosition = new Position(parseInt(line, 10) - 1, parseInt(position, 10) - 1);

  return new Range(diagnosticPosition, diagnosticPosition);
};

export const updateDiagnostics = (currentDiagnostics, scriptPath, range, description, severity) => {
  const diagnosticToAdd = new Diagnostic(range, description, severity);
  const updatedDiagnostics = currentDiagnostics;

  if (!(scriptPath in updatedDiagnostics)) {
    updatedDiagnostics[scriptPath] = [];
  }
  updatedDiagnostics[scriptPath].push(diagnosticToAdd);

  return updatedDiagnostics;
};

const checkAutoItCode = () => {
  return null;
};

export default checkAutoItCode;
