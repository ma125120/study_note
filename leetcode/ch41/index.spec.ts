import { firstMissingPositive } from './index'

test(`缺失的第一个正数 1`, () => {
	expect(firstMissingPositive([1, 2, 0])).toStrictEqual(3)
})

test(`缺失的第一个正数 2`, () => {
	expect(firstMissingPositive([3, -1, 1])).toStrictEqual(2)
})

test(`缺失的第一个正数 3`, () => {
	expect(firstMissingPositive([7, 8, 9, 10])).toStrictEqual(1)
})

test(`缺失的第一个正数 4`, () => {
	expect(firstMissingPositive([2, 1, 0])).toStrictEqual(3)
})

test(`缺失的第一个正数 4`, () => {
	expect(firstMissingPositive([4, 1, 3])).toStrictEqual(2)
})
