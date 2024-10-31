---
title: Highlight the currently active navigation item
tags:
  - html
  - css
  - accessibility
---

> Want to style the current active navigation item?
>
> Use
>
> `[aria-current="page"] { // your styles }`
>
> instead of setting an active className, so screen reader users will also recognize this as the current active page.
>
> More info: https://t.co/OJxjnU9uqa
>
> — Michael Scharnagl (@justmarkup) [March 24, 2020](https://twitter.com/justmarkup/status/1242350884023078912)

[The mentioned article](https://tink.uk/using-the-aria-current-attribute/) lists a whole bunch more values that can be used as `aria-current`, like `step` or `date`.

```css
[aria-current="page"] {
  // your styles
}
```
