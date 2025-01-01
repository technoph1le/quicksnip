import { useAppContext } from "../contexts/AppContext";
import { useLanguages } from "../hooks/useLanguages";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const LanguageSelector = () => {
  const { language, setLanguage } = useAppContext();
  const { fetchedLanguages, loading, error } = useLanguages();

  if (loading) return <p>Loading languages...</p>;
  if (error) return <p>Error fetching languages: {error}</p>;

  return (
    <div className="relative">
      <Select
        onValueChange={(value) => {
          const selectedLanguage = fetchedLanguages.find((lang) => lang.lang === value);
          if (selectedLanguage) {
            setLanguage(selectedLanguage);
          }
        }}
      >
        <SelectTrigger className="selector__button w-full h-[52px] flex items-center justify-between gap-2">
          <div className="selector__value flex items-center gap-2">
            {language.icon && <img src={language.icon} alt="" className="w-5 h-5" />}
            <span>{language.lang || "Select a language"}</span>
          </div>
        </SelectTrigger>
        <SelectContent className="bg-[var(--clr-bg-secondary)] border-[var(--clr-border-primary)]">
          <SelectGroup>
            {fetchedLanguages.map((lang) => (
              <SelectItem
                key={lang.lang}
                value={lang.lang}
                className={`selector__item data-[state=checked]:bg-[var(--clr-accent)] ${
                  lang.lang === language.lang ? "bg-[var(--clr-accent)]" : ""
                }`}
              >
                <label className="flex items-center">
                  <img src={lang.icon} alt="" />
                  <span>{lang.lang}</span>
                </label>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
