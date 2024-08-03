<script lang="ts">
	import type { Camera } from 'three'
	import { T, useTask, useThrelte } from '@threlte/core'
	import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
	import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
	import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass'
	import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
	import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader'
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
