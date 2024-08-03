<script lang="ts">
	import { onMount } from 'svelte'

	onMount(() => {})
</script>

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

<style>
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

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		margin-bottom: 20%;
	}
</style>
