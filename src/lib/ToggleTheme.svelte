<script lang="ts">
import Sun from "tabler-icons-svelte/icons/Sun.svelte"
import Moon from "tabler-icons-svelte/icons/Moon.svelte"
import { Theme, theme, toggleTheme } from "./ThemeController"
</script>

<button
	on:click={toggleTheme}
	class:sun={$theme == Theme.Light}
	class:moon={$theme == Theme.Dark}
>
	{#if $theme == Theme.Light}
		<Sun/>
	{:else}
		<Moon/>
	{/if}
</button>

<style>
button {
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--text-color);
	background: none;
	border: none;
	cursor: pointer;
	}
	button.sun :global(.icon) {
		animation: turn-cw forwards 1 .4s cubic-bezier(.18,.89,.32,1.5);
	}
	button.moon :global(.icon) {
		animation: turn-ccw forwards 1 .4s cubic-bezier(.18,.89,.32,1.5);
	}

@keyframes turn-cw {
	from { transform: rotate(-60deg); }
	to   { transform: rotate(0); }
}
@keyframes turn-ccw {
	from { transform: rotate(60deg); }
	to   { transform: rotate(0); }
}
</style>