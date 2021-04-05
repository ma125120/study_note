export function combinationSum(
	candidates: number[],
	target: number,
): number[][] {
	candidates = candidates.sort((a, b) => a - b)
	let res: number[][] = []
	function dfs(path: number[] = [], prev = 0, idx = 0) {
		if (prev === target) {
			res.push([...path])
			return
		}

		for (let i = idx; i < candidates.length; i++) {
			const r = candidates[i] + prev
			if (r <= target) {
				path.push(candidates[i])
				dfs(path, r, i)

				path.pop()
			} else {
				break
			}
		}
	}

	dfs([], 0, 0)
	return res
}
