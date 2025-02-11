import { Clock, Object3D } from 'three'
import type { BoneStructure } from './three/boneStructure'

type Animator<QueryContext> = (bone: Object3D, q: QueryContext) => void

interface Context {
	time: number
	delta: number
}

const CLOCK = new Clock()

export class Animation<QueryContext> {
	private animators = new Map<string, Animator<QueryContext & Context>>()

	constructor(
		public name: string,
		public bones: BoneStructure,
		private preFrame?: (context: Context) => QueryContext & Context
	) {}

	setBoneAnimator(boneName: string, animator: Animator<QueryContext & Context>) {
		if (this.bones.getBone(boneName) === undefined) {
			throw new Error(`Bone '${boneName}' not found in bone structure!`)
		}
		this.animators.set(boneName, animator)
		return this
	}

	tick(delta: number) {
		let context = {
			time: CLOCK.getElapsedTime(),
			delta
		} as QueryContext & Context

		if (this.preFrame) {
			context = this.preFrame(context)
		}

		for (const [boneName, animator] of this.animators) {
			const bone = this.bones.getBone(boneName)!
			animator(bone, context)
		}
	}
}
