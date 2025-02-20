---
title: Allow Decimal
description: A validation function to allow only decimal numbers.
author: Legopitstop
tags: validation,decimals
---

```py
from tkinter import Tk, Entry


def allow_decimal(action, value):
    if action == "1":
        if value == "":
            return True
        try:
            float(value)
            return True
        except ValueError:
            return False
    return True


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_decimal)
Entry(root, validate="key", validatecommand=(reg, "%d", "%P")).pack()

root.mainloop()
```
