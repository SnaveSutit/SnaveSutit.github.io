<script lang="ts">
	import Expandable from '$lib/components/expandable.svelte'
	import Video from '$lib/components/video.svelte'
</script>

<div class="title minecraft-title-box">Molang Animations</div>
<div class="grid">
	<Video src="/animations/alien.mp4" />
	<Video src="/animations/goober.mp4" />
	<Video src="/animations/visceral_wings.mp4" />
	<Video src="/animations/cyber_wings.mp4" />
	<Video src="/animations/bonnie_wandering.mp4" />
	<Video src="/animations/turkey_reactivity.mp4" />
	<Video src="/animations/skeleton-swim.mp4" />
</div>
<hr />
<div class="title minecraft-title-box">Keyframed Animations</div>
<div class="grid">
	<Expandable caption="Statue Golem Roar">
		<img src="/animations/golem-roar.gif" alt="" style="pointer-events: none;" />
	</Expandable>
	<Expandable caption="Statue Golem Roar">
		<img src="/animations/golem-idle.gif" alt="" style="pointer-events: none;" />
	</Expandable>
	<Video src="/animations/turret_upgrades.mp4" />
	<Video src="/animations/turkey_cooked.mp4" />
</div>

<style>
	@media screen and (max-width: 800px) {
		.grid {
			grid-template-columns: repeat(auto-fill, minmax(50vw, 1fr)) !important;
		}
	}
	img {
		width: 100%;
		height: 100%;
	}
	.title {
		font-size: 1.25rem;
		line-height: 1.5rem;
		text-align: center;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
		margin: 16px;
		margin-bottom: 32px;
		align-self: stretch;
	}
</style>
