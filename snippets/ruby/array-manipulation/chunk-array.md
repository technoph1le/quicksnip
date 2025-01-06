---
title: Chunk Array
description: Splits an array into chunks of a specified size.
author: ACR1209
tags: array,chunk
---

```rb
def chunk_array(array, size)
    array.each_slice(size).to_a
end

# Usage:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
chunked_arr = chunk_array(arr, 2)
puts chunked_arr.inspect # Output: [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
```