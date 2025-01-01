import { highlighterStyles } from "@consts/highlighter-styles";
import { useAppContext } from "@contexts/AppContext";
import { SelectorOption } from "@types";

import Selector from "./Selector";

const HighlighterStyleSelector = () => {
  const { highlighterStyle, setHighlighterStyle } = useAppContext();

  const options = highlighterStyles.map((style) => ({
    name: style.name,
  }));

  const handleSelect = (option: SelectorOption) => {
    const selected = highlighterStyles.find(
      (style) => style.name === option.name
    );
    if (!selected) {
      return;
    }
    setHighlighterStyle(selected);
  };

  return (
    <Selector
      options={options}
      selectedOption={{ name: highlighterStyle.name }}
      handleSelect={handleSelect}
    />
  );
};

export default HighlighterStyleSelector;
