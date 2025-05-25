import { copyFileSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { exit } from "process";

import { LanguageType } from "@types";
import { slugify } from "@utils/slugify";

import { API_BASE } from "../index";
import { parseAllSnippets } from "./snippetParser";

const dataPath = "data/consolidated/";
const indexPath = join(dataPath, "_index.json");
const iconPath = "data/icons/";

const { errored, languages } = parseAllSnippets();

if (errored) {
  exit(1);
}

mkdirSync(dataPath, { recursive: true });
mkdirSync(iconPath, { recursive: true });

const index: LanguageType[] = [];
for (const language of languages) {
  copyFileSync(language.icon, join(iconPath, `${slugify(language.name)}.svg`));

  const subLanguages: LanguageType["subLanguages"] = [];

  for (const subLanguage of language.subLanguages) {
    const joinedName = `${slugify(language.name)}--${slugify(
      subLanguage.name
    )}`;
    const iconName = `${joinedName}.svg`;
    const subLanguageFilePath = join(dataPath, `${joinedName}.json`);

    copyFileSync(subLanguage.icon, join(iconPath, iconName));
    subLanguages.push({
      name: subLanguage.name.toUpperCase(),
      icon: `${API_BASE}/icons/${iconName}`,
    });

    writeFileSync(
      subLanguageFilePath,
      JSON.stringify(subLanguage.categories, null, 4)
    );
  }

  index.push({
    name: language.name.toUpperCase(),
    icon: `${API_BASE}/icons/${slugify(language.name)}.svg`,
    subLanguages,
  });

  const languageFilePath = join(dataPath, `${slugify(language.name)}.json`);

  writeFileSync(languageFilePath, JSON.stringify(language.categories, null, 4));
}

writeFileSync(indexPath, JSON.stringify(index, null, 4));
