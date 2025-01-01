---
title: Regex Match Utility Function
description: Enhanced regular expression matching utility.
author: aumirza
tags: javascript,regex
---

```js
/**
* @param {string | number} input
*          The input string to match
* @param {regex | string}  expression
*          Regular expression
* @param {string} flags
*          Optional Flags
*
* @returns {array}
* [{
* match: '...',
* matchAtIndex: 0,
* capturedGroups: [ '...', '...' ]
* }]
*/
function regexMatch(input, expression, flags = 'g') {
  let regex =
    expression instanceof RegExp
      ? expression
      : new RegExp(expression, flags);
  let matches = input.matchAll(regex);
  matches = [...matches];
  return matches.map((item) => {
    return {
      match: item[0],
      matchAtIndex: item.index,
      capturedGroups: item.length > 1 ? item.slice(1) : undefined,
    };
  });
}
```
