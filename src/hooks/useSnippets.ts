import { useAppContext } from "@contexts/AppContext";
import { CategoryType } from "@types";
import { slugify } from "@utils/slugify";

import { useFetch } from "./useFetch";

export const useSnippets = () => {
  const { language, category } = useAppContext();
  const { data, loading, error } = useFetch<CategoryType[]>(
    `/consolidated/${slugify(language.name)}.json`
  );

  const fetchedSnippets = data
    ? data.find((item) => item.name === category)?.snippets
    : [];

  return { fetchedSnippets, loading, error };
};
