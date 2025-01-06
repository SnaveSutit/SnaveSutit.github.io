<script lang="ts">
	import Mouse from '$lib/components/mouse.svelte'
	import Player from '$lib/components/player.svelte'
	import Renderer from '$lib/components/renderer.svelte'
	import ThreeScene from '$lib/components/threeScene.svelte'

	import '../lib/styles.css'
	import '../lib/minecraftUI.css'

	import { beforeNavigate, afterNavigate, goto } from '$app/navigation'
	import { onMount } from 'svelte'
	const playerSize = 300

	export let data

	let isLoading = false
	beforeNavigate(({ to }) => (isLoading = !!to?.route.id))
	afterNavigate(() => (isLoading = false))
	let isPlayerSceneLoaded = false

	function onPlayerSceneLoaded() {
		isPlayerSceneLoaded = true
	}

	onMount(() => {
		addEventListener('mousedown', event => {
			if (event.target instanceof HTMLButtonElement) {
				const audio = new Audio('/sounds/click.mp3')
				audio.volume = 0.25
				audio.play()
			}
		})
	})
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Vazirmatn" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Archivo Black" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<div class="site-container">
	<div class="title minecraft-box">
		<div class="minecraft-inset-box" style="margin-right: 16px;">
			<div class="transition" style={`opacity:${isPlayerSceneLoaded ? 1 : 0};`}>
				<img
					class="nametag"
					src="/img/snavesutit_nametag.png"
					alt="SnaveSutit"
					draggable="false"
					width={playerSize / 2}
				/>
				<ThreeScene
					width={playerSize * 0.75}
					height={playerSize}
					let:container
					onLoad={onPlayerSceneLoaded}
				>
					<Renderer />
					<Mouse global {container}>
						<Player />
					</Mouse>
				</ThreeScene>
			</div>
		</div>
		<div class="description">
			<h1>Hey there!</h1>
			<h1>I'm Titus</h1>
			<p>
				I am a software engineer, full-stack web developer, technical animator, and game developer.
			</p>
			<p>
				I am passionate about creating tools and experiences that inspire and empower others to do
				the same!
			</p>
		</div>
	</div>

	<div class="page-content minecraft-box">
		<div class="page-buttons">
			<button class="page-button" disabled={data.pathname === '/'} on:click={() => goto('/')}>
				Portfolio
			</button>
			<button
				class="page-button"
				disabled={data.pathname === '/projects'}
				on:click={() => goto('/projects')}
			>
				Projects
			</button>
			<button
				class="page-button"
				disabled={data.pathname === '/about'}
				on:click={() => goto('/about')}
			>
				About
			</button>
			<button
				class="page-button"
				disabled={data.pathname === '/contact'}
				on:click={() => goto('/contact')}
			>
				Contact
			</button>
		</div>
		<hr />
		<slot />
	</div>

	<div class="footer minecraft-box">
		<p class="footer-text">This site is unaffiliated with Mojang Studios.</p>
		<p class="footer-text">
			This site uses icons from <a href="https://github.com/FuncFusion/mc-dp-icons">MC-DP-Icons</a>!
		</p>
	</div>
</div>

<style>
	@media screen and (max-width: 800px) {
		.page-content {
			margin-left: 16px !important;
			margin-right: 16px !important;
		}
		.page-buttons {
			flex-direction: column;
			gap: 16px;
		}
		.page-button {
			height: 10vw !important;
			font-size: 6vw !important;
		}
		.title {
			flex-direction: column !important;
			align-items: center !important;
			width: 90% !important;
			margin-top: 16px !important;
		}
		.title div:not(.description) {
			margin: 0 !important;
			margin-top: 16px !important;
		}
		.description {
			width: 90% !important;
		}
		.description p {
			font-size: 14px !important;
		}
	}

	.footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		margin-top: auto;
	}
	.footer-text {
		font-size: 16px;
		padding: 0 16px;
	}

	.page-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 20px;
		margin-bottom: 64px;
		margin-left: 10vw !important;
		margin-right: 10vw !important;
		align-self: stretch;
	}

	.page-buttons {
		display: flex;
		justify-content: center;
		align-self: stretch;
		margin-left: calc(-4px + 16px);
		margin-right: 16px;
	}

	.page-button {
		flex-grow: 1;
		height: 4vw;
		font-size: 2vw;

		display: flex;
		justify-content: center;
		align-items: center;
		/* font-size: 24px; */
	}

	.site-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 16px;
		overflow: auto;
		backdrop-filter: blur(3px);
	}
	.title {
		margin-top: 38px;
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		color: var(--color-text-secondary);
		align-self: center;
		margin-bottom: 32px;
	}
	.transition {
		transition: all 0.5s cubic-bezier(0.5, 0, 0.5, 1);
	}
	.title div:not(.description) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.description {
		padding: 8px 16px;
	}
	.title .description {
		width: 400px;
	}
	.title .description p {
		text-wrap: balance;
		font-size: 20px;
	}
	.nametag {
		image-rendering: pixelated;
	}
</style>
