---
title: Basic HTML Templating
description: Modifies html elements using go struct object 
author: abdiToldSo
tags: html, web-server, templates
---

```go
package main

import (
	"fmt"           // Standard IO library
	"html/template" // Standard templating library
	"log"           // Standard logging library
	"net/http"      // Standard RESTful HTTP linrary
)

// Create a Post struct
type Post struct {
	Title   string
	Content string
}

// Home Route Handler
func homeHandler(w http.ResponseWriter, r *http.Request) {
	p := Post{Title: "Good News", Content: "I'm made 12 dablones yesterday :)"}
	t, err := template.ParseFiles("index.html")
	if err != nil { log.Fatal(err) }
	t.Execute(w, p) // <- Can be called multiple times
}

// Usage:
func main() {
	http.HandleFunc("/", homeHandler)
	err := http.ListenAndServe(":8081", nil)
	if err != nil { log.Fatal(err) }
}

/*
Rules:
L		Dynamic content is defined using the following syntax:
		{{ .VariableName }}
-------
index.html
<h1>{{ .Title }}</h1>
<h2>{{ .Content }}</h2>
*/
```

