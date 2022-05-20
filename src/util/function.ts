export function selectRandom<T>(array: T[]): T {
	const n = array.length
	return array[Math.round(Math.random() * n)]
}

// ref https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffleArray<T>(array: T[]): T[] {
	const n = array.length
	for (let i = n - 1; i > 0; i--) {
		const j: number = Math.floor(Math.random() * n)
		// [a, b] = [b, a] not applicable
		const val: T = array[j]
		array[j] = array[i]
		array[i] = val
	}
	return array
}
