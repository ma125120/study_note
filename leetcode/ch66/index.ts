export function plusOne(digits: number[]): number[] {
	let rest = 1

	for (let i = digits.length - 1; i >= 0; i--) {
		const sum = digits[i] + 1
		if (sum > 9) {
			digits[i] = 0
			rest = 1
			if (i === 0) {
				digits.unshift(1)
			}
		} else {
			digits[i] = sum
			break
		}
	}

	return digits
}
