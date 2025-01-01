---
title: Convert Tabs to Spaces
description: Converts all tab characters in a string to spaces.
author: axorax
tags: string,tabs,spaces
---

```js
function tabsToSpaces(str, spacesPerTab = 4) {
  return str.replace(/\t/g, ' '.repeat(spacesPerTab));
}

// Example usage:
console.log(tabsToSpaces('Hello\tWorld', 2)); // Output: 'Hello  World'
```
