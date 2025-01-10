---
title: Trigger a custom event
description: Triggers a custom event on an element
author: JanluOfficial
tags: event-handling,custom-event
---

```js
function handleCustomEvent(event) {
  console.log('Custom event triggered:', event.detail);
}

const targetElement = document.getElementById('targetElement');
targetElement.addEventListener('myCustomEvent', handleCustomEvent);

const customEvent = new CustomEvent('myCustomEvent', {
  detail: {
    message: 'This is a custom event',
    time: new Date(),
  },
});

// Usage:
targetElement.dispatchEvent(customEvent);
```