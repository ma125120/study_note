import { plusOne } from './index'

test(`66. 加一`, () => {
	expect(plusOne([1, 2])).toStrictEqual([1, 3])
})

test(`66. 加一`, () => {
	expect(plusOne([1, 9])).toStrictEqual([2, 0])
})
test(`66. 加一`, () => {
	expect(plusOne([9, 9])).toStrictEqual([1, 0, 0])
})
