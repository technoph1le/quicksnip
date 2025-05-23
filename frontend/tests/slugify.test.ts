import { describe, it, expect } from "vitest";

import { reverseSlugify, slugify } from "../src/utils/slugify";

describe(slugify.name, () => {
  it("should convert a string to lowercase and replace spaces with dashes", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("should trim whitespace from the beginning and end of the string", () => {
    expect(slugify("  Trim This  ")).toBe("trim-this");
  });

  it("should remove non-word characters", () => {
    expect(slugify("Special!@# Characters$%^&*()")).toBe("special-characters");
  });

  it("should replace underscores with dashes", () => {
    expect(slugify("underscore_example")).toBe("underscore-example");
  });

  it("should collapse multiple dashes into a single dash", () => {
    expect(slugify("Multiple   ---   Dashes")).toBe("multiple-dashes");
  });

  it("should remove trailing dashes", () => {
    expect(slugify("Trailing Dash-")).toBe("trailing-dash");
  });

  it("should handle empty strings correctly", () => {
    expect(slugify("")).toBe("");
  });

  it("should use a custom separator if provided", () => {
    expect(slugify("Custom Separator Example", "_")).toBe(
      "custom_separator_example"
    );
  });

  it("should work with numbers in the string", () => {
    expect(slugify("123 Number Test")).toBe("123-number-test");
  });

  it("should handle strings with only non-word characters", () => {
    expect(slugify("!@#$%^&*()_+=")).toBe("");
  });

  it("should handle strings with consecutive underscores and spaces", () => {
    expect(slugify("__Consecutive   ___ Spaces___")).toBe(
      "-consecutive-spaces"
    );
  });
});

describe(reverseSlugify.name, () => {
  it("should convert a slugified string back to a human-readable string", () => {
    expect(reverseSlugify("hello-world")).toBe("Hello World");
  });

  it("should handle strings with custom separators", () => {
    expect(reverseSlugify("custom_separator_example", "_")).toBe(
      "Custom Separator Example"
    );
  });

  it("should handle strings with multiple consecutive separators", () => {
    expect(reverseSlugify("multiple---dashes")).toBe("Multiple   Dashes");
  });

  it("should handle empty strings correctly", () => {
    expect(reverseSlugify("")).toBe("");
  });

  it("should handle strings with a single word", () => {
    expect(reverseSlugify("single")).toBe("Single");
  });

  it("should handle strings with trailing separators", () => {
    expect(reverseSlugify("trailing-dash-")).toBe("Trailing Dash");
  });

  it("should handle strings with numbers and separators", () => {
    expect(reverseSlugify("123-number-test")).toBe("123 Number Test");
  });

  it("should handle strings with only separators", () => {
    expect(reverseSlugify("---", "-")).toBe("");
  });
});
