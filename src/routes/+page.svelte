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
		<button class="card">
			<div class="img-container">
				<img src="/img/projects_title.png" alt="Projects" draggable="false" />
			</div>
		</button>
		<button class="card">
			<div class="img-container">
				<img src="/img/about_title.png" alt="About" draggable="false" />
			</div>
		</button>
		<button class="card">
			<div class="img-container">
				<img src="/img/contact_title.png" alt="Contact" draggable="false" />
			</div>
		</button>
	</div>
</div>

<style>
	button {
		all: unset;
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
		margin: 0 16px;
		padding: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
		width: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: transform 0.1s cubic-bezier(0.5, 0, 0.5, 1);
	}
	.card:hover {
		transform: scale(1.05);
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
		filter: drop-shadow(0px 2px 2px rgb(0, 0, 0, 0.5));
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
		margin-bottom: 20%;
	}
</style>
