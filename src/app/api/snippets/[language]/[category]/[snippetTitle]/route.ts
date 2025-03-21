import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { slugify } from "@/utils/slugify";

export async function GET(
  req: Request,
  {
    params,
  }: { params: { language: string; category: string; snippetTitle: string } }
) {
  const { language, category, snippetTitle } = params;
  const filePath = path.join(
    process.cwd(),
    "consolidated",
    `${slugify(language)}.json`
  );

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Language not found" }, { status: 404 });
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const categoryData = data.categories.find(
    (cat: any) => slugify(cat.categoryName) === slugify(category)
  );

  if (!categoryData) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  const snippet = categoryData.snippets.find(
    (snip: any) => slugify(snip.title) === slugify(snippetTitle)
  );

  if (!snippet) {
    return NextResponse.json({ error: "Snippet not found" }, { status: 404 });
  }

  return NextResponse.json(snippet);
}
