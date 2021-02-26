---
title: CSS Form validation
tags:
  - css
  - form
  - validation
  - ux
url: https://www.bram.us/2021/01/28/form-validation-you-want-notfocusinvalid-not-invalid/
---

> Form Validation: You want `:not(:focus):invalid`, not `:invalid`

Turns out that it *is* possible to giver proper user feedback about form validations, (partially) preventing the need to include heaps of javascript on a page to do basic validation feedback.

```CSS
.error-message {
    display: none;
}

input:not(:focus):not(:placeholder-shown):invalid {
  border-color: var(--color-invalid);
}

input:not(:focus):not(:placeholder-shown):invalid ~ .error-message {
  display: block;
}

input:not(:focus):not(:placeholder-shown):valid {
  border-color: var(--color-valid);
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="Form Validation on Blur (4/4)" src="https://codepen.io/bramus/embed/preview/ExNYBOK?height=265&theme-id=dark&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bramus/pen/ExNYBOK'>Form Validation on Blur (4/4)</a> by Bramus
  (<a href='https://codepen.io/bramus'>@bramus</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>