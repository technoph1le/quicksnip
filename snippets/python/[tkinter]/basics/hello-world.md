---
title: Hello, World!
description: Creates a basic Tkinter window with a "Hello, World!" label.
author: Legopitstop
tags: app,hello-world,object-oriented
---

```py
from tkinter import Tk, Label

class App(Tk):
    def __init__(self):
        Tk.__init__(self)
        self.geometry("200x200")

        self.lbl = Label(self, text='Hello, World!')
        self.lbl.pack(expand=1)

# Usage:
root = App()
root.mainloop()
```
