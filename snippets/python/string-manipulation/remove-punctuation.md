---
title: Remove Punctuation
description: Removes punctuation from a string.
author: SteliosGee
tags: python,string,punctuation,remove,utility
---

```py
import string

def remove_punctuation(s):
    return s.translate(str.maketrans('', '', string.punctuation))

# Usage:
print(remove_punctuation('Hello, World!'))  # Output: 'Hello World'
```
