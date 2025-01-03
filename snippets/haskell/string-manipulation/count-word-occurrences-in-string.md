---
title: Count Word Occurrences in String
description: Counts the occurrences of each word in a given string.
author: ACR1209
tags: string,occurrences,word-count
---

```hs
import Data.List (group, sort)

countWordOccurrences :: String -> [(String, Int)]
countWordOccurrences = map (\(w:ws) -> (w, length (w:ws))) . group . sort . words

-- Usage:
main :: IO ()
main = do
    let text = "haskell is awesome and haskell is fun"
    print $ countWordOccurrences text -- Output: [("and",1),("awesome",1),("fun",1),("haskell",2),("is",2)]
```