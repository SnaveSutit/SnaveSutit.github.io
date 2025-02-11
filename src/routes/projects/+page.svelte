<script lang="ts">
	import ImageCarousel from '$lib/components/imageCarousel.svelte'
	import VideoCarousel from '$lib/components/videoCarousel.svelte'
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
		My first major success, Animated Java is my most popular project to date. With over 170,000
		downloads, and 3,000 members on Discord, it has ushered in a new era of polish in Java Edition
		mapmaking!
	</p>
	<div class="project-buttons">
		<button class="project-button" on:click={() => open('https://animated-java.dev/')}>
			<img
				src="https://raw.githubusercontent.com/FuncFusion/mc-dp-icons/refs/heads/main/fileicons/imgs/tags_file.svg"
				alt="Tag"
				width="32px"
				style="margin-right: 8px;"
			/>
			Website
		</button>
		<button
			class="project-button"
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
	<div class="galleries">
		<ImageCarousel
			images={[
				{
					src: 'https://animated-java.dev/img/variants.gif',
					caption: 'Variants'
				},
				{
					src: 'https://animated-java.dev/img/easing.gif',
					caption: 'Advanced Keyframe Easing Options'
				},
				{
					src: '/img/aj-docs.png',
					caption: 'Fully-Featured Documentation'
				},
				{
					src: 'https://animated-java.dev/img/resourcepackless.png',
					caption: 'Resourcepackless Models'
				},
				{
					src: '/img/project-menu.png',
					caption: 'Project Menu'
				}
			]}
			title="Gallery"
		/>
		<VideoCarousel
			title="Community Showcase"
			videos={[
				'RFwAM5v5QoQ', // I Coded Minecraft’s Hardest Difficulty
				'dd7pqAPd-p0', // Phantom Manor
				'XdABXLbS_ok', // I Coded Five Nights at Freddy's in Minecraft
				'M2R3zgvbZ30', // How to Mine a Tree
				'biJ41HIeu3E', // Minecraft: Fabled Lands - Lord Veridian Boss Fight
				// '0xPyRA-he5c', // Cataclysmic Emissary
				'fthlphRmsjY' // I Added Mr Beast to Minecraft...
				// 'yfaQM3aHgxE' // Mordecai the Unending
			]}
		/>
	</div>
</div>

<hr />

<div class="project">
	<div class="title minecraft-border">
		<img
			class="minecraft-box"
			src="https://raw.githubusercontent.com/SnaveSutit/origins-mod-vscode-extension/refs/heads/main/icon.png"
			alt="Origins JSON Schemas Logo"
		/>
		<div>
			<h1>Origins JSON Schemas</h1>
			<p style="max-width: 800px;">A VSCode Extension</p>
		</div>
	</div>
	<p style="padding: 0 32px;">
		Two projects in one! A VSCode extension, and a JSON Schema repository providing JSON Schemas for
		the Origins mod, giving users much needed autocompletion, validation, and inline-documentation
		for the mod's complex JSON files.
	</p>
	<p style="padding: 0 32px;">
		Behind the scenes, the JSON Schemas are generated using a custom TypeScript preprocessor,
		automatically inserting descriptions, and Minecraft data, such as block names, for
		autocompletion.
	</p>
	<div class="project-buttons">
		<button
			class="project-button"
			on:click={() => open('https://github.com/SnaveSutit/origins-mod-vscode-extension')}
		>
			<img
				src="https://raw.githubusercontent.com/FuncFusion/mc-dp-icons/refs/heads/main/fileicons/imgs/folder.svg"
				alt="Chest"
				width="32px"
				style="margin-right: 8px;"
			/>
			Extension Source
		</button>
		<button
			class="project-button"
			on:click={() => open('https://github.com/SnaveSutit/origins-mod-json-schemas')}
		>
			<img
				src="https://raw.githubusercontent.com/FuncFusion/mc-dp-icons/refs/heads/main/fileicons/imgs/folder.svg"
				alt="Chest"
				width="32px"
				style="margin-right: 8px;"
			/>
			Schema Source
		</button>
	</div>
	<div class="galleries">
		<ImageCarousel
			images={[
				{
					src: 'https://raw.githubusercontent.com/SnaveSutit/origins-mod-vscode-extension/refs/heads/main/assets/example.gif',
					caption: 'Showcase of Autocompletion and Validation'
				},
				{
					src: '/img/example_origins_vscode.png',
					caption: 'Example of Some Custom Preprocessor Syntax'
				}
			]}
			title="Gallery"
		/>
	</div>
</div>

<hr />

<div class="project">
	<div class="title minecraft-border">
		<img class="minecraft-box" src="/img/11things.png" alt="11 Things Logo" />
		<div>
			<h1>11 Things?</h1>
			<p style="max-width: 800px;">A Mobile Game about merging Things!</p>
		</div>
	</div>
	<p style="padding: 0 32px;">
		11 Things is a mobile game I am developing in my free time using the Godot game engine. It is a
		simple game about merging Things together to get larger Things to get the highest score
		possible. It is inspired by 2048 and Suika Game.
	</p>
	<p style="padding: 0 32px;">
		The main goals of this project are to gain a firm understanding of game development, and get the
		experience of publishing a game before moving on to larger projects.
	</p>
	<div class="project-buttons">
		<button class="project-button" on:click={() => open('https://discord.com/invite/vUK37EUsH6')}>
			<img
				src="https://raw.githubusercontent.com/FuncFusion/mc-dp-icons/refs/heads/main/fileicons/imgs/dimension_file.svg"
				alt="Portal"
				width="32px"
				style="margin-right: 8px;"
			/>
			Discord Server
		</button>
	</div>
	<div class="galleries">
		<ImageCarousel
			images={[
				{
					src: '/img/11things/main_menu.png',
					caption: 'Main Menu'
				},
				{
					src: '/img/11things/unlocks_menu.png',
					caption: 'Unlocks Menu'
				},
				{
					src: '/img/11things/gameplay.png',
					caption: 'Gameplay'
				}
			]}
			title="Gallery"
		/>
	</div>
</div>
<hr />

<div class="project">
	<div class="title minecraft-border">
		<img class="minecraft-box" src="/img/11things.png" alt="11 Things Logo" />
		<div>
			<h1>11 Things?</h1>
			<p style="max-width: 800px;">A Mobile Game about merging Things!</p>
		</div>
	</div>
	<p style="padding: 0 32px;">
		11 Things is a mobile game I am developing in my free time using the Godot game engine. It is a
		simple game about merging Things together to get larger Things to get the highest score
		possible. It is inspired by 2048 and Suika Game.
	</p>
	<p style="padding: 0 32px;">
		The main goals of this project are to gain a firm understanding of game development, and get the
		experience of publishing a game before moving on to larger projects.
	</p>
	<div class="project-buttons">
		<button class="project-button" on:click={() => open('https://discord.com/invite/vUK37EUsH6')}>
			<img
				src="https://raw.githubusercontent.com/FuncFusion/mc-dp-icons/refs/heads/main/fileicons/imgs/dimension_file.svg"
				alt="Portal"
				width="32px"
				style="margin-right: 8px;"
			/>
			Discord Server
		</button>
	</div>
	<div class="galleries">
		<ImageCarousel
			images={[
				{
					src: '/img/11things/main_menu.png',
					caption: 'Main Menu'
				},
				{
					src: '/img/11things/unlocks_menu.png',
					caption: 'Unlocks Menu'
				},
				{
					src: '/img/11things/gameplay.png',
					caption: 'Gameplay'
				}
			]}
			title="Gallery"
		/>
	</div>
</div>

<div style="height: 32px;" />

<style>
	@media screen and (max-width: 800px) {
		.project {
			width: 90%;
		}
		.title {
			flex-direction: column !important;
			margin: 0 !important;
			margin-top: 16px;
			padding-bottom: 0 !important;
		}
		.title img {
			margin: 0 !important;
			margin-bottom: 16px !important;
		}
		.project-button {
			width: 30vw !important;
			height: 8vw !important;
			font-size: 3vw !important;
		}
		.galleries {
			margin: 0 !important;
		}
	}

	.galleries {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 16px;
		width: auto;
		align-self: stretch;
	}

	.project-buttons {
		display: flex;
		justify-content: center;
		align-self: center;
		width: 100%;
		padding: 0 16px;
	}

	.project {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin-left: 16px;
		margin-right: 16px;
		width: 100%;
	}

	.project-button {
		width: auto;
		height: 48px;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		background-color: var(--minecraft-background-color);
		padding: 16px;
		align-self: stretch;
		margin: 0px 16px;
	}

	.title img {
		width: 128px;
		height: 128px;
		margin-right: 32px;
		margin-left: 8px;
	}

	p {
		align-self: center;
	}
</style>
