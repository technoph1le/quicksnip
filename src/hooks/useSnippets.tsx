import { useMemo } from "react";

import { useAppContext } from "@/contexts/AppContext";
import { CategoryType, SnippetType } from "@/types";
import { defaultCategoryName } from "@/utils/consts";
import { QueryParams } from "@/utils/enums";
import { slugify } from "@/utils/slugify";

import { useFetch } from "./useFetch";
import { useSearchParams } from "next/navigation";

export const useSnippets = () => {
  const searchParams = useSearchParams();

  const { selectedLanguage, selectedCategory } = useAppContext();

  const { data, loading, error } = useFetch<CategoryType[]>(
    `/api/snippets/${slugify(selectedLanguage.name)}/${slugify(
      selectedCategory.categoryName
    )}`
  );

  const fetchedSnippets = useMemo(() => {
    if (!data) return [];

    const isDefaultCategory =
      slugify(selectedCategory.categoryName) ===
      slugify(defaultCategoryName.categoryName);

    // If the category is the default category, return all snippets for the given language.
    const snippets = isDefaultCategory
      ? data.flatMap((item) => item.snippets)
      : data.find((item) => item.categoryName === selectedCategory.categoryName)
          ?.snippets ?? [];

    if (!searchParams.has(QueryParams.SEARCH)) {
      return snippets;
    }

    const searchTerm = (
      searchParams.get(QueryParams.SEARCH) || ""
    ).toLowerCase();

    return (snippets as SnippetType[]).filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  }, [data, selectedCategory.categoryName, searchParams]);

  return { fetchedSnippets, loading, error };
};
