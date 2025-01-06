export function clamp(value: number, min: number, max: number) {
	return Math.min(Math.max(value, min), max)
}

export function sigmoid(value: number, range: number, coef: number) {
	return (range * 2) / (1 + Math.pow(coef, -value)) - range
}
