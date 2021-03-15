import { nextPermutation } from './index'

test(`下一个排列`, () => {
	expect(nextPermutation([1, 2, 3])).toStrictEqual([1, 3, 2])
})

test(`下一个排列`, () => {
	expect(nextPermutation([3, 2, 1])).toStrictEqual([1, 2, 3])
})

test(`下一个排列`, () => {
	expect(nextPermutation([1, 1, 5])).toStrictEqual([1, 5, 1])
})

test(`下一个排列`, () => {
	expect(nextPermutation([1, 3, 2])).toStrictEqual([2, 1, 3])
})

test(`下一个排列`, () => {
	expect(nextPermutation([2, 3, 1])).toStrictEqual([3, 1, 2])
})

test(`下一个排列`, () => {
	expect(nextPermutation([5, 4, 7, 5, 3, 2])).toStrictEqual([5, 5, 2, 3, 4, 7])
})

test(`下一个排列`, () => {
	expect(nextPermutation([4, 2, 0, 2, 3, 2, 0])).toStrictEqual([
		4,
		2,
		0,
		3,
		0,
		2,
		2,
	])
})
