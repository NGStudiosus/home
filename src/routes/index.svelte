<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
import "$lib/titleScreen.css"
// import { BrandTwitter, BrandPatreon, BrandDiscord, BrandYoutube, Mail } from "tabler-icons-svelte"
import BrandTwitter from "tabler-icons-svelte/icons/BrandTwitter.svelte"
import BrandPatreon from "tabler-icons-svelte/icons/BrandPatreon.svelte"
import BrandDiscord from "tabler-icons-svelte/icons/BrandDiscord.svelte"
import BrandYoutube from "tabler-icons-svelte/icons/BrandYoutube.svelte"
import Shirt from "tabler-icons-svelte/icons/Shirt.svelte"
import Mail from "tabler-icons-svelte/icons/Mail.svelte"
import Heart from "tabler-icons-svelte/icons/Heart.svelte"
import { onMount } from "svelte";
import Logo from "$lib/logo/Logo.svelte";
import ToggleTheme from "$lib/ToggleTheme.svelte"

let scrollY = 0
let viewportHeight = 1
let totalScroll = 1
let logoVisibility = 0
$: logoVisibility =
	Math.max(0, 1 - scrollY / (viewportHeight/2)) +
	Math.max(0, 1 + (scrollY - totalScroll) / (viewportHeight/2))

onMount(() => {
	totalScroll = document.body.scrollHeight - viewportHeight
})

var games = [
	{
		rows: 2, cols: 1,
		image: "/img/games/park rangers/headerS.png",
		title: "Park Rangers of The Undead",
		url: "./games/park ranger"
	},
	{},
	{
		image: "/img/games/concord assault/Screenshot_32.png"
	},
	{
		image: "/img/games/range/range.png",
		title: "Concord Assault",
		url: "./games/concord assault"
	},
	{},{},{},
	{
		image: "/img/games/fighter.jpg",
	},
]
</script>

<svelte:head>
	<title>Nightingale Studios</title>
</svelte:head>

<section id="home" class="title-screen | full-screen sidebar">
	<div class="menu | vertical main-center second-stretch">
		<a href="#about">About</a>
		<a href="#games">Games</a>
		<a href="#contact">Contact</a>
		<ToggleTheme/>
	</div>
	<div class="logo-container | horizontal main-center second-center">
		<Logo showTop showBottom/>
	</div>
</section>

<section id="about" class="full-screen-shrinkable sidebar">
	<div class="flex-center">
		<div class="sticky-top sticky-bottom">
			about
			<h1>Nightingale<br>Studios</h1>
		</div>
	</div>

	<div class="flex-center padded">
		<div class="vertical">
			<h2>Building games. With love <span class="heart"><Heart color="var(--main-color)"/></span></h2>
			<p class="big-text limited-width">
				We are a small, international indie game development company.
				Our mission is to make games that are enjoyable and appealing to a wide audience.
				We strive to shape our products for and with our small but steadily growing community.
			</p>
		</div>
	</div>
</section>

<section id="games" class="full-screen-shrinkable sidebar">
	<div class="flex-center">
		<div class="sticky-top sticky-bottom">
			our
			<h2>Games</h2>
		</div>
	</div>

	<div class="games-grid-container">
		<div class="games-grid">
			{#each games as game}
				<div
					class="game"
					style={`
						--cols:${game.cols ?? 1};
						--rows:${game.rows ?? 1};
						background-image: url("${game.image ?? ""}");
				`}>
					{#if game.url}
						<a class="title" href={game.url ?? ""}>
							<h5>{game.title ?? "to be announced"}</h5>
						</a>
					{:else}
						<div class="title">
							<h5>{game.title ?? "to be announced"}</h5>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="contact" class="full-screen-shrinkable sidebar">
	<div class="flex-center">
		<div class="sticky-top sticky-bottom">
			come
			<h2>Aboard</h2>
		</div>
	</div>
	<div class="contacts | flex-center padded">
		<a class="contact" href="https://twitter.com/NStudiosus" target="_blank">
			<BrandTwitter/>
			<p>Twitter</p>
		</a>
		<a class="contact" href="https://www.patreon.com/Nightingale_studios" target="_blank">
			<BrandPatreon/>
			<p>Patreon</p>
		</a>
		<a class="contact" href="https://discord.gg/FbhyGGtgYn" target="_blank">
			<BrandDiscord/>
			<p>Discord</p>
		</a>
		<a class="contact" href="https://www.youtube.com/channel/UC4WhY6A6_quZvWPYkcp1FqA" target="_blank">
			<BrandYoutube/>
			<p>Youtube</p>
		</a>
		<a class="contact" href="mailto:ngstudiosus@gmail.com" target="_blank">
			<Mail/>
			<p>Mail</p>
		</a>
		<a class="contact" href="https://www.redbubble.com/people/NStudios/explore" target="_blank">
			<Shirt/>
			<p>Merch</p>
		</a>
	</div>
</section>

<section class="full-screen sidebar">
	<div class="flex-center">
		<div class="sticky-top sticky-bottom">
			copyright 2022
			<h2>Nightingale<br>Studios</h2>
		</div>
	</div>
	<div class="full-screen"></div>
</section>

<style>
.games-grid-container {
	display: grid;
	grid-template-rows: 1fr auto 1fr;
	}
	.games-grid {
		grid-row: 2;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		padding: var(--g2);
		gap: var(--g);
		aspect-ratio: 1/1;
		}
		.games-grid .game {
			grid-column-end: span var(--cols);
			grid-row-end: span var(--rows);
			background: var(--main-color);
			background-size: cover;
			background-position: center center;
			background-repeat: no-repeat;
			transition: .2s;
			}
			.games-grid .game .title {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;

				text-decoration: none;

				background-color: #0005;

				transition: .2s;
				pointer-events: none;
				opacity: 0;
				}
				.games-grid .game .title {
					padding: var(--g);
					font-size: 1.4rem;
					color: white;
					text-shadow: 0 2px #0008;
				}
			/* :HOVER */
			.games-grid .game:hover {
				/* background-size: 120%; */
				}
				.games-grid .game:hover .title {
					pointer-events: all;
					opacity: 1;
				}
@media (max-width: 1100px) {
	.games-grid {
		grid-template-columns: repeat(2, 1fr);
		aspect-ratio: unset;
	}
}
@media (max-width: 600px) {
	.games-grid {
		display: flex;
		flex-direction: column;
	}
}

.contacts {
	gap: var(--g);
	}
	a.contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--g-2);
		color: var(--text-color);
		font-size: 1.2rem;
		text-decoration: none;
		transition: .2s;
		} a.contact:hover {
			color: var(--main-color);
			text-shadow: #0008;
			transition: .05s;
			}
		a.contact :global(.icon) {
			transition: .2s;
			} a.contact:hover :global(.icon) {
				transform: scale(2);
				transition: .05s;
			}
@media (max-width: 900px) {
	.contacts {
		display: grid;
		grid-template-columns: repeat(3, auto);
		align-content: center;
	}
	}
	@media (max-width: 600px) {
		.contacts {
			grid-template-columns: repeat(2, auto);
		}
}

.heart {
	display: inline-block;
	animation: heartbeat infinite 1s;
}
@keyframes heartbeat {
	0% { transform: scale(1) }
	10% { transform: scale(1.2) }
	20% { transform: scale(1) }
	30% { transform: scale(1.2) }
}
</style>