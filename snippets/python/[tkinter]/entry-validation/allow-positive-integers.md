---
title: Allow Positive Integers
description: A validation function to allow only positive integers.
author: Legopitstop
tags: validation,positive,integers
---

```py
from tkinter import Tk, Entry


def allow_positive_integers(value):
    return value.isdigit() and (value == "" or int(value) > 0)


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_positive_integers)
Entry(root, validate="key", validatecommand=(reg, "%P")).pack()

root.mainloop()
```
