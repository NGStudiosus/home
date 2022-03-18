<script lang="ts">
import { onMount } from "svelte";

export let showTop = false
export let showBottom = false

let scrollY = 0
let viewportHeight = 1
let bodyHeight = 1
$: totalScroll = bodyHeight - viewportHeight

let logoVisibility = 0
$: {
	logoVisibility = 0
	if (showTop)
		logoVisibility += Math.max(0, 1 - scrollY / (viewportHeight/2))
	if (showBottom)
		logoVisibility +=  Math.max(0, 1 + (scrollY - totalScroll) / (viewportHeight/2))
}

const updateBodyHeight = () => bodyHeight = document.body.scrollHeight

onMount(updateBodyHeight)
</script>

<svelte:window
	bind:scrollY={scrollY}
	bind:innerHeight={viewportHeight}
	on:resize={updateBodyHeight}
	on:scroll={updateBodyHeight}
/>

<img
	class="logo" src="/img/logo.png" alt=""
	class:scrolled={logoVisibility != 1}
	style={`opacity: ${logoVisibility}`}
>
<img class="logo back" src="/img/logo.png" alt="">

<style>
.logo {
	max-width: 100%;
	position: fixed;
	} .logo.scrolled {
		pointer-events: none;
	}
	.logo.back {
		opacity: 0.3;
		pointer-events: none;
		z-index: -1;
		filter: blur(5px);
	}
</style>