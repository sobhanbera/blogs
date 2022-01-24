import type { NextPage } from 'next'

import styles from '../styles/pages/main.module.scss'

const Home: NextPage = () => {
	return (
		<div className={styles.mainPage}>
			<div className={styles.greeting}>
				<h2>Hello There,</h2>
				<h2>I am Sobhan Bera</h2>
			</div>

			<div className={styles.textFlipper}>
				<ul className={styles.flipper}>
					<li>Android Developer</li>
					<li>Web Developer</li>
					<li>Student</li>
					<li>Quick Learner</li>
					<li>Linux/Neovim User</li>
				</ul>
			</div>
		</div>
	)
}

export default Home

