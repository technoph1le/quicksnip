import { LanguageType } from "@types";

import { API_BASE, defaultSlugifiedSubLanguageName } from "./consts";
import { reverseSlugify, slugify } from "./slugify";

export function getLanguageDisplayName(
  language: LanguageType["name"],
  subLanguage: LanguageType["subLanguages"][number]["name"]
) {
  return slugify(subLanguage) !== defaultSlugifiedSubLanguageName
    ? reverseSlugify(subLanguage).toLocaleUpperCase()
    : language;
}

export function getLanguageDisplayLogo(
  language: LanguageType["name"],
  subLanguage: LanguageType["subLanguages"][number]["name"]
) {
  const langSlug = slugify(language);
  const subLangSlug = slugify(subLanguage);

  return subLangSlug !== defaultSlugifiedSubLanguageName
    ? `${API_BASE}/icons/${slugify(langSlug)}--${subLangSlug}.svg`
    : `${API_BASE}/icons/${slugify(langSlug)}.svg`;
}

export function getLanguageFileName(
  language: LanguageType["name"],
  subLanguage: LanguageType["subLanguages"][number]["name"]
) {
  const langSlug = slugify(language);
  const subLangSlug = slugify(subLanguage);

  return subLangSlug !== defaultSlugifiedSubLanguageName
    ? `${langSlug}--${subLangSlug}`
    : `${langSlug}`;

  // return slugify(subLanguage) !== defaultSlugifiedSubLanguageName
  //   ? `/consolidated/${slugify(language)}--${slugify(subLanguage)}.json`
  //   : `/consolidated/${slugify(language)}.json`;
}
