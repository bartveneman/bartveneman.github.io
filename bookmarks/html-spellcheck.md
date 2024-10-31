---
title: Check spelling (or not) in HTML input
tags:
  - html
  - attribute
  - spelling
  - validation
  - form
  - ux
---

> TIL: You can use the spellcheck attribute to instruct browsers that, if possible, an element should or should not be checked for spelling errors.
>
> Demo: https://t.co/1DL7P6EXPD
> TIL: https://t.co/JUR9AtvQ7q
> MDN: https://t.co/Ghnwp769AL pic.twitter.com/4nMosG697K
> — Manuel Matuzović (@mmatuzo) [February 21, 2021](https://twitter.com/mmatuzo/status/1363484710857543684?ref_src=twsrc%5Etfw)

You can use the `spellcheck` attribute to control the browser's spellcheck capability for form inputs or HTML elements with `contenteditable`.

[Docs on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).

Possible values:

```html
<textarea spellcheck>
  Spelling is checked
</textarea>

<textarea spellcheck="false">
  Spelling is not checked
</textarea>
```
