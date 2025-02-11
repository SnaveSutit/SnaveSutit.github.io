<script lang="ts">
	import Mouse from '$lib/components/mouse.svelte'
	import Player from '$lib/components/player.svelte'
	import Renderer from '$lib/components/renderer.svelte'
	import ThreeScene from '$lib/components/threeScene.svelte'

	import '../lib/styles.css'
	import '../lib/minecraftUI.css'
	import { page } from '$app/stores'

	import { beforeNavigate, afterNavigate, goto, onNavigate } from '$app/navigation'
	import { onMount } from 'svelte'
	const playerSize = 300

	export let data

	let pageContent: HTMLDivElement
	let isLoading = false
	beforeNavigate(({ to }) => (isLoading = !!to?.route.id))
	afterNavigate(() => (isLoading = false))
	let isPlayerSceneLoaded = false

	function onPlayerSceneLoaded() {
		isPlayerSceneLoaded = true
	}

	onNavigate(() => {
		requestAnimationFrame(() => {
			scrollTo({ top: pageContent.offsetTop, behavior: 'instant' })
			console.log('Navigated!')
		})
	})

	onMount(() => {
		addEventListener('mousedown', event => {
			if (event.target instanceof HTMLButtonElement) {
				const audio = new Audio('/sounds/click.mp3')
				audio.volume = 0.25
				audio.play()
			}
		})
	})

	const title = 'SnaveSutit.github.io'
	const description = "Welcome to Titus' Portfolio!"
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Vazirmatn" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Archivo Black" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

	{#key $page.url.pathname}
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta property="og:type" content="website" />
		<meta content={title} property="og:title" />
		<meta content={description} property="og:description" />
		<meta content={$page.url.href} property="og:url" />
		<meta content="/img/snavesutit-pfp.png" property="og:image" />
		<meta content="#00ACED" data-react-helmet="true" name="theme-color" />
	{/key}
</svelte:head>

<div class="background" />

<div class="site-container">
	<div class="mobile-warning minecraft-box">
		<p>It is recommended to view this page on a desktop device for the best experience!</p>
	</div>

	<div class="title minecraft-box">
		<div class="player-container minecraft-inset-box">
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
			<p>I am a 24 year-old technical animator, full-stack web developer, and game developer.</p>
			<p>
				I have been playing Minecraft since 2009, and have been creating Data Packs, maps, and tools
				for the game since 2013.
			</p>
			<p>
				I am passionate about creating tools and experiences that inspire and empower others to do
				the same!
			</p>
		</div>
	</div>

	<div class="page-content minecraft-box" bind:this={pageContent}>
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
			margin-left: 5vw !important;
			margin-right: 5vw !important;
		}
		.page-buttons {
			flex-direction: column;
			gap: 16px;
		}
		.page-button {
			height: 10vw !important;
			font-size: 5vw !important;
		}
		.title {
			flex-direction: column !important;
			align-items: center !important;
			width: 90% !important;
			margin-top: 16px !important;
			margin-left: 5vw !important;
			margin-right: 5vw !important;
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
		.player-container {
			align-self: center !important;
		}

		.mobile-warning {
			display: block !important;
		}
	}

	.mobile-warning {
		display: none;
		padding: 16px;
		top: 0;
		margin-top: 4px;
		margin-left: 4px;
		margin-right: 3.5px;
	}
	.mobile-warning p {
		font-weight: normal;
		color: #ff5555;
		line-height: 1.3rem;
		margin: 0;
		filter: drop-shadow(2px 2px 0 #440000);
	}

	.player-container {
		margin-right: 16px;
		align-self: flex-start;
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
		padding-bottom: 32px;
		margin-bottom: 64px;
		margin-left: 16vw;
		margin-right: 16vw;
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
	}

	.site-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 16px;
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

	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/img/background.png');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		background-image: url(/img/background.png);
	}
</style>
