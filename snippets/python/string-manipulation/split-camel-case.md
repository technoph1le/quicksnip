---
Title: Split Camel Case
Description: Splits a camel case string into separate words.
Author: axorax
Tags: python,string,camel-case,split,utility
---

```py
import re

def split_camel_case(s):
    return ' '.join(re.findall(r'[A-Z][a-z]*|[a-z]+', s))

# Usage:
print(split_camel_case('camelCaseString'))  # Output: 'camel Case String'
```
