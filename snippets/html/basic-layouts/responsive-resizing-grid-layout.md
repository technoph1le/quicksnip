---
title: Responsive HTML Grid Layout
description: Creates a responsive grid layout that adjusts the number of columns and rows based on the viewport size using CSS media queries.
author: pl44t
tags: html,css,grid,responsive-design,frontend
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .grid-container {
            display: grid;
            grid-gap: 10px;
        }
        
        @media (max-width: 600px) {
            .grid-container { 
                grid-template-columns: repeat(2, 1fr); 
            }
        }

        @media (min-width: 601px) and (max-width: 900px) {
            .grid-container { 
                grid-template-columns: repeat(3, 1fr); 
            }
        }

        @media (min-width: 901px) {
            .grid-container { 
                grid-template-columns: repeat(4, 1fr); 
            }
        }
    </style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>  
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
</div>

</body>
</html>
```
