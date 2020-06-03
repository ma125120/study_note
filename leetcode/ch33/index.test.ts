import { search } from './index'

test(`搜索旋转排序数组`, () => {
	expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4)
})

test(`搜索旋转排序数组`, () => {
	expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1)
})

test(`搜索旋转排序数组`, () => {
	expect(search([4, 5, 6, 7, 0, 1, 2], 7)).toBe(3)
})

test(`搜索旋转排序数组`, () => {
	expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0)
})

test(`搜索旋转排序数组`, () => {
	expect(search([4, 5, 6, 7, 11, 0, 1, 2, 3], 4)).toBe(0)
})
