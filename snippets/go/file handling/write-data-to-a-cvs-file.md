---
title: Write data to a CVS file
description: An example of writing data to a cvs file
author: AmeerMoustafa
tags: file handling,cvs
---


```go
package main

import (
    "os"
    "log"
    "encoding/csv"
)

var data = [][]string{{"Line1", "Hello Readers of"}, {"Line2", "quicksnip.dev"}}

func main() {
    file, err := os.Create("result.csv")
    checkError("Cannot create file", err)
    defer file.Close()

    writer := csv.NewWriter(file)
    defer writer.Flush()

    for _, value := range data {
        err := writer.Write(value)
        checkError("Cannot write to file", err)
    }
}

func checkError(message string, err error) {
    if err != nil {
        log.Fatal(message, err)
    }
}
```