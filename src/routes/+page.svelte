<script lang="ts" context="module">
	import ThreeScene from '$lib/components/threeScene.svelte'
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
	import {
		type Renderer,
		type Group,
		BoxGeometry,
		Mesh,
		MeshBasicMaterial,
		PerspectiveCamera,
		DirectionalLight,
		OrthographicCamera,
		Scene,
		AmbientLight,
		Object3D,
		Color
	} from 'three'
	import { degToRad } from 'three/src/math/MathUtils'
	import { onMount, type SvelteComponent } from 'svelte'
</script>

<script lang="ts">
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
	camera.position.z = -1
	camera.position.y = 0.95

	const loader = new GLTFLoader()
	let player: Group | undefined
	let head: Object3D | undefined
	let sceneElement: SvelteComponent

	let mouse = { x: 0, y: 0 }

	onMount(async () => {
		const loaded = await loader.loadAsync('models/player.gltf')
		player = loaded.scene
		scene.add(player)
		head = player.getObjectByName('head')
		player.translateY(1)
		player.translateY(-1)

		document.onmousemove = (event) => {
			const element = sceneElement.$$.ctx[2] as HTMLDivElement
			const rect = element.getBoundingClientRect()
			mouse.x = (event.clientX - rect.left) / rect.width
			mouse.y = (event.clientY - rect.top) / rect.height
		}
	})

	function onRender(renderer: Renderer) {
		if (player) {
			player.rotation.y = (mouse.x - 0.5) * 0.25
		}
		if (head) {
			head.lookAt(mouse.x - 0.5, mouse.y + 1.125, 1)
		}
	}
</script>

<div class="container">
	<ThreeScene {camera} {scene} width={300} height={300} {onRender} bind:this={sceneElement} />
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}
</style>
