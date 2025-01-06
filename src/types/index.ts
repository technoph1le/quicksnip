export type LanguageType = {
  name: string;
  icon: string;
  subIndexes: {
    name: string;
    icon: string;
  }[];
};

export type CategoryType = {
  name: string;
  snippets: SnippetType[];
};

export type SnippetType = {
  title: string;
  description: string;
  code: string;
  tags: string[];
  author: string;
};

export type AppState = {
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  snippet: SnippetType | null;
  setSnippet: React.Dispatch<React.SetStateAction<SnippetType | null>>;
};
