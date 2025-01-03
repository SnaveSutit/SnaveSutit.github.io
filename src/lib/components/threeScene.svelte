<script lang="ts">
	import { Canvas, T } from '@threlte/core'
	import { useProgress } from '@threlte/extras'

	export let width: number
	export let height: number
	export let onLoad: () => void = () => {}

	const { finishedOnce } = useProgress()

	$: if (finishedOnce) onLoad()

	let container: HTMLDivElement
</script>

<div
	class="three-scene-container"
	style="width:{width}px; height:{height}px; min-width:{width}px; min-height:{height}px; max-width:{width}px; max-height:{height}px;"
	bind:this={container}
>
	<Canvas>
		<T.Scene>
			<slot {container} />
		</T.Scene>
	</Canvas>
</div>
