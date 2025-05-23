import { describe, it, expect } from "vitest";

import { isCorrectType } from "../src/utils/objectUtils";

describe(isCorrectType.name, () => {
  type TestType = {
    key1: string;
    key2: number;
    key3: boolean;
  };

  const keys: (keyof TestType)[] = ["key1", "key2", "key3"];

  it("should return true if all keys are present in the object", () => {
    const obj = { key1: "value", key2: 42, key3: true };
    expect(isCorrectType<TestType>(obj, keys)).toBe(true);
  });

  it("should return false if any key is missing from the object", () => {
    const obj = { key1: "value", key2: 42 };
    expect(isCorrectType<TestType>(obj, keys)).toBe(false);
  });

  it("should return false if the object is null", () => {
    const obj = null;
    expect(isCorrectType<TestType>(obj, keys)).toBe(false);
  });

  it("should return false if the object is not an object type", () => {
    expect(isCorrectType<TestType>("string", keys)).toBe(false);
    expect(isCorrectType<TestType>(42, keys)).toBe(false);
    expect(isCorrectType<TestType>(true, keys)).toBe(false);
  });

  it("should return true if the object has additional keys but includes all required keys", () => {
    const obj = { key1: "value", key2: 42, key3: true, extraKey: "extra" };
    expect(isCorrectType<TestType>(obj, keys)).toBe(true);
  });

  it("should return false if the keys array is empty and the object is not null", () => {
    const obj = { key1: "value", key2: 42 };
    expect(isCorrectType<TestType>(obj, [])).toBe(true);
  });

  it("should return true for an empty keys array, regardless of the object", () => {
    const obj = {};
    expect(isCorrectType<TestType>(obj, [])).toBe(true);
  });
});
