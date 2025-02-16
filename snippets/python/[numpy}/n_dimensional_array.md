---
title: N-Dimensional Array Creator
description: Creates an N-dimensional array filled with a single element.
author: Debanjan110d
tags: numpy, arrays, python, n-dimensional
---

```py
import numpy as np

n = int(input("Enter the number of dimensions: "))
n_dim_array = np.array([1])
n_dim_array = n_dim_array.reshape(*([1] * n))

print(f"Created an {n}-dimensional array.")
print(f"Number of dimensions: {n_dim_array.ndim}")

# Usage:
# -> Run the script and enter the number of dimensions.
# -> It will create an N-dimensional array and display its number of dimensions.
