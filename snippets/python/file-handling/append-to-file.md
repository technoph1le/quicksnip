---
Title: Append to File
Description: Appends content to the end of a file.
Author: axorax
Tags: python,file,append,utility
---

```py
def append_to_file(filepath, content):
    with open(filepath, 'a') as file:
        file.write(content + '\n')

# Usage:
append_to_file('example.txt', 'This is an appended line.')
```
