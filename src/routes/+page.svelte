<script lang="ts">
	import ImageCarousel from '$lib/components/imageCarousel.svelte'
	import VideoCarousel from '$lib/components/videoCarousel.svelte'

	const images = [
		{
			src: 'https://animated-java.dev/img/variants.gif',
			caption: 'Variants'
		},
		{
			src: 'https://animated-java.dev/img/easing.gif',
			caption: 'Advanced Keyframe Easing Options'
		},
		{
			src: 'https://animated-java.dev/img/resourcepackless.png',
			caption: 'Resourcepackless Models'
		}
	]
</script>

<div class="project">
	<div class="title minecraft-border">
		<img
			class="minecraft-box"
			src="https://raw.githubusercontent.com/Animated-Java/animated-java/refs/heads/main/src/assets/animated_java_icon.svg"
			alt="Animated Java Logo"
		/>
		<div>
			<h1>Animated Java</h1>
			<p style="max-width: 800px;">
				A Blockbench plugin that makes complex animation a breeze in Minecraft: Java Edition.
			</p>
		</div>
	</div>
	<p style="padding: 0 32px;">
		My first major success, Animated Java is my most popular project to date. With over 170000
		downloads, and 3000 members on Discord. It's ushered in a new era of polish in Java Edition
		mapmaking!
	</p>
	<div class="project-buttons">
		<button style="width: 180px; height: 48px;" on:click={() => open('https://animated-java.dev/')}>
			<img
				src="https://raw.githubusercontent.com/FuncFusion/mc-dp-icons/refs/heads/main/fileicons/imgs/tags_file.svg"
				alt="Tag"
				width="32px"
				style="margin-right: 8px;"
			/>
			Website
		</button>
		<button
			style="width: 180px; height: 48px;"
			on:click={() => open('https://github.com/Animated-Java/animated-java')}
		>
			<img
				src="https://raw.githubusercontent.com/FuncFusion/mc-dp-icons/refs/heads/main/fileicons/imgs/folder.svg"
				alt="Chest"
				width="32px"
				style="margin-right: 8px;"
			/>
			Source
		</button>
	</div>
	<h2 style="align-self:center;">Gallery</h2>
	<ImageCarousel {images} />
	<h2 style="align-self:center;">Community Showcase</h2>
	<VideoCarousel
		videos={[
			'RFwAM5v5QoQ', // I Coded Minecraft’s Hardest Difficulty
			'dd7pqAPd-p0', // Phantom Manor
			'M2R3zgvbZ30', // How to Mine a Tree
			'biJ41HIeu3E', // Minecraft: Fabled Lands - Lord Veridian Boss Fight
			'0UCrI7NJ5KI', // New Boss Test
			'0xPyRA-he5c', // Cataclysmic Emissary
			'fthlphRmsjY', // I Added Mr Beast to Minecraft...
			'yfaQM3aHgxE', // Mordecai the Unending
			'CO2kYUMpYPk', // Excuse me Sir
			'-6pLFvW5_Dk', // Camera Animation Test
			'sC3FqzpDrpQ', // Diamond Golem
			'fs0NUGmsa10', // Butter Dog
			'4VlwyI0EHo4' // Funny Mobile Game
		]}
	/>
</div>

<div style="height: 32px;" />

<style>
	.project-buttons {
		display: flex;
		justify-content: center;
		align-self: center;
	}
	.project {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin-left: 16px;
		margin-right: 16px;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		background-color: var(--minecraft-background-color);
		padding: 16px;
		align-self: stretch;
	}

	.title img {
		width: 128px;
		height: 128px;
		margin-right: 32px;
	}

	/* .title h1 {
		font-size: 2.5rem;
	} */

	/* .title img.animated-java {
		border-radius: 16px;
		box-shadow: 4px 4px 8px -4px #000;
	} */
</style>
