import { browser } from "$app/env"
import { writable } from "svelte/store"

export enum Theme {
	Light="light",
	Dark="dark"
}

const localStorageKey = "color theme"
const defaultTheme = Theme.Light

function getAgentTheme() {
	if (!browser) return defaultTheme
	const media = window.matchMedia("(prefers-color-scheme: dark)")
	return media.matches ? Theme.Dark : Theme.Light
}

function loadTheme() {
	if (!browser) return null
	const storedTheme = localStorage.getItem(localStorageKey)
	const theme = Object.values(Theme).find(t => t == storedTheme) ?? null
	return theme
}

function saveTheme(theme: Theme) {
	if (!browser) return
	localStorage.setItem(localStorageKey, theme)
}

function applyTheme(theme: Theme) {
	if (!browser) return
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
	if (!browser) return
	applyTheme(getTheme())
	window.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", e => {
		const theme = e.matches ? Theme.Dark : Theme.Light
		applyTheme(theme)
		saveTheme(theme)
		set(theme)
	})
})