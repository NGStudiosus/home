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
import BrandFacebook from "tabler-icons-svelte/icons/BrandFacebook.svelte"
import BrandPaypal from "tabler-icons-svelte/icons/BrandPaypal.svelte"
import Mug from "tabler-icons-svelte/icons/Mug.svelte"
import Shirt from "tabler-icons-svelte/icons/Shirt.svelte"
import Mail from "tabler-icons-svelte/icons/Mail.svelte"
import Heart from "tabler-icons-svelte/icons/Heart.svelte"
import Logo from "$lib/logo/Logo.svelte";
import ToggleTheme from "$lib/ToggleTheme.svelte"
import Game from "$lib/Game.svelte"
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

	<!-- <div class="games-grid-container"> -->
		<div class="games-grid">
			<Game
				cols={1} rows={2}
				title="Park Rangers of The Undead"
				links={{
					steam: "https://store.steampowered.com/app/1701760"
				}}
				image="/img/games/park rangers/headerS.png"
			></Game>
			<Game
				cols={2}
				title="Birth of the Alliance"
				image="/img/games/bota/header-1000.jpg"
				paypal={{
					on: "Base game or founders",
					encrypted: "-----BEGIN PKCS7-----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-----END PKCS7-----",
					button: "Preorder",
					options: {
						"Base game": "Base game $9.99 USD",
						"Founders edition": "Founders edition $19.99 USD",
					}
				}}
			/>
			<Game
				title="Lednatha Combat Academy"
				image="/img/games/platformer/player.png"
			/>
			<Game
				title="Concord Assault"
				links={{
					itchio: "https://nightingale-studios.itch.io/concord-assault"
				}}
				image="/img/games/concord assault/Screenshot_32.png"
			/>
			<Game
				title="Nightingale: Tales of The Fleet"
				image="/img/games/tobias-1000.png"
			/>
			<Game
				title="The Range"
				image="/img/games/range/range.png"
			/>
			<Game
				title="Nightingale: Expanse"
				image="/img/games/fighter.jpg"
			/>
		</div>
	<!-- </div> -->
</section>

<div class="full-screen-shrinkable vertical main-center no-gap grow">
	<section id="contact" class="sidebar">
		<div class="flex-center">
			<div class="sticky-top sticky-bottom">
				come
				<h2>Aboard</h2>
			</div>
		</div>
		<div class="contacts | flex-center padded">
			<a class="contact" href="https://twitter.com/NStudiosus" target="_blank" rel="noreferrer">
				<BrandTwitter/>
				<p>Twitter</p>
			</a>
			<a class="contact" href="https://www.facebook.com/nightingalestudiosus" target="_blank" rel="noreferrer">
				<BrandFacebook/>
				<p>Facebook</p>
			</a>
			<a class="contact" href="https://discord.gg/FbhyGGtgYn" target="_blank" rel="noreferrer">
				<BrandDiscord/>
				<p>Discord</p>
			</a>
			<a class="contact" href="https://www.youtube.com/channel/UC4WhY6A6_quZvWPYkcp1FqA" target="_blank" rel="noreferrer">
				<BrandYoutube/>
				<p>Youtube</p>
			</a>
			<a class="contact" href="mailto:ngstudiosus@gmail.com" target="_blank" rel="noreferrer">
				<Mail/>
				<p>Mail</p>
			</a>
			<a class="contact" href="https://www.redbubble.com/people/NStudios/explore" target="_blank" rel="noreferrer">
				<Shirt/>
				<p>Merch</p>
			</a>
		</div>
	</section>

	<section class="sidebar">
		<div class="flex-center">
			<div class="sticky-top sticky-bottom">
				<h2>Support</h2>
				us
			</div>
		</div>
		<div class="contacts | flex-center padded">
			<a class="contact" href="https://www.patreon.com/Nightingale_studios" target="_blank" rel="noreferrer">
				<BrandPatreon/>
				<p>Patreon</p>
			</a>
			<form style="display: contents" action="https://www.paypal.com/donate" method="post" target="_top">
				<input type="hidden" name="business" value="V4WNH5VTRV3M2" />
				<input type="hidden" name="no_recurring" value="0" />
				<input type="hidden" name="item_name" value="Nightingale Studios Development" />
				<input type="hidden" name="currency_code" value="USD" />
				<button class="contact | btn clear">
					<BrandPaypal/>
					<p>PayPal</p>
				</button>
			</form>
			<a class="contact" href="https://ko-fi.com/nightingalestudios" target="_blank" rel="noreferrer">
				<Mug/>
				<p>Ko-fi</p>
			</a>
		</div>
	</section>
</div>

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
.games-grid {
	display: grid;
	grid-auto-flow: dense;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 1fr;
	padding: var(--g2);
	gap: var(--g);
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
	.contacts .contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--g-2);
		color: var(--text-color);
		font-size: 1.2rem;
		text-decoration: none;
		cursor: pointer;
		transition: .2s;
		} .contacts .contact:is(:hover, :focus) {
			color: var(--main-color);
			text-shadow: #0008;
			transition: .05s;
			}
		.contacts .contact :global(.icon) {
			transition: .2s;
			} .contacts .contact:is(:hover, :focus) :global(.icon) {
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