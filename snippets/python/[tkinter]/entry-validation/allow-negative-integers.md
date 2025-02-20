---
title: Allow Negative Integers
description: A validation function to allow only negative integers.
author: Legopitstop
tags: validation,negative,integers
---

```py
from tkinter import Tk, Entry


def allow_negative_integers(value):
    return (
        value in ("", "-") or value.startswith("-") and value[1:].isdigit()
        if value
        else True
    )


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_negative_integers)
Entry(root, validate="key", validatecommand=(reg, "%P")).pack()

root.mainloop()
```
