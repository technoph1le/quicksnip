---
title: Update JSON File
description: Updates an existing JSON file with new data or modifies the existing values.
author: axorax
tags: json,update,file
---

```py
import json

def update_json(filepath, new_data):
    # Read the existing JSON data
    with open(filepath, 'r') as file:
        data = json.load(file)

    # Update the data with the new content
    data.update(new_data)

    # Write the updated data back to the JSON file
    with open(filepath, 'w') as file:
        json.dump(data, file, indent=4)

# Usage:
new_data = {'age': 31}
update_json('data.json', new_data) # Updates `age` in `data.json` without modifying other keys
```
