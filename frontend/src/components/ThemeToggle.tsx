import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // if the theme isn't set, use the user's system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="button" aria-label="Toggle theme">
      {theme === "dark" ? "🌞" : "🌚"}
    </button>
  );
};

export default ThemeToggle;
