import { CategoryType, LanguageType } from "@types";

import { slugify } from "./slugify";

export const defaultLanguage: LanguageType = {
  name: "JAVASCRIPT",
  icon: "/icons/javascript.svg",
  subLanguages: [],
};

export const defaultSlugifiedSubLanguageName = slugify("All Sub Languages");

export const defaultCategoryName: CategoryType = "All Snippets";
