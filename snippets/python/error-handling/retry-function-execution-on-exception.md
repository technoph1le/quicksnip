---
title: Retry Function Execution on Exception
description: Retries a function execution a specified number of times if it raises an exception.
author: axorax
tags: python,error-handling,retry,utility
---

```py
import time

def retry(func, retries=3, delay=1):
    for attempt in range(retries):
        try:
            return func()
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            time.sleep(delay)
    raise Exception("All retry attempts failed")

# Usage:
def unstable_function():
    raise ValueError("Simulated failure")

# Retry 3 times with 2 seconds delay:
try:
    retry(unstable_function, retries=3, delay=2)
except Exception as e:
    print(e)  # Output: All retry attempts failed
```
