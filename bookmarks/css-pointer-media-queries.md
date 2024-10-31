---
title: CSS pointer @media queries
tags:
  - css
  - ux
---

> - ✅ style if mobile
> - ✅ style if desktop
> - ✅ style if stylus
> - ✅ style if controller
> - ✅ combine together 🎉
>
> spec https://t.co/U4QWyw76kR
>
> caniuse https://t.co/ig9ONaQJAI pic.twitter.com/u0lA0UQreU
>
> — Adam Argyle (@argyleink) [April 21, 2020](https://twitter.com/argyleink/status/1252661430618189829)

```css
/* Laptop/desktop styles */
@media (hover: hover) {
}

/* smartphones/touchscreens */
@media (hover: none) and (pointer: coarse) {
}

/* device with stylus */
@media (hover: none) and (pointer: fine) {
}

/* Wii/Kinext/etc. */
@media (hover: hover) and (pointer: coarse) {
}

/* mouse/touchpad */
@media (hover: hover) and (pointer: fine) {
}
```
