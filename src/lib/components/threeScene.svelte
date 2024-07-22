<script lang="ts" context="module">
	import { Camera, Scene, WebGLRenderer } from 'three'
	import { onMount } from 'svelte'
</script>

<script lang="ts">
	let canvasContainer: HTMLDivElement
	export let width: number
	export let height: number
	export let scene: Scene
	export let camera: Camera
	export let onRender: ((renderer: WebGLRenderer) => void) | undefined = undefined

	onMount(() => {
		const renderer = new WebGLRenderer({ alpha: true })
		renderer.setSize(width, height)
		canvasContainer.appendChild(renderer.domElement)

		renderer.setAnimationLoop(() => {
			onRender?.(renderer)
			renderer.render(scene, camera)
		})
	})
</script>

<div style="width: {width}px; height: {height}px;" bind:this={canvasContainer} />

<style>
	div {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		margin: 1rem;
	}
</style>
