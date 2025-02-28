---
title: Basic Web Server
description: Creates a server with simple routing to display a lovely message.
author: abdiToldSo
tags: net-http, web-server
---

```go
package main

import (
	"fmt"      // Standard IO
	"log"      // Standard Log Library
	"net/http" // Standard RESTFUL HTTP Client Library
)

func handler(w http.ResponseWriter, r *http.Request) {
	// Print basic string to server
		fmt.Fprintf(w, "Say you love someone by adding '/name' to the url")
}

func loveHandler(w http.ResponseWriter, r *http.Request) {
	// Parse name from router
	name := r.PathValue("name")
	// Output lovely message for name to server
	w.Write([]byte("Hi, I love " + name + "!"))
}

// Usage:
func main() {
	// Create webserver & handle root address with 'handler' function
	http.HandleFunc("/", handler)
	http.HandleFunc("/{name}", loveHandler)
	// Start server on port 80801 & 'nil' has root handler
	log.Fatal(http.ListenAndServe(":8081", nil))
}
```
