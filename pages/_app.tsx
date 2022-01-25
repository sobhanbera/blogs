import type { AppProps } from 'next/app'

import SimpleHeader from '../components/SimpleHeader'
import ThemeProvider from '../contexts/ThemeProvider'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<div className={'main-content'}>
				<SimpleHeader />

				<Component {...pageProps} />
			</div>
		</ThemeProvider >
	)
}

export default MyApp
