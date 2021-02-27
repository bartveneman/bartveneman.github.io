---
title: Request submit instead of submitting a form
url: https://twitter.com/stefanjudis/status/1228255792287141889
tags:
  - js
  - form
  - ux
---

> HTMLFormElement.requestSubmit() in a nutshell. 👇
>
> Spec: [https://html.spec.whatwg.org/multipage/forms.html#dom-form-requestsubmit-dev](https://html.spec.whatwg.org/multipage/forms.html#dom-form-requestsubmit-dev)
>
> MDN: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/requestSubmit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/requestSubmit)
>
> #devsheets
>
> Video alt: Form that is not submitting on button click due to failing validations. `submit()` ignores errors and submits – `requestSubmit()` validates first.

Using `form.requestSumit()` is sometimes useful (I don't use `form.submit()` that often) to let the built-in browser validation kick in before sending off the form to the server.
