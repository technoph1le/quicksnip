---
title: Allow Only Digits
description: A validation function to allow only digits.
author: Legopitstop
tags: validation,digits
---

```py
from tkinter import Tk, Entry


def allow_only_digits(value):
    return value.isdigit() or value == ""


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_only_digits)
Entry(root, validate="key", validatecommand=(reg, "%P")).pack()

root.mainloop()
```
