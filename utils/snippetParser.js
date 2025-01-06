import { existsSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';

export function reverseSlugify(string, separator = "-") {
    return string
        .split(separator)
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(' ')
        .trim();
}
export function slugify(string, separator = "-") {
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

let errored = false;
function raise(issue, snippet = '') {
    console.error(`${issue}${snippet ? ` in '${snippet}'` : ''}`);
    errored = true;
    return null;
}

const propertyRegex = /^\s+([a-zA-Z]+):\s*(.+)/;
const headerEndCodeStartRegex = /^\s*---\s*```.*\r?\n/;
const codeRegex = /^(.+)```/s
function parseSnippet(path, name, text) {
    let cursor = 0;

    const fromCursor = () => text.substring(cursor);

    if(!fromCursor().trim().startsWith('---')) return raise('Missing header start delimiter \'---\'', path);
    cursor += 3;

    const properties = {};
    let match;
    while((match = propertyRegex.exec(fromCursor())) !== null) {
        cursor += match[0].length;
        properties[match[1].toLowerCase()] = match[2];
    }

    if(!('title' in properties)) return raise(`Missing 'title' property`, path);
    if(!('description' in properties)) return raise(`Missing 'description' property`, path);
    if(!('author' in properties)) return raise(`Missing 'author' property`, path);
    if(!('tags' in properties)) return raise(`Missing 'tags' property`, path);

    if(slugify(properties.title) !== name) return raise(`slugifyed 'title' property doesn't match snippet file name`, path);

    match = headerEndCodeStartRegex.exec(fromCursor());
    if(match === null) return raise('Missing header end \'---\' or code start \'```\'', path);
    cursor += match[0].length;

    match = codeRegex.exec(fromCursor());
    if(match === null) return raise('Missing code block end \'```\'', path);
    const code = match[1];

    return {
        title: properties.title,
        description: properties.description,
        author: properties.author,
        tags: properties.tags.split(',').map((tag) => tag.trim()).filter((tag) => tag),
        contributors: 'contributors' in properties ? properties.contributors.split(',').map((contributor) => contributor.trim()).filter((contributor) => contributor) : [],
        code: code.replace(/\r\n/g, '\n'),
    }
}

function parseCategory(path, name) {
    const snippets = [];

    for(const snippet of readdirSync(path)) {
        const snippetPath = join(path, snippet);
        const snippetContent = readFileSync(snippetPath).toString();
        const snippetFileName = snippet.slice(0, -3);

        const snippetData = parseSnippet(snippetPath, snippetFileName, snippetContent);
        if(!snippetData) continue;
        snippets.push(snippetData);
    }

    return {
        name: reverseSlugify(name),
        snippets,
    };
}

function parseLanguage(path, name, subLanguageOf = null) {
    const iconPath = join(path, 'icon.svg');

    if(!existsSync(iconPath)) return raise(`icon for '${subLanguageOf ? `${subLanguageOf}/` : '' }${name}' is missing`);

    const categories = [];
    const subLanguages = [];

    for(const category of readdirSync(path)) {
        if(category === 'icon.svg') continue;
        const categoryPath = join(path, category);

        if(category.startsWith('[') && category.endsWith(']')) {
            if(subLanguageOf !== null) {
                return raise('Cannot have more than two level of language nesting');
            }
            subLanguages.push(parseLanguage(categoryPath, category.slice(1, -1), name));
        }else {
            categories.push(parseCategory(categoryPath, category));
        }
    }

    return {
        name: reverseSlugify(name),
        icon: iconPath,
        categories, subLanguages,
    }
}

const snippetPath = "snippets/";
export function parseAllSnippets() {
    const languages = [];

    for(const language of readdirSync(snippetPath)) {
        const languagePath = join(snippetPath, language);

        languages.push(parseLanguage(languagePath, language));
    }

    return [ errored, languages ];
}
