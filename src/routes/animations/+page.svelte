<script lang="ts" context="module">
	const video_paths = Object.values<string>(
		import.meta.glob('../../../static/assets/videos/animations/*.mp4', {
			eager: true,
			import: 'default'
		})
	).map((path: string) => path.replace('/static', ''));
</script>

<script lang="ts">
	function update_controls(event: MouseEvent, enabled: boolean) {
		(event.target as HTMLVideoElement).controls = enabled;
	}
</script>

<div>
	<h1>Animations</h1>
	<div class="centered">
		<div class="video_grid">
			{#each video_paths as p}
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
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	h1 {
		text-align: center;
	}

	.centered {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.video_grid {
		display: grid;
		width: 90%;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		justify-content: center;
		padding-right: 2rem;
		grid-gap: 1rem;
		background-color: var(--color-dark);
	}

	video {
		width: 100%;
		max-width: 500px;
		margin: 1rem;
		border: 2px solid var(--color-ui);
		transition: scale cubic-bezier(1, 2, 0, 1) 0.2s;
	}

	video:not(:fullscreen):hover {
		scale: 1.1;
		border: 2px solid var(--color-accent);
	}
</style>
