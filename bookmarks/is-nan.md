---
title: Differences between window.isNaN() and Number.isNaN()
tags:
   - javascript
url: https://twitter.com/Wattenberger/status/1257808141103910916
---

> TIL the global isNaN() function and Number.isNaN() are different
>
> global isNaN() coerces into a number
>
> Number.isNaN() (ES6) doesn't, and only returns true for NaN

```js
window.isNaN(undefined)
//=> true

window.isNaN(NaN)
//=> true

Number.isNan(undefined)
//=> false

Number.isNan(NaN)
// true
```