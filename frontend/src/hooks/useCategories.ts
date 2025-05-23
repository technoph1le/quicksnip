import { useMemo } from "react";

import { useAppContext } from "@contexts/AppContext";
import { CategoryType } from "@types";
import { API_BASE } from "@utils/consts";
import { getLanguageFileName } from "@utils/languageUtils";

import { useFetch } from "./useFetch";

export const useCategories = () => {
  const { language, subLanguage } = useAppContext();

  const languageSlug = useMemo(
    () => getLanguageFileName(language.name, subLanguage),
    [language.name, subLanguage]
  );

  const { data, loading, error } = useFetch<CategoryType[]>(
    `${API_BASE}/categories/${languageSlug}`
  );

  return { fetchedCategories: data || [], loading, error };
};
