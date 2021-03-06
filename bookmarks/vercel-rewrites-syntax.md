---
title: Vercel's rewrites syntax
tags:
  - vercel
  - serverless
---

You can use the `:placeholder` syntax in both the `source` **and** the `destination` in [Vercel's `rewrites` configuration](https://vercel.com/docs/configuration?query=rewrites#project/rewrites). In this example I'm using a `user` ad `project` placeholder to pass into the `destination` as part of the query string.

```json
{
	"version": 2,
	"rewrites": [
		{
			"source": "/~:user/:project/settings",
			"destination": "/projects/settings?project=:project&user=:user"
		}
	]
}
```
