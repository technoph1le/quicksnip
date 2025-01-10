---
title: Random Hex Color
description: Generates a completely random hex color.
author: JanluOfficial
tags: color,hex,random
---

```js
function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// Usage:
getRandomHexColor(); // Returns: "#RRGGBB" (random)
```