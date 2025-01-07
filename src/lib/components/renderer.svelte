<script lang="ts">
	import type { Camera } from 'three'
	import { T, useTask, useThrelte } from '@threlte/core'
	import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
	import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
	import { SSAARenderPass } from 'three/addons/postprocessing/SSAARenderPass.js'
	import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
	import { GammaCorrectionShader } from 'three/addons/shaders/GammaCorrectionShader.js'
	import { onMount } from 'svelte'

	const { scene, renderer, camera, size } = useThrelte()
	const composer = new EffectComposer(renderer)

	function setupEffectComposer(camera: Camera) {
		composer.passes.forEach(p => composer.removePass(p))
		composer.addPass(new RenderPass(scene, camera))
		composer.addPass(new SSAARenderPass(scene, camera))
		composer.addPass(new ShaderPass(GammaCorrectionShader))
	}

	$: {
		setupEffectComposer($camera)
		composer.setSize($size.width, $size.height)
		renderer.render(scene, $camera)
	}

	const { renderStage, autoRender } = useThrelte()

	onMount(() => {
		let before = autoRender.current
		autoRender.set(false)
		return () => {
			autoRender.set(before)
		}
	})

	useTask(
		delta => {
			composer.render(delta)
		},
		{ stage: renderStage, autoInvalidate: false }
	)
</script>
