import { useAppContext } from "@contexts/AppContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <button onClick={toggleTheme} className="button" aria-label="Toggle theme">
      {theme === "dark" ? "🌞" : "🌚"}
    </button>
  );
};

export default ThemeToggle;
