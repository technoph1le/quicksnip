---
Title: Remove Specific Characters
Description: Removes specific characters from a string.
Author: axorax
Tags: python,string,remove,characters,utility
---

```py
def remove_chars(s, chars):
    return ''.join(c for c in s if c not in chars)

# Usage:
print(remove_chars('hello world', 'eo'))  # Output: 'hll wrld'
```
