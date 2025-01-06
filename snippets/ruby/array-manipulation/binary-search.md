---
title: Binary Search
description: Searches for an element in a sorted array using binary search.
author: ACR1209
tags: array,binary-search,search
---

```rb
def binary_search(array, target)
  low = 0
  high = array.length - 1

  while low <= high
    mid = (low + high) / 2
    guess = array[mid]

    if guess == target
      return mid
    elsif guess > target
      high = mid - 1
    else
      low = mid + 1
    end
  end

  return nil
end

# Usage:
array = [1, 3, 5, 7, 9]
target = 5
result = binary_search(array, target)
puts result # Output: 2
```