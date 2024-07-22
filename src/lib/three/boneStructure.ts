import { Group, Mesh, MeshStandardMaterial, Object3D } from 'three'

export class BoneStructure {
	bones = new Map<string, Object3D>()

	constructor(scene: Group) {
		scene.name = 'structure_root'
		const recurse = (obj: Object3D) => {
			if (this.bones.has(obj.name)) {
				console.warn(`Duplicate bone name: '${obj.name}'`)
			}

			if (obj instanceof Mesh && obj.name.endsWith('_emissive')) {
				const mat = obj.material as MeshStandardMaterial
				mat.emissive.set(0xffffff)
				mat.emissiveMap = mat.map
				mat.emissiveIntensity = 0.5
			}

			this.bones.set(obj.name, obj)
			for (const child of obj.children) {
				recurse(child)
			}
		}
		recurse(scene)
	}

	getBone(name: string) {
		return this.bones.get(name)
	}
}
