---
title: Matrix Transpose
description: Transposes a 2D matrix.
author: ACR1209
tags: haskell,array,matrix,transpose
---

```hs
transposeMatrix :: [[a]] -> [[a]]
transposeMatrix [] = []
transposeMatrix ([]:_) = []
transposeMatrix xs = map head xs : transposeMatrix (map tail xs)

main :: IO ()
main = do
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    print $ transposeMatrix matrix -- Output: [[1,4,7],[2,5,8],[3,6,9]]
```