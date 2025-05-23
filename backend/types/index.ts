export type LanguageType = {
  name: string;
  icon: string;
  subLanguages: {
    name: string;
    icon: string;
  }[];
};

export type CategoryType = string;

export type SnippetType = {
  title: string;
  description: string;
  author: string;
  code: string;
  tags: string[];
  contributors: string[];
  extension: string;
};

export type FileType = {
  name: string;
  snippets: SnippetType[];
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
