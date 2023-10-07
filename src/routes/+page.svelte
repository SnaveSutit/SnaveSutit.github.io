<script lang="ts" context="module">
	// import '../global.css'
	import { FAVORITE_VIDEOS } from '$lib/videos'
	import Video from '$lib/components/video.svelte'
</script>

<script lang="ts">
</script>

<div class="portfolio_grid">
	{#each FAVORITE_VIDEOS as src}
		<div class="video_wrapper">
			<Video {src} loop />
		</div>
	{/each}
	{#each FAVORITE_VIDEOS as src}
		<div class="video_wrapper">
			<Video {src} loop />
		</div>
	{/each}
</div>

<style>
	.portfolio_grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(100px, 1fr));
		grid-gap: 32px;
		padding: 32px;
	}

	.video_wrapper {
		display: flex;
		width: 1fr;
		height: 1fr;
		border: 4px solid var(--color-background);
		transition: scale cubic-bezier(1, 2, 0, 1) 0.2s;
		place-self: center;
	}

	.video_wrapper:hover {
		scale: 1.1;
		z-index: 1;
		border: 4px solid var(--color-foreground);
	}
</style>
