export function maxSubArray(nums: number[]): number {
	if (!nums.length) return 0

	let total = nums[0],
		prev = nums[0]
	for (let i = 1; i < nums.length; i++) {
		prev = Math.max(prev + nums[i], nums[i])
		total = Math.max(total, prev)
	}

	return total
}
