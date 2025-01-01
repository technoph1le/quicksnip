---
title: Shuffle Array
description: Shuffles an Array.
author: loxt-nixo
tags: javascript,array,shuffle,utility
---

```js
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```
