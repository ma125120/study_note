export function isPalindrome(s: string): boolean {
	if (!s) return true

	let left = 0
	let right = s.length - 1

	const reg = /[\da-zA-Z]/
	while (left <= right) {
		if (!reg.test(s[left])) {
			left++
		} else if (!reg.test(s[right])) {
			right--
		} else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
			return false
		} else {
			left++
			right--
		}
	}

	return true
}
