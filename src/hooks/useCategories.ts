import { useFetch } from "./useFetch";
import { useAppContext } from "../contexts/AppContext";
import { SnippetType } from "../types";
import slugify from "../utils/slugify";
import { useMemo } from "react";

type CategoryData = {
  categoryName: string;
  snippets: SnippetType[];
};

export const useCategories = () => {
  const { language } = useAppContext();
  const { data, loading, error } = useFetch<CategoryData[]>(
    `/data/${slugify(language.lang)}.json`
  );

  const fetchedCategories = useMemo(() => {
    const categories = data ? data.map((item) => item.categoryName) : [];
    return ["All snippets", ...categories];
  }, [data]);

  return { fetchedCategories, loading, error };
};
