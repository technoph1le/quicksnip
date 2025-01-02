---
title: Flatten Array
description: Flattens a multi-dimensional array.
author: ACR1209
tags: haskell,array,flatten,utility
---

```hs
flatten :: [[a]] -> [a]
flatten = concat

main :: IO ()
main = do
    let array = [[1, 2], [2], [3], [4]]
    print $ flatten array -- Output: [1, 2, 2, 3, 4]
```
