<script lang="ts" context="module">
	function play_pause_video(event: MouseEvent, enable: boolean) {
		const video = event.target as HTMLVideoElement
		if (enable) video.play()
		else video.pause()
	}
</script>

<script lang="ts">
	export let src: string
	export let loop: boolean = false
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
	on:mouseenter={(e) => play_pause_video(e, true)}
	on:mouseleave={(e) => play_pause_video(e, false)}
	{loop}
	muted
>
	<source {src} type="video/mp4" />
	Your browser does not support the video tag.
</video>

<style>
	video {
		width: 100%;
	}
</style>
