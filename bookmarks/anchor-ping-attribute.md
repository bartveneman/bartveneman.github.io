---
title: Ping attribute on anchor tag
tags:
  - attribute
  - anchor
  - tag
  - html
url: https://twitter.com/svenluijten/status/1363245229533507585
---

> 🤓 TIL about the "ping" attribute on &lt;a> tags, which will send a POST request to the given URLs when the anchor is clicked.
>
> 🔗 https://developer.mozilla.org/en-US/docs/Web

[Docs on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes)

```html
<a href="some-url" ping="/track?param=x&value=1">
  Click me
</a>

<!-- Space separated for multiple trackers -->
<a href="some-url" ping="/tracker-1 /tracker-2">
  Click me
</a>
```

- Crawlers *may* trigger the ping url as the crawl the page
- Multiple pings possible by space-separating urls