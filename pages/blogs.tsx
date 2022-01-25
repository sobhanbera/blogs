import Head from "next/head";
import Link from "next/link";
import BlogsList from "../contents";

import styles from '../styles/pages/blogs.module.scss'

export default function Blogs() {
	// since blogs has a isBlog property so making sure that the number of blog rendered is correct
	// for that purpose we have defined an extra variable
	let currentNumberOfBlogsRendered = 0;

	return (
		<div className={styles.blogPage}>
			<Head>
				<title>Blogs By Sobhan Bera</title>
			</Head>

			<h2>My Blogs</h2>

			<div className={styles.blogsArea}>
				{BlogsList.map((blog, index) => {
					// if the current itterator is not blog then render null
					if (!blog.isBlog) return null

					return (
						<div className={styles.blogCard} key={blog.id}>
							<div className={styles.blogSerialNumber}>
								<p>{++currentNumberOfBlogsRendered}</p>
							</div>

							<div className={styles.blogContent}>
								<p><Link href={`${blog.link}?data=${blog.id}`}><a>{blog.title}</a></Link></p>
								{blog.shortDescription ? <p>{blog.shortDescription}</p> : null}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
