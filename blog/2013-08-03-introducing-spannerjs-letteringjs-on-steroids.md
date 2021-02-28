---
title: Introducing Spanner.js - Lettering.js on steroids
tags:
  - javascript
  - performance
---

In an attempt to make the web faster, more and more developers are trying to discard frameworks and use tools like [Require.js](http://requirejs.org/) to only load files when they are really needed. As a result, many of the _great_ plugins written for these frameworks become useless. Even one of my all-time favorites: Dave Rupert’s [Lettering.js](http://letteringjs.com/). So I thought it would be a great time to take matters into my own hands, so last week I created a jQuery-free, plain Javascript version of Lettering.js, called [Spanner.js](https://github.com/bartveneman/Spanner.js). And I can tell you: it’s pretty darn fast!

## What’s different?

As Lettering.js uses strings or innerHTML to apply the wrapping, Spanner.js takes a DOM based approach. This presents an improvement right away: Spanner.js is capable of dealing with inline tags in your targeted element(s), such as `<br>`, `<a>` or `<em>` for example.
Another difference is that Spanner.js is framework independent, whereas Lettering.js is a jQuery plugin. So there’s no overhead when using Spanner.js for your kerning.

## Performance

Spanner.js works at blazing speeds, as [tests on JSPerf.com show](http://jsperf.com/my-lettering-vs-jquery-lettering/6). According to these tests Spanner.js is up to 26 times faster!

![Figure showing perfomance differences between Spanner.js and Lettering.js](/img/2013-08-03-jsperf-lettering-vs-spanner.png)

## How to use

Using Spanner.js is quite easy. After including Spanner.js at the bottom of your page, there is a globally available function called _spanner_, which you can use to apply the spanning to your element(s).

```html
<h1 id="kern-me">Text</h1>
<!-- lots of other stuff here -->
<script src="path/to/spanner.js"></script>
```

Select context and apply spanning:

```js
spanner(document.getElementById('kern-me'))
```

And voila, you’re done! The resulting html should be like this:

```html
<h1 id="kern-me">
	<span class="char1">T</span>
	<span class="char2">e</span>
	<span class="char5">x</span>
	<span class="char4">t</span>
</h1>
```

View an [example on CodePen](http://codepen.io/bartveneman/pen/FjJmy).

## Drawbacks of Spanner.js

Yes, there are some drawbacks. Lettering.js is capable of splitting your content into words or lines and [add classes accordingly](https://github.com/davatron5000/Lettering.js/wiki). I haven’t added these functionalitites to Spanner.js yet, but might do that in the future. But is you’re in a forking mood, please have a go yourself!

## Conclusion

All in all this is just another Javascript tool, but I still hope you’ll find it a useful addition to your toolbox. Any comments or questions are welcome on [Twitter](http://twitter.com/bartveneman) or make a pull request on [GitHub](https://github.com/bartveneman/Spanner.js).
