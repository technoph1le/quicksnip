---
title: Allow Specific Characters
description: A validation function to allow specific characters.
author: Legopitstop
tags: validation,regex
---

```py
from tkinter import Tk, Entry


def allow_specific_characters(value, allowed_chars):
    return all(char in allowed_chars for char in value)


# Usage:
root = Tk()
root.geometry("200x200")

reg = root.register(allow_specific_characters)
allowed_chars = "0123456789ABCDEFabcdef"  # Hexadecimal characters
Entry(root, validate="key", validatecommand=(reg, "%P", allowed_chars)).pack()

root.mainloop()
```
