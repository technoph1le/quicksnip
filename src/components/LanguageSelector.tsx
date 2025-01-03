import { useRef, useEffect, useState } from "react";

import { useAppContext } from "@contexts/AppContext";
import { useKeyboardNavigation } from "@hooks/useKeyboardNavigation";
import { useLanguages } from "@hooks/useLanguages";
import { LanguageType } from "@types";

// Inspired by https://blog.logrocket.com/creating-custom-select-dropdown-css/

const LanguageSelector = () => {
  const { language, setLanguage } = useAppContext();
  const { fetchedLanguages, loading, error } = useLanguages();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selected: LanguageType) => {
    setLanguage(selected);
    setIsOpen(false);
  };

  const { focusedIndex, handleKeyDown, resetFocus, focusFirst } =
    useKeyboardNavigation({
      items: fetchedLanguages,
      isOpen,
      onSelect: handleSelect,
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
      const element = document.querySelector(
        `.selector__item:nth-child(${focusedIndex + 1})`
      ) as HTMLElement;
      element?.focus();
    }
  }, [isOpen, focusedIndex]);

  if (loading) return <p>Loading languages...</p>;
  if (error) return <p>Error fetching languages: {error}</p>;

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
          <img src={language.icon} alt="" />
          <span>{language.lang || "Select a language"}</span>
        </div>
        <span className="selector__arrow" />
      </button>
      {isOpen && (
        <ul
          className="selector__dropdown"
          role="listbox"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {fetchedLanguages.map((lang, index) => (
            <li
              key={lang.lang}
              role="option"
              tabIndex={-1}
              onClick={() => handleSelect(lang)}
              className={`selector__item ${
                language.lang === lang.lang ? "selected" : ""
              } ${focusedIndex === index ? "focused" : ""}`}
              aria-selected={language.lang === lang.lang}
            >
              <label>
                <img src={lang.icon} alt="" />
                <span>{lang.lang}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
