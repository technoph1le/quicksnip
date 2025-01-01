---
title: Flatten Nested JSON
description: Flattens a nested JSON object into a flat dictionary.
author: axorax
tags: python,json,flatten,nested
---

```py
def flatten_json(nested_json, prefix=''):
    flat_dict = {}
    for key, value in nested_json.items():
        if isinstance(value, dict):
            flat_dict.update(flatten_json(value, prefix + key + '.'))
        else:
            flat_dict[prefix + key] = value
    return flat_dict

# Usage:
nested_json = {'name': 'John', 'address': {'city': 'New York', 'zip': '10001'}}
flattened = flatten_json(nested_json)
print(flattened)  # Output: {'name': 'John', 'address.city': 'New York', 'address.zip': '10001'}
```
