function isEqBias(path: string[][], x: number, y: number, n: number) {
	const min = Math.min(x, y)

	// 左上
	for (let i = 1; i <= min; i++) {
		if (path[x - i][y - i] === `Q`) return true
	}
	// 右上
	for (let i = 1; i <= Math.min(x, n - y); i++) {
		if (path[x - i][y + i] === `Q`) return true
	}
}
export function totalNQueens(n: number): number {
	let total = 0
	const cols: boolean[] = []
	const rows: boolean[] = []

	function dfs(path: string[][] = [], count = 0, idx = 0) {
		if (count === n) {
			total++
			return
		}

		for (let i = idx; i < n; i++) {
			// 数量比当前行数小，直接中断
			if (count < i) break

			for (let j = 0; j < n; j++) {
				if (rows[i]) break

				if (!cols[j] && !isEqBias(path, i, j, n)) {
					path[i][j] = `Q`
					rows[i] = true
					cols[j] = true

					dfs(path, count + 1, idx + 1)

					path[i][j] = `.`
					rows[i] = false
					cols[j] = false
				}
			}
		}
	}

	let list = []
	for (let i = 0; i < n; i++) {
		list[i] = []
		for (let j = 0; j < n; j++) {
			list[i][j] = '.'
		}
	}
	dfs(list, 0, 0)

	return total
}
