---
Title: Check if File Exists
Description: Checks if a file exists at the specified path.
Author: axorax
Tags: python,file,exists,check,utility
---

```py
import os

def file_exists(filepath):
    return os.path.isfile(filepath)

# Usage:
print(file_exists('example.txt'))  # Output: True or False
```
