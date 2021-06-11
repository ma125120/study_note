export function maxProfit(prices: number[]): number {
	let sum = 0
	for (let i = 0; i < prices.length - 1; i++) {
		if (prices[i] <= prices[i + 1]) {
			sum += prices[i + 1] - prices[i]
		}
	}

	return sum
}
