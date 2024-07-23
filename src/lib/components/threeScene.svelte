<script lang="ts" context="module">
	import { Camera, Scene, WebGLRenderer } from 'three'
	import { onDestroy, onMount } from 'svelte'
	import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass'
	import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader'
	import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
	import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
</script>

<script lang="ts">
	let canvasContainer: HTMLDivElement
	export let width: number
	export let height: number
	export let scene: Scene
	export let camera: Camera
	export let onRender: ((renderer: WebGLRenderer) => void) | undefined = undefined

	let renderer: WebGLRenderer

	onMount(() => {
		renderer = new WebGLRenderer({ alpha: true })
		renderer.setSize(width, height)
		canvasContainer.appendChild(renderer.domElement)

		const composer = new EffectComposer(renderer)
		composer.addPass(new SSAARenderPass(scene, camera))
		composer.addPass(new ShaderPass(GammaCorrectionShader))

		renderer.setAnimationLoop(() => {
			onRender?.(renderer)
			composer.render()
		})
	})

	onDestroy(() => {
		renderer?.dispose()
	})
</script>

<div style="width: {width}px; height: {height}px;" bind:this={canvasContainer} />

<style>
	div {
		image-rendering: optimizeQuality;
	}
</style>
