export function maxProfit(prices: number[]): number {
	prices.push(0)
	let res = 0

	let stack = [prices[0]]

	const len = prices.length
	for (let i = 0; i < len; i++) {
		const num = prices[i]
		if (num < stack[0]) {
			if (stack.length >= 2) {
				res = Math.max(res, stack.pop() - stack[0])
			}
			stack = [num]
		} else if (num > stack[stack.length - 1]) {
			stack.push(num)
		} else if (stack.length >= 2) {
			res = Math.max(res, stack.pop() - stack[0])
			stack.push(num)
		}
	}

	return res
}

// export function maxProfit(prices: number[]): number {
// 	let res = 0

// 	const len = prices.length
// 	for (let i = 0; i < len; i++) {
// 		const min = prices[i]
// 		for (let j = i; j < len; j++) {
// 			if (prices[j] > min) {
// 				const diff = prices[j] - min
// 				res = Math.max(diff, res)
// 			}
// 		}
// 	}

// 	return res
// }
