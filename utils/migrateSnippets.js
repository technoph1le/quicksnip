import { copyFileSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

function slugify(string, separator = "-") {
    return string
        .toString() // Cast to string (optional)
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string (optional)
        .replace(/\s+/g, separator) // Replace spaces with {separator}
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\_/g, separator) // Replace _ with {separator}
        .replace(/\-\-+/g, separator) // Replace multiple - with single {separator}
        .replace(/\-$/g, ""); // Remove trailing -
}

const languageToMarkdownHighlightOverwrites = {
    'javascript': 'js',
    'python': 'py'
};

function formatSnippet(language, snippet) {
    return `---
Title: ${snippet.title}
Description: ${snippet.description}
Author: ${snippet.author}
Tags: ${snippet.tags}${('contributors' in snippet) && snippet.contributors.length > 0 ? `\nContributors: ${snippet.contributors}` : ''}
---

\`\`\`${language in languageToMarkdownHighlightOverwrites ? languageToMarkdownHighlightOverwrites[language] : language}
${Array.isArray(snippet.code) ? snippet.code.join('\n').trim() : snippet.code.trim()}
\`\`\`
`;
}

const dataDir = "public/data";
const iconsDir = "public/icons";
const snippetDir = "snippets";

for (const file of readdirSync(dataDir)) {
    if(!file.endsWith('.json') || file === '_index.json') continue;
    
    const languageName = file.slice(0, -5);
    const content = JSON.parse(readFileSync(join(dataDir, file)));
    const languagePath = join(snippetDir, languageName);
    const iconPath = join(iconsDir, `${languageName}.svg`);

    mkdirSync(languagePath, { recursive: true });
    copyFileSync(iconPath, join(languagePath, 'icon.svg'));

    for (const category of content) {
        if(category === 'icon.svg') continue;
        const categoryPath = join(languagePath, slugify(category.categoryName));

        mkdirSync(categoryPath, { recursive: true });

        for(const snippet of category.snippets) {
            const snippetPath = join(categoryPath, `${slugify(snippet.title)}.md`);

            writeFileSync(snippetPath, formatSnippet(languageName, snippet));
        }
    }
}