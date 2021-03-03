---
title: Accessible HTML inputs
tags:
  - accessibility
  - html
  - form
---

Chris Coyier tweeted a [link to an article](https://www.ovl.design/text/inclusive-inputs/) about accessible inputs, and I find tis a great example of how to put together a bunch of form elements.

```html
<div class="form-group">
  <label for="password">
    Password
    <span class="required" aria-hidden="true">*</span>
    <span class="sr-only">required</span>
  </label>
  <input
    type="password"
    id="password"
    name="password"
    autocomplete="new-password"
    aria-invalid="true"
    aria-describedby="error_pw desc_pw"
  >
  <p class="aside" id="desc_pw">Your password needs to have at least eight characters.</p>
  <p class="error" id="error_pw">Please check your input.</p>
</div>
```