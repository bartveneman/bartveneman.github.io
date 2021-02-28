---
title: On using FastClick
tags:
  - performance
---

One of the goals I set for this blog is for it to be fast. That involves several techniques, like concatenating and minifying stylesheets and scripts, and gzipping contents and files. But for mobile (touch) users there’s one more plus: FastClick!

## About FastClick

An introduction to [FastClick](https://github.com/ftlabs/fastclick), by the team behind it from [FT Labs](http://labs.ft.com) themselves:

<blockquote cite="https://github.com/ftlabs/fastclick#fastclick">FastClick is a simple, easy-to-use library for eliminating the 300ms delay between a physical tap and the firing of a `click` event on mobile browsers. The aim is to make your application feel less laggy and more responsive while avoiding any interference with your current logic.</blockquote>

So there is an obvious reason to use FastClick: touch users (should) get an improved sense of speed when tapping around this website.

## How it’s included here

I don’t just want to include a script element linking to the source, because that would just download the file, regardless if you are using a touch device or not. It’s only just 8KB minified, but that’s still 8KB that is loaded if you are using a desktop. So I thought of another way of loading it. It’s all done in a single javascript file, so it shouldn’t be that hard to explain. Here is the breakdown.

### The setup

At the bottom of the page I include a single javascript file which runs as soon as it is loaded. The file contains one Immediately-Invoked Function Expression (IIFE). That function looks roughly like this:

```js
(function (window, document) {
    "use strict";

    var scriptInclude = function () {
            &lt;span class="code-comment">// do ScriptInclude function here&lt;/span>
        },

        includefastClick = function () {
            &lt;span class="code-comment">// to determine if FastClick is needed
            // and if so, make sure it is included
            // and executed&lt;/span>
        };

    includefastClick();

}(this, document));
```

### Checking for touch support

Since we only include FastClick for devices that support touch, we should check for that. [Modernizr](http://modernizr.com/download/) sticks to the following rule, so I’ll follow that.

```js
var isTouchDevice =
	'ontouchstart' in window ||
	(window.DocumentTouch && document instanceof DocumentTouch)
```

If this returns true, we know we have to load the fastclick.js file. Otherwise we can just continue with other stuff, like pooring yourself a nice cup of coffee. So the inner workings of `includeFastClick` are like this:

```js
if (isTouchDevice) {
	scriptInclude('path/to/fastclick.min.js', function() {
		FastClick.attach(document.body)
	})
}
```

### Loading FastClick.js

After we have determined that we need to load an extra file, we’re going to load it asynchronously. Scrolling through [microjs](http://microjs.com) gave me an excellent script for this: [ScriptInclude](https://github.com/EvanHahn/ScriptInclude)! ScriptInclude is capable of loading scripts asynchronously and invoking a callback method when the script is loaded, which is exactly what we need here.

The inner function of scriptInclude is actually almost the same as the original plugin, but for this occasion the function is returned, instead of making it global. Let me show it here:

```js
var scriptInclude = (function () {
    var noop = function () {
            return;
        };

    return function () {
        var toLoad = arguments.length,
            callback,
            hasCallback = arguments[toLoad - 1] instanceof Function,
            script,
            i,
            onloaded = function () {
                toLoad -= 1;
                if (toLoad === 0) {
                    callback.call();
                }
            };

        if (hasCallback) {
            toLoad -= 1;
            callback = arguments[arguments.length - 1];
        } else {
            callback = noop;
        }

        for (i = 0; i &lt; toLoad; i += 1) {
            script = document.createElement("script");
            script.src = arguments[i];

            script.onload = script.onerror = onloaded;
            document.head.appendChild(script);
        }
    };

}());
```

### Last steps

That was almost a straight copy-paste (from my own [improved fork](https://github.com/bartveneman/ScriptInclude), that is). <ins>Update 7 October 2013: The original author, Evan Hahn, has merged my improvements into his repository.</ins> Very nice. As you might have already seen in the `includeFastClick` method, we used the callback option to bind FastClick to our page. According to the FastClick documentation a simple `FastClick.attach(document.body)` should suffice. And it does. So now we have FastClick supported on touch devices. Neat.
