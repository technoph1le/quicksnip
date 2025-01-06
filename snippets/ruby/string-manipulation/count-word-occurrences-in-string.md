---
title: Count Word Occurrences in String
description: Counts the occurrences of each word in a given string.
author: ACR1209
tags: string,occurrences,word-count
---

```rb
def count_word_occurrences(text)
    words = text.downcase.scan(/\w+/)
    occurrences = Hash.new(0)
    words.each { |word| occurrences[word] += 1 }
    occurrences
end

# Usage:
text = "ruby is awesome and Ruby is fun"
puts count_word_occurrences(text) # Output: {"ruby"=>2, "is"=>2, "awesome"=>1, "and"=>1, "fun"=>1}
```