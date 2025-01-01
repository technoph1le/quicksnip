---
title: Slugify String
description: Converts a string into a URL-friendly slug format.
author: dostonnabotov
tags: javascript,string,slug,utility
---

```js
const slugify = (string, separator = "-") => {
  return string
    .toString() // Cast to string (optional)
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, separator) // Replace spaces with {separator}
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\_/g, separator) // Replace _ with {separator}
    .replace(/\-\-+/g, separator) // Replace multiple - with single {separator}
    .replace(/\-$/g, ""); // Remove trailing -
};

// Usage:
const title = "Hello, World! This is a Test.";
console.log(slugify(title)); // Output: 'hello-world-this-is-a-test'
console.log(slugify(title, "_")); // Output: 'hello_world_this_is_a_test'
```
