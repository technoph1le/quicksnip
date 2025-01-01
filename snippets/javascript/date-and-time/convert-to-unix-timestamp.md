---
Title: Convert to Unix Timestamp
Description: Converts a date to a Unix timestamp in seconds.
Author: Yugveer06
Tags: javascript,date,unix,timestamp,utility
---

```js
/**
 * Converts a date string or Date object to Unix timestamp in seconds.
 *
 * @param {string|Date} input - A valid date string or Date object.
 * @returns {number} - The Unix timestamp in seconds.
 * @throws {Error} - Throws an error if the input is invalid.
 */
function convertToUnixSeconds(input) {
  if (typeof input === 'string') {
    if (!input.trim()) {
      throw new Error('Date string cannot be empty or whitespace');
    }
  } else if (!input) {
    throw new Error('Input is required');
  }

  let date;

  if (typeof input === 'string') {
    date = new Date(input);
  } else if (input instanceof Date) {
    date = input;
  } else {
    throw new Error('Input must be a valid date string or Date object');
  }

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  return Math.floor(date.getTime() / 1000);
}

// Usage
console.log(convertToUnixSeconds('2025-01-01T12:00:00Z')); // 1735732800
console.log(convertToUnixSeconds(new Date('2025-01-01T12:00:00Z'))); // 1735732800
console.log(convertToUnixSeconds(new Date())); //Current Unix timestamp in seconds (varies depending on execution time)
```
