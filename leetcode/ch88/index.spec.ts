import { merge } from './index'

test(`合并两个有序数组`, () => {
	const a = [1, 2, 3, 0, 0, 0],
		b = [2, 5, 6]
	merge(a, 3, b, 3)
	expect(a).toStrictEqual([1, 2, 2, 3, 5, 6])
})

test(`合并两个有序数组`, () => {
	const a = [1],
		b: number[] = []
	merge(a, 1, b, 0)
	expect(a).toStrictEqual([1])
})

test(`合并两个有序数组`, () => {
	const a = [1],
		b = [0, 3]
	merge(a, 1, b, 2)
	expect(a).toStrictEqual([0, 1, 3])
})

test(`合并两个有序数组`, () => {
	const a: number[] = [],
		b = [0, 3]
	merge(a, 0, b, 2)
	expect(a).toStrictEqual([0, 3])
})
