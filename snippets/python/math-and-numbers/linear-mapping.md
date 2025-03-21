---
title: Linear Mapping
description: remaps a value from one range to another
author: JasimAlrawie
tags: math,number-theory,algebra
---

```py
def linear_mapping(value, min_in, max_in, min_out, max_out):
    return (value - min_in) * (max_out - min_out) / (max_in - min_in) + min_out

#Usage:
linear_mapping(value, 0, 1, 0, 255)    # remaps the value from (0,1) to (0,255)
linear_mapping(value, 0, PI*2, 0, 360) # remaps the value from rad to deg
linear_mapping(value, -1, 1, 1, 8)     # remaps the value from (-1,1) to (1,8)
```