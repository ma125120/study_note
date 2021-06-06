import { climbStairs } from './index'

test(`爬楼梯`, () => {
	expect(climbStairs(2)).toStrictEqual(2)
})

test(`爬楼梯`, () => {
	expect(climbStairs(3)).toStrictEqual(3)
})
test(`爬楼梯`, () => {
	expect(climbStairs(7)).toStrictEqual(21)
})
