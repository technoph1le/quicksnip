---
Title: Capitalize Words
Description: Capitalizes the first letter of each word in a string.
Author: axorax
Tags: python,string,capitalize,utility
---

```py
def capitalize_words(s):
    return ' '.join(word.capitalize() for word in s.split())

# Usage:
print(capitalize_words('hello world'))  # Output: 'Hello World'
```
