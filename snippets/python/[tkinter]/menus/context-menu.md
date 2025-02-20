---
title: Context Menu
description: Opens a menu when you right click a widget.
author: Legopitstop
tags: menu
---

```py
from tkinter import Tk, Label, Menu


class App(Tk):
    def __init__(self):
        Tk.__init__(self)
        self.geometry("200x200")

        lbl = Label(self, text="Right-click me!")
        lbl.bind("<Button-3>", self.do_popup)
        lbl.pack(expand=1, ipadx=10, ipady=10)

    def do_popup(self, event):
        menu = Menu(self, tearoff=0)
        menu.add_command(label="Option 1", command=lambda: print("Option 1"))
        menu.add_command(label="Option 2", command=lambda: print("Option 2"))
        menu.post(event.x_root, event.y_root)


# Usage:
root = App()
root.mainloop()
```
