export const searchRange = function (nums: number[], target: number): number[] {
	let start = -1,
		end = -1
	if (nums.length === 0 || nums[nums.length - 1] < target) return [start, end]
	if (nums.length === 1) return nums[0] === target ? [0, 0] : [start, end]
	console.time('s')
	let l = 0,
		r = nums.length - 1,
		mid = Math.floor((r + l) / 2)
	let current = -1
	while (l < r) {
		const val = nums[mid]
		if (val === target) {
			current = mid
			break
		}
		if (nums[l] === target) {
			current = l
			break
		}
		if (nums[r] === target) {
			current = r
			break
		}

		if (val > target) {
			r = mid
		} else {
			l = mid
		}

		mid = Math.floor((r + l) / 2)
	}

	// 通过中位数找到了 索引
	if (current === -1) return [-1, -1]

	start = current
	end = current

	while (start > 0) {
		if (nums[start - 1] !== target) break
		start--
	}

	while (end <= nums.length - 1) {
		if (nums[end + 1] !== target) break
		end++
	}
	console.timeEnd('s')
	return [start, end]
}
