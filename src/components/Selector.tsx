/**
 * Inspired by https://blog.logrocket.com/creating-custom-select-dropdown-css/
 */

import { FC, useEffect, useRef, useState } from "react";

import { useKeyboardNavigation } from "@hooks/useKeyboardNavigation";
import { SelectorOption } from "@types";

interface SelectorProps {
  options: Array<SelectorOption>;
  selectedOption: SelectorOption;
  handleSelect: (option: SelectorOption) => void;
}

const Selector: FC<SelectorProps> = (props) => {
  const { options, selectedOption, handleSelect } = props;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { focusedIndex, handleKeyDown, resetFocus, focusFirst } =
    useKeyboardNavigation({
      options,
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
          {selectedOption.icon && <img src={selectedOption.icon} alt="" />}
          <span>{selectedOption.name}</span>
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
          {options.map((item, index) => (
            <li
              key={item.name}
              role="option"
              tabIndex={-1}
              onClick={() => {
                handleSelect(item);
                setIsOpen(false);
              }}
              className={`selector__item ${
                selectedOption.name === item.name ? "selected" : ""
              } ${focusedIndex === index ? "focused" : ""}`}
              aria-selected={selectedOption.name === item.name}
            >
              <label>
                {item.icon && <img src={item.icon} alt="" />}
                <span>{item.name as string}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Selector;
