import { useNavigate } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";
import { LanguageType } from "@types";
import { configureUserSelection } from "@utils/configureUserSelection";
import { defaultSubLanguageName } from "@utils/consts";
import { slugify } from "@utils/slugify";

type SubLanguageSelectorProps = {
  opened: boolean;
  parentLanguage: LanguageType;
  onDropdownToggle: (_: LanguageType["name"]) => void;
  handleParentSelect: (_: LanguageType) => void;
  afterSelect: () => void;
};

const SubLanguageSelector = ({
  opened,
  parentLanguage,
  handleParentSelect,
  afterSelect,
  onDropdownToggle,
}: SubLanguageSelectorProps) => {
  const navigate = useNavigate();

  const { language, subLanguage, setSearchText } = useAppContext();

  const handleSubLanguageSelect =
    (selected: LanguageType["subLanguages"][number]) => async () => {
      const {
        language: newLanguage,
        subLanguage: newSubLanguage,
        category: newCategory,
      } = await configureUserSelection({
        languageName: parentLanguage.name,
        subLanguageName: selected.name,
      });

      setSearchText("");
      const navigatePath =
        newSubLanguage === null
          ? `/${slugify(newLanguage.name)}/s/${slugify(newCategory)}`
          : `/${slugify(newLanguage.name)}/${slugify(newSubLanguage)}/${slugify(newCategory)}`;
      navigate(navigatePath);
      afterSelect();
    };

  return (
    <>
      <li
        role="option"
        tabIndex={0}
        className={`selector__item ${
          subLanguage === defaultSubLanguageName &&
          language.name === parentLanguage.name
            ? "selected"
            : ""
        }`}
        aria-selected={
          subLanguage === defaultSubLanguageName &&
          language.name === parentLanguage.name
        }
        onClick={() => handleParentSelect(parentLanguage)}
      >
        <label>
          <img src={parentLanguage.icon} alt={parentLanguage.name} />
          <span>{parentLanguage.name}</span>
          <button
            className="sublanguage__button"
            tabIndex={-1}
            aria-expanded={opened}
            aria-haspopup="listbox"
            onClick={(e) => {
              e.stopPropagation();
              onDropdownToggle(parentLanguage.name);
            }}
          >
            <span className="sublanguage__arrow" />
          </button>
        </label>
      </li>

      {parentLanguage.subLanguages.map((sl) => {
        const isSelected = subLanguage
          ? slugify(subLanguage) === slugify(sl.name)
          : false;

        return (
          <li
            key={sl.name}
            role="option"
            tabIndex={opened ? 0 : -1}
            aria-disabled={!opened}
            className={`selector__item sublanguage__item ${opened ? "" : "hidden"} ${
              isSelected ? "selected" : ""
            }`}
            aria-selected={isSelected}
            onClick={handleSubLanguageSelect(sl)}
          >
            <label>
              <img src={sl.icon} alt={sl.name} />
              <span>{sl.name}</span>
            </label>
          </li>
        );
      })}
    </>
  );
};

export default SubLanguageSelector;
