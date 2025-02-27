---
title: Error Handling
description: Calls a function that returns an error and prints it
author: abdiToldSo
tags: error-handling
---

```go
package main

import (
	"errors" // Standard Error Library
	"math" // Standard Math Library 
	"fmt" // Standard IO Library
)

func returnErr(x float64) (float64, error) {
	if ( x < 0 ) { // Check if input is negative
		// Return new error from function
		return -1, errors.New("Error: Negative number has no real square root!")
	} else {
		// Else return square root and nil error
		return math.Sqrt(x), nil
	}
}

// Usage:
func main() {
	result, err := doStuff(-10) // Will return error with result = -1
	// If function returns error, print error
	if err != nil { 
		fmt.Println(err)
		// Else return result
	} else {
		fmt.Println(result)
	}
}
```
