import { useEffect } from "react";

export const useEscapeKey = (onEscapeEvent: () => void) => {
  useEffect(() => {
    const handleEscape = (event: { key: string }) => {
      if (event.key === "Escape") onEscapeEvent();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onEscapeEvent]);
};
