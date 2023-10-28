<script lang="ts" context="module">
	import { slide } from 'svelte/transition'
	import { onDestroy } from 'svelte'
</script>

<script lang="ts">
	export let src: string
	export let loop: boolean = false

	let video: HTMLVideoElement
	let playing = false
	let videoHovered = false
	let fullscreen = false
	let progress = 0

	$: if (video) {
		if (playing) {
			video.play()
		} else {
			video.pause()
		}
	}

	const intervalID = setInterval(() => {
		if (video && playing) {
			progress = (video.currentTime / video.duration) * 100
		}
	}, 16)

	function togglePlay() {
		playing = !playing
		console.log(playing)
	}

	function onMouseEnter() {
		videoHovered = true
	}

	function onMouseLeave() {
		videoHovered = false
	}

	function setVideoProgress(progress = 0) {
		video.currentTime = (progress / 100) * video.duration
	}

	function setProgressViaProgressBarClick(event: MouseEvent) {
		const target = event.target as HTMLDivElement
		const rect = target.getBoundingClientRect()
		const x = event.clientX - rect.left
		const width = target.offsetWidth
		const newProgress = (x / width) * 100
		setVideoProgress(newProgress)
	}

	onDestroy(() => {
		clearInterval(intervalID)
	})
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="container" on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
	<video bind:this={video} {loop} on:click={togglePlay}>
		<source {src} type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<div class="controls" style={!playing && videoHovered ? 'opacity: 1' : ''}>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click|capture={togglePlay}>
			{#if playing}
				<span class="material-icons">pause</span>
			{:else}
				<span class="material-icons">play_arrow</span>
			{/if}
		</div>
		<!-- progress bar -->
		{#if video}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="progress_bar" on:click|capture={setProgressViaProgressBarClick}>
				<div class="progress_bar_fill" style={`width: ${progress}%`} />
			</div>
		{/if}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			class="material-icons"
			on:click={() => {
				setVideoProgress(0)
			}}>replay</span
		>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span class="material-icons" on:click={() => video.requestFullscreen()}>aspect_ratio</span>
	</div>
</div>

<style>
	div.container {
		position: relative;
		display: flex;
		flex-direction: column;
		width: fit-content;
		border: 4px solid rgba(0, 0, 0, 0);
		transition: scale cubic-bezier(1, 2, 0, 1) 0.2s;
	}

	@media only screen and (min-width: 1200px) {
		div.container:hover {
			scale: 1.1;
			z-index: 1;
			border: 4px solid var(--color-foreground);
		}
	}

	div.container:hover {
		z-index: 1;
		border: 4px solid var(--color-foreground);
	}

	div.controls {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		position: absolute;
		bottom: 0;
		left: 0;
		width: 100.1%;

		opacity: 0;
		transition: opacity ease 0.2s;
		background-color: var(--color-foreground);
		pointer-events: visibleFill;
	}

	div.controls:hover {
		opacity: 1;
	}

	div.progress_bar {
		width: 100%;
		height: 4px;
		margin: 0px 8px;
		background-color: var(--color-text);
	}

	div.progress_bar_fill {
		height: 4px;
		background-color: var(--color-accent);
	}

	span.material-icons {
		font-size: 28px;
		color: var(--color-text);
		cursor: pointer;
		margin: 8px;
	}

	span.material-icons:hover {
		color: var(--color-accent);
	}

	video {
		width: 100%;
	}
</style>
