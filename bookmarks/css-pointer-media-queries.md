---
title: CSS pointer @media queries
tags:
  - css
  - ux
---

https://twitter.com/argyleink/status/1252661430618189829

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
