---
title: Append to File
description: Appends content to the end of a file.
author: axorax
tags: python,file,append,utility
---

```py
def append_to_file(filepath, content):
    with open(filepath, 'a') as file:
        file.write(content + '\n')

# Usage:
append_to_file('example.txt', 'This is an appended line.')
```
