---
Title: Write to File
Description: Writes content to a file.
Author: dostonnabotov
Tags: python,file,write,utility
---

```py
def write_to_file(filepath, content):
    with open(filepath, 'w') as file:
        file.write(content)

# Usage:
write_to_file('example.txt', 'Hello, World!')
```
