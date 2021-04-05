export function permute(nums: number[]): number[][] {
	const len = nums.length
	const res: number[][] = []
	const flags: Record<string, boolean> = {}

	function dfs(path: number[] = []) {
		if (path.length >= len) {
			res.push([...path])
			return
		}

		for (let i = 0; i < len; i++) {
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
