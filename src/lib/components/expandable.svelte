<script lang="ts">
	import { onMount } from 'svelte'

	export let caption: string

	let isExpanded = false
	let element: HTMLDivElement

	function expand() {
		isExpanded = !isExpanded
		requestAnimationFrame(() => {
			scrollTo({
				behavior: 'instant',
				top: element.offsetTop
			})
		})
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={'expandable-image minecraft-inset-box' + (isExpanded ? ' expanded' : '')}
	on:click={() => expand()}
	bind:this={element}
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
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}

	.expandable-image.expanded .container {
		position: sticky;
		top: 0;
		z-index: 1000;
		margin: unset;
	}
</style>
