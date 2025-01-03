import { useState } from "react";

import { LanguageType } from "@types";

interface UseKeyboardNavigationProps {
  items: LanguageType[];
  isOpen: boolean;
  onSelect: (item: LanguageType) => void;
  onClose: () => void;
}

export const useKeyboardNavigation = ({
  items,
  isOpen,
  onSelect,
  onClose,
}: UseKeyboardNavigationProps) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
        break;
      case "Enter":
        event.preventDefault();
        if (focusedIndex >= 0) {
          onSelect(items[focusedIndex]);
        }
        break;
      case "Escape":
        event.preventDefault();
        onClose();
        break;
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
