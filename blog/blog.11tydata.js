module.exports = {
	layout: 'post',
	permalink:
		'/{{ page.date | date: "%Y-%m" }}-{{ page.fileSlug | slug }}/index.html'
}
