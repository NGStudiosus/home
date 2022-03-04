import { writable } from "svelte/store"

export enum Theme {
	Light="light",
	Dark="dark"
}

const localStorageKey = "color theme"
const defaultTheme = Theme.Light

function getAgentTheme() {
	if (typeof window === "undefined") return defaultTheme
	const media = window.matchMedia("(prefers-color-scheme: dark)")
	return media.matches ? Theme.Dark : Theme.Light
}

function loadTheme() {
	if (typeof localStorage === "undefined") return null
	const storedTheme = localStorage.getItem(localStorageKey)
	const theme = Object.values(Theme).find(t => t == storedTheme) ?? null
	return theme
}

function saveTheme(theme: Theme) {
	if (typeof localStorage === "undefined") return
	localStorage.setItem(localStorageKey, theme)
}

function applyTheme(theme: Theme) {
	if (typeof document === "undefined") return
	document.documentElement.classList.toggle("dark", theme == Theme.Dark)
}

function getTheme() {
	return loadTheme() ?? getAgentTheme()
}

export function setTheme(newTheme: Theme) {
	applyTheme(newTheme)
	saveTheme(newTheme)
	theme.set(newTheme)
}

export function toggleTheme() {
	setTheme(getTheme() == Theme.Dark ? Theme.Light : Theme.Dark)
}

export const theme = writable(getTheme(), set => {
	if (typeof window === "undefined") return
	applyTheme(getTheme())
	window.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", e => {
		const theme = e.matches ? Theme.Dark : Theme.Light
		applyTheme(theme)
		saveTheme(theme)
		set(theme)
	})
})