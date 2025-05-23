import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { slugify } from "./utils/slugify";

export const API_BASE = process.env.API_BASE || "http://localhost:5000";

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
    console.error("Failed to read", filePath);
    return null;
  }
};

// Get all languages
app.get("/languages", (req, res) => {
  const file = path.join(dataDir, "consolidated/_index.json");
  const json = readJSON(file);
  if (!json) return res.status(500).json({ error: "Languages not found" });
  res.json(json);
});

// Get all categories for a given language
app.get("/categories/:language", (req, res) => {
  const { language } = req.params;
  const file = path.join(dataDir, `consolidated/${slugify(language)}.json`);
  const json = readJSON(file);
  if (!json) return res.status(404).json({ error: "Language file not found" });

  const categories = json.map((c) => c.name);
  res.json(categories);
});

// Get snippets for a language (and optional category)
app.get("/snippets/:language/:category", (req, res) => {
  const { language, category } = req.params;

  const file = path.join(dataDir, `consolidated/${language}.json`);
  const json = readJSON(file);
  if (!json) return res.status(404).json({ error: "Language file not found" });

  if (category === "all") {
    const allSnippets = json.flatMap((c) => c.snippets);
    return res.json(allSnippets);
  }

  const categoryData = json.find((c) => slugify(c.name) === slugify(category));
  if (!categoryData)
    return res.status(404).json({ error: "Category not found" });

  res.json(categoryData.snippets);
});

// Get icons from backend
app.use("/icons", express.static(path.join(dataDir, "/icons")));

app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
