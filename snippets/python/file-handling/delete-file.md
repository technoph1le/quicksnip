---
Title: Delete File
Description: Deletes a file at the specified path.
Author: axorax
Tags: python,file,delete,utility
---

```py
import os

def delete_file(filepath):
    if os.path.exists(filepath):
        os.remove(filepath)
        print(f'File {filepath} deleted.')
    else:
        print(f'File {filepath} does not exist.')

# Usage:
delete_file('example.txt')
```
