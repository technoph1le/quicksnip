---
title: Matrix Transpose
description: Transposes a 2D matrix.
author: ACR1209
tags: array,matrix,transpose
---

```ruby
def transpose_matrix(matrix)
    return [] if matrix.empty?
    return [] if matrix.first.empty?

    matrix.first.zip(*matrix[1..-1])
end

# Usage:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print transpose_matrix(matrix) # Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```