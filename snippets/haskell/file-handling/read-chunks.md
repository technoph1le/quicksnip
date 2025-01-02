---
title: Read File in Chunks
description: Reads a file in chunks grouped by lines.
author: ACR1209
tags: haskell,file,read,chunks,utility
---

```hs
import System.IO (openFile, IOMode(ReadMode), hGetContents)
import Data.List (unfoldr)

readFileInChunks :: FilePath -> Int -> IO [[String]]
readFileInChunks filePath chunkSize = do
    handle <- openFile filePath ReadMode
    contents <- hGetContents handle
    let linesList = lines contents
    return $ go linesList
  where
    go [] = []
    go xs = take chunkSize xs : go (drop chunkSize xs)

main :: IO ()
main = do
    let file = "example.txt"
    let chunkSize = 3 -- Number of lines per chunk
    chunks <- readFileInChunks file chunkSize
    mapM_ (putStrLn . unlines) chunks

```