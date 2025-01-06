---
Title: Unintentional Duplication
Description: Matches duplicated word in a text.
Author: majvax
Tags: duplication
---


```regex
\b(\w+)\s+\1\b


-> Usage:
I need to finish this task ✗
I need to to finish this task ✓
```
