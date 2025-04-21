import { useFetch } from "./useFetch";

type LanguageInfo = {
  languageName: string;
  languageIcon: string;
};

export const useLanguages = () => {
  const { data, loading, error } = useFetch<any[]>("/api/snippets");

  // Extract unique languages from the fetched snippets
  const fetchedLanguages: LanguageInfo[] = data
    ? Array.from(
        new Map(
          data.map(({ languageName, languageIcon }) => [
            languageName,
            { languageName, languageIcon },
          ])
        ).values()
      )
    : [];

  return { fetchedLanguages, loading, error };
};
