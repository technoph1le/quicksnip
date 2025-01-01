import { useMemo } from "react";

import { useAppContext } from "@contexts/AppContext";
import { useLanguages } from "@hooks/useLanguages";
import { SelectorOption } from "@types";

import Selector from "./Selector";

const LanguageSelector = () => {
  const { language, toggleLanguage } = useAppContext();
  const { fetchedLanguages, loading, error } = useLanguages();

  const options = useMemo(
    () =>
      fetchedLanguages.map((item) => ({
        name: item.lang,
        icon: item.icon,
      })),
    [fetchedLanguages]
  );

  const handleSelect = (option: SelectorOption) => {
    const selected = fetchedLanguages.find((lang) => lang.lang === option.name);
    if (!selected) {
      return;
    }
    toggleLanguage(selected);
  };

  if (loading) {
    return <p>Loading languages...</p>;
  }

  if (error) {
    return <p>Error fetching languages: {error}</p>;
  }

  return (
    <Selector
      options={options}
      selectedOption={{ name: language.lang, icon: language.icon }}
      handleSelect={handleSelect}
    />
  );
};

export default LanguageSelector;
