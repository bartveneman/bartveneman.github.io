---
title: Differences between window.isNaN() and Number.isNaN()
tags:
   - javascript
---

https://twitter.com/Wattenberger/status/1257808141103910916

```js
window.isNaN(undefined)
//=> true

window.isNaN(NaN)
//=> true

window.isNaN('')
//=> false

Number.isNan(undefined)
//=> false

Number.isNan(NaN)
//=> true

Number.isNaN('')
//=> false
```
