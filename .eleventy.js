const path = require('path')
const csso = require('csso')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const embedYoutube = require('eleventy-plugin-youtube-embed')
const embedTwitter = require('./plugins/eleventy-plugin-embed-tweet')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const Image = require('@11ty/eleventy-img')

async function imageShortcode(src, alt, sizes = '(prefers-reduced-data: reduce) 200px, (min-width: 810px) 810px, (min-width: 400px) 400px, 200px') {
	let metadata = await Image(src, {
		widths: [400, 810],
		formats: ['webp', 'jpeg'],
		outputDir: './_site/img',
		filenameFormat: (id, src, width, format, options) => {
			const extension = path.extname(src)
			const name = path.basename(src, extension)
			return `${name}-w${width}.${format}`
		}
	})
	let imageAttributes = {
		alt,
		sizes,
		loading: 'lazy',
		decodng: 'async'
	}

	return Image.generateHTML(metadata, imageAttributes, {
		whitespaceMode: 'inline'
	})
}

module.exports = (eleventyConfig) => {
	eleventyConfig.setTemplateFormats(['md', 'html', 'njk', 'liquid'])

	// PLUGINS
	eleventyConfig.addPlugin(syntaxHighlight)
	eleventyConfig.addPlugin(embedYoutube, {
		lite: true,
	})
	eleventyConfig.addPlugin(embedTwitter)
	eleventyConfig.addPlugin(pluginRss)
	eleventyConfig.addLiquidShortcode('image', imageShortcode)

	// COPY THESE FILES DURING BUILD
	eleventyConfig.addPassthroughCopy('img')
	eleventyConfig.addPassthroughCopy('fonts')
	eleventyConfig.addPassthroughCopy('*.png')
	eleventyConfig.addPassthroughCopy('favicon.ico')
	eleventyConfig.addPassthroughCopy('robots.txt')

	// LAYOUTS
	eleventyConfig.addLayoutAlias('default', 'layouts/default.html')
	eleventyConfig.addLayoutAlias('post', 'layouts/post.html')
	eleventyConfig.addLayoutAlias('bookmark', 'layouts/bookmark.html')

	// FILTERS
	eleventyConfig.addFilter('cssmin', function (code) {
		return csso.minify(code).css
	})

	// COLLECTIONS
	eleventyConfig.addCollection('posts', function (collection) {
		return collection.getFilteredByGlob('blog/*.md').reverse()
	})

	eleventyConfig.addCollection('bookmarks', function (collection) {
		return collection.getFilteredByGlob('bookmarks/*.md').reverse()
	})

	eleventyConfig.addCollection('tags', function (collection) {
		const tags = new Set()

		collection.getAll().forEach((item) => {
			if (!item.data.tags) return

			for (const tag of item.data.tags) {
				tags.add(tag)
			}
		})

		return [...tags]
	})
}
