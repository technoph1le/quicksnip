---
title: Validate a URL
description: Validates a URL.
author: JanluOfficial
tags: validation,url
---

```js
function validateURL(url) {
    const urlRegex = /^(https?|http?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
}

// Usage:
validateURL("https://www.example.com"); // Returns: true
```
