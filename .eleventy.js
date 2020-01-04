module.exports = eleventyConfig => {
	eleventyConfig.setTemplateFormats(['md', 'html'])
	eleventyConfig.addPassthroughCopy('img')
	eleventyConfig.addPassthroughCopy('*.png')
	eleventyConfig.addPassthroughCopy('favicon.ico')
	eleventyConfig.addLayoutAlias('default', 'layouts/default.html')
	eleventyConfig.addLayoutAlias('post', 'layouts/post.html')
}
