---
title: Truncate String
description: Truncates a string to a specified length and adds an ellipsis.
author: axorax
tags: string,truncate
---

```py
def truncate_string(s, length):
    return s[:length] + '...' if len(s) > length else s

# Usage:
truncate_string('This is a long string', 10) # Returns: 'This is a ...'
```
