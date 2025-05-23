import { describe, beforeEach, afterEach, it, expect, vitest } from "vitest";

import { raise } from "../src/utils/raise";

describe(raise.name, () => {
  beforeEach(() => {
    vitest.spyOn(console, "error").mockImplementation(() => {}); // Mock console.error
  });

  afterEach(() => {
    vitest.restoreAllMocks(); // Restore console.error to its original state
  });

  it("should log the issue to the console and return null", () => {
    const issue = "An error occurred";
    const result = raise(issue);
    expect(console.error).toHaveBeenCalledWith(issue);
    expect(result).toBeNull();
  });

  it("should include the snippet in the log message if provided", () => {
    const issue = "An error occurred";
    const snippet = "mySnippet";
    const result = raise(issue, snippet);
    expect(console.error).toHaveBeenCalledWith(
      `An error occurred in 'mySnippet'`
    );
    expect(result).toBeNull();
  });

  it('should not include "in" if the snippet is not provided', () => {
    const issue = "An error occurred";
    const result = raise(issue, "");
    expect(console.error).toHaveBeenCalledWith("An error occurred");
    expect(result).toBeNull();
  });
});
