// 方法可行，但是超时了
export const search = function (nums: number[], target: number): number {
	if (nums.length === 0) return -1
	if (nums.length === 1) return nums[0] === target ? 0 : -1
	// 普通二分法，首先判断中位数，如果中位数大于目标，向左， r = mid，l不动
	// 如果中位数小于目标，向右, l = mid， r 不动

	// 二分法，首先判断中位数，l < mid 左侧有序，如果 l > num，向右，l < num < mid，向左
	// 如果 mid < r ，右侧有序，如果 mid > num，向左，mid < num < r，向右

	let l = 0,
		r = nums.length - 1
	let mid = Math.floor((r - l) / 2)

	while (l < r) {
		if (nums[mid] === target) return mid
		if (nums[l] === target) return l
		if (nums[r] === target) return r

		const isLeftSort = nums[l] < nums[mid]
		const isRightSort = nums[mid] < nums[r]

		if (
			(isLeftSort && nums[l] > target) ||
			(isRightSort && nums[mid] < target && target < nums[r])
		) {
			l = mid
		} else if (
			(isLeftSort && nums[l] < target && target < nums[mid]) ||
			(isRightSort && nums[mid] > target)
		) {
			r = mid
		} else {
			return -1
		}

		mid = Math.floor((r - l) / 2) + l
	}

	return -1
}
