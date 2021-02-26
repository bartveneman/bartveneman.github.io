---
title: Word-break opportunities
tags:
  - css
  - accessibility
  - ux
url: https://twitter.com/frontenddude/status/1282652206957842432
---

> 🔥 Have you heard about the &lt;wbr> tag?
>
> Use the &lt;wbr> tag to define word break opportunities. If the text can be displayed on one line, it won’t break. If there’s not enough space, it will.

```html
<p>
  If there isn't enough space
  this paragraph will break here, <wbr>
  if there is enough space, it won't.
</p>
```