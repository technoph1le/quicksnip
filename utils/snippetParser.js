import { existsSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';

export function reverseSlugify(string, separator = "-") {
    return string
        .split(separator)
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(' ')
        .trim();
}

let errored = false;
function raise(issue, snippet = '') {
    console.error(`${issue}${snippet ? ` in '${snippet}'` : ''}`);
    errored = true;
    return null;
}

const propertyRegex = /^\s+([a-zA-Z]+):\s*(.+)/;
const headerEndCodeStartRegex = /^\s*---\s*```.*\n/;
const codeRegex = /^(.+)```/s
function parseSnippet(snippetPath, text) {
    let cursor = 0;

    const fromCursor = () => text.substring(cursor);

    if(!fromCursor().trim().startsWith('---')) return raise('Missing header start delimiter \'---\'', snippetPath);
    cursor += 3;

    const properties = {};
    let match;
    while((match = propertyRegex.exec(fromCursor())) !== null) {
        cursor += match[0].length;
        properties[match[1].toLowerCase()] = match[2];
    }

    if(!('title' in properties)) return raise(`Missing 'title' property`, snippetPath);
    if(!('description' in properties)) return raise(`Missing 'description' property`, snippetPath);
    if(!('author' in properties)) return raise(`Missing 'author' property`, snippetPath);
    if(!('tags' in properties)) return raise(`Missing 'tags' property`, snippetPath);

    match = headerEndCodeStartRegex.exec(fromCursor());
    if(match === null) return raise('Missing header end \'---\' or code start \'```\'', snippetPath);
    cursor += match[0].length;

    match = codeRegex.exec(fromCursor());
    if(match === null) return raise('Missing code block end \'```\'', snippetPath);
    const code = match[1];

    return {
        title: properties.title,
        description: properties.description,
        author: properties.author,
        tags: properties.tags.split(',').map((tag) => tag.trim()).filter((tag) => tag),
        contributors: 'contributors' in properties ? properties.contributors.split(',').map((contributor) => contributor.trim()).filter((contributor) => contributor) : [],
        code: code,
    }
}

const snippetPath = "snippets/";
export function parseAllSnippets() {
    const snippets = {};

    for(const language of readdirSync(snippetPath)) {
        const languagePath = join(snippetPath, language);
    
        const languageIconPath = join(languagePath, 'icon.svg');
    
        if(!existsSync(languageIconPath)) {
            raise(`icon for '${language}' is missing`);
            continue;
        }
        
        const categories = [];
        for(const category of readdirSync(languagePath)) {
            if(category === 'icon.svg') continue;
            const categoryPath = join(languagePath, category);
    
            const categorySnippets = [];
            for(const snippet of readdirSync(categoryPath)) {
                const snippetPath = join(categoryPath, snippet);
                const snippetContent = readFileSync(snippetPath).toString();
    
                const snippetData = parseSnippet(snippetPath, snippetContent);
                if(!snippetData) continue;
                categorySnippets.push(snippetData);
            }
            categories.push({
                categoryName: reverseSlugify(category),
                snippets: categorySnippets,
            });
        }

        snippets[language] = categories;
    }

    return [ errored, snippets ];
}
