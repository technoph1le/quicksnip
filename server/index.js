import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const dataDir = path.join(__dirname, "../public/consolidated/");

// Helper function to load JSON from file
const readJSON = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read", filePath, err);
    return null;
  }
};

// Get all languages
app.get("/languages", (req, res) => {
  const file = path.join(dataDir, "_index.json");
  const json = readJSON(file);
  if (!json) return res.status(500).json({ error: "Languages not found" });
  res.json(json);
});

// Get all categories for a given language
app.get("/categories/:language", (req, res) => {
  const { language } = req.params;
  const file = path.join(dataDir, `${language}.json`);
  const json = readJSON(file);
  if (!json) return res.status(404).json({ error: "Language file not found" });

  const categories = json.map((c) => c.name);
  res.json(categories);
});

// Get snippets for a language (and optional category)
app.get("/snippets/:language/:category", (req, res) => {
  const { language } = req.params;
  const { category = "all" } = req.query;

  const file = path.join(dataDir, `${language}.json`);
  const json = readJSON(file);
  if (!json) return res.status(404).json({ error: "Language file not found" });

  if (category === "all") {
    const allSnippets = json.flatMap((c) => c.snippets);
    return res.json(allSnippets);
  }

  const categoryData = json.find((c) => c.name === category);
  if (!categoryData)
    return res.status(404).json({ error: "Category not found" });

  res.json(categoryData.snippets);
});

app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
