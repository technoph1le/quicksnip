---
Title: Convert Tabs to Spaces
Description: Converts all tab characters in a string to spaces.
Author: axorax
Tags: string,tabs,spaces
---

```js
function tabsToSpaces(str, spacesPerTab = 4) {
  return str.replace(/\t/g, ' '.repeat(spacesPerTab));
}

// Example usage:
console.log(tabsToSpaces('Hello\tWorld', 2)); // Output: 'Hello  World'
```
