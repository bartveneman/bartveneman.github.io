---
title: Using Custom CSS to improve the web
tags:
  - css
---

Like many other web devs I browse the web quite a lot. And while every website has it's own __personality__, some of them have a bit _too much_ for my taste. Luckily I have a browser plugin to apply some [**custom CSS to any site**](https://addons.mozilla.org/en-GB/firefox/search/?q=custom%20css), so I'll share a short list of snippets that I use to improve my everyday life.

## Twitter.com

Twitter is where I have most of my conversations with other folks in Tech. This means that the (chronological) timeline is most important to me. Other things worth my time are:

- **My DM's**
- **Notifications**
- **Bookmarks**

Things that aren't useful and should therefore be hidden:

- **DM Drawer**: (why DM's needs to be on the page twice is a mystery to me)
- **Trending Now**: I simply don't care. I read the news.
- **Explore**: no clue, don't need it
- **Lists**: Never used 'em
- **Who To Follow**: Seriously?

```css
/* Floating: DM's */
[data-testid="DMDrawer"],

/* Menu: Explore */
[data-testid="AppTabBar_Explore_Link"],

/* Menu: Lists */
a[href*="/lists"],


/* Sidebar: Trending now */
[aria-label="Timeline: Trending now"],

/* Sidebar: Who to follow */
[role="complementary"][aria-label="Who to follow"],

/* Sidebar: Recommended topics */
[aria-label="Timeline: "] 
{
	display: none;
}

/* Sidebar: Recommended topics */
.r-1bro5k0 {
	min-height: 0;
}
```

## Xstate.JS.org

I *adore* XState and I use it in many different projects in many different forms (backend, frontend, models, controllers, UI). But whenever I use the Visualizer, I run out of horizontal space for the editor pretty quickly. I must admit that working on a 34" ultrawide is a luxury, but with that luxury I like to have more space to write my Finite State Machines.

Kudos to David Kourshid for using Custom Properties for setting the width. Makes it extra easy to override.

```css
html {
	font-size: 120%;
	
 	/* Crank up the sidebar width (where we write the code) */
	--sidebar-width: 50rem;
}
```

## Wikipedia.org

Wikipedia is for looking up things and then reading. Lots of reading. And wikipedia articles tend to be long. That's fine, but the default styles aren't really optimized for long-form reading. So here's the summary of my

```css
/* Make content more pleasant to read */
body {
	font-weight: 400;
	font-size: 1.2em;
}

p,
li {
	max-width: 90ch;
}

/* Hide distracting elements (ads, navigations) */
#siteSub,
#mw-head,
#p-coll-print_export,
#p-tb,
#p-interaction,
#p-navigation,
#footer-info-copyright,
.wbc-editpage,
#footer-places,
#footer-icons {
	display: none;
}

#mw-head-base {
	height: 3em;
}
```

## GatsbyJS.com

I use Gatsby for work and I'm not that interested in seeing marketing stuff. I need docs to make things work.

```css
#marketing-banner {
	display: none;
}
```

## DuckDuckGo.com

There's pretty much no focus state for search results, apart from a tiny 14px url changing from green to blue. So I added my own.

```css
.result:focus-within {
	outline: 2px solid;
}
```

---

Although most of this CSS isn't too hard, I've had to look up some attribute selectors to see the difference between some of them. That makes writing this custom CSS a little bit more of a fun journey.

Do you use custom CSS on any websites? Share your snippets with me (and everyone else) [via Twitter](https://twitter.com/bartveneman)!
