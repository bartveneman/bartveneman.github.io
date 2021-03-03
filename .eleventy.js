const csso = require('csso')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const embedYoutube = require("eleventy-plugin-youtube-embed")
const embedTwitter = require('./plugins/eleventy-plugin-embed-tweet')

module.exports = eleventyConfig => {
	eleventyConfig.setTemplateFormats(['md', 'html'])

	// PLUGINS
	eleventyConfig.addPlugin(syntaxHighlight)
	eleventyConfig.addPlugin(embedYoutube, {
		lite: true
	})
	eleventyConfig.addPlugin(embedTwitter)

	// COPY THESE FILES DURING BUILD
	eleventyConfig.addPassthroughCopy('img')
	eleventyConfig.addPassthroughCopy('fonts')
	eleventyConfig.addPassthroughCopy('*.png')
	eleventyConfig.addPassthroughCopy('favicon.ico')

	// LAYOUTS
	eleventyConfig.addLayoutAlias('default', 'layouts/default.html')
	eleventyConfig.addLayoutAlias('post', 'layouts/post.html')
	eleventyConfig.addLayoutAlias('bookmark', 'layouts/bookmark.html')

	// FILTERS
	eleventyConfig.addFilter('cssmin', function(code) {
		return csso.minify(code).css
	})

	// COLLECTIONS
	eleventyConfig.addCollection('posts', function(collection) {
		return collection.getFilteredByGlob('blog/*.md').reverse()
	})

	eleventyConfig.addCollection('bookmarks', function(collection) {
		return collection.getFilteredByGlob('bookmarks/*.md').reverse()
	})

	eleventyConfig.addCollection('tags', function(collection) {
		const tags = new Set()

		collection.getAll().forEach(item => {
			if (!item.data.tags) return

			for (const tag of item.data.tags) {
				tags.add(tag)
			}
		})

		return [...tags]
	})


}
