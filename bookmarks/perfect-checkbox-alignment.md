---
title: Perfect checkbox alignment
url: https://twitter.com/adamwathan/status/1217864323466432516
tags:
  - html
  - form
  - ux
---

> 🔥 Perfectly aligning checkboxes with text is super annoying, especially when the text wraps on to multiple lines.
>
> Here's an approach I use to always perfectly center them with the first line of text, no matter the text length or size 👉
>
> [https://codepen.io/adamwathan/pen/bGNxMpz?editors=1000](https://codepen.io/adamwathan/pen/bGNxMpz?editors=1000)

```html
<div class="mt-4">
  <!--
   Here we use a zero-width space character to trick the container for the checkbox into being
   the same height as a single line of label text by adopting the text's line-height.

   Then we center the checkbox inside of its own container.
  -->
  <div class="flex items-start text-sm">
    <div class="flex items-center">
      <!-- Zero-width space character, used to align checkbox properly -->
      &#8203;
      <input
        id="option3"
        type="checkbox"
        class="form-checkbox border-gray-400 h-4 w-4 text-indigo-600"
      />
    </div>
    <label for="option3" class="ml-3 font-medium text-gray-700"
      >Longer checkbox item that unfortunately wraps on to two separate
      lines</label
    >
  </div>
  <p class="mt-1 ml-4 pl-3 block text-sm text-gray-600">
    This solution always centers the checkbox with the first line of text, no
    matter the text size or checkbox size.
  </p>
</div>
```
