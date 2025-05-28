import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { FileType } from "@types";
import { slugify } from "@utils/slugify";

const env = process.env.NODE_ENV || "local"; // "production" or "local"
dotenv.config({ path: `.env.${env}` });

export const API_BASE = process.env.API_BASE;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const dataDir = path.join(__dirname, "data");

// Helper to load JSON from file
const readJSON = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read", filePath, err);
    return null;
  }
};

// Get all languages
app.get("/languages", (_req, res) => {
  const file = path.join(dataDir, "consolidated/_index.json");
  const json = readJSON(file);

  if (!json) {
    res.status(500).json({ error: "Languages not found" });
    return;
  }
  res.json(json);
  return;
});

// Get all categories for a given language
app.get("/categories/:language", (req, res) => {
  const { language } = req.params;
  const file = path.join(dataDir, `consolidated/${slugify(language)}.json`);
  const json = readJSON(file);

  if (!json) {
    res.status(404).json({ error: "Language file not found" });
    return;
  }

  const categoryNames = json.map((category: { name: string }) => category.name);
  res.json(categoryNames);
  return;
});

// Get snippets for a language (and optional category)
app.get("/snippets/:language/:category", (req, res) => {
  const { language, category } = req.params;

  const file = path.join(dataDir, `consolidated/${language}.json`);
  const json = readJSON(file);
  if (!json) {
    res.status(404).json({ error: "Language file not found" });
    return;
  }

  if (category === "all") {
    const allSnippets = json.flatMap((c: FileType) => c.snippets);
    res.json(allSnippets);
    return;
  }

  const categoryData = json.find(
    (c: FileType) => slugify(c.name) === slugify(category)
  );
  if (!categoryData) {
    res.status(404).json({ error: "Category not found" });
    return;
  }

  res.json(categoryData.snippets);
  return;
});

// Get icons from backend
app.use("/icons", express.static(path.join(dataDir, "/icons")));

app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
