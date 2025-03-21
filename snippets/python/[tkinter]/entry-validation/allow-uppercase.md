---
title: Allow Uppercase
description: A validation function to allow uppercase letters.
author: Legopitstop
tags: validation,uppercase
---

```py
from tkinter import Tk, Entry


def allow_uppercase(value):
    return value.isupper() or value == ""


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_uppercase)
Entry(root, validate="key", validatecommand=(reg, "%P")).pack()

root.mainloop()
```
