import { useMemo } from "react";

import { useAppContext } from "@/contexts/AppContext";
import { CategoriesType } from "@/types";

import { useFetch } from "./useFetch";

export const useCategories = () => {
  const { selectedLanguage } = useAppContext();

  const { data, loading, error } = useFetch<CategoriesType>(
    `/api/snippets/${selectedLanguage}`
  );

  const fetchedCategories = useMemo(() => {
    return data ? data.categories.map((item) => item.categoryName) : [];
  }, [data]);

  return { fetchedCategories, loading, error };
};
