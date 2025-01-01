---
title: Find Files
description: Finds all files of the specified type within a given directory.
author: Jackeastern
tags: python,os,filesystem,file_search
---

```py
import os

def find_files(directory, file_type):
  file_type = file_type.lower()  # Convert file_type to lowercase
  found_files = []

  for root, _, files in os.walk(directory):
    for file in files:
      file_ext = os.path.splitext(file)[1].lower()
      if file_ext == file_type:
        full_path = os.path.join(root, file)
        found_files.append(full_path)

  return found_files

# Example Usage:
pdf_files = find_files('/path/to/your/directory', '.pdf')
print(pdf_files)
```
