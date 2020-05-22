export const longestValidParentheses = function (s: string): number {
	let count = 0
	let has = true
	let temp = s

	while (has) {
		const str = temp.replace('()', (str) => {
			count++
			return ''
		})
		if (str === temp || !str) {
			has = false
		}
		temp = str
	}

	return count * 2
}
