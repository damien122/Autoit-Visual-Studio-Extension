import { Diagnostic, DiagnosticSeverity, Range, Position, Uri } from 'vscode';

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

/**
 * Processes the results of AU3Check, identifies warnings and errors.
 * @param {string} output Text returned from AU3Check.
 * @param {vscode.DiagnosticCollection} collection - The diagnostic collection to update.
 */
export const parseAu3CheckOutput = (output, collection) => {
  const OUTPUT_REGEXP = /"(?<scriptPath>.+)"\((?<line>\d{1,4}),(?<position>\d{1,4})\)\s:\s(?<severity>warning|error):\s(?<description>.+)\./gm;
  let matches = null;
  let diagnosticRange;
  let diagnosticSeverity;
  let diagnostics = {};

  matches = OUTPUT_REGEXP.exec(output);
  while (matches !== null) {
    diagnosticRange = getDiagnosticRange(matches.groups.line, matches.groups.position);
    diagnosticSeverity = getDiagnosticSeverity(matches.groups.severity);

    diagnostics = updateDiagnostics(
      diagnostics,
      matches.groups.scriptPath,
      diagnosticRange,
      matches.groups.description,
      diagnosticSeverity,
    );

    matches = OUTPUT_REGEXP.exec(output);
  }

  Object.keys(diagnostics).forEach(scriptPath => {
    collection.set(Uri.file(scriptPath), diagnostics[scriptPath]);
  });
};

export default parseAu3CheckOutput;
