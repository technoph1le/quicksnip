import { CategoryType, LanguageType } from "@types";

import {
  API_BASE,
  defaultCategoryName,
  defaultLanguage,
  defaultSlugifiedSubLanguageName,
} from "./consts";
import { slugify } from "./slugify";

export async function configureUserSelection({
  languageName,
  subLanguageName,
  categoryName,
}: {
  languageName: string | undefined;
  subLanguageName?: string | undefined;
  categoryName?: string | undefined;
}): Promise<{
  language: LanguageType;
  subLanguage: LanguageType["name"];
  category: CategoryType;
}> {
  const slugifiedLanguageName = languageName
    ? slugify(languageName)
    : undefined;
  const slugifiedSubLanguageName = subLanguageName
    ? slugify(subLanguageName)
    : undefined;
  const slugifiedCategoryName = categoryName
    ? slugify(categoryName)
    : undefined;

  const fetchedLanguages: LanguageType[] = await fetch(
    `${API_BASE}/languages`
  ).then((res) => res.json());

  const language =
    fetchedLanguages.find(
      (lang) => slugify(lang.name) === slugifiedLanguageName
    ) ?? defaultLanguage;

  const subLanguage = language.subLanguages.find(
    (sl) => slugify(sl.name) === slugifiedSubLanguageName
  );
  const matchedSubLanguage =
    subLanguage === undefined
      ? defaultSlugifiedSubLanguageName
      : slugify(subLanguage.name);

  let category: CategoryType | undefined;
  try {
    const fetchedCategoryNames: string[] = await fetch(
      `${API_BASE}/categories/${slugify(language.name)}`
    ).then((res) => res.json());

    const matchedCategoryName = fetchedCategoryNames.find(
      (cat) => slugify(cat) === slugifiedCategoryName
    );

    if (matchedCategoryName) {
      category = matchedCategoryName;
    } else {
      category = defaultCategoryName;
    }
  } catch (_error) {
    // This state should not be reached in the normal flow.
    category = defaultCategoryName;
  }

  return {
    language,
    subLanguage: matchedSubLanguage,
    category: category ?? defaultCategoryName,
  };
}
