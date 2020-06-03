import { searchRange } from './index'

test(`搜索旋转排序数组`, () => {
	expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4])
})

test(`搜索旋转排序数组`, () => {
	expect(searchRange([5, 7, 7, 8, 8, 10], 68)).toStrictEqual([-1, -1])
})
