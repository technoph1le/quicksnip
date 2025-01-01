---
Title: Extract Initials from Name
Description: Extracts and returns the initials from a full name.
Author: axorax
Tags: string,initials,name
---

```js
function getInitials(name) {
  return name.split(' ').map(part => part.charAt(0).toUpperCase()).join('');
}

// Example usage:
console.log(getInitials('John Doe')); // Output: 'JD'
```
