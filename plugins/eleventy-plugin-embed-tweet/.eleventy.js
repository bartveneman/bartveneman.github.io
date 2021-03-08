const cheerio = require('cheerio')
const Cache = require('@11ty/eleventy-cache-assets')

// IMPORTANT NOTE
// Most of the content is taken from here:
// https://github.com/gfscott/eleventy-plugin-embed-twitter/blob/main/.eleventy.js
//
// I have adapted it to fit my needs, because I really don't want embed script
// tags on my website for privacy+performance reasons.

function spotPattern(str) {
	const pattern = /<p>(?:\s*)(?:<a(?:.*)>)?(?:\s*)(?:https?:)?(?:\/\/)?(?:w{3}\.)?(?:twitter\.com)\/([a-zA-Z0-9_]{1,15})?(?:\/(?:status)\/)(\d+)?(?:\S*)(?:\s*)(?:<\/a>)?(?:\s*)<\/p>/g
	return str.match(pattern)
}

function extractMatch(str) {
	const pattern = /<p>(?:\s*)(?:<a(?:.*)>)?(?:\s*)(?:https?:)?(?:\/\/)?(?:w{3}\.)?(?:twitter\.com)\/([a-zA-Z0-9_]{1,15})?(?:\/(?:status)\/)(\d+)?(?:\S*)(?:\s*)(?:<\/a>)?(?:\s*)<\/p>/
	const [, username, tweetId] = pattern.exec(str)
	return { username, tweetId }
}

async function fetchTweet({ username, tweetId }) {
	const url = new URL('https://publish.twitter.com/oembed')
	url.searchParams.append(
		'url',
		`https://twitter.com/${username}/status/${tweetId}`,
	)

	return Cache(url.href, {
		type: 'json',
		duration: '1y',
	})
}

function buildEmbed({ html }) {
	const $ = cheerio.load(html, null, false)
	const theTweet = $('blockquote').html()

	return `
    <blockquote class="tweet">${theTweet}</blockquote>
  `
}

module.exports = (eleventyConfig, options) => {
	eleventyConfig.addTransform('embedTwitter', async (content, outputPath) => {
		if (!outputPath || !outputPath.endsWith('.html')) {
			return content
		}

		const matches = spotPattern(content)
		if (!matches) return content

		for (const stringToReplace of matches.values()) {
			const { username, tweetId } = extractMatch(stringToReplace)
			const tweet = await fetchTweet({ username, tweetId })
			const embed = buildEmbed(tweet)
			content = content.replace(stringToReplace, embed)
		}

		return content
	})
}
