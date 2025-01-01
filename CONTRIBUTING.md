# Contributing to QuickSnip

Hey there! 👋 First off, thanks for taking the time to contribute! ❤️

You can contribute in two main ways:

- **Improving the code** (like fixing bugs or adding cool new features)
- **Adding new code snippets** (or improving the existing ones!)

---

## Improving the code

If you have a feature request or want to fix a bug, feel free to:

- [Open an Issue](https://github.com/dostonnabotov/quicksnip/issues) to let me know what’s up.
- [Send a pull request](https://github.com/dostonnabotov/quicksnip/pulls) with your changes.

---

## Adding Snippets

### Adding to an Existing Category

1. **Find the language file:**

Head over to the `/public/data` folder and locate the language file you need, like javascript.json or python.json

2. **Find the category:**

Look for the categoryName where your snippet belongs.

3. **Add your snippet** in this format:

```json
{
  "title": "Name of the snippet",
  "description": "A short explanation of what the snippet does",
  "code": [
    "your code goes here", 
    "  this is a newline with a space"
  ],
  "tags": ["tag1", "tag2", "tag3"],
  "author": "your_github_username"
}
```

Here’s an example for JavaScript:

```json
// javascript.json
[
  {
    "categoryName": "Date and Time",
    "snippets": [
      {
        "title": "Format Date",
        "description": "Formats a date in 'YYYY-MM-DD' format.",
        "code": [
          "const formatDate = (date) => date.toISOString().split('T')[0];",
          "",
          "// Usage:",
          "console.log(formatDate(new Date())); // Output: '2024-12-10'"
        ],
        "tags": ["javascript", "date", "format"],
        "author": "technoph1le"
      }
    ]
  }
]
```

### Adding a New Category

If your snippet doesn’t fit into any existing category, you can create a new one! Just make sure it’s unique and doesn’t overlap with others (e.g., don’t create separate categories for “Date” and “Time” when “Date and Time” works).

Use this format:

```json
[
  {
    "categoryName": "New Category Name",
    "snippets": [
      {
        "title": "Name of the snippet",
        "description": "A short explanation of what it does",
        "code": [
          "your code goes here", 
          "  this is a newline with a space"
        ],
        "tags": ["tag1", "tag2", "tag3"],
        "author": "your_github_username"
      }
    ]
  }
]
```

### Adding a New Language

Want to include a new programming language? Here's what to do:

1. **Create a new file:**

In the `/public/data` folder, create a file named after the language (e.g., `go.json`).

2. **Add categories and snippets:**

Follow the formats explained above.

3. **Update the `_index.json`:**

Add your new language like this:

```json
[
  {
    "lang": "Go",
    "icon": "/icons/go.svg"
  }
]
```

4. **Include an icon:**

Upload a logo for your language into the `/public/icons` folder. Make sure the filename matches the one you used in `_index.json`. Icons should be 50x50px in `.svg` format.

5. **Double-check your work:**

Test on your side and confirm if it works properly.

---

## Final Notes

Whether you’re fixing a tiny typo, writing a new snippet, or dreaming up big features, every bit counts! 🛠️

If you have any questions or need help, feel free to open an issue or tag me.

Happy coding! 💻✨
