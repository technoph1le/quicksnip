---
title: Find Files in Directory by Type
description: Finds all files in a directory with a specific extension.
author: ACR1209
tags: haskell,file,search,extension,filesystem
---

```hs
import System.Directory (listDirectory)
import System.FilePath (takeExtension)

findFilesByExtension :: FilePath -> String -> IO [FilePath]
findFilesByExtension dir ext = do
    files <- listDirectory dir
    return $ filter (\f -> takeExtension f == ext) files

main :: IO ()
main = do
    let directory = "."
    let ext = ".txt"
    files <- findFilesByExtension directory ext
    mapM_ putStrLn files -- Output: list of txt files on the current directory
```