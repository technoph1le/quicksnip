---
Title: Remove Punctuation
Description: Removes punctuation from a string.
Author: SteliosGee
Tags: python,string,punctuation,remove,utility
---

```py
import string

def remove_punctuation(s):
    return s.translate(str.maketrans('', '', string.punctuation))

# Usage:
print(remove_punctuation('Hello, World!'))  # Output: 'Hello World'
```
