---
title: Random HSL Color
description: Generates a completely random HSL color.
author: JanluOfficial
tags: color,hsl,random
---

```js
function getRandomHslColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    return [h, s, l];
}

// Usage:
getRandomHslColor(); // Returns: (h, s, l) (random)
```
