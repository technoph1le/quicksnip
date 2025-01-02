---
title: Chunk Array
description: Splits an array into chunks of a specified size.
author: ACR1209
tags: haskell,array,chunk,utility
---

```hs
chunkArray :: Int -> [a] -> [[a]]
chunkArray _ [] = []
chunkArray n xs = take n xs : chunkArray n (drop n xs)

main :: IO ()
main = do
    let array = [1, 2, 3, 4, 5, 6]
    print $ chunkArray 2 array -- Output: [[1, 2], [3, 4], [5, 6]]
```