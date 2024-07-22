import { Vector2 } from 'three'

const MOUSE = new Vector2(0, 0)

export function getMousePos(relativeTo?: HTMLElement) {
	if (relativeTo) {
		const rect = relativeTo.getBoundingClientRect()
		const x = MOUSE.x - rect.left
		const y = MOUSE.y - rect.top
		return new Vector2(x, y)
	}
	return MOUSE
}

export function getMousePosNormalized(relativeTo?: HTMLElement) {
	const mouse = MOUSE.clone()
	if (relativeTo) {
		const rect = relativeTo.getBoundingClientRect()
		mouse.y = (mouse.y - rect.top) / rect.height
		mouse.x = (mouse.x - rect.left) / rect.width
	} else {
		mouse.y = mouse.y / window.innerHeight
		mouse.x = mouse.x / window.innerWidth
	}
	return mouse
}

export function setup() {
	document.addEventListener('mousemove', (event) => {
		MOUSE.x = event.clientX
		MOUSE.y = event.clientY
	})
}
