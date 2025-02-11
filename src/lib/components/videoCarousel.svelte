<script lang="ts">
	import Youtube from 'svelte-youtube-embed'
	import { slide } from 'svelte/transition'

	export let videos: string[] = []
	export let title = ''

	let currentVideo = 0

	// async function getYoutubeVideoTitle(id: string) {
	// 	const res = await fetch(
	// 		`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
	// 	)
	// 	const videoInfo = await res.json()
	// 	return videoInfo?.title
	// }

	function nextVideo() {
		currentVideo = (currentVideo + 1) % videos.length
	}

	function previousVideo() {
		currentVideo = (currentVideo - 1 + videos.length) % videos.length
	}
</script>

<div class="container">
	<div class="inner-box">
		<div class="title minecraft-title-box">
			<h2 style="color: inherit; align-self:center; filter: unset;">{title}</h2>
		</div>
		<div class="image-container minecraft-border">
			{#key currentVideo}
				<Youtube id={videos[currentVideo]} animations={false}>
					<button>Play</button>
				</Youtube>
			{/key}
		</div>
		<div class="button-container minecraft-inset-box">
			<button class="arrow-button" on:click={previousVideo}>
				{'<'}
			</button>
			{#each videos as image, index}
				<button disabled={index === currentVideo} on:click={() => (currentVideo = index)}
					>{index + 1}</button
				>
			{/each}
			<button class="arrow-button" on:click={nextVideo}>
				{'>'}
			</button>
		</div>
	</div>
</div>

<style>
	@media screen and (max-width: 800px) {
		.button-container :not(.arrow-button) {
			font-size: 3vw !important;
		}
		.title h2 {
			font-size: 3vw !important;
		}
	}

	.inner-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: 100%;
	}

	.container {
		width: 100%;
		margin-top: 32px;
		display: flex;
		justify-content: center;
	}

	.title {
		display: flex;
		align-self: stretch;
		align-items: center;
		justify-content: center;
		margin: 0px 0px !important;
		filter: unset !important;
	}
	.title h2 {
		margin: 0;
		text-align: center;
	}

	.image-container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		align-self: stretch;
	}

	.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: stretch;
	}
</style>
