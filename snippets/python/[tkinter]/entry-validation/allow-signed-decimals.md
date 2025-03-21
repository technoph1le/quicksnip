---
title: Allow signed Decimals
description: A validation function to allow only signed decimal numbers.
author: Legopitstop
tags: validation,signed,decimals
---

```py
from tkinter import Tk, Entry


def allow_signed_decimals(action, value):
    if action == "1":
        try:
            if value in ("", "-"):
                return True
            float(value)
            return True
        except ValueError:
            return False
    return True


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_signed_decimals)
Entry(root, validate="key", validatecommand=(reg, "%d", "%P")).pack()

root.mainloop()
```
