import { maxSubArray } from './index'

test(`最大子序和 1`, () => {
	expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6)
})

test(`最大子序和 2`, () => {
	expect(maxSubArray([1])).toStrictEqual(1)
})

test(`最大子序和 3`, () => {
	expect(maxSubArray([-1])).toStrictEqual(-1)
})

test(`最大子序和 4`, () => {
	expect(maxSubArray([5, 4, -1, 7, 8])).toStrictEqual(23)
})
