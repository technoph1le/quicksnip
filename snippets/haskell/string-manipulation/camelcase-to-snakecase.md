---
title: Transform Camel Case to Snake Case
description: Converts a Camel Case string to Snake case.
author: ACR1209
tags: haskell,string,convert,camel-case,snake-case,utility
---

```hs
import Data.Char (isUpper, toLower)

camelToSnake :: String -> String
camelToSnake [] = []
camelToSnake (x:xs)
    | isUpper x = '_' : toLower x : camelToSnake xs
    | otherwise = x : camelToSnake xs

main :: IO ()
main = do
    let camelCase = "camelCaseToSnakeCase"
    print $ camelToSnake camelCase -- Output: "camel_case_to_snake_case"
```