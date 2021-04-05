import { combinationSum2 } from './index'

test(`组合总和 1`, () => {
	expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toStrictEqual([
		[1, 1, 6],
		[1, 2, 5],
		[1, 7],
		[2, 6],
	])
})

test(`组合总和 2`, () => {
	expect(combinationSum2([2, 5, 2, 1, 2], 5)).toStrictEqual([[1, 2, 2], [5]])
})
