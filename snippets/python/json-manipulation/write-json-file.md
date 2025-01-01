---
title: Write JSON File
description: Writes a dictionary to a JSON file.
author: e3nviction
tags: python,json,file,write
---

```py
import json

def write_json(filepath, data):
    with open(filepath, 'w') as file:
        json.dump(data, file, indent=4)

# Usage:
data = {'name': 'John', 'age': 30}
write_json('data.json', data)
```
