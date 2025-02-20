---
title: Allow Only Alphabets
description: A validation function to allow only alphabetic characters.
author: Legopitstop
tags: validation,alphabets
---

```py
from tkinter import Tk, Entry


def allow_only_alphabets(value):
    return value.isalpha() or value == ""


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_only_alphabets)
Entry(root, validate="key", validatecommand=(reg, "%P")).pack()

root.mainloop()
```
