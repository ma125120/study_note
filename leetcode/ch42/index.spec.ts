import { trap } from './index'

test(`接雨水 1`, () => {
	expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toStrictEqual(6)
})

test(`接雨水 2`, () => {
	expect(trap([4, 2, 0, 3, 2, 5])).toStrictEqual(9)
})
