---
layout: post
title: CSS tip - double text stroke
---

While watching the 2012 Olympics in London on television I saw BMX riders cycling on their tiny bikes with amazing speeds. The shirt of the [Colombian riders](https://www.google.com/search?q=bmx+colombia) made me come up with the following double text stroke with css.

## HTML

{% highlight html %}
<h1 class="stroked">Colombia</h1>
{% endhighlight %}


## CSS

{% highlight css %}
@import url(http://fonts.googleapis.com/css?family=Bangers);

.stroked {
  font: 8em/1 Bangers, sans-serif;
  text-align: center;
  -webkit-text-stroke: .025em #fff; /* The white stroke, first from inside out */
  -webkit-text-fill-color: #444; /* Make the inner text white */
  text-shadow: /* These four shadows create the most outer stroke */
    -.025em -.025em 0 #444,  
    .025em -.025em 0 #444,
    -.025em  .025em 0 #444,
    .025em  .025em 0 #444;
  color: #fff; /* For non-webkit-browsers */
{% endhighlight %}

That last css rule acts as a fallback for browsers that don’t support the `text-stroke`property. It makes the text go white instead of dark gray.

The effect doesn’t look really great at large font-sizes, but for the time being it will do. I am aware that there are several methods to accomplish this kind of effect, but it seemed nice to give this a try.

Real world example on [CodePen](http://codepen.io/bartveneman/pen/FIrji).
