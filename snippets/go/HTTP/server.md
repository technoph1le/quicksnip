---
title: server
description: runs an HTTP server with routing
author: AmeerMoustafa
tags: http,server,router,web
---

```go
package main

import (
	"fmt"
	"net/http"
)

var Router = http.NewServeMux()

var server = http.Server{
	Addr:    ":8080",
	Handler: Router,
}

// Handler function example
func example(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello HTTP server")
}

func main() {
	// Route definitions
	Router.HandleFunc("GET /", example)
	server.ListenAndServe()
}
```
