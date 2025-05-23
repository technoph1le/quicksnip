import { describe, it, expect } from "vitest";

import { defaultSlugifiedSubLanguageName } from "../src/utils/consts";
import {
  getLanguageDisplayName,
  getLanguageDisplayLogo,
  getLanguageFileName,
} from "../src/utils/languageUtils";

describe(getLanguageDisplayName.name, () => {
  it("should return the upper cased subLanguage if it is not the default", () => {
    const result = getLanguageDisplayName("JAVASCRIPT", "React");
    expect(result).toBe("REACT");
  });

  it("should return the language name if subLanguage is the default", () => {
    const result = getLanguageDisplayName(
      "JAVASCRIPT",
      defaultSlugifiedSubLanguageName
    );
    expect(result).toBe("JAVASCRIPT");
  });
});

describe(getLanguageDisplayLogo.name, () => {
  it("should return a concatenation of the language and subLanguage if subLanguage is not the default", () => {
    const result = getLanguageDisplayLogo("JAVASCRIPT", "React");
    expect(result).toBe("/icons/javascript--react.svg");
  });

  it("should return the language name only if subLanguage is the default", () => {
    const result = getLanguageDisplayLogo(
      "JAVASCRIPT",
      defaultSlugifiedSubLanguageName
    );
    expect(result).toBe("/icons/javascript.svg");
  });
});

describe(getLanguageFileName.name, () => {
  it("should return a concatenation of the language and subLanguage if subLanguage is not the default", () => {
    const result = getLanguageFileName("JAVASCRIPT", "React");
    expect(result).toBe("/consolidated/javascript--react.json");
  });

  it("should return the language name only if subLanguage is the default", () => {
    const result = getLanguageFileName(
      "JAVASCRIPT",
      defaultSlugifiedSubLanguageName
    );
    expect(result).toBe("/consolidated/javascript.json");
  });
});
