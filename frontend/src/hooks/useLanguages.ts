import { LanguageType } from "@types";
import { API_BASE } from "@utils/consts";

import { useFetch } from "./useFetch";

export const useLanguages = () => {
  const { data, loading, error } = useFetch<LanguageType[]>(
    `${API_BASE}/languages`
  );

  return { fetchedLanguages: data || [], loading, error };
};
