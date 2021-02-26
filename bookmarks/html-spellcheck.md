---
title: Check spelling (or not) in HTML input
url: https://twitter.com/mmatuzo/status/1363484710857543684
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
> Demo: https://codepen.io/matuzo/pen/vYyeYxb?editors=1000
>
> TIL: https://matuzo.at/til/
>
> MDN: https://developer.mozilla.org/en-US/docs/Web

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