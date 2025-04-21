export type LanguageType = {
  name: string;
  icon: string;
  subLanguages?: {
    name: string;
    icon: string;
  }[];
};

export type CategoriesType = {
  languageName: string;
  languageIcon: string;
  categories: CategoryType[];
};

export type CategoryType = {
  categoryName: string;
  snippets?: SnippetType[];
};

export type SnippetType = {
  title: string;
  description: string;
  author: string;
  code: string;
  tags: string[];
  contributors: string[];
  extension: string;
};

export type RawSnippetType = {
  title: string;
  description: string;
  author: string;
  code: string;
  tags: string;
  contributors?: string;
  extension: string;
};

export type AppState = {
  selectedLanguage: LanguageType;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<SnippetType | null>>;
  selectedCategory: CategoryType;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<CategoryType | null>
  >;
  selectedSnippet: SnippetType | null;
  setSelectedSnippet: React.Dispatch<React.SetStateAction<SnippetType | null>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};
