---
title: Convert String to ASCII
description: Converts a string into its ASCII representation.
author: axorax
tags: python,string,ascii,convert,utility
---

```py
def string_to_ascii(s):
    return [ord(char) for char in s]

# Usage:
print(string_to_ascii('hello'))  # Output: [104, 101, 108, 108, 111]
```
