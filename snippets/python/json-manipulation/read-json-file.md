---
Title: Read JSON File
Description: Reads a JSON file and parses its content.
Author: e3nviction
Tags: python,json,file,read
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
