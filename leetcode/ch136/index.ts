export function singleNumber(nums: number[]): number {
	if (!nums.length) return undefined

	let res = nums[0]
	let o: any = {
		[res]: 1,
	}
	let set = new Set([res])
	for (let i = 1; i < nums.length; i++) {
		const num = nums[i]
		if (o[num]) {
			set.delete(num)
		} else {
			o[num] = 1
			set.add(num)
		}
	}

	return [...set][0]
}
