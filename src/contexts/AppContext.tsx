import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { AppState, LanguageType, SnippetType } from "@types";

// tokens
const defaultLanguage: LanguageType = {
  lang: "JavaScript",
  icon: "/icons/javascript.svg",
};

const defaultHighlighterStyle = { name: "oneDark", style: oneDark };

// TODO: add custom loading and error handling
const defaultState: AppState = {
  language: defaultLanguage,
  setLanguage: () => {},
  category: "",
  setCategory: () => {},
  snippet: null,
  setSnippet: () => {},
  theme: "dark",
  toggleTheme: () => {},
  highlighterStyle: defaultHighlighterStyle,
  setHighlighterStyle: () => {},
};

const AppContext = createContext<AppState>(defaultState);

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<LanguageType>(defaultLanguage);
  const [category, setCategory] = useState<string>("");
  const [snippet, setSnippet] = useState<SnippetType | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">(
    (localStorage.getItem("theme") as "dark" | "light" | null) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  const [highlighterStyle, setHighlighterStyle] = useState<
    AppState["highlighterStyle"]
  >(defaultHighlighterStyle);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, [theme]);

  /**
   * set the theme on initial load
   */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        category,
        setCategory,
        snippet,
        setSnippet,
        theme,
        toggleTheme,
        highlighterStyle,
        setHighlighterStyle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
