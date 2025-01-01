---
title: Measure Execution Time
description: Measures the execution time of a code block.
author: dostonnabotov
tags: python,time,execution,utility
---

```py
import time

def measure_time(func, *args):
    start = time.time()
    result = func(*args)
    end = time.time()
    print(f'Execution time: {end - start:.6f} seconds')
    return result

# Usage:
def slow_function():
    time.sleep(2)

measure_time(slow_function)
```
