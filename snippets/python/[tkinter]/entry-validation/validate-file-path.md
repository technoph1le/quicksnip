---
title: Validate File Path
description: A validation function to ensure the file path exists.
author: Legopitstop
tags: validation,filepath,fp
---

```py
from tkinter import Tk, Entry
import os


def validate_file_path(action, value):
    if action == "1":
        return value == "" or os.path.exists(os.path.expandvars(value))
    return True


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(validate_file_path)
Entry(root, validate="key", validatecommand=(reg, "%d", "%P")).pack()

root.mainloop()
```
