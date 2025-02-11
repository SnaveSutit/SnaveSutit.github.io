<script lang="ts">
	import { useThrelte } from '@threlte/core'
	import { interactivity } from '@threlte/extras'

	export let global: boolean = false
	export let container: HTMLDivElement | undefined = undefined

	const { camera } = useThrelte()
	interactivity({
		target: global ? (document as unknown as HTMLElement) : undefined,
		compute(event, state) {
			state.pointer.update(p => {
				if (container) {
					const rect = container.getBoundingClientRect()
					p.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
					p.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
				} else {
					p.x = (event.clientX / window.innerWidth) * 2 - 1
					p.y = -(event.clientY / window.innerHeight) * 2 + 1
				}
				return p
			})

			state.raycaster.setFromCamera(state.pointer.current, $camera)
		}
	})
</script>

<slot />
