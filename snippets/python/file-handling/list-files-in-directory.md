---
Title: List Files in Directory
Description: Lists all files in a specified directory.
Author: axorax
Tags: python,file,list,directory,utility
---

```py
import os

def list_files(directory):
    return [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

# Usage:
files = list_files('/path/to/directory')
print(files)
```
