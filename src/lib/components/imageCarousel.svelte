<script lang="ts">
	export let images: Array<{ src: string; caption: string }> = []
	export let title = ''

	let currentImage = 0

	function nextImage() {
		currentImage = (currentImage + 1) % images.length
	}

	function previousImage() {
		currentImage = (currentImage - 1 + images.length) % images.length
	}
</script>

<div class="container">
	<div class="inner-box">
		<div class="title minecraft-title-box">
			<h2 style="color: inherit; align-self:center; filter: unset;">{title}</h2>
		</div>
		<div class="image-container">
			<img
				class="minecraft-border"
				src={images[currentImage].src}
				alt={images[currentImage].caption}
			/>
			<p>{images[currentImage].caption}</p>
		</div>
		<div class="button-container minecraft-inset-box">
			<button class="arrow-button" on:click={previousImage}>
				{'<'}
			</button>
			{#each images as image, index}
				<button disabled={index === currentImage} on:click={() => (currentImage = index)}
					>{index + 1}</button
				>
			{/each}
			<button class="arrow-button" on:click={nextImage}>
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
		p {
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
	}

	.image-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: 100%;
	}
	.image-container p {
		position: absolute;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 8px 16px;
		font-size: 16px;
	}

	.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: stretch;
	}

	p {
		opacity: 0.8;
	}

	img {
		width: 100%;
	}
</style>
