import { useRef, useEffect, useState } from "react";

import { highlighterStyles } from "@consts/highlighter-styles";
import { useAppContext } from "@contexts/AppContext";
import { useKeyboardNavigation } from "@hooks/useKeyboardNavigation";
import { HighlighterStyleType } from "@types";

const HighlighterStyleSelector = () => {
  const { highlighterStyle, setHighlighterStyle } = useAppContext();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selected: HighlighterStyleType) => {
    setHighlighterStyle(selected);
    setIsOpen(false);
  };

  const { focusedIndex, handleKeyDown, resetFocus, focusFirst } =
    useKeyboardNavigation({
      items: highlighterStyles,
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
          <span>{highlighterStyle.name}</span>
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
          {highlighterStyles.map((hs, index) => (
            <li
              key={hs.name}
              role="option"
              tabIndex={-1}
              onClick={() => handleSelect(hs)}
              className={`selector__item ${
                highlighterStyle.name === hs.name ? "selected" : ""
              } ${focusedIndex === index ? "focused" : ""}`}
              aria-selected={highlighterStyle.name === hs.name}
            >
              <label>
                <span>{hs.name}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HighlighterStyleSelector;
