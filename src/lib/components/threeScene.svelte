<script lang="ts">
	import { Canvas, T } from '@threlte/core'

	export let width: number
	export let height: number

	let container: HTMLDivElement
</script>

<div
	class="three-scene-container"
	style="width:{width}px; height:{height}px;"
	bind:this={container}
>
	<Canvas>
		<T.Scene>
			<slot {container} />
		</T.Scene>
	</Canvas>
</div>
