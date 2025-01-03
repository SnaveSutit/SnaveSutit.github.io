<script lang="ts">
	import Mouse from '$lib/components/mouse.svelte'
	import Player from '$lib/components/player.svelte'
	import Renderer from '$lib/components/renderer.svelte'
	import ThreeScene from '$lib/components/threeScene.svelte'

	// import * as ease from 'svelte/easing'
	import '../lib/styles.css'

	import { beforeNavigate, afterNavigate } from '$app/navigation'
	import { onMount } from 'svelte'
	// import { fade, fly, scale } from 'svelte/transition'
	const playerSize = 300

	// export let data

	let isLoading = false
	beforeNavigate(({ to }) => (isLoading = !!to?.route.id))
	afterNavigate(() => (isLoading = false))
	let isPlayerSceneLoaded = false

	function onPlayerSceneLoaded() {
		isPlayerSceneLoaded = true
	}
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Vazirmatn" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Archivo Black" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

{#if isLoading}
	<div>Loading...</div>
{/if}

<div class="site-container">
	<div class="title transition">
		<div
			class="transition"
			style={`opacity:${isPlayerSceneLoaded ? 1 : 0};` + 'transform-origin: 0 0;'}
		>
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
		<div class={'description transition'}>
			<h1>Hey there! I'm Titus.</h1>
			<p>
				I'm a software engineer, full-stack web developer, technical animator, and game developer.
			</p>
			<p>
				I'm passionate about creating tools and experiences that inspire and empower others to do
				the same!
			</p>
		</div>
	</div>

	<div class="container">
		<div class="card-container">
			<a class="card" href="/projects">
				<div class="img-container">
					<img src="/img/projects_title.png" alt="Projects" draggable="false" />
				</div>
			</a>
			<a class="card" href="/about">
				<div class="img-container">
					<img src="/img/about_title.png" alt="About" draggable="false" />
				</div>
			</a>
			<a class="card" href="/contact">
				<div class="img-container">
					<img src="/img/contact_title.png" alt="Contact" draggable="false" />
				</div>
			</a>
		</div>
	</div>

	<slot />
</div>

<style>
	.card-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.card {
		background-color: var(--color-foreground);
		border-radius: 64px;
		margin: 0 16px;
		padding: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
		width: 300px;
		height: 64px;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: transform 0.1s cubic-bezier(0.5, 0, 0.5, 1);
		border-image-width: 24px;
		border-image-slice: 6;
		border-image-source: url(/img/border.png);
		image-rendering: pixelated;
		justify-content: center;
	}
	.card:hover {
		transform: scale(1.05) translateZ(0.25px);
	}
	.card img {
		transition: transform 0.1s cubic-bezier(0.5, 0, 0.5, 1),
			filter 0.1s cubic-bezier(0.5, 0, 0.5, 1);
	}
	.card:hover img {
		transform: translateY(-5px) scale(1.05);
		filter: drop-shadow(0px 6px 2px rgb(0, 0, 0, 0.5));
	}
	.img-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.img-container img {
		height: 50px;
		/* filter: drop-shadow(0px 2px 2px rgb(0, 0, 0, 0.5)); */
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}

	.site-container {
		height: 100%;
		width: 100%;
	}
	.title {
		gap: 4rem;
		margin-top: 64px;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: start;
		justify-content: center;
		color: var(--color-text-secondary);
	}
	.transition {
		transition: all 0.5s cubic-bezier(0.5, 0, 0.5, 1);
	}
	.title div:not(.description) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.title .description {
		width: 400px;
	}
	.title .description p {
		text-wrap: balance;
		font-size: 1.5em;
	}
	.nametag {
		image-rendering: pixelated;
	}
</style>
