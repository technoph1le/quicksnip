import { AppState, CategoryType, LanguageType } from "@/types";

import { slugify } from "./slugify";

export const defaultLanguage: LanguageType = {
  name: "JavaScript",
  icon: "/icons/javascript.svg",
  subLanguages: [],
};

export const defaultSlugifiedSubLanguageName = slugify("All Sub Languages");

export const defaultCategoryName: CategoryType = {
  categoryName: "All snippets",
};

// TODO: add custom loading and error handling
export const defaultState: AppState = {
  language: defaultLanguage,
  subLanguage: defaultSlugifiedSubLanguageName,
  category: defaultCategoryName,
  snippet: null,
  setSnippet: () => {},
  searchText: "",
  setSearchText: () => {},
};
