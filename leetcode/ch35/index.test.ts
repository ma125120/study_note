import { searchInsert } from './index'

test(`数组插入位置`, () => {
	expect(searchInsert([1, 3, 5, 6], 5)).toStrictEqual(2)
})

test(`数组插入位置`, () => {
	expect(searchInsert([1, 3, 5, 6], 2)).toStrictEqual(1)
})
// 0 1 3
// 0 1
test(`数组插入位置`, () => {
	expect(searchInsert([1, 3, 5, 6], 7)).toStrictEqual(4)
})

test(`数组插入位置`, () => {
	expect(searchInsert([1, 3, 5, 6], 0)).toStrictEqual(0)
})

test(`数组插入位置: target大于`, () => {
	expect(searchInsert([1], 7)).toStrictEqual(1)
})

test(`数组插入位置: target小于`, () => {
	expect(searchInsert([1], 0)).toStrictEqual(0)
})
