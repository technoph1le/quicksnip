---
title: Remove Punctuation
description: Removes punctuation from a string.
author: SteliosGee
tags: string,punctuation,remove
---

```py
import string

def remove_punctuation(s):
    return s.translate(str.maketrans('', '', string.punctuation))

# Usage:
remove_punctuation('Hello, World!') # Returns: 'Hello World'
```
