import { CategoryType, LanguageType } from "@types";

import { API_BASE, defaultCategoryName, defaultLanguage } from "./consts";
import { slugify } from "./slugify";

interface Params {
  languageName?: string;
  subLanguageName?: string;
  categoryName?: string;
}

export async function configureUserSelection({
  languageName,
  subLanguageName,
  categoryName,
}: Params): Promise<{
  language: LanguageType;
  subLanguage: LanguageType["name"] | null;
  category: CategoryType;
}> {
  const [langSlug, subLangSlug, catSlug] = [
    slugify(languageName || ""),
    slugify(subLanguageName || ""),
    slugify(categoryName || ""),
  ];

  const languages: LanguageType[] = await fetch(`${API_BASE}/languages`).then(
    (res) => res.json()
  );

  const language =
    languages.find((lang) => slugify(lang.name) === langSlug) ||
    defaultLanguage;

  const subLanguage =
    language.subLanguages.find((sl) => slugify(sl.name) === subLangSlug)
      ?.name || null;

  let category: CategoryType = defaultCategoryName;

  try {
    const categories: string[] = await fetch(
      `${API_BASE}/categories/${slugify(language.name)}`
    ).then((res) => res.json());

    const matchedCategory = categories.find((cat) => slugify(cat) === catSlug);
    if (matchedCategory) category = matchedCategory;
  } catch {
    console.log("Error with fetching /categories in configureUserSelection.ts");
  }

  return {
    language,
    subLanguage,
    category,
  };
}
