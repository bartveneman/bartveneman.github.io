---
title: Automatic pretty permalinks for Eleventy
---

Here's what I want to achieve: a source file `blog/2020-01-01-post-slug.md` should turn into a file generated at `_site/2020-01-post-slug/index.html`. The trick is to create a `11tydata.js` file that tells Eleventy how to structure all permalinks in that folder.

This is the root folder of my Eleventy-based website.

```
.eleventy.js
blog
├── 2019-12-31-post-slug.md
├── 2020-01-01-another-post-slug.md
├── blog.11tydata.js
```

## The solution

There's a [cool trick you can do with Eleventy's data files](https://www.11ty.dev/docs/data-template-dir/) and that is that you can apply them to a certain directory only if you place the file there. So the configuration I supply in `blog/blog.11tydata.js` only applies to all files in the `blog/` folder.
This is the part that does the trick to generate pretty permalinks:

```js
module.exports = {
	permalink: {%raw%}'/{{ page.date | date: "%Y-%m" }}-{{ page.fileSlug | slug }}/index.html'{%endraw%}
}
```

As you can see, my permalinks are [based on the page's date and `fileSlug`](https://www.11ty.dev/docs/permalinks/#use-data-variables-in-permalink). That is possible by default in Eleventy, so there was no special trick here.
