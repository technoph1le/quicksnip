import { useAppContext } from "@contexts/AppContext";
import { CategoryType } from "@types";
import { slugify } from "@utils/slugify";

import { useFetch } from "./useFetch";
import { useMemo } from "react";

export const useSnippets = () => {
  const { language, category } = useAppContext();
  const { data, loading, error } = useFetch<CategoryType[]>(
    `/consolidated/${language.mainLanguage ? `${slugify(language.mainLanguage.name)}--${slugify(language.name)}` : slugify(language.name)}.json`
  );

  const fetchedSnippets = useMemo(() => {
    return data ? data.find((item) => item.name === category)?.snippets : [];
  }, [data, category]);

  return { fetchedSnippets, loading, error };
};
