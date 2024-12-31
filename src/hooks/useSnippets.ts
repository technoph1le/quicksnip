import slugify from "../utils/slugify";
import { useFetch } from "./useFetch";
import { useAppContext } from "../contexts/AppContext";
import { SnippetType } from "../types";

type CategoryData = {
  categoryName: string;
  snippets: SnippetType[];
};

const getSnippetsFromData = (
  data: CategoryData[] | null,
  category: string
): SnippetType[] => {
  if (!data?.length) {
    return [];
  }

  if (category === "All snippets") {
    return data.flatMap((item) => item.snippets);
  }

  const categoryData = data.find((item) => item.categoryName === category);
  return categoryData?.snippets ?? [];
};

export const useSnippets = () => {
  const { language, category } = useAppContext();
  const endpoint = `/data/${slugify(language.lang)}.json`;
  const { data, loading, error } = useFetch<CategoryData[]>(endpoint);

  const fetchedSnippets = getSnippetsFromData(data, category);

  return { fetchedSnippets, loading, error };
};
