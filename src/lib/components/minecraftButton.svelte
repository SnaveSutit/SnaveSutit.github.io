<script lang="ts">
	export let width: string
	export let height: string
	export let fontSize: string
	export let selected: boolean = false
</script>

<div class="minecraft-button-wrapper">
	<div
		class={selected ? 'minecraft-button-selected' : 'minecraft-button'}
		style={`width:${width}; height:${height}; font-size: ${fontSize};`}
	>
		<slot />
	</div>
</div>

<style>
	.minecraft-button-selected {
		border: 4px solid #639d52;
		background-color: #3c8527;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: var(--minecraft-font);
		color: #ffffff;
	}
	.minecraft-button-wrapper:has(.minecraft-button-selected) {
		border-bottom: unset;
		margin-top: 12px;
	}

	.minecraft-button {
		background-color: #d0d1d4;
		border: 4px solid #ecedee;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: var(--minecraft-font);
		color: #1e1e1f;
	}
	.minecraft-button:hover {
		background-color: #b1b2b5;
	}
	.minecraft-button-wrapper:has(.minecraft-button:active) {
		border-bottom: unset;
		margin-top: 12px;
	}
	.minecraft-button-wrapper {
		width: fit-content;
		outline: 4px solid #1e1e1f;
		border-bottom: 12px solid #58585a;
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		margin-left: 4px;
	}
</style>
