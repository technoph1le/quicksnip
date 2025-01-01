---
title: Remove Whitespace
description: Removes all whitespace from a string.
author: axorax
tags: python,string,whitespace,remove,utility
---

```py
def remove_whitespace(s):
    return ''.join(s.split())

# Usage:
print(remove_whitespace('hello world'))  # Output: 'helloworld'
```
