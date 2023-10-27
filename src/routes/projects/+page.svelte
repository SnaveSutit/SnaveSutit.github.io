<script lang="ts" context="module">
	import { fly } from 'svelte/transition'

	import AnimatedJavaIcon from '../../assets/icons/Animated Java 2.0 2023 Animated Icon x128 compressed.gif'
	import AJDocsImage from '../../assets/images/AJ_Documentation.png'
	import AJProjectSettingsImage from '../../assets/images/AJ_Project_Settings.png'
	import AJShowcaseVideo from '../../assets/videos/aj-showcase.mp4'

	import OriginsIcon from '../../assets/icons/origins-icon.png'
	import MCBuildIcon from '../../assets/icons/mcbuild-icon.png'

	import AstarIcon from '../../assets/icons/astar-icon.png'
	import AstarVideo1 from '../../assets/videos/astar/A topdown view of the pathfinding in action.mp4'
	import AstarVideo2 from '../../assets/videos/astar/Showcasing weighted blocks.mp4'
	import AstarVideo3 from '../../assets/videos/astar/The example NPCs in action.mp4'
</script>

<div class="info_block_list">
	<div in:fly={{ x: 64, duration: 500, delay: 0 }}>
		<div class="title-container">
			<div class="title">
				<img class="icon" src={AnimatedJavaIcon} alt="" />
				<h1>ANIMATED JAVA</h1>
			</div>
			<span class="role">Lead Developer / Author</span>
		</div>
		<p style="margin: 0;">
			A Blockbench plugin that makes complex animation a breeze in Minecraft: Java Edition.
		</p>
		<img class="preview" src={AJDocsImage} alt="" />
		<img class="preview" src={AJProjectSettingsImage} alt="" />
		<video class="preview" src={AJShowcaseVideo} autoplay loop muted />
		<lu>
			<li>
				<a href="https://github.com/Animated-Java/animated-java">Github</a>
			</li>
			<li>
				<a href="https://github.com/Animated-Java/animated-java">Website</a>
			</li>
		</lu>
	</div>
	<div in:fly={{ x: 64, duration: 500, delay: 0 }}>
		<div class="title-container">
			<div class="title">
				<img class="icon" src={OriginsIcon} alt="" />
				<h1>ORIGINS MOD HELPER</h1>
			</div>
			<span class="role">Author</span>
		</div>
		<p style="margin: 0;">
			A VSCode plugin that adds auto-complete for the Origins mod's many JSON files.
		</p>
		<lu>
			<li>
				<a href="https://github.com/SnaveSutit/origins-mod-json-schemas">Github</a>
			</li>
		</lu>
	</div>
	<div in:fly={{ x: 64, duration: 500, delay: 0 }}>
		<div class="title-container">
			<div class="title">
				<img class="icon" src={MCBuildIcon} alt="" />
				<h1>MCBUILD</h1>
			</div>
			<span class="role">Co-Author</span>
		</div>
		<p style="margin: 0;">
			A powerful Data Pack pre-compiler with a focus on syntactic simplicity.
		</p>
		<lu>
			<li>
				<a href="https://github.com/mc-build/mc-build">GitHub</a>
			</li>
			<li>
				<a href="https://mcbuild.dev/">Website</a>
			</li>
		</lu>
	</div>
	<div in:fly={{ x: 64, duration: 500, delay: 0 }}>
		<div class="title-container">
			<div class="title">
				<img class="icon" src={MCBuildIcon} alt="" />
				<h1>MCBUILD VSCODE EXTENSION</h1>
			</div>
			<span class="role">Author</span>
		</div>
		<div class="title" />
		<p style="margin: 0;">VSCode Syntax Highlighting for MCBuild's Lang-MC</p>
		<lu>
			<li>
				<a href="https://github.com/SnaveSutit/language-mcbuild-lang-mc">GitHub</a>
			</li>
			<li>
				<a
					href="https://marketplace.visualstudio.com/items?itemName=SnaveSutit.snavesutit-language-langmc"
					>Website</a
				>
			</li>
		</lu>
	</div>
	<div in:fly={{ x: 64, duration: 500, delay: 0 }}>
		<div class="title-container">
			<div class="title">
				<img class="icon" src={AstarIcon} alt="" />
				<h1>A* PATHFINDING DATA PACK</h1>
			</div>
			<span class="role">Author</span>
		</div>
		<p style="margin: 0;">
			Async, performant, and excessively configurable A* pathfinding in vanilla Minecraft: Java
			Edition.
		</p>
		<video class="preview" src={AstarVideo1} autoplay loop muted />
		<video class="preview" src={AstarVideo2} autoplay loop muted />
		<video class="preview" src={AstarVideo3} autoplay loop muted />
		<lu>
			<li>
				<a href="https://github.com/SnaveSutit/mcworld-astar">GitHub</a>
			</li>
		</lu>
	</div>
</div>

<style>
	@media only screen and (max-width: 1200px) {
		div.title {
			margin-top: 8px !important;
			flex-direction: column;
			align-items: center;
		}
		div.title > h1 {
			text-align: center !important;
			margin: 0 !important;
			padding-top: 8px !important;
			font-size: 28px !important;
		}
		.role {
			font-size: 18px !important;
			margin-left: 0px !important;
			margin-bottom: 0px !important;
		}
		.preview {
			width: 100%;
		}
	}

	@media only screen and (min-width: 1200px) {
		.preview {
			width: 80%;
		}
	}

	.title-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.role {
		font-size: 24px;
		margin-left: 16px;
		color: var(--color-text);
		margin-bottom: 16px;
	}

	.preview {
		margin: 16px 0px;
		border-radius: 8px;
		transition: transform cubic-bezier(1, 4, 0, 1) 0.2s, box-shadow cubic-bezier(1, 4, 0, 1) 0.2s;
	}

	.preview:hover {
		transform: translateY(-4px);
		z-index: 1;
		box-shadow: 0 8px 4px 0 rgba(0, 0, 0, 0.25);
	}

	div.title {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 16px;
	}
	div.title > h1 {
		margin: 0;
		margin-left: 16px;
		font-size: 36px;
		line-height: 1;
		padding-top: 8px;
	}

	.info_block_list {
		display: flex;
		flex-direction: column;
		padding: 32px 12%;
	}
	.info_block_list > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color-foreground);
		margin-bottom: 32px;
		transition: transform cubic-bezier(1, 4, 0, 1) 0.2s, box-shadow cubic-bezier(1, 4, 0, 1) 0.2s;
	}
	.info_block_list > div:hover {
		transform: translateY(-4px);
		z-index: 1;
		box-shadow: 0 8px 4px 0 rgba(0, 0, 0, 0.25);
	}
	.info_block_list > div > p {
		text-align: left;
		font-size: 20px;
		margin: 16px 32px !important;
	}
	a {
		text-align: center;
		font-size: 24px;
		margin-bottom: 16px;
		color: var(--color-text);
		text-decoration: none;
	}
	.info_block_list > div > lu {
		display: flex;
		text-align: left;
		font-size: 20px;
		margin: 16px 32px;
		list-style: none;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		text-transform: uppercase;
	}
	.info_block_list > div > lu > li {
		min-width: fit-content;
		margin: 4px;
		padding: 4px 8px 2px;
		border: 2px solid var(--color-text);
		transition: transform cubic-bezier(1, 4, 0, 1) 0.2s;
		background-color: var(--color-foreground);
		cursor: default;
	}
	.info_block_list > div > lu > li:hover:not(.experience-item) {
		transform: translateY(-4px) rotate(1deg);
		z-index: 1;
	}
	img.icon {
		width: 64px;
		height: 64px;
		margin: 2px 8px 4px 2px;
		border-radius: 8px;
	}
</style>
