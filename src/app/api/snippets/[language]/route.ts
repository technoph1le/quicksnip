import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { slugify } from "@/utils/slugify";

export async function GET(
  req: Request,
  context: { params: { language: string } }
) {
  const { language } = context.params;
  const filePath = path.join(
    process.cwd(),
    "consolidated",
    `${slugify(language)}.json`
  );

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Language not found" }, { status: 404 });
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return NextResponse.json(data);
}
