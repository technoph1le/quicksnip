---
title: Binary Search
description: Searches for an element in a sorted array using binary search.
author: ACR1209
tags: haskell,array,binary-search,search
---

```hs
binarySearch :: Ord a => a -> [a] -> Maybe Int
binarySearch _ [] = Nothing
binarySearch target xs = go 0 (length xs - 1)
  where
    go low high
        | low > high = Nothing
        | midElem < target = go (mid + 1) high
        | midElem > target = go low (mid - 1)
        | otherwise = Just mid
      where
        mid = (low + high) `div` 2
        midElem = xs !! mid

main :: IO ()
main = do
    let array = [1, 2, 3, 4, 5]
    print $ binarySearch 3 array -- Output: Just 2
    print $ binarySearch 6 array -- Output: Nothing
```