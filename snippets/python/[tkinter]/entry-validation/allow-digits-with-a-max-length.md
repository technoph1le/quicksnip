---
title: Allow Digits with A Max Length
description: A validation function to allow only digits with a specified maximum length.
author: Legopitstop
tags: validation,max,length
---

```py
from tkinter import Tk, Entry


def allow_digits_with_max_length(action, value, max_length):
    if action == "1":
        return value == "" or (value.isdigit() and len(value) <= int(max_length))
    return True


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_digits_with_max_length)
# 4 is the max length
Entry(root, validate="key", validatecommand=(reg, "%d", "%P", 4)).pack()

root.mainloop()
```
