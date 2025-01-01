---
title: Capitalize Words
description: Capitalizes the first letter of each word in a string.
author: axorax
tags: python,string,capitalize,utility
---

```py
def capitalize_words(s):
    return ' '.join(word.capitalize() for word in s.split())

# Usage:
print(capitalize_words('hello world'))  # Output: 'Hello World'
```
