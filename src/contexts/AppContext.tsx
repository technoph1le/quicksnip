import { createContext, FC, useContext, useState } from "react";

import { AppState, LanguageType, SnippetType } from "@types";

// tokens
const defaultLanguage: LanguageType = {
  lang: "JAVASCRIPT",
  icon: "/icons/javascript.svg",
};

// TODO: add custom loading and error handling
const defaultState: AppState = {
  language: defaultLanguage,
  setLanguage: () => {},
  category: "",
  setCategory: () => {},
  snippet: null,
  setSnippet: () => {},
};

const AppContext = createContext<AppState>(defaultState);

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<LanguageType>(defaultLanguage);
  const [category, setCategory] = useState<string>("");
  const [snippet, setSnippet] = useState<SnippetType | null>(null);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        category,
        setCategory,
        snippet,
        setSnippet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
