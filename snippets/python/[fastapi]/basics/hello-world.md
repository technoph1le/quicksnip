---
title: Hello, World!
description: Returns Hello, World! when it recives a GET request made to the root endpoint.
author: ACR1209
tags: printing,hello-world,web,api
---

```py
from typing import Union
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"msg": "Hello, World!"}

# Usage: 
# -> Go to http://127.0.0.1:8000/ and you'll see {"msg", "Hello, World!"}
```
