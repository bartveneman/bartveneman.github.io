---
title: How Kent C. Dodds structures his Express apps
tags:
  - nodejs
  - express
---

[Blog post](https://kentcdodds.com/blog/how-i-structure-express-apps)

- He puts an env check in index.js to determine whether nodemon should be used or a regular Node process
- Properly closes his app on exit
- Sets it up so that it's easy to test (because he's Kent, after all)