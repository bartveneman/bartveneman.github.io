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
- Wrap a `div` around pretty much anything because <q>it might come handy when starting to write the CSS</q><br>_(No it doesn&#39;t and using a particular CSS framework put you in a mindset that you need to wrap every single element if you want to somehow align them. Even though the framework didn't advertise that at all.)_
- Nobody seems to have an idea about how `position: absolute` works. <br>Like it's some kind of magic box and tinkering with it will eventually solve their issue;
- Devs didn't recognise that their DevTools were telling them why their properties/values weren't working. <br>DevTools do an excellent job these days of showing a warning when a declaration isn't applied because a parent element is missing a certain property, or some other reason. Clearly folks had never heard of this option;
- Some folks thought it's only possible to create rows and columns using &lt;div&gt;s.<br>

## The highs

- We got to spend roughtly ~50% on writing the HTML in workshop that was supposed to teach them about CSS and everyone loved it, no exceptions! Folks were generally unaware of all the options available in HTML. Also, they were very open to the idea of building the HTML first and then solving the styling with CSS, instead of trying to let their HTML match the design as closely as possible;
- Folks are pretty excited when they see what's prossible in modern CSS (with pretty good browser support): CSS Grid, Flexbox &quot;magic&quot;, `accent-color` and way more;
- Devs were pretty much aware that images need an `alt` attribute, but what to write in it is a mystery to them;

