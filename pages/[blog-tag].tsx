import Head from "next/head"
import { useRouter } from "next/router"
import React, { ReactElement, useEffect, useState } from 'react'

interface Props {

}
export default function Blog({ }: Props): ReactElement {
	const { asPath } = useRouter()
	const [pageTitle, setPageTitle] = useState('Blog | Sobhan Bera')

	useEffect(() => {
		fetch('/api/blogs', {
			headers: {
				title: asPath,
			}
		})
			.then(res => res.json())
			.then(res => {
				console.log(res)
			}).catch(err => {
				alert("could not load the blog data currently")
			})
	}, [])

	return (
		<div>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			Blog
		</div>
	)
}

