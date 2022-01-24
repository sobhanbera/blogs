import React, { ReactElement } from 'react'
import Link from 'next/link'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'

import { useTheme } from '../contexts/ThemeProvider'
import styles from '../styles/components/SimpleHeader.module.scss'

interface Props {
}
export default function SimpleHeader({ }: Props): ReactElement {
	const { theme, toggleTheme } = useTheme()

	return (
		<header className={styles.header}>
			<div className={styles.headerMain}>
				<div className={styles.developerName}>
					<p>
						<Link href="/">
							<a>Sobhan Bera</a>
						</Link>
					</p>
				</div>

				<nav className={styles.headerNavigation}>
					<ul>
						<li><Link href="/"><a>Home</a></Link></li>
						<li><Link href="/about"><a>About</a></Link></li>
						<li><Link href="/blogs"><a>Blogs</a></Link></li>
						<li>
							{theme ? <MdDarkMode onClick={toggleTheme} /> : <BsFillSunFill onClick={toggleTheme} />}
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
