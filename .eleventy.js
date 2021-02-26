const cleanCss = require('clean-css')

module.exports = eleventyConfig => {
	eleventyConfig.setTemplateFormats(['md', 'html'])

	eleventyConfig.addPassthroughCopy('img')
	eleventyConfig.addPassthroughCopy('fonts')
	eleventyConfig.addPassthroughCopy('*.png')
	eleventyConfig.addPassthroughCopy('favicon.ico')

	eleventyConfig.addLayoutAlias('default', 'layouts/default.html')
	eleventyConfig.addLayoutAlias('post', 'layouts/post.html')
	eleventyConfig.addLayoutAlias('bookmark', 'layouts/bookmark.html')

	eleventyConfig.addFilter('cssmin', function(code) {
		return new cleanCss({}).minify(code).styles
	})

	eleventyConfig.addCollection('posts', function(collection) {
		return collection.getFilteredByGlob('blog/*.md').reverse()
	})

	eleventyConfig.addCollection('bookmarks', function(collection) {
		return collection.getFilteredByGlob('bookmarks/*.md').reverse()
	})
}
