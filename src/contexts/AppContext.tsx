import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { highlighterStyles } from "@consts/highlighter-styles";
import { useLanguages } from "@hooks/useLanguages";
import {
  AppState,
  HighlighterStyleType,
  LanguageType,
  SnippetType,
} from "@types";

// tokens
const defaultLanguage: LanguageType = {
  lang: "JavaScript",
  icon: "/icons/javascript.svg",
};

const defaultHighlighterStyle: HighlighterStyleType = {
  name: "oneDark",
  style: oneDark,
};

// TODO: add custom loading and error handling
const defaultState: AppState = {
  language: defaultLanguage,
  toggleLanguage: () => {},
  category: "",
  setCategory: () => {},
  snippet: null,
  setSnippet: () => {},
  theme: "dark",
  toggleTheme: () => {},
  highlighterStyle: defaultHighlighterStyle,
  toggleHighlighterStyle: () => {},
};

const AppContext = createContext<AppState>(defaultState);

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { fetchedLanguages } = useLanguages();

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
  >(
    localStorage.getItem("highlighterStyleName")
      ? highlighterStyles.find(
          (style) => style.name === localStorage.getItem("highlighterStyleName")
        ) || defaultHighlighterStyle
      : defaultHighlighterStyle
  );

  const toggleLanguage = (newLanguage: LanguageType) => {
    setLanguage(newLanguage);
    localStorage.setItem("languageName", newLanguage.lang);
  };

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }, [theme]);

  const toggleHighlighterStyle = (
    newHighlighterStyle: HighlighterStyleType
  ) => {
    setHighlighterStyle(newHighlighterStyle);
    localStorage.setItem("highlighterStyleName", newHighlighterStyle.name);
  };

  /**
   * check if the language is saved in local storage
   */
  useEffect(() => {
    if (fetchedLanguages.length === 0) {
      return;
    }

    const languageName = localStorage.getItem("languageName");
    if (!languageName) {
      return;
    }

    const selected = fetchedLanguages.find(
      (lang) => lang.lang === languageName
    );
    if (!selected) {
      return;
    }

    setLanguage(selected);
  }, [fetchedLanguages]);

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
        toggleLanguage,
        category,
        setCategory,
        snippet,
        setSnippet,
        theme,
        toggleTheme,
        highlighterStyle,
        toggleHighlighterStyle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
