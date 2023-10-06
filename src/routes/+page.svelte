<script lang="ts" context="module">
	// import { base } from '$app/paths';
	import { FAVORITE_VIDEOS } from '$lib/videos';
	import { circOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<script lang="ts">
	function update_controls(event: MouseEvent, enabled: boolean) {
		(event.target as HTMLVideoElement).controls = enabled;
	}
</script>

<div class="centered">
	<h1 in:fly={{ easing: circOut, x: 40, duration: 250 }}>Welcome!</h1>

	<div class="video_grid">
		{#each FAVORITE_VIDEOS as p}
			<video
				on:mouseenter={(e) => update_controls(e, true)}
				on:mouseleave={(e) => update_controls(e, false)}
			>
				<track kind="captions" />
				<source src={p} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		{/each}
	</div>
</div>

<style>
	.centered {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.video_grid {
		display: grid;
		width: 90%;
		grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
		justify-content: center;
		padding-right: 2.25rem;
		grid-gap: 1.5rem;
		grid-auto-flow: dense;
		row-gap: 0rem;
		background-color: var(--color-dark);
	}

	video {
		width: 100%;
		max-width: 512px;
		margin: 1rem;
		border: 2px solid var(--color-ui);
		background-color: var(--color-dark);
		transition: scale cubic-bezier(1, 2, 0, 1) 0.2s;
	}

	video:not(:fullscreen):hover {
		scale: 1.1;
		z-index: 1000;
		border: 2px solid var(--color-accent);
	}
</style>
