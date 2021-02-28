---
title: Five simple steps to improve your typography
tags:
  - css
  - ux
  - typography
---

With the responsive webdesign trend going on lately, more and more focus is put on typography. No matter if you look on a 27 inch desktop screen or a 3 inch handheld device: readability is paramount. I have collected five simple techniques to instantly improve your typography (and mine, of course).

## 1. Use ems for scalable font-sizes

**Move away from the pixels!** That would be a great quote for a designer to start a workshop with, isn’t it!? Use ems and rems instead. As [W3C explains](http://www.w3.org/Style/Examples/007/units), ems are a relative unit, so if a parent element has a calculated font-size of 16px and it’s child has a font-size of 0.875em, then the calculated font-size of the child will be 14px. The advantage? Scalability. If we increase the parent’s to 2em, the child’s font-size will automatically scale up to 28px.

```html
<p>Simple content <span class="child">smaller</span> and back to normal</p>
```

```css
html {
	font-size: 100%; /* Adapt to browser default font-size */
}
p {
	font-size: 1em; /* 16px */
}
.child {
	font-size: 0.875em; /* 0.875 x 16px = 14px */
}
```

## 2. Increase line-height

Large pieces of text become hard to read real quickly. By increasing the line-height (leading, as it’s called in traditional typography) of the body copy the text becomes less cramped together and gets some breathing space. Line-height is a unit-less property. This means that adding em, % or px is [not needed](http://www.w3.org/TR/CSS2/visudet.html#propdef-line-height) (but you can if you want!) as the line-height is relative to the font-size.

```css
html {
	line-height: 1.5;
}
```

## 3. Consistent margins

Create vertical rhythm by using consistent margins. Let each heading and paragraph have the same distance in relation to each other. Harry Roberts wrote an [article about that](http://csswizardry.com/2012/06/single-direction-margin-declarations/).

```css
/**
 * HEADINGS
 * 1: Reset line-height to 1.1 to ease positioning;
 * 2: Create a relatively large margin-top and a smaller
      margin-bottom to visually detach the headings from
      their preceeding element and attach them to the
      next element;
 */
h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: 1.1; /* -1- */
	margin: 3rem auto 0.75rem; /* -2- */
}
```

## 4. Maximum paragraph-length

According to [several(http://trentwalton.com/2012/06/19/fluid-type/) [studies](http://adamdscott.com/typography/set-your-measure-optimizing-line-length-for-reading/) readability increases by setting the number of characters per line between 45 and 75. That is relatively easy to accomplish with CSS, assuming that a single character takes up [about 0.5em of space](http://www.maxdesign.com.au/articles/em/).

```css
p {
	max-width: 34em; /* That's about 68 characters */
}
```

## 5. Provide contrast

Reading black text on a black background is, well, pretty much impossible. Reading white text on a black background will hurt your eyes within less than five minutes. I am exaggerating of course, but it is important to realize this. I don’t know of a golden formula to calculate if a text and background have enough contrast to make it readable and not have too much contrast to make it painful, but if you do: please let me know. Here’s two rules I generally use to make stuff readable.

```css
html {
	background-color: #f2f2f2; /* Not white */
	color: #333; /* Not black */
}
```

Good luck improving the readability of your website!
