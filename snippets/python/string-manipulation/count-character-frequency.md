---
Title: Count Character Frequency
Description: Counts the frequency of each character in a string.
Author: axorax
Tags: python,string,character-frequency,utility
---

```py
from collections import Counter

def char_frequency(s):
    return dict(Counter(s))

# Usage:
print(char_frequency('hello'))  # Output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}
```
