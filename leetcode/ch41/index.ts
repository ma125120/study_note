export function firstMissingPositive(nums: number[]): number {
	const o: any = {}
	let min = 1
	for (let i = 0; i < nums.length; i++) {
		const n = nums[i]
		if (n <= 0) continue
		o[n] = true
	}

	while (o[min]) {
		min++
	}

	return min
}
