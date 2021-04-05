export function combinationSum2(
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

		let pre = new Set<number>()
		for (let i = idx; i < candidates.length; i++) {
			const n = candidates[i]
			// 以前存在，就跳过这次遍历
			if (pre.has(n)) continue

			const r = n + prev
			if (r <= target) {
				path.push(n)
				pre.add(n)
				dfs(path, r, i + 1)

				path.pop()
			} else {
				break
			}
		}
	}

	dfs([], 0, 0)
	return res
}
