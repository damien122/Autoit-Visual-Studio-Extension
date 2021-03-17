import { languages, Hover } from 'vscode';
import hovers from './hovers';
import { AUTOIT_MODE } from './util';

const hoverFeature = languages.registerHoverProvider(AUTOIT_MODE, {
  provideHover(document, position) {
    const wordRange = document.getWordRangeAtPosition(position);

    const word = wordRange ? document.getText(wordRange) : '';

    const hover = hovers[Object.keys(hovers).find(key => key.toLowerCase() === word.toLowerCase())];

    return new Hover(hover);
  },
});

export default hoverFeature;
