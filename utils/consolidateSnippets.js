import { exit } from 'process';
import { parseAllSnippets, reverseSlugify, slugify } from './snippetParser.js';
import { join } from 'path';
import { copyFileSync, writeFileSync } from 'fs';

const dataPath = 'public/consolidated/';
const indexPath = join(dataPath, '_index.json');
const iconPath = 'public/icons/';
const snippetsPath = 'snippets/';

const [ errored, languages ] = parseAllSnippets();

if(errored) exit(1);

const index = [];
for(const language of languages) {
    copyFileSync(language.icon, join(iconPath, `${slugify(language.name)}.svg`));

    const subIndexes = [];

    for(const subLanguage of language.subLanguages) {
        const joinedName = `${slugify(language.name)}--${slugify(subLanguage.name)}`;
        const iconName = `${joinedName}.svg`;
        const subLanguageFilePath = join(dataPath, `${joinedName}.json`);

        copyFileSync(subLanguage.icon, join(iconPath, iconName));
        subIndexes.push({
            name: subLanguage.name.toUpperCase(),
            icon: `/icons/${iconName}`,
        });

        writeFileSync(subLanguageFilePath, JSON.stringify(subLanguage.categories, null, 4));
    }

    index.push({
        name: language.name.toUpperCase(),
        icon: `/icons/${slugify(language.name)}.svg`,
        subLanguages: subIndexes,
    });
    
    const languageFilePath = join(dataPath, `${slugify(language.name)}.json`);
    
    writeFileSync(languageFilePath, JSON.stringify(language.categories, null, 4));
}

writeFileSync(indexPath, JSON.stringify(index, null, 4));