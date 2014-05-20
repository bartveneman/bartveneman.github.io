# www.bveneman.nl
The goal of this site is to offer an insight to a developers daily struggles, wins and ideas. The UI is minimal and optimized for a distraction-free reading experience.
A secondary goal is making this site as fast as possible. This means:

- No webfonts;
- No external stylesheet(s);
- Only Javascript for Google Analytics;
- Hardly any images, and preferrably SVG's;

Do you spot any potential performance wins?

## Gulp tasks
Before running tasks, make sure that all devDependencies are installed via npm.

### `gulp sass`
1. Compile SASS into CSS
2. Prefix all the things
3. Report filesize
4. Combine media queries
5. Minify CSS
6. Report optimized filesize
7. Report gzipped filesize
8. Save as...

### `gulp html`
Minify HTML inside the `_site` folder, but keep the comments.

### `gulp watch`
Watch files for changes to run the above listed tasks.
