const count = (s: string) => {
	let str = '',
		num = s[0],
		count = 1
	for (let i = 1; i < s.length; i++) {
		if (s[i] === num) {
			count++
		} else {
			str += `${count}${num}`
			num = s[i]
			count = 1
		}
	}

	str += `${count}${num}`
	return str
}

export function countAndSay(n: number): string {
	let s = '1'
	for (let i = 1; i < n; i++) {
		s = count(s)
	}

	return s
}
