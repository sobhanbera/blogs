// developer meta data imports
import AboutMeMD from "./blogs/about-me"

// blogs import
import Blog from "./blogs/deep-dive-to-open-source-with-github"

/**
* id: unique string to denote every blog
* title: the main title of the blog
* body: the main body or the main blog
* shortDescription: any short description about the blog if any
* timestamp: when the blog was published
* artwork: any image for header or thumbnail
* pageTitle: the actual title of the website
* isBlog: since the blog could be for any other page too, so for recognizing blogs this property should exist
* link: the link when the particular blog will be shown
**/
export interface Blog {
	id: string
	title: string
	body: string
	shortDescription: string
	timestamp: Date | string
	artwork: string
	pageTitle: string
	isBlog: boolean
	link: string
}

export const AboutMe: Blog = {
	id: '100',
	title: 'About Me',
	body: AboutMeMD,
	shortDescription: '',
	timestamp: '',
	artwork: '',
	pageTitle: 'About | Sobhan Bera',
	isBlog: false,
	link: 'about',
}

const BlogsList: Blog[] = [
	{ ...AboutMe }, // about my self in MD
	// now goes all the actual blogs list...
	{
		id: '1',
		title: 'Deep Dive To Open Source With GitHub',
		body: Blog,
		shortDescription: 'Open-source software could change the whole workflow of a team or organization.',
		timestamp: '1643029520306',
		artwork: '',
		pageTitle: 'All about your first contribution in GitHub | Sobhan Bera',
		isBlog: true,
		link: 'deep-dive-to-open-source-with-github',
	},
]
export default BlogsList
