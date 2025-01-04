<script lang="ts">
	import Youtube from 'svelte-youtube-embed'

	export let videos: string[] = []

	let currentVideo = 0

	async function getYoutubeVideoTitle(id: string) {
		const res = await fetch(
			`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
		)
		const videoInfo = await res.json()
		return videoInfo?.title
	}

	function nextVideo() {
		currentVideo = (currentVideo + 1) % videos.length
	}

	function previousVideo() {
		currentVideo = (currentVideo - 1 + videos.length) % videos.length
	}
</script>

<div style="width: 100%">
	<div class="button-container">
		<button on:click={previousVideo}>
			{'<'}
		</button>
		<div class="video minecraft-box">
			{#key currentVideo}
				<Youtube id={videos[currentVideo]} animations={false} />
			{/key}
		</div>
		<button on:click={nextVideo}>
			{'>'}
		</button>
	</div>
</div>

<style>
	.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.video {
		width: 75%;
		margin: 0 16px;
	}

	/* .button-container button {
		background-color: transparent;
		border: none;
		color: white;
		font-size: 2em;
		cursor: pointer;
	} */
</style>
