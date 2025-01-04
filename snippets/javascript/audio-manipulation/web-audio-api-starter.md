---
title: Web Audio API Starter Example
description: Simple example for playing a tone with the Web Audio API
author: 1982FenceHopper
tags: audio, web
---

```js
/*
 *   "It's recommended to create one AudioContext and reuse it instead of initializing a new one each time,
 *   and it's OK to use a single AudioContext for several different audio sources and pipeline concurrently."
 *
 *   https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
 */
class AudioSingleton {
  static ctx;

  static getInstance() {
    if (!ctx) {
      ctx = new AudioContext();
    }
    return ctx;
  }
}

// Usage:
function startAudio() {
  let ctx = AudioSingleton.getInstance();

  oscNode = ctx.createOscillator();
  gainNode = ctx.createGain();

  gainNode.gain.value = 0.01;   // It can get really loud, so this helps :)

  oscNode.type = "square";
  oscNode.frequency.setValueAtTime(440, ctx.currentTime);

  oscNode.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscNode.start();
}

startAudio(); // Output: A tone should be audible.
```