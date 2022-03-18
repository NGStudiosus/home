<script lang="ts">
import BrandSteam from "tabler-icons-svelte/icons/BrandSteam.svelte"
import DeviceGamepad from "tabler-icons-svelte/icons/DeviceGamepad.svelte"

type Brand = keyof typeof brandIcons
const brandIcons = {
	steam: BrandSteam,
	itchio: DeviceGamepad,
}

const brandNames = {
	steam: "Steam",
	itchio: "Itch.io",
}

type Links = { [K in Brand]?: string }
export let links: Links = {}
$: linkEntries = Object.entries(links) as [Brand, string][]

interface Paypal {
	on: string
	encrypted: string
	text?: string
	button: string
	options: {
		[value:string]: string
	}
}
export let paypal: Paypal|null = null

export let cols = 1
export let rows = 1
export let title = "to be announced"
export let image = ""

let width = 0
$: isNarrow = width < 350
</script>

<div
	bind:clientWidth={width}
	class="game"
	class:narrow={isNarrow}
	style={`
		--cols:${cols};
		--rows:${rows};
		--width: ${width}px;
		background-image: url("${image}");
	`}
>
	<div class="title">
		<h5>{title}</h5>
		{#if linkEntries.length}
			<div class="links">
				{#each linkEntries as [name, url]}
					<a class="link" href={url}>
						<svelte:component this={brandIcons[name]} size={32}/>
						<p>{brandNames[name]}</p>
					</a>
				{/each}
			</div>
		{/if}
		{#if paypal}
			<form class="paypal | vertical smaller-gap" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
				<input type="hidden" name="cmd" value="_s-xclick">
				<input type="hidden" name="on0" value={paypal.on}>
				<input type="hidden" name="encrypted" value={paypal.encrypted}>
				{#if paypal.text}
					<p>{paypal.text}</p>
				{/if}
				<div class="selector">
					<select name="os0">
						{#each Object.entries(paypal.options) as [ value, text ]}
							<option value={value}>{ text }</option>
						{/each}
					</select>
					<button type="submit">{paypal.button}</button>
				</div>
			</form>
		{/if}
		<slot/>
	</div>
</div>

<style>
.game {
	grid-column-end: span var(--cols);
	grid-row-end: span var(--rows);
	background: var(--main-color);
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	border-radius: 4px;
	overflow: clip;
	}
	.game .title {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--g-2);
		padding: var(--g);

		text-decoration: none;

		background-color: #0005;
		filter: drop-shadow(0 2px #0008);

		transition: .2s;
		pointer-events: none;
		opacity: 0;
		}
		.game .title h5 {
			font-size: 1.4rem;
			color: white;
			text-align: center;
		}
	/* :HOVER */
	.game:is(:hover, :focus-within) .title {
		pointer-events: all;
		opacity: 1;
		} @media (hover: none) {
			.game .title {
				pointer-events: all;
				opacity: 1;
			}
		}
@media (max-width: 600px) {
	.game {
		min-height: var(--width);
	}
}


.paypal {
	color: white;
	}
	.paypal p {
		font-size: 1.2rem;
		text-align: center;
	}
	.paypal .selector {
		display: flex;
		} .narrow .paypal .selector {
			flex-direction: column;
		}
	.paypal select {
		width: 100%;
		padding: var(--g-2) var(--g-4);

		color: white;
		font: inherit;
		text-align: center;

		background: none;
		border: 2px solid white;
		border-right-width: 0;
		border-radius: 50px 0 0 50px;
		cursor: pointer;
		} .narrow .paypal select {
			border-right-width: 2px;
			border-bottom-width: 0;
			border-radius: 30px 30px 0 0;
		}
	.paypal button {
		padding: var(--g-2) var(--g-4);

		color: white;
		font: inherit;
		text-align: center;

		background: none;
		border: 2px solid white;
		border-radius: 0 50px 50px 0;
		cursor: pointer;
		} .narrow .paypal button {
			border-radius: 0 0 30px 30px;
		}

.link {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: .2rem;
	aspect-ratio: 1/1;

	color: white;
	text-decoration: none;

	border: 2px solid white;
	border-radius: 50% 50% 4px 4px;
	transition: .2s;
	}
	.link :global(.icon) {
		display: block;
		flex-grow: 1;
	}
	.link:hover {
		transform: scale(1.2);
		transition: .05s;
	}
</style>