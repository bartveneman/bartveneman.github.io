---
title: Request submit instead of submitting a form
tags:
  - javascript
  - form
  - ux
---

> HTMLFormElement.requestSubmit() in a nutshell. 👇
>
> Spec: https://t.co/vlsZfoYdQA
> MDN: https://t.co/pJcTn6WMPZ#devsheets
>
> Video alt: Form that is not submitting on button click due to failing validations. `submit()` ignores errors and submits – `requestSubmit()` validates first. pic.twitter.com/tJTWt5xEXS
>
> — Stefan Judis (@stefanjudis) [February 14, 2020](https://twitter.com/stefanjudis/status/1228255792287141889)

Using `form.requestSumit()` is sometimes useful (I don't use `form.submit()` that often) to let the built-in browser validation kick in before sending off the form to the server.
