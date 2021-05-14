import { spiralOrder } from './index'

test(`螺旋矩阵 1`, () => {
	expect(
		spiralOrder([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]),
	).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})

test(`螺旋矩阵 2`, () => {
	expect(
		spiralOrder([
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
		]),
	).toStrictEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
})
test(`螺旋矩阵 3`, () => {
	expect(
		spiralOrder([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[14, 15, 16],
		]),

		// [1,2,3,6,9,15,14,7,4,5]
	).toStrictEqual([1, 2, 3, 6, 9, 16, 15, 14, 7, 4, 5, 8])
})
