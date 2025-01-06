---
title: Pulse Animation
description: Adds a smooth pulsing animation with opacity and scale effects
author: AlsoKnownAs-Ax
tags: animation,pulse,pulse-scale
---

```css
.pulse {
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
}
```
