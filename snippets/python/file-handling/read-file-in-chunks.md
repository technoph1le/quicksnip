---
title: Read File in Chunks
description: Reads a file in chunks of a specified size.
author: axorax
tags: python,file,read,chunks,utility
---

```py
def read_file_in_chunks(filepath, chunk_size):
    with open(filepath, 'r') as file:
        while chunk := file.read(chunk_size):
            yield chunk

# Usage:
for chunk in read_file_in_chunks('example.txt', 1024):
    print(chunk)
```
