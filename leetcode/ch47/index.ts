export function permuteUnique(nums: number[]): number[][] {
	nums.sort((a, b) => a - b)
	const len = nums.length
	const res: number[][] = []
	const flags: Record<string, boolean> = {}

	function dfs(path: number[] = []) {
		if (path.length >= len) {
			res.push([...path])
			return
		}

		for (let i = 0; i < len; i++) {
			// 1, 1', 1''这种情况，则在一开始就会跳过
			// 若使用 flags[i - 1]，则会在叶子节点才会跳过
			if (i > 0 && nums[i] == nums[i - 1] && !flags[i - 1]) continue

			if (!flags[i]) {
				flags[i] = true
				path.push(nums[i])

				dfs(path)

				flags[i] = false
				path.pop()
			}
		}
	}

	dfs([])
	return res
}
