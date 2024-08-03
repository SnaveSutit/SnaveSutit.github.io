<script lang="ts">
	import Mouse from '$lib/components/mouse.svelte'
	import Player from '$lib/components/player.svelte'
	import Renderer from '$lib/components/renderer.svelte'
	import ThreeScene from '$lib/components/threeScene.svelte'

	import * as ease from 'svelte/easing'
	import '../lib/styles.css'

	import { beforeNavigate, afterNavigate } from '$app/navigation'
	import { fade, fly, scale } from 'svelte/transition'

	export let data

	let isLoading = false
	beforeNavigate(({ to }) => (isLoading = !!to?.route.id))
	afterNavigate(() => (isLoading = false))

	let scaled = false
	$: if (data.pathname === '/') {
		scaled = false
	} else {
		scaled = true
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
	<div class="title transition" style={scaled ? 'transform: translateX(-25%);' : ''}>
		<div
			class={'transition ' + (scaled ? 'scaled' : '')}
			style="width:{(scaled ? 200 : 400) * 0.75}px; height:{scaled ? 200 : 400}px;"
		>
			<img
				class="nametag"
				src="/img/snavesutit_nametag.png"
				alt="SnaveSutit"
				draggable="false"
				width={400 / 2}
			/>
			<ThreeScene width={400 * 0.75} height={400} let:container>
				<Renderer />
				<Mouse global {container}>
					<Player />
				</Mouse>
			</ThreeScene>
		</div>
		<div class="description transition">
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
	<slot />
</div>

<style>
	.site-container {
		height: 100%;
		width: 100%;
	}
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: var(--color-text-secondary);
	}
	.transition {
		transition: all 0.5s cubic-bezier(0.5, 0, 0.5, 1);
	}
	.scaled {
		transform: scale(0.5);
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
