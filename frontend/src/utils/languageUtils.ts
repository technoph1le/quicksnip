import { API_BASE, defaultSubLanguageName } from "./consts";
import { reverseSlugify, slugify } from "./slugify";

export function getLanguageDisplayName(
  language: string,
  subLanguage: string | null
) {
  if (subLanguage && subLanguage !== defaultSubLanguageName) {
    return reverseSlugify(subLanguage).toLocaleUpperCase();
  } else {
    return language;
  }
}

export function getLanguageDisplayLogo(
  language: string,
  subLanguage: string | null
) {
  const langSlug = slugify(language);

  if (!subLanguage) {
    return `${API_BASE}/icons/${slugify(langSlug)}.svg`;
  } else {
    return `${API_BASE}/icons/${slugify(langSlug)}--${slugify(subLanguage)}.svg`;
  }
}

export function getLanguageFileName(
  language: string,
  subLanguage: string | null
) {
  if (!subLanguage || subLanguage === "s") {
    return slugify(language);
  } else {
    return `${slugify(language)}--${slugify(subLanguage)}`;
  }

  // return slugify(subLanguage) !== defaultSubLanguageName
  //   ? `/consolidated/${slugify(language)}--${slugify(subLanguage)}.json`
  //   : `/consolidated/${slugify(language)}.json`;
}
