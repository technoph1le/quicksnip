# Contributing to QuickSnip

Hey there! 👋 First off, thanks for taking the time to contribute! ❤️

You can contribute in two main ways:

- **Improving the code** (like fixing bugs or adding cool new features)
- **Adding new code snippets** (or improving the existing ones!)

---

## Improving the code

If you have a feature request or want to fix a bug, feel free to:

- [Open an Issue](https://github.com/dostonnabotov/quicksnip/issues) to let us know what’s up.
- [Send a Pull Request](https://github.com/dostonnabotov/quicksnip/pulls) with your changes.

---

## Adding Snippets

### Adding a New Snippet

To add a new code snippet:

1. **Navigate to the relevant folder:**
  
    - Go to the `/snippets` folder in the root directory.
    - Locate the folder for the programming language of your snippet, such as `javascript` or `python`.

2. **Choose the correct category:**

    - Within the language folder, find the relevant category folder for your snippet.
    - If no suitable category exists, refer to [Adding a New Category](#adding-a-new-category).

3. **Create a markdown file:**

    - Create a new file with a `.md` extension.
    - Name the file appropriately, keeping it descriptive and concise.

4. **Add your snippet:**

    - Use the following format to structure your snippet:

````md
---
title: Name of the snippet
description: A short explanation of what the snippet does
tags: tag1, tag2, tag3
author: your-github-username
---

```lang
// Your code here
```
````

Here’s an example for JavaScript:

````md
---
title: Format Date
description: Formats a date in 'YYYY-MM-DD' format.
author: dostonnabotov
tags: javascript,date,format
---

```js
const formatDate = (date) => date.toISOString().split('T')[0];

// Usage:
console.log(formatDate(new Date())); // Output: '2024-12-10'
```
````

5. **Use syntax highlighting:**
    - Enclose your code with triple backticks (```).
    - Specify the language after the first set of backticks for syntax highlighting.

6. **Test your snippet:**
   - Ensure your code runs as expected. \
        To test that your snippets are formatted correctly use the `snippets:check` script:
        ```
        $ npm run snippets:check
        ```
        It will return nothing if they are well formatted, otherwise it will tell you what the error is.

        ---
        To preview the snippets, you need to consolidate them, use the `snippets:consolidate` script:
        ```
        $ npm run snippets:consolidate
        ```
        It will update the snippets in the `/public` folder, making them available to the frontend.

Expected file structure:

```md
/snippets
  |- language
    |- category-name
      |- your-snippet-here.md
```

> Please do **NOT** add or edit anything in `/public` folder. It will be used for consolidating snippets.

### Editing a Existing Snippet

If you’d like to refine or improve an existing snippet:

1. **Add a `contributors` field:**

    - Include your GitHub username under the `contributors` field in the metadata section.

````md
---
title: Name of the snippet
description: A short explanation of what the snippet does
tags: tag1, tag2, tag3
author: original-author
contributors: your-github-username
---

```
Updated code here
```
````

2. **Credit all contributors:**

    - If contributors already exist, add your username separated by a comma

```md
contributors: contributor1, contributor2, your-github-username
```

3. **Document changes:**

    - Clearly indicate what you updated and why in your pull request description.

> We want to make sure that original author and contributor(s) are credited for their work.


### Adding a New Category

If your snippet doesn’t fit into any existing category, you can create a new one! Just make sure it’s unique and doesn’t overlap with others (e.g., don’t create separate categories for “Date” and “Time” when “Date and Time” works).

1. **Create a new category folder:**

    - In the relevant language directory, add a new folder.
    - Use a lowercase name with hyphens for separation (e.g., `file-handling`).

2. **Add snippets:**

    - Follow the [Adding a New Snippet](#adding-a-new-snippet) instructions.


Example structure:

```md
/snippets
  |- python
    |- file-handling
    |- list-manipulation
    |- ....
```

### Adding a New Language

If you want to introduce a new programming language, here's how to do it:

1. **Create a language folder:**

    - Add a new folder under the `snippets` directory.
    - Name it after the language in lowercase (e.g., `go`, `ruby`).

2. **Add categories and snippets:**

    - Follow the [Adding a New Snippet](#adding-a-new-snippet) and [Adding a New Category](#adding-a-new-category) guidelines.

4. **Include an icon:**

    - Add an `icon.svg` file (50x50px) in the same language folder.
    - Use tools like [Resize SVG](https://www.iloveimg.com/resize-image/resize-svg) to ensure the correct size.

5. **Double-check your work:**

    - Verify that everything is structured correctly and displays as intended.

---

## Final Notes

Whether you’re fixing a tiny typo, writing a new snippet, or dreaming up big features, every bit counts! 🛠️

If you have any questions or need help, feel free to open an issue or tag me.

Happy coding! 💻✨
