---
title: Allow Signed Integers
description: A validation function to allow only signed integers.
author: Legopitstop
tags: validation,signed,integers
---

```py
from tkinter import Tk, Entry


def allow_signed_integers(action, value):
    if action == "1":
        return (
            value in ("", "-")
            or value.isdigit()
            or (value.startswith("-") and value[1:].isdigit())
        )
    return True


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_signed_integers)
Entry(root, validate="key", validatecommand=(reg, "%d", "%P")).pack()

root.mainloop()
```
