import { describe, it, expect, vi, beforeEach } from "vitest";

import { CategoryType, LanguageType } from "../src/types";
import { configureUserSelection } from "../src/utils/configureUserSelection";
import { defaultCategoryName, defaultLanguage } from "../src/utils/consts";
import { slugify } from "../src/utils/slugify";

vi.mock("../src/utils/slugify");

describe("configureUserSelection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockFetch = (urlResponses: Record<string, unknown>) => {
    global.fetch = vi.fn(async (url) => {
      const response = urlResponses[url as string];
      if (response instanceof Error) {
        throw response;
      }
      return {
        json: async () => response,
      };
    }) as unknown as typeof fetch;
  };

  it("should return default language and category if no arguments are provided", async () => {
    mockFetch({
      "/consolidated/_index.json": [],
    });

    const result = await configureUserSelection({
      languageName: undefined,
      categoryName: undefined,
    });

    expect(result).toEqual({
      language: defaultLanguage,
      category: defaultCategoryName,
    });

    expect(fetch).toHaveBeenCalledWith("/consolidated/_index.json");
  });

  it("should match the language and default to the first category if categoryName is undefined", async () => {
    const mockLanguages: LanguageType[] = [
      {
        name: "JavaScript",
        icon: "js-icon",
        subLanguages: [],
      },
      {
        name: "Python",
        icon: "python-icon",
        subLanguages: [],
      },
    ];
    const mockCategories: CategoryType[] = ["Basics", "Advanced"];

    mockFetch({
      "/consolidated/_index.json": mockLanguages,
      "/consolidated/javascript.json": mockCategories,
    });

    vi.mocked(slugify).mockImplementation((str) => str.toLowerCase());

    const result = await configureUserSelection({
      languageName: "JavaScript",
      categoryName: undefined,
    });

    expect(result).toEqual({
      language: mockLanguages[0],
      category: defaultCategoryName,
    });

    expect(slugify).toHaveBeenCalledWith("JavaScript");
    expect(fetch).toHaveBeenCalledWith("/consolidated/_index.json");
    expect(fetch).toHaveBeenCalledWith("/consolidated/javascript.json");
  });

  it("should match the language and specific category if both arguments are provided", async () => {
    const mockLanguages: LanguageType[] = [
      {
        name: "JavaScript",
        icon: "js-icon",
        subLanguages: [],
      },
      {
        name: "Python",
        icon: "python-icon",
        subLanguages: [],
      },
    ];
    const mockCategories: CategoryType[] = ["Basics", "Advanced"];

    mockFetch({
      "/consolidated/_index.json": mockLanguages,
      "/consolidated/javascript.json": mockCategories,
    });

    vi.mocked(slugify).mockImplementation((str) => str.toLowerCase());

    const result = await configureUserSelection({
      languageName: "JavaScript",
      categoryName: "Advanced",
    });

    expect(result).toEqual({
      language: mockLanguages[0],
      category: mockCategories[1],
    });

    expect(slugify).toHaveBeenCalledWith("JavaScript");
    expect(slugify).toHaveBeenCalledWith("Advanced");
    expect(fetch).toHaveBeenCalledWith("/consolidated/_index.json");
    expect(fetch).toHaveBeenCalledWith("/consolidated/javascript.json");
  });

  it("should return default category if category fetch fails", async () => {
    const mockLanguages: LanguageType[] = [
      {
        name: "JavaScript",
        icon: "js-icon",
        subLanguages: [],
      },
      {
        name: "Python",
        icon: "python-icon",
        subLanguages: [],
      },
    ];

    mockFetch({
      "/consolidated/_index.json": mockLanguages,
      "/consolidated/javascript.json": new Error("Network error"),
    });

    vi.mocked(slugify).mockImplementation((str) => str.toLowerCase());

    const result = await configureUserSelection({
      languageName: "JavaScript",
      categoryName: undefined,
    });

    expect(result).toEqual({
      language: mockLanguages[0],
      category: defaultCategoryName,
    });

    expect(slugify).toHaveBeenCalledWith("JavaScript");
    expect(fetch).toHaveBeenCalledWith("/consolidated/_index.json");
    expect(fetch).toHaveBeenCalledWith("/consolidated/javascript.json");
  });
});
