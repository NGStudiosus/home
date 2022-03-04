<script lang="ts">
import logo from "$lib/assets/img/logo.png"
import { onMount } from "svelte";

export let showTop = false
export let showBottom = false

let scrollY = 0
let viewportHeight = 1
let totalScroll = 1
let logoVisibility = 0
$: {
	logoVisibility = 0
	if (showTop)
		logoVisibility += Math.max(0, 1 - scrollY / (viewportHeight/2))
	if (showBottom)
		logoVisibility +=  Math.max(0, 1 + (scrollY - totalScroll) / (viewportHeight/2))
}

onMount(() => {
	totalScroll = document.body.scrollHeight - viewportHeight
})
</script>

<svelte:window
	bind:scrollY={scrollY}
	bind:innerHeight={viewportHeight}
	on:resize={()=>totalScroll = document.body.scrollHeight - viewportHeight}
/>

<img
	class="logo" src={logo} alt=""
	class:scrolled={logoVisibility != 1}
	style={`opacity: ${logoVisibility}`}
>
<img class="logo back" src={logo} alt="">

<style>
img.logo {
	max-width: 100%;
	position: fixed;
	} img.logo.scrolled {
		pointer-events: none;
	}
	img.logo.back {
		opacity: 0.3;
		pointer-events: none;
		z-index: -1;
		filter: blur(5px);
	}
</style>