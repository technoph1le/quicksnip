---
title: Random RGB Color
description: Generates a completely random RGB color.
author: JanluOfficial
tags: color,rgb,random
---

```js
function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return (r, g, b);
}

// Usage:
getRandomRgbColor(); // Returns: (r, g, b) (random)
```
