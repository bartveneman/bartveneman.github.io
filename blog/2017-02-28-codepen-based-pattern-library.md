---
layout: post
title: CodePen based Pattern Library
tags: post
permalink: /2017-02-codepen-based-pattern-library/
---

Today I was working on a side project that could benefit from a little blog on
the side. The project itself is a Rails application, but the blog will run on a
subdomain as a Jekyll&#45;based blog. For brand consistency I would like
both applications to share the same base CSS. While working on different
components in CodePen, I found myself using other
[Pens as resources](https://blog.codepen.io/documentation/editor/adding-external-resources/#other-pens)
and then
came up with the idea: **can I build a pattern library consisting only of Pens
from CodePen?**

## How this should work

Because CodePen allows for using other pens as resources, we could build a tree
of components that would in turn make up our complete pattern library. So this
could probably be the order in which things could happen:

1. One Pen with all the resets, global defaults and settings for the whole library.
   This Pen will be used as a resource for every other Pen.
2. All kinds of different Pens that contain a single component. They also use the
   first Pen as a base. (This concept can form many layers: as long as you can
   nest pens, you can build new layers)
3. Some application that ties all of this together. CodePen has
   [an excellent API](https://blog.codepen.io/documentation/api/url-extensions/)
   for getting contents of a pen in any format you like. This application
   could fetch all the different Pens CSS and tie them together in one or
   more stylesheets.
4. **BONUS** What if you want to tie all these components together in one website?
   Imagine that you&rsquo;d have a single site that consists of a couple of static
   pages with little more than a whole bunch of embedded CodePens!

## The benefits

1. Updating a single Pen that is being used as a resource for other Pens will
   update those Pens automatically too.
2. **It&rsquo;s CodePen!** So you will see instant updates to the components that you're
   working on.
3. **CrossBrowser Testing is integrated at CodePen.** So testing your single
   component in other browsers is pretty easy.
4. Because each component lives in a different Pen it is completely isolated
   from other components.

## Final thoughts

I haven't tried any of this myself yet, but this is just how I imagine how something
like this could work. There are probably some practical limitations that I haven&rsquo;s
taken into account yet. I could imagine that the CodePen guys wouldn&rsquo;t be too
thrilled if a lot of people would start pulling in all these resources all the time.
Maybe your CSS architecture doesn&rsquo;t really fit with this approach. But in the end
it would be an interesting experiment and I for one would **love** to see this in action
to determine if this is a viable idea.
