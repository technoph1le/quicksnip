---
title: Structs
description: Creates two people, calculates their distances from each other, & prints output.
author: abdiToldSo
tags: structs
---

```go
package main

import (
	"fmt"
	"math"
)

type Person struct {
	Name string
	Age  int
	Pos  Position
}

type Position struct {
	X, Y float64 
}


// Struct Method
func (p *Person) distanceFrom(p1 *Person) (float64, float64) { 
	x_distance := math.Abs(p.Pos.X - p1.Pos.X) // Get absolute distance from self.X to other.X
	y_distance := math.Abs(p.Pos.Y - p1.Pos.Y) // Get absolute distance from self.Y to other.Y
	return x_distance, y_distance // Return results
}

// Usage:
func main() {
	var Dave = Person{"Dave", 27, Position{255, 197}}
	Ashley := Person{"Ashley", 28, Position{54, 225}}

	// Calculate Distance from other Person
	x_distance, y_distance := Dave.distanceFrom(&Ashley)

	// Format string's to output X & Y distances
	x_string := fmt.Sprintf("%s's X distance from %s: %f", Ashley.Name, Dave.Name, x_distance)
	y_string := fmt.Sprintf("%s's Y distance from %s: %f", Ashley.Name, Dave.Name, y_distance)

	// Output distance's
	fmt.Println(x_string)
	fmt.Println(y_string)

}
```
