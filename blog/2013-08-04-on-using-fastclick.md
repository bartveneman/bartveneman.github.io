---
layout: post
title: On using FastClick
tags: post
permalink: /2013-08-on-using-fastclick/
---

<p>One of the goals I set for this blog is for it to be fast. That involves several techniques, like concatenating and minifying stylesheets and scripts, and gzipping contents and files. But for mobile (touch) users there’s one more plus: FastClick!</p>

<h2>About FastClick</h2>
<p>An introduction to <a href="https://github.com/ftlabs/fastclick">FastClick</a>, by the team behind it from <a href="http://labs.ft.com/">FT Labs</a> themselves:</p>
<blockquote cite="https://github.com/ftlabs/fastclick#fastclick">FastClick is a simple, easy-to-use library for eliminating the 300ms delay between a physical tap and the firing of a `click` event on mobile browsers. The aim is to make your application feel less laggy and more responsive while avoiding any interference with your current logic.</blockquote>
<p>So there is an obvious reason to use FastClick: touch users (should) get an improved sense of speed when tapping around this website.</p>

<h2>How it’s included here</h2>
<p>I don’t just want to include a script element linking to the source, because that would just download the file, regardless if you are using a touch device or not. It’s only just 8KB minified, but that’s still 8KB that is loaded if you are using a desktop. So I thought of another way of loading it. It’s all done in a single javascript file, so it shouldn’t be that hard to explain. Here is the breakdown.</p>

<h3>The setup</h3>
<p>At the bottom of the page I include a single javascript file which runs as soon as it is loaded. The file contains one Immediately-Invoked Function Expression (IIFE). That function looks roughly like this:</p>
<pre>&lt;code>(function (window, document) {
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

}(this, document));&lt;/code></pre>

<h3>Checking for touch support</h3>
<p>Since we only include FastClick for devices that support touch, we should check for that. <a href="http://modernizr.com/download/">Modernizr</a> sticks to the following rule, so I’ll follow that.</p>
<pre><code>var isTouchDevice =
    ("ontouchstart" in window)
    || window.DocumentTouch
    &amp;&amp; document instanceof DocumentTouch;</code></pre>
<p>If this returns true, we know we have to load the fastclick.js file. Otherwise we can just continue with other stuff, like pooring yourself a nice cup of coffee. So the inner workings of <code>includeFastClick</code> are like this:</p>
<pre><code>if (isTouchDevice) {
    scriptInclude("path/to/fastclick.min.js", function () {
        FastClick.attach(document.body);
    });
}</code></pre>

<h3>Loading FastClick.js</h3>
<p>After we have determined that we need to load an extra file, we’re going to load it asynchronously. Scrolling through <a href="http://microjs.com/#">microjs</a> gave me an excellent script for this: <a href="https://github.com/EvanHahn/ScriptInclude">ScriptInclude</a>! ScriptInclude is capable of loading scripts asynchronously and invoking a callback method when the script is loaded, which is exactly what we need here.</p>
<p>The inner function of scriptInclude is actually almost the same as the original plugin, but for this occasion the function is returned, instead of making it global. Let me show it here:</p>
<pre><code>var scriptInclude = (function () {
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

}());</code></pre>

<h3>Last steps</h3>
<p>That was almost a straight copy-paste (from my own <a href="https://github.com/bartveneman/ScriptInclude">improved fork</a>, that is). <ins>Update 7 October 2013: The original author, Evan Hahn, has merged my improvements into his repository.</ins> Very nice. As you might have already seen in the <code>includeFastClick</code> method, we used the callback option to bind FastClick to our page. According to the FastClick documentation a simple <code>FastClick.attach(document.body)</code> should suffice. And it does. So now we have FastClick supported on touch devices. Neat.</p>
