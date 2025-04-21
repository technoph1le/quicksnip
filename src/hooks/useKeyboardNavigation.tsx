import { useState } from "react";

interface UseKeyboardNavigationProps {
  items: { languageName: string; subLanguageName?: string }[];
  isOpen: boolean;
  toggleDropdown: (languageName: string) => void;
  onSelect: (languageName: string, subLanguageName?: string) => void;
  onClose: () => void;
}

const keyboardEventKeys = {
  arrowDown: "ArrowDown",
  arrowUp: "ArrowUp",
  arrowRight: "ArrowRight",
  enter: "Enter",
  escape: "Escape",
} as const;

type KeyboardEventKeys =
  (typeof keyboardEventKeys)[keyof typeof keyboardEventKeys];

export const useKeyboardNavigation = ({
  items,
  isOpen,
  toggleDropdown,
  onSelect,
  onClose,
}: UseKeyboardNavigationProps) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) {
      return;
    }

    const key = event.key as KeyboardEventKeys;

    if (Object.values(keyboardEventKeys).includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowDown":
          setFocusedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
          break;
        case "ArrowUp":
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
          break;
        case "ArrowRight":
          if (focusedIndex >= 0) {
            const selectedItem = items[focusedIndex];
            toggleDropdown(selectedItem.languageName);
          }
          break;
        case "Enter":
          if (focusedIndex >= 0) {
            const selectedItem = items[focusedIndex];
            onSelect(selectedItem.languageName, selectedItem.subLanguageName);
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    }
  };

  const resetFocus = () => setFocusedIndex(-1);
  const focusFirst = () => setFocusedIndex(0);

  return {
    focusedIndex,
    handleKeyDown,
    resetFocus,
    focusFirst,
  };
};
