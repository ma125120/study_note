import { myPow } from './index'

test(`Pow(x, n) 1`, () => {
	expect(myPow(2, 10)).toStrictEqual('1024.00000')
})

test(`Pow(x, n) 2`, () => {
	expect(myPow(2.1, 3)).toStrictEqual('9.26100')
})
