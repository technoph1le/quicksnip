import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  const snippetsPath = path.join(process.cwd(), "consolidated");
  const files = fs
    .readdirSync(snippetsPath)
    .filter((file) => file !== "relationships.json");

  let matchingSnippets: any[] = [];

  for (const file of files) {
    const filePath = path.join(snippetsPath, file);
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    for (const category of data.categories) {
      for (const snippet of category.snippets) {
        if (
          snippet.title.toLowerCase().includes(query) ||
          snippet.description.toLowerCase().includes(query) ||
          snippet.tags.some((tag: string) =>
            tag.toLowerCase().includes(query)
          ) ||
          snippet.code.toLowerCase().includes(query)
        ) {
          matchingSnippets.push({
            language: data.languageName,
            category: category.categoryName,
            ...snippet,
          });
        }
      }
    }
  }

  return NextResponse.json(matchingSnippets);
}
