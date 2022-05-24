---
title: Things I learned giving CSS workshops
---

Being so frustrated at the capacity of modern day Frontend Devs to write &#39;proper&#39; HTML and CSS, I decided to host a worskhop. For everyone interested, individually, minimal 3 hours each. These are the things I learned. About the devs, but also about myself and frontend in general.

## The setup

- Bring a design you like. A magazine, a dashboard, some conference site, whatever motivates you to build;
- We'll start writing some meaningful HTML as we walk through the design, no wrapper `<div>`s allowed without purpose;
- After the HTML is (mostly) done, we start writing CSS;
- Work until satisfied or energy has run out;

## The lows

- Devs writing `<input />` elements without `<label>` *and* without `<form>` <br>_(No description of the field, no place to send the data to&hellip;)_
- Devs wanting to write their own event handler to listen for `keydown` on said input to check if `enter` was pressed. <br>_(Please use a regular `<form>` instead, because hitting enter in the input field or pressin enter/space while the submit button is focused will submit the form)_
- Apply `display: flex` until it looks good<br>_(Trust me: flexbox is great, but not the solution for all your problems)_
- Wrap a `div` around pretty much anything because <q>it might come handy when starting to write the CSS</q><br>_(No it doesn&#39;t and using a particular put you in a mindset that you need to wrap every single element if you want to somehow align them.)_

## The highs

- We got to spend roughtly ~50% on writing the HTML in workshop that was supposed to teach them about CSS;
- Folks are pretty excited when they see what's prossible in modern CSS (with pretty good browser support): CSS Grid, Flexbox &quot;magic&quot;, `accent-color` and way more;
- Devs were pretty much aware that images need an `alt` attribute, but what to write in it is a mystery to them;
