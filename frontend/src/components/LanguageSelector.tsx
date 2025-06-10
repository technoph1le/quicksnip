/**
 * Inspired by https://blog.logrocket.com/creating-custom-select-dropdown-css/
 */

import { useRef, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";
import { useKeyboardNavigation } from "@hooks/useKeyboardNavigation";
import { useLanguages } from "@hooks/useLanguages";
import { LanguageType } from "@types";
import { configureUserSelection } from "@utils/configureUserSelection";
import {
  getLanguageDisplayLogo,
  getLanguageDisplayName,
} from "@utils/languageUtils";
import { slugify } from "@utils/slugify";

import SubLanguageSelector from "./SubLanguageSelector";

const LanguageSelector = () => {
  const navigate = useNavigate();

  const { language, subLanguage, setSearchText } = useAppContext();
  const { fetchedLanguages, loading, error } = useLanguages();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openedLanguages, setOpenedLanguages] = useState<LanguageType[]>([]);

  const keyboardItems = useMemo(() => {
    return fetchedLanguages.flatMap((lang) =>
      openedLanguages.map((ol) => ol.name).includes(lang.name)
        ? [
            { languageName: lang.name },
            ...lang.subLanguages.map((sl) => ({
              languageName: lang.name,
              subLanguageName: sl.name,
            })),
          ]
        : [{ languageName: lang.name }]
    );
  }, [fetchedLanguages, openedLanguages]);

  const displayName = useMemo(
    () => getLanguageDisplayName(language.name, subLanguage),
    [language.name, subLanguage]
  );

  const displayLogo = useMemo(
    () => getLanguageDisplayLogo(language.name, subLanguage),
    [language.name, subLanguage]
  );

  const handleToggleSubLanguage = (name: LanguageType["name"]) => {
    const isAlreadyOpened = openedLanguages.some((lang) => lang.name === name);
    const openedLang = fetchedLanguages.find((lang) => lang.name === name);
    if (openedLang === undefined || openedLang.subLanguages.length === 0) {
      return;
    }

    if (!isAlreadyOpened) {
      setOpenedLanguages((prev) => [...prev, openedLang]);
    } else {
      setOpenedLanguages((prev) =>
        prev.filter((lang) => lang.name !== openedLang.name)
      );
    }
  };

  /**
   * When setting a new language we need to ensure that a category
   * has been set given this new language.
   * Ensure that the search text is cleared.
   */
  const handleSelect = async (selected: LanguageType) => {
    const {
      language: newLanguage,
      subLanguage: newSubLanguage,
      category: newCategory,
    } = await configureUserSelection({
      languageName: selected.name,
    });

    setSearchText("");
    const navigatePath =
      newSubLanguage === null
        ? `/${slugify(newLanguage.name)}/s/${slugify(newCategory)}`
        : `/${slugify(newLanguage.name)}/${slugify(newSubLanguage)}/${slugify(newCategory)}`;
    navigate(navigatePath);
    setIsOpen(false);
    setOpenedLanguages([]);
  };

  const afterSelect = () => {
    setIsOpen(false);
  };

  const handleSubLanguageSelect = async (
    selectedLanguageName: LanguageType["name"],
    selectedSubLanguageName:
      | LanguageType["subLanguages"][number]["name"]
      | undefined
  ) => {
    const {
      language: newLanguage,
      subLanguage: newSubLanguage,
      category: newCategory,
    } = await configureUserSelection({
      languageName: selectedLanguageName,
      subLanguageName: selectedSubLanguageName,
    });

    setSearchText("");
    const navigatePath =
      newSubLanguage === null
        ? `/${slugify(newLanguage.name)}/${slugify(newCategory)}`
        : `/${slugify(newLanguage.name)}/${slugify(newSubLanguage)}/${slugify(newCategory)}`;
    navigate(navigatePath);
    afterSelect();
  };

  const { focusedIndex, handleKeyDown, resetFocus, focusFirst } =
    useKeyboardNavigation({
      items: keyboardItems,
      isOpen,
      toggleDropdown: (l) => handleToggleSubLanguage(l),
      onSelect: (l, sl) => handleSubLanguageSelect(l, sl),
      onClose: () => setIsOpen(false),
    });

  const handleBlur = () => {
    setTimeout(() => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(document.activeElement)
      ) {
        setIsOpen(false);
      }
    }, 0);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => {
      if (!prev) setTimeout(focusFirst, 0);
      return !prev;
    });
  };

  useEffect(() => {
    if (!isOpen) {
      resetFocus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && focusedIndex >= 0) {
      const elements = Array.from(
        document.querySelectorAll(".selector__item")
      ) as HTMLElement[];
      const focusableElements = elements.filter(
        (el) => el.getAttribute("tabIndex") !== "-1"
      );
      const element = focusableElements[focusedIndex];
      element?.focus();
    }
  }, [isOpen, focusedIndex]);

  if (loading) {
    return <p>Loading languages...</p>;
  }

  if (error) {
    return <p>Error fetching languages: {error}</p>;
  }

  return (
    <div
      className={`selector ${isOpen ? "selector--open" : ""}`}
      ref={dropdownRef}
      onBlur={handleBlur}
    >
      <button
        className="selector__button"
        aria-label="select button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        <div className="selector__value">
          <img src={displayLogo} alt="" />
          <span>{displayName}</span>
        </div>
        <span className="selector__arrow" />
      </button>
      <ul
        className={`selector__dropdown ${isOpen ? "" : " hidden"}`}
        role="listbox"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {fetchedLanguages.map((lang, index) =>
          lang.subLanguages.length > 0 ? (
            <SubLanguageSelector
              key={lang.name}
              opened={openedLanguages.includes(lang)}
              parentLanguage={lang}
              onDropdownToggle={handleToggleSubLanguage}
              handleParentSelect={handleSelect}
              afterSelect={afterSelect}
            />
          ) : (
            <li
              key={lang.name}
              role="option"
              tabIndex={0}
              onClick={() => handleSelect(lang)}
              className={`selector__item ${
                language.name === lang.name ? "selected" : ""
              } ${focusedIndex === index ? "focused" : ""}`}
              aria-selected={language.name === lang.name}
            >
              <label>
                <img src={lang.icon} alt="" />
                <span>{lang.name}</span>
              </label>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default LanguageSelector;
