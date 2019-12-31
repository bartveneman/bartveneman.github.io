---
layout: post
title: An imageless web
tags: post
permalink: /2013-10-an-imageless-web/
---

<p>A picture says a thousand words. Since I recently installed Next Browser on my Android device, I know no picture can say a thousand words too. Browsing with images disabled is pretty worthless. It’s up to us developers to make the best of it.</p>

<p>I installed Next Browser because I read I could prevent images from loading when not connected to wifi. It seemed like a reasonable thing to do, as it speeds up loading times and it saves lots of bandwidth. But once I got out on the internet a lot of websites didn’t seem to make sense: missing gradients, low (or no) contrast and some pages completely collapse because no explicit width and height were set on the missing images. So usability is at stake here. Let’s try to fix that.</p>

<h2>What goes wrong when images are disabled</h2>
<p>As stated before: some webpages completely collapse or become unusable when images are not visible. Ironically, Next Browser’s homepage is <a href="http://nextbrowser.goforandroid.com/index-en.html">an example of that</a>. Besides the fact that it’s not responsive it has no fallback colors for the huge background images, which results in unreadable pieces of text.</p>

<img src="/img/2013-10-16-good-vs-bad-citizen.jpg" alt="">

<p>I created a <a href="http://jsfiddle.net/yqSMQ/">test on JSFiddle</a> to see how browsers behave when images are disabled or missing (that’s the same when it comes to document layout). See the results on CodePen <em><a href="http://codepen.io/bartveneman/pen/qzCte">browser behaviour on empty images</a></em>.</p>

<p>What I find quite interesting about this test is that Firefox doesn’t keep the image dimensions, even though they are present in the image tag. The default browser in Android 4+ is even worse: it doesn’t show a single thing: no alt description and no border. But the majority of browsers are very good citizens: keeping image dimensions, showing a border as an image outline and showing the alt text within that border.</p>

<img src="/img/2013-10-16-good-citizen.png" alt="Google Crome being a good citizen showing border, alt text and keeping dimensions">

<h2>Fixing broken images</h2>
<p>The easiest and most obvious solution is, of course, to make sure that every image url works. But sometimes you’re not in the position to do this, as images on the web might ‘disappear’ or move without notice. The best solution is to apply some basic styles to the <code>img</code> tag.</p>

<pre><code class="language-css">img {
    <span class="code-comment">/* a small font-size to try to keep the text within the original boundaries */</span>
    font-size: 0.5rem;
    <span class="code-comment">/* prevent a bold text as this tends to take up more space than regular font-weights */</span>
    font-weight: 400;
    <span class="code-comment">/* Squeeze lines together */</span>
    line-height: 1.1;
    <span class="code-comment">/* If it's still too large: hide it */</span>
    overflow: hidden;
}</code></pre>

<p>The main disadvantage of this is that paddings, borders, margins etcetera are relative to the <code>font-size</code> that the image has, so it’s important to keep that in mind when working with this approach. You could skip this step, but make sure to provide a useful, readable fallback for the alt text when the image is broken.</p>

<p>While this probably not a design pattern that you and I will probably use a lot, I think it might turn out to be quite useful when you’re not in control of your website’s imagery.</p>
