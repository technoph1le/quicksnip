---
title: Restrict Length
description: A validation function to limit the length.
author: Legopitstop
tags: validation,length
---

```py
from tkinter import Tk, Entry


def restrict_length(value, max_length):
    return len(value) <= int(max_length)


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(restrict_length)
# 10 is the maximum length allowed
Entry(root, validate="key", validatecommand=(reg, "%P", 10)).pack()

root.mainloop()
```
