<script lang="ts" context="module">
	import '../mouse'
	import ThreeScene from './threeScene.svelte'
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
	import {
		type WebGLRenderer,
		DirectionalLight,
		OrthographicCamera,
		Scene,
		AmbientLight,
		Vector2,
		Clock
	} from 'three'
	import { type SvelteComponent } from 'svelte'
	import { getMousePosNormalized } from '../mouse'
	import { ease, linearInterval, linearWave } from '$lib/easing'
	import { BoneStructure } from '$lib/three/boneStructure'
	import { clamp } from '$lib/util'
	import { scale } from 'svelte/transition'
</script>

<script lang="ts">
	import { expoOut } from 'svelte/easing'

	export let width: number
	export let height: number

	const scene = new Scene()
	const viewSize = 1.25
	const camera = new OrthographicCamera(-viewSize, viewSize, viewSize, -viewSize, 0.1, 1000)

	const sun = new AmbientLight(0xffffff, 0.5)
	scene.add(sun)

	const lights = {
		top: new DirectionalLight(0xffffff, 4),
		// bottom: new DirectionalLight(0xffffff, -0.02),
		north: new DirectionalLight(0xffffff, 1)
		// south: new DirectionalLight(0xffffff, 0.3),
		// east: new DirectionalLight(0xffffff, 0.1),
		// west: new DirectionalLight(0xffffff, 0.1)
	}
	const distance = 100
	lights.top.position.set(0, distance, 0)
	// lights.bottom.position.set(0, -distance, 0)
	lights.north.position.set(0, 0, -distance)
	// lights.south.position.set(0, 0, distance)
	// lights.east.position.set(distance, 0, 0)
	// lights.west.position.set(-distance, 0, 0)

	for (const light of Object.values(lights)) {
		scene.add(light)
	}

	camera.rotateY(Math.PI)
	camera.rotateX(-0.1)
	camera.position.z = -1
	camera.position.y = 0.95

	const loader = new GLTFLoader()
	let player: BoneStructure | undefined
	let sceneElement: SvelteComponent

	// onMount(async () => {
	// })

	async function loadModel() {
		const loaded = await loader.loadAsync('models/player.gltf')
		player = new BoneStructure(loaded.scene)
		scene.add(loaded.scene)
	}

	let glideMouse: Vector2 = new Vector2()
	let clock = new Clock()

	function onRender(renderer: WebGLRenderer) {
		const element = sceneElement?.$$.ctx[2] as HTMLDivElement
		if (!element) return
		const delta = clock.getDelta()
		const time = clock.getElapsedTime()
		const mouse = getMousePosNormalized(element)

		// When the page isn't rendering, the delta between frames can be very large.
		// So we need to clamp the delta to prevent the player from spinning like a top.
		glideMouse.lerpVectors(glideMouse, mouse, 14 * clamp(delta, 0, 0.01))

		if (player) {
			const root = player.getBone('root')!
			root.rotation.y = (glideMouse.x - 0.5) * 0.25

			const waist = player.getBone('waist')!
			waist.rotation.y = (glideMouse.x - 0.5) * 0.125
			waist.rotation.x = (glideMouse.y - 0.5) * -0.05
			waist.position.y = 11 / 16 + Math.sin(time) * 0.025
			waist.position.z = (glideMouse.y - 0.5) * 0.05

			const leftArm = player.getBone('left_arm')!
			leftArm.rotation.x = -Math.cos(time) * 0.05125 + glideMouse.y * 0.1
			leftArm.rotation.z = Math.sin(time) * 0.05125 - 0.06

			const rightArm = player.getBone('right_arm')!
			rightArm.rotation.x = Math.cos(time) * 0.05125 + glideMouse.y * 0.1
			rightArm.rotation.z = -Math.sin(time) * 0.05125 + 0.06

			const leftLeg = player.getBone('left_leg')!
			leftLeg.rotation.z = -0.05
			leftLeg.rotation.y = 0.125 + (glideMouse.x - 0.5) * -0.1

			leftLeg.rotation.x = (glideMouse.y - 0.5) * 0.05
			leftLeg.position.z = (glideMouse.y - 0.5) * 0.05

			const rightLeg = player.getBone('right_leg')!
			rightLeg.rotation.z = 0.05
			rightLeg.rotation.y = -0.125 + (glideMouse.x - 0.5) * -0.1

			rightLeg.rotation.x = (glideMouse.y - 0.5) * 0.05
			rightLeg.position.z = (glideMouse.y - 0.5) * 0.05

			const head = player.getBone('head')!
			head.lookAt(glideMouse.x - 0.5, glideMouse.y + 1.25, 2)

			const leftEyeRing = player.getBone('left_eye_ring')!
			leftEyeRing.position.x = -2 / 16 + ease('easeInOutExpo', linearWave(time)) * 0.025 - 0.025

			const rightEyeRing = player.getBone('right_eye_ring')!
			rightEyeRing.position.x = 2 / 16 - ease('easeInOutExpo', linearWave(time)) * 0.025 + 0.025

			const eye = player.getBone('eye')!
			eye.position.x = clamp((mouse.x - 0.5) * -0.25, -0.05, 0.05)
			eye.position.y = 4 / 16 - clamp((mouse.y - 0.15) * 0.25, -0.05, 0.05)

			eye.scale.y = 1 + clamp(ease('easeInCubic', linearInterval(time * 4, 4 * 4)) * -1.25, -1, 0)
			eye.scale.x = 1 + ease('easeInCubic', linearInterval(time * 4, 4 * 4)) * 0.25

			const leftEar = player.getBone('left_ear')!
			leftEar.rotation.x = -0.125 + ease('easeInOutExpo', linearWave(time - 0.25)) * 0.125

			const rightEar = player.getBone('right_ear')!
			rightEar.rotation.x = -0.125 + ease('easeInOutExpo', linearWave(time - 0.25)) * 0.125
		}
	}
</script>

<div class="container" style="width: {width}px; height: {height}px;">
	{#await loadModel() then}
		<div in:scale={{ duration: 500, start: 0.8, easing: expoOut }}>
			<ThreeScene {camera} {scene} {width} {height} {onRender} bind:this={sceneElement} />
		</div>
	{/await}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #00000000;
		z-index: 1;
	}
</style>
