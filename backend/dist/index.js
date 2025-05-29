// index.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

// utils/slugify.ts
function slugify(string, separator = "-") {
  return string.toString().toLowerCase().trim().replace(/\s+/g, separator).replace(/[^\w-]+/g, "").replace(/_/g, separator).replace(/--+/g, separator).replace(/-$/g, "");
}

// index.ts
var env = process.env.NODE_ENV || "local";
dotenv.config({ path: `.env.${env}` });
var API_BASE = process.env.API_BASE;
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var PORT = process.env.PORT || 5e3;
app.use(cors());
var dataDir = path.join(__dirname, "data");
var readJSON = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read", filePath, err);
    return null;
  }
};
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
app.get("/categories/:language", (req, res) => {
  const { language } = req.params;
  const file = path.join(dataDir, `consolidated/${slugify(language)}.json`);
  const json = readJSON(file);
  if (!json) {
    res.status(404).json({ error: "Language file not found" });
    return;
  }
  const categoryNames = json.map((category) => category.name);
  res.json(categoryNames);
  return;
});
app.get("/snippets/:language/:category", (req, res) => {
  const { language, category } = req.params;
  const file = path.join(dataDir, `consolidated/${language}.json`);
  const json = readJSON(file);
  if (!json) {
    res.status(404).json({ error: "Language file not found" });
    return;
  }
  if (category === "all") {
    const allSnippets = json.flatMap((c) => c.snippets);
    res.json(allSnippets);
    return;
  }
  const categoryData = json.find(
    (c) => slugify(c.name) === slugify(category)
  );
  if (!categoryData) {
    res.status(404).json({ error: "Category not found" });
    return;
  }
  res.json(categoryData.snippets);
  return;
});
app.use("/icons", express.static(path.join(dataDir, "/icons")));
app.listen(PORT, () => {
  console.log(`\u2705 API running on http://localhost:${PORT}`);
});
export {
  API_BASE
};
