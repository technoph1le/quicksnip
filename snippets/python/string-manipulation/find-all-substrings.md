---
Title: Find All Substrings
Description: Finds all substrings of a given string.
Author: axorax
Tags: python,string,substring,find,utility
---

```py
def find_substrings(s):
    substrings = []
    for i in range(len(s)):
        for j in range(i + 1, len(s) + 1):
            substrings.append(s[i:j])
    return substrings

# Usage:
print(find_substrings('abc'))  # Output: ['a', 'ab', 'abc', 'b', 'bc', 'c']
```
