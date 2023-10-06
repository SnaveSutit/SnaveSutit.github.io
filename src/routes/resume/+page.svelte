<script lang="ts" context="module">
	import blockbenchIcon from '../../assets/icons/Blockbench_icon.png';
	import godotIcon from '../../assets/icons/godot_logo.png';
	import vscodeIcon from '../../assets/icons/code-stable.png';
	import githubIcon from '../../assets/icons/GitHub-Mark.png';
	import gimpIcon from '../../assets/icons/gimp-icon.png';

	import IconItem from './icon_item.svelte';
	import Skill from './skill.svelte';
</script>

<div class="list_container">
	<h1>Resume</h1>
	<div>
		<h1>Summary</h1>
		<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
	</div>
	<div>
		<h1>Resume PDF</h1>
		<a href="/src/assets/Resume.pdf">View</a>
	</div>
	<div>
		<h1>Skills</h1>
		<div class="software_grid">
			<Skill title="Tech Animation" />
			<Skill title="Mathematic" />
			<Skill title="Game Dev" />
			<Skill title="Web Dev" />
			<Skill title="3D Modeling" />
		</div>
	</div>
	<div>
		<h1>Software Proficiency</h1>
		<div class="software_grid">
			<IconItem title="Blockbench" iconUrl={blockbenchIcon} url="https://www.blockbench.net/" />
			<IconItem title="Godot" iconUrl={godotIcon} url="https://godotengine.org/" />
			<IconItem title="VSCode" iconUrl={vscodeIcon} url="https://code.visualstudio.com/" />
			<IconItem title="GitHub" iconUrl={githubIcon} url="https://github.com/SnaveSutit" />
			<IconItem title="GIMP" iconUrl={gimpIcon} url="https://www.gimp.org/" />
		</div>
	</div>
	<div>
		<h1>Productions</h1>
		<div>
			<h2>Animated Java</h2>
		</div>
	</div>
</div>

<style>
	.list_container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.list_container > div {
		padding: 1rem;
		border-bottom: 2px solid var(--color-subtle_text);
		width: 70%;
	}
	.list_container :last-child {
		border-bottom: none;
	}
	.software_grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		grid-gap: 0.5rem;
	}
</style>
