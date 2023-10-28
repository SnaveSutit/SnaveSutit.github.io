<script lang="ts" context="module">
	import '../global.css'
	import SnaveSutitsPFP from '../assets/Terra Swoop Force SnaveSutit.png'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
</script>

<script lang="ts">
	import { onNavigate } from '$app/navigation'

	const nav_pages: Record<string, string> = {
		'/': 'PORTFOLIO',
		// '/animations': 'ANIMATIONS',
		'/projects': 'PROJECTS',
		'/resume': 'RESUME'
		// '/about': 'ABOUT'
	}
	let screenWidth: number
	let showMenu: boolean = false
	let pageContent: HTMLDivElement

	$: if (screenWidth > 1200) showMenu = false

	function toggleMenu() {
		showMenu = !showMenu
	}

	onNavigate(() => {
		if (pageContent) pageContent.scrollTo(0, 0)
	})
</script>

<svelte:window bind:innerWidth={screenWidth} />

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Vazirmatn" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Archivo Black" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

{#if showMenu}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="popup_menu_background" on:click={toggleMenu}>
		<div class="popup_menu">
			<span class="material-icons" on:click={toggleMenu}>close</span>
			<div>
				{#each Object.keys(nav_pages) as nav_path}
					{#if nav_path === $page.url.pathname}
						<a class="navigated_page" href="/">{nav_pages[nav_path]}</a>
					{:else}
						<a href={nav_path}>{nav_pages[nav_path]}</a>
					{/if}
				{/each}
			</div>
		</div>
	</div>
{/if}

<div class="header">
	<div class="author">
		<img src={SnaveSutitsPFP} alt="SnaveSutit's PFP" />
		<h1>TITUS EVANS</h1>
	</div>
	<nav>
		{#if screenWidth > 1000}
			{#each Object.keys(nav_pages) as nav_path}
				{#if nav_path === $page.url.pathname}
					<a class="navigated_page" href="/">{nav_pages[nav_path]}</a>
				{:else}
					<a href={nav_path}>{nav_pages[nav_path]}</a>
				{/if}
			{/each}
		{:else}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span class="material-icons" on:click={toggleMenu}>menu</span>
		{/if}
	</nav>
</div>

<div class="page_content" bind:this={pageContent}>
	<slot />
</div>

<style>
	@media only screen and (max-width: 1200px) {
		:global(body) {
			min-width: 65vh;
		}
		.header {
			position: fixed;
			top: 0;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: stretch;
			justify-content: space-between;
			height: 64px;
			background-color: var(--color-foreground);
			box-shadow: 0 8px 4px 0 rgba(0, 0, 0, 0.25);
			flex-grow: 1;
			z-index: 2;
		}
		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.author img {
			border-radius: 50%;
			height: 50px;
			width: 50px;
			margin-left: 8px;
		}
		.author h1 {
			font-family: 'Archivo Black', sans-serif;
			font-size: 32px;
			margin-left: 16px;
		}
		a {
			font-size: 24px;
			color: var(--color-text);
			text-decoration: none;
			margin: 0px 16px;
			margin-bottom: 8px;
			border-bottom: 0px solid transparent;
			transition: border-bottom-width cubic-bezier(1, 2, 0, 1) 0.1s;
		}
		a:hover {
			border-bottom: 4px solid var(--color-text);
		}
		a.navigated_page {
			border-bottom: 4px solid var(--color-accent);
		}
		a.navigated_page:hover {
			border-bottom: 4px solid var(--color-accent);
		}
		nav {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 8px;
		}
		nav span {
			font-size: 50px;
			color: var(--color-text);
			text-decoration: none;
			margin: 0px 16px;
			margin-bottom: 8px;
			border-bottom: 0px solid transparent;
			cursor: pointer;
		}
		.popup_menu_background {
			position: fixed;
			z-index: 10;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.5);
		}
		.popup_menu {
			margin: 25% 25%;
			min-height: 50%;
			padding: 32px;
			display: flex;
			flex-direction: column;
			align-items: center;
			/* justify-content: space-between; */
			background-color: var(--color-foreground);
		}
		.popup_menu div {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			flex-grow: 1;
		}
		.popup_menu a {
			color: var(--color-text);
			font-size: 1.7rem;
			margin: 16px;
		}
		.popup_menu .material-icons {
			font-size: 64px;
			margin-left: 80%;
			cursor: pointer;
		}
		.page_content {
			margin-top: 64px;
			height: auto;
			overflow-y: auto;
			overflow-x: hidden;
			/* scroll-behavior: smooth; */
		}
	}
	@media only screen and (min-width: 1200px) {
		.header {
			position: fixed;
			top: 0;
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: stretch;
			justify-content: space-between;
			height: 128px;
			background-color: var(--color-foreground);
			box-shadow: 0 8px 4px 0 rgba(0, 0, 0, 0.25);
			flex-grow: 1;
			z-index: 2;
		}
		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.author img {
			border-radius: 50%;
			height: 100px;
			width: 100px;
			margin-left: 16px;
		}
		.author h1 {
			font-family: 'Archivo Black', sans-serif;
			font-size: 48px;
			margin-left: 32px;
		}
		nav {
			display: flex;
			flex-direction: row;
			align-items: end;
			margin-right: 16px;
		}
		nav a {
			font-size: 24px;
			color: var(--color-text);
			text-decoration: none;
			margin: 0px 16px;
			margin-bottom: 8px;
			border-bottom: 0px solid transparent;
			transition: border-bottom-width cubic-bezier(1, 2, 0, 1) 0.1s;
			cursor: pointer;
		}
		nav a:hover {
			border-bottom: 4px solid var(--color-text);
		}
		a.navigated_page {
			border-bottom: 4px solid var(--color-accent);
		}
		a.navigated_page:hover {
			border-bottom: 4px solid var(--color-accent);
		}
		.page_content {
			margin-top: 128px;
			height: auto;
			overflow-y: auto;
			overflow-x: hidden;
			/* scroll-behavior: smooth; */
		}
	}
</style>
