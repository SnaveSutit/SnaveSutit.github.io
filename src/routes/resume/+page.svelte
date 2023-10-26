<script lang="ts" context="module">
	import { fly } from 'svelte/transition'

	import ResumeSrc from '../../assets/Resume.pdf'
	import BlockbenchIcon from '../../assets/icons/Blockbench_icon.png'
	import VSCodeIcon from '../../assets/icons/code-stable.png'
	import GIMPIcon from '../../assets/icons/gimp-icon.png'
	import GitHubIcon from '../../assets/icons/GitHub-Mark.png'
	import GodotIcon from '../../assets/icons/godot_logo.png'
	import GitLabIcon from '../../assets/icons/GitLab_icon.png'
	import FigmaIcon from '../../assets/icons/apps-figma-icon.png'
	import AudacityIcon from '../../assets/icons/Audacity_Logo.png'

	import MoonsworthIcon from '../../assets/icons/moonsworth.webp'
	import NoxcrewIcon from '../../assets/icons/noxcrew.png'
	import CoretekIcon from '../../assets/icons/coretek.png'
</script>

<div class="info_block_list">
	<div in:fly={{ x: 64, duration: 500, delay: 0 }}>
		<h1>SUMMARY</h1>
		<p>
			Driven by a profound interest in innovation and technology, I thrive on pushing boundaries and
			exploring the uncharted. Whether that's creating powerful tools or animating a goblin, I am
			resolute in my drive to extend and refine my skill set.
			<br />
			When collaborating with a team I find great satisfaction in improving workflow efficiency through
			detailed documentation, strategic automation, and streamlining processes. Minimizing the barriers
			between an idea and the team's realization of it.
		</p>
	</div>
	<div in:fly={{ x: 64, duration: 500, delay: 100 }}>
		<h1>RESUME PDF</h1>
		<a href={ResumeSrc}>View</a>
	</div>
	<div style="align-items: stretch;" in:fly={{ x: 64, duration: 500, delay: 200 }}>
		<h1>SKILLS</h1>
		<lu>
			<li>TECH ANIMATION</li>
			<li>3D ANIMATION</li>
			<li>PROJECT LEAD</li>
			<li>PROGRAMMING</li>
			<li>WEB DEV</li>
			<li>3D MODELING</li>
			<li>MATHMATIC</li>
			<li>GAME DEV</li>
			<li>GAME ANIMATION</li>
			<li>TOOL CREATION</li>
		</lu>
	</div>
	<div style="align-items: stretch;" in:fly={{ x: 64, duration: 500, delay: 300 }}>
		<h1>SOFTWARE PROFICIENCY</h1>
		<lu>
			<li class="image_item">
				<img src={BlockbenchIcon} alt="" />BLOCKBENCH
			</li>
			<li class="image_item">
				<img src={VSCodeIcon} alt="" />
				VSCODE
			</li>
			<li class="image_item">
				<img src={GIMPIcon} alt="" />
				GIMP
			</li>
			<li class="image_item">
				<img src={GitHubIcon} alt="" />
				GITHUB
			</li>
			<li class="image_item">
				<img src={GodotIcon} alt="" />
				GODOT
			</li>
			<li class="image_item">
				<img src={GitLabIcon} alt="" />
				GITLAB
			</li>
			<li class="image_item">
				<img src={FigmaIcon} alt="" />
				FIGMA
			</li>
			<li class="image_item">
				<img src={AudacityIcon} alt="" />
				AUDACITY
			</li>
		</lu>
	</div>
	<div>
		<h1>EXPERIENCE</h1>
		<lu>
			<li class="experience-item">
				<div class="experience-item-label-container">
					<div class="experience-item-label">
						<img class="image_item" src={MoonsworthIcon} alt="" />
						<a href="https://www.moonsworth.com/">MOONSWORTH</a>
					</div>
					<lu>
						<li>Head Technical Animator</li>
						<li>Modeler</li>
					</lu>
				</div>
				<p class="duration">JUN 2022 - PRESENT, REMOTE</p>
			</li>
			<li class="experience-item">
				<div class="experience-item-label-container">
					<div class="experience-item-label">
						<img class="image_item" src={NoxcrewIcon} alt="" />
						<a href="https://noxcrew.com/">NOXCREW</a>
					</div>
					<lu>
						<li>Gameplay Mechanic</li>
						<li>Web Developer</li>
					</lu>
				</div>
				<p class="duration">AUG 2020 - JUN 2022, REMOTE</p>
			</li>
			<li class="experience-item">
				<div class="experience-item-label-container">
					<div class="experience-item-label">
						<img class="image_item" src={CoretekIcon} alt="" />
						<a href="https://www.coretek.com/">CORETEK</a>
					</div>
					<lu>
						<li>IT Intern</li>
					</lu>
				</div>
				<p class="duration">MAY 2018 - JAN 2019, FARMINGTON HILLS, MI</p>
			</li>
		</lu>
	</div>
</div>

<style>
	@media only screen and (max-width: 1200px) {
		.experience-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			flex-grow: 1;
		}

		.experience-item div.experience-item-label-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			margin: 0;
			margin-top: 8px;
			margin-bottom: 8px;
		}

		.experience-item div.experience-item-label-container > lu {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
		}

		.experience-item div.experience-item-label-container > lu > li {
			min-width: fit-content;
			margin: 4px;
			padding: 4px 8px 2px;
			font-size: 16px;
			border: 2px solid var(--color-text);
			transition: transform cubic-bezier(1, 4, 0, 1) 0.2s;
			background-color: var(--color-foreground);
			cursor: default;
		}

		.experience-item p.duration {
			flex-grow: 1;
			text-align: center;
		}
	}

	@media only screen and (min-width: 1200px) {
		.experience-item {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			flex-grow: 1;
		}

		.experience-item div.experience-item-label-container {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-evenly;
			margin: 0;
			margin-top: 8px;
			margin-bottom: 8px;
			padding-left: 32px;
		}

		.experience-item div.experience-item-label-container > lu {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-evenly;
		}

		.experience-item div.experience-item-label-container > lu > li {
			min-width: fit-content;
			margin: 4px;
			padding: 4px 8px 2px;
			border: 2px solid var(--color-text);
			transition: transform cubic-bezier(1, 4, 0, 1) 0.2s;
			background-color: var(--color-foreground);
			cursor: default;
		}

		.experience-item p.duration {
			flex-grow: 1;
			text-align: right;
			margin-right: 32px;
		}
	}

	.experience-item a {
		text-decoration: none;
		font-size: 30px;
		color: var(--color-text);
		padding: 0px 8px;
		margin: 8px;
		transition: color cubic-bezier(1, 2, 0, 1) 0.1s;
	}

	.experience-item a:hover {
		color: var(--color-accent);
	}

	.experience-item-label {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}

	.experience-item div.experience-item-label-container p {
		padding: 0;
		margin: 5px;
	}

	.experience-item div.experience-item-label-container > lu > li:hover {
		transform: translateY(-4px) rotate(1deg);
		z-index: 1;
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
	.info_block_list > div > h1 {
		text-align: center;
		font-size: 36px;
		margin-bottom: 0;
	}
	.info_block_list > div > p {
		text-align: left;
		font-size: 20px;
		margin: 16px 32px;
	}
	.info_block_list > div > a {
		text-align: center;
		font-size: 24px;
		margin-bottom: 16px;
		color: var(--color-accent);
		text-decoration: none;
		border-bottom: 4px solid var(--color-accent);
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
	.image_item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.image_item img {
		width: 32px;
		height: 32px;
		margin: 2px 8px 4px 2px;
	}
	img {
		width: 32px;
		height: 32px;
		margin: 2px 8px 4px 2px;
	}
</style>
