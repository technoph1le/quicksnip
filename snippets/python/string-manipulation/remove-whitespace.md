---
Title: Remove Whitespace
Description: Removes all whitespace from a string.
Author: axorax
Tags: python,string,whitespace,remove,utility
---

```py
def remove_whitespace(s):
    return ''.join(s.split())

# Usage:
print(remove_whitespace('hello world'))  # Output: 'helloworld'
```
