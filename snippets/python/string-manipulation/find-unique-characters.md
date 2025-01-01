---
Title: Find Unique Characters
Description: Finds all unique characters in a string.
Author: axorax
Tags: python,string,unique,characters,utility
---

```py
def find_unique_chars(s):
    return ''.join(sorted(set(s)))

# Usage:
print(find_unique_chars('banana'))  # Output: 'abn'
```
