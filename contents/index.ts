interface Blog {
	title: string
	body: string
	shortDescription: string
	timestamp: Date | string
	artwork: string
	pageTitle: string
}

const BlogsList: Blog[] = [
	{
		title: 'Deep Dive To Open Source With GitHub',
		body: '',
		shortDescription: 'Open-source software could change the whole workflow of a team or organization.',
		timestamp: '1643029520306',
		artwork: '',
		pageTitle: 'All about your first contribution in GitHub',
	},
]

export default BlogsList
