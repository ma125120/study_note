import { countAndSay } from './index'

test(`外观数列 1`, () => {
	expect(countAndSay(1)).toStrictEqual(`1`)
})
test(`外观数列 2`, () => {
	expect(countAndSay(2)).toStrictEqual(`11`)
})

test(`外观数列 3`, () => {
	expect(countAndSay(3)).toStrictEqual(`21`)
})

test(`外观数列 4`, () => {
	expect(countAndSay(4)).toStrictEqual(`1211`)
})

test(`外观数列 5`, () => {
	expect(countAndSay(5)).toStrictEqual(`111221`)
})
