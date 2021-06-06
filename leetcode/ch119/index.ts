export function getRow(rowIndex: number): number[] {
	let res: number[] = []

	let prev: number[] = []
	for (let i = 0; i <= rowIndex; i++) {
		res = []
		for (let j = 0; j <= i; j++) {
			if (i <= 1 || j === 0 || j === i) {
				res.push(1)
			} else {
				res.push(prev[j - 1] + prev[j])
			}
		}
		prev = res
	}

	return res
}
