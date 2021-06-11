import { maxProfit } from './index'

test(` 买卖股票的最佳时机 1`, () => {
	expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(5)
})

test(` 买卖股票的最佳时机 2`, () => {
	expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0)
})

test(` 买卖股票的最佳时机 3`, () => {
	expect(maxProfit([7, 1, 4, 3, 1])).toStrictEqual(3)
})

test(` 买卖股票的最佳时机 4`, () => {
	expect(maxProfit([2, 4, 1])).toStrictEqual(2)
})

test(` 买卖股票的最佳时机 5`, () => {
	expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toStrictEqual(2)
})
