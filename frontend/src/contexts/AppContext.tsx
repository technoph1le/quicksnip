import { createContext, FC, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useLanguages } from "@hooks/useLanguages";
import { AppState, LanguageType, SnippetType } from "@types";
import { configureUserSelection } from "@utils/configureUserSelection";
import { defaultState, defaultURLPath } from "@utils/consts";
import { slugify } from "@utils/slugify";

const AppContext = createContext<AppState>(defaultState);

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const { languageName, subLanguageName, categoryName } = useParams();
  const { fetchedLanguages } = useLanguages();

  const [language, setLanguage] = useState<LanguageType | null>(null);
  const [subLanguage, setSubLanguage] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [snippet, setSnippet] = useState<SnippetType | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const configure = async () => {
      const { language, subLanguage, category } = await configureUserSelection({
        languageName,
        subLanguageName,
        categoryName,
      });

      setLanguage(language);
      setSubLanguage(subLanguage);
      setCategory(category);
    };

    configure();
  }, [fetchedLanguages, languageName, subLanguageName, categoryName]);

  /**
   * Set the default language if the language is not found in the URL.
   */
  useEffect(() => {
    const isInvalid =
      !languageName ||
      !categoryName ||
      !fetchedLanguages.find((lang) => slugify(lang.name) === languageName);

    if (isInvalid) {
      navigate(defaultURLPath, { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoading = language === null || category === null;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider
      value={
        {
          language,
          subLanguage,
          category,
          setCategory,
          snippet,
          setSnippet,
          searchText,
          setSearchText,
        } as AppState
      }
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
