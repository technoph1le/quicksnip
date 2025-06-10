import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

// import { useAppContext } from "@contexts/AppContext";
import { SnippetType } from "@types";
import { API_BASE, defaultCategoryName } from "@utils/consts";
import { QueryParams } from "@utils/enums";
import { getLanguageFileName } from "@utils/languageUtils";
import { slugify } from "@utils/slugify";

import { useFetch } from "./useFetch";

export const useSnippets = () => {
  const [searchParams] = useSearchParams();
  const {
    languageName = "",
    subLanguageName = "",
    categoryName = "",
  } = useParams();

  const languageSlug = useMemo(
    () => getLanguageFileName(languageName, subLanguageName),
    [languageName, subLanguageName]
  );

  const selectedCategory = useMemo(() => {
    return slugify(categoryName) === slugify(defaultCategoryName)
      ? "all"
      : categoryName;
  }, [categoryName]);

  const { data, loading, error } = useFetch<SnippetType[]>(
    `${API_BASE}/snippets/${languageSlug}/${selectedCategory}`
  );
  const search = (searchParams.get(QueryParams.SEARCH) || "").toLowerCase();

  console.log(`${API_BASE}/snippets/${languageSlug}/${selectedCategory}`);

  const fetchedSnippets = useMemo(() => {
    if (!data) return [];
    if (!search) return data;

    return data.filter((item) => {
      return (
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.tags.some((tag) => tag.toLowerCase().includes(search))
      );
    });
  }, [data, search]);

  return { fetchedSnippets, loading, error };
};
