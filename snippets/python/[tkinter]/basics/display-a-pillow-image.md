---
title: Display a Pillow Image
description: Use Pillow to show an image in a Tkinter window.
author: Legopitstop
tags: app,hello-world,object-oriented
---

```py
from tkinter import Tk, Label
from PIL import Image, ImageDraw, ImageTk


class App(Tk):
    def __init__(self):
        Tk.__init__(self)
        self.geometry("200x200")

        # PhotoImage must be global or be assigned to a class or it will be garbage collected.
        self.photo = ImageTk.PhotoImage(self.make_image())
        lbl = Label(self, image=self.photo)
        lbl.pack(expand=1)

    def make_image(self):
        width, height = 200, 200
        image = Image.new("RGB", (width, height), "white")

        # Create a drawing context
        draw = ImageDraw.Draw(image)

        # Draw a circle
        radius = 80
        center = (width // 2, height // 2)
        draw.ellipse(
            [
                (center[0] - radius, center[1] - radius),
                (center[0] + radius, center[1] + radius),
            ],
            fill="red",
            outline="black",
            width=3,
        )
        return image


# Usage:
root = App()
root.mainloop()

```
