import { combinationSum } from './index'

test(`组合总和 1`, () => {
	expect(combinationSum([2, 3, 6, 7], 7)).toStrictEqual([[2, 2, 3], [7]])
})

test(`组合总和 2`, () => {
	expect(combinationSum([2, 3, 5], 8)).toStrictEqual([
		[2, 2, 2, 2],
		[2, 3, 3],
		[3, 5],
	])
})
