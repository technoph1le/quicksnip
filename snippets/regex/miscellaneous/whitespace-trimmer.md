---
Title: Whitespace Trimmer
Description: Matches leading and/or trailing whitespace.
Author: majvax
Tags: trim
---


```regex
^\s+|\s+$


-> Usage:
(don't account for the quotation marks, it just to visualize whitespace)
"Hello World" ✗
" Hello World" ✓
"Hello World " ✓
" Hello World " ✓
```
