# QuickSnip

An open-source project that categorizes handy code snippets across various programming languages. Built with love and powered by an awesome community. 🚀

<div>
<a href="https://youtu.be/BhRi7fJzPgk?si=z1sVXU7uRS0bkSEt" target="_blank">
  <img src="https://img.shields.io/static/v1?label=&message=Watch%20on%20YouTube&labelColor=FFFFFF&color=FF0000&style=for-the-badge&logo=youtube&logoColor=FF0000" alt="Watch on YouTube">
</a>
<div>

<br>

![Website preview](/public/preview.png)

## How to contribute

Want to help make QuickSnip even better? You can contribute by:

- **Improving the Code**: Fix bugs, suggest new features, or optimize the project.
- **Adding New Snippets**: Share your favorite snippets to grow the database.

Be sure to check out the [CONTRIBUTING.md](/CONTRIBUTING.md) file for detailed guidelines.

### Improving the code

Got a feature idea or bug fix? Here's how you can contribute:

- [Open an issue](https://github.com/dostonnabotov/quicksnip/issues) to share your ideas or report a bug.
- [Send a pull request](https://github.com/dostonnabotov/quicksnip/pulls) with your changes.

### Adding a Snippet

The snippets database is located in the `/snippets` folder.

1. Find the relevant language folder.

2. Locate the appropriate category folder for your snippet.

3. Create a markdown file and add your snippet using the following format:

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

Here's an example for JavaScript:

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

Expected file structure:

```md
/snippets
  |- language
    |- category-name
      |- your-snippet-here.md
```

> Please do **NOT** add or edit anything in `/public` folder. It will be used for consolidating snippets.

For more details about adding new categories or programming languages, check out the [CONTRIBUTING.md](/CONTRIBUTING.md) file.

## Guidelines for Contributions

To keep things smooth and consistent, please:

- Follow the formatting rules described above.
- Include all mandatory fields in the snippet.
- Test your snippet to ensure it works as expected.

Following these guidelines helps me (and everyone else) review and merge your contributions faster.

## License

QuickSnip is licensed under the [MIT License](/LICENSE). Feel free to use and share it as you like.

<a href="https://www.producthunt.com/products/quicksnip" target="_blank" style="text-decoration: none;">
  <img src="https://img.shields.io/static/v1?label=&message=Leave%20a%20Review&labelColor=FFFFFF&color=DA552F&style=for-the-badge&logo=product-hunt&logoColor=DA552F" alt="Leave a Review">
</a>
