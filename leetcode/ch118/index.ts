export function generate(numRows: number): number[][] {
	let res = []

	let prev: number[] = []
	for (let i = 0; i < numRows; i++) {
		const item = []
		for (let j = 0; j <= i; j++) {
			if (i <= 1 || j === 0 || j === i) {
				item.push(1)
			} else {
				item.push(prev[j - 1] + prev[j])
			}
		}
		prev = item
		res.push(item)
	}

	return res
}
