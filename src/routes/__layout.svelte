<script lang="ts">
import '../app.css';
import { theme } from "$lib/ThemeController";
import { onMount } from "svelte";
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
</svelte:head>

<main>
	<slot />
</main>
