export function addBinary(a: string, b: string): string {
	let res = ''
	let carry = 0

	const al = a.length,
		bl = b.length
	const max = Math.max(al, bl)
	const ai = al > bl ? 0 : al - bl
	const bi = bl > al ? 0 : bl - al

	for (let i = max - 1; i >= 0; i--) {
		let sum = (+a[i + ai] || 0) + (+b[i + bi] || 0) + carry

		if (sum >= 2) {
			res = sum - 2 + res
			carry = 1
			if (i === 0) {
				res = '1' + res
			}
		} else {
			carry = 0
			res = sum + res
		}
	}

	return res
}
