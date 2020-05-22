export const nextPermutation = function (nums: number[]): any {
	if (nums.length < 2) {
		return nums
	}
	let len = nums.length
	let i = len - 2
	let k = len - 1
	// 寻找从数组末尾开始的第一个升序的i,j
	while (i >= 0 && nums[i] >= nums[i + 1]) {
		i--
	}
	// 说明数组是降序排列的
	if (i < 0) {
		nums.sort((a, b) => a - b)
		return nums
	}
	// 从数组末尾寻找第一个比nums[i]大的值
	// 注意边界和相等问题
	while (k > i && nums[i] >= nums[k]) {
		k--
	}
	// 交换i，k处的值
	swap(nums, i, k)
	// j后的数据现在肯定是降序排列,转化为升序排列
	// 收尾依次交换位置即可
	let j = i + 1
	while (len > j) {
		swap(nums, j, len - 1)
		len--
		j++
	}

	function swap(nums: number[], i: number, k: number) {
		let temp = nums[i]
		nums[i] = nums[k]
		nums[k] = temp
	}

	return nums
}
