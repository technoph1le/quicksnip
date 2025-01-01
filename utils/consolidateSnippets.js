import { exit } from 'process';
import { parseAllSnippets, reverseSlugify } from './snippetParser.js';
import { join } from 'path';
import { copyFileSync, writeFileSync } from 'fs';

const dataPath = 'public/data/';
const indexPath = join(dataPath, '_index.json');
const iconPath = 'public/icons/';
const snippetsPath = 'snippets/';

const [ errored, snippets ] = parseAllSnippets();

if(errored) exit(1);

const index = [];
for(const [language, categories] of Object.entries(snippets)) {
    const languageIconPath = join(snippetsPath, language, 'icon.svg');

    copyFileSync(languageIconPath, join(iconPath, `${language}.svg`));

    index.push({ lang: reverseSlugify(language).toUpperCase(), icon: `/icons/${language}.svg` });
    
    const languageFilePath = join(dataPath, `${language}.json`);
    
    writeFileSync(languageFilePath, JSON.stringify(categories, null, 4));
}

writeFileSync(indexPath, JSON.stringify(index, null, 4));