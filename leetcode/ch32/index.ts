export const longestValidParentheses = function (s: string): number {
	let count = 0
	let stack = [-1]
	for (let i = 0, len = s.length; i < len; i++) {
		if (s[i] === '(') {
			stack.push(i)
		} else {
			stack.pop()
			if (stack.length === 0) {
				stack.push(i)
			} else {
				count = Math.max(count, i - stack[stack.length - 1])
			}
		}
	}

	return count
}
