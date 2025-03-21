---
title: Convert String to Unicode
description: Converts a string into its Unicode representation.
author: axorax
tags: string,ascii,unicode,convert
---

```py
def string_to_unicode(s):
    return [ord(char) for char in s]

# Usage:
string_to_unicode('hello') # Returns: [104, 101, 108, 108, 111]
```
