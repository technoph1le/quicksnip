---
Title: Handle File Not Found Error
Description: Attempts to open a file and handles the case where the file does not exist.
Author: axorax
Tags: python,error-handling,file,utility
---

```py
def read_file_safe(filepath):
    try:
        with open(filepath, 'r') as file:
            return file.read()
    except FileNotFoundError:
        return "File not found!"

# Usage:
print(read_file_safe('nonexistent.txt'))  # Output: 'File not found!'
```
