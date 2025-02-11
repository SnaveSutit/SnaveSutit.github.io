import { base } from '$app/paths';

function importToPaths(imported: Record<string, unknown>) {
	return Object.values(imported).map((path) => base + path);
}

export const ANIMATION_VIDEOS = importToPaths(
	import.meta.glob(`../assets/videos/animations/*.mp4`, { eager: true, import: 'default' })
);

export const FAVORITE_VIDEOS = ANIMATION_VIDEOS;

// export const FAVORITE_VIDEOS = [
// 	...importToPaths(
// 		import.meta.glob(`../assets/videos/animations/Crab Dancing [Math Based].mp4`, {
// 			eager: true,
// 			import: 'default'
// 		})
// 	)
// ];
