---
title: Capitalize Words
description: Capitalizes the first letter of each word in a string.
author: axorax
tags: string,capitalize
---

```py
def capitalize_words(s):
    return ' '.join(word.capitalize() for word in s.split())

# Usage:
capitalize_words('hello world') # Returns: 'Hello World'
```
