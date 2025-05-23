export function raise(issue: string, snippet: string = ""): null {
  console.error(`${issue}${snippet ? ` in '${snippet}'` : ""}`);
  return null;
}
