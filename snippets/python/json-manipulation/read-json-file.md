---
title: Read JSON File
description: Reads a JSON file and parses its content.
author: e3nviction
tags: python,json,file,read
---

```py
import json

def read_json(filepath):
    with open(filepath, 'r') as file:
        return json.load(file)

# Usage:
data = read_json('data.json')
print(data)
```
