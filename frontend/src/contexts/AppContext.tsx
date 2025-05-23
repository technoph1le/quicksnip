import { createContext, FC, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useLanguages } from "@hooks/useLanguages";
import { AppState, LanguageType, SnippetType } from "@types";
import { configureUserSelection } from "@utils/configureUserSelection";
import {
  defaultCategoryName,
  defaultLanguage,
  defaultSlugifiedSubLanguageName,
  defaultState,
} from "@utils/consts";
import { slugify } from "@utils/slugify";

const AppContext = createContext<AppState>(defaultState);

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const { languageName, subLanguageName, categoryName } = useParams();

  const { fetchedLanguages } = useLanguages();

  const [language, setLanguage] = useState<LanguageType | null>(null);
  const [subLanguage, setSubLanguage] = useState<LanguageType["name"] | null>(
    null
  );
  const [category, setCategory] = useState<string | null>(null);
  const [snippet, setSnippet] = useState<SnippetType | null>(null);
  const [searchText, setSearchText] = useState<string>("");

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

  useEffect(() => {
    configure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedLanguages, languageName, subLanguageName, categoryName]);

  /**
   * Set the default language if the language is not found in the URL.
   */
  useEffect(() => {
    const defaultURLPath = `/${slugify(defaultLanguage.name)}/${slugify(defaultSlugifiedSubLanguageName)}/${slugify(defaultCategoryName)}`;

    if (!languageName || !subLanguageName || !categoryName) {
      navigate(defaultURLPath, { replace: true });
    }

    // Validate if language exists in fetchedLanguages
    const validLanguage = fetchedLanguages.find(
      (lang) => slugify(lang.name) === languageName
    );

    if (!validLanguage) {
      navigate(defaultURLPath, { replace: true }); // Redirect to NotFound.tsx
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (language === null || category === null) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider
      value={
        {
          language,
          subLanguage,
          category,
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
