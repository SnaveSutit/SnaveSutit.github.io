<script lang="ts">
	export let caption: string

	let isExpanded = false
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={'expandable-image minecraft-inset-box' + (isExpanded ? ' expanded' : '')}
	on:click={() => (isExpanded = !isExpanded)}
>
	<div class="container">
		<slot />
		<p>{caption}</p>
	</div>
</div>

<style>
	.expandable-image {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	.expandable-image p {
		display: none;
	}

	.expandable-image .container {
		position: relative;
	}

	.expandable-image.expanded .container {
		margin: 0 16px;
		z-index: 1000;
	}

	.expandable-image.expanded {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
	}
</style>
