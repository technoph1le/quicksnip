---
title: Custom Regular Expression
description: A validation function to match a regular expression pattern.
author: Legopitstop
tags: validation,regex,pattern
---

```py
from tkinter import Tk, Entry
import re


def custom_regular_expression(action, value, pattern):
    if action == "1":
        return re.fullmatch(pattern, value) is not None
    return True


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(custom_regular_expression)
pattern = r"^\d{0,4}$"  # Allow up to 4 digits
Entry(root, validate="key", validatecommand=(reg, "%d", "%P", pattern)).pack()

root.mainloop()
```
