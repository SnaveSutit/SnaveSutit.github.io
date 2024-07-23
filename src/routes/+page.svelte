<script lang="ts" context="module">
	import { onMount } from 'svelte'
	import { setup as setupMouse } from '$lib/mouse'
	import Player from '$lib/components/player.svelte'
</script>

<script lang="ts">
	onMount(() => {
		setupMouse()
	})
</script>

<div class="navigation">
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/projects">Projects</a>
	<a href="/contact">Contact</a>
</div>

<div class="container">
	<div class="title">
		<div>
			<img src="/img/snavesutit_nametag.png" alt="SnaveSutit" draggable="false" />
			<Player width={400} height={400} />
		</div>
		<div />
		<div class="description">
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
	<div class="card-container">
		<div class="card">
			<h1>Projects</h1>
			<p>
				Here are some of the projects I've worked on. You can find more on my{' '}
				<a href="/projects">projects page</a>.
			</p>
		</div>
		<div class="card">
			<h1>Contact</h1>
			<p>
				Here are some of the projects I've worked on. You can find more on my{' '}
				<a href="/projects">projects page</a>.
			</p>
		</div>
	</div>
</div>

<style>
	.navigation {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		background-color: var(--color-foreground);
		box-shadow: 0 0px 10px rgba(0, 0, 0, 1);
	}
	.navigation a {
		color: var(--color-text);
		text-decoration: none;
		padding: 1rem;
	}

	.card-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.card {
		background-color: var(--color-foreground);
		border-radius: 10px;
		padding: 20px;
		margin: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
		width: 300px;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: var(--color-text-secondary);
	}
	.title > div > img {
		width: 212px;
		image-rendering: pixelated;
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

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}
</style>
