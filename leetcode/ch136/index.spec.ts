import { singleNumber } from './index'

test(`只出现一次的数字 1`, () => {
	expect(singleNumber([2, 2, 1])).toStrictEqual(1)
})

test(`只出现一次的数字 2`, () => {
	expect(singleNumber([4, 1, 2, 1, 2])).toStrictEqual(4)
})
