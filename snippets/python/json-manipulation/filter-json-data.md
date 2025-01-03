---
title: Filter JSON Data
description: Filters a JSON object based on a condition and returns the filtered data.
author: axorax
tags: json,filter,data
---

```py
import json

def filter_json_data(filepath, condition):
    with open(filepath, 'r') as file:
        data = json.load(file)

    # Filter data based on the provided condition
    filtered_data = [item for item in data if condition(item)]

    return filtered_data

# Usage:
condition = lambda x: x['age'] > 25
filter_json_data('data.json', condition) # Returns: `data.json` filtered with `condition`
```
