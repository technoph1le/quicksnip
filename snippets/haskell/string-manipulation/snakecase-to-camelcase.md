---
title: Transform from Snake Case to Camel Case
description: Converts a Snake Case string to Camel Case.
author: ACR1209
tags: haskell,string,convert,snake-case,camel-case,utilty
---

```hs
import Data.Char (toUpper)

snakeToCamel :: String -> String
snakeToCamel [] = []
snakeToCamel ('_':x:xs) = toUpper x : snakeToCamel xs
snakeToCamel (x:xs) = x : snakeToCamel xs

main :: IO ()
main = do
    let snakeCase = "snake_case_to_camel_case"
    print $ snakeToCamel snakeCase -- Output: "snakeCaseToCamelCase"
```