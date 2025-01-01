---
Title: Count Vowels
Description: Counts the number of vowels in a string.
Author: SteliosGee
Tags: python,string,vowels,count,utility
---

```py
def count_vowels(s):
    vowels = 'aeiou'
    return len([char for char in s.lower() if char in vowels])

# Usage:
print(count_vowels('hello'))  # Output: 2
```
