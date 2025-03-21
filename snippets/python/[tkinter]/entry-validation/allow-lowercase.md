---
title: Allow Lowercase
description: A validation function to allow only lowercase alphabetic characters.
author: Legopitstop
tags: validation,lowercase
---

```py
from tkinter import Tk, Entry


def allow_lowercase(value):
    return value.islower() or value == ""


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_lowercase)
Entry(root, validate="key", validatecommand=(reg, "%P")).pack()

root.mainloop()
```
