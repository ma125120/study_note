export function lengthOfLastWord(s: string): number {
	if (!s) return 0

	let num = 0
	let isSpace = false
	for (let i of s) {
		if (i === ' ') {
			isSpace = true
		} else if (isSpace) {
			isSpace = false
			num = 1
		} else {
			num += 1
		}
	}

	return num
}
