---
title: Convert String to ASCII
description: Converts a string into its ASCII representation.
author: axorax
tags: string,ascii,convert
---

```py
def string_to_ascii(s):
    return [ord(char) for char in s]

# Usage:
string_to_ascii('hello') # Returns: [104, 101, 108, 108, 111]
```
