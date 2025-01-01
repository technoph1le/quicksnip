export type LanguageType = {
  lang: string;
  icon: string;
};

export type CategoryType = {
  categoryName: string;
  snippets: SnippetType[];
};

export type SnippetType = {
  title: string;
  description: string;
  code: string;
  tags: string[];
  author: string;
};

export type HighlighterStyleType = {
  name: string;
  style: { [key: string]: React.CSSProperties };
};

export type AppState = {
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  snippet: SnippetType | null;
  setSnippet: React.Dispatch<React.SetStateAction<SnippetType | null>>;
  theme: "dark" | "light";
  toggleTheme: () => void;
  highlighterStyle: HighlighterStyleType;
  setHighlighterStyle: React.Dispatch<
    React.SetStateAction<HighlighterStyleType>
  >;
};

export interface SelectorOption {
  name: string;
  icon?: string;
}
