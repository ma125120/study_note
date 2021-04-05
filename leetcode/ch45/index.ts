export function jump(nums: number[]): number {
	const len = nums.length - 1
	let step = 0,
		max = 0,
		end = 0
	for (let i = 0; i < len; i++) {
		max = Math.max(max, i + nums[i])
		if (i === end) {
			end = max
			step++
		}
	}

	return step
}
