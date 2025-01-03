---
title: Split Camel Case
description: Splits a camel case string into separate words.
author: axorax
tags: string,camel-case,split
---

```py
import re

def split_camel_case(s):
    return ' '.join(re.findall(r'[A-Z][a-z]*|[a-z]+', s))

# Usage:
split_camel_case('camelCaseString') # Returns: 'camel Case String'
```
