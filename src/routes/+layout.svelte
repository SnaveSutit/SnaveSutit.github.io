<script lang="ts" context="module">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const pages: Record<string, string> = {
		'/animation': 'Animation',
		'/web_development': 'Web Development',
		'/minecraft_java': 'Minecraft: Java'
	};
</script>

<div class="header">
	<div class="author">
		<h1>Titus Evans</h1>
		<h3>Technical Animator & Indie Game Developer</h3>
	</div>
	<nav class="header_nav">
		<a href="/">Home</a>
		<a href="/resume">Resume</a>
	</nav>
</div>

{#if !($page.url.pathname === '/resume')}
	<nav class="bar_nav">
		{#each Object.keys(pages) as p}
			{#if $page.url.pathname === p}
				<a class="selected" href="{base}{p}">{pages[p]}</a>
			{:else}
				<a href="{base}{p}">{pages[p]}</a>
			{/if}
		{/each}
	</nav>
{/if}

<div class="page_container">
	<slot />
</div>

<style>
	.header {
		display: flex;
		flex-direction: row;
		padding-left: 5rem;
		border-bottom: 1px solid var(--color-subtle_text);
		background-color: var(--color-ui);
		justify-content: space-between;
		align-items: stretch;
	}

	.author {
		display: flex;
		flex-direction: column;
		align-items: start;
		padding-bottom: 1rem;
	}

	.author h1 {
		margin: 0;
		font-size: 3rem;
	}

	.author h3 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 400;
	}

	.header_nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-right: 5rem;
	}

	.header_nav a {
		color: var(--color-light);
		background-color: var(--color-button);
		text-decoration: none;
		padding: 0.5rem 1rem;
		margin: 0 0.5rem;
		transition: background-color 0.2s ease;
	}

	.header_nav a:hover {
		/* color: var(--color-accent); */
		background-color: var(--color-selected);
	}

	.bar_nav {
		display: flex;
		justify-content: center;
		background-color: var(--color-dark);
	}

	.bar_nav a {
		color: var(--color-light);
		text-decoration: none;
		padding: 0.5rem 1rem;
		transition: border-bottom 0.2s ease, background-color 0.2s ease;
		border-bottom: 4px solid var(--color-dark);
	}
	.bar_nav a:hover {
		/* color: var(--color-accent); */
		background-color: var(--color-selected);
		border-bottom: 4px solid var(--color-accent);
	}
	.bar_nav a.selected {
		border-bottom: 4px solid var(--color-accent);
	}

	:global(::-webkit-scrollbar) {
		width: 10px;
	}
	:global(::-webkit-scrollbar-track) {
		border-radius: 10px;
		background: var(--color-back);
	}
	:global(::-webkit-scrollbar-thumb) {
		border-radius: 10px;
		background: var(--color-button);
	}
	:global(::-webkit-scrollbar-thumb:hover) {
		background: var(--color-accent);
	}

	:global(body) {
		color: var(--color-text);
		font-family: var(--font-main);
		background-color: var(--color-back);
		margin: 0px;
		padding: 0px;
	}

	:global(a) {
		color: var(--color-accent);
	}

	:global(*) {
		--color-back: #21252b;
		--color-dark: #17191d;
		--color-border: #181a1f;
		--color-ui: #282c34;
		--color-accent: #3e90ff;
		--color-button: #3a3f4b;
		--color-selected: #474d5d;
		--color-text: #cacad4;
		--color-light: #f4f3ff;
		--color-accent_text: #000006;
		--color-bright_ui_text: #000006;
		--color-subtle_text: #848891;
		--color-bright_ui: #f4f3ff;
		--color-bright_border: var(--color-text);
		--color-grid: #495061;
		--color-checkerboard: #1c2026;

		--color-menu_separator: #b0afba;

		--color-close: #d62e3f;
		--color-confirm: #90ee90;
		--color-error: #ff2a51;
		--color-warning: #ffc400;
		--color-stream: #6442a4;

		--color-axis-x: #ff1242;
		--color-axis-y: #23d400;
		--color-axis-z: #0894ed;

		--font-custom-main: '';
		--font-custom-headline: '';
		--font-custom-code: '';

		--font-main: var(--font-custom-main), Assistant, segoe ui, sans-serif;
		--font-headline: var(--font-custom-headline), var(--font-custom-main), Assistant, segoe ui,
			sans-serif;
		--font-code: var(--font-custom-code), Consolas, Monospace;
	}
</style>
