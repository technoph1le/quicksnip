---
title: Allow Numbers in Range
description: A validation function to allow only numbers within a specified range.
author: Legopitstop
tags: validation,number,range
---

```py
from tkinter import Tk, Entry


def allow_numbers_in_range(action, value, min_value, max_value):
    if action == "1":  
        try:
            num = float(value)
            return float(min_value) <= num <= float(max_value)
        except ValueError:
            return False
    return True


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_numbers_in_range)
# 0 is the minimum value
# 10 is the maximum value
Entry(root, validate="key", validatecommand=(reg, "%d", "%P", 0, 10)).pack()

root.mainloop()
```
