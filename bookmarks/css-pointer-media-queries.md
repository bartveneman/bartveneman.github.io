---
title: CSS pointer @media queries
tags:
  - css
  - ux
url: https://twitter.com/argyleink/status/1252661430618189829/photo/1
---

> ✅ style if mobile
>
> ✅ style if desktop
>
> ✅ style if stylus
>
> ✅ style if controller
>
> ✅ combine together
>
> spec https://drafts.csswg.org/mediaqueries/#pointer
>
> caniuse https://caniuse.com/css-media-interaction

```css
/* Laptop/desktop styles */
@media (hover: hover) {}

/* smartphones/touchscreens */
@media (hover: none) and (pointer: coarse) {}

/* device with stylus */
@media (hover: none) and (pointer: fine) {}

/* Wii/Kinext/etc. */
@media (hover: hover) and (pointer: coarse) {}

/* mouse/touchpad */
@media (hover: hover) and (pointer: fine) {}
```
