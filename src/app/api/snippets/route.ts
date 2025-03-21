import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const snippetsPath = path.join(process.cwd(), "consolidated");
  const files = fs
    .readdirSync(snippetsPath)
    .filter((file) => file !== "_relationships.json"); // Exclude relationships.json;

  let allSnippets: any[] = [];

  for (const file of files) {
    const filePath = path.join(snippetsPath, file);
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    allSnippets = allSnippets.concat(data);
  }

  return NextResponse.json(allSnippets);
}
