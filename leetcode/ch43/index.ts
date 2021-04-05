const pushNum = (res: number[], idx: number, n: number) => {
	const num = (res[idx] || 0) + n

	if (num >= 10) {
		pushNum(res, idx + 1, parseInt(num / 10 + ''))
	}
	res[idx] = num % 10
}
export function multiply(num1: string, num2: string): string {
	if (num1 === '0' || num2 === '0' || num1[0] === '0' || num2[0] === '0')
		return '0'

	let res: number[] = [],
		l = 0,
		r = 0

	for (let i = num1.length - 1; i >= 0; i--) {
		r = 0
		for (let j = num2.length - 1; j >= 0; j--) {
			pushNum(
				res,
				l + r,
				((num1[i] as unknown) as number) * ((num2[j] as unknown) as number),
			)

			r++
		}
		l++
	}

	let s = ''
	for (let i = res.length - 1; i >= 0; i--) {
		s += res[i]
	}
	return s
}
