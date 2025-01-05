---
title: Truncate
description: Truncates a string to a specified length and a toggleable truncation notation.
author: axorax
contributors: MinerMinerMods
tags: string,truncate
---

```py
def truncate(s:str, length:int, suffix:bool = True) -> str :
    return (s[:length] + ("..." if suffix else "")) if len(s) > length else s

# Usage:
truncate('This is a long string', 10) # Returns: 'This is a ...'
truncate('This is a long string', 10, False) # Returns: 'This is a '
```
