import { jump } from './index'

test(`跳跃游戏 1`, () => {
	expect(jump([2, 3, 1, 1, 4])).toStrictEqual(2)
})

test(`跳跃游戏 2`, () => {
	expect(jump([2, 3, 1, 1, 4, 2, 1, 2, 1, 5])).toStrictEqual(4)
})
