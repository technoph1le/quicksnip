import { useMemo } from "react";

import { useAppContext } from "@contexts/AppContext";
import { CategoryType } from "@types";
import { slugify } from "@utils/slugify";

import { useFetch } from "./useFetch";

export const useCategories = () => {
  const { language } = useAppContext();
  const { data, loading, error } = useFetch<CategoryType[]>(
    `/consolidated/${slugify(language.name)}.json`
  );

  const fetchedCategories = useMemo(() => {
    return data ? data.map((item) => item.name) : [];
  }, [data]);

  return { fetchedCategories, loading, error };
};
