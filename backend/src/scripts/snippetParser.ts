import { existsSync, readdirSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { RawSnippetType, SnippetType } from "@types";
import { isCorrectType } from "@utils/objectUtils";
import { raise } from "@utils/raise";
import { reverseSlugify, slugify } from "@utils/slugify";

interface ParseLanguageResponse {
  name: string;
  icon: string;
  categories: {
    name: string;
    snippets: SnippetType[];
  }[];
  subLanguages: ParseLanguageResponse[];
}

interface ParseCategoryResponse {
  name: string;
  snippets: SnippetType[];
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const propertyRegex = /^\s+([a-zA-Z]+):\s*(.+)/;
const headerEndCodeStartRegex = /^\s*---\s*```.*\r?\n/;
const codeRegex = /^(.+)```/s;

let errored: boolean = false;

function parseSnippet(
  path: string,
  name: string,
  text: string
): SnippetType | null {
  let cursor: number = 0;

  const fromCursor = () => text.substring(cursor);
  if (!fromCursor().trim().startsWith("---")) {
    return raise("Missing header start delimiter '---'", path);
  }

  cursor += 3;

  const properties: { [key: string]: string } = {};

  let match: string[] | null;
  while ((match = propertyRegex.exec(fromCursor())) !== null) {
    cursor += match[0].length;
    properties[match[1].toLowerCase()] = match[2];
  }

  if (
    !isCorrectType<RawSnippetType>(properties, [
      "title",
      "description",
      "author",
      "tags",
    ])
  ) {
    return raise("Invalid properties", path);
  }

  if (slugify(properties.title) !== name) {
    return raise(
      `slugifyed 'title' property doesn't match snippet file name`,
      path
    );
  }

  match = headerEndCodeStartRegex.exec(fromCursor());
  if (match === null) {
    return raise("Missing header end '---' or code start '```'", path);
  }

  cursor += match[0].length;
  const extension = match[0].replace(/[\r\n`-]/g, "");

  match = codeRegex.exec(fromCursor());
  if (match === null) {
    return raise("Missing code block end '```'", path);
  }

  const code: string = match[1];

  return {
    title: properties.title,
    description: properties.description,
    author: properties.author,
    tags: properties.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag),
    contributors: (properties.contributors ?? "")
      .split(",")
      .map((contributor) => contributor.trim())
      .filter((contributor) => contributor),
    code: code.replace(/\r\n/g, "\n"),
    extension,
  };
}

function parseCategory(path: string, name: string): ParseCategoryResponse {
  const snippets: SnippetType[] = [];

  for (const snippet of readdirSync(path)) {
    const snippetPath = join(path, snippet);
    const snippetContent = readFileSync(snippetPath).toString();
    const snippetFileName = snippet.slice(0, -3);

    const snippetData = parseSnippet(
      snippetPath,
      snippetFileName,
      snippetContent
    );
    if (!snippetData) {
      errored = true;
      continue;
    }
    snippets.push(snippetData);
  }

  return {
    name: reverseSlugify(name),
    snippets,
  };
}

function parseLanguage(
  path: string,
  name: string,
  subLanguageOf: string | null = null
): ParseLanguageResponse | null {
  const iconPath = join(path, "icon.svg");

  if (!existsSync(iconPath)) {
    return raise(
      `icon for '${subLanguageOf ? `${subLanguageOf}/` : ""}${name}' is missing`
    );
  }

  const subLanguages: ParseLanguageResponse[] = [];
  const categories: ParseCategoryResponse[] = [];

  for (const category of readdirSync(path)) {
    if (category === "icon.svg") continue;
    const categoryPath = join(path, category);

    if (category.startsWith("[") && category.endsWith("]")) {
      if (subLanguageOf !== null) {
        return raise("Cannot have more than two level of language nesting");
      }

      const parsedLanguage = parseLanguage(
        categoryPath,
        category.slice(1, -1),
        name
      );
      if (!parsedLanguage) {
        errored = true;
        continue;
      }
      subLanguages.push(parsedLanguage);
    } else {
      categories.push(parseCategory(categoryPath, category));
    }
  }

  return {
    name: reverseSlugify(name),
    icon: iconPath,
    categories,
    subLanguages,
  };
}

export function parseAllSnippets() {
  const snippetPath = join(__dirname, "../../../snippets");

  const languages: ParseLanguageResponse[] = [];
  for (const language of readdirSync(snippetPath)) {
    const languagePath = join(snippetPath, language);
    const parsedLanguage = parseLanguage(languagePath, language);
    if (!parsedLanguage) {
      errored = true;
      continue;
    }
    languages.push(parsedLanguage);
  }

  return {
    errored,
    languages,
  };
}
