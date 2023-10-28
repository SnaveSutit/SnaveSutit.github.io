<script lang="ts" context="module">
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import { FAVORITE_VIDEOS } from '$lib/videos'
	import Video from '$lib/components/video.svelte'
</script>

<script lang="ts">
	let videoList: string[] = []
	onMount(() => {
		videoList = FAVORITE_VIDEOS
	})
</script>

<div class="portfolio_grid">
	{#each videoList as src, index}
		<div class="video_wrapper" in:fly|local={{ x: 64, duration: 500, delay: 50 * (index + 1) }}>
			<Video {src} loop />
		</div>
	{/each}
</div>

<style>
	@media only screen and (max-width: 1200px) {
		.portfolio_grid {
			display: grid;
			grid-template-columns: minmax(64px, 1fr);
			grid-gap: 32px;
			padding: 32px;
		}
	}

	@media only screen and (min-width: 1200px) {
		.portfolio_grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(35vh, 1fr));
			grid-gap: 32px;
			padding: 32px;
		}
	}

	.video_wrapper {
		place-self: center;
	}
</style>
