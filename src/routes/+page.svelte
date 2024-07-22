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
			<img src="/img/snavesutit_nametag.png" alt="SnaveSutit" />
			<Player width={316} height={316} />
		</div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa earum labore amet similique,
			tempore quisquam commodi consequatur ea iure! Vel optio nihil ex consectetur! Quas quod
			voluptates iure fugit.
		</p>
	</div>
</div>

<style>
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.title > div > img {
		width: 212px;
		image-rendering: pixelated;
	}
	.title > div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.title p {
		margin: 0;
		padding: 0;
		text-wrap: balance;
		width: 25%;
		font-size: 1.5em;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}
</style>
