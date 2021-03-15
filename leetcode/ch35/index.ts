export function searchInsert(nums: number[], target: number): number {
	let start = 0
	let end = nums.length - 1
	if ((end === 0 && target === nums[0]) || target < nums[0]) return start
	if (target > nums[end]) return end + 1

	let middle = Math.floor((start + end) / 2)
	let flag = nums[start] <= nums[end]

	while (start < end && nums[middle] !== target) {
		if (target > nums[middle]) {
			start = middle
		} else if (target < nums[middle]) {
			end = middle
		}
		middle = Math.floor((start + end) / 2)

		if (middle === start) {
			if (target > nums[start]) return start + 1
		}
	}

	return middle
}
