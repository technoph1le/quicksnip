import { useAppContext } from "@contexts/AppContext";
import { SnippetType } from "@types";
import { slugify } from "@utils/slugify";

import { useFetch } from "./useFetch";

type CategoryData = {
  categoryName: string;
  snippets: SnippetType[];
};

export const useSnippets = () => {
  const { language, category } = useAppContext();
  const { data, loading, error } = useFetch<CategoryData[]>(
    `/consolidated/${slugify(language.lang)}.json`
  );

  const fetchedSnippets = data
    ? data.find((item) => item.categoryName === category)?.snippets
    : [];

  return { fetchedSnippets, loading, error };
};
