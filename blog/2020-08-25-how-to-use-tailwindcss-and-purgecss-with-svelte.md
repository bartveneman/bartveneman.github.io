---
title: How to use TailwindCSS and PurgeCSS with Svelte
tags: ['svelte', 'tailwindcss', 'purgecss', 'css', 'performance']
---

The authors of TailwindCSS [insist that you use PurgeCSS](https://tailwindcss.com/docs/controlling-file-size) with their library, otherwise you'll ship enomous amounts of unused CSS to your customers. I have been using TailwindCSS for [Project Wallace](https://www.projectwallace.com) for quite some time now, but only recently I decided to give PurgeCSS a try and I must admit that it's incredibly painless to setup. Here's how I did it for Project Wallace, which is a basic [Sapper project](https://sapper.svelte.dev/).

## PurgeCSS Config

There is this single line in [`tailwind.config.js`](https://github.com/projectwallace/content/blob/4b6505a689b330ba5216bef7536e3d77d2591264/tailwind.config.js#L2) that I've set:

```js
// tailwind.config.js
module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.svelte"
  ],
  // ... rest of the Tailwind config goes here ...
}
```

This tells PurgeCSS to look at all the `.html` and `.svelte` file in my project. The HTML and Svelte files are the ones containing the CSS class names from Tailwind. PurgeCSS needs to know where the html is, so it can find all the classnames that are used so it can remove the ones that aren't used from the CSS.

The amazing part of this is that it's built into Tailwind by default!
