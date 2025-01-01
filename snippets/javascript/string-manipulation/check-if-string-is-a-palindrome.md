---
Title: Check if String is a Palindrome
Description: Checks whether a given string is a palindrome.
Author: axorax
Tags: javascript,check,palindrome,string
---

```js
function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
```
