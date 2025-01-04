<script lang="ts">
	export let images: Array<{ src: string; caption: string }> = []

	let currentImage = 0

	function nextImage() {
		currentImage = (currentImage + 1) % images.length
	}

	function previousImage() {
		currentImage = (currentImage - 1 + images.length) % images.length
	}
</script>

<div style="width: 100%">
	<div class="button-container">
		<button on:click={previousImage}>
			{'<'}
		</button>
		<div class="image-container">
			<img
				class="minecraft-border"
				src={images[currentImage].src}
				alt={images[currentImage].caption}
			/>
			<p>{images[currentImage].caption}</p>
		</div>
		<button on:click={nextImage}>
			{'>'}
		</button>
	</div>
</div>

<style>
	.image-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 75%;
		margin: 0 16px;
		position: relative;
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
	}

	img {
		width: 100%;
	}
</style>
