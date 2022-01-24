import React, { createContext, useContext, useState, useEffect } from 'react'

interface ThemeContextProviderProp {
	theme: boolean
	toggleTheme(): void
}
const ThemeContextProvider = createContext<ThemeContextProviderProp>({
	theme: true,
	toggleTheme: () => { },
})
interface ThemeProviderProps {
	children: React.ReactChildren
}
export default function ThemeProvider(props: ThemeProviderProps) {
	const [theme, setTheme] = useState(true) // if theme is light than value is true else false

	// get the theme from local data of browser
	useEffect(() => {
		updateThemeEverywhere()

		document.body.classList.add(String(theme ? 'light' : 'dark'))
	}, [])

	// update the local instance of the theme when the theme is updated in the website
	useEffect(() => {
		localStorage.theme = String(theme)

		// also setting the colors for scroll bar
		// since it won't take from the native file system
		if (theme) document.body.classList.value = 'light'
		else document.body.classList.value = 'dark'
		console.log(theme)
	}, [theme])

	const toggleTheme = () => setTheme(value => !value)

	// getting the local theme data from localStorage
	const updateThemeEverywhere = () => {
		const localTheme = localStorage.theme
		if (localTheme === 'true') setTheme(true)
		else setTheme(false)
	}

	const value = {
		theme,
		toggleTheme,
	}
	return (
		<ThemeContextProvider.Provider value={value}>
			<div className={theme ? 'light-mode' : 'dark-mode'}>
				{props.children}
			</div>
		</ThemeContextProvider.Provider>
	)
}

export const useTheme = () => useContext(ThemeContextProvider)
