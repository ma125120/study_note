import { maxProfit } from './index'

test(` 买卖股票的最佳时机 1`, () => {
	expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(7)
})

test(` 买卖股票的最佳时机 2`, () => {
	expect(maxProfit([1, 2, 3, 4, 5])).toStrictEqual(4)
})

test(` 买卖股票的最佳时机 3`, () => {
	expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0)
})
