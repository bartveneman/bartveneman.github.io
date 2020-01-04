module.exports = eleventyConfig => {
	eleventyConfig.setTemplateFormats(['md', 'html'])
	eleventyConfig.addPassthroughCopy('img')
	eleventyConfig.addLayoutAlias('default', 'layouts/default.html')
	eleventyConfig.addLayoutAlias('post', 'layouts/post.html')
}
