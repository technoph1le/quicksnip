---
title: N-Dimensional Array Creator
description: Creates an N-dimensional array filled with a single element.
author: Debanjan110d
tags: numpy, arrays, python, n-dimensional
---

```py
import numpy as np

def create_n_dimensional_array(n, fill_value=1):
    """Creates an N-dimensional NumPy array filled with a given value."""
    return np.full([1] * n, fill_value)


```
