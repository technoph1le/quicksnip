---
Title: Convert String to ASCII
Description: Converts a string into its ASCII representation.
Author: axorax
Tags: python,string,ascii,convert,utility
---

```py
def string_to_ascii(s):
    return [ord(char) for char in s]

# Usage:
print(string_to_ascii('hello'))  # Output: [104, 101, 108, 108, 111]
```
