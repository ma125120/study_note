export function isNumber(s: string): boolean {
	let ints = 0
	let hasE = false
	let hasPoint = false
	const start = s[0] === '-' || s[0] === '+' ? 1 : 0

	for (let i = start; i < s.length; i++) {
		if (/[\d]/.test(s[i])) {
			ints++
			continue
		}

		// 整数还是小数
		if (s[i] === '.' && !hasPoint && !hasE && (i !== s.length - 1 || ints)) {
			hasPoint = true
			continue
		}
		if ((s[i] === '-' || s[i] === '+') && /[eE]/.test(s[i - 1])) {
			continue
		}
		if (
			/[Ee]/.test(s[i]) &&
			!hasE &&
			(/\d/.test(s[i - 1]) || /\d/.test(s[i - 2])) &&
			(/\d/.test(s[i + 1]) || /\d/.test(s[i + 2]))
		) {
			hasE = true
			continue
		}

		return false
	}

	return true
}
