import { AppState, CategoryType, LanguageType } from "@types";

export const API_BASE = import.meta.env.VITE_API_BASE;
export const GITHUB_API = "https://api.github.com/repos/technoph1le/quicksnip";

export const defaultLanguage: LanguageType = {
  name: "javascript",
  icon: "/icons/javascript.svg",
  subLanguages: [],
};

export const defaultSubLanguageName = "s";

export const defaultCategoryName: CategoryType = "All";

export const defaultURLPath = `/${defaultLanguage.name}/s/${defaultCategoryName}`;

// TODO: add custom loading and error handling
export const defaultState: AppState = {
  language: defaultLanguage,
  subLanguage: null,
  category: defaultCategoryName,
  setCategory: () => {},
  snippet: null,
  setSnippet: () => {},
  searchText: "",
  setSearchText: () => {},
};
