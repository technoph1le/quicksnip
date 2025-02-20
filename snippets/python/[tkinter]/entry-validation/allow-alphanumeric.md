---
title: Allow Alphanumeric
description: A validation function to allow alphanumeric characters.
author: Legopitstop
tags: validation,alphanumeric
---

```py
from tkinter import Tk, Entry


def allow_alphanumeric(value):
    return value.isalnum() or value == ""


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_alphanumeric)
Entry(root, validate="key", validatecommand=(reg, "%P")).pack()

root.mainloop()
```
