import { useEffect } from "react";

const handleEscape = (event: { key: string }, onEscapeEvent: () => void) => {
  if (event.key === "Escape") onEscapeEvent();
};

export const useEscapeKey = (onEscapeEvent: () => void) => {
  useEffect(() => {
    const handleEscapeEvent = (event: { key: string }) => handleEscape(event, onEscapeEvent);
    window.addEventListener("keydown", handleEscapeEvent);

    return () => {
      window.removeEventListener("keydown", handleEscapeEvent);
    };
  }, [onEscapeEvent]);
};
