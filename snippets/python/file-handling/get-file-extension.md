---
Title: Get File Extension
Description: Gets the extension of a file.
Author: axorax
Tags: python,file,extension,utility
---

```py
import os

def get_file_extension(filepath):
    return os.path.splitext(filepath)[1]

# Usage:
print(get_file_extension('example.txt'))  # Output: '.txt'
```
