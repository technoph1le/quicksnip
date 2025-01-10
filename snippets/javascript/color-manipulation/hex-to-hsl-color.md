---
title: Hex to HSL Color
description: Converts HEX color values to HSL color values.
author: JanluOfficial
tags: validation,url
---

```js
function hexToHsl(hex) {
    // Remove the '#' if present
    hex = hex.replace(/^#/, '');
    
    // Convert HEX to RGB
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;
    
    // Find the min, max, and delta
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    
    // Calculate Lightness
    let l = (max + min) / 2;
    
    // Calculate Saturation
    let s = 0;
    if (delta !== 0) {
        s = delta / (1 - Math.abs(2 * l - 1));
    }
    
    // Calculate Hue
    let h = 0;
    if (delta !== 0) {
        if (max === r) {
            h = ((g - b) / delta) % 6;
        } else if (max === g) {
            h = (b - r) / delta + 2;
        } else if (max === b) {
            h = (r - g) / delta + 4;
        }
        h = Math.round(h * 60); // Convert to degrees
        if (h < 0) h += 360;
    }
    
    // Convert saturation and lightness to percentages
    s = +(s * 100).toFixed(2);
    l = +(l * 100).toFixed(2);
    
    return { h, s, l };
}

// Usage:
hexToHsl("#3498db"); // Returns: { h: 204, s: 69.87, l: 53.14 }
```