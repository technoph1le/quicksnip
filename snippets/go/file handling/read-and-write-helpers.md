---
title: Read and write helpers
description: Simple and reusable functions to help with file reading and writing
author: AmeerMoustafa
tags: file handling
---

```go
// A reusable function to read data from a file
func readFile(filePath string) (data []byte, err error) {
	data, err = os.ReadFile(filePath)
	if err != nil {
		return nil, fmt.Errorf("failed to read file %s: %w", filePath, err)
	}

	return data, nil
}

// A reusable function to write data to a file
func writeFile(data string, filePath string) error {

	err := os.WriteFile(filePath, []byte(data), 0644)
	if err != nil {
		return fmt.Errorf("Failed to write to file %s: %w", filePath, err)
	}
	return nil
}
```